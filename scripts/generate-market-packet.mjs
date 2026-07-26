#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createValidators, loadRegistry, validateDocument } from './data-validation-lib.mjs';

const ISO_INSTANT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
export function parseAsOf(input, date) {
  const value = input ?? `${date}T23:59:59.999Z`;
  const epoch = ISO_INSTANT.test(value) ? Date.parse(value) : Number.NaN;
  if (!Number.isFinite(epoch)) throw new Error('--as-of must be a valid ISO 8601 date-time with Z or an explicit UTC offset.');
  return { value, epoch, timezone: value.endsWith('Z') ? 'UTC (Z)' : `UTC offset ${value.slice(-6)}` };
}

export function selectPointInTime(records, asOfEpoch) {
  const eligible = records.filter((record) => Date.parse(record.retrieved_at) <= asOfEpoch);
  const excludedFuture = records.length - eligible.length;
  const latestVintage = new Map();
  const other = [];
  for (const record of eligible) {
    if (record.record_type !== 'economic_release') { other.push(record); continue; }
    const key = `${record.indicator_id}|${record.period}|${record.released_at}`;
    const current = latestVintage.get(key);
    if (!current || Date.parse(record.retrieved_at) > Date.parse(current.retrieved_at)) latestVintage.set(key, record);
  }
  return { records: [...latestVintage.values(), ...other], excludedFuture };
}

export function generatePacket({ root = process.cwd(), date, asOf: asOfInput } = {}) {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date) || new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date) throw new Error('--date must be a valid YYYY-MM-DD date.');
  const asOf = parseAsOf(asOfInput, date);
  const [year, month] = date.split('-');
  const locations = ['releases', 'markets', 'positioning'].map((kind) => ({ kind, file: path.join(root, 'data', kind, year, month, `${date}.json`) }));
  const registry = loadRegistry(root);
  const validators = createValidators(root);
  const loaded = [];
  for (const { kind, file } of locations) {
    if (!fs.existsSync(file)) continue;
    const document = JSON.parse(fs.readFileSync(file, 'utf8'));
    const result = validateDocument(document, { registry, validators, file: path.relative(root, file) });
    if (result.errors.length) throw new Error(result.errors.join('\n'));
    loaded.push(...result.records.map((record) => ({ ...record, _kind: kind })));
  }
  const selected = selectPointInTime(loaded, asOf.epoch);
  const records = selected.records;
  const releases = records.filter((record) => record.record_type === 'economic_release');
  const markets = records.filter((record) => record.record_type === 'market_snapshot');
  const positions = records.filter((record) => record.record_type === 'positioning_snapshot');
  const value = (input) => input === null || input === undefined ? 'データなし' : String(input);
  const cite = (record) => `取得: ${record.retrieved_at}; 出典: ${record.source_name} (${record.source_url})`;
  const bullet = (items, render) => items.length ? items.map((item) => `- ${render(item)}`).join('\n') : '- データなし（未取得）';
  const marketGroup = (...classes) => markets.filter((record) => classes.includes(record.asset_class));
  const renderMarket = (record) => `${record.instrument_name}: ${value(record.price)} ${record.unit}; 変化 ${value(record.change)} / ${value(record.change_percent)}%; 観測 ${record.observed_at} (${record.observation_kind}); ${cite(record)}`;
  const sources = [...new Map(records.map((record) => [`${record.source_name}|${record.source_url}`, record])).values()];
  const latest = records.reduce((best, record) => !best || Date.parse(record.retrieved_at) > Date.parse(best.retrieved_at) ? record : best, null);
  const output = `# ${date} マクロ・市場分析パケット

> このファイルは保存済み観測事実の整理物です。分析結果や売買シグナルではありません。

# 対象日時

- 対象日: ${date}

# 利用データの基準時点

- 対象日: ${date}
- as-of: ${asOf.value}
- タイムゾーン: ${asOf.timezone}
- 除外された将来取得レコード数: ${selected.excludedFuture}
- vintage選択ルール: indicator_id・period・released_at が同じ経済指標では、as-of以前に取得したうち retrieved_at が最も新しいレコードだけを使用
- 最終取得日時: ${latest?.retrieved_at ?? 'データなし（未取得）'}

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

${records.length ? [releases.length ? null : '- 経済指標: 未取得', marketGroup('rate', 'inflation_expectation').length ? null : '- 金利・インフレ期待: 未取得', marketGroup('currency', 'volatility').length ? null : '- ドル・ボラティリティ: 未取得', markets.some((r) => r.instrument_id === 'gold') ? null : '- ゴールド: 未取得', markets.some((r) => r.instrument_id === 'sp500') ? null : '- S&P 500: 未取得', positions.length ? null : '- ポジショニング: 未取得'].filter(Boolean).join('\n') || '- 明示された主要区分に欠落なし（各フィールドの「データなし」は別途確認）' : '- 全区分: データなし（未取得）'}

# 出典

${bullet(sources, (r) => `[${r.source_name}](${r.source_url}) — 取得 ${r.retrieved_at}`)}

# ChatGPTへの分析指示

[[macro-market-analysis-prompt]]の順序と制約に従う。事実・解釈・仮説を分離し、不明値を推測せず、欠落が結論へ与える影響と判断を覆す条件を示す。売買シグナルではなく市場環境の判断材料として出力する。
`;
  const outputDir = path.join(root, 'sources/market-packets');
  fs.mkdirSync(outputDir, { recursive: true });
  const outputFile = path.join(outputDir, `${date}.md`);
  fs.writeFileSync(outputFile, output);
  return { outputFile, output, recordCount: records.length, excludedFuture: selected.excludedFuture };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const valueFor = (flag) => { const index = args.indexOf(flag); return index >= 0 ? args[index + 1] : undefined; };
  try {
    const result = generatePacket({ date: valueFor('--date'), asOf: valueFor('--as-of') });
    console.log(`Generated ${path.relative(process.cwd(), result.outputFile)} from ${result.recordCount} record(s); excluded ${result.excludedFuture} future retrieval(s).`);
  } catch (error) { console.error(`Error: ${error.message}\nUsage: npm run market:packet -- --date YYYY-MM-DD [--as-of ISO-8601]`); process.exit(1); }
}
