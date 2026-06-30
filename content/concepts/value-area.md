---
id: value-area
title: Value Area
type: concept
status: draft
summary: Value Area、VAH、VALを、約70%の活動が含まれる中心領域として慎重に読む。
tags:
  - trading
  - volume-profile
confidence: medium
sources:
  - sources/research-notes/market-profile-and-value-area.md
  - sources/research-notes/volume-profile-basics.md
related:
  - volume-profile
  - point-of-control
  - high-volume-node
  - low-volume-node
  - volume-profile-distribution-structure
  - value-area-close-analysis
next:
  - high-volume-node
updated: 2026-06-29
---

## 要点

Value Area、VAH、VALは、選択したプロファイル内で活動が集中した中心領域とその上下境界です。境界は観察エリアであり、保証された反転・継続ラインではありません。

## 概要

Value Areaは、選択したプロファイル内の活動や出来高の中心部分を表す領域です。多くのツールでは、およそ70%の活動または出来高を含む範囲として扱われます。

- VAH: Value Area High。Value Areaの上限。
- VAL: Value Area Low。Value Areaの下限。
- POC: そのプロファイルで最も活動が集中した価格帯。

## どう読むか

70%は便利な慣習であり、自然法則ではありません。

プラットフォーム、計算方法、セッション区切り、表示範囲によってValue Areaは変わります。使う前に、どのプロファイルのValue Areaなのかを明確にします。

## 使いどころ

終値がValue Areaに対してどこにあるかは、次のように観察できます。

- close above value: VAHより上で終わる。上側の価格が一時的に受け入れられた可能性を示すことがあります。
- close below value: VALより下で終わる。下側の価格が一時的に受け入れられた可能性を示すことがあります。
- close inside value: Value Area内で終わる。バランス内に戻った、または外側のオークションが続かなかった可能性があります。

## close location table

| Close location | Possible interpretation | Warning |
|---|---|---|
| Close above VAH | 上側価格が一時的に受け入れられた可能性 | 翌sessionで即座にValue内へ戻ることがある |
| Close below VAL | 下側価格が一時的に受け入れられた可能性 | ニュース由来の一回限りかもしれない |
| Close inside value | バランス内に戻った、外側が拒否された可能性 | 中央では方向判断が弱くなりやすい |
| Outside then re-entry | 外側のauction失敗候補 | re-entryとacceptanceの定義が必要 |

「outside value」と「accepted outside value」は同じではありません。外へ出ただけではなく、外側で時間を使う、戻りが浅い、再テストに耐えるなどの観察が必要です。

## Value Areaの計算差

Value Areaは多くのツールで「選択したprofileの一定割合の活動を含む範囲」として計算されます。ただし、割合、開始点、拡張方法、row aggregation、TPOかvolumeかはプラットフォームによって異なります。

## 70% conventionの扱い

70%はよく使われる慣習ですが、自然法則ではありません。NinjaTraderのように異なるdefault percentageを文書化しているツールもあり、Sierra ChartのようにValue Area Percentageを入力として扱うツールもあります。

## VAH / VALとdistribution edge

VAH / VALはValue Areaの上下境界です。分布の端やLVN付近と重なることもありますが、常にclean support / resistanceになるわけではありません。広いbalanceの途中にVAH / VALが見えることもあります。

## Value Area内部のHVN / LVN

Value Areaはひとつの滑らかな領域とは限りません。内部に複数の[[high-volume-node|HVN]]、[[low-volume-node|LVN]]、POC、thin areaが含まれることがあります。80% ruleやvalue re-entryを見る前に、内部構造を確認します。

## Close outside value vs acceptance outside value

Value Area外でcloseしたことと、外側でacceptedされたことは同じではありません。Acceptanceを見るには、外側での滞在、retest、戻りの浅さ、出来高、次sessionの反応など、事前に定義した観察条件が必要です。


## 注意点

Value Area外で終わったからといって、自動的に継続を意味するわけではありません。

外側に出たあとValue Area内へ戻る動きは、外側のオークションの拒否として解釈されることがあります。ただし確認には、時間、出来高、価格構造、次セッションの反応が必要です。詳しくは[[value-area-close-analysis|Value Area close analysis]]で整理します。

## 関連ノート

- [[point-of-control]]
- [[profile-shapes]]
- [[high-volume-node]]
- [[low-volume-node]]
- [[volume-profile-distribution-structure]]
- [[eighty-percent-rule]]
