---
id: carry-trade-unwind-analysis
title: キャリー巻き戻し診断法
type: method
status: draft
summary: 円高とリスク資産安を、キャリー巻き戻しと他のマクロ要因に分けて検討する。
tags:
  - trading
  - macro
  - fx
confidence: low
sources:
  - sources/research-notes/carry-trade-unwinds-and-systemic-risk.md
  - sources/research-notes/international-capital-flows-and-risk-assets.md
related:
  - carry-trade-unwind
  - cross-asset-carry-confirmation
  - yen-carry-context-assessment
next:
  - cross-asset-carry-confirmation
updated: 2026-07-27
---
## 目的

キャリー巻き戻し、通常のリスク回避、景気後退、政策再評価、資金ストレス、介入観測、広いドル変動を区別します。一致は証明ではありません。

| 観察 | キャリー巻き戻し解釈 | 代替説明 | 必要な確認 |
|---|---|---|---|
| 急な円高 | 円調達の買い戻し | ドル安・還流・介入観測 | 複数円クロス、金利差、vol |
| 株安 | 投資先売却 | 景気・利益・固有ショック | 信用、広がり、円との時刻 |
| 高金利通貨安 | キャリー縮小 | 商品・地域要因 | 広範性とFX vol |
| ボラ上昇 | リスク上限を圧迫 | イベント保険需要 | 実現vol、流動性、継続 |
| 短期利回り再評価 | 金利差縮小 | 通常の政策材料 | 日米両脚と先物/OIS |
| 信用spread拡大 | デレバレッジ波及 | 景気後退・信用事件 | 資金市場、部門の広がり |
| 実質金利低下 | 安全需要・政策再評価 | インフレ期待変化 | 名目とBEの分解 |
| 金上昇 | 安全・実質金利経路 | ドル安・金固有需要 | ドル、実質、流動性 |
| 金が初め下落 | 換金・証拠金売り | 金固有フロー | 信用stressと後続反応 |
| ドル上昇/下落 | 資金需要/米金利低下 | 広いドル共通要因 | broad indexと二国間 |

## 判定順序

1. 変化の開始時刻とイベントを固定する。
2. 日米短期金利差の変化があるか調べる。
3. 円だけか、複数円クロス・高金利通貨へ広がるかを見る。
4. FXボラ、株、信用、資金市場の同時変化を確認する。
5. 景気後退、政策、介入、ドルの説明を同じ証拠で比較する。
6. 反証が残るなら「原因未確定」とし、価格構造へ戻る。
