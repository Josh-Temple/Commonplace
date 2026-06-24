---
id: volume-profile-overview
title: Volume Profile overview
type: concept
status: draft
summary: Volume Profileを、時間ごとの出来高ではなく価格帯ごとの活動として読むための基本概念。
tags:
  - trading
  - volume-profile
confidence: medium
sources:
  - sources/research-notes/volume-profile-basics.md
  - sources/research-notes/market-profile-and-value-area.md
related:
  - volume-profile
  - point-of-control
  - value-area
next:
  - point-of-control
updated: 2026-06-24
---

## 要点

Volume Profileは、価格帯ごとの出来高を観察する補助レイヤーです。主な判断は、文脈、構造、水平線、invalidation、risk/rewardと組み合わせて行います。

## これは何か

Volume Profileは、選んだ期間や表示範囲の中で、出来高がどの価格帯に集まったかを横向きの分布として表示する考え方です。

通常の出来高バーは「その時間にどれだけ取引されたか」を示します。Volume Profileは「どの価格でどれだけ取引されたか」を見ます。

## どう読むか

- 出来高が集中した価格帯を見る。
- 速く通過した薄い価格帯を見る。
- POC、Value Area、VAH、VALを判断エリアとして見る。
- その観察が[[market-structure]]と[[horizontal-levels]]に合うか確認する。

## Market Profileとの違い

Market Profileは、時間やTPOを使って価格帯での滞在を整理する文脈で語られることが多いです。

Volume Profileは、価格帯ごとの出来高に注目します。両方ともオークションの受容と拒否を考えるために使われますが、入力している情報は同じではありません。

## 使いどころ

Volume Profileは、次のような観察に役立ちます。

- 取引が集中した価格帯。
- 市場が一時的に受け入れた可能性のある価格帯。
- 速く通過し、あまり取引されなかった価格帯。
- [[point-of-control|POC]]や[[value-area|Value Area]]のような、再評価が起きやすい候補地点。

## 注意点

Volume Profileは、それだけで未来を予測しません。

セッション境界、表示範囲、データソース、プラットフォームの設定によって結果は変わります。FXやCFDでは、プラットフォームによってティックボリュームが使われることがあります。

したがって、Volume Profileは単独の売買判断ではなく、構造、文脈、水平線、リスク管理と組み合わせる観察フレームとして扱います。

## 関連ページ

- [[volume-profile]]
- [[point-of-control]]
- [[value-area]]
