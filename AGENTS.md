# AGENTS.md

This repository contains Lumen, a Vercel-ready Next.js reading app for a personal knowledge base.

## Content boundaries

- Treat `sources/` as research notes and source summaries. These are not final reader-facing pages.
- Treat `content/` as reader-facing material intended for the Lumen UI.
- Do not invent citations, study details, statistics, or source claims.
- Preserve the distinction between facts, interpretation, speculation, and personal rules.
- Do not destructively rewrite important content unless explicitly requested.
- Prefer adding draft pages or proposals for major changes.

## Content conventions

- Content pages are Markdown files with YAML frontmatter.
- Every content page should include: `id`, `title`, `type`, `status`, `summary`, `tags`, `confidence`, `sources`, `related`, `next`, and `updated`.
- Internal links use `[[page-id]]` or `[[page-id|label]]` wikilink syntax.
- Use concise, mobile-friendly sections and headings.

## Development

- Keep the app mobile-first, optimized for Android reading.
- Prefer static rendering for content pages.
- Run `npm run typecheck` and `npm run build` when changing app code.
