---
id: fx-forwards-swaps-and-forward-points
title: FXフォワード、スワップ、フォワードポイント
type: concept
status: draft
summary: 為替ヘッジとFXスワップ調達、金利差を反映するフォワード価格を区別する。
tags:
  - trading
  - macro
  - fx
confidence: medium
sources:
  - sources/research-notes/fx-forwards-swaps-and-interest-parity.md
related:
  - covered-and-uncovered-interest-parity
  - cross-currency-basis
  - currency-carry-trade
next:
  - covered-and-uncovered-interest-parity
updated: 2026-07-27
---
## 基本用語

- **スポットFX**: 通常の近い受渡日に通貨を交換する取引。
- **フォワード**: 将来日に、今合意したレートで交換する契約。
- **フォワードポイント（forward points）**: フォワードレートとスポットレートの差。主に二通貨の金利差を反映する。
- **FXスワップ**: 近い日と遠い日に逆方向の通貨交換を組み合わせる取引。外貨を担保付きに近い形で調達・運用するために使われる。
- **通貨スワップ**: 高い水準では、より長期に元本と利払いを異通貨で交換する契約。FXスワップとはキャッシュフロー構造が違う。

## 三つの目的を分ける

1. 外貨資産の為替変動をフォワードで**ヘッジする**。
2. 為替を覆わず、金利差と為替変化を受ける**キャリー**を持つ。
3. FXスワップの近い脚と遠い脚で通貨を**調達する**。

同じ契約が別目的に使われるため、建玉だけでは目的を判定できません。

## ポイントは無料利益ではない

CIPの下では金利差がフォワード価格へ概ね織り込まれます。フォワードポイントを受け取っても、反対側の金利・交換条件を負っています。ロールでは満期を延ばすたびにスポット、金利差、ベーシス、スプレッドが更新されます。

個人向けの「スワップポイント」は業者が日々提示する受払額の市場慣行で、機関投資家の総収益や理論上のフォワードポイントと同一ではありません。業者条件、休日調整、手数料、資金コストを含み得ます。
