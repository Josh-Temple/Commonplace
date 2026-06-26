import { TopNav } from "../components";
import { PageSearch } from "../page-search";
import { getSearchPages } from "../../lib/content";

export default function PagesPage() {
  return (
    <>
      <TopNav />
      <main>
        <header className="page-header">
          <p className="eyebrow">Library</p>
          <h1>すべてのページ</h1>
          <p>Concepts, methods, protocols, rules, indexes, and outputs rendered from Markdown.</p>
        </header>
        <PageSearch pages={getSearchPages()} />
      </main>
    </>
  );
}
