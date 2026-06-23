# Handoff: Lumen MVP

## Current validation status — 2026-06-23

The requested pre-deployment validation was attempted from `/workspace/Commonplace`.

### Commands run

```bash
npm install
npm run typecheck
npm run build
env -u npm_config_http_proxy -u npm_config_https_proxy -u http_proxy -u https_proxy -u HTTP_PROXY -u HTTPS_PROXY npm install
npm install --registry=https://registry.npmjs.org/ --fetch-timeout=30000 --fetch-retries=1
```

### Build result

Build did **not** pass in this environment because dependencies could not be installed.

- `npm install` failed with `E403 403 Forbidden` while fetching `@types/node` from `https://registry.npmjs.org/@types%2fnode`.
- The environment also reports npm proxy configuration warnings for `http-proxy` / `https-proxy`.
- Retrying without proxy environment variables did not complete in a reasonable time and was stopped.
- Retrying with an explicit npm registry still failed with the same `E403`.
- `npm run typecheck` failed because dependency/type packages such as `next`, `@types/node`, and React JSX types were unavailable.
- `npm run build` failed because the `next` binary was unavailable.

No source-code changes were made to work around missing dependencies because the observed failures are consistent with an install/network policy limitation rather than an application code issue.

### Remaining limitations before Vercel deployment

- Re-run validation in an environment that can install packages from npm, or commit a lockfile generated from a successful install.
- After dependencies are installed, run:

```bash
npm run typecheck
npm run build
```

- If those commands reveal application errors after dependencies are present, fix them with the smallest safe changes and preserve content meaning.

## What was created

- Initialized a Vercel-ready Next.js + TypeScript app named Lumen inside the Commonplace repository.
- Added a Markdown/frontmatter content system under `content/`.
- Added source-note directories under `sources/` and a placeholder research note.
- Implemented static content page generation for Markdown files in `content/`.
- Added support for `[[wikilink]]` and `[[wikilink|label]]` internal links in rendered page bodies.
- Added the main reader UI:
  - Home page
  - Theme/index page list
  - Full content page list
  - Detail page
  - Related pages section
  - Next links section
  - Source notes section
  - Tags, status, confidence, and updated metadata
- Added concise sample content for emotion control and trading workflows.
- Added `.github/ISSUE_TEMPLATE/content_request.md` for future GitHub Issue-based content requests.
- Added `AGENTS.md` with content and development rules for future agents.

## How to run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## How to validate

```bash
npm run typecheck
npm run build
```

## How content pages are structured

Reader-facing pages live under `content/` and use Markdown with YAML frontmatter:

```yaml
id: self-distancing
title: 自己距離化
type: concept
status: draft
summary: 自分の感情や思考を少し離れた視点から観察する認知的技法。
tags:
  - emotion
  - metacognition
confidence: medium
sources:
  - sources/research-notes/self-distancing.md
related:
  - metacognition
  - anger-regulation-training
next:
  - anger-regulation-training
updated: 2026-06-23
```

Important conventions:

- `id` is the stable wikilink target.
- `related` and `next` contain page ids, not file paths.
- `sources` contains paths under `sources/`.
- Body text can link internally with `[[page-id]]` or `[[page-id|label]]`.
- `content/` is final reader-facing material.
- `sources/` is research/source-note material and should not be treated as final UI content.

## Known limitations

- Markdown rendering is intentionally minimal and supports headings, paragraphs, ordered lists, unordered lists, and wikilinks. It does not yet support full GitHub-Flavored Markdown tables, blockquotes, code fences, or nested lists.
- Source notes are listed on content detail pages but do not have their own rendered detail route.
- Missing wikilinks render as red dashed text rather than creating placeholder pages.
- There is no search UI yet.
- There is no content validation script yet to enforce frontmatter shape or detect broken `related`, `next`, and `sources` references.
- The sample content is deliberately concise and should be expanded only with verified source material or clearly marked personal rules/speculation.

## Suggested next tasks

1. Restore npm registry access or generate `package-lock.json` in an environment with registry access.
2. Re-run `npm install`, `npm run typecheck`, and `npm run build`.
3. Add a content validation command that checks required frontmatter fields and broken page/source references.
4. Add source-note detail pages or a protected/research-only source browser.
5. Improve Markdown support with a parser such as `remark`/`rehype` if richer content is needed.
6. Add search and tag-filter pages for Android reading.
7. Test the deployed UI on an Android device and tune font size, spacing, and link tap targets.
8. Add more real source-backed pages after research notes are created.
