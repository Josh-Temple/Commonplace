# Handoff: Lumen MVP

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

1. Add a content validation command that checks required frontmatter fields and broken page/source references.
2. Add source-note detail pages or a protected/research-only source browser.
3. Improve Markdown support with a parser such as `remark`/`rehype` if richer content is needed.
4. Add search and tag-filter pages for Android reading.
5. Test the deployed UI on an Android device and tune font size, spacing, and link tap targets.
6. Add more real source-backed pages after research notes are created.
