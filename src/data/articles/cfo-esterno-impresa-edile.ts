import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "cfo-esterno-impresa-edile",
  title: "CFO esterno per l'impresa edile: cosa fa, quando serve, cosa costa",
  excerpt:
    "Tra il commercialista che tiene la contabilità e il direttore amministrativo che l'impresa non può permettersi c'è una funzione intermedia: reporting mensile, tesoreria, rapporti bancari e preparazione delle decisioni con i numeri.",
  category: "Controllo",
  date: "Agosto 2026",
  readTime: "10 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust-dark to-trust",
  keywords: [
    "cfo esterno",
    "direzione finanziaria esterna impresa edile",
    "temporary manager finanza edilizia",
    "controller esterno costruzioni",
    "quando serve un cfo",
    "reporting mensile impresa edile",
  ],
  intro:
    "Un'impresa edile tra i tre e i quindici milioni di fatturato ha problemi da azienda strutturata e un'organizzazione da impresa familiare: nessuno prepara le decisioni con i numeri, nessuno presidia la tesoreria, nessuno costruisce il dossier per la banca. Il CFO esterno è la funzione che copre questo spazio, con un impegno proporzionato alla dimensione.",
};

export const seo = {
  seoTitle: "CFO Esterno per l'Impresa Edile: Cosa Fa e Quando",
  metaDescription:
    "Reporting mensile, tesoreria, rapporti bancari e decisioni preparate con i numeri: la funzione finanziaria per l'impresa edile che non ha un CFO.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Lo spazio che copre: tra la contabilità e la direzione generale, dove servono numeri prospettici e non consuntivi. Le attività tipiche: reporting mensile con margine per commessa, cassa prospettica, budget e forecast, dossier bancario, presidio degli adempimenti straordinari, preparazione delle operazioni societarie. La dimensione tipica: imprese tra i tre e i quindici milioni con più commesse contemporanee. Il modello: presenza periodica programmata, non consulenza a chiamata." },

    { type: "h2", text: "Il vuoto organizzativo delle imprese edili di media dimensione", id: "vuoto" },
    { type: "p", text: "Un'impresa edile da otto milioni di fatturato ha in genere un ufficio amministrativo di una o due persone che gestisce ciclo attivo, ciclo passivo, scadenzario e rapporti con il consulente. Ha un imprenditore che segue i cantieri, i clienti e le gare. Non ha nessuno il cui mestiere sia guardare avanti con i numeri." },
    { type: "p", text: "Il risultato è che le decisioni importanti — partecipare a una gara impegnativa, comprare un mezzo, aprire una seconda società, accettare un cliente con tempi di pagamento lunghi — vengono prese sull'intuito, che nell'imprenditore edile è spesso buono ma non è verificabile. E quando l'intuito sbaglia, l'errore emerge mesi dopo." },
    { type: "p", text: "Assumere un direttore amministrativo e finanziario a tempo pieno, con l'esperienza necessaria, ha un costo che a quella dimensione raramente si giustifica. Il CFO esterno copre la stessa funzione con un impegno programmato — tipicamente alcune giornate al mese — e un costo proporzionato." },

    { type: "h2", text: "Cosa fa concretamente", id: "cosa-fa" },
    { type: "ol", items: [
      "Reporting mensile: margine per commessa, scostamenti rispetto al preventivo, conto economico gestionale, indicatori chiave. Consegnato entro il giorno quindici e discusso in riunione",
      "Tesoreria: cassa prospettica a tredici settimane aggiornata settimanalmente, presidio degli affidamenti, gestione delle scadenze critiche",
      "Budget e forecast: budget annuale per commessa e revisione trimestrale delle previsioni sulla base del portafoglio ordini",
      "Rapporti bancari: costruzione del dossier, presentazione dei numeri, negoziazione di affidamenti e condizioni, monitoraggio della centrale rischi",
      "Preparazione delle decisioni: valutazione economica di gare, investimenti in mezzi, assunzioni, apertura di nuove società",
      "Presidio delle operazioni straordinarie: riorganizzazioni societarie, ingresso di soci, passaggio generazionale, in raccordo con i professionisti coinvolti",
    ] },
    { type: "p", text: "Va detto cosa non fa: non tiene la contabilità e non sostituisce l'ufficio amministrativo. Lavora sui dati che quell'ufficio produce, ne verifica la qualità e li trasforma in informazioni utili a decidere. Se la contabilità non attribuisce i costi alle commesse, il primo lavoro del CFO esterno è farla attribuire." },

    { type: "figure", slot: "cfo-esterno-impresa-edile-1", alt: "Riunione di direzione con report mensile e prospetti di commessa", caption: "La riunione mensile di trenta minuti è parte della funzione: un report che nessuno discute non produce decisioni." },

    { type: "h2", text: "Quando serve, e quando no", id: "quando" },
    { type: "table", headers: ["Situazione", "Serve?", "Perché"], rows: [
      ["Meno di tre commesse contemporanee", "Raramente", "L'imprenditore mantiene il controllo diretto sui numeri"],
      ["Crescita rapida del fatturato", "Sì", "La crescita assorbe circolante: va misurata e finanziata prima"],
      ["Più società o gruppo in formazione", "Sì", "Serve una regia sui flussi e sui rapporti infragruppo"],
      ["Ingresso in appalti pubblici", "Sì", "Cambiano tempi di incasso, adempimenti e fabbisogno finanziario"],
      ["Rapporti bancari tesi o rating in peggioramento", "Sì", "Il dossier e la relazione con gli istituti vanno costruiti, non improvvisati"],
      ["Passaggio generazionale in corso", "Sì", "La governance transitoria richiede numeri condivisi e verificabili"],
      ["Impresa stabile, un solo cantiere alla volta", "No", "Il costo non trova contropartita"],
    ] },
    { type: "p", text: "Il segnale più affidabile non è il fatturato ma la domanda a cui l'imprenditore non sa rispondere. Se non sa dire quale commessa sta guadagnando, quanta cassa avrà tra otto settimane e quanto costa realmente un'ora di squadra, la funzione manca — indipendentemente dalla dimensione." },

    { type: "h2", text: "Come si struttura l'incarico", id: "incarico" },
    { type: "p", text: "Il modello che funziona è la presenza programmata: un numero definito di giornate al mese, con un calendario fisso di consegne. La consulenza a chiamata non produce gli stessi effetti, perché il valore della funzione sta nella continuità e nella disciplina del ciclo mensile." },
    { type: "p", text: "Nei primi mesi l'impegno è superiore, perché va costruito l'impianto: piano dei conti di commessa, costi orari, flusso di rilevazione, modelli di reporting. Superata quella fase, l'attività si stabilizza sul ciclo ricorrente e sui progetti straordinari che via via emergono." },
    { type: "p", text: "Il compenso si concorda a canone, con l'indicazione esplicita di cosa è compreso e cosa viene quotato a parte — tipicamente le operazioni straordinarie. È bene che sia distinto dal compenso per la tenuta della contabilità e per gli adempimenti fiscali: sono attività diverse, e tenerle separate rende visibile il valore di ciascuna." },

    { type: "caselaw", title: "Riferimenti utili", items: [
      { court: "Codice civile", ref: "Art. 2086, comma 2", principle: "L'imprenditore che opera in forma societaria deve istituire un assetto organizzativo, amministrativo e contabile adeguato, anche in funzione della rilevazione tempestiva della crisi.", impact: "La funzione finanziaria non è un lusso organizzativo: è uno degli elementi con cui si dimostra l'adeguatezza degli assetti." },
      { court: "Codice della crisi d'impresa", ref: "Obblighi di rilevazione tempestiva", principle: "L'impresa deve dotarsi di strumenti idonei a rilevare squilibri di carattere patrimoniale o economico-finanziario e a verificare la sostenibilità dei debiti nei successivi dodici mesi.", impact: "Una cassa prospettica e un forecast documentati sono esattamente gli strumenti richiesti." },
      { court: "Prassi bancaria", principle: "La valutazione del merito creditizio considera, oltre ai dati di bilancio, la qualità delle informazioni prospettiche fornite dall'impresa e la loro coerenza nel tempo.", impact: "Presentare numeri di gestione affidabili e stabili incide sulle condizioni ottenute, non solo sull'accesso al credito." },
    ] },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa di costruzioni con ricavi per 7,4 milioni, dodici commesse aperte, due persone in amministrazione. L'imprenditore segue personalmente cantieri, gare e clienti. Il bilancio arriva a giugno, il margine per commessa non esiste, la tesoreria si gestisce guardando il saldo del conto la mattina." },
    { type: "p", text: "Nei primi quattro mesi di incarico il lavoro è di impianto: attribuzione dei costi alle commesse in fase di registrazione, calcolo dei costi orari per qualifica e per mezzo, definizione del modello di reporting, ricostruzione del margine sulle commesse chiuse nell'ultimo biennio. Da quella ricostruzione emerge che le commesse pubbliche hanno un margine netto negativo, assorbito dalle ristrutturazioni private." },
    { type: "p", text: "Dal quinto mese l'attività diventa ricorrente: report entro il quindici, riunione di trenta minuti, cassa prospettica settimanale. Le decisioni che ne derivano nel primo anno sono tre: revisione dei criteri di partecipazione alle gare pubbliche, richiesta di rimborso IVA trimestrale che libera 78.000 euro, rinegoziazione degli affidamenti con un dossier documentato che riduce il costo del debito. Nessuna di queste richiedeva competenze straordinarie: richiedeva qualcuno il cui mestiere fosse guardarle." },
    { type: "note", text: "L'errore da non fare: aspettarsi che il CFO esterno risolva problemi di redditività che nascono in cantiere. La funzione misura, prepara le decisioni e presidia la finanza; l'esecuzione resta all'impresa. Se il margine si perde per cattiva organizzazione dei cantieri, il report lo mostra ma non lo corregge. Lo scenario è illustrativo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Che differenza c'è tra il CFO esterno e il commercialista?", a: "Il commercialista presidia contabilità, adempimenti fiscali e bilancio: guarda soprattutto al consuntivo e alla conformità. Il CFO esterno lavora sui numeri prospettici: margine per commessa, cassa a tredici settimane, budget, dossier bancario. Le due funzioni sono complementari e spesso convivono nello stesso studio, ma sono attività distinte." },
      { q: "Da che dimensione ha senso?", a: "Il criterio non è il fatturato ma il numero di commesse contemporanee e la complessità della struttura. Indicativamente da tre milioni in su con più cantieri aperti, oppure a qualunque dimensione in presenza di più società, appalti pubblici o un passaggio generazionale in corso." },
      { q: "Quante giornate al mese servono?", a: "Nei primi mesi l'impegno è maggiore perché va costruito l'impianto di rilevazione. A regime, per un'impresa tra i cinque e i dieci milioni, l'attività ricorrente si struttura su alcune giornate al mese, concentrate attorno alla chiusura mensile e alla riunione di direzione." },
      { q: "Il CFO esterno tiene anche la contabilità?", a: "No, e non deve. Lavora sui dati prodotti dall'ufficio amministrativo e ne verifica la qualità. Se la contabilità non attribuisce i costi alle commesse, il primo intervento è modificare quel flusso: senza dati attribuiti correttamente, nessun reporting è affidabile." },
      { q: "Come si misura il ritorno di questa funzione?", a: "Sui numeri che produce: margine recuperato su commesse riorientate, liquidità liberata da crediti IVA e ritenute, riduzione del costo del debito, decisioni di gara evitate. Vanno misurati nel primo anno e messi a confronto con il compenso: è un conto che si può fare." },
      { q: "Serve anche se ho già un buon capo contabile?", a: "Spesso sì, perché le due competenze sono diverse. Un ottimo responsabile amministrativo presidia la correttezza dei dati; la funzione finanziaria li usa per costruire scenari e negoziare con l'esterno. Dove il responsabile amministrativo ha entrambe le competenze, la funzione esterna serve meno." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Un modo semplice per capire se questa funzione ti manca: prova a rispondere a tre domande senza aprire nulla. Quale commessa sta guadagnando di più in questo momento? Quanta cassa avrai tra otto settimane? Quanto ti costa realmente un'ora di squadra? Se una risposta manca, scrivici dalla pagina contatti. Per il metodo leggi le guide su controllo di gestione, margine di commessa e flussi di cassa." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026." },
  ],
};
