---
id: poc-reaction-breakout-analysis
title: POC reaction / breakout analysis
type: method
status: draft
summary: POC付近を、反応・拒否・受容・突破のシナリオとして観察する方法。
tags:
  - trading
  - volume-profile
confidence: low
sources:
  - sources/research-notes/volume-profile-basics.md
  - sources/research-notes/market-profile-and-value-area.md
related:
  - point-of-control
  - value-area
  - volume-profile-checklist
next:
  - value-area-close-analysis
updated: 2026-06-24
---

## 要点

POCはトリガーではなく、反応、拒否、受容、drive-throughを観察する場所です。

## 目的

この方法は、[[point-of-control|POC]]を売買トリガーではなく、判断が起きやすい観察エリアとして扱うための手順です。

## 手順

### POCへ到達する前

価格がPOCへ到達する前に、次を確認します。

- 直前の方向: 上昇から近づいているのか、下落から近づいているのか。
- POCの種類: 現在セッション、前日セッション、複合プロファイル、表示範囲のどれか。
- 近くの水平線: VAH、VAL、前日高安、レンジ端、未決済の重要ゾーン。
- 上位足の構造: トレンド中か、レンジ内か、ニュース前後か。

### POC付近

POC付近では、次のような行動を観察します。

- reaction: POC付近で止まる、反転する、または勢いが弱まる。
- absorption: 価格は進みにくいが、取引は続く。
- rejection: POCを試したあと、素早く離れる。
- slow acceptance: POC周辺で時間を使い、両側で取引が続く。
- fast drive-through: POCを強く通過し、反対側で継続する。

### POCを試したあと

POCを試したあと、次を確認します。

- 価格はPOCの上または下で受け入れられたか。
- すぐにPOCへ戻ったか。
- 出来高は増えたか、乾いたか。
- 高値安値の構造は変わったか。
- [[value-area|Value Area]]内へ戻ったのか、外へ広がったのか。

## 判断しない条件

- POCだけが根拠になっている。
- どのプロファイルのPOCか説明できない。
- 水平線、構造、invalidation、risk/rewardが未定義。
- ニュースや薄い流動性で反応が unreliable。

## reaction comparison

| Observation | Possible read | Warning |
|---|---|---|
| Rejection at POC | 以前の活動集中価格が再評価され、滞在できない | 反転保証ではない |
| Acceptance through POC | POC反対側で取引が続く | どのPOCかで意味が変わる |
| Drive-through | POCがその場で止める水準として機能しない | momentum後の追いかけに注意 |
| Return / retest | 離れた後に再評価が起きる | retestだけではtriggerにならない |

Current session POC、prior session POC、composite POC、visible range POCを混同しない。

## 注意点

この方法は、観察とシナリオ作成のためのものです。

POCで反応したから買う、POCを抜けたから売る、という単純なルールではありません。リスク、時間軸、流動性、上位足、ニュースを合わせて確認します。

## 次に読む

[[value-area-close-analysis]]で、Value Areaに対する終値位置を観察します。
