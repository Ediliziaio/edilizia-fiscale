import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "split-payment-e-fatturazione-pa",
  title: "Split payment e appalti pubblici: fatturazione, crediti IVA e tempi di incasso",
  excerpt:
    "Lavorare con la pubblica amministrazione cambia la cassa prima ancora del fisco: IVA versata dall'ente, crediti IVA strutturali, fatturazione elettronica con CIG e CUP, tempi di pagamento e certificazione del credito.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "10 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-navy to-navy-light",
  keywords: [
    "split payment appalti pubblici",
    "fatturazione elettronica pa edilizia",
    "credito iva impresa edile rimborso",
    "cig cup fattura appalto pubblico",
    "tempi di pagamento pubblica amministrazione",
    "certificazione del credito pa",
  ],
  intro:
    "Negli appalti pubblici l'IVA non viene incassata dall'impresa ma versata direttamente dall'ente committente. L'effetto fiscale è neutro, quello finanziario no: si genera un credito IVA strutturale che va gestito con compensazione o rimborso. A questo si sommano gli obblighi di fatturazione elettronica verso la PA e i tempi di incasso, che in edilizia decidono la sostenibilità della commessa.",
};

export const seo = {
  seoTitle: "Split Payment e Appalti Pubblici in Edilizia",
  metaDescription:
    "IVA versata dall'ente, crediti IVA strutturali, fatturazione elettronica con CIG e CUP e tempi di incasso nella commessa pubblica.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Lo split payment: l'IVA è versata direttamente dalla PA, l'impresa incassa il solo imponibile (art. 17-ter D.P.R. 633/1972). L'effetto: credito IVA strutturale, da gestire con compensazione o richiesta di rimborso anche trimestrale. La fattura: elettronica verso la PA, con codice univoco ufficio, CIG e CUP, pena il rifiuto e il blocco del pagamento. I tempi: disciplinati dal D.lgs. 231/2002, con interessi moratori automatici in caso di ritardo." },

    { type: "h2", text: "Come funziona lo split payment", id: "come-funziona" },
    { type: "p", text: "L'art. 17-ter del D.P.R. 633/1972 prevede che per le cessioni e le prestazioni rese nei confronti delle pubbliche amministrazioni e di altri soggetti individuati dalla norma, l'imposta sia versata direttamente dal committente all'erario. L'impresa emette la fattura con l'indicazione dell'IVA e della scissione dei pagamenti, ma incassa solo l'imponibile." },
    { type: "p", text: "Sul piano della determinazione dell'imposta non cambia nulla: l'operazione è imponibile, l'IVA è esposta, il volume d'affari include l'operazione. Cambia il flusso finanziario, e cambia in modo strutturale: l'impresa continua a pagare l'IVA sugli acquisti di materiali, noli e subappalti non in reverse charge, ma non incassa più l'IVA a valle." },
    { type: "p", text: "Il risultato è un credito IVA che cresce a ogni SAL. Su una commessa pubblica da 800.000 euro con acquisti imponibili per 400.000 euro, il credito generato in un esercizio è nell'ordine delle decine di migliaia di euro: liquidità immobilizzata che, se non gestita, si somma alla tensione di cassa già tipica del lavoro pubblico." },

    { type: "h2", text: "Gestire il credito IVA: compensazione o rimborso", id: "credito-iva" },
    { type: "p", text: "Le due strade sono la compensazione orizzontale nei limiti previsti dalla normativa e la richiesta di rimborso. La compensazione è più rapida ma incontra due vincoli: il tetto annuo alla compensazione e l'obbligo del visto di conformità sopra la soglia di legge, oltre al divieto di compensazione in presenza di ruoli scaduti sopra la soglia prevista." },
    { type: "p", text: "Il rimborso ha tempi più lunghi ma è la soluzione strutturale per chi lavora stabilmente con la PA. Al ricorrere dei presupposti previsti dall'art. 30 del D.P.R. 633/1972 — tra cui l'effettuazione di operazioni soggette a scissione dei pagamenti — è possibile chiederlo anche in via infrannuale, con cadenza trimestrale, il che riduce sensibilmente il tempo di immobilizzo." },
    { type: "p", text: "La scelta tra le due strade va fatta a inizio esercizio, non quando il credito è già cresciuto. Il rimborso trimestrale richiede la presentazione dell'istanza entro termini precisi e, sopra determinati importi, il visto di conformità o la garanzia: sono adempimenti che vanno pianificati insieme al budget di cassa della commessa." },

    { type: "figure", slot: "split-payment-e-fatturazione-pa-1", alt: "Cantiere di opera pubblica con cartello di lavori", caption: "Nel lavoro pubblico la commessa si vince sul prezzo e si perde sulla cassa." },

    { type: "h2", text: "La fattura verso la PA: gli elementi che bloccano il pagamento", id: "fattura" },
    { type: "p", text: "La fattura verso la pubblica amministrazione è elettronica e transita dal Sistema di Interscambio con un formato specifico. Gli elementi che più frequentemente causano rifiuti e ritardi non sono fiscali ma amministrativi, e vanno concordati con la stazione appaltante prima dell'emissione." },
    { type: "ul", items: [
      "Codice univoco dell'ufficio destinatario: se errato, la fattura non arriva all'ufficio competente e il termine di pagamento non decorre",
      "CIG, il codice identificativo di gara, obbligatorio ai fini della tracciabilità dei flussi finanziari",
      "CUP, il codice unico di progetto, quando l'opera è finanziata con risorse dedicate",
      "Riferimento alla determina o all'atto di affidamento, spesso richiesto dal regolamento di contabilità dell'ente",
      "Indicazione della scissione dei pagamenti, con l'apposito codice nel tracciato elettronico",
      "Riferimento al SAL e al certificato di pagamento emesso dal direttore dei lavori",
    ] },
    { type: "p", text: "La tracciabilità dei flussi finanziari prevista dalla legge 136/2010 impone inoltre l'uso di conti correnti dedicati e l'indicazione del CIG nei pagamenti, obblighi che si trasferiscono anche ai subappaltatori. L'inosservanza espone a sanzioni e, nei casi più gravi, alla risoluzione del contratto." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "D.P.R. 633/1972", ref: "Art. 17-ter", principle: "Per le cessioni di beni e le prestazioni di servizi effettuate nei confronti delle pubbliche amministrazioni, l'imposta è versata dalle medesime secondo modalità e termini stabiliti con decreto.", impact: "L'impresa incassa il solo imponibile: il credito IVA che ne deriva è strutturale, non occasionale." },
      { court: "D.P.R. 633/1972", ref: "Art. 30", principle: "Il rimborso dell'eccedenza detraibile può essere richiesto al ricorrere di specifici presupposti, anche in via infrannuale con cadenza trimestrale.", impact: "Per chi lavora stabilmente con la PA il rimborso trimestrale è lo strumento ordinario, non l'eccezione." },
      { court: "D.lgs. 231/2002", ref: "Ritardi di pagamento nelle transazioni commerciali", principle: "Gli interessi moratori decorrono automaticamente dal giorno successivo alla scadenza del termine di pagamento, senza necessità di costituzione in mora.", impact: "Gli interessi maturano da soli: il punto pratico è iscriverli in contabilità e chiederli, cosa che quasi nessuna impresa fa." },
    ] },

    { type: "h2", text: "Tempi di incasso e strumenti per accorciarli", id: "tempi" },
    { type: "p", text: "I termini di pagamento nelle transazioni commerciali, comprese quelle con la pubblica amministrazione, sono disciplinati dal D.lgs. 231/2002. Alla scadenza gli interessi moratori decorrono automaticamente, senza necessità di messa in mora. È un diritto che quasi nessuna impresa esercita, per il timore di incrinare il rapporto con la stazione appaltante." },
    { type: "p", text: "Gli strumenti per accorciare l'immobilizzo sono tre. La certificazione del credito attraverso la piattaforma dedicata, che consente di ottenere un documento con cui il credito diventa cedibile e utilizzabile. La cessione del credito pro soluto a un intermediario finanziario, che trasferisce anche il rischio ma ha un costo. L'anticipazione bancaria su SAL certificati, che è la soluzione più rapida ma lascia il rischio in capo all'impresa." },
    { type: "p", text: "La scelta dipende dal costo del denaro e dal rating dell'impresa, ma va impostata prima di partecipare alla gara, non quando la cassa è già tesa. Una commessa pubblica valutata senza mettere a budget il costo dell'immobilizzo finanziario è una commessa il cui margine è sovrastimato." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Commessa pubblica da 750.000 euro più IVA al 10%, durata quattordici mesi, pagamento a SAL. L'impresa sostiene costi imponibili per 430.000 euro tra materiali, noli e subappalti non soggetti a reverse charge, con IVA per circa 60.000 euro." },
    { type: "p", text: "Con lo split payment l'impresa incassa 750.000 euro di imponibile e non incassa i 75.000 euro di IVA, versati direttamente dall'ente. Il credito IVA generato nell'arco della commessa è nell'ordine dei 60.000 euro, pari all'imposta assolta sugli acquisti. Se l'impresa non attiva il rimborso trimestrale, quella somma resta immobilizzata fino alla dichiarazione annuale e oltre." },
    { type: "p", text: "A questo si aggiunge l'immobilizzo sul capitale circolante: con SAL bimestrali e tempi di incasso reali di novanta giorni, l'esposizione media dell'impresa sulla commessa si colloca attorno ai 200.000 euro. Al tasso di affidamento applicato, il costo finanziario della commessa è di alcune migliaia di euro l'anno: se non è stato messo a preventivo, esce direttamente dal margine." },
    { type: "note", text: "L'errore da non fare: valutare una gara pubblica solo sul prezzo e sui costi diretti. Il costo dell'immobilizzo finanziario e la gestione del credito IVA sono componenti reali del margine e vanno quantificati in fase di offerta. Lo scenario è illustrativo: valori e tempi dipendono dalla stazione appaltante e dal contratto." },

    { type: "figure", slot: "split-payment-e-fatturazione-pa-2", alt: "Certificato di pagamento SAL e fattura elettronica verso la PA", caption: "CIG, CUP e codice ufficio: gli elementi che bloccano il pagamento sono amministrativi, non fiscali." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Con lo split payment perdo l'IVA?", a: "No. L'operazione resta imponibile e l'IVA è dovuta, ma la versa l'ente committente anziché l'impresa. L'effetto è esclusivamente finanziario: l'impresa incassa il solo imponibile e accumula un credito IVA pari all'imposta assolta sugli acquisti." },
      { q: "Come recupero il credito IVA che si accumula?", a: "Con la compensazione orizzontale nei limiti previsti, oppure con la richiesta di rimborso. Chi effettua operazioni in scissione dei pagamenti può accedere al rimborso anche in via infrannuale, con cadenza trimestrale: è la soluzione strutturale per chi lavora stabilmente con la PA." },
      { q: "Perché la mia fattura alla PA viene rifiutata?", a: "Nella grande maggioranza dei casi per errori nel codice univoco dell'ufficio destinatario, per l'assenza del CIG o del CUP, o per il mancato richiamo dell'atto di affidamento richiesto dal regolamento dell'ente. Sono elementi da concordare prima dell'emissione, non da correggere dopo." },
      { q: "Posso chiedere gli interessi di mora alla PA?", a: "Sì. Gli interessi moratori previsti dal D.lgs. 231/2002 decorrono automaticamente dalla scadenza del termine, senza necessità di costituzione in mora. Vanno però rilevati in contabilità e richiesti formalmente: il diritto esiste, ma non si esercita da solo." },
      { q: "Che cos'è la certificazione del credito?", a: "È una procedura che consente al creditore di ottenere dall'amministrazione debitrice la certificazione dell'importo dovuto ed esigibile. Il credito certificato diventa cedibile a intermediari finanziari o utilizzabile secondo le modalità previste, riducendo i tempi di immobilizzo." },
      { q: "Lo split payment vale anche per i miei subappaltatori?", a: "No: la scissione dei pagamenti opera nel rapporto tra impresa e pubblica amministrazione. Il rapporto con i subappaltatori segue le regole ordinarie, incluso il reverse charge quando ne ricorrono i presupposti. È una delle ragioni per cui il credito IVA si accumula." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se lavori con committenti pubblici e non hai mai attivato il rimborso IVA trimestrale, è probabile che tu abbia liquidità ferma che potresti avere sul conto. Mandaci le ultime liquidazioni IVA e l'elenco delle commesse pubbliche in corso: verifichiamo i presupposti per il rimborso infrannuale e quantifichiamo il costo dell'immobilizzo sulle commesse aperte. Per il quadro d'insieme leggi la guida sui flussi di cassa di cantiere." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026." },
  ],
};
