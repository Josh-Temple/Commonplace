import Link from "next/link";
import { PageGrid, TopNav } from "./components";
import { getAllPages, getIndexPages } from "../lib/content";

export default function HomePage() {
  const indexes = getIndexPages();
  const recent = getAllPages().slice(0, 4);

  return (
    <>
      <TopNav />
      <main>
        <section className="hero">
          <p className="eyebrow">Personal knowledge base</p>
          <h1>Lumen</h1>
          <p>Linked concepts, methods, protocols, rules, and source notes for focused mobile reading.</p>
          <div className="hero-actions">
            <Link href="/indexes" className="button primary">Browse themes</Link>
            <Link href="/pages" className="button">All pages</Link>
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <h2>Theme indexes</h2>
            <Link href="/indexes">View all</Link>
          </div>
          <PageGrid pages={indexes} />
        </section>

        <section className="section-block">
          <div className="section-heading">
            <h2>Reading pages</h2>
            <Link href="/pages">View all</Link>
          </div>
          <PageGrid pages={recent} />
        </section>
      </main>
    </>
  );
}
