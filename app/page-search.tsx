"use client";

import { useMemo, useState } from "react";
import type { SearchPageItem } from "../lib/content";
import { PageListItem } from "./components";

function normalizeSearchText(value: string): string {
  return value.toLocaleLowerCase("ja-JP").normalize("NFKC");
}

function pageMatchesQuery(page: SearchPageItem, query: string): boolean {
  const normalizedQuery = normalizeSearchText(query.trim());
  if (!normalizedQuery) return true;

  const searchableText = normalizeSearchText([
    page.title,
    page.summary,
    page.id,
    page.type,
    page.tags.join(" "),
  ].join("\n"));

  return normalizedQuery.split(/\s+/).every((term) => searchableText.includes(term));
}

export function PageSearch({ pages }: { pages: SearchPageItem[] }) {
  const [query, setQuery] = useState("");
  const filteredPages = useMemo(() => pages.filter((page) => pageMatchesQuery(page, query)), [pages, query]);

  return (
    <section className="search-section" aria-label="記事検索">
      <label className="search-label" htmlFor="page-search">
        記事を検索
      </label>
      <input
        id="page-search"
        className="search-input"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="タイトル、要約、タグ、IDから検索"
        autoComplete="off"
      />
      <p className="search-count" aria-live="polite">
        {filteredPages.length} / {pages.length} ページ
      </p>
      {filteredPages.length > 0 ? (
        <div className="page-list search-results">
          {filteredPages.map((page) => <PageListItem key={page.id} page={page} />)}
        </div>
      ) : (
        <p className="empty-state">一致するページがありません。別の言葉で検索してください。</p>
      )}
    </section>
  );
}
