---
id: yield-curve
title: イールドカーブ
type: concept
status: draft
summary: 満期別利回り、傾斜変化、政策期待と長期要因を読む。
tags:
  - trading
  - macro
confidence: medium
sources:
  - sources/research-notes/yield-curve-and-term-premium.md
related:
  - bond-prices-and-yields
  - term-premium
  - rates-market-reading-method
next:
  - inflation-and-inflation-expectations
updated: 2026-07-18
---
## 定義

Yield curveは同種の債券の満期別yieldを並べた線です。米国Treasuryでは2年は政策pathへの感応が比較的高く、5年は中期、10年は代表的長期benchmark、30年は長期の成長・インフレ・需給・term premiumを強く反映し得ます。これは傾向であって固定分業ではありません。

| 変化 | 短期側 | 長期側 | 読み方の候補 |
|---|---|---|---|
| Steepening | 相対的に低下/小幅上昇 | 相対的に上昇 | 傾きが拡大 |
| Flattening | 相対的に上昇/小幅低下 | 相対的に低下 | 傾きが縮小 |
| Bull steepening | 低下大 | 低下小 | 債券価格上昇、短期yield主導低下 |
| Bear steepening | 上昇小 | 上昇大 | 債券価格下落、長期yield主導上昇 |
| Bull flattening | 低下小 | 低下大 | 長期yield主導低下 |
| Bear flattening | 上昇大 | 上昇小 | 短期yield主導上昇 |

Bull/bearは通常、債券価格の上昇/下落（yield低下/上昇）を指します。

## 前と後ろで違う力

Front endは現在の政策金利と予想path、long endは将来の短期金利平均に加え、長期成長、インフレ不確実性、Treasury需給、[[term-premium]]に反応します。2s10sや5s30sは差を圧縮しますが、各legの動きも確認します。

## Inversionの限界

短期yieldが長期yieldを上回るinversionは期待の重要な情報ですが、景気後退を固定日程で保証するtimerではありません。どのspread、期間、政策制度を使うかで解釈が変わり、取引triggerにはしません。
