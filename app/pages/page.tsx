import { PageGrid, TopNav } from "../components";
import { getAllPages } from "../../lib/content";

export default function PagesPage() {
  return (
    <>
      <TopNav />
      <main>
        <header className="page-header">
          <p className="eyebrow">Library</p>
          <h1>All pages</h1>
          <p>Concepts, methods, protocols, rules, indexes, and outputs rendered from Markdown.</p>
        </header>
        <PageGrid pages={getAllPages()} />
      </main>
    </>
  );
}
