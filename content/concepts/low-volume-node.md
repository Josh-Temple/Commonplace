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
updated: 2026-06-29
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

## Platform terminology

LVNはTradingViewの公式ヘルプで確認できるnode用語ですが、すべてのプラットフォームが同じ方法でLVNを自動検出するわけではありません。より中立に書くなら、low-volume area、thin area、low-volume pocketと表現できます。

## LVNとthin area

LVNは、選択したprofileの中で相対的に出来高が落ちている谷です。Thin areaは、その低出来高の帯をより説明的に呼ぶ言葉です。LVNという名前よりも、「どのprofileで、どのrow設定で、どの上下の高出来高帯に挟まれているか」を明確にします。

## LVNが境界になりやすい理由

LVNは、過去に価格が滞在しにくかった場所、または上下の受容帯の間のtransitionとして見えることがあります。このため、分布境界、rejection候補、または別のHVNへ移る通路として観察されます。これは解釈であり、定義そのものではありません。

## LVNが機能しにくい場面

- 価格がLVN内で新しい出来高を作り始める。
- row sizeを変えるとLVNが消える。
- 上位足の水平線やニュースがprofileより優先される。
- 見ているLVNがvisible rangeのzoomで偶然作られている。
- 周辺にslowdown候補が近すぎて、fast travelの余地がない。

## LVNを誤用する例

Weak interpretation:

> LVNだから自動的に抜ける。

Stronger interpretation:

> このprofileでは上下のHVNの間に相対的な低出来高帯がある。価格が境界を受け入れて滞在できるか、拒否されて元の分布へ戻るか、新しく出来高を作ってLVNの意味を変えるかを観察する。


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
