---
id: rates-market-reading-method
title: 金利市場の読み方
type: method
status: draft
summary: 主要Treasury maturity、curve、real yield、breakevenとpolicy expectationを順に読む。
tags:
  - trading
  - macro
confidence: medium
sources:
  - sources/research-notes/bonds-yields-and-duration.md
  - sources/research-notes/yield-curve-and-term-premium.md
related:
  - yield-curve
  - nominal-and-real-interest-rates
  - macro-context-assessment
next:
  - macro-scenario-matrix
updated: 2026-07-18
---
## Dashboardの順序

1. 2-year: 近いpolicy pathへのrepricing候補。 2. 10-year: 中長期growth/inflation/term premiumの合成。 3. 30-year: 長期不確実性・需給への感応。 4. 2s10s: 10y－2y。 5. 5s30s: 長期側の傾きが必要な時。 6. 10-year TIPS real yield。 7. 5y/10y breakevens。 8. 信頼できるfed-funds futures/OIS expectation。 9. Credit spreadsを補助確認。

絶対levelだけでなく、どのmaturityが、どれほど、どのevent後に動いたかを見ます。ただし「変化が常に水準より重要」でもありません。水準はborrowing costやvaluation constraintに関係します。Curve spreadだけでなく両leg、nominal-real-breakevenの整合、data revisionを記録します。
