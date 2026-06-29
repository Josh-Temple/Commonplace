---
id: fast-travel-scenario-analysis
title: Fast travel scenario analysis
type: method
status: draft
summary: thin areaやLVNを速く通過する可能性を、保証ではなく条件付きシナリオとして準備する方法。
tags:
  - trading
  - volume-profile
  - method
confidence: low
sources:
  - sources/research-notes/volume-profile-nodes-and-fast-travel.md
related:
  - fast-travel-zone
  - low-volume-node
  - high-volume-node
  - lvn-hvn-analysis
  - entry-decision-process
  - risk-reward-and-invalidation
next:
  - eighty-percent-rule
updated: 2026-06-28
---

## 要点

fast travel scenario analysisの目的は、低出来高帯を通過する可能性に備えることであり、それが起きると決めつけることではありません。

## 目的

[[fast-travel-zone|fast travel]]は、thin area、LVN、low-volume pocketを価格が速く移動する可能性を観察する実務用語です。この方法では、setup、confirmation、invalidation、slowdown候補を先に定義します。

## Setup conditions

- 価格が[[low-volume-node|LVN]]またはthin areaの近くにいる。
- market structureがthin area方向への移動を否定していない。
- horizontal levelを越えた、または再受容した。
- 価格がthin area内でacceptanceを作り始めている。
- 次の[[high-volume-node|HVN]]、POC、VAH / VAL、prior high / lowまでの距離が説明できる。

## Confirmation ideas

確認は固定ルールではなく、事前に決める観察条件です。

- Boundaryを越えた後、一定時間その外側に滞在する。
- Retestが持ちこたえる。
- 出来高が拡大する、または少なくともすぐ失速しない。
- 価格が直前のHVNやValueへ即時に戻らない。
- 下位足の構造がcontinuationを否定しない。

## Invalidation ideas

- 直前のbalanceやHVNへすぐ戻る。
- Boundary beyondでacceptanceできない。
- LVNでrejectionが出る。
- thin area内でstallし、新しい出来高を作り始める。
- 上位足の水平線やニュースがシナリオを壊す。

## Target / slowdown candidates

Targetというより、価格が再評価しやすいslowdown candidatesとして扱います。

- next HVN
- POC
- VAH / VAL
- prior high / low
- range boundary
- horizontal level

## 弱い表現と強い表現

| Weak | Stronger |
|---|---|
| LVNだから速く走る | LVNへ入る可能性はあるが、境界外でacceptanceできなければ無効。 |
| 薄いから抜ける | thin areaはscenario候補。上位足水平線とmarket structureを先に確認する。 |
| 次のHVNまで行く | 次のHVNはslowdown候補。途中で新しいacceptanceができれば見直す。 |

より実務的には、次のように書きます。

> 価格は上位足レンジ下限から反発し、水平線を再受容した。現在は前日HVN上に戻り、上側LVNへ入る可能性がある。ただしLVN内で滞在できずHVNへ戻ればfast travelシナリオは無効。

## 見送り条件

- fast travel根拠が「薄い場所がある」だけ。
- どのprofile rangeのthin areaか説明できない。
- 次のslowdown候補が近すぎてrisk/rewardが合わない。
- invalidationが遠すぎる、または定義できない。
- ニュースや急変でprofile観察が信頼しにくい。

## 注意点

この方法は教育目的のシナリオ整理です。売買指示ではありません。実際のentry判断は[[entry-decision-process]]と[[risk-reward-and-invalidation]]へ戻し、trigger、invalidation、risk/reward、感情状態を確認します。
