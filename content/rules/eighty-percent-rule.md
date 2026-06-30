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
  - high-volume-node
  - low-volume-node
  - volume-profile-distribution-structure
  - volume-profile-checklist
next:
  - volume-profile-checklist
updated: 2026-06-29
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

## 使用前に定義すること

- Which session’s Value Area: 前日、RTH、ETH、24時間、週次、compositeのどれか。
- What counts as re-entry: wick、終値、複数足、または時間滞在のどれか。
- What counts as acceptance: Value内での時間、出来高、retest、POC到達など。
- Where the idea is invalidated: 再び外側で受け入れられる、または反対方向のStructureが出るなど。
- Trend-like or balance-like day: trend dayではValue内回帰の発想が弱くなる可能性。
- False precision avoidance: 「80%」を勝率や保証として扱わず、未検証の名称として扱う。

## なぜconfidenceはlowのままか

- source qualityが実務家・ブログ・教育ページに偏りやすい。
- 「80%」という数字が経験則名であり、検証済み確率として確認できていない。
- Value Area計算はプラットフォームやpercentage設定で変わる。
- re-entry、acceptance、target、invalidationの定義が人によって違う。
- trend dayやnewsで前提が崩れやすい。

## 80% ruleを使う前に確認する内部構造

- internal POC: Value内で最初にstallしやすい中心点はどこか。
- internal HVN: 反対側へ行く前に回転しやすい厚い帯はあるか。
- LVN between current price and opposite value edge: 薄い境界で拒否される可能性はあるか。
- single or double distribution: Valueがひとつの滑らかな分布か、2つ以上の分布か。
- accepted re-entry or only touched: 境界を一瞬触っただけか、内側で受け入れられているか。


## LVN / HVN structure check

80% ruleを観察する場合も、Value Area内部の構造を確認します。

- Value内の[[low-volume-node|LVN]] / [[high-volume-node|HVN]]構造。
- Valueがsingle distributionかdouble distributionか。
- re-entry後にacceptanceがあるか。
- 内部HVNや[[point-of-control|POC]]でstallしていないか。
- [[profile-shapes]]がbalance的かtrend-likeか。

これらは「80%」という名称を検証済み確率にするものではありません。むしろ、単純化しすぎないための確認です。

## Risks

- Value Area内でチョップし、方向が出ない。
- 偽の再侵入で、すぐ外へ戻る。
- ニュースで通常のオークション行動が崩れる。
- トレンドデーでValue Area内への戻りが浅い。
- セッション定義が悪く、見ているValue Areaが実務上意味を持たない。

## Use as a study prompt

80% ruleは、売買命令ではなく、検証すべき観察仮説です。

実際に扱うなら、銘柄、時間軸、セッション、手数料、スリッページ、無効条件を含めて事前に検証します。
