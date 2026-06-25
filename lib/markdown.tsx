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

function splitTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableSeparator(line: string): boolean {
  const cells = splitTableRow(line);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function isMarkdownTable(block: string): boolean {
  const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
  if (lines.length < 3) return false;
  if (!lines.every((line) => line.startsWith("|") && line.endsWith("|"))) return false;

  const headerCells = splitTableRow(lines[0]);
  const separatorCells = splitTableRow(lines[1]);
  return headerCells.length > 0 && headerCells.length === separatorCells.length && isTableSeparator(lines[1]);
}

export function MarkdownBody({ body }: { body: string }) {
  const blocks = body.split(/\n{2,}/);

  return (
    <div className="markdown-body">
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (isMarkdownTable(trimmed)) {
          const lines = trimmed.split("\n").map((line) => line.trim()).filter(Boolean);
          const headers = splitTableRow(lines[0]);
          const rows = lines.slice(2).map(splitTableRow);

          return (
            <div key={index} className="table-scroll" role="region" aria-label="表">
              <table>
                <thead>
                  <tr>
                    {headers.map((header, headerIndex) => (
                      <th key={headerIndex}>{inlineWithWikilinks(header)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {headers.map((_, cellIndex) => (
                        <td key={cellIndex}>{inlineWithWikilinks(row[cellIndex] ?? "")}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (trimmed.startsWith("### ")) {
          return <h3 key={index}>{inlineWithWikilinks(trimmed.replace(/^### /, ""))}</h3>;
        }

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
