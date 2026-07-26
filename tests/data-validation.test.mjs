import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { createValidators, loadRegistry, validateDocument } from '../scripts/data-validation-lib.mjs';
const root = process.cwd();
const registry = loadRegistry(root);
const validators = createValidators(root);
const fixture = (name) => JSON.parse(fs.readFileSync(path.join(root, 'tests/fixtures', name), 'utf8'));

test('explicit synthetic fixtures satisfy their schemas', () => {
  for (const name of ['economic-release.example.json', 'market-snapshot.example.json']) {
    const result = validateDocument(fixture(name), { registry, validators, file: name, allowFixture: true });
    assert.deepEqual(result.errors, []);
  }
});

test('invalid data fails with useful errors', () => {
  const invalid = { ...fixture('economic-release.example.json'), actual: '100.1', retrieved_at: '2099-01-01T00:00:00Z', consensus_source: null };
  const { errors } = validateDocument(invalid, { registry, validators, file: 'invalid.json', allowFixture: true });
  assert.ok(errors.some((error) => error.includes('should be number,null')));
  assert.ok(errors.some((error) => error.includes('precedes')));
  assert.ok(errors.some((error) => error.includes('consensus requires')));
});

test('unknown record types and duplicate records fail', () => {
  const valid = fixture('market-snapshot.example.json');
  assert.ok(validateDocument({ record_type: 'opinion' }, { registry, validators }).errors.length > 0);
  assert.ok(validateDocument([valid, valid], { registry, validators, allowFixture: true }).errors.some((error) => error.includes('duplicate')));
});

test('registry rejects mismatched ids, units, frequencies, and asset classes', () => {
  const economic = fixture('economic-release.example.json');
  for (const [change, expected] of [
    [{ indicator_id: 'missing-id' }, 'not in registry'],
    [{ unit: 'usd' }, 'unit'],
    [{ frequency: 'weekly' }, 'frequency'],
  ]) {
    const errors = validateDocument({ ...economic, ...change }, { registry, validators, allowFixture: true }).errors;
    assert.ok(errors.some((error) => error.includes(expected)));
  }
  const market = fixture('market-snapshot.example.json');
  assert.ok(validateDocument({ ...market, asset_class: 'equity' }, { registry, validators, allowFixture: true }).errors.some((error) => error.includes('asset_class')));
});

test('registry permits declared multiple units and production rejects fixtures', () => {
  const percentCpi = { ...fixture('economic-release.example.json'), unit: 'percent', change_basis: 'yoy' };
  assert.deepEqual(validateDocument(percentCpi, { registry, validators, allowFixture: true }).errors, []);
  assert.ok(validateDocument(percentCpi, { registry, validators }).errors.some((error) => error.includes('fixture records are forbidden')));
});
