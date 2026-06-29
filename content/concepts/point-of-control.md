---
id: point-of-control
title: Point of Control
type: concept
status: draft
summary: POCを、選択したプロファイルで最も活動が集中した価格帯として読み、判断が起きやすい場所として扱う。
tags:
  - trading
  - volume-profile
confidence: medium
sources:
  - sources/research-notes/volume-profile-basics.md
  - sources/research-notes/market-profile-and-value-area.md
related:
  - volume-profile
  - value-area
  - high-volume-node
  - volume-profile-distribution-structure
  - poc-reaction-breakout-analysis
next:
  - value-area
updated: 2026-06-28
---

## 要点

POC / Point of Controlは、選択したプロファイルで活動が最も集中した価格帯です。支持線・抵抗線ではなく、再評価が起きやすい判断エリアとして扱います。

## 概要

POCはPoint of Controlの略で、選択したVolume ProfileまたはMarket Profileの中で、最も活動や出来高が集中した価格水準、または価格帯を指します。

そのプロファイルの中では、POCは一時的な「公正価値」や「受け入れられた価格」の候補として扱われることがあります。

## どう読むか

POCは、単純な支持線や抵抗線ではありません。

より慎重には、POCは市場参加者が価値を再評価しやすい判断エリアです。価格がPOCに近づくと、過去に取引が集中した場所で再び売買の判断が起きる可能性があります。

## 使いどころ

POC付近では、少なくとも2つのシナリオを観察します。

- 反応・拒否: POC付近で止まり、反転し、そこから離れる。
- 受容・突破: POCを強く通過し、その反対側で取引が続く。

どちらも保証された結果ではありません。[[poc-reaction-breakout-analysis|POC reaction / breakout analysis]]では、この観察を方法として整理します。

## POCの種類

| POC type | 意味の違い | 注意 |
|---|---|---|
| Current session POC | 当日または現在sessionの活動集中 | session中に移動しやすい |
| Prior session POC | 前sessionで受け入れられた候補 | 今日も同じ意味とは限らない |
| Composite POC | 複数日・任意期間の活動集中 | 期間設定で意味が変わる |
| Visible range POC | 画面表示範囲の活動集中 | 表示を変えると変わるため恣意的になりやすい |

## POCで見る4つの反応

- Rejection: POC付近を試した後、滞在できず離れる。
- Acceptance: POC周辺または反対側で時間を使い、取引が続く。
- Drive-through: ほとんど止まらず通過する。POCがその場のdecision areaとして弱い可能性がある。
- Return / retest: 一度離れた後に戻り、再評価が起きる。

これらは事前に予測するものではなく、観察してScenarioを更新する材料です。

## 注意点

POCの意味は、現在セッション、前日セッション、複合プロファイル、表示範囲プロファイルのどれを見ているかで変わります。

POCだけで売買を決めず、[[value-area|Value Area]]、[[market-structure]]、[[horizontal-levels]]、出来高変化、ニュース、invalidation、risk/rewardと合わせて確認します。

## 関連ノート

- [[poc-reaction-breakout-analysis]]
- [[value-area]]
- [[high-volume-node]]
- [[volume-profile-distribution-structure]]
- [[volume-profile-checklist]]
