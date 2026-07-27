---
id: covered-and-uncovered-interest-parity
title: カバード金利平価とアンカバード金利平価
type: concept
status: draft
summary: フォワードで為替を固定する裁定関係と、期待為替変化の理論命題を分ける。
tags:
  - trading
  - macro
  - fx
confidence: medium
sources:
  - sources/research-notes/fx-forwards-swaps-and-interest-parity.md
  - sources/research-notes/cross-currency-basis-and-funding-costs.md
related:
  - fx-forwards-swaps-and-forward-points
  - cross-currency-basis
  - currency-carry-trade
next:
  - cross-currency-basis
updated: 2026-07-27
---
## カバード金利平価

**カバード金利平価（covered interest parity, CIP）**は、スポットで通貨交換し外貨運用後にフォワードで元通貨を固定する経路と、元通貨で運用する経路の収益が、裁定可能な条件下で整合するという価格・裁定関係です。

```text
フォワード ÷ スポット ≈ (1 + 国内金利) ÷ (1 + 外国金利)
```

為替の表示方向で式の比は逆になります。例えば外貨金利が高い場合、その差は通常フォワード価格へ反映されます。高金利を受け取りながら為替を完全に固定して無条件の超過収益を得る、という意味ではありません。

実際にはバランスシート制約、規制費用、取引相手信用、担保、資金不足、取引費用、市場ストレスにより基準から乖離し得ます。その差を読む一つの概念が[[cross-currency-basis]]です。

## アンカバード金利平価

**アンカバード金利平価（uncovered interest parity, UIP）**は、為替をヘッジしない時の期待為替変化と金利差を結ぶモデル命題です。高金利通貨が将来相応に下落すると期待されれば、期待収益が均衡する、という考え方です。

UIPは実現収益を保証する規則ではありません。経験的結果は期間、通貨、推定法で変わり、持続的なキャリー収益と急な損失・負の歪度が研究対象になってきました。

## CIPとUIPを混同しない

CIPはフォワードで為替を覆った価格整合、UIPは将来の**期待**スポットを含む理論です。CIPの乖離を方向シグナルにしたり、UIPを「高金利通貨は必ず下落する」と読んだりしません。
