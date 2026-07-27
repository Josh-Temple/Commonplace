---
id: pre-trade-macro-checklist
title: トレード前マクロチェックリスト
type: protocol
status: draft
summary: 30秒版と3分版でmacro relevance、event risk、rates、dollarを確認する。
tags:
  - trading
  - macro
confidence: medium
sources:
  - sources/research-notes/financial-macro-for-trading-overview.md
related:
  - macro-context-assessment
  - pre-trade-context-checklist
  - major-macro-event-checklist
  - carry-trade-risk-checklist
next:
  - pre-trade-context-checklist
updated: 2026-07-27
---
## 目的

資産、時間軸、イベント距離に応じてマクロの関連性を短く判定します。全短期取引への必須項目ではありません。

## 30秒版

- 近い主要イベントと公式時刻はあるか。
- 2年・10年は同方向か、どちらが主導か。
- 資産に関係する実質金利、ドル、信用は確認しているか。
- 一文の解釈と一つの矛盾を言えるか。
- 資産自身は重要水準で確認しているか。
- 説明不能ならマクロを無視できるか。

## 3分版

1. 資産と時間軸を決める。
2. 成長・インフレ・政策経路の変化を一文にする。
3. 名目金利を実質とブレークイーブンへ分ける。
4. 2s10s等は両脚を見る。
5. ドル高・安の原因を相対金利かリスクか問う。
6. IG/HY信用、ボラティリティ、利益・リスク選好を確認する。
7. Scenario A/B、反証、価格要件を書く。

## 為替・国際資金フロー分岐

円、国際株、信用、金が対象で、時間軸とイベント距離に意味がある場合だけ[[carry-trade-risk-checklist]]を使います。金利差、複数円クロス、FXボラティリティ、調達条件を確認し、証拠品質が低ければ省略します。円だけの動きや、現在ポジションの根拠なき推計を取引理由にしません。

## ゴールド分岐

- 2年・10年の名目利回り。
- 10年実質利回り。
- 5年・10年ブレークイーブン。
- DXYだけでなくドルの原因。
- CPI、FOMC、入札等のイベント。
- 金が水平線と構造で確認・拒否したか。

## S&P 500分岐

- 2年と10年、カーブの両脚。
- 実質金利とterm-premium候補。
- IG/HY信用スプレッド。
- 利益改定、指数の広がり、リスク選好。
- ドルと多国籍利益、主要イベント。
- S&P 500、均等加重、小型株の確認。

## 明示的なスキップ規則

**マクロ解釈を一文で言えない、またはクロスアセット変数の衝突に明確な理由がないなら、マクロを取引の正当化に使いません。**

価格がレンジ・Value Area中央、重要水準がない、無効条件が置けない場合も[[pre-trade-context-checklist]]へ戻って見送ります。
