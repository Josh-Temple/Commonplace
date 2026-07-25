#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createValidators, dataJsonFiles, loadRegistry, recordKey, validateDocument } from './data-validation-lib.mjs';

const repoRoot = process.cwd();
const registry = loadRegistry(repoRoot);
const validators = createValidators(repoRoot);
const files = dataJsonFiles(repoRoot);
const errors = [];
const globalKeys = new Map();
for (const file of files) {
  let document;
  try { document = JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (error) { errors.push(`${path.relative(repoRoot, file)}: invalid JSON (${error.message}).`); continue; }
  const relative = path.relative(repoRoot, file).split(path.sep).join('/');
  const result = validateDocument(document, { registry, validators, file: relative });
  errors.push(...result.errors);
  const match = relative.match(/^data\/(releases|markets|positioning)\/(\d{4})\/(\d{2})\/(\d{4}-\d{2}-\d{2})\.json$/);
  if (!match) errors.push(`${relative}: expected data/<kind>/YYYY/MM/YYYY-MM-DD.json path.`);
  for (const record of result.records) {
    if (!record || typeof record !== 'object') continue;
    const key = recordKey(record);
    if (globalKeys.has(key)) errors.push(`${relative}: duplicate record key also present in ${globalKeys.get(key)}: ${key}.`);
    else globalKeys.set(key, relative);
  }
}

if (process.env.ALLOW_DATA_CORRECTION !== '1') {
  try {
    const changed = execFileSync('git', ['diff', '--name-only', '--diff-filter=MD', 'HEAD', '--', 'data/releases', 'data/markets', 'data/positioning'], { cwd: repoRoot, encoding: 'utf8' }).trim();
    if (changed) errors.push(`Tracked history files were modified/deleted instead of appended: ${changed.split('\n').join(', ')}. Use a new vintage/record; documented corrections require ALLOW_DATA_CORRECTION=1.`);
  } catch { /* No HEAD in a new repository: schema and duplicate checks still run. */ }
}
if (errors.length) {
  for (const error of errors) console.error(`Error: ${error}`);
  console.error(`\nData validation failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log(`Data validation passed for ${files.length} production file(s) and ${globalKeys.size} record(s).`);
