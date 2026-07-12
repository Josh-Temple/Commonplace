import Link from "next/link";
import { PageGrid, TopNav } from "../components";
import { getAvailableLenses, getIndexPagesByLens } from "../../lib/content";

export default function IndexesPage() {
  const lenses = getAvailableLenses();

  return (
    <>
      <TopNav />
      <main>
        <header className="page-header">
          <p className="eyebrow">テーマ</p>
          <h1>テーマ索引</h1>
          <p>テーマから読み始め、必要なページへ静かにつなげます。</p>
        </header>
        {lenses.map((lens) => (
          <section className="section-block" key={lens.slug} aria-labelledby={`${lens.slug}-heading`}>
            <div className="section-heading">
              <h2 id={`${lens.slug}-heading`}>{lens.title}</h2>
              <Link href={`/indexes/${lens.slug}`}>この領域を見る</Link>
            </div>
            <p className="section-summary">{lens.description}</p>
            <PageGrid pages={getIndexPagesByLens(lens.slug)} />
          </section>
        ))}
      </main>
    </>
  );
}
