---
id: risk-reward-and-invalidation
title: リスク・リワードと無効条件
type: method
status: draft
summary: エントリー前にシナリオの無効条件、損失許容、見送り条件を決める方法。
tags:
  - trading
  - risk-management
  - invalidation
confidence: low
sources:
  - sources/research-notes/trading-knowledge-map.md
related:
  - entry-decision-process
  - trading-rules
next:
  - pre-trade-emotion-check
  - post-trade-review
updated: 2026-06-24
---


## 要点

無効条件はエントリー前に決めます。損切り位置は感情ではなく、シナリオの前提が崩れる場所に対応させます。

## 目的

エントリー前に、シナリオが崩れる条件、損失の形、利益目標の妥当性、見送り条件を揃えます。

## 手順

- 何が起きたらシナリオが間違いだったと判断するか。
- その場所までの損失が許容範囲か。
- 利益目標は、ただ遠い場所ではなく、構造上意味のある場所か。
- リスク・リワードは、セットアップの前提が明確な時だけ意味を持つか。
- どの条件なら取引しないか。

## Invalidationを深く見る

- Thesis invalidation: Scenarioの前提が崩れる価格行動。例: range内へ戻る、外側でacceptanceする、直近構造を失う。
- Monetary stop: 許容損失を超えないための実務上の停止点。Thesis boundaryと一致しない場合は、そもそも取引を見送る候補になる。
- Stop placement: 感情の痛点ではなく、事前に定義した前提の境界として扱う。
- 視覚的にrisk/rewardが良くても、LevelやStructureが弱いなら取引理由は弱い。
- Entry後にstopを広げることは、元の意思決定を別物に変える。
- No tradeは、risk decisionとして正しい場合がある。

## mini-template

```text
Trade thesis:
Invalidation condition:
Stop logic:
Expected reaction area:
Potential target area:
Risk/reward:
Reason to skip:
```

## 観察ポイント

無効条件は「痛みに耐えられない場所」ではなく、「シナリオの前提が崩れた場所」です。利益目標も、ただ遠い場所ではなく、次の水平線、レンジ端、VAH / VAL、POCなど構造上意味のある場所に置きます。

## 判断しない条件

- 損切り位置を先に決められない。
- risk/rewardを計算しても、シナリオや水準が曖昧。
- 価格が中央にあり、利益目標までの場所が説明できない。
- ニュースや流動性で想定損失が読みづらい。

## 注意点

- エントリー後に損切りを広げる。
- 損切り幅から逆算して、存在しないシナリオを作る。
- 取り返したい感情で取引量を増やす。

## 次に読む

感情状態は[[pre-trade-emotion-check]]で確認します。
