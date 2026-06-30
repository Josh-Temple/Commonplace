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
updated: 2026-06-29
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

## Single distribution

Single distributionは、ひとつの中心的な高出来高帯に活動がまとまる形です。Balance、rotation、二方向の取引が集中した候補として記述できますが、次の方向を予測する形ではありません。

## Double distribution

Double distributionは、2つの高出来高帯がthin areaやLVNで分かれて見える形です。上の分布と下の分布のどちらを価格が受け入れているか、間の薄い境界をどう扱うかを観察します。

## Multiple distribution

Multiple distributionは、複数の受容帯がある複雑な形です。nodeが増えるほど、優先順位、時間軸、profile rangeを明確にしないと後付け解釈になりやすくなります。

## Balance and imbalance

厚い分布はbalanceや滞在の候補、薄い移動はimbalanceやtransitionの候補として読まれます。ただし、balance / imbalanceは説明ラベルであり、単独の売買シグナルではありません。

## Distribution boundary

Distribution boundaryは、厚い領域から薄い領域へ移る場所です。VAH / VAL、LVN、水平線、prior high / lowと重なる場合はdecision areaとして観察しやすくなります。

## Thin area between distributions

2つの分布の間にあるthin areaは、rejection候補にもtransition候補にもなります。受け入れられれば通過シナリオ、拒否されれば元の分布への回帰シナリオを用意します。

## Profile range dependency

Double distributionは、sessionやrangeの切り方で作られたり消えたりします。visible rangeだけで都合よく形を選ばず、[[market-structure]]と[[horizontal-levels]]で確認します。


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
