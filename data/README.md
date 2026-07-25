# Macro and market data

`data/` stores machine-readable observations and provenance. It is deliberately separate from `sources/`, which stores research notes, acquisition conditions, and generated analysis packets, and from `content/`, which stores reader-facing concepts, prompts, and analysis outputs. JSON is evidence, not interpretation: claims such as “bullish gold” belong in an analysis Markdown file, never in a data record.

No live values ship with this foundation. Files under `tests/fixtures/` are visibly synthetic and are not scanned as production data.

## Layout and authority

- `indicators/registry.yaml`: stable ids, metadata, primary-source guidance, and interpretation cautions.
- `releases/YYYY/MM/YYYY-MM-DD.json`: releases grouped by publication date.
- `markets/YYYY/MM/YYYY-MM-DD.json`: sparse daily or event-window observations grouped by observation date.
- `positioning/YYYY/MM/YYYY-MM-DD.json`: weekly snapshots grouped by publication date.
- `schemas/`: JSON Schema contracts for individual records.
- `sources/market-packets/`: derived Markdown; never the authoritative history.

Each daily JSON file is one record or an array of records. There is intentionally no authoritative `latest.json`; any future latest view must be regenerated from history. Store daily closes or a few named pre/post-release observations, not minute or tick history.

## Append-only and vintages

Published history is append-only. An economic record's identity includes indicator, period, release time, and `vintage`. A revision is a new record with a new retrieval time and vintage; retain `previous_initial` and `previous_revised` as they were known for that release. Never replace an initial observation with a revised number.

`npm run validate:data` rejects duplicate identities and tracked modifications/deletions in history directories. For a genuine correction to a malformed committed record, document the reason, preserve the old Git history, and run `ALLOW_DATA_CORRECTION=1 npm run validate:data` only during that reviewed correction. This escape hatch is not for normal revisions.

## Add an indicator

1. Add a unique kebab-case id to `indicators/registry.yaml`.
2. Record display name, classification, frequency, unit, principal official source, and a concise analysis caution.
3. Use only units permitted by the relevant schema; extend schema and tests when a legitimate new unit is needed.
4. Run validation before adding observations.

## Add daily data

1. Verify the value at its primary or licensed source and check redistribution rights.
2. Create the dated path for the release, observation, or publication date.
3. Preserve ISO 8601 timestamps with offsets, retrieval time, source name, and direct source URL.
4. Use `null`, never a guessed value. If consensus is non-null, `consensus_source` is mandatory.
5. For event windows, use `observation_kind` (`pre_release` or `post_release`) and optionally `related_release_id`; keep sampling sparse.
6. Run `npm run validate:data`.

## Validate and build a packet

```bash
npm run validate:data
npm run market:packet -- --date 2026-07-25
```

The generator reads only the three production files for the specified date and writes `sources/market-packets/YYYY-MM-DD.md`. Missing sections remain explicit. Inspect the packet, then give it together with the reusable instructions in `content/outputs/macro-market-analysis-prompt.md` to ChatGPT. Review the response, keep facts/interpretations/hypotheses labeled, and save an approved reader-facing result under `content/outputs/` with complete Commonplace frontmatter. Never paste account details or secrets.

## Corrections and source/license review

Before committing, open the original publication, record its methodology/release calendar, verify timestamp/timezone, and confirm whether repository redistribution is allowed. Prefer a link and metadata when values cannot legally be redistributed. Consensus and exchange feeds often require licenses; “publicly viewable” does not automatically mean redistributable. Put acquisition and licensing research in `sources/research-notes/macro-markets/`.

## Future acquisition options (not implemented)

- Official U.S. APIs: BLS, BEA, Treasury, Labor, and Federal Reserve sources; confirm series-specific revision schedules, rate limits, and terms.
- FRED/public series: convenient for rates and revisions, but retain original-source identity and understand vintage behavior (including ALFRED where relevant).
- API-key services: keep keys only in secret stores; document quotas and licenses. Do not commit `.env` or credentials.
- Consensus: usually survey/vendor intellectual property. Obtain explicit redistribution rights or store only a citation/locally permitted metadata.
- Restricted market data: DXY, index, futures, and real-time feeds can forbid redistribution. Do not place prohibited observations in a public repository.
- Free tiers: may be delayed, rate-limited, revised without vintage access, or unsuitable for event timestamps.
- Cadence: macro releases are event-driven, positioning weekly, and sparse market snapshots daily/event-window.
- GitHub Actions: feasible only for sources whose terms allow automated retrieval and repository storage, using encrypted secrets and append-only pull requests. Add review, validation, idempotency, and license checks first.
