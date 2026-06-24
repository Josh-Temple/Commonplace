---
id: horizontal-level-analysis
title: 水平線分析
type: method
status: draft
summary: 水平線を支持抵抗の断定ではなく、反応・受容・拒否を観察する判断エリアとして整理する方法。
tags:
  - trading
  - levels
  - method
confidence: low
sources:
  - sources/research-notes/horizontal-levels-basics.md
related:
  - horizontal-levels
  - market-structure
  - volume-profile-overview
  - acceptance-and-rejection
  - horizontal-line-trading-framework
next:
  - entry-decision-process
updated: 2026-06-24
---

## 要点

水平線は主な判断エリアですが、単独の売買シグナルではありません。

## 目的

重要水準を事前に絞り、その周辺で反応、受容、拒否、失敗のシナリオを作ります。

## 手順

1. 上位足の目立つ高値・安値を先に置く。
2. 現在セッションと前セッションの高値・安値を加える。
3. [[point-of-control|POC]]、VAH、VALなどVolume Profile水準との重なりを見る。
4. 各水準について、反応、受容、拒否、突破失敗のシナリオを作る。
5. 無効条件と見送り条件を決める。

## priority aid table

これは統計スコアではなく、すべての線を引く癖を避けるためのpriority aidです。

| Criteria | 観察 | 注意 |
|---|---|---|
| Higher timeframe relevance | 上位足でも見える | 短期足だけの細かい線は弱いことがある |
| Clean prior reaction | 明確な反応があった | 反応が曖昧なら後付けになりやすい |
| Near current price | 近い判断エリアになる | 遠すぎる線は今の判断に使いにくい |
| Market structure overlap | trend/range端と重なる | 中央の線は判断が難しい |
| POC / VAH / VAL overlap | Volume Profileが補助する | Profileだけでは根拠にしない |
| Clear invalidation | 前提が崩れる場所が見える | 無効条件が遠すぎるなら弱い |
| Acceptable risk/reward | 次の反応候補まで説明できる | 見た目だけの比率にしない |

## scenario comparison

| 場所 | 観察scenario | No-trade理由 |
|---|---|---|
| Range上限 | rejection、acceptance、failed breakout | Triggerなし、上位足が矛盾 |
| Range中央 | POC回帰、チョップ | 端まで距離がなく、risk/rewardが弱い |
| Prior high付近 | 突破後acceptance、上抜け失敗 | ニュース直前、出来高が薄い |
| VAL付近 | Value内への再受容、下側acceptance | session定義が曖昧 |

## 観察ポイント

水平線は正確な1ティックではなく、売り買いの判断が起きやすい周辺領域として扱います。[[market-structure]]がその水準へどの方向から近づいているかを優先します。

## 判断しない条件

- 線が多すぎて優先順位がない。
- 価格がレンジ中央やValue Area中央にあり、明確な判断エリアがない。
- 水平線以外の根拠がなく、シナリオとinvalidationを説明できない。

## 注意点

Volume Profileとの重なりは補助材料です。POC、VAH、VALだけで売買を決めません。

## 次に読む

[[entry-decision-process]]で、LevelからScenario、Trigger、Invalidationへ進みます。
