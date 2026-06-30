# Research notes: Market Profile and Value Area

These are research notes for Codex and future editorial review. They are not final reader-facing content and should not be treated as verified trading guidance.

## Research question

How should Lumen explain Market Profile, Value Area, VAH, VAL, POC, and profile shape concepts while separating definitions from practitioner interpretation?

## Working summary

Market Profile / TPO and Volume Profile are related auction-market tools but are not identical. Market Profile traditionally organizes opportunity or time-at-price through TPO-style displays; Volume Profile organizes traded or available volume at price. Value Area, POC, VAH, and VAL are shared in platform language, but calculations depend on whether the profile is TPO-based, volume-based, session-based, visible-range, fixed-range, or composite.

## Verified Market Profile / TPO background

- Source type: official platform documentation. Sierra Chart separates TPO Profile Chart and Volume by Price studies and supports overlaying independent Volume Profiles on TPO charts, which reinforces that TPO and volume-at-price are related but distinct data views. URL: https://www.sierrachart.com/index.php?ID=141&page=doc%2FStudiesReference.php
- Source type: official platform documentation. NinjaTrader documents Order Flow Volume Profile separately from its broader order-flow tooling and defines volume-profile components by volume distribution at price rather than TPO letters. URL: https://ninjatrader.com/support/helpGuides/nt8/order_flow_volume_profile.htm
- Source type: established practitioner reference, not directly re-verified in this pass. Steidlmayer / CBOT and Dalton-style Market Profile references remain candidate sources for deeper historical attribution and TPO-specific concepts. Do not cite exact page numbers or historical claims until reviewed directly.

## Value Area calculation conventions

- TradingView documents Value Area as the range containing a specified percentage of all volume in the chosen time period, typically 70%, and gives a POC-centered expansion algorithm. URL: https://www.tradingview.com/support/solutions/43000502040-volume-profile-indicators-basic-concepts/
- NinjaTrader documents Value Area as configurable and describes a 68% value-area percentage in its Order Flow Volume Profile help guide. URL: https://ninjatrader.com/support/helpGuides/nt8/order_flow_volume_profile.htm
- Sierra Chart exposes Value Area Percentage as an input and has separate studies for Volume Value Area Lines and Volume by Price. URL: https://www.sierrachart.com/index.php?ID=141&page=doc%2FStudiesReference.php

## POC / VAH / VAL terminology

- POC is platform-supported terminology for the most active or highest-volume point/row in a selected profile.
- VAH and VAL are platform-supported terminology for the high and low boundaries of the calculated Value Area.
- The labels can be medium confidence as definitions, but any trading reaction around them remains a heuristic.

## Market Profile vs Volume Profile

- Market Profile / TPO: usually time/opportunity-at-price oriented.
- Volume Profile: volume/activity-at-price oriented.
- Shared language such as POC and Value Area does not mean identical inputs or identical levels.
- A TPO Value Area and a Volume Value Area can differ on the same session.

## Single prints / poor structure

Single prints and poor structure are more directly Market Profile / TPO concepts because they describe the pattern of TPO opportunities and auction structure. They may visually correspond to low-volume pockets in some cases, but that correspondence should not be treated as exact without a platform-specific check.

## Unsupported or practitioner-only interpretations

- D / P / b shape as a directional signal.
- Close outside value as automatic continuation.
- Re-entry into value as a verified 80% probability.
- Single prints as automatic fill targets.
- HVN/LVN support/resistance behavior.

## Remaining uncertainty

Historical attribution to Steidlmayer, CBOT materials, and Dalton-style literature should be expanded in a future pass using direct sources. This pass verifies platform definitions and calculation variability, not a canonical auction-market theory lineage.
