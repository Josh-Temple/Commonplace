import Link from "next/link";
import { FontSizeControl } from "./font-size-control";
import type { ContentPage, LensInfo, Lens } from "../lib/content";

type PageListEntry = Pick<ContentPage, "id" | "title" | "summary" | "href">;

export function TopNav() {
  return (
    <nav className="top-nav" aria-label="Primary navigation">
      <Link href="/">Lumen</Link>
      <Link href="/indexes">テーマ</Link>
      <Link href="/pages">ページ</Link>
      <FontSizeControl />
    </nav>
  );
}

export function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "green" | "amber" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function PageListItem({ page }: { page: PageListEntry }) {
  return (
    <Link href={page.href} className="page-list-item">
      <h3>{page.title}</h3>
      <p>{page.summary}</p>
    </Link>
  );
}

export function PageGrid({ pages }: { pages: ContentPage[] }) {
  return (
    <div className="page-list">
      {pages.map((page) => (
        <PageListItem key={page.id} page={page} />
      ))}
    </div>
  );
}

export function LensList({ lenses, counts }: { lenses: readonly LensInfo[]; counts: Record<Lens, number> }) {
  return (
    <div className="page-list lens-list">
      {lenses.map((lens) => (
        <Link href={`/indexes/${lens.slug}`} className="page-list-item lens-list-item" key={lens.slug}>
          <span className="item-count">{counts[lens.slug]}件のテーマ索引</span>
          <h3>{lens.title}</h3>
          <p>{lens.description}</p>
        </Link>
      ))}
    </div>
  );
}
