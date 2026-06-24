import { PageGrid, TopNav } from "../components";
import { getIndexPages } from "../../lib/content";

export default function IndexesPage() {
  return (
    <>
      <TopNav />
      <main>
        <header className="page-header">
          <p className="eyebrow">テーマ</p>
          <h1>テーマ索引</h1>
          <p>テーマから読み始め、必要なページへ静かにつなげます。</p>
        </header>
        <PageGrid pages={getIndexPages()} />
      </main>
    </>
  );
}
