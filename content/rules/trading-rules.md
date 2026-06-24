---
id: trading-rules
title: トレーディングルール
type: rule
status: draft
summary: トレード時の行動を安定させるためのエントリー、リスク、感情、レビューの個人的ルール草案。
tags:
  - trading
  - rules
  - risk-management
confidence: low
sources:
  []
related:
  - trading
  - pre-trade-emotion-check
  - risk-reward-and-invalidation
  - post-trade-review
  - horizontal-line-trading-framework
  - no-trade-checklist
next:
  - pre-trade-emotion-check
  - post-trade-review-checklist
updated: 2026-06-24
---


このページは個人的な行動ルールの草案です。金融助言ではありません。

## Entry rules

- 条件が揃わない場合は入らない。
- [[entry-decision-process]]の順序を飛ばして入らない。
- 水平線、POC、Value Area、形状だけを単独のシグナルにしない。
- シナリオ、トリガー、無効条件が一文で言えない時は見送る。

## Risk rules

- 損切り条件を決める前にエントリーしない。
- [[risk-reward-and-invalidation]]で、シナリオが崩れる場所を先に決める。
- エントリー後に感情で損切りを広げない。
- 連続損失やルール違反後は、次の判断より先に記録する。

## Emotional rules

- 怒りや焦りが強い場合は、[[pre-trade-emotion-check|トレード前感情チェック]]へ戻る。
- 取り返したい気持ちがある時は、取引量や頻度を増やさない。
- 見送りは失敗ではなく、条件不一致への対応として扱う。

## Review rules

- 結果だけで判断せず、プロセス品質を記録する。
- セットアップ、エントリー理由、無効条件、感情状態、ルール遵守、学びを残す。
- レビューは[[post-trade-review]]と[[post-trade-review-checklist]]で行う。

## Setup rules

- Context、Structure、Levelの三つを説明できないsetupは扱わない。
- 中央価格、ニュース直前、流動性が薄い場面では慎重に見送る。

## Invalidation rules

- Invalidationが遠すぎるなら、stopを広げずsetupを見送る。
- Invalidationとmonetary stopが噛み合わない時は、取引しない選択を優先する。

## Position / risk rules

- 具体的なposition sizeはこの公開ページに書かない。
- 損失許容を超える形に調整してまで入らない。
- リスクを下げる方法が「祈る」だけなら見送る。

## Repository / public-safety rules

- 公開repositoryにprivate trade log、account size、broker情報、個別損益を残さない。
- 教育メモとpersonal recommendationを混同しない。

## ルール違反後の対応

1. Stop trading / pause: すぐ次の取引で取り返そうとしない。
2. Write what happened: 何が起きたかを短く書く。
3. Identify which rule failed: Entry、Invalidation、Emotion、Reviewなど失敗したruleを特定する。
4. Do not immediately compensate: サイズや頻度で埋め合わせない。
5. Update checklist only after review: 感情が落ち着いてから[[pre-trade-context-checklist]]や[[post-trade-review-checklist]]を見直す。

## What not to do

- 単独の指標を売買命令として扱わない。
- ニュース、流動性、セッション文脈を無視しない。
- 損切り後すぐに感情で入り直さない。
- 公開リポジトリに個人的な売買記録、口座情報、損益、個人情報を書かない。
