import { notFound } from "next/navigation";
import { Badge, PageListItem, TopNav } from "../../components";
import { getAllPages, getPageBySlug, getSourceNote, resolvePageRefs } from "../../../lib/content";
import { MarkdownBody } from "../../../lib/markdown";

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
            <p className="eyebrow">{page.type}</p>
            <h1>{page.title}</h1>
            <p className="summary">{page.summary}</p>
            <div className="meta-row">
              <Badge>{page.status}</Badge>
              <Badge tone={page.confidence === "medium" ? "amber" : page.confidence === "high" ? "green" : "neutral"}>
                confidence: {page.confidence}
              </Badge>
              {page.updated ? <Badge>updated: {page.updated}</Badge> : null}
            </div>
            {page.tags.length > 0 ? (
              <div className="tag-row" aria-label="Tags">
                {page.tags.map((tag) => <span key={tag}>#{tag}</span>)}
              </div>
            ) : null}
          </header>

          <MarkdownBody body={page.body} />
        </article>

        {related.length > 0 ? (
          <section className="section-block">
            <h2>Related pages</h2>
            <div className="compact-grid">{related.map((item) => <PageListItem key={item.id} page={item} />)}</div>
          </section>
        ) : null}

        {nextPages.length > 0 ? (
          <section className="section-block next-section">
            <h2>Next links</h2>
            <div className="compact-grid">{nextPages.map((item) => <PageListItem key={item.id} page={item} />)}</div>
          </section>
        ) : null}

        {sourceNotes.length > 0 ? (
          <section className="section-block sources-box">
            <h2>Source notes</h2>
            <p>Source notes are research material, not final reader-facing content.</p>
            <ul>
              {sourceNotes.map((source) => (
                <li key={source.path}>
                  <code>{source.path}</code> — {source.title}{source.exists ? "" : " (missing)"}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </>
  );
}
