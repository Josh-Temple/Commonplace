import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

export type PageType = "concept" | "method" | "protocol" | "rule" | "index" | "output";

export type ContentPage = {
  id: string;
  title: string;
  type: PageType;
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

function pageFromFile(filePath: string): ContentPage {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as RawFrontmatter;
  const relative = path.relative(contentRoot, filePath);
  const slug = relative.replace(/\.md$/, "").split(path.sep);
  const fallbackId = slug.at(-1) ?? "untitled";

  return {
    id: data.id ?? fallbackId,
    title: data.title ?? fallbackId,
    type: data.type ?? "concept",
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
