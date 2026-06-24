# Handoff: Lumen MVP

## Reader font-size setting update — 2026-06-23

The Lumen UI now defaults to a slightly smaller compact reading size and includes a persistent font-size control in the top navigation.

### Commands run

```bash
npm run validate
npm run typecheck
npm run build
```

All three commands passed. npm still emitted the existing non-fatal environment warning about an unknown `http-proxy` config before scripts ran.

### Files changed

- `app/font-size-control.tsx` — added a client-side compact / standard / large font-size setting stored in `localStorage`.
- `app/components.tsx` — added the font-size control to the top navigation.
- `app/layout.tsx` — applies the saved font-size setting before the app renders, defaulting to compact.
- `app/styles.css` — added font-size scaling variables, compact default sizing, and styling for the control.
- `README.md` — documented the reader font-size setting as an MVP feature.
- `Handoff.md` — recorded this UI update for the next session.

### Remaining documentation questions or inconsistencies

- No automated screenshot was captured because this container does not include a browser binary such as Chromium, Google Chrome, or Firefox.
- The setting currently has three fixed choices: compact, standard, and large. If finer control is needed later, replace the segmented buttons with a slider or more levels.

## Project source documentation update — 2026-06-23

The project-level source of truth for Commonplace and Lumen was added at `Commonplace Project Source.md`.

### Commands run

```bash
npm run validate
```

`npm run validate` passed. npm still emitted the existing non-fatal environment warning about an unknown `http-proxy` config before running the validator.

### Files changed

- `Commonplace Project Source.md` — added the stable project source document with usage guidance, project identity, architecture, content rules, `content/outputs/` terminology, instruction priority, public content standard, source-note quality rule, Codex workflow, and templates.
- `Handoff.md` — recorded this documentation update for the next session.

### Remaining documentation questions or inconsistencies

- No prior `Commonplace Project Source.md` file existed in the repository, so this update created the root-level project source document.
- The project source document standardizes on `content/outputs/`; there is no current root-level `outputs/` directory decision.
- Validation exists through `npm run validate`; it checks content structure and references, not the factual accuracy of source notes or reader-facing claims.

## Current validation status — 2026-06-23

Issue #3 content validation workflow was implemented from `/workspace/Commonplace`.

### Commands run

```bash
node scripts/validate-content.mjs
npm run validate
```

Both commands passed. `npm run validate` emitted npm's existing environment warning about an unknown `http-proxy` config before running the validator, but the validator completed successfully.

### Files changed

- `package.json` — added the `validate` script.
- `scripts/validate-content.mjs` — added the content validation workflow.
- `README.md` — documented the content validation command and what it checks.
- `Handoff.md` — refreshed this handoff with the current implementation status.

### Remaining limitations

- The validator intentionally checks repository-local structure and references only; it does not verify the factual accuracy of content claims or source summaries.
- The validator enforces the current required frontmatter fields, accepted page `type` values, and `low` / `medium` / `high` confidence values. If the content model expands, update `scripts/validate-content.mjs` accordingly.
- `npm run typecheck` and `npm run build` were not rerun during this Issue #3 workflow because the requested check was `npm run validate`.


## Design update status — 2026-06-23

The Lumen UI was updated for a more premium mobile reading experience with minimal enclosing borders. The current visual language uses open sections, generous vertical rhythm, soft backgrounds, and divider lines rather than boxed cards.

### Commands run

```bash
npm run validate
npm run typecheck
npm run build
```

All three commands passed. npm still emits the existing non-fatal environment warning about an unknown `http-proxy` config before scripts run.

### Files changed

- `app/styles.css` — redesigned global UI styling to reduce boxed borders and emphasize whitespace/dividers.
- `README.md` — noted the border-light mobile reading design direction.
- `Handoff.md` — documented this design pass.

### Remaining limitations

- No automated browser screenshot was captured because this container does not appear to include a browser binary such as Chromium or Firefox.
- The redesign is CSS-only and preserves existing sample content meaning and page structure.

## What exists now

- Vercel-ready Next.js + TypeScript app named Lumen inside the Commonplace repository.
- Markdown/frontmatter content system under `content/`.
- Source-note directories under `sources/` and a placeholder research note.
- Static content page generation for Markdown files in `content/`.
- Support for `[[wikilink]]` and `[[wikilink|label]]` internal links in rendered page bodies.
- Main reader UI with a mobile-first, border-light visual system:
  - Home page
  - Theme/index page list
  - Full content page list
  - Detail page
  - Related pages section
  - Next links section
  - Source notes section
  - Tags, status, confidence, and updated metadata
- Concise sample content for emotion control and trading workflows.
- `.github/ISSUE_TEMPLATE/content_request.md` for future GitHub Issue-based content requests.
- `AGENTS.md` with content and development rules for future agents.
- `npm run validate` content validation workflow.

## How to run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## How to validate

```bash
npm run validate
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
- Missing wikilinks render as red dashed text rather than creating placeholder pages at runtime; `npm run validate` catches missing wikilink targets before deployment.
- There is no search UI yet.
- The content validator does not verify factual accuracy; it checks shape and repository-local references.
- The sample content is deliberately concise and should be expanded only with verified source material or clearly marked personal rules/speculation.

## Suggested next tasks

1. Run `npm run typecheck` and `npm run build` after content validation before deployment.
2. Add source-note detail pages or a protected/research-only source browser.
3. Improve Markdown support with a parser such as `remark`/`rehype` if richer content is needed.
4. Add search and tag-filter pages for Android reading.
5. Test the deployed UI on an Android device and tune font size, spacing, and link tap targets.
6. Add more real source-backed pages after research notes are created.
