---
id: trading-process
title: トレーディング判断プロセス
type: index
status: draft
summary: Context → Structure → Level → Scenario → Trigger → Invalidation → Risk → Emotion check → Entry / No trade → Review の実務順序を整理するページ。
tags:
  - trading
  - process
  - risk-management
confidence: low
sources:
  - sources/research-notes/trading-knowledge-map.md
related:
  - trading
  - trading-context
  - market-structure
  - horizontal-levels
  - entry-decision-process
next:
  - trading-context
updated: 2026-06-24
---

## 目的

このページは、トレードを「シグナルに反応する行動」ではなく、確認、シナリオ化、無効化、実行、レビューの流れとして扱うための実務マップです。金融助言ではありません。

## 判断フロー

1. Context: [[trading-context]]と[[pre-trade-context-checklist]]で上位足、セッション、ニュース、流動性を確認する。
2. Structure: [[market-structure-assessment]]でトレンド、レンジ、ブレイク、失敗を観察する。
3. Level: [[horizontal-level-analysis]]で水平線・重要水準を判断エリアとして絞る。
4. Scenario: その場所で起こりうる反応、受容、拒否、突破、失敗を複数置く。
5. Trigger: [[entry-decision-process]]で、何を見たら行動するかを事前に決める。
6. Invalidation: [[risk-reward-and-invalidation]]で、何が起きたら前提が崩れるかを決める。
7. Risk: risk/reward、損失許容、サイズ、流動性を確認する。
8. Emotion check: [[pre-trade-emotion-check]]で焦りや取り返したい気持ちを確認する。
9. Entry / No trade: 条件が揃えば行動し、揃わなければ見送る。
10. Review: [[post-trade-review]]と[[post-trade-review-checklist]]でプロセスを記録する。

## Volume Profileの位置づけ

主な流れは、Volume Profile signal → trade ではありません。

```text
Market context + structure + horizontal level → scenario
Volume Profile → confirmation / caution / alternative scenario
Price action and invalidation → decision
```

[[point-of-control|POC]]、[[value-area|Value Area]]、VAH、VALは、水平線や構造と重なる時に観察価値が上がる候補です。単独ではエントリー理由にしません。

## 見送り条件

- Context、Structure、Levelのどれかを説明できない。
- Scenarioが一方向しかなく、反対シナリオを置けない。
- Triggerが曖昧で、後から理由を作っている。
- Invalidationまたは損失許容が未定義。
- risk/rewardが場所と構造に対して不自然。
- 価格がValue Areaやレンジの中央にあり、明確な判断エリアがない。
- ニュースや急変で通常の観察が unreliable。
- 感情が不安定で、No tradeを選べない。

## 次に読む

- 概念から読む: [[trading-context]] → [[market-structure]] → [[horizontal-levels]] → [[volume-profile]]
- 実務から読む: [[entry-decision-process]] → [[risk-reward-and-invalidation]] → [[pre-trade-emotion-check]] → [[post-trade-review]]
