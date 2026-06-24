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
  - horizontal-line-trading-framework
  - no-trade-checklist
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

## 実務用decision table

| Step | Question | Good answer | Warning sign |
|---|---|---|---|
| Context | 今の環境は何か | 上位足、session、news、volatilityを短く説明できる | 「なんとなく動きそう」 |
| Structure | trend / range / transitionのどれか | 高値安値、break、failed breakoutを根拠に言える | 短期足だけで断定する |
| Level | どの価格帯で判断するか | 水平線が構造上の意味を持つ | 線が多すぎる |
| Scenario | 何が起こりうるか | 反応、acceptance、rejection、失敗を複数置く | 一方向しか想定しない |
| Trigger | 何を見たら行動するか | 事前に観察条件がある | 動いてから理由を作る |
| Invalidation | 何で前提が崩れるか | 価格構造で説明できる | 損失が怖くなった場所 |
| Risk | 場所と損失は合うか | 反応候補と損失範囲が釣り合う | 見た目のrisk/rewardだけ良い |
| Emotion | 実行状態は安定しているか | No tradeを選べる | 取り返したい気持ちが強い |
| Review | 何を学ぶか | processを評価する | 損益だけを見る |

## 弱い判断文と強い判断文

- Weak: 「POCに来たから反発しそう」
- Strong: 「上位足はrange、下限近く、前日VALと水平線が重なり、下抜け失敗後に再受容が見える。安値更新で前提が崩れる。」
- Weak: 「水平線に来たから入る」
- Strong: 「上位足の押し目候補だが、現在はValue Area中央でtriggerがない。明確なrejectionか、反対にacceptanceが確認できるまでNo trade。」
- Weak: 「ブレイクしたから続く」
- Strong: 「break後に外側で時間を使い、戻りが浅いなら継続scenario。すぐレンジ内へ戻るならfailed breakoutとして見送りまたは再評価。」

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
