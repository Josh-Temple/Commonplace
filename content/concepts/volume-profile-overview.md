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
  - high-volume-node
  - low-volume-node
  - volume-profile-distribution-structure
  - fast-travel-zone
next:
  - point-of-control
updated: 2026-06-29
---

## 要点

Volume Profileは、価格帯ごとの出来高を観察する補助レイヤーです。主な判断は、文脈、構造、水平線、invalidation、risk/rewardと組み合わせて行います。

## 概要

Volume Profileは、選んだ期間や表示範囲の中で、出来高がどの価格帯に集まったかを横向きの分布として表示する考え方です。

通常の出来高バーは「その時間にどれだけ取引されたか」を示します。Volume Profileは「どの価格でどれだけ取引されたか」を見ます。

## 主要な構成要素

- [[point-of-control|POC]]: 選択したprofile内でもっとも活動が集中した価格帯。
- [[value-area|Value Area]]: 活動の中心領域と、VAH / VALという上下境界。
- [[high-volume-node|HVN]]: 出来高が厚いnode。acceptance、balance、congestion候補。
- [[low-volume-node|LVN]]: 出来高が薄いnode。rejection、transition、distribution boundary候補。
- thin area: 価格があまり出来高を作らずに通過した可能性がある低出来高帯。
- [[volume-profile-distribution-structure|distribution]]: single / double / multiple distributionなど、全体の受容・拒否の形。
- [[profile-shapes|profile shape]]: D / P / bなどの視覚的要約。低信頼度の補助として扱う。

## どう読むか

- 出来高が集中した価格帯を見る。
- 速く通過した薄い価格帯を見る。
- POC、Value Area、VAH、VAL、HVN、LVNを判断エリアとして見る。
- 高出来高帯をacceptance / congestion候補、低出来高帯をrejection / transition候補として区別する。
- thin areaを通る[[fast-travel-zone|fast travel]]はscenarioとして観察し、予測として扱わない。
- その観察が[[market-structure]]と[[horizontal-levels]]に合うか確認する。

## Volume Profileで見ているもの

Volume Profileで見ているのは、選択した範囲の中で「どの価格帯にどれだけ活動が集まったか」です。通常の出来高バーが時間ごとの量を示すのに対し、Volume Profileは価格ごとの分布を見ます。

そのため、POC、Value Area、HVN、LVNはすべて「選んだprofile内での相対的な活動分布」です。銘柄そのものの永久的な価値ではありません。

## 何を見ていないか

Volume Profileは、単独では次を教えません。

- 次に価格が上がるか下がるか。
- その水準で必ず反発するか。
- 大口が今どこで注文を出しているか。
- entry、stop、targetの正解。
- 将来の勝率や確率。

過去の活動を整理する道具であり、未来を保証するモデルではありません。

## Profile rangeの種類

| Range type | 何を見るか | 注意 |
|---|---|---|
| Session profile | 1 session内の活動 | RTH / ETH / 24時間で変わる |
| Prior session profile | 前sessionの活動 | 今日も同じ反応とは限らない |
| Fixed range profile | 任意に選んだ区間 | 範囲選択が恣意的になりやすい |
| Visible range profile | 画面に見えている範囲 | zoomやscrollでPOC / VAが変わる |
| Composite profile | 複数sessionの合成 | 長期の受容は見えるが短期変化を隠す |

## Row size / bin sizeの影響

Row size、bin size、ticks per row、ticks per levelは、価格をどれだけ細かく区切るかを決めます。細かすぎるとノイズが増え、粗すぎると複数のnodeがひとつに見えることがあります。

HVN / LVNは特にこの影響を受けます。row設定を変えただけで、薄い場所が消えたり、POCの位置が別のrowへ移ったりすることがあります。

## Real volumeとtick volume

株式や先物のように取引所出来高を扱いやすい市場と、FX / CFDのようにプラットフォームがtick volumeやブローカー由来データを使う場合では、同じ「Volume Profile」でも意味が異なります。

FX / CFDのprofileは「中央集権的な全市場出来高」と同一視しない方が安全です。読めるのは、そのデータソースで観測されたactivityです。

## Platform differences

TradingView、Sierra Chart、NinjaTraderなどはPOCやValue Areaを扱いますが、計算に使う下位足、Value Area percentage、row aggregation、session template、表示範囲の扱いは異なります。

したがって、reader-facingな説明では「公式定義として安定している部分」と「プラットフォーム設定に依存する部分」を分けます。

## 信頼できる読み方と危ない読み方

信頼しやすい読み方:

- 「この選択範囲では、この価格帯に活動が集中していた。」
- 「このrow設定では、この場所が相対的な低出来高帯に見える。」
- 「POC / VAH / VALは、このprofile設定で計算された水準である。」

危ない読み方:

- 「POCだから必ず反発する。」
- 「LVNだから必ず速く抜ける。」
- 「Value Area外に出たから自動的に継続する。」
- 「80% ruleだから80%勝てる。」


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

## 関連ノート

- [[volume-profile]]
- [[point-of-control]]
- [[value-area]]
- [[high-volume-node]]
- [[low-volume-node]]
- [[volume-profile-distribution-structure]]
- [[fast-travel-zone]]
