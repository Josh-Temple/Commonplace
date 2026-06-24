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
  - poc-reaction-breakout-analysis
next:
  - value-area
updated: 2026-06-24
---

## Definition

POCはPoint of Controlの略で、選択したVolume ProfileまたはMarket Profileの中で、最も活動や出来高が集中した価格水準、または価格帯を指します。

そのプロファイルの中では、POCは一時的な「公正価値」や「受け入れられた価格」の候補として扱われることがあります。

## Decision area, not just support or resistance

POCは、単純な支持線や抵抗線ではありません。

より慎重には、POCは市場参加者が価値を再評価しやすい判断エリアです。価格がPOCに近づくと、過去に取引が集中した場所で再び売買の判断が起きる可能性があります。

## What to observe around POC

POC付近では、少なくとも2つのシナリオを観察します。

- 反応・拒否: POC付近で止まり、反転し、そこから離れる。
- 受容・突破: POCを強く通過し、その反対側で取引が続く。

どちらも保証された結果ではありません。[[poc-reaction-breakout-analysis|POC reaction / breakout analysis]]では、この観察を方法として整理します。

## Practical caution

POCの意味は、現在セッション、前日セッション、複合プロファイル、表示範囲プロファイルのどれを見ているかで変わります。

POCだけで売買を決めず、[[value-area|Value Area]]、上位足の構造、出来高変化、ニュース、リスク許容度と合わせて確認します。
