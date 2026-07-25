---
id: macro-markets
title: マクロ・市場データ分析
type: index
lens: markets
status: draft
summary: 発表時点の経済データ、市場反応、分析材料を時点整合的に接続する入口。
tags:
  - macro
  - markets
  - data
confidence: medium
sources: []
related:
  - financial-macro-for-trading
  - macro-market-analysis-prompt
  - macro-event-reaction-analysis
next:
  - macro-market-analysis-prompt
  - macro-context-assessment
updated: 2026-07-25
---
## この領域に保存するもの

経済指標の意味と読み方、発表時点で利用できた値、市場予想、後日の改定、金利・ドル・ゴールド・株式の反応を接続します。ゴールドとS&P 500の日次・週次環境を、後知恵で上書きせず振り返るための入口です。

## 生データと分析を分ける

`data/`のJSONは観測事実、時点、出典の記録です。`sources/market-packets/`は指定日の事実を並べた分析材料です。読者向けの解釈は`content/outputs/`へ置きます。「強気」「景気後退リスク」などの判断を生データには混ぜません。

## なぜ発表時点を残すか

経済統計は改定され、市場が見ていた予想や前回値も時点で異なります。当初発表、改定、取得日時を分けることで、後日判明した値を当時知っていたかのように扱う誤りを避けます。

## ChatGPT分析の用途と限界

ChatGPTは、複数データの整理、主解釈と代替解釈の比較、欠落と反証条件の明示に使います。因果関係、予測、出典の正しさを自動保証しません。入力不足なら信頼度を下げ、売買シグナルではなく環境判断として扱います。

## 関連する分析指示

再利用する順序と制約は[[macro-market-analysis-prompt]]にあります。概念を学ぶ場合は[[financial-macro-for-trading]]、発表前後の読み方は[[macro-event-reaction-analysis]]を参照します。

## 最新の市場分析

現時点では公開済み分析はありません。生成パケットを人が確認し、完全なfrontmatterを付けた分析だけを、将来ここからリンクします。

## 今後作成する概念ページ

TODO: データvintageの読み方、市場予想データのライセンス、イベント窓の設計、週次ポジショニングの限界を、出典確認後に作成します。未作成ページへのリンクは置きません。
