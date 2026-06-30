# Research notes: 80% rule

These are research notes for Codex and future editorial review. They are not final reader-facing content and should not be treated as verified trading guidance.

## Research question

How should Lumen describe the Market Profile / auction-market "80% rule" in a cautious, public-safe way?

## Working summary

The 80% rule remains a low-confidence practitioner heuristic in this repository. This pass verified Value Area, POC, VAH, and VAL definitions from platform documentation, but it did not find robust empirical evidence that the “80%” label is a verified probability. Reader-facing pages should distinguish the existence of the practitioner rule from proof that the named probability holds.

## Source verification status

- Source type: official platform documentation. TradingView, NinjaTrader, and Sierra Chart support the underlying Value Area / POC terminology and show that Value Area percentage and calculation settings vary. These sources do not verify the 80% rule as an empirical probability.
- Source type: established practitioner reference. Steidlmayer / CBOT and Dalton-style materials remain candidate sources for historical Market Profile background, but direct passages were not reviewed in this pass.
- Source type: informal practitioner article. Many online explanations mention an 80% rule, but informal repetition is not enough to promote the rule above low confidence.

## Where the 80% rule appears

The rule appears in Market Profile / auction-market practitioner discussions as a setup idea: after price auctions outside a prior Value Area and then re-enters and is accepted back inside value, traders may watch for rotation toward the opposite side of value. Lumen should phrase this as “a practitioner rule exists,” not “the probability is verified.”

## Probability claim caution

The number “80%” must not be presented as a verified win rate. Any serious use would require a defined instrument, session template, value-area calculation, re-entry rule, acceptance rule, target definition, invalidation, costs, slippage, and sample period. None of that evidence is included here.

## Interaction with HVN / LVN / internal distribution

Even if price re-enters value, internal structure can interrupt or invalidate the simple idea:

- internal POC may cause rotation or stall;
- internal HVNs can become congestion zones;
- LVNs inside value can create rejection or transition areas;
- a double-distribution value area may not behave like one smooth range;
- a trend day can keep price from rotating across value.

## Unsupported claims

- “80%” as a verified probability.
- automatic movement to opposite VAH/VAL.
- entry at re-entry without confirmation.
- fixed stops or targets.
- universal behavior across futures, stocks, crypto, FX, and CFD profiles.

## Notes for Codex

Keep reader-facing confidence low. Treat the rule as a study prompt and scenario checklist, not financial advice or a trading system.
