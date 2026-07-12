import Link from "next/link";
import { notFound } from "next/navigation";
import { PageGrid, TopNav } from "../../components";
import { getAvailableLenses, getIndexPagesByLens, getLensInfo, isLens } from "../../../lib/content";

type LensPageProps = {
  params: {
    lens: string;
  };
};

export function generateStaticParams() {
  return getAvailableLenses().map((lens) => ({ lens: lens.slug }));
}

export default function LensIndexPage({ params }: LensPageProps) {
  if (!isLens(params.lens)) notFound();

  const pages = getIndexPagesByLens(params.lens);
  if (pages.length === 0) notFound();

  const lens = getLensInfo(params.lens);

  return (
    <>
      <TopNav />
      <main>
        <header className="page-header">
          <p className="eyebrow">テーマ領域</p>
          <h1>{lens.title}</h1>
          <p>{lens.description}</p>
          <div className="hero-actions">
            <Link href="/indexes" className="button">すべてのテーマ索引を見る</Link>
          </div>
        </header>
        <section className="section-block" aria-labelledby="index-heading">
          <div className="section-heading">
            <h2 id="index-heading">この領域のテーマ索引</h2>
          </div>
          <PageGrid pages={pages} />
        </section>
      </main>
    </>
  );
}
