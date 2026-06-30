---
id: lvn-hvn-analysis
title: LVN / HVN analysis
type: method
status: draft
summary: HVNとLVNを、水平線・市場構造・POC・Value Areaと統合して観察する方法。
tags:
  - trading
  - volume-profile
  - method
confidence: low
sources:
  - sources/research-notes/volume-profile-nodes-and-fast-travel.md
related:
  - high-volume-node
  - low-volume-node
  - volume-profile-distribution-structure
  - horizontal-level-analysis
  - market-structure
  - risk-reward-and-invalidation
next:
  - fast-travel-scenario-analysis
updated: 2026-06-29
---

## 要点

LVN / HVN analysisは、nodeを売買シグナルにする方法ではありません。どこで受容、拒否、回転、transition、fast travelが起こり得るかを、事前に複数シナリオとして整理する手順です。

## 目的

[[high-volume-node|HVN]]と[[low-volume-node|LVN]]を、[[horizontal-level-analysis]]、[[market-structure]]、[[point-of-control|POC]]、[[value-area|Value Area]]と接続し、entry前の判断を明確にします。

## 手順

1. Profile typeを選ぶ。
   - current session
   - prior session
   - composite
   - visible range
2. HVNsを特定する。
3. LVNs / thin areasを特定する。
4. 近くのPOC、VAH、VALを置く。
5. 水平線と比較する。
6. market structureと比較する。
7. シナリオを作る。
   - HVN around rotation
   - rejection at LVN
   - acceptance through LVN
   - fast travel through thin area
   - stall at next HVN / POC / VAH / VAL
8. invalidationを定義する。
9. trade、wait、skipを決める。

## Profile selection first

Nodeを見る前に、必ず「どのprofileを使うか」と「なぜそのprofileが現在の判断に関係するか」を決めます。Session profileなのか、prior sessionなのか、compositeなのか、visible rangeなのかを曖昧にしたままHVN / LVNを読むと、都合のよい後付けになりやすいです。

## Node interpretation table

| Node type | What it may represent | What to observe | What invalidates the reading | Common misuse |
|---|---|---|---|---|
| HVN | prior acceptance、balance、congestion | 滞在、回転、retest、drive-through | HVN外で明確にacceptedされる | HVNだから必ず反発する |
| LVN | low acceptance、rejection、transition | 境界反応、滞在可否、新しい出来高 | LVN内でvolumeを作り始める | LVNだから必ず速く抜ける |
| POC | profile内の最大活動点 | 再評価、stall、通過速度 | POCが無視されdrive-throughする | POCを単独entryにする |
| VAH / VAL | Value Area boundary | outside/inside acceptance | 境界両側でチョップする | VAH/VALを固定S/R扱いする |
| thin area | low-volume transition candidate | 境界突破、維持、次のslowdown | 元のHVNへ即時回帰 | 薄いだけでtradeする |
| distribution edge | 受容帯の端 | rejection / acceptanceの分岐 | range変更でedgeが消える | edgeを絶対線にする |


## Scenario table

| Observation | Possible scenario | Confirmation to watch | Invalidation | Caution |
|---|---|---|---|---|
| 価格が広いHVN中央にいる | rotation / congestion | 端でのrejection、中央回帰 | HVN外でacceptance | 中央はrisk/rewardが悪化しやすい |
| 価格がLVN境界に近い | rejection or transition | 境界外で滞在、retest hold | すぐ元のHVNへ戻る | LVNだけで入らない |
| POCから離れてLVNへ入る | fast travel候補 | 戻りが浅い、thin area内で維持 | POC / HVNへ即時回帰 | 近い水平線で止まる可能性 |
| LVNを越えて次のHVNへ近づく | slowdown / reassessment | HVNで出来高増、回転 | HVNを強くdrive-through | HVNは自動反発ではない |
| VAH / VALとLVNが重なる | distribution edge候補 | 境界でacceptanceかrejection | 境界の両側でチョップ | session定義に依存する |

## 判断文の型

- 「現在は前日HVNの中央で、方向よりrotationを優先して観察する。」
- 「上位足の水平線を再受容し、上側LVNへ入るならfast travel候補。ただしLVN内で維持できずHVNへ戻れば無効。」
- 「POCを抜けたが、すぐ隣のHVNで止まるならdrive-throughの余地は限定的。」

## 見送り条件

- Profile rangeが任意で説明できない。
- Nodeが多すぎて優先順位がない。
- 水平線や市場構造と関係しない。
- invalidationが置けない。
- 「LVNだから入る」「HVNだから反発する」という単独理由になっている。

## 次に読む

[[fast-travel-scenario-analysis]]で、thin areaを通過するシナリオだけをさらに細かく準備します。
