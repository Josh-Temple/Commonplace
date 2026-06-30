---
id: volume-profile
title: Volume Profile
type: index
status: draft
summary: Volume Profileを、水平線と市場構造を補助する価格帯別出来高の観察レイヤーとして読む入口ページ。
tags:
  - trading
  - volume-profile
confidence: medium
sources:
  - sources/research-notes/volume-profile-basics.md
  - sources/research-notes/market-profile-and-value-area.md
related:
  - trading
  - trading-process
  - no-trade-checklist
  - volume-profile-overview
  - point-of-control
  - value-area
  - high-volume-node
  - low-volume-node
  - volume-profile-distribution-structure
  - fast-travel-zone
  - volume-profile-checklist
  - volume-profile-advanced-checklist
next:
  - volume-profile-overview
updated: 2026-06-29
---

## 目的

Volume Profileは、選んだセッションや範囲で、どの価格帯に出来高が集まったかを観察するための道具です。このページは教育目的の整理であり、金融助言ではありません。

このクラスターでは、Volume Profileを主役の売買シグナルではなく、[[trading-context]]、[[market-structure]]、[[horizontal-levels]]で作ったシナリオを補助する観察層として扱います。

## Androidでの最短ルート

- 初回: [[volume-profile-overview]] → [[point-of-control]] → [[value-area]]。
- 実践前: [[volume-profile-checklist]]だけ開き、必要な用語へ戻る。
- 判断に迷う時: [[trading-process]] → [[no-trade-checklist]]へ戻る。

## 読む順序

1. [[volume-profile-overview|Volume Profile overview]]
2. [[point-of-control|POC / Point of Control]]
3. [[value-area|Value Area / VAH / VAL]]
4. [[high-volume-node|HVN / High Volume Node]]
5. [[low-volume-node|LVN / Low Volume Node]]
6. [[volume-profile-distribution-structure|Distribution structure]]
7. [[fast-travel-zone|Fast travel zones]]
8. [[profile-shapes|Profile shapes]]
9. [[poc-reaction-breakout-analysis|POC reaction / breakout analysis]]
10. [[value-area-close-analysis|Value Area close analysis]]
11. [[lvn-hvn-analysis|LVN/HVN analysis]]
12. [[fast-travel-scenario-analysis|Fast travel scenario analysis]]
13. [[eighty-percent-rule|80% rule]]
14. [[volume-profile-checklist|Volume Profile checklist]]
15. [[volume-profile-advanced-checklist|Volume Profile advanced checklist]]

## 信頼度と根拠の読み方

- 基本定義: Volume Profile、POC、Value Area、VAH、VALは複数のプラットフォーム文書で確認できるため、このクラスターでは比較的安定した定義として扱います。
- 計算差: 同じ用語でも、session、visible range、fixed range、row size、ticks per level、Value Area percentage、data sourceで表示が変わります。
- Advanced terms: HVN / LVNはTradingViewの公式ヘルプで用語確認できましたが、全プラットフォーム共通の自動計算規格ではありません。
- Scenario terms: fast travel、profile shape、80% ruleは実務ヒューリスティックです。確率や勝率として読まず、条件付きシナリオとして扱います。

## 詳細に読む順序

Basic layer:

1. [[volume-profile-overview]]
2. [[point-of-control]]
3. [[value-area]]

Advanced layer:

1. [[high-volume-node]] / [[low-volume-node]]
2. [[volume-profile-distribution-structure]]
3. [[fast-travel-zone]]
4. [[lvn-hvn-analysis]] / [[fast-travel-scenario-analysis]]
5. [[eighty-percent-rule]]


## 追加で見る価格帯

- [[high-volume-node|HVN]]: 出来高が厚い価格帯。acceptance、congestion、rotation、slowdown候補として観察する。
- [[low-volume-node|LVN]]: 出来高が薄い価格帯。rejection、transition、distribution boundary候補として観察する。
- [[fast-travel-zone|fast travel]]: thin areaを価格が速く移動する可能性を準備するシナリオ。保証ではなく、acceptanceとinvalidationを定義して観察する。

## 使い方の原則

- 先に市場文脈、構造、水平線を決める。
- POC、HVN、LVN、VAH、VALは「反応を見る場所」であり、魔法の線ではない。
- Profile shapesや80% ruleは低信頼度のヒューリスティックとして扱う。
- Volume Profileがシナリオと合わない時は、確認ではなく注意や代替シナリオとして読む。
- 最後はprice action、invalidation、risk/rewardで判断する。

## 注意点

範囲設定、セッション区切り、データソース、プラットフォームの計算方法によってプロファイルは変わります。FXやCFDでは、実出来高ではなくティックボリュームを使う場合があります。

## 関連ノート

- [[trading-process]]
- [[horizontal-levels]]
- [[volume-profile-checklist]]
