# Current Handoff

## Repository purpose

Commonplace contains **Lumen**, a Vercel-ready Next.js personal knowledge-base reader for linked concepts, methods, protocols, rules, outputs, index pages, and source-backed notes. The app is optimized for static content browsing and Android-friendly reading.

## Current state

- The app uses the Next.js App Router with static Markdown-backed content routes.
- Reader-facing pages live under `content/` and are rendered through Lumen routes, search, index pages, wikilinks, and mobile-first article layouts.
- Research notes and source summaries live under `sources/` and are used as evidence/supporting material, not as final reader-facing pages.
- The app includes PWA metadata, install icons, service worker registration, and an offline fallback page.
- Current navigation includes a home page, theme/index listings, article search, detail pages, quiet metadata treatment, Markdown table support, and reader font-size controls.
- The current branch is `work`; the latest local merge shown during this handoff pass was PR #21, `agent/theravada-precepts-and-vinaya`.

## Content architecture

- `content/concepts/`: explanatory pages for concepts such as cognitive biases, Buddhist doctrine, mindfulness mechanisms, and Volume Profile structures.
- `content/methods/`: practice or analysis methods, including meditation methods, trading analysis workflows, ACT/MBSR methods, and judgment-training methods.
- `content/protocols/`: repeatable checklists and practice routines for mindfulness, trading, decision review, and Theravada-inspired daily practice.
- `content/rules/`: compact rule pages such as trading rules, judgment rules, mindfulness practice boundaries, and the eighty percent rule.
- `content/indexes/`: major reader-facing entry points and thematic maps.
- `content/outputs/`: printable or reusable artifacts such as check cards and review templates.
- `sources/research-notes/`: source-grounded research notes for content development.
- `handoffs/`: monthly historical work logs. Read `handoffs/README.md` for the handoff workflow.

Reader-facing material belongs in `content/`. Source notes and research extraction belong in `sources/`. Do not promote source-note claims into reader-facing pages unless the cited source material supports them.

## Current major content areas

Current index pages cover:

- Buddhism basics
- Theravada ethics and precepts
- Theravada meditation
- Meditation and mindfulness
- Emotion control
- Decision-making
- Trading
- Trading process
- Volume Profile

Notable clusters include trading process design, Volume Profile and horizontal-level analysis, decision-making and cognitive-bias training, meditation and mindfulness practice, MBSR/ACT, Buddhist basic concepts, Theravada meditation, and Theravada ethics/precepts/Vinaya.

## Validation status

Latest validation run during the handoff migration on 2026-07-11:

- `npm run validate:content`: passed for 97 content pages.
- `npm run validate`: passed, including TypeScript typechecking, content validation, and production `next build`.
- Production build: passed locally through `npm run validate` on 2026-07-11.
- Vercel: project is structured for Vercel deployment, but no live Vercel deployment was checked in this session.
- GitHub Actions: no workflow file was present under `.github/workflows/` during this session; only the content request issue template was found.
- Known non-fatal warning: `gh` was unavailable in the local container, so open Issues/PRs could not be queried with GitHub CLI during this pass.

## Active limitations

- Open GitHub Issues and open PRs still need verification from an environment with `gh` or connector access; this session could not query them because `gh` is not installed.
- Some content areas intentionally remain source-confidence limited where the underlying notes say materials were checked but insufficient or not fully verified; consult page-level `confidence` fields and source notes before deepening claims.
- Handoff history has now been split, but the June archive preserves the former long `Handoff.md` largely as historical text rather than a normalized database of records.

## Recommended next tasks

1. Verify open GitHub Issues and PRs with GitHub access, then update this current-state handoff only if active priorities change.
2. Continue source-backed refinement of Theravada ethics/precepts/Vinaya pages after checking primary and scholarly materials.
3. Revisit Volume Profile pages for any remaining source-confidence limitations before making stronger claims.
4. Perform an Android/mobile reading QA pass after the next visible UI change.
5. Keep future handoff updates split: concise current-state changes in `Handoff.md`, detailed work records in `handoffs/YYYY-MM.md`.

## Recent work

- 2026-07-11: Split the oversized append-only handoff into a concise current-state document and monthly archives. See [July 2026](handoffs/2026-07.md).
- 2026-06-30: Integrated Buddhism duplicate-role handling and source-note updates. See [June 2026](handoffs/2026-06.md).
- 2026-06-30: Completed a five precepts integration pass. See [June 2026](handoffs/2026-06.md).
- 2026-06-29: Expanded and verified Volume Profile source coverage. See [June 2026](handoffs/2026-06.md).
- 2026-06-28: Completed Android reading/navigation QA and Volume Profile node deepening work. See [June 2026](handoffs/2026-06.md).

## Handoff history

- [July 2026](handoffs/2026-07.md)
- [June 2026](handoffs/2026-06.md)
