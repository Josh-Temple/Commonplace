# AGENTS.md

This repository contains Lumen, a Vercel-ready Next.js reading app for a personal knowledge base.

## Startup checklist

Before starting work, Codex should:

1. Read `AGENTS.md`.
2. Read `Handoff.md`.
3. Read the current monthly file under `handoffs/YYYY-MM.md` when recent detailed work history is relevant.
4. Check open GitHub Issues before selecting work.
5. Prefer working from GitHub Issues unless the user gives a direct instruction in chat.
6. Identify whether the task is:
   - app development
   - content writing
   - source integration
   - link maintenance
   - validation
   - documentation
   - review or cleanup
7. After completing work:
   1. Update `Handoff.md` only when the current repository state, active limitations, validation status, or recommended next tasks change.
   2. Add the detailed work record to `handoffs/YYYY-MM.md`; create the monthly file if it does not exist.
   3. Keep `Handoff.md` concise and current.
   4. Do not use `Handoff.md` as an append-only historical log.
   5. The monthly record should include:
      - purpose
      - files created, updated, or deleted
      - important implementation or editorial decisions
      - commands run
      - validation results
      - remaining limitations
      - suggested next tasks

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
