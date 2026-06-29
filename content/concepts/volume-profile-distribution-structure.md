---
id: volume-profile-distribution-structure
title: Volume Profile distribution structure
type: concept
status: draft
summary: Volume Profileの分布構造を、受容・拒否・移動の履歴として慎重に読む。
tags:
  - trading
  - volume-profile
confidence: medium
sources:
  - sources/research-notes/volume-profile-basics.md
  - sources/research-notes/market-profile-and-value-area.md
  - sources/research-notes/volume-profile-nodes-and-fast-travel.md
related:
  - high-volume-node
  - low-volume-node
  - fast-travel-zone
  - profile-shapes
  - value-area
  - point-of-control
next:
  - fast-travel-zone
updated: 2026-06-28
---

## 要点

Distribution structureは、Volume Profile全体の厚い場所、薄い場所、境界、複数の分布を読む視点です。価格がどこで受け入れられ、どこで拒否され、どこを速く通過した可能性があるかを整理します。

## これは何か

Volume Profileは、単一のPOCやValue Areaだけでなく、全体の分布として読みます。

- single distribution: ひとつの中心に出来高が集まる構造。
- double distribution: 2つの高出来高帯が薄い領域で分かれる構造。
- multiple distribution: 複数の受容帯がある構造。
- high-volume area: acceptance、balance、congestion候補。
- low-volume area / thin area: rejection、transition、低受容候補。
- balance area: 価格が回転しやすい候補領域。
- transition area: 片側の分布から別の分布へ移る候補領域。
- volume ledge: 出来高の厚い場所から薄い場所へ急に落ちる境界として語られることがあるが、用語と計算は要検証。

## 何を答えるために使うか

Distribution structureは、次の問いを立てる助けになります。

- 価格はどこでacceptedだったか。
- 価格はどこでrejectedだった可能性があるか。
- どこを速く動き、あまり出来高を作らなかったか。
- どこで価格が遅くなり、rotateまたはreassessしやすいか。
- thin zoneを越えた場合、次のdecision areaはどこか。

## POC / Value Areaとの関係

[[point-of-control|POC]]は分布内でもっとも目立つ活動集中点です。[[value-area|Value Area]]は中心的な活動範囲です。

しかし、Value Areaの中に複数のHVNとLVNが含まれることがあります。VAH / VALが分布の端やLVNと近い場合もあれば、広いbalanceの途中に見える場合もあります。

## Profile shapesとの関係

[[profile-shapes]]のD / P / bは便利な要約ですが、分布構造の詳細を隠すことがあります。形を見る時は、HVN location、LVN boundary、POC location、single / double distribution、session定義を合わせて確認します。

## 注意点

分布構造は、profile rangeとrow sizeによって変わります。visible rangeだけで都合よく分布を選ぶと、後付けの説明になりやすいです。

この視点は予測ではなく、シナリオを整理するための補助です。水平線、市場構造、invalidation、risk/rewardより優先しません。

## 関連ページ

- [[high-volume-node]]
- [[low-volume-node]]
- [[fast-travel-zone]]
- [[profile-shapes]]
- [[value-area]]
- [[point-of-control]]
