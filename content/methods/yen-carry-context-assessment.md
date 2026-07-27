---
id: yen-carry-context-assessment
title: 円キャリー文脈評価法
type: method
status: draft
summary: 円調達仮説を金利差、為替、ボラティリティ、資金調達、クロスアセットで反証可能にする。
tags:
  - trading
  - macro
  - fx
confidence: medium
sources:
  - sources/research-notes/yen-funded-carry-trade.md
  - sources/research-notes/carry-trade-unwinds-and-systemic-risk.md
related:
  - yen-funded-carry-trade
  - carry-trade-unwind-analysis
  - macro-context-assessment
next:
  - carry-trade-risk-checklist
updated: 2026-07-27
---
## 目的

キャリーを売買シグナルでなく、資産・時間軸に関連する場合だけ使うContext仮説にします。データが不完全なら確度を下げます。

## 手順

1. 対象資産と時間軸を定義する。
2. 日銀の政策期待を、決定ではなく市場経路の変化として確認する。
3. Fed等、投資先側の政策期待を確認する。
4. 対応する短期金利差と2年国債利回り差を同時刻で比較する。
5. USD/JPYと関連する複数の円クロスを見る。
6. FXの実現・インプライド・ボラティリティを確認する。
7. 信頼できる場合だけ、定義と符号を確認してリスクリバーサルを見る。
8. 関連する満期のクロスカレンシー・ベーシスまたは調達指標を見る。
9. CFTC等のポジショニングを範囲・報告遅れ・グロス/ネットの限界付きで読む。
10. 世界株、信用スプレッド、株・債券ボラティリティを確認する。
11. キャリーを含む説明Aと、含まない説明Bを作る。
12. キャリー解釈と矛盾する観察を先に定義する。
13. 市場構造、重要水準、価格ベースの無効条件へ戻る。

## 記入テンプレート

```text
Asset:                 Time horizon:
Funding-currency hypothesis:
BOJ expectation:       Overseas policy expectation:
Short-rate differential:  Two-year yield differential:
USD/JPY structure:     Other yen crosses:
FX implied volatility: Risk reversal:
Cross-currency basis:  Positioning evidence:
Equity / credit condition:
Scenario A:            Scenario B:
Carry interpretation contradiction:
Price structure:       Key level:
Invalidation:          Reason to ignore carry:
```

現在のポジション総量、レバレッジ、巻き戻し確率を埋める欄ではありません。公開用には[[yen-carry-context-template]]を使います。
