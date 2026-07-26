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

`npm run validate:data` checks schema, duplicate identities, fixture exclusion, and every record against the registry's permitted record types, units, frequencies, change bases, and asset classes. Names that differ from the registry produce warnings. Append-only enforcement compares committed history to the explicit `DATA_BASE_REF`; only added paths are allowed, while modified, deleted, renamed, and copied/replaced history fails. Locally, omitting the ref emits a visible warning and still runs data checks; CI treats a missing ref as an error.

For a genuine correction to a malformed committed record, document the reason and preserve Git history. The reviewed escape hatch requires both `ALLOW_DATA_CORRECTION=1` and `DATA_CORRECTION_REASON`; it warns whenever enabled and is not for normal revisions. CI leaves it disabled by default.

## Add an indicator

1. Add a unique kebab-case id to `indicators/registry.yaml`.
2. Record display name, permitted `record_types`, `allowed_frequencies`, `allowed_units`, `allowed_change_basis`, applicable `asset_class`, principal official source, and a concise analysis caution.
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
DATA_BASE_REF=origin/main npm run validate:data
npm run market:packet -- --date 2026-07-25 \
  --as-of 2026-07-25T23:59:59-04:00

ALLOW_DATA_CORRECTION=1 \
DATA_CORRECTION_REASON="Fix malformed timestamp in committed record" \
npm run validate:data
```

`--as-of` is an ISO 8601 instant with `Z` or an explicit UTC offset. Records are eligible only when `retrieved_at <= as-of`, compared as absolute epoch times. Among economic records sharing `indicator_id`, `period`, and `released_at`, the generator selects the eligible record with the latest absolute `retrieved_at`; later revisions remain stored but cannot leak into an earlier packet. Without `--as-of`, the cutoff is exactly `YYYY-MM-DDT23:59:59.999Z`. The packet records the cutoff, its timezone, the rule, the latest selected retrieval, and the count excluded for future retrieval.

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

## Continuous validation

`.github/workflows/validate.yml` runs `npm ci` and `npm run validate` for pull requests and pushes to `main`, with full Git history. Pull requests compare to the base SHA and pushes compare to the previous SHA. A missing or all-zero base fails rather than silently skipping append-only enforcement. Before adding the first real series, run the same validation and regenerate a historical packet with an explicit cutoff to inspect point-in-time behavior.
