#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createValidators, loadRegistry, validateDocument } from './data-validation-lib.mjs';

const ISO_INSTANT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
const DATE_FILE = /^\d{4}-\d{2}-\d{2}\.json$/;
export function parseAsOf(input, date) {
  const value = input ?? `${date}T23:59:59.999Z`;
  const epoch = ISO_INSTANT.test(value) ? Date.parse(value) : Number.NaN;
  if (!Number.isFinite(epoch)) throw new Error('--as-of must be a valid ISO 8601 date-time with Z or an explicit UTC offset.');
  return { value, epoch, utc: new Date(epoch).toISOString(), timezone: value.endsWith('Z') ? 'UTC (Z)' : `UTC offset ${value.slice(-6)}` };
}

// Kept behind a small boundary so a manifest/index can replace directory walking later.
export function datedJsonFiles(directory, { from, through } = {}) {
  const walk = (dir) => fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(target);
    if (!DATE_FILE.test(entry.name)) return [];
    const date = entry.name.slice(0, 10);
    return (!from || date >= from) && (!through || date <= through) ? [target] : [];
  }) : [];
  return walk(directory).sort();
}

function loadFiles(files, context, kind) {
  return files.flatMap((file) => {
    const document = JSON.parse(fs.readFileSync(file, 'utf8'));
    const result = validateDocument(document, { ...context, file: path.relative(context.root, file) });
    if (result.errors.length) throw new Error(result.errors.join('\n'));
    return result.records.map((record) => ({ ...record, _kind: kind }));
  });
}

export function selectPointInTime(records, asOfEpoch) {
  const eligible = records.filter((record) => Date.parse(record.retrieved_at) <= asOfEpoch);
  const excludedFuture = records.length - eligible.length;
  const groups = new Map();
  const other = [];
  for (const record of eligible) {
    if (record.record_type !== 'economic_release') { other.push(record); continue; }
    const key = `${record.indicator_id}|${record.period}|${record.released_at}`;
    const group = groups.get(key) ?? [];
    group.push(record); groups.set(key, group);
  }
  let revisedVintageCount = 0;
  const releases = [...groups.values()].map((group) => {
    group.sort((a, b) => Date.parse(a.retrieved_at) - Date.parse(b.retrieved_at));
    if (group.length > 1) revisedVintageCount += 1;
    return group.at(-1);
  });
  return { records: [...releases, ...other], excludedFuture, revisedVintageCount };
}

function selectPositioning(records, asOfEpoch) {
  const eligible = records.filter((r) => Date.parse(r.published_at) <= asOfEpoch && Date.parse(r.retrieved_at) <= asOfEpoch);
  const excludedFuture = records.length - eligible.length;
  if (!eligible.length) return { records: [], excludedFuture };
  const latestReport = eligible.reduce((latest, r) => r.report_date > latest ? r.report_date : latest, '');
  const latest = new Map();
  for (const record of eligible.filter((r) => r.report_date === latestReport)) {
    const key = `${record.dataset_id}|${record.instrument_id}|${record.trader_category}|${record.report_date}`;
    const current = latest.get(key);
    if (!current || Date.parse(record.retrieved_at) > Date.parse(current.retrieved_at)) latest.set(key, record);
  }
  return { records: [...latest.values()], excludedFuture };
}

export function generatePacket({ root = process.cwd(), date, asOf: asOfInput, output: outputInput } = {}) {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date) || new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date) throw new Error('--date must be a valid YYYY-MM-DD date.');
  const asOf = parseAsOf(asOfInput, date);
  const [year, month] = date.split('-');
  const context = { root, registry: loadRegistry(root), validators: createValidators(root) };
  const releaseFiles = datedJsonFiles(path.join(root, 'data/releases'));
  const marketFile = path.join(root, 'data/markets', year, month, `${date}.json`);
  // File dates after the UTC as-of date cannot contain eligible retrievals.
  const positioningFiles = datedJsonFiles(path.join(root, 'data/positioning'), { through: asOf.utc.slice(0, 10) });
  const releaseCandidates = loadFiles(releaseFiles, context, 'releases').filter((r) => r.record_type === 'economic_release' && new Date(Date.parse(r.released_at)).toISOString().slice(0, 10) === date);
  const marketCandidates = loadFiles(fs.existsSync(marketFile) ? [marketFile] : [], context, 'markets').filter((r) => r.record_type === 'market_snapshot' && new Date(Date.parse(r.observed_at)).toISOString().slice(0, 10) === date);
  const positioningCandidates = loadFiles(positioningFiles, context, 'positioning').filter((r) => r.record_type === 'positioning_snapshot');
  const selectedRelease = selectPointInTime(releaseCandidates, asOf.epoch);
  const selectedMarket = selectPointInTime(marketCandidates, asOf.epoch);
  const selectedPositioning = selectPositioning(positioningCandidates, asOf.epoch);
  const releases = selectedRelease.records;
  const markets = selectedMarket.records;
  const positions = selectedPositioning.records;
  const records = [...releases, ...markets, ...positions];
  const excludedFuture = selectedRelease.excludedFuture + selectedMarket.excludedFuture + selectedPositioning.excludedFuture;
  const value = (input) => input === null || input === undefined ? 'データなし' : String(input);
  const cite = (record) => `取得: ${record.retrieved_at}; 出典: ${record.source_name} (${record.source_url})`;
  const bullet = (items, render) => items.length ? items.map((item) => `- ${render(item)}`).join('\n') : '- データなし（未取得）';
  const marketGroup = (...classes) => markets.filter((record) => classes.includes(record.asset_class));
  const renderMarket = (record) => `${record.instrument_name}: ${value(record.price)} ${record.unit}; 変化 ${value(record.change)} / ${value(record.change_percent)}%; 観測 ${record.observed_at} (${record.observation_kind}); ${cite(record)}`;
  const sources = [...new Map(records.map((record) => [`${record.source_name}|${record.source_url}`, record])).values()];
  const latest = records.reduce((best, record) => !best || Date.parse(record.retrieved_at) > Date.parse(best.retrieved_at) ? record : best, null);
  const output = `# ${date} マクロ・市場分析パケット

> このファイルは保存済み観測事実の整理物です。分析結果や売買シグナルではありません。

# 利用データの基準時点

- 対象日: ${date}
- as-of: ${asOf.value}（絶対時刻 ${asOf.utc}）
- 経済指標の選択範囲: data/releases 配下の全日付ファイルから、released_at のUTC日付が対象日で retrieved_at がas-of以前のレコード
- 市場データの選択範囲: 対象日ファイル内で observed_at のUTC日付も対象日であり、retrieved_at がas-of以前のレコード
- ポジショニングの選択ルール: published_atとretrieved_atがas-of以前のうち最新report_date。同一dataset_id・instrument_id・trader_category・report_dateでは最新retrieved_at
- 除外された将来取得レコード数: ${excludedFuture}
- 採用された後続vintage件数: ${selectedRelease.revisedVintageCount}
- vintage選択ルール: indicator_id・period・released_at が同じ経済指標では、as-of以前に取得したうち retrieved_at が最も新しいレコードだけを使用（日時は絶対時刻で比較）
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
  const stamp = asOf.utc.replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const outputFile = outputInput ? path.resolve(root, outputInput) : path.join(root, 'sources/market-packets', `${date}--as-of-${stamp}.md`);
  fs.mkdirSync(path.dirname(outputFile), { recursive: true }); fs.writeFileSync(outputFile, output);
  return { outputFile, output, recordCount: records.length, excludedFuture, revisedVintageCount: selectedRelease.revisedVintageCount };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const valueFor = (flag) => { const index = args.indexOf(flag); return index >= 0 ? args[index + 1] : undefined; };
  try {
    const result = generatePacket({ date: valueFor('--date'), asOf: valueFor('--as-of'), output: valueFor('--output') });
    console.log(`Generated ${path.relative(process.cwd(), result.outputFile)} from ${result.recordCount} record(s); excluded ${result.excludedFuture} future retrieval(s).`);
  } catch (error) { console.error(`Error: ${error.message}\nUsage: npm run market:packet -- --date YYYY-MM-DD [--as-of ISO-8601] [--output PATH]`); process.exit(1); }
}
