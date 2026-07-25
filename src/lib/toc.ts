import GithubSlugger from "github-slugger";

export type TocItem = { id: string; text: string; level: 2 | 3 };

// Extract h2/h3 headings from markdown and slug them the same way rehype-slug does,
// so in-page anchor links line up with the rendered heading ids.
export function buildToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  for (const line of markdown.split("\n")) {
    const m = /^(##|###)\s+(.+?)\s*$/.exec(line);
    if (!m) continue;
    const level = m[1].length === 2 ? 2 : 3;
    const text = m[2].replace(/[*_`]/g, "");
    items.push({ id: slugger.slug(text), text, level: level as 2 | 3 });
  }
  return items;
}
