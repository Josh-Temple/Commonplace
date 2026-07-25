import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Ajv = require('ajv');
const yaml = require('js-yaml');

export const RECORD_SCHEMAS = {
  economic_release: 'economic-release.schema.json',
  market_snapshot: 'market-snapshot.schema.json',
  positioning_snapshot: 'positioning-snapshot.schema.json',
};

export function loadRegistry(repoRoot) {
  const file = path.join(repoRoot, 'data/indicators/registry.yaml');
  const parsed = yaml.load(fs.readFileSync(file, 'utf8'));
  if (!parsed || !Array.isArray(parsed.indicators)) throw new Error('registry.yaml must contain an indicators array.');
  return new Map(parsed.indicators.map((entry) => [entry.id, entry]));
}

export function createValidators(repoRoot) {
  const ajv = new Ajv({ allErrors: true, jsonPointers: true, format: 'full' });
  return Object.fromEntries(Object.entries(RECORD_SCHEMAS).map(([type, filename]) => {
    const schema = JSON.parse(fs.readFileSync(path.join(repoRoot, 'data/schemas', filename), 'utf8'));
    return [type, ajv.compile(schema)];
  }));
}

export function recordKey(record) {
  if (record.record_type === 'economic_release') return `${record.record_type}|${record.indicator_id}|${record.period}|${record.released_at}|${record.vintage}`;
  if (record.record_type === 'market_snapshot') return `${record.record_type}|${record.instrument_id}|${record.observed_at}|${record.observation_kind}`;
  if (record.record_type === 'positioning_snapshot') return `${record.record_type}|${record.dataset_id}|${record.instrument_id}|${record.report_date}|${record.trader_category}`;
  return `unknown|${JSON.stringify(record)}`;
}

export function validateDocument(document, { registry, validators, file = '<document>', allowFixture = false } = {}) {
  const errors = [];
  const records = Array.isArray(document) ? document : [document];
  if (records.length === 0) errors.push(`${file}: record array must not be empty.`);
  const seen = new Set();
  records.forEach((record, index) => {
    const where = `${file}[${index}]`;
    if (!record || typeof record !== 'object' || Array.isArray(record)) { errors.push(`${where}: record must be an object.`); return; }
    const validator = validators[record.record_type];
    if (!validator) { errors.push(`${where}: unsupported record_type ${JSON.stringify(record.record_type)}.`); return; }
    if (!validator(record)) {
      for (const issue of validator.errors ?? []) errors.push(`${where}${issue.dataPath}: ${issue.message}.`);
    }
    if (record.fixture === true && !allowFixture) errors.push(`${where}: fixture records are forbidden in production data/.`);
    const id = record.indicator_id ?? record.instrument_id;
    if (typeof id === 'string' && !registry.has(id)) errors.push(`${where}: id ${JSON.stringify(id)} is not in registry.yaml.`);
    const retrieved = Date.parse(record.retrieved_at);
    const available = Date.parse(record.released_at ?? record.observed_at ?? record.published_at);
    if (Number.isFinite(retrieved) && Number.isFinite(available) && retrieved < available) errors.push(`${where}: retrieved_at precedes the release/observation/publication time.`);
    if (record.record_type === 'economic_release' && record.consensus !== null && (typeof record.consensus_source !== 'string' || !record.consensus_source.trim())) errors.push(`${where}: consensus requires consensus_source.`);
    const key = recordKey(record);
    if (seen.has(key)) errors.push(`${where}: duplicate record key ${key}.`);
    seen.add(key);
  });
  return { errors, records };
}

export function dataJsonFiles(repoRoot) {
  const roots = ['releases', 'markets', 'positioning'].map((dir) => path.join(repoRoot, 'data', dir));
  const walk = (dir) => fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(path.join(dir, entry.name)) : entry.name.endsWith('.json') ? [path.join(dir, entry.name)] : []) : [];
  return roots.flatMap(walk).sort();
}
