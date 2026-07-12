import Link from "next/link";
import { LensList, TopNav } from "./components";
import { getAvailableLenses, getIndexCountsByLens } from "../lib/content";

export default function HomePage() {
  const lenses = getAvailableLenses();
  const indexCounts = getIndexCountsByLens();

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

        <section className="section-block" aria-labelledby="lens-heading">
          <div className="section-heading">
            <h2 id="lens-heading">上位領域から選ぶ</h2>
            <Link href="/indexes">すべてのテーマ索引を見る</Link>
          </div>
          <LensList lenses={lenses} counts={indexCounts} />
        </section>
      </main>
    </>
  );
}
