# Current Handoff

## Repository purpose

Commonplace contains **Lumen**, a Vercel-ready Next.js personal knowledge-base reader for linked concepts, methods, protocols, rules, outputs, index pages, and source-backed notes. The app is optimized for static content browsing and Android-friendly reading.

## Current state

- The app uses the Next.js App Router with static Markdown-backed content routes.
- Reader-facing pages live under `content/` and are rendered through Lumen routes, search, index pages, wikilinks, and mobile-first article layouts.
- Research notes and source summaries live under `sources/` and are used as evidence/supporting material, not as final reader-facing pages.
- Append-only machine-readable macro releases, sparse market snapshots, positioning records, schemas, and an enforced indicator registry live under `data/`; dated Markdown packets are derived point-in-time using explicit retrieval cutoffs, and Actions validates committed history against an explicit base revision.
- The app includes PWA metadata, install icons, service worker registration, and an offline fallback page.
- Current navigation includes a home page with top-level theme-area entry points, grouped theme/index listings, article search, detail pages, quiet metadata treatment, Markdown table support, and reader font-size controls.

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

Current index pages are grouped by `lens` frontmatter into top-level theme areas. Current index pages cover:

- Buddhism basics
- Theravada ethics and precepts
- Theravada meditation
- Meditation and mindfulness
- Emotion control
- Decision-making
- Trading
- Financial macro for trading
- Trading process
- Volume Profile

Notable clusters include trading process design, Volume Profile and horizontal-level analysis, decision-making and cognitive-bias training, meditation and mindfulness practice, MBSR/ACT, Buddhist basic concepts, Theravada meditation, and Theravada ethics/precepts/Vinaya.

## Validation status

Latest validation run after the PR #26 point-in-time and CI hardening work on 2026-07-25:

- `npm run validate:content`: passed for 123 content pages.
- `npm run validate:data`: passed with no production observations and 16 schema, registry, packet, timezone, and temporary-Git append-only tests passing.
- `npm run validate`: passed, including TypeScript, content/data validation, fixture tests, and production build.
- `git diff --check`: passed.
- `npm ci` passed from the committed lockfile; `DATA_BASE_REF=HEAD npm run validate` passed, including the 131-page build.
- GitHub Issues/PR review threads remain unverifiable because web access returned HTTP 401, `gh` is unavailable, and no remote is configured.
- No UI code changed; no screenshot was required.

## Active limitations

- The data foundation intentionally contains no verified live observations, external API retrieval, automatic ChatGPT analysis, or paid/restricted data.
- Consensus and licensed market data require a source-by-source redistribution review before storage.

- Open GitHub Issues and PRs still need verification from an authenticated environment.
- Directional gold, equity, cross-asset, lead/lag, event-reaction, and auction-impact claims intentionally remain low-confidence and regime-dependent.
- Source notes are claim-mapped evidence records, not exhaustive literature reviews; official methodologies and URLs should be rechecked when revising.
- The widest claim-to-source tables live only in research notes; reader-facing scenario tables are limited to four columns or replaced by stacked cards.

## Recommended next tasks

1. From an authenticated checkout, post the implementation details to and resolve the remaining PR #26 review threads.
2. Review licensing and vintage requirements for one official economic-release source and one legally redistributable market series.
3. Add the first verified observations through a reviewed, append-only pull request and inspect the generated packet.
4. Design automated acquisition only after source terms, idempotency, secret storage, and correction review are documented.
5. Verify open GitHub Issues and PRs with authenticated access.

## Recent work

- 2026-07-25: Hardened PR #26 with point-in-time packet cutoffs/vintage selection, commit-to-commit append-only checks, registry enforcement, direct validation dependencies, tests, and GitHub Actions. See [July 2026](handoffs/2026-07.md).

- 2026-07-25: Added the append-only macro/market data foundation, validation and fixture tests, dated packet generation, reusable analysis prompt, and Lumen entry page. See [July 2026](handoffs/2026-07.md).

- 2026-07-19: Deepened the Financial Macro for Trading cluster, added three missing concepts, an event method, and a public macro brief. See [July 2026](handoffs/2026-07.md).

- 2026-07-18: Added the source-backed Financial Macro for Trading cluster and integrated it into the trading Context workflow. See [July 2026](handoffs/2026-07.md).

- 2026-07-12: Added top-level lens navigation for theme indexes and grouped index routes. See [July 2026](handoffs/2026-07.md).
- 2026-07-11: Split the oversized append-only handoff into a concise current-state document and monthly archives. See [July 2026](handoffs/2026-07.md).
- 2026-06-30: Integrated Buddhism duplicate-role handling and source-note updates. See [June 2026](handoffs/2026-06.md).
- 2026-06-30: Completed a five precepts integration pass. See [June 2026](handoffs/2026-06.md).
- 2026-06-29: Expanded and verified Volume Profile source coverage. See [June 2026](handoffs/2026-06.md).
- 2026-06-28: Completed Android reading/navigation QA and Volume Profile node deepening work. See [June 2026](handoffs/2026-06.md).

## Handoff history

- [July 2026](handoffs/2026-07.md)
- [June 2026](handoffs/2026-06.md)
