# Lumen

Lumen is a Vercel-ready personal knowledge-base viewer for linked concepts, methods, protocols, rules, index pages, and source notes.

The repository is named **Commonplace**, but the app is called **Lumen**.

## Features in the MVP

- Next.js + TypeScript app router structure
- PWA metadata, web app manifest, install icons, service worker registration, and offline fallback page
- Markdown content under `content/` with YAML frontmatter
- Static content routes generated from Markdown files
- `[[wikilink]]` and `[[wikilink|label]]` internal links
- Minimal Markdown table rendering with horizontal scroll for narrow mobile screens
- Home page with top-level theme-area entry points, grouped theme/index listings, searchable full page listing, and detail pages
- Quiet detail-page headers with secondary page metadata kept lower on the page
- Android-friendly mobile-first reading layout
- Compact `Aa` reader font-size control with a noticeably smaller compact option plus standard and large text options
- Minimal, border-light visual design that uses whitespace and divider lines instead of boxed cards
- Quiet theme index lists that show only titles and summaries in the main navigation UI
- Client-side article search across page titles, summaries, tags, ids, and types
- Deepened source-backed financial-macro system with rates decomposition, gold and equity scenarios, market plumbing, event analysis, and reusable briefs connected to the trading Context workflow

## Content directories

```text
content/
  concepts/
  methods/
  protocols/
  rules/
  indexes/
  outputs/
sources/
  research-notes/
  source-summaries/
data/
  indicators/
  releases/
  markets/
  positioning/
  schemas/
```

`content/` is for reader-facing pages. `sources/` is for research notes and source summaries, not final user-facing content.
`data/` is for append-only, machine-readable macro releases, sparse market observations, positioning snapshots, and their schemas. It contains sourced observations rather than prose or analysis; see [`data/README.md`](data/README.md) for the data model, vintage policy, licensing checks, and operating procedure.

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Validate before deployment

Run the full repository validation command before deployment:

```bash
npm run validate
```

`npm run validate` runs TypeScript typechecking, content validation, macro/market data validation and fixture tests, and the production Next.js build. The content validator checks required content frontmatter, valid `lens` values on index pages, duplicate page ids, broken `related` / `next` page references, broken `[[wikilink]]` targets, and missing or unsafe `sources/` references.

For a faster content-only check, run:

```bash
npm run validate:content
```

Validate only structured observations, or generate a reviewed Markdown packet for a date, with:

```bash
DATA_BASE_REF=origin/main npm run validate:data
npm run market:packet -- --date 2026-07-25 --as-of 2026-07-25T23:59:59-04:00
```

`--as-of` must include `Z` or an explicit UTC offset; when omitted it defaults to `23:59:59.999Z` on `--date`. Only records retrieved by that absolute instant are eligible, and the latest eligible economic vintage is selected per indicator, period, and release time. The packet is written to `sources/market-packets/YYYY-MM-DD.md`. Missing sections remain explicit, and the generator does not infer a market conclusion. Use it with the reader-facing prompt at `content/outputs/macro-market-analysis-prompt.md`; after human review, save any publishable analysis under `content/outputs/` with the standard frontmatter. Before committing real observations, validate registry compatibility and regenerate a historical packet to confirm that a future vintage is excluded. GitHub Actions runs `npm ci` and `npm run validate` on pull requests and pushes to `main`, passing an explicit Git base revision so committed history edits cannot be silently accepted. No external API, automatic analysis, credentials, or unverified live values are part of this MVP.

The app is designed to deploy directly on Vercel as a standard Next.js project. It includes a web app manifest and service worker so supported browsers can install Lumen as a standalone PWA and reuse cached pages when offline.

## Handoff workflow

- Read `Handoff.md` for the current repository state, active limitations, validation status, and recommended next tasks.
- Read `handoffs/YYYY-MM.md` for detailed recent work history.
- Keep the current-state document concise.
- Store detailed completion logs in the monthly archive rather than appending them to `Handoff.md`.
