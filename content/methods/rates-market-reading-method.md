---
id: rates-market-reading-method
title: 金利市場の読み方
type: method
status: draft
summary: 主要Treasury maturity、curve、real yield、breakevenとpolicy expectationを順に読む。
tags:
  - trading
  - macro
confidence: medium
sources:
  - sources/research-notes/bonds-yields-and-duration.md
  - sources/research-notes/yield-curve-and-term-premium.md
related:
  - yield-curve
  - nominal-and-real-interest-rates
  - macro-context-assessment
next:
  - macro-scenario-matrix
updated: 2026-07-19
---
## 目的

金利を一覧表示するだけでなく、政策実施→期待経路→中長期→実質・インフレ補償→信用の順に読み、金と株への複数解釈を作ります。

## 手順1: 翌日物とフロントエンド

- **EFFR**: 無担保翌日物実績。管理金利が目標レンジへ伝わっているかを見るが、将来政策を証明しない。
- **SOFR**: Treasury担保レポの幅広い翌日物指標。担保・決済・期末要因でも動き、単独の流動性シグナルではない。
- **3か月bill**: 現在政策、近い会合、発行・資金需要の合成。
- **2年**: 数会合先を含む政策経路に敏感。成長、インフレ、プレミアムも含む。

EFFRとSOFRの位置、3か月と2年の差、政策先物/OISを比較します。金には実質・ドル経路、株には割引率と景気含意を問います。

## 手順2: 中長期

- **5年**: 現在サイクルと中期見通しの接点。
- **10年**: 成長、インフレ、政策平均、term premiumの代表的合成。
- **30年**: 長期インフレ・財政供給・デュレーション需要へ相対的に敏感。

各年限の変化幅を同じ時刻で比べます。10年上昇だけで「成長」や「財政」を証明しません。金には実質成分、株には利益対割引率を照合します。

## 手順3: カーブ

**2s10s**は10年－2年、**5s30s**は30年－5年。スプレッドと両脚を記録します。スティープ化が短期低下か長期上昇かで、金・株・信用の候補が違います。

## 手順4: 実質とインフレ補償

10年TIPS実質利回り、5年・10年ブレークイーブンを名目と比較します。実質金利は金の機会費用、株の実質割引率候補ですが、方向を証明しません。ブレークイーブンは純粋な予報ではありません。

## 手順5: 期待と信用

政策先物/OISは市場インプライド経路で、契約仕様とプレミアムを含みます。投資適格（IG）・高利回り（HY）スプレッドは国債基準を超える信用補償。金利低下とHY拡大なら景気悪化候補、金利上昇とスプレッド縮小なら成長候補ですが反証が必要です。

## 日次テンプレート

```text
Window / event:
EFFR / SOFR anomaly:
3m / 2y / policy path:
5y / 10y / 30y leader:
2s10s / 5s30s and both legs:
10y real / 5y BE / 10y BE:
IG / HY spread:
Cause A / Cause B:
Gold confirmation / contradiction:
Equity confirmation / contradiction:
Price level and invalidation:
```

## マクロを無視する条件

時刻が揃わない、原因を一つに固定している、資産自身が確認しない時は金利物語を正当化に使いません。最後は[[market-structure]]と価格水準へ戻ります。
