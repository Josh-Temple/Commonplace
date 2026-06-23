import Link from "next/link";
import { getPageById } from "./content";

function inlineWithWikilinks(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const pattern = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const id = match[1].trim();
    const label = (match[2] ?? id).trim();
    const page = getPageById(id);
    parts.push(
      page ? (
        <Link key={`${id}-${match.index}`} href={page.href} className="wiki-link">
          {label}
        </Link>
      ) : (
        <span key={`${id}-${match.index}`} className="missing-link">
          {label}
        </span>
      ),
    );
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export function MarkdownBody({ body }: { body: string }) {
  const blocks = body.split(/\n{2,}/);

  return (
    <div className="markdown-body">
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("## ")) {
          return <h2 key={index}>{inlineWithWikilinks(trimmed.replace(/^## /, ""))}</h2>;
        }

        if (trimmed.startsWith("# ")) {
          return <h1 key={index}>{inlineWithWikilinks(trimmed.replace(/^# /, ""))}</h1>;
        }

        if (trimmed.includes("\n- ") || trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul key={index}>
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>{inlineWithWikilinks(item.replace(/^- /, ""))}</li>
              ))}
            </ul>
          );
        }

        if (/^\d+\. /.test(trimmed)) {
          const items = trimmed.split("\n").filter((line) => /^\d+\. /.test(line));
          return (
            <ol key={index}>
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>{inlineWithWikilinks(item.replace(/^\d+\. /, ""))}</li>
              ))}
            </ol>
          );
        }

        return <p key={index}>{inlineWithWikilinks(trimmed)}</p>;
      })}
    </div>
  );
}
