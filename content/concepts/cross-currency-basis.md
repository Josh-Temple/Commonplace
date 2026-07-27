---
id: cross-currency-basis
title: クロスカレンシー・ベーシス
type: concept
status: draft
summary: CIP基準から見た通貨間調達費用の差と、政策金利差だけでは見えない制約を説明する。
tags:
  - trading
  - macro
  - fx
confidence: medium
sources:
  - sources/research-notes/cross-currency-basis-and-funding-costs.md
related:
  - covered-and-uncovered-interest-parity
  - fx-forwards-swaps-and-forward-points
  - financial-conditions-and-liquidity
next:
  - fx-volatility-and-carry
updated: 2026-07-27
---
## 要点

**クロスカレンシー・ベーシス（cross-currency basis）**は、FXスワップ等を使う実際の通貨調達価格がカバード金利平価の基準からどれだけずれるかを表す調整です。符号規約は通貨ペアと市場表示で異なるため、必ず定義を確認します。

## なぜ生じるか

ドルまたは円への片方向の調達需要、銀行のバランスシート制約、自己資本・レバレッジ規制、信用と担保、ディーラー仲介能力、取引費用が裁定を妨げ得ます。期末・年末のバランスシート縮小や市場ストレスでも変化し、満期と通貨で大きさが違います。

## 金利差と実際の調達コストが違う理由

政策金利は無担保・担保、期間、信用、契約、証拠金を揃えた価格ではありません。実際の費用には、参照金利、フォワードポイント、ベーシス、信用スプレッド、担保の機会費用、規制・仲介費用、ロール時の市場価格が加わります。したがって表面上の政策金利差だけでキャリーを評価しません。

## 誤用しない

ベーシスは資金需給と制約の観察であり、USD/JPY、株、金の単純な方向シグナルではありません。符号、満期、更新時刻が不明、または価格変化と共通原因を分けられない時は解釈を保留します。
