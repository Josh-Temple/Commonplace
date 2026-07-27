---
id: fx-volatility-and-carry
title: FXボラティリティとキャリー
type: concept
status: draft
summary: 低ボラティリティ下のレバレッジ蓄積と、歪度・流動性・証拠金を通じた損失を整理する。
tags:
  - trading
  - macro
  - fx
confidence: low
sources:
  - sources/research-notes/currency-carry-trades.md
  - sources/research-notes/carry-trade-unwinds-and-systemic-risk.md
related:
  - currency-carry-trade
  - carry-trade-unwind
  - cross-currency-basis
next:
  - carry-trade-unwind
updated: 2026-07-27
---
## 要点

キャリーは金利差がゆっくり積み上がる一方、為替と流動性の損失が短時間に集中し得ます。低い観測ボラティリティは潜在的な尾部リスクを消しません。

## 見る変数

- **実現ボラティリティ**: 過去の価格変動。
- **インプライド・ボラティリティ（implied volatility）**: オプション価格から導く将来変動の市場価格。純粋な予報ではない。
- **ボラティリティ・リスクプレミアム**: インプライドと期待・実現変動の差に関する概念。
- **リスクリバーサル（risk reversal）**: 同期限・類似デルタのコールとプットの価格差で歪み需要を観察する慣行。符号規約を確認する。

キャリー収益は負の歪度やクラッシュリスクを伴うことがあります。価格ギャップ、ストップ、証拠金請求、オプションのデルタヘッジ、流動性低下が動きを増幅し、ストレス時には資産間相関が上がり得ます。

## 金利差だけでは不十分

```text
キャリーの魅力度は、
金利差 × 期待する為替安定 × 調達アクセス
× レバレッジ条件 × 期待する尾部リスク
に依存する
```

これは考える枠組みで数式・価格恒等式ではありません。低ボラティリティがレバレッジを促す可能性はあっても、現在のレバレッジ量を証明しません。リスクリバーサルも方向予報ではなく、保険需要、流動性、供給を含みます。
