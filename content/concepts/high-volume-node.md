---
id: high-volume-node
title: High Volume Node
type: concept
status: draft
summary: HVNを、選択したVolume Profile内で出来高や活動が集中した価格帯として慎重に読む。
tags:
  - trading
  - volume-profile
confidence: medium
sources:
  - sources/research-notes/volume-profile-basics.md
  - sources/research-notes/volume-profile-nodes-and-fast-travel.md
related:
  - point-of-control
  - low-volume-node
  - volume-profile-distribution-structure
  - lvn-hvn-analysis
next:
  - low-volume-node
updated: 2026-06-28
---

## 要点

HVN / High Volume Nodeは、選択したVolume Profileの中で出来高や活動が集中した価格帯です。受容、balance、congestion、rotation候補として観察しますが、自動的な支持線・抵抗線ではありません。

## これは何か

HVNは、あるsession、composite、visible rangeなどのプロファイル内で、周囲よりも相対的に出来高が厚い場所です。

市場がその価格帯で時間や取引を使った可能性があるため、過去のacceptance候補として扱われます。ただし、意味はprofile range、session定義、row size、data sourceに依存します。

## どう読むか

HVNでは次を観察します。

- 価格がHVN周辺で回転するか。
- HVNから離れようとして失敗するか。
- 一度離れた後、再びHVNへ戻るか。
- HVNの上または下でacceptanceが起きるか。
- HVN内で動きが遅くなり、方向判断が難しくなるか。

HVNは、文脈次第で「価格の磁石」「再評価エリア」「動きが遅くなる場所」「balanceの中心」になり得ます。

## POCとの違い

[[point-of-control|POC]]は、選択したプロファイルの中でプラットフォーム計算上もっとも出来高や活動が集中した価格帯です。

HVNはより広い分類です。POCは多くの場合、目立つHVNの一部または中心になりますが、すべてのHVNがPOCではありません。ひとつのプロファイルに複数のHVNが存在することもあります。

## 使いどころ

HVNは、次のような問いを立てるために使います。

- ここは過去に受け入れられた価格帯か。
- 価格はこの高出来高帯へ戻りやすいのか、それとも離れているのか。
- HVNの中央にいて、risk/rewardやinvalidationが曖昧になっていないか。
- 次の判断エリアは、隣の[[low-volume-node|LVN]]、[[value-area|VAH / VAL]]、または水平線か。

## 注意点

HVNはautomatic support / resistanceではありません。強いdriveがHVNを通過する場合、過去の受容よりも現在の再価格付けを優先して読む必要があります。

また、HVNの見え方は選ぶprofile range、session、bin size、FX / CFDのtick volumeなどで変わります。単独では判断せず、[[volume-profile-distribution-structure]]、[[horizontal-levels]]、[[market-structure]]、invalidationと組み合わせます。

## 関連ページ

- [[point-of-control]]
- [[low-volume-node]]
- [[volume-profile-distribution-structure]]
- [[lvn-hvn-analysis]]
