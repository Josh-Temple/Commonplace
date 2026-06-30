# Research notes: Volume Profile basics

These are research notes for Codex and future editorial review. They are not final reader-facing content and should not be treated as verified trading guidance.

## Research question

How should Lumen explain Volume Profile in a public-safe way as a tool for observing volume traded at price, without presenting it as a standalone trading signal?

## Working summary

Volume Profile is best described as a volume-at-price or activity-at-price charting study. Official platform documentation supports the basic distinction: ordinary volume bars organize volume by time bar, while Volume Profile organizes activity by price level inside a selected range, session, or visible chart window. The tool is descriptive and backward-looking; it can identify where historical activity concentrated, but it does not predict future movement by itself.

## Verified source summaries

- Source type: official platform documentation. TradingView Help Center describes Volume Profile as an indicator that displays trading activity over a specified time period at specified price levels. It also documents user-defined parameters such as rows and time period, POC as the highest-volume level, Value Area as a selected percentage of total volume, and TradingView's data-type differences across stocks, indices, forex/crypto CFDs, and crypto. URL: https://www.tradingview.com/support/solutions/43000502040-volume-profile-indicators-basic-concepts/
- Source type: official platform documentation. TradingView Visible Range Volume Profile documentation says VRVP calculates the profile within the visible range and documents how row layout / row size can mean either number of rows or ticks per row. URL: https://www.tradingview.com/support/solutions/43000703076-visible-range-volume-profile/
- Source type: official platform documentation. Sierra Chart's Volume by Price documentation describes a volume profile graph overlaid for each period, exposes Volume Graph Period Type, Ticks Per Volume Bar, Value Area Percentage, Point of Control, Value Area High, and Value Area Low settings, and documents many period/range choices. URL: https://www.sierrachart.com/index.php?ID=141&page=doc%2FStudiesReference.php
- Source type: official platform documentation. NinjaTrader Order Flow Volume Profile documentation describes volume distribution at each price level over a specified time range. Its help guide defines profile components including POC as the single largest data point, Value Area as a configurable percentage of volume, Range as profile high/low, and Ticks per level aggregation. URL: https://ninjatrader.com/support/helpGuides/nt8/order_flow_volume_profile.htm
- Source type: official platform documentation. NinjaTrader support article updated 2026-05-14 describes the Order Flow+ Volume Profile indicator as displaying volume distribution at each price level over a specified time range. URL: https://support.ninjatrader.com/s/article/Volume-Profile-Order-Flow-on-NinjaTrader-Desktop?language=en_US

## Platform-specific definitions

- TradingView: POC is the price level with the highest traded volume in the chosen time period; VA is the range containing the chosen percentage of volume, typically but not necessarily 70%; VAH and VAL are the highest and lowest included Value Area levels.
- NinjaTrader: POC is the single largest data point in the profile; Value Area is configurable and documented with a 68% default in the help guide.
- Sierra Chart: the Volume by Price study exposes POC, VAH, VAL, Value Area Percentage, period type, visible-bars profiles, fixed-time profiles, session-start profiles, and drawn profiles; the documentation emphasizes settings rather than a single universal display.

## Calculation and display differences

- Profile range matters: session, prior session, visible range, fixed range, composite, and manually drawn profiles can produce different POC / VAH / VAL levels.
- Row size / bin size matters: TradingView documents row layout as either a number of rows or ticks per row; NinjaTrader documents ticks per level; Sierra Chart documents ticks per volume bar. These settings can make HVN/LVN boundaries appear sharper, smoother, shift, or disappear.
- Value Area percentage differs: TradingView commonly discusses 70% but leaves it to user discretion; NinjaTrader documents a configurable Value Area with a 68% default in its help guide; Sierra Chart exposes Value Area Percentage as an input.
- Data source matters: TradingView documents trade volume for stocks, tick volume for indices/forex/crypto CFDs, and base or quote volume for crypto. Therefore FX/CFD profiles should not be described as centralized exchange volume unless the platform/data source specifically supports that claim.
- Lower-timeframe sampling matters: TradingView documents lower-timeframe calculations and special handling for visible range; this means two platforms can draw different profiles from the same visible chart.

## Claims supported by documentation

- Volume Profile displays historical activity by price level inside a specified period or range.
- POC, VA, VAH, and VAL are common platform-supported terms, though exact defaults and calculation details vary.
- Session, visible range, fixed range, and other profile types are supported by platform documentation.
- Row / tick aggregation and selected range can materially change interpretation.
- Some markets/platforms use tick volume or derived volume rather than centralized traded volume.

## Practitioner heuristics not yet verified

- POC as automatic support/resistance.
- VAH/VAL as automatic fade or breakout lines.
- HVN/LVN as reliable directional edges.
- Fast travel as a predictable movement through a thin area.
- Profile shapes as trade signals.
- Any win-rate or probability claim.

## Remaining uncertainty

- No single canonical calculation method exists across all platforms reviewed.
- Ties, lower-timeframe selection, synthetic chart types, session templates, and data feed differences require platform-specific checking.
- This note supports medium-confidence definitions, not high-confidence trading outcomes.
