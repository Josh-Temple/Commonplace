import Link from "next/link";
import { FontSizeControl } from "./font-size-control";
import type { ContentPage } from "../lib/content";

export function TopNav() {
  return (
    <nav className="top-nav" aria-label="Primary navigation">
      <Link href="/">Lumen</Link>
      <Link href="/indexes">Themes</Link>
      <Link href="/pages">Pages</Link>
      <FontSizeControl />
    </nav>
  );
}

export function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "green" | "amber" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function PageCard({ page }: { page: ContentPage }) {
  return (
    <Link href={page.href} className="page-card">
      <span className="card-type">{page.type}</span>
      <h3>{page.title}</h3>
      <p>{page.summary}</p>
      <div className="card-meta">
        <Badge>{page.status}</Badge>
        <Badge tone={page.confidence === "medium" ? "amber" : page.confidence === "high" ? "green" : "neutral"}>
          {page.confidence}
        </Badge>
      </div>
    </Link>
  );
}

export function PageGrid({ pages }: { pages: ContentPage[] }) {
  return (
    <div className="page-grid">
      {pages.map((page) => (
        <PageCard key={page.id} page={page} />
      ))}
    </div>
  );
}
