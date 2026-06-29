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
updated: 2026-06-28
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
