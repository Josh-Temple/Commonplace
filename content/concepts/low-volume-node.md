---
id: low-volume-node
title: Low Volume Node
type: concept
status: draft
summary: LVNを、選択したVolume Profile内の薄い価格帯や低受容の候補として慎重に読む。
tags:
  - trading
  - volume-profile
confidence: low
sources:
  - sources/research-notes/volume-profile-basics.md
  - sources/research-notes/volume-profile-nodes-and-fast-travel.md
related:
  - fast-travel-zone
  - high-volume-node
  - value-area
  - horizontal-levels
  - lvn-hvn-analysis
next:
  - volume-profile-distribution-structure
updated: 2026-06-28
---

## 要点

LVN / Low Volume Nodeは、周囲より出来高が薄い価格帯です。prior rejection、low acceptance、transition、distribution boundaryの候補になりますが、単独では売買判断に使いません。

## これは何か

LVNは、選択したVolume Profileの中で、より厚い出来高帯の間にある低出来高エリア、または価格があまり取引されずに通過した薄い場所です。

低出来高は「誰も関心がない」と断定する材料ではありません。単に、そのprofile rangeと設定では、そこに相対的な活動が少なかったことを示します。

## どう読むか

LVNでは次を観察します。

- 以前その価格帯でrejectionが起きた可能性。
- 上下の[[high-volume-node|HVN]]を分ける境界として機能している可能性。
- 価格が滞在できず、片側へ戻される可能性。
- 反対に、価格が受け入れられればtransition zoneになる可能性。
- 薄い場所へ新しい出来高が作られ、過去のLVNの意味が変わる可能性。

## fast travelとの関係

LVNは[[fast-travel-zone|fast travel]]の候補になり得ます。過去に取引が少なかった領域では、価格がacceptanceを伴って入り込むと、次のHVN、POC、VAH / VAL、水平線まで速く移動するシナリオを観察することがあります。

ただし、LVNだから速く走るわけではありません。価格はLVNで止まる、拒否される、チョップする、または新しいacceptanceを作ることもあります。

## 使いどころ

- HVNとHVNの間の境界を探す。
- Value Area内外の薄い部分を見つける。
- [[horizontal-levels]]やmarket structureと重なる判断エリアを絞る。
- fast travelを考える前に、どこで無効化するかを決める。

## 注意点

LVNはprofile settingsとbin sizeに強く依存します。rangeを広げる、sessionを変える、row sizeを変えるだけで、薄い場所が消えたり別の場所に見えたりします。

FX / CFDではtick volumeの限界もあります。LVNを見つけたこと自体を根拠にせず、[[lvn-hvn-analysis]]で文脈、水平線、構造、invalidationを確認します。

## 関連ページ

- [[fast-travel-zone]]
- [[high-volume-node]]
- [[value-area]]
- [[horizontal-levels]]
- [[lvn-hvn-analysis]]
