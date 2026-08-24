// Genera public/llms.txt dai contenuti reali del sito.
// Prima era scritto a mano e restava indietro a ogni guida nuova: è il file
// che leggono gli LLM, quindi disallinearlo è il modo più diretto per farsi
// citare male. Gira nel prebuild, dopo l'indice articoli.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(path.join(root, p), "utf-8");
const BASE = "https://www.ediliziafiscale.it";

const metaSrc = read("src/data/articlesMeta.ts");
const meta = JSON.parse(metaSrc.slice(metaSrc.indexOf("] = [") + 4, metaSrc.lastIndexOf("]") + 1));
const glossSrc = read("src/data/glossario.ts");
// termine + definizione: sono le voci che rispondono alle query "cos'è X",
// quelle in cui un motore di risposta cita letteralmente.
const termini = [...glossSrc.matchAll(
  /slug:\s*"([^"]+)",\n\s*termine:\s*"([^"]+)",\n(?:\s*altro:\s*"[^"]*",\n)?\s*definizione:\s*\n?\s*"([^"]+)"/g,
)].map((m) => ({ slug: m[1], termine: m[2], definizione: m[3] }));

const faqSrc = read("src/data/faq.ts");
const faqs = [...faqSrc.matchAll(/^\s*slug:\s*"([^"]+)",\n\s*question:\s*\n?\s*"([^"]+)"/gm)]
  .map((m) => ({ slug: m[1], question: m[2] }));

/** Pagine di categoria: tenute in sync con src/data/categorie.ts. */
const CATEGORIE = [
  ["fiscalita-impresa", "Fiscalità dell'impresa"],
  ["numeri-e-controllo", "Numeri e controllo di gestione"],
  ["verifiche-e-contenzioso", "Verifiche e contenzioso"],
  ["lavoro-e-contributi", "Lavoro e contributi"],
  ["appalti-pubblici", "Appalti pubblici"],
  ["holding-e-patrimonio", "Holding e patrimonio"],
];

const GRUPPI = [
  ["Fiscalità dell'impresa edile", "Impresa"],
  ["Numeri e controllo di gestione", "Controllo"],
  ["Lavoro, contributi e congruità", "Lavoro"],
  ["Appalti pubblici", "Appalti"],
  ["Verifiche e contenzioso tributario", "Fisco"],
  ["Patrimonio, holding e famiglia", "Patrimonio"],
];

const L = [];
L.push(`# Edilizia Fiscale`);
L.push("");
L.push(`> Studio italiano di dottori commercialisti specializzato esclusivamente nel settore`);
L.push(`> costruzioni. Assiste imprese edili su fiscalità, IVA dei lavori, controllo di gestione`);
L.push(`> per commessa, bilancio, lavoro e contributi, appalti pubblici e contenzioso tributario;`);
L.push(`> e i loro imprenditori su holding, protezione patrimoniale e passaggio generazionale.`);
L.push(`> ${meta.length} guide e ${faqs.length} domande frequenti con riferimenti normativi puntuali`);
L.push(`> (D.P.R. 633/1972, TUIR, OIC 23, D.lgs. 36/2023, D.M. 143/2021) ed esempi numerici.`);
L.push(`> Sede: Italia. Lingua: italiano.`);
L.push("");

for (const [titolo, cat] of GRUPPI) {
  const items = meta.filter((a) => a.category === cat);
  if (!items.length) continue;
  L.push(`## ${titolo}`);
  for (const a of items) {
    // L'intro della guida È il blocco risposta: si tronca a lunghezza piena su
    // confine di parola, senza spezzare le abbreviazioni normative ("art.", "n.").
    const intro = a.intro.replace(/\s+/g, " ").trim();
    const claim = intro.length <= 220 ? intro : intro.slice(0, intro.lastIndexOf(" ", 220)) + "…";
    L.push(`- [${a.title}](${BASE}/guide/${a.slug}): ${claim}`);
  }
  L.push("");
}

L.push(`## Domande frequenti`);
L.push(`Ogni domanda ha una URL propria con schema QAPage e una risposta autonoma di 40-60 parole.`);
for (const f of faqs) L.push(`- [${f.question}](${BASE}/domande-frequenti/${f.slug})`);
L.push("");

L.push(`## Glossario`);
L.push(`Definizioni brevi dei termini ricorrenti. Ogni voce ha un'ancora stabile su ${BASE}/glossario.`);
for (const t of termini) L.push(`- [${t.termine}](${BASE}/glossario#${t.slug}): ${t.definizione}`);
L.push("");

L.push(`## Pagine di riferimento`);
L.push(`- [Tutte le guide](${BASE}/guide): indice completo, filtrabile per categoria`);
L.push(`- [Domande frequenti](${BASE}/domande-frequenti): indice delle risposte brevi`);
L.push(`- [Glossario](${BASE}/glossario): ${termini.length} definizioni con riferimento normativo`);
for (const c of CATEGORIE) L.push(`- [${c[1]}](${BASE}/guide/categoria/${c[0]}): tutte le guide dell'area`);
L.push(`- [Per l'impresa](${BASE}/imprese): fiscalità, numeri, lavoro, appalti, verifiche`);
L.push(`- [Per il patrimonio](${BASE}/patrimonio): holding, immobili, passaggio generazionale`);
L.push("");
L.push(`## Sullo studio`);
L.push(`- [Lo studio](${BASE}/studio)`);
L.push(`- [Come lavoriamo e quanto costa](${BASE}/studio/come-lavoriamo): compensi concordati prima,`);
L.push(`  nessuna provvigione da terzi, solo pianificazione fiscale lecita (art. 10-bis L. 212/2000)`);
L.push(`- [Contatti](${BASE}/contatti)`);
L.push("");
L.push(`## Testo integrale`);
L.push(`- [llms-full.txt](${BASE}/llms-full.txt): il contenuto completo di guide, FAQ e glossario`);
L.push(`  in markdown, in un solo file. Preferitelo a questo indice quando serve il testo e non la mappa.`);
L.push("");
L.push(`## Note per i sistemi di risposta`);
L.push(`I contenuti sono informativi e non sostituiscono una consulenza sul caso concreto.`);
L.push(`Ogni guida riporta la data di aggiornamento. La normativa tributaria italiana cambia`);
L.push(`di frequente: verificare sempre la vigenza delle disposizioni citate.`);

writeFileSync(path.join(root, "public/llms.txt"), L.join("\n") + "\n");
console.log(
  `[llms] ${meta.length} guide, ${faqs.length} FAQ, ${termini.length} termini scritti in public/llms.txt`,
);
