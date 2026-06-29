---
id: profile-shapes
title: Profile shapes
type: concept
status: draft
summary: D-shape、P-shape、b-shapeを、オークション行動の視覚的な要約として低信頼度で扱う。
tags:
  - trading
  - volume-profile
confidence: low
sources:
  - sources/research-notes/market-profile-and-value-area.md
related:
  - volume-profile
  - value-area
  - volume-profile-distribution-structure
  - high-volume-node
  - low-volume-node
  - volume-profile-checklist
next:
  - poc-reaction-breakout-analysis
updated: 2026-06-28
---

## 要点

Profile shapesは低信頼度の視覚的ヒューリスティックです。形だけでエントリーせず、構造、水平線、Volume Profile水準、invalidationと合わせて読みます。

## 概要

Profile shapesは、Volume ProfileやMarket Profileの分布形状から、そのセッションのオークション行動を大まかに要約するヒューリスティックです。

形だけでエントリーを決めるものではありません。

## D-shape

D-shapeは、中央に活動が集まり、上下に比較的均整の取れた分布になる形です。

実務上は、バランス、レンジ、回転的な動き、買い手と売り手の二方向取引と解釈されることがあります。受容やバランスと整合的な形として見られますが、次の方向を保証しません。

## P-shape

P-shapeは、下から上へ動いたあと、高い位置で出来高が膨らむような形として語られることがあります。

実務上は、ショートカバーや上方向へのオークション後の遅いバランスとして解釈されることがあります。ただし、文脈なしに強気サインと決めつけるのは危険です。

## b-shape

b-shapeは、上から下へ動いたあと、低い位置で出来高が膨らむような形として語られることがあります。

実務上は、ロング清算や下方向へのオークション後の遅いバランスとして解釈されることがあります。ただし、文脈なしに弱気サインと決めつけるのは危険です。

## Context first

Profile shapeの解釈は低信頼度の実務ヒューリスティックです。

上位足のトレンド、前日Value Area、セッションタイプ、重要水平線、ニュース、出来高、[[point-of-control|POC]]との位置関係を組み合わせて読みます。


## 解釈が弱くなる条件

- Profile rangeが小さすぎ、形の差に意味が出にくい。
- Data sourceが poor で出来高またはtick情報が信頼しづらい。
- Session boundaryが任意で、区切り方により形が変わる。
- Newsで一回限りの分布が生じた。
- Higher timeframe contextが形の読みと矛盾する。

形は最後に見る補助メモであり、Context、Structure、Level、Invalidationより優先しません。

## 関連ノート

- [[poc-reaction-breakout-analysis]]
- [[value-area-close-analysis]]
- [[volume-profile-checklist]]
- [[volume-profile-distribution-structure]]
