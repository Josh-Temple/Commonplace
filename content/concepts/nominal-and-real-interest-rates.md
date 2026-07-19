---
id: nominal-and-real-interest-rates
title: 名目金利と実質金利
type: concept
status: draft
summary: 名目利回り、実質利回り、期待インフレ、TIPSとbreakevenを区別する。
tags:
  - trading
  - macro
confidence: medium
sources:
  - sources/research-notes/nominal-real-rates-and-inflation-expectations.md
related:
  - bond-prices-and-yields
  - inflation-and-inflation-expectations
  - gold-rates-dollar-relationship
next:
  - yield-curve
updated: 2026-07-18
---
## 基本関係

名目yieldは通貨単位で表示される利回り、real yieldは購買力変化を考慮した利回りです。事前（ex ante）のreal rateは期待インフレを使い、事後（ex post）は実現インフレを使うため一致しません。

`Nominal yield ≈ real yield + expected inflation + other premiums`

これは考えるための概念分解であり、完全な価格式ではありません。

## TIPSとbreakeven

米国TIPSは元本がCPIに連動するTreasuryです。同年限の名目Treasury yieldとTIPS real yieldの差がbreakeven inflationです。市場が両者を無差別とする概算インフレ率ですが、inflation risk premium、liquidity差、需給、indexation lag等を含み、純粋な予測ではありません。

## トレード文脈

Real yieldは、利息を生まない資産や遠い将来cash flowを持つ資産に対するopportunity costの一要素です。ただし「real yield上昇＝金や株が必ず下落」ではありません。成長期待、risk premium、ドル、既織り込み、需給が同時に変わります。名目と実質のどちらが動き、breakevenがどう変わったかを分けて観察します。
