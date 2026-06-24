---
id: eighty-percent-rule
title: 80% rule
type: rule
status: draft
summary: Value Areaへ再侵入した後に反対側を観察する実務ヒューリスティックを、低信頼度で扱う。
tags:
  - trading
  - volume-profile
confidence: low
sources:
  - sources/research-notes/eighty-percent-rule.md
  - sources/research-notes/market-profile-and-value-area.md
related:
  - value-area
  - value-area-close-analysis
  - volume-profile-checklist
next:
  - volume-profile-checklist
updated: 2026-06-24
---

## Rule status

80% ruleは、このリポジトリでは低信頼度の実務ヒューリスティックとして扱います。

「80%」という数字を、検証済みの勝率や保証された確率として扱ってはいけません。

## Common idea

一般的な考え方は次のように説明されます。

価格が前の[[value-area|Value Area]]の外で始まる、または外へ移動したあと、Value Area内へ再侵入し、その内側で受け入れられる場合、トレーダーはValue Areaの反対側へ向かう動きを観察することがあります。

この考えは、Market Profileやオークション市場の議論で「80% rule」と呼ばれることがあります。

## Conditions to define first

使う前に、少なくとも次を定義します。

- どのValue Areaか: 前日、現在セッション、週次、複合プロファイル。
- どのセッションか: RTH、ETH、24時間、任意の表示範囲。
- re-entryとは何か: 境界を一瞬またぐだけか、足の終値で入るのか。
- acceptanceとは何か: 時間、出来高、複数足、再テストのどれで判断するか。
- invalidationとは何か: 再びValue Area外へ出ることか、POCを維持できないことか。

## Risks

- Value Area内でチョップし、方向が出ない。
- 偽の再侵入で、すぐ外へ戻る。
- ニュースで通常のオークション行動が崩れる。
- トレンドデーでValue Area内への戻りが浅い。
- セッション定義が悪く、見ているValue Areaが実務上意味を持たない。

## Use as a study prompt

80% ruleは、売買命令ではなく、検証すべき観察仮説です。

実際に扱うなら、銘柄、時間軸、セッション、手数料、スリッページ、無効条件を含めて事前に検証します。
