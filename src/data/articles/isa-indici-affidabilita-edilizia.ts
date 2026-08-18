import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "isa-indici-affidabilita-edilizia",
  title: "ISA in edilizia: come funziona il punteggio e cosa comporta davvero",
  excerpt:
    "Gli indici sintetici di affidabilità fiscale premiano con un regime di benefici e segnalano gli scostamenti. Perché le imprese edili hanno punteggi volatili, quali variabili incidono di più e come si documenta uno scostamento fisiologico.",
  category: "Fisco",
  date: "Agosto 2026",
  readTime: "10 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-navy via-trust-dark to-trust",
  keywords: [
    "isa edilizia punteggio",
    "indici sintetici affidabilità fiscale",
    "regime premiale isa",
    "punteggio isa basso cosa succede",
    "isa imprese di costruzioni",
    "cause di esclusione isa",
  ],
  intro:
    "Gli indici sintetici di affidabilità fiscale assegnano un punteggio da 1 a 10 sulla base di indicatori economici e gestionali. Un punteggio alto dà accesso a un regime premiale; un punteggio basso non produce di per sé un accertamento, ma segnala la posizione. Le imprese edili hanno punteggi strutturalmente volatili, per una ragione precisa: lavorano per commessa.",
};

export const seo = {
  seoTitle: "ISA in Edilizia: Punteggio, Premi e Scostamenti",
  metaDescription:
    "Come funziona il punteggio ISA per le imprese edili, quali variabili incidono di più e come si documenta uno scostamento fisiologico legato alle commesse.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Cosa sono: indici sintetici di affidabilità fiscale, con punteggio da 1 a 10 basato su indicatori di normalità economica e di coerenza gestionale. Il regime premiale: dal punteggio dipendono benefici come l'esonero dal visto per la compensazione entro determinati limiti, la riduzione dei termini di accertamento e l'esclusione da alcune presunzioni. Il punto critico in edilizia: la ciclicità delle commesse rende gli indicatori volatili. La difesa: documentare lo scostamento, non inseguire il punteggio." },

    { type: "h2", text: "Come funziona il meccanismo", id: "meccanismo" },
    { type: "p", text: "Gli ISA misurano il grado di affidabilità fiscale attraverso un insieme di indicatori elementari, raggruppati in indicatori di affidabilità — che confrontano ricavi, valore aggiunto e reddito con i valori attesi in funzione delle caratteristiche dell'impresa — e indicatori di anomalia, che segnalano incoerenze nei dati dichiarati." },
    { type: "p", text: "Il risultato è un punteggio da 1 a 10. Al superamento di determinate soglie si accede a un regime premiale che comprende, tra gli altri benefici, l'esonero dall'apposizione del visto di conformità per la compensazione dei crediti entro limiti più ampi, l'esclusione dall'applicazione della disciplina delle società non operative, la riduzione di un anno dei termini di accertamento e limitazioni all'accertamento basato su presunzioni semplici." },
    { type: "p", text: "Va detto con chiarezza cosa gli ISA non sono: non sono uno strumento di accertamento automatico. Un punteggio basso non genera di per sé un atto, e non esiste alcun obbligo di adeguarsi ai ricavi attesi. Ciò che produce è una segnalazione: la posizione entra tra quelle che possono essere selezionate per un controllo." },

    { type: "h2", text: "Perché le imprese edili hanno punteggi volatili", id: "volatilita" },
    { type: "p", text: "Gli indicatori ISA confrontano grandezze annuali. Un'impresa che lavora per commessa, però, non produce risultati annuali omogenei: un esercizio in cui si aprono tre cantieri importanti mostra costi elevati e ricavi contenuti; l'esercizio successivo, quando quelle commesse si chiudono, mostra il contrario." },
    { type: "table", headers: ["Situazione tipica in edilizia", "Effetto sugli indicatori", "Come si documenta"], rows: [
      ["Molte commesse aperte a fine anno", "Valore aggiunto e reddito compressi rispetto ai costi", "Prospetto dei lavori in corso per commessa con avanzamento"],
      ["Esercizio di chiusura di commesse pluriennali", "Ricavi concentrati, indicatori distorti al rialzo", "Elenco delle commesse consegnate e relativi contratti"],
      ["Cantieri di sola posa con materiale del committente", "Incidenza dei materiali anomala rispetto ai ricavi", "Contratti con clausola di fornitura a carico del committente"],
      ["Ricorso elevato al subappalto", "Costo del lavoro basso rispetto al valore della produzione", "Contratti di subappalto e denunce del personale delle subaffidatarie"],
      ["Commessa chiusa in perdita", "Reddito inferiore all'atteso", "Consuntivo di commessa con costi a finire documentati"],
      ["Investimento rilevante in mezzi", "Ammortamenti elevati e reddito compresso", "Libro cespiti e piano di ammortamento"],
    ] },
    { type: "p", text: "Nessuna di queste situazioni è anomala: sono la fisiologia di un'impresa che lavora per commessa. Il problema è che l'indicatore, costruito su base annuale, non le distingue da una posizione realmente critica. Ed è per questo che la documentazione dello scostamento vale più di qualunque tentativo di far salire il punteggio." },

    { type: "figure", slot: "isa-indici-affidabilita-edilizia-1", alt: "Grafico con andamento dei ricavi per esercizio in un'impresa a commessa", caption: "L'andamento a scalini è la fisiologia del lavoro per commessa: l'indicatore annuale non lo distingue da un'anomalia." },

    { type: "h2", text: "Adeguarsi o documentare?", id: "adeguarsi" },
    { type: "p", text: "L'adeguamento consiste nel dichiarare ricavi superiori a quelli contabilizzati, versando le maggiori imposte, per raggiungere un punteggio migliore. È una facoltà, non un obbligo, e va valutata con freddezza." },
    { type: "p", text: "Nella maggior parte delle imprese edili l'adeguamento non è la scelta razionale. Significa pagare imposte su ricavi che non esistono per migliorare un punteggio che, in quel settore, è volatile per costruzione. E ha un effetto collaterale: un adeguamento ripetuto negli anni consolida un livello di ricavi attesi da cui poi è difficile scendere." },
    { type: "p", text: "La strada preferibile è documentare. Predisporre, ogni anno insieme alla dichiarazione, un fascicolo che spieghi lo scostamento con i dati di commessa: prospetto dei lavori in corso, elenco delle consegne dell'esercizio, contratti con fornitura a carico del committente, consuntivi delle commesse chiuse in perdita. È un documento che nessuno chiede al momento, ma che vale moltissimo se un controllo arriva tre anni dopo." },
    { type: "p", text: "Vanno inoltre verificate le cause di esclusione e di inapplicabilità previste dalla disciplina: alcune situazioni — inizio o cessazione dell'attività, periodi di non normale svolgimento, determinate categorie di soggetti — escludono l'applicazione degli indici. Verificarle prima è più efficace che discuterle dopo." },

    { type: "caselaw", title: "Riferimenti utili", items: [
      { court: "D.L. 50/2017", ref: "Art. 9-bis", principle: "Gli indici sintetici di affidabilità fiscale esprimono, su una scala da 1 a 10, il grado di affidabilità fiscale riconosciuto a ciascun contribuente, anche al fine di consentire l'accesso al regime premiale.", impact: "L'adeguamento è una facoltà, non un obbligo: nessuna norma impone di dichiarare ricavi non conseguiti." },
      { court: "Regime premiale", principle: "Al raggiungimento di determinati livelli di affidabilità conseguono benefici quali l'esonero dal visto di conformità entro limiti più ampi, l'esclusione dalla disciplina delle società non operative e la riduzione dei termini di accertamento.", impact: "I benefici sono concreti: per un'impresa con crediti IVA rilevanti l'esonero dal visto ha un valore misurabile." },
      { court: "D.P.R. 600/1973", ref: "Art. 39, comma 1, lett. d)", principle: "L'accertamento fondato su presunzioni richiede che queste siano gravi, precise e concordanti.", impact: "Un punteggio ISA basso, da solo, non integra una presunzione con quei requisiti: è un criterio di selezione, non una prova." },
    ] },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa di costruzioni con ricavi dichiarati per 2,8 milioni e punteggio ISA di 5,2. Nell'esercizio l'impresa ha aperto due commesse pluriennali importanti, che a fine anno risultano avanzate rispettivamente al 22% e al 31%: i costi sono stati sostenuti in misura rilevante, i ricavi di competenza sono limitati." },
    { type: "p", text: "L'adeguamento necessario a raggiungere la soglia premiale richiederebbe di dichiarare circa 190.000 euro di ricavi ulteriori, con un costo fiscale nell'ordine dei 60.000 euro tra imposte dirette e IRAP. Sono imposte su ricavi che l'impresa non ha conseguito e che, nell'esercizio successivo, emergeranno regolarmente con l'avanzamento delle commesse." },
    { type: "p", text: "La scelta è di non adeguarsi e di predisporre invece un fascicolo esplicativo: prospetto dei lavori in corso per commessa con percentuali di avanzamento, contratti, SAL approvati, e un raffronto triennale che mostra come il ciclo delle commesse spieghi l'andamento degli indicatori. Nell'esercizio successivo, con la consegna delle due commesse, il punteggio risale senza alcun intervento." },
    { type: "note", text: "L'errore da non fare: adeguarsi ogni anno per prudenza. Oltre al costo immediato, l'adeguamento ripetuto consolida un livello di ricavi attesi che diventa il nuovo riferimento, e da cui poi è difficile scendere senza generare uno scostamento ancora più visibile. Lo scenario è illustrativo." },

    { type: "figure", slot: "isa-indici-affidabilita-edilizia-2", alt: "Fascicolo esplicativo dello scostamento con prospetti di commessa", caption: "Il fascicolo esplicativo non lo chiede nessuno al momento: serve quando il controllo arriva tre anni dopo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Un punteggio ISA basso comporta un accertamento?", a: "No, non automaticamente. Gli ISA sono uno strumento di selezione e di stimolo all'adempimento, non un metodo di accertamento. Un punteggio basso segnala la posizione tra quelle che possono essere selezionate per un controllo, ma non costituisce di per sé una presunzione grave, precisa e concordante." },
      { q: "Sono obbligato ad adeguarmi?", a: "No. L'adeguamento è una facoltà: nessuna norma impone di dichiarare ricavi non conseguiti. È una valutazione di convenienza che va fatta confrontando il costo fiscale immediato con il valore dei benefici premiali e con l'effetto di consolidamento sugli anni successivi." },
      { q: "Perché la mia impresa ha punteggi che cambiano molto ogni anno?", a: "Perché gli indicatori sono annuali mentre l'attività è per commessa. Un esercizio in cui si aprono cantieri importanti mostra costi alti e ricavi contenuti; quello in cui si chiudono mostra il contrario. È fisiologia del settore, e va documentata anziché corretta con l'adeguamento." },
      { q: "Quali benefici dà un punteggio alto?", a: "Il regime premiale comprende, al raggiungimento delle soglie previste, l'esonero dal visto di conformità per la compensazione entro limiti più ampi, l'esclusione dalla disciplina delle società non operative, la riduzione di un anno dei termini di accertamento e limitazioni agli accertamenti presuntivi." },
      { q: "Come documento uno scostamento fisiologico?", a: "Con un fascicolo predisposto insieme alla dichiarazione: prospetto dei lavori in corso per commessa con avanzamento, elenco delle consegne dell'esercizio, contratti con fornitura a carico del committente, consuntivi delle commesse chiuse in perdita, raffronto triennale degli indicatori." },
      { q: "Esistono cause di esclusione dagli ISA?", a: "Sì: la disciplina prevede cause di esclusione e di inapplicabilità legate all'inizio o alla cessazione dell'attività, ai periodi di non normale svolgimento e ad altre situazioni specifiche. Verificarne la sussistenza prima della compilazione è più efficace che discuterne in un secondo momento." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se ogni anno ti trovi davanti alla scelta se adeguarti o no senza avere un criterio, il problema non è il punteggio: è che manca il collegamento tra gli indicatori e i tuoi dati di commessa. Mandaci le ultime tre dichiarazioni e l'elenco delle commesse per anno di apertura e consegna: ricostruiamo l'andamento e prepariamo il fascicolo esplicativo. Per il contesto leggi le guide su verifica fiscale e accertamento induttivo." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
