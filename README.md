# Lumen

Lumen is a Vercel-ready personal knowledge-base viewer for linked concepts, methods, protocols, rules, index pages, and source notes.

The repository is named **Commonplace**, but the app is called **Lumen**.

## Features in the MVP

- Next.js + TypeScript app router structure
- Markdown content under `content/` with YAML frontmatter
- Static content routes generated from Markdown files
- `[[wikilink]]` and `[[wikilink|label]]` internal links
- Home page, theme/index listing, full page listing, and detail pages
- Related pages, next pages, source notes, tags, status, and confidence indicators
- Android-friendly mobile-first reading layout
- Reader font-size setting with compact, standard, and large text options
- Minimal, border-light visual design that uses whitespace and divider lines instead of boxed cards

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
```

`content/` is for reader-facing pages. `sources/` is for research notes and source summaries, not final user-facing content.

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

`npm run validate` runs TypeScript typechecking, the content validator, and the production Next.js build. The content validator checks required content frontmatter, duplicate page ids, broken `related` / `next` page references, broken `[[wikilink]]` targets, and missing or unsafe `sources/` references.

For a faster content-only check, run:

```bash
npm run validate:content
```

The app is designed to deploy directly on Vercel as a standard Next.js project.
