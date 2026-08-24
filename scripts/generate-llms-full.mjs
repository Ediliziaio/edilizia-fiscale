// Genera public/llms-full.txt: il testo integrale del sito in markdown.
//
// llms.txt è l'indice, questo è il corpo. La differenza conta: un motore di
// risposta che segue l'indice deve fare 58 richieste HTML e ripulire markup,
// script e navigazione per arrivare al testo; qui trova tutto in un fetch, già
// in markdown, senza una riga che non sia contenuto.
//
// Gira nel prebuild, dopo l'indice articoli. Legge i file guida direttamente
// (non articlesMeta) perché serve il campo `content`, che l'indice non porta.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(path.join(root, p), "utf-8");
const BASE = "https://www.ediliziafiscale.it";

/**
 * I file guida sono moduli TypeScript, non JSON: qui si estraggono i blocchi
 * con una valutazione controllata del solo array `content`. È l'alternativa
 * onesta a un parser a espressioni regolari, che su testi con virgolette
 * tipografiche e parentesi sbaglierebbe in silenzio.
 */
const parseArticle = (src) => {
  const metaStart = src.indexOf("export const meta");
  const metaBody = src.slice(src.indexOf("{", metaStart), src.indexOf("\n};", metaStart) + 2);
  const contentStart = src.indexOf("content: [");
  const contentBody = src.slice(contentStart + "content: ".length, src.lastIndexOf("],") + 1);
  // eslint-disable-next-line no-new-func
  const meta = Function(`"use strict"; return (${metaBody})`)();
  const content = Function(`"use strict"; return (${contentBody})`)();
  return { meta, content };
};

/** [ancora](/percorso) -> [ancora](https://dominio/percorso), così i link restano risolvibili. */
const abs = (t) => String(t ?? "").replace(/\]\((\/[^)\s]*)\)/g, `](${BASE}$1)`);

const blockToMarkdown = (b) => {
  switch (b.type) {
    case "h2":
      return `\n## ${abs(b.text)}\n`;
    case "h3":
      return `\n### ${abs(b.text)}\n`;
    case "p":
      return abs(b.text);
    case "note":
      return `> ${abs(b.text)}`;
    case "quote":
      return `> ${abs(b.text)}${b.cite ? `\n> — ${b.cite}` : ""}`;
    case "ul":
      return b.items.map((i) => `- ${abs(i)}`).join("\n");
    case "ol":
      return b.items.map((i, n) => `${n + 1}. ${abs(i)}`).join("\n");
    case "table":
      return [
        `| ${b.headers.join(" | ")} |`,
        `| ${b.headers.map(() => "---").join(" | ")} |`,
        ...b.rows.map((r) => `| ${r.join(" | ")} |`),
      ].join("\n");
    case "timeline":
      return [
        b.title ? `**${b.title}**` : null,
        ...b.steps.map((s) => `- **${s.when}** — ${s.label}${s.detail ? `: ${s.detail}` : ""}`),
      ]
        .filter(Boolean)
        .join("\n");
    case "caselaw":
      return [
        b.title ? `**${b.title}**` : null,
        ...b.items.map((i) =>
          `- **${i.court}${i.ref ? `, ${i.ref}` : ""}** — ${i.principle}${i.impact ? ` *${i.impact}*` : ""}`,
        ),
      ]
        .filter(Boolean)
        .join("\n");
    case "faq":
      return b.items.map((f) => `**${f.q}**\n\n${abs(f.a)}`).join("\n\n");
    case "figure":
    case "image":
      // Le immagini non aggiungono nulla a un lettore che legge testo: si tiene
      // la didascalia solo quando dice qualcosa che il testo non dice già.
      return b.caption ? `*${b.caption}*` : null;
    default:
      return null;
  }
};

const L = [];
L.push("# Edilizia Fiscale — testo integrale");
L.push("");
L.push("Studio italiano di dottori commercialisti specializzato esclusivamente nel settore");
L.push("costruzioni. Questo file contiene il testo completo di tutte le guide, delle domande");
L.push("frequenti e del glossario pubblicati su " + BASE + ".");
L.push("");
L.push("I contenuti sono informativi e non sostituiscono una consulenza sul caso concreto.");
L.push("La normativa tributaria italiana cambia di frequente: verificare sempre la vigenza");
L.push("delle disposizioni citate. Ogni guida riporta la data di aggiornamento.");
L.push("");
L.push("---");

const files = readdirSync(path.join(root, "src/data/articles"))
  .filter((f) => f.endsWith(".ts"))
  .sort();

let guide = 0;
for (const f of files) {
  const { meta, content } = parseArticle(read(`src/data/articles/${f}`));
  guide++;
  L.push("");
  L.push(`# ${meta.title}`);
  L.push("");
  L.push(`URL: ${BASE}/guide/${meta.slug}`);
  L.push(`Categoria: ${meta.category} · Aggiornata: ${meta.date} · Lettura: ${meta.readTime}`);
  L.push("");
  L.push(abs(meta.intro));
  for (const b of content) {
    const md = blockToMarkdown(b);
    if (md) {
      L.push("");
      L.push(md);
    }
  }
  L.push("");
  L.push("---");
}

// FAQ: domanda, risposta breve e approfondimento.
const faqSrc = read("src/data/faq.ts");
const faqBody = faqSrc.slice(faqSrc.indexOf("= ["), faqSrc.indexOf("\n];", faqSrc.indexOf("= [")) + 2);
// eslint-disable-next-line no-new-func
const faqs = Function(`"use strict"; return (${faqBody.slice(2)})`)();

L.push("");
L.push("# Domande frequenti");
for (const f of faqs) {
  L.push("");
  L.push(`## ${f.question}`);
  L.push("");
  L.push(`URL: ${BASE}/domande-frequenti/${f.slug}`);
  L.push("");
  L.push(abs(f.answer));
  if (f.detail) {
    for (const p of [].concat(f.detail)) {
      L.push("");
      L.push(abs(p));
    }
  }
  if (f.guida) {
    L.push("");
    L.push(`Approfondimento: ${BASE}/guide/${f.guida}`);
  }
}
L.push("");
L.push("---");

// Glossario.
const glossSrc = read("src/data/glossario.ts");
const glossBody = glossSrc.slice(
  glossSrc.indexOf("Termine[] = [") + "Termine[] =".length,
  glossSrc.indexOf("\n];", glossSrc.indexOf("Termine[] = [")) + 2,
);
// eslint-disable-next-line no-new-func
const termini = Function(`"use strict"; return (${glossBody})`)();

L.push("");
L.push("# Glossario");
for (const t of termini) {
  L.push("");
  L.push(`## ${t.termine}${t.altro ? ` (${t.altro})` : ""}`);
  L.push("");
  L.push(`URL: ${BASE}/glossario#${t.slug}`);
  L.push("");
  L.push(t.definizione);
  if (t.norma) L.push(`\nRiferimento: ${t.norma}`);
  if (t.guida) L.push(`\nApprofondimento: ${BASE}/guide/${t.guida}`);
}

const out = L.join("\n") + "\n";
writeFileSync(path.join(root, "public/llms-full.txt"), out);
const words = out.split(/\s+/).filter(Boolean).length;
console.log(
  `[llms-full] ${guide} guide, ${faqs.length} FAQ, ${termini.length} termini — ` +
    `${words.toLocaleString("it-IT")} parole, ${(out.length / 1024).toFixed(0)} kB`,
);
