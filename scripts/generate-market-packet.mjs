#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { createValidators, loadRegistry, validateDocument } from './data-validation-lib.mjs';

const args = process.argv.slice(2);
const date = args[args.indexOf('--date') + 1];
if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date) || new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date) {
  console.error('Usage: npm run market:packet -- --date YYYY-MM-DD'); process.exit(1);
}
const root = process.cwd();
const [year, month] = date.split('-');
const locations = ['releases', 'markets', 'positioning'].map((kind) => ({ kind, file: path.join(root, 'data', kind, year, month, `${date}.json`) }));
const registry = loadRegistry(root);
const validators = createValidators(root);
const records = [];
for (const { kind, file } of locations) {
  if (!fs.existsSync(file)) continue;
  let document;
  try { document = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (error) { console.error(`${file}: ${error.message}`); process.exit(1); }
  const result = validateDocument(document, { registry, validators, file: path.relative(root, file) });
  if (result.errors.length) { result.errors.forEach((error) => console.error(`Error: ${error}`)); process.exit(1); }
  records.push(...result.records.map((record) => ({ ...record, _kind: kind })));
}
const releases = records.filter((record) => record.record_type === 'economic_release');
const markets = records.filter((record) => record.record_type === 'market_snapshot');
const positions = records.filter((record) => record.record_type === 'positioning_snapshot');
const value = (input) => input === null || input === undefined ? 'データなし' : String(input);
const cite = (record) => `取得: ${record.retrieved_at}; 出典: ${record.source_name} (${record.source_url})`;
const bullet = (items, render) => items.length ? items.map((item) => `- ${render(item)}`).join('\n') : '- データなし（未取得）';
const marketGroup = (...classes) => markets.filter((record) => classes.includes(record.asset_class));
const renderMarket = (record) => `${record.instrument_name}: ${value(record.price)} ${record.unit}; 変化 ${value(record.change)} / ${value(record.change_percent)}%; 観測 ${record.observed_at} (${record.observation_kind}); ${cite(record)}`;
const sources = [...new Map(records.map((record) => [`${record.source_name}|${record.source_url}`, record])).values()];
const latestRetrieved = records.map((record) => record.retrieved_at).filter(Boolean).sort().at(-1);
const output = `# ${date} マクロ・市場分析パケット

> このファイルは保存済み観測事実の整理物です。分析結果や売買シグナルではありません。

# 対象日時

- 対象日: ${date}

# 利用データの基準時点

- 最終取得日時: ${latestRetrieved ?? 'データなし（未取得）'}
- 対象日の日次ファイルだけを使用。後日得た情報を発表前情報として扱わないこと。

# 経済指標

## 実績

${bullet(releases, (r) => `${r.indicator_name} (${r.period}): ${value(r.actual)} ${r.unit} (${r.change_basis}); 発表 ${r.released_at}; vintage ${r.vintage}; ${cite(r)}`)}

## 市場予想との差

${bullet(releases, (r) => `${r.indicator_name}: 実績 ${value(r.actual)} / 予想 ${value(r.consensus)} ${r.unit}; 予想出典: ${r.consensus_source ?? '出典未確認'}`)}

## 前回値と改定

${bullet(releases, (r) => `${r.indicator_name}: 前回当初 ${value(r.previous_initial)} / 前回改定 ${value(r.previous_revised)} ${r.unit}; vintage ${r.vintage}`)}

# 金利とインフレ期待

${bullet(marketGroup('rate', 'inflation_expectation'), renderMarket)}

# ドル・ボラティリティ

${bullet(marketGroup('currency', 'volatility'), renderMarket)}

# ゴールド

${bullet(markets.filter((r) => r.instrument_id === 'gold'), renderMarket)}

# S&P 500

${bullet(markets.filter((r) => r.instrument_id === 'sp500'), renderMarket)}

# ポジショニング

${bullet(positions, (r) => `${r.instrument_id} / ${r.trader_category}: long ${value(r.long)}, short ${value(r.short)}, spreading ${value(r.spreading)}, net ${value(r.net)}, open interest ${value(r.open_interest)} ${r.unit}; report ${r.report_date}; published ${r.published_at}; ${cite(r)}`)}

# 欠落データ

${records.length ? [
  releases.length ? null : '- 経済指標: 未取得',
  marketGroup('rate', 'inflation_expectation').length ? null : '- 金利・インフレ期待: 未取得',
  marketGroup('currency', 'volatility').length ? null : '- ドル・ボラティリティ: 未取得',
  markets.some((r) => r.instrument_id === 'gold') ? null : '- ゴールド: 未取得',
  markets.some((r) => r.instrument_id === 'sp500') ? null : '- S&P 500: 未取得',
  positions.length ? null : '- ポジショニング: 未取得',
].filter(Boolean).join('\n') || '- 明示された主要区分に欠落なし（各フィールドの「データなし」は別途確認）' : '- 全区分: データなし（未取得）'}

# 出典

${bullet(sources, (r) => `[${r.source_name}](${r.source_url}) — 取得 ${r.retrieved_at}`)}

# ChatGPTへの分析指示

[[macro-market-analysis-prompt]]の順序と制約に従う。事実・解釈・仮説を分離し、不明値を推測せず、欠落が結論へ与える影響と判断を覆す条件を示す。売買シグナルではなく市場環境の判断材料として出力する。
`;
const outputDir = path.join(root, 'sources/market-packets');
fs.mkdirSync(outputDir, { recursive: true });
const outputFile = path.join(outputDir, `${date}.md`);
fs.writeFileSync(outputFile, output);
console.log(`Generated ${path.relative(root, outputFile)} from ${records.length} record(s).`);
