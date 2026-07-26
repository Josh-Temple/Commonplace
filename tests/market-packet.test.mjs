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
});
