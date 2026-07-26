import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { generatePacket, parseAsOf, selectPointInTime } from '../scripts/generate-market-packet.mjs';

const baseRelease = JSON.parse(fs.readFileSync('tests/fixtures/economic-release.example.json', 'utf8'));
const release = (vintage, retrieved_at, actual) => ({ ...baseRelease, indicator_name: 'CPI', fixture: undefined, vintage, retrieved_at, actual });

test('as-of excludes future records and selects the latest available vintage', () => {
  const records = [release('initial', '2026-07-25T20:00:00Z', 1), release('revised', '2026-07-25T22:00:00Z', 2), release('future', '2026-07-26T00:00:00Z', 3)];
  const selected = selectPointInTime(records, Date.parse('2026-07-25T23:00:00Z'));
  assert.equal(selected.excludedFuture, 1);
  assert.equal(selected.records.length, 1);
  assert.equal(selected.records[0].vintage, 'revised');
});

test('an initial vintage remains available before a later retrieval', () => {
  const selected = selectPointInTime([release('initial', '2026-07-25T20:00:00Z', 1), release('later', '2026-07-25T22:00:00Z', 2)], Date.parse('2026-07-25T21:00:00Z'));
  assert.equal(selected.records[0].vintage, 'initial');
});

test('timestamps with different UTC offsets compare as absolute instants', () => {
  const selected = selectPointInTime([release('earlier', '2026-07-26T02:00:00Z', 1), release('later', '2026-07-25T23:00:00-05:00', 2)], Date.parse('2026-07-26T05:00:00Z'));
  assert.equal(selected.records[0].vintage, 'later');
});

test('as-of requires an explicit timezone and defaults to documented UTC day end', () => {
  assert.throws(() => parseAsOf('2026-07-25T23:00:00', '2026-07-25'), /explicit UTC offset/);
  assert.equal(parseAsOf(undefined, '2026-07-25').value, '2026-07-25T23:59:59.999Z');
});

test('empty data generates a packet with cutoff metadata and exclusion count', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'packet-'));
  fs.cpSync('data/indicators', path.join(root, 'data/indicators'), { recursive: true });
  fs.cpSync('data/schemas', path.join(root, 'data/schemas'), { recursive: true });
  const result = generatePacket({ root, date: '2026-07-25' });
  assert.match(result.output, /as-of: 2026-07-25T23:59:59\.999Z/);
  assert.match(result.output, /除外された将来取得レコード数: 0/);
  assert.match(result.output, /全区分: データなし/);
  assert.match(path.basename(result.outputFile), /^2026-07-25--as-of-20260725T235959Z\.md$/);
});

function integrationRoot() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'packet-integration-'));
  fs.cpSync('data/indicators', path.join(root, 'data/indicators'), { recursive: true });
  fs.cpSync('data/schemas', path.join(root, 'data/schemas'), { recursive: true });
  const write = (relative, records) => { const file = path.join(root, relative); fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, JSON.stringify(records)); };
  const initial = { ...release('initial', '2026-07-25T18:00:00Z', 1), released_at: '2026-07-25T13:30:00-04:00', period: '2026-06' };
  // released_at has the same absolute UTC date despite its explicit offset.
  const revised = { ...initial, vintage: 'revised', retrieved_at: '2026-08-20T14:00:00-04:00', actual: 2 };
  const unrelated = { ...initial, indicator_id: 'us-core-cpi', indicator_name: 'コアCPI', released_at: '2026-07-26T10:30:00+09:00', retrieved_at: '2026-07-26T02:00:00Z' };
  write('data/releases/2026/07/2026-07-25.json', [initial, unrelated]);
  write('data/releases/2026/08/2026-08-20.json', revised);
  const market = JSON.parse(fs.readFileSync('tests/fixtures/market-snapshot.example.json', 'utf8'));
  write('data/markets/2026/07/2026-07-25.json', { ...market, fixture: undefined, instrument_name: 'ゴールド', observed_at: '2026-07-25T21:00:00Z', retrieved_at: '2026-07-25T21:05:00Z' });
  write('data/markets/2026/07/2026-07-26.json', { ...market, fixture: undefined, instrument_name: 'ゴールド', observed_at: '2026-07-26T21:00:00Z', retrieved_at: '2026-07-26T21:05:00Z', price: 999 });
  return root;
}

test('packet integration selects vintages across dated files without leaking other releases or later markets', () => {
  const root = integrationRoot();
  const early = generatePacket({ root, date: '2026-07-25', asOf: '2026-07-25T23:59:59Z' });
  assert.match(early.output, /vintage initial/); assert.doesNotMatch(early.output, /vintage revised/); assert.doesNotMatch(early.output, /コアCPI/);
  const late = generatePacket({ root, date: '2026-07-25', asOf: '2026-08-25T23:59:59Z' });
  assert.match(late.output, /vintage revised/); assert.match(late.output, /採用された後続vintage件数: 1/); assert.doesNotMatch(late.output, /999/);
  assert.notEqual(early.outputFile, late.outputFile);
});

test('packet integration excludes a cross-file revision retrieved after as-of', () => {
  const root = integrationRoot();
  const result = generatePacket({ root, date: '2026-07-25', asOf: '2026-08-20T17:59:59Z' });
  assert.match(result.output, /vintage initial/); assert.equal(result.revisedVintageCount, 0); assert.ok(result.excludedFuture >= 1);
});
