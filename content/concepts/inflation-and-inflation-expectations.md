---
id: inflation-and-inflation-expectations
title: インフレとインフレ期待
type: concept
status: draft
summary: 主要物価指標、実現値と期待、base effectとsurpriseを区別する。
tags:
  - trading
  - macro
confidence: medium
sources:
  - sources/research-notes/nominal-real-rates-and-inflation-expectations.md
  - sources/research-notes/macro-data-and-market-reactions.md
related:
  - nominal-and-real-interest-rates
  - monetary-policy-expectations
  - macro-data-surprises
next:
  - monetary-policy-expectations
updated: 2026-07-18
---
## 指標

CPIはBLSが消費者の購入する財・サービス価格の変化を測る指標です。Core CPIは通常foodとenergyを除きます。PCE price indexはBEAの個人消費支出に基づき、構成・weight・scopeがCPIと異なります。Core PCEもfoodとenergyを除く系列です。Producer pricesは生産者側の販売価格を捉え、消費者物価と同一ではありません。

## 実現と期待

Realized inflationは既に観測された変化、expected inflationは将来についての期待です。期待は[[nominal-and-real-interest-rates|breakeven]]、家計・企業・専門家surveyなどで測りますが、測定法ごとのbiasとpremiumがあります。

- Month-on-month: 前月からの変化。短期の勢いを見やすいがnoiseも大きい。
- Year-on-year: 前年同月比。読みやすいが、比較月の急変（base effect）に左右される。
- Core: trendを見る補助だが、生活費全体を表すheadlineの代替ではない。

## なぜ市場は絶対値だけを見ないか

価格にはconsensus、政策path、positioningが事前に織り込まれます。Actualが高くても予想以下なら反応は緩和的になり得ます。Prior revisionや内訳も解釈を変えます。したがって[[macro-data-surprises]]では「実績－期待」と、そのsurpriseが政策・成長へ何を変えたかを観察します。
