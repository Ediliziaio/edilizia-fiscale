# Edilizia Fiscale — Piano di lavoro

Sito: **Edilizia Fiscale** — studio di commercialisti per il settore costruzioni, doppio target
(impresa edile / patrimonio dell'imprenditore).
Base tecnica: clone di edilizia-legale (Vite + React + TS + Tailwind + vite-react-ssg). Design
invariato (navy/gold, Inter Tight). Dominio placeholder: https://www.ediliziafiscale.it

## Task list

### Fase 1 — Fondamenta
- [x] Copia repo → ~/edilizia-fiscale, git init
- [x] Rinomina componenti EL* → EF*, brand e dominio
- [x] index.html nuovo (schema AccountingService/ProfessionalService, knowsAbout fiscale)
- [x] Favicon e logo provvisori (poi sostituiti dai file del cliente)
- [x] SEO.tsx → SITE ediliziafiscale.it, brand Edilizia Fiscale
- [x] Tassonomia articoli: Impresa / Controllo / Fisco / Patrimonio
- [x] Header + Footer nuovi (due silo: impresa e patrimonio)
- [x] Home a bivio ("Ho un'impresa edile" / "Ho un patrimonio da proteggere")

### Fase 2 — Pagine struttura
- [x] /imprese hub (10 aree servizio)
- [x] /patrimonio hub (10 aree servizio, ex /privati)
- [x] /studio + /studio/come-lavoriamo (compensi, indipendenza, limiti — ex conflitti di interesse)
- [x] /contatti (documenti richiesti: bilanci, commesse, visura)
- [x] /guide listing con filtri per categoria
- [x] /domande-frequenti hub + 21 pagine singole (QAPage)
- [x] Privacy / Cookie / Note legali (adattate alla professione)
- [x] NotFound

### Fase 3 — Guide (30, formato a blocchi con esempio numerico e FAQ visibili)
Pilastri:
- [x] fiscalita-impresa-edile
- [x] controllo-di-gestione-impresa-edile
- [x] holding-immobiliare-edilizia
- [x] protezione-patrimoniale-imprenditore-edile

Fiscalità operativa (Impresa):
- [x] reverse-charge-edilizia
- [x] iva-agevolata-lavori-edili
- [x] ritenute-appalti-17-bis
- [x] costo-del-lavoro-impresa-edile
- [x] costi-deducibili-impresa-edile
- [x] split-payment-e-fatturazione-pa

Numeri (Controllo):
- [x] bilancio-impresa-edile-lavori-in-corso
- [x] margine-di-commessa-edilizia
- [x] preventivo-di-commessa-edilizia
- [x] flussi-di-cassa-impresa-edile
- [x] cfo-esterno-impresa-edile
- [x] assetti-adeguati-impresa-edile

Verifiche e contenzioso (Fisco):
- [x] verifica-fiscale-impresa-edile
- [x] accertamento-superbonus-imprese
- [x] crediti-fiscali-incagliati-edilizia
- [x] accertamento-induttivo-impresa-edile
- [x] ravvedimento-e-adesione-impresa-edile
- [x] isa-indici-affidabilita-edilizia

Patrimonio:
- [x] scissione-immobiliare-impresa-edile
- [x] dividendi-holding-pex
- [x] societa-immobiliare-o-persona-fisica
- [x] consolidato-fiscale-gruppo-edile
- [x] tassazione-vendita-immobili-impresa
- [x] passaggio-generazionale-impresa-edile
- [x] patto-di-famiglia-impresa-edile
- [x] cessione-azienda-impresa-edile

### Fase 4 — SEO tecnico e AEO
- [x] articleSeo.ts generato (title ≤62, description ≤158, controllo automatico in build)
- [x] robots.txt con allow espliciti per i crawler AI
- [x] llms.txt riscritto sui cluster fiscali
- [x] generate-sitemap.mjs aggiornato (62 URL)
- [x] Schema: AccountingService sitewide, Article + FAQPage, QAPage, BreadcrumbList, Service sugli hub
- [x] Grafico delle scadenze fiscali (ex termini di decadenza civilistici)

### Fase 5 — Verifica
- [x] `npm run build` passa (62 pagine prerenderizzate)
- [x] grep "Edilizia Legale|edilizialegale|avvocato" → zero risultati nel codice
- [x] Verifica visiva browser (home, hub, guida, FAQ)
- [x] README aggiornato con i punti [DA VERIFICARE] e [DA CONFERMARE]

### Fase 6 — Identità visiva definitiva
- [x] Loghi reali del cliente (3 varianti) in `src/assets`, componente EFLogo su immagine
- [x] Palette nero `#0C0C0C` + arancione `#F2621D`: token `navy`→`ink`, `gold`→`brand`
- [x] `trust` da blu a terracotta desaturata, per restare nella famiglia calda
- [x] `brand-dark` calibrato a 4.8:1 su bianco (il gold precedente era sotto soglia)
- [x] Favicon, apple-touch-icon e og-image rigenerate dal marchio del logo
- [x] Bagliori dell'hero attenuati: l'arancione su nero satura più del gold su navy

## Prossimi passi consigliati
- Validare su fonte ufficiale i punti elencati in README (sezione [DA VERIFICARE]).
- Sostituire "Redazione Edilizia Fiscale" con un professionista nominato: è l'intervento singolo
  con il maggior impatto sulla citabilità nei motori di risposta.
- Produrre le immagini: 86 slot articolo + 6 di sito, ciascuno con il brief già scritto.
- Collegare il form contatti a un endpoint reale.
