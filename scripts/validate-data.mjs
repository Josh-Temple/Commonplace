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
  for (const warning of result.warnings) console.warn(`Warning: ${warning}`);
  const match = relative.match(/^data\/(releases|markets|positioning)\/(\d{4})\/(\d{2})\/(\d{4}-\d{2}-\d{2})\.json$/);
  if (!match) errors.push(`${relative}: expected data/<kind>/YYYY/MM/YYYY-MM-DD.json path.`);
  for (const record of result.records) {
    if (!record || typeof record !== 'object') continue;
    const key = recordKey(record);
    if (globalKeys.has(key)) errors.push(`${relative}: duplicate record key also present in ${globalKeys.get(key)}: ${key}.`);
    else globalKeys.set(key, relative);
  }
}

const baseRef = process.env.DATA_BASE_REF;
const correction = process.env.ALLOW_DATA_CORRECTION === '1';
if (correction && !process.env.DATA_CORRECTION_REASON?.trim()) errors.push('ALLOW_DATA_CORRECTION=1 requires a non-empty DATA_CORRECTION_REASON.');
if (correction && process.env.DATA_CORRECTION_REASON?.trim()) console.warn(`Warning: append-only correction escape hatch enabled: ${process.env.DATA_CORRECTION_REASON.trim()}`);
if (!correction) {
  if (!baseRef) {
    const message = 'DATA_BASE_REF is not set; append-only comparison was not run.';
    if (process.env.CI) errors.push(`${message} CI requires an explicit base revision.`);
    else console.warn(`Warning: ${message} Schema and registry checks continue.`);
  } else {
    try {
      execFileSync('git', ['rev-parse', '--verify', `${baseRef}^{commit}`], { cwd: repoRoot, stdio: 'ignore' });
      const output = execFileSync('git', ['diff', '--name-status', '--find-renames', '--find-copies', `${baseRef}...HEAD`, '--', 'data/releases', 'data/markets', 'data/positioning'], { cwd: repoRoot, encoding: 'utf8' }).trim();
      const violations = output.split('\n').filter(Boolean).filter((line) => !line.startsWith('A\t'));
      if (violations.length) errors.push(`Append-only history violation(s) relative to ${baseRef}: ${violations.join(', ')}. Only new files (A) are allowed; use a new vintage/record.`);
    } catch (error) { errors.push(`Cannot compare append-only history with DATA_BASE_REF=${JSON.stringify(baseRef)}: ${error.message}.`); }
  }
}
if (errors.length) {
  for (const error of errors) console.error(`Error: ${error}`);
  console.error(`\nData validation failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log(`Data validation passed for ${files.length} production file(s) and ${globalKeys.size} record(s).`);
