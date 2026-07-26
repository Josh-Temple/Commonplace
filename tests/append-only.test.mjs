import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

const validator = path.resolve('scripts/validate-data.mjs');
const source = JSON.parse(fs.readFileSync('tests/fixtures/economic-release.example.json', 'utf8'));
delete source.fixture;
source.indicator_name = 'CPI';
const git = (root, ...args) => execFileSync('git', args, { cwd: root, stdio: 'ignore' });
function repo() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'append-only-'));
  fs.cpSync('data/indicators', path.join(root, 'data/indicators'), { recursive: true });
  fs.cpSync('data/schemas', path.join(root, 'data/schemas'), { recursive: true });
  const file = path.join(root, 'data/releases/2099/02/2099-02-01.json');
  fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, JSON.stringify(source));
  git(root, 'init'); git(root, 'config', 'user.email', 'test@example.invalid'); git(root, 'config', 'user.name', 'Test'); git(root, 'add', '.'); git(root, 'commit', '-m', 'base');
  return { root, file, base: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim() };
}
function validate(root, env = {}) { return spawnSync(process.execPath, [validator], { cwd: root, env: { ...process.env, ...env }, encoding: 'utf8' }); }
function commit(root) { git(root, 'add', '-A'); git(root, 'commit', '-m', 'change'); }

test('append-only comparison permits a newly committed history file', () => {
  const { root, base } = repo();
  const added = path.join(root, 'data/markets/2099/02/2099-02-01.json'); fs.mkdirSync(path.dirname(added), { recursive: true });
  const market = JSON.parse(fs.readFileSync(path.resolve('tests/fixtures/market-snapshot.example.json'))); delete market.fixture; market.instrument_name = 'ゴールド'; fs.writeFileSync(added, JSON.stringify(market)); commit(root);
  assert.equal(validate(root, { DATA_BASE_REF: base, CI: 'true' }).status, 0);
});

for (const [label, mutate] of [
  ['modification', ({ file }) => fs.writeFileSync(file, JSON.stringify({ ...source, notes: 'changed' }))],
  ['deletion', ({ file }) => fs.unlinkSync(file)],
  ['rename', ({ root, file }) => { const target = path.join(root, 'data/releases/2099/02/2099-02-02.json'); fs.renameSync(file, target); }],
]) test(`append-only comparison rejects committed ${label}`, () => {
  const state = repo(); mutate(state); commit(state.root);
  const result = validate(state.root, { DATA_BASE_REF: state.base, CI: 'true' });
  assert.notEqual(result.status, 0); assert.match(result.stderr, /Append-only history violation/);
});

test('CI fails without a base revision', () => {
  const { root } = repo(); const result = validate(root, { CI: 'true', DATA_BASE_REF: '' });
  assert.notEqual(result.status, 0); assert.match(result.stderr, /CI requires an explicit base revision/);
});

test('correction escape hatch requires and reports an explicit reason', () => {
  const state = repo(); fs.writeFileSync(state.file, JSON.stringify({ ...source, notes: 'fixed' })); commit(state.root);
  assert.notEqual(validate(state.root, { CI: 'true', ALLOW_DATA_CORRECTION: '1' }).status, 0);
  const allowed = validate(state.root, { CI: 'true', ALLOW_DATA_CORRECTION: '1', DATA_CORRECTION_REASON: 'Fix malformed committed timestamp' });
  assert.equal(allowed.status, 0); assert.match(allowed.stderr, /escape hatch enabled/);
});
