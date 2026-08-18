// Auto-generates public/sitemap.xml from the real routes so it never drifts.
// Runs automatically before every build (see the "prebuild" npm script).
// Article slugs derive from src/data/articles/ (filename = slug);
// FAQ slugs derive from src/data/faq.ts.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const BASE = "https://www.ediliziafiscale.it";
const today = new Date().toISOString().slice(0, 10);

// path, changefreq, priority
const staticPages = [
  ["/", "weekly", "1.0"],
  ["/imprese", "weekly", "0.9"],
  ["/patrimonio", "weekly", "0.9"],
  ["/guide", "weekly", "0.8"],
  ["/domande-frequenti", "weekly", "0.8"],
  ["/studio", "monthly", "0.7"],
  ["/studio/come-lavoriamo", "yearly", "0.5"],
  ["/contatti", "monthly", "0.7"],
  ["/privacy", "yearly", "0.3"],
  ["/cookie", "yearly", "0.3"],
  ["/note-legali", "yearly", "0.3"],
];

const articleSlugs = readdirSync(join(root, "src/data/articles"))
  .filter((f) => f.endsWith(".ts"))
  .map((f) => f.replace(/\.ts$/, ""))
  .sort();

// slug FAQ estratti dal data file (slug: "...")
const faqSource = readFileSync(join(root, "src/data/faq.ts"), "utf-8");
const faqSlugs = [...faqSource.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);

const urls = [
  ...staticPages.map(([path, changefreq, priority]) => ({ loc: `${BASE}${path}`, changefreq, priority })),
  ...articleSlugs.map((slug) => ({ loc: `${BASE}/guide/${slug}`, changefreq: "monthly", priority: "0.7" })),
  ...faqSlugs.map((slug) => ({ loc: `${BASE}/domande-frequenti/${slug}`, changefreq: "monthly", priority: "0.6" })),
];

const body = urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(join(root, "public/sitemap.xml"), xml, "utf-8");
console.log(`[sitemap] wrote ${urls.length} URLs (${articleSlugs.length} guide, ${faqSlugs.length} FAQ) to public/sitemap.xml`);
