---
id: bond-prices-and-yields
title: 債券価格と利回り
type: concept
status: draft
summary: 債券のキャッシュフロー、価格と利回りの逆関係、durationとcredit spreadの基礎。
tags:
  - trading
  - macro
confidence: medium
sources:
  - sources/research-notes/bonds-yields-and-duration.md
related:
  - nominal-and-real-interest-rates
  - yield-curve
  - term-premium
next:
  - nominal-and-real-interest-rates
updated: 2026-07-18
---
## 債券の部品

債券は発行体へ資金を貸し、契約上の利払いと元本返済を受ける証券です。couponは定期利払い、principalは額面元本、maturityは返済期限、market priceは市場で売買される価格です。Current yieldは概ね「年coupon ÷ 現在価格」、yield to maturity（YTM）は満期まで保有し契約どおり支払われる前提で、価格と全cash flowを結ぶ収益率です。両者は同じではありません。

## なぜ価格と利回りは逆に動くか

既存の固定couponは変わりません。市場金利が上がると、そのcouponを新発債と釣り合わせるため既発債価格は下がり、計算される利回りは上がります。逆も同様です（他条件一定）。

**架空例:** 額面100、年coupon 3の債券が価格100ならcurrent yieldは3%。同程度の新発債が4%を提供すれば、古い債券は100のままでは相対的に魅力が低いので価格が下がる方向に調整されます。仮に価格95ならcurrent yieldは約3.16%ですが、YTMは元本100への回帰も含むため3.16%とは一致しません。

## Durationとconvexity

Durationはcash flowを受ける時期を反映した金利感応度の近似です。一般に満期が長くcouponが低いほど感応度は大きくなります。Convexityは利回り変化が大きい時に価格変化が直線近似から曲がる性質を補います。短期債も動きますが、同じ利回り変化なら長期債の価格変化が大きいことが多い、という比較で使います。

## 「金利が上がった」の分解

国債利回りはrisk-free benchmarkに近い一方、社債利回りには国債等に対するcredit spreadが加わります。政策期待で2年が上がったのか、成長・インフレ・[[term-premium]]で10年や30年が上がったのか、credit spreadだけ拡大したのかを区別します。

## よくある誤解

- Coupon rateとmarket yieldは同じではない。
- Yield上昇で既存保有者のcouponが直ちに増えるわけではない。
- 満期、信用、流動性が違う全債券のyieldは同じ動きをしない。
- Treasury yieldと企業の借入費用は関連するが、credit spread等があるため同一ではない。
