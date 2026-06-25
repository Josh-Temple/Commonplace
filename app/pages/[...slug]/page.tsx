import { notFound } from "next/navigation";
import { PageListItem, TopNav } from "../../components";
import { getAllPages, getPageBySlug, getSourceNote, resolvePageRefs } from "../../../lib/content";
import { MarkdownBody } from "../../../lib/markdown";

const typeLabels: Record<string, string> = {
  concept: "概念",
  method: "方法",
  protocol: "手順",
  rule: "ルール",
  index: "入口",
  output: "出力",
};

const statusLabels: Record<string, string> = {
  draft: "下書き",
};

const confidenceLabels: Record<string, string> = {
  low: "低",
  medium: "中",
  high: "高",
};

export function generateStaticParams() {
  return getAllPages().map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string[] } }) {
  const page = getPageBySlug(params.slug);
  return { title: page ? `${page.title} · Lumen` : "Lumen" };
}

export default function ContentDetailPage({ params }: { params: { slug: string[] } }) {
  const page = getPageBySlug(params.slug);
  if (!page) notFound();

  const related = resolvePageRefs(page.related);
  const nextPages = resolvePageRefs(page.next);
  const sourceNotes = page.sources.map(getSourceNote);

  return (
    <>
      <TopNav />
      <main>
        <article className="reader-card">
          <header className="reader-header">
            <p className="eyebrow">{typeLabels[page.type] ?? page.type}</p>
            <h1>{page.title}</h1>
            <p className="summary">{page.summary}</p>
          </header>

          <MarkdownBody body={page.body} />
        </article>

        {related.length > 0 ? (
          <section className="section-block">
            <h2>関連ノート</h2>
            <div className="compact-grid">{related.map((item) => <PageListItem key={item.id} page={item} />)}</div>
          </section>
        ) : null}

        {nextPages.length > 0 ? (
          <section className="section-block next-section">
            <h2>次に読む</h2>
            <div className="compact-grid">{nextPages.map((item) => <PageListItem key={item.id} page={item} />)}</div>
          </section>
        ) : null}

        {sourceNotes.length > 0 ? (
          <section className="section-block sources-box">
            <h2>出典ノート</h2>
            <p>出典ノートは調査用メモであり、読者向け本文そのものではありません。</p>
            <ul>
              {sourceNotes.map((source) => (
                <li key={source.path}>
                  <code>{source.path}</code> — {source.title}{source.exists ? "" : " (未確認)"}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="section-block page-info">
          <h2>ページ情報</h2>
          <dl>
            <div>
              <dt>状態</dt>
              <dd>{statusLabels[page.status] ?? page.status}</dd>
            </div>
            <div>
              <dt>信頼度</dt>
              <dd>{confidenceLabels[page.confidence] ?? page.confidence}</dd>
            </div>
            {page.updated ? (
              <div>
                <dt>更新日</dt>
                <dd>{page.updated}</dd>
              </div>
            ) : null}
            {page.tags.length > 0 ? (
              <div>
                <dt>タグ</dt>
                <dd>{page.tags.map((tag) => `#${tag}`).join(" / ")}</dd>
              </div>
            ) : null}
          </dl>
        </section>
      </main>
    </>
  );
}
