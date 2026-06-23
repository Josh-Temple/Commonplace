import { PageGrid, TopNav } from "../components";
import { getIndexPages } from "../../lib/content";

export default function IndexesPage() {
  return (
    <>
      <TopNav />
      <main>
        <header className="page-header">
          <p className="eyebrow">Themes</p>
          <h1>Theme indexes</h1>
          <p>Start from a theme, then follow related and next links through the knowledge base.</p>
        </header>
        <PageGrid pages={getIndexPages()} />
      </main>
    </>
  );
}
