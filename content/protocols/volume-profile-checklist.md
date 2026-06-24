---
id: volume-profile-checklist
title: Volume Profile checklist
type: protocol
status: draft
summary: Volume Profileを、水平線と市場構造を補助する観察レイヤーとして使うための実用チェックリスト。
tags:
  - trading
  - volume-profile
confidence: low
sources:
  - sources/research-notes/volume-profile-basics.md
  - sources/research-notes/market-profile-and-value-area.md
  - sources/research-notes/eighty-percent-rule.md
related:
  - volume-profile
  - point-of-control
  - value-area
  - profile-shapes
next:
  - trading-rules
updated: 2026-06-24
---

## 目的

Volume Profileを単独シグナルではなく、[[market-structure]]と[[horizontal-levels]]を補助する観察レイヤーとして使います。教育目的のチェックリストであり、金融助言ではありません。

## チェック項目

- Session: RTH、ETH、24時間、任意範囲のどれを見ているか。
- Data: 実出来高か、ティックボリュームか。
- Levels: prior VAH / VAL、current VAH / VAL、prior / composite [[point-of-control|POC]]を確認したか。
- Context: 上位足、ニュース、流動性、レンジ/トレンドと矛盾しないか。
- POC: 反応、拒否、受容、drive-throughのどれに近いか。
- Value Area: VAH / VALの外で受け入れられるか、内側へ戻るか。
- Shape: [[profile-shapes]]は参考程度に留めているか。
- Heuristic: [[eighty-percent-rule|80% rule]]を検証済み確率として扱っていないか。

## 見送り条件

- Volume Profileだけが根拠になっている。
- プロファイル範囲やセッション定義が曖昧。
- 価格がValue Area中央にあり、水平線や構造の優先順位がない。
- POC / VAH / VAL付近のinvalidationが定義できない。
- ニュースや薄い流動性でプロファイル観察が unreliable。

## 次の行動

観察結果を[[entry-decision-process]]へ戻し、Trigger、Invalidation、risk/rewardを確認します。セッション後は[[post-trade-review-checklist]]で、Volume Profileの読みが後付けになっていないかを確認します。
