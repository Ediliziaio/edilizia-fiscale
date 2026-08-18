# Edilizia Fiscale

Sito dello studio **Edilizia Fiscale** — commercialisti e CFO per il settore costruzioni, doppio target
(impresa edile / patrimonio dell'imprenditore) con due percorsi separati.

- Stack: Vite + React + TypeScript + Tailwind + shadcn/ui, **SSG con vite-react-ssg** (62 pagine prerenderizzate).
- Design: palette navy/gold, font Inter Tight (ereditati dal design system di partenza).
- Dominio previsto: `https://www.ediliziafiscale.it` (placeholder — un solo punto di modifica, vedi sotto).

## Comandi

```bash
npm ci            # installa le dipendenze
npm run dev       # dev server (vite-react-ssg dev)
npm run build     # prebuild (indice articoli + sitemap) + build SSG in dist/
npm run preview   # serve la build da dist/
```

## Architettura contenuti

- **Home a bivio** (`/`): due porte, "Ho un'impresa edile" / "Ho un patrimonio da proteggere".
- **Hub silo**: `/imprese` (10 aree, schema Service) e `/patrimonio` (10 aree + verticali).
- **Guide** (`/guide`, `/guide/[slug]`): 30 articoli in `src/data/articles/*.ts` — formato a blocchi
  (risposta diretta come intro, riquadro "In sintesi", tabelle, passi numerati, esempio numerico,
  FAQ visibili, CTA + disclaimer). Schema Article + FAQPage + BreadcrumbList.
- **Domande frequenti** (`/domande-frequenti`, una URL per domanda): 21 pagine da `src/data/faq.ts`,
  schema FAQPage (hub) e QAPage (singole) — motore AEO.
- **Studio**: `/studio`, `/studio/come-lavoriamo` (compensi, indipendenza e limiti dell'incarico:
  è il segnale E-E-A-T pubblico dello studio).
- **Legali**: `/privacy`, `/cookie`, `/note-legali`.
- SEO tecnico: sitemap generata da `scripts/generate-sitemap.mjs`, `robots.txt` con allow espliciti per i
  crawler AI, `llms.txt`, canonical + OG per pagina via `src/components/SEO.tsx` (head prerenderizzato).

### Tassonomia

Quattro categorie (`src/data/articles.ts`), usate nei filtri di `/guide` e nelle copertine:

| Categoria | Contenuto | Silo |
|---|---|---|
| `Impresa` | IVA, reverse charge, aliquote, adempimenti negli appalti, costi | `/imprese` |
| `Controllo` | Margine di commessa, lavori in corso, cassa, CFO, assetti adeguati | `/imprese` |
| `Fisco` | Verifiche, accertamenti, crediti d'imposta, ravvedimento, ISA | `/imprese` |
| `Patrimonio` | Holding, scissione, immobili, dividendi, passaggio generazionale | `/patrimonio` |

### File generati (non modificare a mano)

`src/data/articlesMeta.ts`, `src/data/articleSeo.ts` e `src/data/articleImages.ts` sono generati da
`scripts/generate-article-index.mjs` a partire dai moduli articolo (ogni articolo esporta
`meta`, `seo`, `article`). Girano automaticamente nel `prebuild`.

### Aggiungere una guida

1. Crea `src/data/articles/<slug>.ts` copiando il formato di `reverse-charge-edilizia.ts`
   (slug = nome file; esporta `meta`, `seo`, `article`).
2. Aggiungi lo slug in `ORDER` dentro `scripts/generate-article-index.mjs` (ordine di listing).
3. `npm run build` — indice, sitemap e route statica si aggiornano da soli.
   Lo script avvisa se `seoTitle` supera i 62 caratteri o `metaDescription` i 158.

## [DA VERIFICARE] riferimenti normativi e di prassi

Il blocco `caselaw` mostra la regola con gli estremi della fonte: è il segnale di autorevolezza più
forte del sito, ma **solo se gli estremi sono corretti**. La regola tenuta in redazione è la stessa
del sito gemello: si citano con numero e data **solo** i documenti verificati; dove l'indirizzo è
consolidato ma il documento puntuale non è stato controllato, il campo `court` riporta la fonte
generica e il campo `ref` è omesso — nessun numero inventato.

Per trovarli tutti: `grep -rn '"caselaw"' src/data/articles/`

**Punti da validare su fonte ufficiale prima di promuovere i contenuti:**

- **Reverse charge**: perimetro delle lett. a) e a-ter) dell'art. 17, c. 6, D.P.R. 633/1972 e
  circolare 14/E del 27/3/2015 (`reverse-charge-edilizia.ts`, `fiscalita-impresa-edile.ts`).
- **IVA agevolata e beni significativi**: elenco dei beni significativi vigente e modalità di
  esposizione in fattura (`iva-agevolata-lavori-edili.ts`).
- **Ritenute negli appalti**: soglia, requisiti e condizioni di rilascio del certificato di
  regolarità (DURF) ai sensi dell'art. 17-bis D.lgs. 241/1997 (`ritenute-appalti-17-bis.ts`).
- **Congruità della manodopera**: percentuali del D.M. 143/2021 per categoria di opera. Nel testo è
  citata solo la percentuale consolidata della nuova edilizia civile (14,28%); se hai la tabella
  vigente, sostituisci con le aliquote puntuali (`costo-del-lavoro-impresa-edile.ts`).
- **Credito inesistente / non spettante**: misure sanzionatorie e definizioni post D.lgs. 87/2024
  (`accertamento-superbonus-imprese.ts`, `crediti-fiscali-incagliati-edilizia.ts`).
- **Termini di accertamento** sui crediti d'imposta, distinti da quelli ordinari dell'art. 43
  D.P.R. 600/1973 (`verifica-fiscale-impresa-edile.ts`).
- **Aliquota IRES** e soglie di compensazione: i testi usano il 24% e rinviano ai "limiti previsti".
  Verifica i valori vigenti prima della pubblicazione (`dividendi-holding-pex.ts`, `holding-immobiliare-edilizia.ts`).
- **Esenzione per i trasferimenti d'azienda**: art. 3, c. 4-ter, D.lgs. 346/1990 e vincolo
  quinquennale (`passaggio-generazionale-impresa-edile.ts`, `patto-di-famiglia-impresa-edile.ts`).
- **Società non operative**: percentuali del test e cause di disapplicazione vigenti
  (`societa-immobiliare-o-persona-fisica.ts`).

## [DA CONFERMARE] prima del lancio

Tutti i placeholder sono centralizzati in **`src/data/site.ts`**:

- dominio definitivo (aggiorna anche `index.html`, `robots.txt`, `llms.txt`, `scripts/*.mjs`);
- telefono, email, PEC reali;
- **autore reale dei contenuti**: sostituire "Redazione Edilizia Fiscale" con un dottore
  commercialista nominato (Ordine di appartenenza, anno di iscrizione, eventuale iscrizione al
  registro dei revisori legali, bio in `/studio`) — vale molto per l'E-E-A-T ed è essenziale per la
  citabilità sui motori di risposta;
- P.IVA, sede e dati d'albo in `/privacy`, `/note-legali`, schema `index.html`;
- endpoint reale del form contatti (`src/components/EFContactModal.tsx`, oggi simulato);
- immagini: 86 slot articolo in `src/data/articleImages.ts` e 6 slot di sito in
  `src/data/imageSlots.ts`, tutti a `null`. Ogni slot mostra in pagina un segnaposto con il brief.

## Vincoli editoriali

Codice deontologico della professione di dottore commercialista ed esperto contabile: niente
promesse di risparmio d'imposta, superlativi, percentuali di successo, confronti con altri studi,
nomi di clienti. Gli esempi nelle guide sono scenari illustrativi e lo dichiarano.
Una pagina = un intent di ricerca; i due silo non si linkano tra loro se non da home e footer.

Vincolo aggiuntivo di merito: le guide descrivono solo **pianificazione fiscale lecita**. Il
perimetro dichiarato pubblicamente è quello dell'art. 10-bis L. 212/2000 (abuso del diritto), ed è
scritto in `/studio/come-lavoriamo`: i contenuti non devono contraddirlo.
