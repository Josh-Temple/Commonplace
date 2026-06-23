#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const repoRoot = process.cwd();
const contentRoot = path.join(repoRoot, 'content');
const sourceRoot = path.join(repoRoot, 'sources');

const requiredFields = [
  'id',
  'title',
  'type',
  'status',
  'summary',
  'tags',
  'confidence',
  'sources',
  'related',
  'next',
  'updated',
];
const allowedTypes = new Set(['concept', 'method', 'protocol', 'rule', 'index', 'output']);
const allowedConfidence = new Set(['low', 'medium', 'high']);

/** @type {{file:string,message:string}[]} */
const errors = [];
/** @type {{file:string,message:string}[]} */
const warnings = [];

function walkMarkdownFiles(directory) {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkMarkdownFiles(fullPath);
    if (entry.isFile() && entry.name.endsWith('.md')) return [fullPath];
    return [];
  });
}

function relativePath(filePath) {
  return path.relative(repoRoot, filePath).split(path.sep).join('/');
}

function addError(file, message) { errors.push({ file: relativePath(file), message }); }
function addWarning(file, message) { warnings.push({ file: relativePath(file), message }); }

function isNonEmptyString(value) { return typeof value === 'string' && value.trim().length > 0; }
function isStringArray(value) { return Array.isArray(value) && value.every((item) => typeof item === 'string'); }
function isDateOnly(value) {
  if (value instanceof Date) return !Number.isNaN(value.getTime());
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
}
function hasParentTraversal(value) { return value.split(/[\\/]+/).includes('..'); }

const files = walkMarkdownFiles(contentRoot);
if (files.length === 0) {
  errors.push({ file: 'content/', message: 'No Markdown content files found.' });
}

const pages = files.map((file) => {
  const raw = fs.readFileSync(file, 'utf8');
  const parsed = matter(raw);
  return { file, data: parsed.data, body: parsed.content };
});

const ids = new Map();
for (const page of pages) {
  for (const field of requiredFields) {
    if (!(field in page.data)) addError(page.file, `Missing required frontmatter field: ${field}.`);
  }

  if (!isNonEmptyString(page.data.id)) addError(page.file, 'Field "id" must be a non-empty string.');
  if (!isNonEmptyString(page.data.title)) addError(page.file, 'Field "title" must be a non-empty string.');
  if (!isNonEmptyString(page.data.status)) addError(page.file, 'Field "status" must be a non-empty string.');
  if (!isNonEmptyString(page.data.summary)) addError(page.file, 'Field "summary" must be a non-empty string.');

  if (!isNonEmptyString(page.data.type) || !allowedTypes.has(page.data.type)) {
    addError(page.file, `Field "type" must be one of: ${Array.from(allowedTypes).join(', ')}.`);
  }

  if (!isNonEmptyString(page.data.confidence) || !allowedConfidence.has(page.data.confidence)) {
    addError(page.file, `Field "confidence" must be one of: ${Array.from(allowedConfidence).join(', ')}.`);
  }

  for (const arrayField of ['tags', 'sources', 'related', 'next']) {
    if (!isStringArray(page.data[arrayField])) addError(page.file, `Field "${arrayField}" must be an array of strings.`);
  }

  if (!isDateOnly(page.data.updated)) addError(page.file, 'Field "updated" must be a YYYY-MM-DD date.');

  if (isNonEmptyString(page.data.id)) {
    if (ids.has(page.data.id)) addError(page.file, `Duplicate id "${page.data.id}" also used by ${relativePath(ids.get(page.data.id))}.`);
    else ids.set(page.data.id, page.file);
  }
}

for (const page of pages) {
  const sourceRefs = isStringArray(page.data.sources) ? page.data.sources : [];
  for (const source of sourceRefs) {
    if (!source.startsWith('sources/')) addError(page.file, `Source reference must start with "sources/": ${source}.`);
    if (hasParentTraversal(source)) addError(page.file, `Source reference must not contain parent traversal: ${source}.`);
    const sourcePath = path.resolve(repoRoot, source);
    if (!sourcePath.startsWith(sourceRoot + path.sep) && sourcePath !== sourceRoot) {
      addError(page.file, `Source reference resolves outside sources/: ${source}.`);
    } else if (!fs.existsSync(sourcePath)) {
      addError(page.file, `Source reference does not exist: ${source}.`);
    }
  }

  for (const refField of ['related', 'next']) {
    const refs = isStringArray(page.data[refField]) ? page.data[refField] : [];
    for (const id of refs) {
      if (!ids.has(id)) addError(page.file, `Broken ${refField} page reference: ${id}.`);
    }
  }

  const wikilinks = page.body.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g);
  for (const match of wikilinks) {
    const id = match[1].trim();
    if (!ids.has(id)) addError(page.file, `Broken wikilink reference: ${id}.`);
  }

  if (!page.body.trim()) addWarning(page.file, 'Content body is empty.');
}

for (const warning of warnings) console.warn(`Warning: ${warning.file}: ${warning.message}`);

if (errors.length > 0) {
  for (const error of errors) console.error(`Error: ${error.file}: ${error.message}`);
  console.error(`\nContent validation failed with ${errors.length} error(s).`);
  process.exit(1);
}

console.log(`Content validation passed for ${files.length} page(s).`);
