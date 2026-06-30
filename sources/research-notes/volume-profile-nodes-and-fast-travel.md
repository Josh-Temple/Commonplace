---
type: research-note
title: Volume Profile nodes and fast travel
created: 2026-06-28
source_agent: Codex
status: reviewed-draft
evidence_level: medium-for-definitions-low-for-trade-heuristics
review_status: platform-docs-checked-2026-06-29
allowed_use:
  - content_page
  - article_draft
  - tts_script
---

# Research question

How should HVN, LVN, low-volume areas, high-volume areas, and fast travel be explained in a cautious, public-safe Volume Profile knowledge base?

# Working summary

HVN and LVN are supported by at least one official platform help article as Volume Profile node terms, but their exact detection is still profile-setting dependent. TradingView defines HVNs as volume peaks and LVNs as volume valleys in its Volume Profile basic concepts page. Other platform docs reviewed more reliably define POC, Value Area, period/range, and row/tick aggregation than named HVN/LVN automation. Fast travel was not found as a consistently official platform term in the reviewed documentation, so Lumen should treat it as practitioner language for a conditional low-volume transition scenario, not as a verified probability.

# Verified definitions

- Source type: official platform documentation. TradingView documents “High volume nodes (HVN)” as peaks in volume at specific price levels and “Low volume nodes (LVN)” as valleys where volume dropped significantly. It also says Volume Profile is reactive and shows past activity rather than predicting future movement. URL: https://www.tradingview.com/support/solutions/43000502040-volume-profile-indicators-basic-concepts/
- Source type: official platform documentation. NinjaTrader documents POC, Value Area, range, profile row aggregation, and “Ticks per level,” but the reviewed help page did not provide an HVN/LVN terminology section comparable to TradingView. URL: https://ninjatrader.com/support/helpGuides/nt8/order_flow_volume_profile.htm
- Source type: official platform documentation. Sierra Chart's Volume by Price documentation supports the underlying idea of volume peaks/valleys through configurable Volume by Price profiles, POC, VAH, VAL, period types, and row aggregation, but the reviewed source does not establish a universal HVN/LVN calculation rule. URL: https://www.sierrachart.com/index.php?ID=141&page=doc%2FStudiesReference.php
- Source type: informal / platform-adjacent practitioner article. ATAS blog material discusses fixed-range volume profile and high/low activity areas, but it should be treated as practitioner education rather than a canonical standard. URL: https://atas.net/blog/fixed-range-volume-profile-definition-and-trading-strategies/

# Platform terminology comparison

| Platform/source | Terminology verified | What it supports | Limit |
|---|---|---|---|
| TradingView Help Center | HVN, LVN, POC, VA, VAH, VAL | Medium-confidence definitions for nodes and basic levels | Some “what to look for” language is practical guidance, not proof of edge |
| NinjaTrader help guide | POC, Value Area, Range, ticks per level | Medium-confidence profile component and aggregation definitions | HVN/LVN labels not clearly defined in reviewed page |
| Sierra Chart docs | Volume by Price, POC, VAH, VAL, period types, ticks per volume bar | Strong evidence that platform settings change profiles | HVN/LVN not established as universal terms by this page |
| ATAS blog | high/low trading activity areas | Useful practitioner framing | Lower source priority than platform help |

# HVN / LVN calculation differences

HVN/LVN appearance is not fixed. It can change with:

- selected profile range: session, visible range, fixed range, composite, manually drawn range;
- row size / bin size / ticks per row / ticks per level;
- whether rows are total volume, up/down split, delta, or another display mode;
- session template: RTH, ETH, 24-hour, custom session;
- lower-timeframe sampling and data feed;
- market type: centralized futures/stocks versus FX/CFD/tick-volume contexts.

# Fast travel source quality

No reviewed official platform page established “fast travel” as a standardized Volume Profile term. TradingView's LVN discussion uses practical language about quick movement or bounce around low-volume valleys, but that is still educational guidance rather than an empirically verified probability. Lumen should therefore prefer “thin area scenario,” “low-volume transition scenario,” or “possible fast-travel scenario” in reader-facing pages.

# Thin area / low-volume pocket terminology

“Thin area,” “low-volume area,” and “low-volume pocket” are clearer than “fast travel” when describing the observed profile feature. They state what the chart shows: a relative lack of historical activity at a price band. “Fast travel” should describe only the conditional scenario after price enters and is accepted through that area.

# Distribution structure

Single, double, and multiple distribution labels are descriptive summaries of volume/activity clusters separated by thinner areas. These labels are useful for reading structure, but they are not platform-invariant. A visible-range profile can create or erase a double distribution by zooming; row aggregation can merge or split nodes.

# Claims safe for reader-facing pages

- HVN can be defined as a relative volume peak / high-activity price area inside a selected profile.
- LVN can be defined as a relative volume valley / low-activity price area inside a selected profile.
- POC is the highest-volume point/row in a selected profile and is often within or near a prominent HVN.
- Not every HVN is the POC.
- Nodes depend on range, session, row size, data source, and platform settings.
- Thin areas can be used to prepare scenarios, but only with boundary, acceptance, invalidation, and next slowdown areas defined.

# Claims that must remain low confidence

- fast travel as a directional expectation;
- LVN as an automatic breakout path;
- HVN as automatic support/resistance;
- any win-rate, percentage, or probability claim;
- any entry, stop, target, or position-sizing rule;
- profile shapes as predictive signals;
- single prints / poor structure as identical to Volume Profile LVNs.

# Open questions

- Which additional platforms provide official HVN/LVN definitions or automatic node-detection rules?
- Are “fast travel,” “repair,” “poor structure,” and “single prints” best kept in a separate Market Profile/TPO verification map?
- Should Lumen add screenshots or fictional diagrams to show how row size changes node appearance without implying trade advice?
