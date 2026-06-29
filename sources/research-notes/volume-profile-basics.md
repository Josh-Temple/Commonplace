# Research notes: Volume Profile basics

These are research notes for Codex and future editorial review. They are not final reader-facing content and should not be treated as verified trading guidance.

## Research question

How should Lumen explain Volume Profile in a public-safe way as a tool for observing volume traded at price, without presenting it as a standalone trading signal?

## Working summary

Volume Profile is commonly described as a charting study that organizes traded volume by price level over a selected range or session. This differs from ordinary time-series volume, which shows volume by time bar. Volume-at-price can help a reader identify where activity concentrated, where auctions appeared to pause, and where price moved quickly through areas with less visible activity.

## Key claims

- Volume Profile displays activity by price rather than only by time.
- The selected range, session boundary, instrument, and data source can materially change the profile.
- POC, Value Area, VAH, and VAL are common platform terms, but calculation details can vary by platform.
- FX and CFD platforms may rely on tick volume rather than centralized exchange volume.
- Volume Profile is best presented as a decision-support and observation framework, not a prediction engine.

## Uncertainty / limits

- These notes do not verify a single canonical calculation method across platforms.
- No statistical performance claims are established here.
- Platform documentation should be checked before asserting exact behavior for a specific charting tool.
- Public reader-facing content should avoid personalized trade instructions.

## Candidate sources to verify

- CBOT Market Profile educational materials.
- J. Peter Steidlmayer's Market Profile work.
- James Dalton / Mind Over Markets style Market Profile materials.
- Charting platform documentation for Volume Profile, POC, Value Area, VAH, and VAL definitions.
- Exchange or platform documentation explaining centralized volume versus tick volume.

## Notes for Codex

- Use this note only for cautious definitions and limitations.
- Mark basic Volume Profile definitions as medium confidence when the article also signals platform variability.
- Do not invent citations, page numbers, studies, or verified probabilities.

## TODO: source verification pass

- Verify current charting-platform documentation for Volume Profile, POC, Value Area, VAH, VAL, range/session settings, and tick-volume limitations.
- Preserve Volume Profile as auxiliary observation support unless stronger evidence is added.

## 2026-06-24 content-deepening verification TODOs

These notes remain candidate working notes. Do not promote stronger claims into reader-facing pages until primary or high-quality sources are checked.

### Claims that need verification
- Volume Profile platform documentation.
- POC calculation differences.
- visible range POC versus session POC.
- Value Area calculation differences.

### Candidate source types

- Primary Market Profile / auction market theory texts or official training material.
- Platform documentation for Volume Profile, POC, Value Area, VAH, and VAL calculations.
- Exchange or data-provider documentation where calculation or session definitions matter.
- Risk management, journaling, and trading psychology sources with clear methodology.

### Platform documentation to check

- How POC is calculated and whether ties, tick aggregation, visible range, and session boundaries are handled differently.
- How Value Area percentage is selected and expanded around POC.
- Whether VAH / VAL are based on TPO count, volume, or vendor-specific logic.

### Practitioner heuristics requiring caution

- Horizontal level priority rules.
- POC as support/resistance.
- Profile-shape interpretations such as D / P / b shapes.
- The 80% rule as a named probability claim.

### Claims not yet supported

- Any exact win rate, probability, or guaranteed edge.
- Any personalized position-sizing or trade recommendation.
- Any claim that a single indicator or pattern is sufficient for entry.

## 2026-06-28 nodes / fast-travel verification TODOs

- Verify HVN / LVN terminology across current platform documentation.
- Verify fast travel source quality and avoid treating it as a guaranteed movement claim.
- Verify whether single prints / poor structure are best framed as Market Profile / TPO concepts rather than pure Volume Profile terms.
- Compare platform differences in node calculation, ties, row size, bin size, and visible-range behavior.
- Document session versus composite versus visible-range implications before strengthening reader-facing claims.
