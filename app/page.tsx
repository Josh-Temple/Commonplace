import Link from "next/link";
import { PageGrid, TopNav } from "./components";
import { getIndexPages } from "../lib/content";

export default function HomePage() {
  const indexes = getIndexPages();

  return (
    <>
      <TopNav />
      <main>
        <section className="hero">
          <p className="eyebrow">個人の知識ベース</p>
          <h1>Lumen</h1>
          <p>読むことに集中するための、静かな個人知識ベース。</p>
          <div className="hero-actions">
            <Link href="/indexes" className="button primary">テーマを見る</Link>
            <Link href="/pages" className="button">すべてのページ</Link>
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <h2>テーマ索引</h2>
            <Link href="/indexes">すべて見る</Link>
          </div>
          <PageGrid pages={indexes} />
        </section>
      </main>
    </>
  );
}
