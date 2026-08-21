import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "appalti-pubblici-impresa-edile",
  title: "Appalti pubblici per l'impresa edile: qualificazione, garanzie, cassa e riserve",
  excerpt:
    "Un appalto pubblico si vince due volte: in gara e in cassa. La guida che percorre l'intero ciclo economico — dalla SOA costruita in bilancio all'anticipazione, dallo split payment alle riserve — e rimanda all'approfondimento dedicato per ogni fase.",
  category: "Appalti",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "appalti pubblici impresa edile",
    "lavori pubblici aspetti fiscali",
    "qualificazione soa bilancio",
    "anticipazione 20 appalti",
    "riserve lavori pubblici",
    "cassa di commessa appalto pubblico",
  ],
  intro:
    "Un appalto pubblico è un ciclo economico prima che un cantiere: si entra con una qualificazione costruita sui bilanci, si consuma plafond fideiussorio per garantirlo, si incassa con regole diverse dal privato — anticipazione, SAL, split payment — e si difende il corrispettivo con lo strumento delle riserve. Questa guida percorre l'intero ciclo nell'ordine in cui lo vive l'impresa, e per ogni fase rimanda alla guida che scende nel dettaglio.",
};

export const seo = {
  seoTitle: "Appalti Pubblici per l'Impresa Edile: la Guida Completa",
  metaDescription:
    "SOA, garanzie, anticipazione del 20%, split payment, revisione prezzi e riserve: il ciclo economico completo di un appalto pubblico, fase per fase.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il ciclo economico di un appalto pubblico ha cinque fasi: qualificazione (l'attestazione SOA si costruisce sui bilanci, con classifiche che fissano l'importo massimo delle gare), garanzia (provvisoria in gara, definitiva alla firma, CAR e decennale: consumano plafond fideiussorio), avvio (anticipazione del 20% del contratto, garantita e recuperata sui SAL), esecuzione (fatture in split payment: incassi il solo imponibile; revisione prezzi al ricorrere delle condizioni) e contestazione (le riserve vanno iscritte subito negli atti contabili, pena la decadenza). Il DURC regolare è precondizione di tutte e cinque." },

    { type: "h2", text: "Il ciclo economico, prima del cantiere", id: "ciclo" },
    { type: "p", text: "L'errore di prospettiva più comune sugli appalti pubblici è trattarli come cantieri con un committente diverso. Sono un sistema economico a parte: la possibilità stessa di partecipare dipende dai bilanci degli anni precedenti, la firma del contratto consuma garanzie, l'incasso segue regole proprie e il contenzioso ha forme e termini che non perdonano l'improvvisazione." },
    { type: "p", text: "Chi entra nei lavori pubblici guardando solo l'importo a base di gara scopre le altre facce una alla volta, sempre a spese proprie: la banca che non concede la fideiussione per l'anticipazione, il credito IVA che si accumula per lo [split payment](/guide/split-payment-e-fatturazione-pa), la riserva non iscritta in tempo che vale centinaia di migliaia di euro. Questa guida mette le cinque fasi in fila; le guide collegate scendono nel dettaglio di ciascuna." },

    { type: "h2", text: "Fase 1 — La qualificazione si costruisce in bilancio", id: "qualificazione" },
    { type: "p", text: "Per i lavori pubblici sopra soglia serve l'[attestazione SOA](/guide/attestazione-soa-requisiti-economici): categorie che dicono cosa puoi fare, classifiche che dicono fino a che importo. I requisiti economici — cifra d'affari in lavori, patrimonio netto, attrezzatura — si leggono nei bilanci depositati. Il che significa una cosa precisa: la classifica di domani si decide nelle scritture di oggi." },
    { type: "p", text: "È il punto di contatto più sottovalutato tra contabilità e commerciale. Una politica di bilancio pensata solo per pagare meno imposte — comprimere l'utile, distribuire riserve, alleggerire il patrimonio — può costare una classifica, cioè l'accesso a una fascia di gare. Anche le operazioni straordinarie vanno guardate con questa lente: una [scissione immobiliare](/guide/scissione-immobiliare-impresa-edile) dimensionata male sposta patrimonio netto che qualificava l'impresa." },
    { type: "p", text: "Sotto soglia il tema non sparisce: le stazioni appaltanti verificano comunque idoneità e capacità economica, e il [rating bancario](/guide/rating-bancario-centrale-rischi-edilizia) con cui finanzierai il cantiere si legge sugli stessi bilanci." },

    { type: "figure", slot: "appalti-pubblici-impresa-edile-1", alt: "Attestazione SOA e bilanci d'esercizio sul tavolo di un ufficio gare", caption: "Categorie e classifiche si costruiscono sui bilanci depositati: la politica di bilancio è anche politica commerciale." },

    { type: "h2", text: "Fase 2 — Garanzie: il costo invisibile che satura il plafond", id: "garanzie" },
    { type: "p", text: "Ogni gara chiede una garanzia provvisoria; ogni aggiudicazione una definitiva; il cantiere richiede polizza CAR e, per le opere che la prevedono, la decennale postuma. Ogni [garanzia e polizza](/guide/garanzie-e-polizze-appalto) ha un costo esplicito — la commissione — e uno implicito più importante: consuma plafond fideiussorio, che è una risorsa finita." },
    { type: "p", text: "Il plafond saturo è il modo silenzioso in cui un'impresa sana smette di crescere: le gare ci sarebbero, i requisiti pure, ma nessun istituto rilascia la garanzia successiva. Il plafond va gestito come si gestisce la cassa — un prospetto per istituto e per commessa, con le scadenze di svincolo — perché ogni garanzia non svincolata a fine lavori è capacità di gara bloccata." },

    { type: "h2", text: "Fase 3 — L'anticipazione: cassa subito, restituita sui SAL", id: "anticipazione" },
    { type: "p", text: "Il codice dei contratti riconosce all'appaltatore un'[anticipazione del 20%](/guide/anticipazione-e-revisione-prezzi) del valore del contratto, erogata dopo l'avvio dell'esecuzione contro garanzia fideiussoria maggiorata degli interessi. Non è un ricavo in più: è uno spostamento di cassa nel tempo, recuperato con trattenute proporzionali sui SAL successivi." },
    { type: "p", text: "Proprio per questo va pianificata, non solo incassata: il [prospetto di cassa della commessa](/guide/flussi-di-cassa-impresa-edile) deve mostrare l'anticipazione in entrata e i recuperi in uscita, SAL per SAL. L'impresa che spende l'anticipazione come se fosse margine si ritrova a metà commessa con SAL decurtati e fornitori da pagare — il classico cantiere che va bene sulla carta e soffoca in banca." },

    { type: "h2", text: "Fase 4 — Incassare: split payment, SAL e revisione prezzi", id: "esecuzione" },
    { type: "p", text: "Le fatture verso la pubblica amministrazione viaggiano in [split payment](/guide/split-payment-e-fatturazione-pa): esponi l'IVA ma incassi il solo imponibile, perché l'imposta la versa direttamente l'ente. L'effetto strutturale è un credito IVA che cresce a ogni SAL, da gestire con rimborsi prioritari e compensazioni: lasciarlo dormire significa finanziare lo Stato con il tuo circolante." },
    { type: "p", text: "Il diritto al pagamento nasce con il [SAL](/glossario#sal) accertato: la contabilità di cantiere non è un adempimento del direttore dei lavori, è il documento che genera i tuoi incassi, e va riconciliata mese per mese con l'avanzamento economico che usi in bilancio per valutare i [lavori in corso](/guide/bilancio-impresa-edile-lavori-in-corso)." },
    { type: "p", text: "Sui contratti pluriennali, le clausole di revisione prezzi previste dal codice attuale scattano al ricorrere delle variazioni di costo oltre soglia. La revisione non è automatica nei fatti: richiede di documentare le variazioni con gli indici corretti e di attivarla nei tempi — un presidio amministrativo che vale margine vero nelle stagioni di prezzi instabili." },

    { type: "figure", slot: "appalti-pubblici-impresa-edile-2", alt: "Prospetto di cassa di una commessa pubblica con anticipazione, SAL e trattenute", caption: "Anticipazione in entrata, recuperi sui SAL, ritenute di garanzia: la cassa di un appalto pubblico si pianifica prima della firma." },

    { type: "h2", text: "Fase 5 — Le riserve: il corrispettivo si difende subito o mai più", id: "riserve" },
    { type: "p", text: "Sospensioni, varianti impreviste, interferenze, maggiori oneri: negli appalti pubblici la pretesa economica dell'esecutore passa dallo strumento delle [riserve](/guide/riserve-e-contabilita-lavori-pubblici), con una regola che non ammette recuperi: la riserva va iscritta negli atti contabili alla prima occasione utile ed esplicata nei termini, con ragioni e quantificazione. Firmare il registro senza riserva significa, per quel fatto, rinunciare alla pretesa." },
    { type: "p", text: "Il lato contabile è altrettanto delicato: una riserva iscritta non è ancora un ricavo, e portarla a bilancio prima che maturino le condizioni di riconoscimento gonfia un utile che il fisco e la banca leggeranno come reale. La guida dedicata spiega quando la riserva entra nei lavori in corso e con quali prudenze." },

    { type: "h2", text: "In quanti si va: consorzi e ATI", id: "aggregazioni" },
    { type: "p", text: "Quando la classifica non basta o l'opera richiede categorie diverse, si concorre insieme: [consorzio stabile o raggruppamento temporaneo](/guide/consorzi-ati-fiscalita). Non sono varianti della stessa cosa — il consorzio è un soggetto stabile che cumula i requisiti delle consorziate e ribalta i costi, l'ATI è un mandato che si esaurisce con l'opera e dove ognuno fattura la propria quota — e la scelta ha conseguenze fiscali e organizzative che durano quanto il cantiere." },

    { type: "h2", text: "La precondizione trasversale: il DURC", id: "durc" },
    { type: "p", text: "Ogni fase di questo ciclo ha la stessa precondizione: il [DURC regolare](/guide/durc-irregolare-impresa-edile). Serve per partecipare, per firmare, per incassare ogni singolo SAL e per il saldo — al quale, sopra soglia, si aggiunge l'attestazione di [congruità della manodopera](/guide/congruita-manodopera-durc). Un'irregolarità contributiva su un cantiere qualunque blocca gli incassi di tutti gli appalti pubblici in corso: è il motivo per cui il presidio mensile della regolarità non è una pratica del consulente, è gestione finanziaria." },

    { type: "h2", text: "Le garanzie per fase, in un prospetto", id: "tabella" },
    { type: "table", headers: ["Fase", "Garanzia richiesta", "Misura tipica", "Quando si svincola"], rows: [
      ["Gara", "Garanzia provvisoria", "2% dell'importo a base di gara, riducibile con certificazioni", "All'aggiudicazione (per i non aggiudicatari) o alla firma"],
      ["Firma del contratto", "Garanzia definitiva", "10% dell'importo contrattuale, aumentata in caso di forte ribasso", "Progressivamente con l'avanzamento, fino al collaudo"],
      ["Anticipazione", "Fideiussione sull'anticipo", "100% dell'anticipazione più interessi", "Con il recupero progressivo sui SAL"],
      ["Esecuzione", "Polizza CAR", "Valore dell'opera più danni a terzi", "Alla consegna dell'opera"],
      ["Post collaudo", "Decennale postuma (ove prevista)", "Quota del valore dell'opera", "Dieci anni dalla consegna"],
    ] },

    { type: "h2", text: "Il ciclo in date: dove si gioca la cassa", id: "timeline" },
    { type: "timeline", title: "Dal bando al collaudo: i momenti che toccano i numeri", steps: [
      { when: "Prima della gara", label: "Verifica di classifica SOA, plafond fideiussorio e DURC", detail: "Le tre precondizioni si controllano prima di investire nell'offerta: una qualunque delle tre, mancante, rende il resto inutile." },
      { when: "Offerta", label: "Garanzia provvisoria e costi della sicurezza scorporati", detail: "I costi della sicurezza non si ribassano; il ribasso si calcola su quel che resta." },
      { when: "Aggiudicazione e firma", label: "Garanzia definitiva, verifica dei requisiti, DURC", detail: "La definitiva consuma il plafond per tutta la durata: entra nel prospetto per istituto." },
      { when: "Avvio esecuzione", label: "Richiesta dell'anticipazione del 20%", detail: "Contro fideiussione. Il piano di cassa recepisce entrata e recuperi programmati." },
      { when: "Ogni SAL", label: "Fattura in split payment, trattenuta di recupero anticipo, ritenuta di garanzia", detail: "Il DURC viene verificato a ogni pagamento: un'irregolarità qui blocca l'incasso." },
      { when: "Eventi imprevisti", label: "Iscrizione immediata delle riserve", detail: "Alla prima firma utile degli atti contabili, poi esplicazione nei termini con quantificazione." },
      { when: "Fine lavori", label: "Attestazione di congruità e conto finale", detail: "Sopra soglia, senza congruità non c'è saldo. Le riserve confluiscono nel conto finale." },
      { when: "Collaudo", label: "Svincolo della definitiva e delle ritenute", detail: "La data da inseguire: ogni mese di ritardo è plafond e circolante fermi." },
    ] },

    { type: "h2", text: "Le fonti che regolano il ciclo", id: "fonti" },
    { type: "caselaw", title: "Riferimenti normativi", items: [
      { court: "Legislatore", ref: "D.lgs. 36/2023 (codice dei contratti pubblici)", principle: "Disciplina qualificazione SOA, garanzie di gara e di esecuzione, anticipazione del prezzo del 20%, revisione prezzi e contabilità dei lavori.", impact: "È il perimetro dell'intero ciclo: ogni fase economica dell'appalto ha qui la sua regola e i suoi termini." },
      { court: "Legislatore", ref: "Art. 17-ter D.P.R. 633/1972", principle: "Split payment: nelle operazioni verso le pubbliche amministrazioni l'IVA è versata dall'ente committente, non dal fornitore.", impact: "Il credito IVA sugli acquisti diventa strutturale: va pianificato il recupero con rimborsi prioritari o compensazioni, non subito." },
      { court: "Ministero del Lavoro", ref: "D.M. n. 143 del 25 giugno 2021", principle: "Congruità della manodopera nei lavori pubblici di qualunque importo: l'attestazione condiziona il saldo finale.", impact: "La congruità si presidia durante l'esecuzione, cantiere per cantiere: scoprirla al conto finale significa scoprirla troppo tardi." },
      { court: "Ministero del Lavoro", ref: "D.M. 30 gennaio 2015", principle: "DURC online: la regolarità contributiva è verificata a ogni pagamento della stazione appaltante.", impact: "Un DURC irregolare su qualunque posizione blocca gli incassi di tutti gli appalti pubblici in corso, non solo del cantiere interessato." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Conviene entrare nei lavori pubblici a un'impresa che lavora solo nel privato?", a: "Dipende da tre numeri: la classifica raggiungibile con i bilanci attuali, il plafond fideiussorio disponibile e la capacità del circolante di reggere tempi di incasso scanditi dai SAL. Se due su tre sono deboli, prima si sistemano quelli: entrare sottodimensionati costa più che restare fuori." },
      { q: "L'anticipazione del 20% è obbligatoria o va richiesta?", a: "Va richiesta dall'appaltatore ed è subordinata alla costituzione della garanzia fideiussoria. La stazione appaltante la eroga dopo l'effettivo avvio dell'esecuzione. Non richiederla è legittimo ma raramente conveniente: è cassa a costo di commissione, quasi sempre più economica dell'anticipo bancario su fatture." },
      { q: "Posso cedere o scontare i crediti verso la pubblica amministrazione?", a: "Sì, la cessione dei crediti da appalto pubblico è possibile nelle forme previste dal codice, con notifica alla stazione appaltante che può rifiutarla nei termini. È uno strumento di circolante da valutare insieme al costo: per crediti certi e SAL approvati esistono anche anticipazioni bancarie dedicate." },
      { q: "Cosa succede se la mia classifica SOA scade durante un appalto in corso?", a: "L'attestazione va mantenuta valida: la verifica triennale e il rinnovo quinquennale vanno avviati per tempo, perché la continuità della qualificazione è condizione di esecuzione oltre che di partecipazione. La scadenza va trattata come una scadenza di cassa: in agenda con mesi di anticipo." },
      { q: "Le ritenute di garanzia sui SAL quando tornano?", a: "Le ritenute dello 0,50% a garanzia degli obblighi contributivi si svincolano in sede di liquidazione finale, dopo l'approvazione del collaudo o del certificato di regolare esecuzione, previa verifica del DURC. Vanno tenute nel piano di cassa come incasso a data collaudo, non a data SAL." },
      { q: "In ATI, chi risponde se un'impresa del raggruppamento ha il DURC irregolare?", a: "La regolarità contributiva è richiesta a ciascuna impresa del raggruppamento: l'irregolarità di una blocca i pagamenti della sua quota e può compromettere il raggruppamento verso la stazione appaltante. Nei mandati conviene disciplinare verifiche reciproche periodiche e rimedi." },
      { q: "La revisione prezzi copre qualsiasi aumento di costo?", a: "No: opera al ricorrere delle condizioni e delle soglie previste dalla clausola e dal codice, sulla base di indici ufficiali. Copre la variazione oltre la franchigia, non l'intero aumento. Per questo il preventivo di gara deve già incorporare uno scenario di prezzi, non affidarsi alla revisione come assicurazione totale." },
    ] },
  ],
};
