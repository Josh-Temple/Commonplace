import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

export type PageType = "concept" | "method" | "protocol" | "rule" | "index" | "output";

export type Lens = "business" | "markets" | "ideas-life";

export type LensInfo = {
  slug: Lens;
  title: string;
  description: string;
};

export const LENSES: readonly LensInfo[] = [
  {
    slug: "markets",
    title: "市場・トレード",
    description: "市場分析、トレードプロセス、Volume Profileなど",
  },
  {
    slug: "ideas-life",
    title: "思想・実践",
    description: "仏教、瞑想、感情調整、意思決定など",
  },
  {
    slug: "business",
    title: "仕事・組織",
    description: "仕事と組織に関するテーマ索引。",
  },
] as const;

const lensSlugs = new Set<Lens>(LENSES.map((lens) => lens.slug));

export type ContentPage = {
  id: string;
  title: string;
  type: PageType;
  lens?: Lens;
  status: string;
  summary: string;
  tags: string[];
  confidence: "low" | "medium" | "high" | string;
  sources: string[];
  related: string[];
  next: string[];
  updated: string;
  body: string;
  slug: string[];
  href: string;
};

export type SearchPageItem = {
  id: string;
  title: string;
  type: string;
  summary: string;
  tags: string[];
  updated: string;
  href: string;
};

type RawFrontmatter = Partial<Omit<ContentPage, "body" | "slug" | "href">>;

type ContentIndex = {
  pages: ContentPage[];
  byId: Map<string, ContentPage>;
  bySlug: Map<string, ContentPage>;
};

let cachedContentIndex: ContentIndex | undefined;

function walkMarkdownFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkMarkdownFiles(fullPath);
    if (entry.isFile() && entry.name.endsWith(".md")) return [fullPath];
    return [];
  });
}

function toStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String) : [];
}

function normalizeSlugKey(slug: string[]): string {
  return slug.join("/");
}

function normalizeLens(value: unknown, filePath: string): Lens | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value === "string" && lensSlugs.has(value as Lens)) return value as Lens;

  throw new Error(`Invalid lens frontmatter in ${path.relative(process.cwd(), filePath)}: ${String(value)}`);
}

function pageFromFile(filePath: string): ContentPage {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as RawFrontmatter;
  const relative = path.relative(contentRoot, filePath);
  const slug = relative.replace(/\.md$/, "").split(path.sep);
  const fallbackId = slug.at(-1) ?? "untitled";

  const lens = normalizeLens(data.lens, filePath);

  if (data.type === "index" && !lens) {
    throw new Error(`Missing lens frontmatter in index page ${path.relative(process.cwd(), filePath)}`);
  }

  if (data.type !== "index" && lens) {
    throw new Error(`Only index pages can define lens frontmatter: ${path.relative(process.cwd(), filePath)}`);
  }

  return {
    id: data.id ?? fallbackId,
    title: data.title ?? fallbackId,
    type: data.type ?? "concept",
    lens,
    status: data.status ?? "draft",
    summary: data.summary ?? "",
    tags: toStringArray(data.tags),
    confidence: data.confidence ?? "low",
    sources: toStringArray(data.sources),
    related: toStringArray(data.related),
    next: toStringArray(data.next),
    updated: String(data.updated ?? ""),
    body: parsed.content.trim(),
    slug,
    href: `/pages/${normalizeSlugKey(slug)}`,
  };
}

function getContentIndex(): ContentIndex {
  if (cachedContentIndex) return cachedContentIndex;

  const pages = walkMarkdownFiles(contentRoot)
    .map(pageFromFile)
    .sort((a, b) => a.title.localeCompare(b.title, "ja"));

  cachedContentIndex = {
    pages,
    byId: new Map(pages.map((page) => [page.id, page])),
    bySlug: new Map(pages.map((page) => [normalizeSlugKey(page.slug), page])),
  };

  return cachedContentIndex;
}

export function getAllPages(): ContentPage[] {
  return getContentIndex().pages;
}

export function getSearchPages(): SearchPageItem[] {
  return getContentIndex().pages.map(({ id, title, type, summary, tags, updated, href }) => ({
    id,
    title,
    type,
    summary,
    tags,
    updated,
    href,
  }));
}

export function getPageBySlug(slug: string[]): ContentPage | undefined {
  return getContentIndex().bySlug.get(normalizeSlugKey(slug));
}

export function getPageById(id: string): ContentPage | undefined {
  return getContentIndex().byId.get(id);
}

export function getIndexPages(): ContentPage[] {
  return getContentIndex().pages.filter((page) => page.type === "index");
}

export function isLens(value: string): value is Lens {
  return lensSlugs.has(value as Lens);
}

export function getLensInfo(lens: Lens): LensInfo {
  return LENSES.find((item) => item.slug === lens)!;
}

export function getIndexPagesByLens(lens: Lens): ContentPage[] {
  return getIndexPages().filter((page) => page.lens === lens);
}

export function getIndexCountsByLens(): Record<Lens, number> {
  return LENSES.reduce(
    (counts, lens) => ({ ...counts, [lens.slug]: getIndexPagesByLens(lens.slug).length }),
    { business: 0, markets: 0, "ideas-life": 0 } as Record<Lens, number>,
  );
}

export function getAvailableLenses(): LensInfo[] {
  const counts = getIndexCountsByLens();
  return LENSES.filter((lens) => counts[lens.slug] > 0);
}

export function resolvePageRefs(ids: string[]): ContentPage[] {
  const { byId } = getContentIndex();
  return ids.map((id) => byId.get(id)).filter((page): page is ContentPage => Boolean(page));
}

export function getSourceNote(sourcePath: string): { path: string; title: string; exists: boolean } {
  const fullPath = path.join(process.cwd(), sourcePath);
  if (!sourcePath.startsWith("sources/") || !fs.existsSync(fullPath)) {
    return { path: sourcePath, title: sourcePath, exists: false };
  }

  const parsed = matter(fs.readFileSync(fullPath, "utf8"));
  return { path: sourcePath, title: String(parsed.data.title ?? sourcePath), exists: true };
}
