import Link from "next/link";
import { FontSizeControl } from "./font-size-control";
import type { ContentPage } from "../lib/content";

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
