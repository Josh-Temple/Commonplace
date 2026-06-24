---
id: market-structure
title: 市場構造
type: concept
status: draft
summary: トレンド、レンジ、高値安値、ブレイク、失敗、受容と拒否を整理する市場構造の基本ページ。
tags:
  - trading
  - market-structure
confidence: medium
sources:
  - sources/research-notes/market-structure-basics.md
related:
  - trading
  - trading-context
  - horizontal-levels
  - acceptance-and-rejection
next:
  - horizontal-levels
updated: 2026-06-24
---

## 要点

市場構造は、高値・安値の作られ方と、価格がどこで受容または拒否されたかを読む枠組みです。

## 概要

Dow-likeな高値安値の観察、trend / range、break of structure、failed breakoutを使い、今の相場がどの状態に近いかを整理します。

## どう読むか

- higher high / higher lowが続いているか。
- lower high / lower lowが続いているか。
- レンジ上限・下限で受容されたか、拒否されたか。
- break of structure後にフォロースルーがあるか。
- ブレイク後すぐに戻るfailed breakoutになっていないか。

## 主要な構造パターン

- Trend: 高値安値の更新方向が比較的一貫している状態。押しや戻りはあるが、構造の前提が維持されているかを観察する。
- Range: 上限と下限の内側で価格が回転し、中央では判断優位性が落ちやすい状態。
- Transition: trendからrange、rangeからtrend候補へ移る途中。最も後付け解釈が起きやすい。
- Break of structure: それまで守られていた高値・安値の関係が崩れる観察。継続を保証しない。
- Failed breakout: 外側に出た後、十分に受け入れられず内側へ戻る動き。
- Acceptance: ある価格帯の外側または内側で時間を使い、取引が続く観察。
- Rejection: 試した価格帯から比較的早く離れ、滞在できない観察。

## 上位足と下位足の衝突

上位足がrange、下位足が短期trendの場合、短期の勢いだけで上位足の端を突破すると決めつけない。逆に上位足trend中でも、下位足がValue Area中央で乱れているなら、entry場所としては弱い可能性があります。

## 使いどころ

構造は、[[horizontal-levels]]をどの方向から試しているか、[[volume-profile]]のPOCやVAH/VALをどう観察するかを決める背景になります。

## 注意点

構造認識は時間軸で変わり、後知恵になりやすいです。事前に「何が起きたら構造判断を取り消すか」を決めます。

## 構造判断が変わる条件

構造判断は、事前に取り消し条件を持つ必要があります。

- Trend continuation想定: 直近の押し安値・戻り高値が明確に破られ、戻りも弱くない。
- Range rotation想定: 上限または下限の外側でacceptanceが見え、内側へ戻らない。
- Failed breakout想定: 再び外側へ戻り、元のrange内で維持できない。
- Transition想定: 複数回の試しが失敗し、方向よりも回転が優勢になる。

## よくある誤解

- 「ブレイクした＝必ず継続」と読む。
- 「高値更新＝常に強い」と読む。
- レンジ内の移動をtrendとして読み、端ではなく中央で判断する。
- 短期足だけで上位足のContextを無視する。

acceptance / rejectionの観察は[[acceptance-and-rejection]]で詳しく整理します。

## 関連ノート

- [[market-structure-assessment]]
- [[horizontal-levels]]
- [[entry-decision-process]]
