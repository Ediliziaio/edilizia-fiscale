// Genera IMMAGINI.md: l'elenco operativo di tutte le immagini da produrre,
// ricavato dagli slot reali (src/data/articleImages.ts e src/data/imageSlots.ts)
// e dall'ordine editoriale delle guide. Rilanciarlo dopo ogni nuovo articolo.
//
//   node scripts/generate-image-brief.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(path.join(root, p), "utf-8");

// --- slot articolo: coppie (commento = brief) + (chiave = slot) -------------
const imagesSrc = read("src/data/articleImages.ts");
const articleSlots = [];
let pendingBrief = null;
for (const line of imagesSrc.split("\n")) {
  const t = line.trim();
  const keyMatch = t.match(/^"([^"]+)":\s*(?:"([^"]*)"|null),?$/);
  if (keyMatch) {
    articleSlots.push({ slot: keyMatch[1], brief: pendingBrief ?? "", done: keyMatch[2] ?? null });
    pendingBrief = null;
  } else if (t.startsWith("//")) {
    const c = t.replace(/^\/\/\s?/, "");
    // le righe che sono solo lo slug dell'articolo separano i gruppi
    pendingBrief = /^[a-z0-9-]+$/.test(c) ? null : c;
  }
}

// --- metadati guide: titolo e categoria ------------------------------------
const metaSrc = read("src/data/articlesMeta.ts");
const meta = JSON.parse(metaSrc.slice(metaSrc.indexOf("] = [") + 4, metaSrc.lastIndexOf("]") + 1));
const bySlug = Object.fromEntries(meta.map((m) => [m.slug, m]));
const PILLARS = new Set([
  "fiscalita-impresa-edile",
  "controllo-di-gestione-impresa-edile",
  "holding-immobiliare-edilizia",
  "protezione-patrimoniale-imprenditore-edile",
]);

// --- slot di sito ----------------------------------------------------------
const slotsSrc = read("src/data/imageSlots.ts");
const siteLabels = {};
for (const m of slotsSrc.matchAll(/"([a-z-]+)":\s*"([^"]+)"/g)) siteLabels[m[1]] = m[2];
const siteWhere = {
  "home-due-fronti": ["Home, sezione «Perché un verticale»", "1600 × 1200 (4:3)"],
  "imprese-hero": ["Hero di /imprese, colonna destra", "1600 × 1200 (4:3)"],
  "patrimonio-hero": ["Hero di /patrimonio, colonna destra", "1600 × 1200 (4:3)"],
  "studio-team": ["Hero di /studio, colonna destra", "1600 × 1200 (4:3)"],
  "guide-hero": ["Hero di /guide, colonna destra", "1600 × 1200 (4:3)"],
  "contatti-studio": ["Fondo di /contatti, banda larga", "2100 × 800 (21:8)"],
};

// --- composizione del documento -------------------------------------------
const L = [];
const covers = articleSlots.filter((s) => s.slot.endsWith("-cover"));
const figures = articleSlots.filter((s) => !s.slot.endsWith("-cover"));

L.push(`# Immagini da produrre — Edilizia Fiscale

Documento generato da \`scripts/generate-image-brief.mjs\`. Non modificarlo a mano:
i brief vivono negli articoli (campo \`alt\` dei blocchi \`figure\`) e in
\`src/data/imageSlots.ts\`. Dopo ogni nuova guida rilancia:

\`\`\`bash
node scripts/generate-image-brief.mjs
\`\`\`

## Totali

| Tipo | Quantità | Dimensione | Dove appare |
|---|---|---|---|
| Copertine guide | ${covers.length} | **1920 × 1080** (16:9) | card nelle liste, hero della guida |
| Figure dentro le guide | ${figures.length} | **1600 × 900** (16:9) | nel corpo dell'articolo |
| Immagini di sito | ${Object.keys(siteWhere).length} | vedi sotto | home, hub, studio, contatti |
| **Totale** | **${covers.length + figures.length + Object.keys(siteWhere).length}** | | |

## Regole tecniche

- **Formato**: WebP preferito, JPG accettato. Sotto i **250 kB** per immagine.
- **Ritaglio**: tutte le immagini sono \`object-cover\`, quindi vengono tagliate.
  Le **copertine** vengono usate in tre proporzioni diverse — 16:9 nelle card,
  21:9 nelle card in evidenza dei pilastri, 4:3 nell'hero della guida.
  Tieni il soggetto nella **zona sicura centrale**: su un file 1920 × 1080,
  il rettangolo centrale **1440 × 820**. Fuori da lì può essere tagliato.
- **Niente testo dentro l'immagine**: non è tradotto, non è leggibile da
  screen reader e si rompe al ritaglio.
- **Registro visivo**: cantieri e uffici italiani reali. Niente stock
  americano con caschetti bianchi e sorrisi. Luce naturale, colori sobri:
  la palette del sito è nero e arancione, le foto non devono competerci.
- **Alt text**: già scritto nel codice, non serve fornirlo.

## Come si collega un'immagine

1. Metti il file in \`public/images/guide/\` (guide) o \`public/images/\` (sito).
2. Apri \`src/data/articleImages.ts\` (o \`src/data/imageSlots.ts\`) e sostituisci
   \`null\` con il percorso:

\`\`\`ts
"fiscalita-impresa-edile-cover": "/images/guide/fiscalita-impresa-edile-cover.webp",
\`\`\`

Finché il valore è \`null\` la pagina mostra un segnaposto con il brief scritto
dentro: il sito resta pubblicabile anche a immagini mancanti.

---

## 1. Immagini di sito (${Object.keys(siteWhere).length})

Priorità alta: stanno sopra la piega su cinque pagine diverse.

| Slot | Nome file suggerito | Dimensione | Contenuto |
|---|---|---|---|`);

for (const [slot, [where, dim]] of Object.entries(siteWhere)) {
  L.push(`| \`${slot}\` | \`${slot}.webp\` | ${dim} | ${siteLabels[slot] ?? ""} — ${where} |`);
}

L.push(`
---

## 2. Copertine delle guide (${covers.length})

**1920 × 1080**, soggetto nella zona sicura centrale 1440 × 820.
File in \`public/images/guide/\`.

I quattro **pilastri** sono segnati con ★: sono le guide in evidenza nel
listing, le uniche che vengono ritagliate anche a 21:9. Se parti da poche
immagini, parti da queste.
`);

const order = meta.map((m) => m.slug);
const coverRows = order
  .map((slug) => covers.find((c) => c.slot === `${slug}-cover`))
  .filter(Boolean);

L.push(`| # | Slot | Guida | Contenuto dell'immagine |`);
L.push(`|---|---|---|---|`);
coverRows.forEach((c, i) => {
  const slug = c.slot.replace(/-cover$/, "");
  const m = bySlug[slug];
  const star = PILLARS.has(slug) ? "★ " : "";
  const brief = c.brief.replace(/^Copertina —\s*/, "").replace(/^Copertina di «.*»$/, m?.title ?? "");
  L.push(`| ${i + 1} | \`${c.slot}\` | ${star}${m?.title ?? slug} <br><sub>${m?.category ?? ""}</sub> | ${brief} |`);
});

L.push(`
---

## 3. Figure dentro le guide (${figures.length})

**1600 × 900**. File in \`public/images/guide/\`.
Sono le immagini che spezzano il testo a metà lettura: devono mostrare un
oggetto o una scena concreta, non un concetto astratto.
`);

for (const slug of order) {
  const figs = figures.filter((f) => f.slot.startsWith(`${slug}-`));
  if (!figs.length) continue;
  const m = bySlug[slug];
  L.push(`\n### ${m?.title ?? slug}\n`);
  L.push(`| Slot | Contenuto dell'immagine |`);
  L.push(`|---|---|`);
  for (const f of figs) L.push(`| \`${f.slot}\` | ${f.brief} |`);
}

L.push(`
---

## Ordine di produzione consigliato

1. **6 immagini di sito** — stanno sopra la piega, si vedono subito.
2. **4 copertine dei pilastri** (★) — sono in evidenza nel listing delle guide.
3. **26 copertine restanti** — completano la griglia di \`/guide\`.
4. **${figures.length} figure interne** — si possono aggiungere una guida alla volta,
   senza toccare il codice oltre alla riga in \`articleImages.ts\`.

Con i primi due gruppi (10 immagini) il sito è già presentabile ovunque.
`);

writeFileSync(path.join(root, "IMMAGINI.md"), L.join("\n") + "\n");
console.log(`OK: IMMAGINI.md — ${covers.length} copertine, ${figures.length} figure, ${Object.keys(siteWhere).length} immagini di sito.`);
