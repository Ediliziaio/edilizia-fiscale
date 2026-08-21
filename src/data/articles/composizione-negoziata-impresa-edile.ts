import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "composizione-negoziata-impresa-edile",
  title: "Composizione negoziata per l'impresa edile: il DURC è la variabile critica",
  excerpt:
    "Uno strumento riservato per trattare con i creditori mantenendo la gestione. In edilizia ha una specificità che decide tutto: senza DURC regolare non si incassa, e senza incassi il risanamento non esiste. Come si imposta il percorso attorno a questo vincolo.",
  category: "Controllo",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-trust-dark",
  keywords: [
    "composizione negoziata crisi impresa",
    "esperto indipendente composizione negoziata",
    "misure protettive patrimonio impresa",
    "risanamento impresa edile cantieri",
    "durc risanamento appalti",
    "codice della crisi impresa costruzioni",
  ],
  intro:
    "La composizione negoziata è un percorso volontario e riservato in cui l'imprenditore, affiancato da un esperto indipendente, tratta con i creditori mantenendo la gestione dell'impresa. Il presupposto è la probabilità della crisi, non l'insolvenza: è pensata per essere attivata prima. In edilizia ha un vincolo suo, che va messo al centro fin dal primo giorno: la continuità dei cantieri passa dal DURC.",
};

export const seo = {
  seoTitle: "Composizione Negoziata per l'Impresa Edile",
  metaDescription:
    "Il percorso riservato con l'esperto indipendente, le misure protettive e la specificità del settore: senza DURC non si incassa e non si risana.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Cos'è: percorso volontario e riservato introdotto dal codice della crisi, in cui un esperto indipendente affianca l'imprenditore nelle trattative con i creditori. Il presupposto: condizioni di squilibrio patrimoniale o economico-finanziario che rendono probabile la crisi o l'insolvenza, con risanamento ragionevolmente perseguibile. Chi gestisce: l'imprenditore resta alla guida dell'impresa. Le misure protettive: su richiesta, possono sospendere le azioni esecutive e cautelari dei creditori. Gli esiti: contratto con i creditori, accordo, convenzione di moratoria, accordo di ristrutturazione, o il concordato semplificato quando le trattative non riescono. La specificità edile: DURC, garanzie in essere e attestazione SOA sono le tre variabili che decidono se la continuità è possibile." },

    { type: "h2", text: "A cosa serve e quando si attiva", id: "cosa-serve" },
    { type: "p", text: "La composizione negoziata nasce da una constatazione: le imprese arrivano tardi agli strumenti di regolazione della crisi, quando il valore si è già disperso. Serve quindi un percorso che sia accessibile prima, che non comporti lo spossessamento, che non sia pubblico e che non spaventi clienti e fornitori." },
    { type: "p", text: "Il presupposto di accesso è più ampio dell'insolvenza: condizioni di squilibrio patrimoniale o economico-finanziario che rendono probabile la crisi o l'insolvenza, unite alla ragionevole perseguibilità del risanamento. Chi è già insolvente in modo irreversibile non trova qui la risposta; chi vede arrivare la difficoltà sì." },
    { type: "p", text: "Il percorso si attiva su istanza dell'imprenditore attraverso una piattaforma telematica nazionale, con la nomina di un esperto indipendente scelto da un elenco. L'esperto non amministra e non decide: agevola le trattative, verifica la percorribilità del risanamento e riferisce sull'andamento." },
    { type: "p", text: "Va detto con chiarezza qual è il limite: non è una procedura che impone qualcosa ai creditori. È una sede di trattativa assistita. Funziona se esiste una prospettiva credibile e se i creditori principali hanno interesse a trovare un accordo — cosa che accade più spesso di quanto si creda, perché l'alternativa è quasi sempre peggiore anche per loro." },

    { type: "h2", text: "Le tre variabili che in edilizia decidono tutto", id: "variabili" },
    { type: "p", text: "Qui sta la ragione per cui questa guida esiste come guida di settore e non come spiegazione generica dell'istituto. Un'impresa manifatturiera in composizione negoziata continua a produrre e vendere. Un'impresa edile no, se saltano tre cose." },
    { type: "table", headers: ["Variabile", "Perché è critica", "Cosa succede se salta"], rows: [
      ["DURC regolare", "È la condizione per incassare dai committenti pubblici e per partecipare alle gare", "Si fermano gli incassi proprio quando servono: il risanamento perde la sua fonte"],
      ["Garanzie in essere", "Fideiussioni definitive e sull'anticipazione sono già rilasciate sui cantieri aperti", "L'escussione o il mancato rinnovo blocca l'esecuzione dei lavori in corso"],
      ["Attestazione SOA", "Serve per i lavori pubblici sopra soglia e dipende anche da requisiti economici", "Si perde l'accesso al mercato che genera i flussi su cui si basa il piano"],
    ] },
    { type: "p", text: "La prima riga è quella che va affrontata per prima, ed è controintuitiva. Il debito contributivo è quasi sempre tra i primi a formarsi quando la cassa si tende, perché è quello che non ha un interlocutore che telefona. Ma è anche quello che, restando aperto, chiude il rubinetto degli incassi pubblici attraverso il meccanismo dell'intervento sostitutivo descritto nella guida sul [DURC](/guide/durc-irregolare-impresa-edile)." },
    { type: "p", text: "Ne discende una regola pratica che diamo sempre in questi percorsi: la posizione contributiva va messa in sicurezza per prima, tipicamente attraverso una rateazione, anche se questo significa destinare risorse a un creditore che non sta facendo pressione. Non è una scelta di equità tra creditori: è la condizione perché esista qualcosa da distribuire." },
    { type: "p", text: "La seconda variabile riguarda il rapporto con banche e compagnie che hanno rilasciato le garanzie sui cantieri in corso. Vanno coinvolte presto, perché una revoca o un mancato rinnovo su un appalto in esecuzione produce un effetto a catena immediato. La riservatezza del percorso aiuta, ma non sostituisce il dialogo." },

    { type: "figure", slot: "composizione-negoziata-impresa-edile-1", alt: "Cantiere in attività con gru, visto in una giornata di lavoro", caption: "In edilizia il risanamento passa dalla continuità dei cantieri: fermarli significa perdere la fonte del piano." },

    { type: "h2", text: "Le misure protettive", id: "misure" },
    { type: "p", text: "Su richiesta dell'imprenditore, il percorso può essere accompagnato da misure protettive del patrimonio, che vengono pubblicate e confermate dal tribunale. L'effetto è la sospensione o il divieto di azioni esecutive e cautelari da parte dei creditori per la durata prevista." },
    { type: "p", text: "È lo strumento che dà respiro, ma comporta un trade-off che va valutato con lucidità. La richiesta di misure protettive rende pubblica l'esistenza del percorso: fornitori, committenti e concorrenti possono venirne a conoscenza. In un settore in cui l'affidamento del committente è tutto, e in cui le stazioni appaltanti valutano l'affidabilità dell'esecutore, la pubblicità ha un costo reputazionale." },
    { type: "p", text: "La valutazione va quindi fatta caso per caso: se le azioni esecutive sono già in corso o imminenti, le misure protettive sono indispensabili e il costo reputazionale è comunque destinato a materializzarsi. Se invece i creditori sono ancora fermi e la trattativa è avviabile in via riservata, rinunciarvi mantiene il vantaggio della riservatezza." },
    { type: "p", text: "Va inoltre considerato che, durante il percorso, l'imprenditore conserva la gestione ma con obblighi di comportamento: deve gestire l'impresa evitando pregiudizi alla sostenibilità economico-finanziaria e informare l'esperto degli atti di straordinaria amministrazione. Non è un ritorno alla piena libertà gestionale." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Codice della crisi d'impresa e dell'insolvenza", ref: "D.lgs. 14/2019, artt. 12 e seguenti", principle: "L'imprenditore commerciale e agricolo che si trova in condizioni di squilibrio patrimoniale o economico-finanziario che ne rendono probabile la crisi o l'insolvenza può chiedere la nomina di un esperto indipendente quando risulta ragionevolmente perseguibile il risanamento dell'impresa.", impact: "Il presupposto è la probabilità della crisi, non l'insolvenza: è uno strumento per chi si muove prima." },
      { court: "Codice della crisi", ref: "Misure protettive", principle: "Su richiesta dell'imprenditore possono essere applicate misure protettive del patrimonio, con sospensione o divieto di azioni esecutive e cautelari, soggette a pubblicazione e a conferma da parte del tribunale.", impact: "Danno respiro ma rendono pubblico il percorso: in edilizia il costo reputazionale verso le stazioni appaltanti va messo nel conto." },
      { court: "Codice civile", ref: "Art. 2086, comma 2", principle: "L'imprenditore ha il dovere di istituire assetti adeguati anche in funzione della rilevazione tempestiva della crisi e di attivarsi senza indugio per l'adozione degli strumenti previsti dall'ordinamento.", impact: "Attivarsi tardi non è solo inefficace: è un profilo di responsabilità autonomo in capo agli amministratori." },
    ] },

    { type: "h2", text: "Cosa serve per partire, in concreto", id: "cosa-serve-partire" },
    { type: "p", text: "L'accesso richiede una documentazione che, nella maggior parte dei casi, l'impresa non ha pronta. È il motivo per cui il percorso viene spesso rinviato: non per scelta, ma perché mettere insieme i documenti richiede settimane che nel frattempo peggiorano la situazione." },
    { type: "ol", items: [
      "Bilanci degli ultimi esercizi e situazione contabile aggiornata a data recente",
      "Elenco completo dei creditori con importi, scadenze e stato del contenzioso eventuale",
      "Situazione debitoria fiscale e contributiva, con l'evidenza delle rateazioni in essere e del loro stato",
      "Elenco delle commesse in corso con importo, avanzamento, costi a finire e margine atteso",
      "Portafoglio ordini e prospettive commerciali",
      "Piano finanziario con proiezione dei flussi, che è il documento su cui si giudica la perseguibilità del risanamento",
      "Elenco delle garanzie rilasciate e delle fideiussioni personali dei soci",
    ] },
    { type: "p", text: "I punti quattro e sei sono quelli che distinguono un'impresa che può accedere con qualche giorno di lavoro da una che impiega mesi. Sono gli stessi documenti descritti nella guida sugli assetti adeguati e in quella sul [controllo di gestione](/guide/controllo-di-gestione-impresa-edile): margine per commessa, costi a finire, cassa prospettica. Un'impresa che li produce mensilmente ha già il novanta per cento del materiale." },
    { type: "p", text: "È il collegamento che rende questa guida meno teorica di quanto sembri. Il controllo di gestione non serve solo a guadagnare di più: serve anche a poter accedere a uno strumento di risanamento quando serve, e ad accedervi in tempo utile." },

    { type: "h2", text: "Gli esiti possibili", id: "esiti" },
    { type: "p", text: "Il percorso può concludersi in diversi modi, che vanno conosciuti perché orientano la trattativa fin dall'inizio. Nella forma più semplice, con un contratto con uno o più creditori idoneo ad assicurare la continuità per un periodo determinato. Oppure con una convenzione di moratoria, o con un accordo sottoscritto dall'imprenditore, dai creditori e dall'esperto." },
    { type: "p", text: "Si può inoltre approdare agli strumenti di regolazione della crisi previsti dal codice — accordi di ristrutturazione, piano di risanamento attestato, concordato preventivo — utilizzando quanto costruito durante le trattative. E quando le trattative non riescono ma il percorso è stato condotto secondo correttezza e buona fede, è previsto l'accesso al concordato semplificato per la liquidazione del patrimonio." },
    { type: "p", text: "Per un'impresa edile la valutazione dell'esito va fatta considerando cosa accade ai cantieri in ciascuno scenario. La continuità aziendale ha un valore che nel settore è particolarmente concreto: commesse acquisite, qualificazioni maturate, squadre formate, rapporti con committenti e subappaltatori. Un percorso che salva la continuità conserva valore che una liquidazione disperde quasi interamente." },

    { type: "figure", slot: "composizione-negoziata-impresa-edile-2", alt: "Tavolo di trattativa con documenti finanziari e piano di risanamento", caption: "Il piano finanziario è il documento su cui si giudica la perseguibilità: senza, il percorso non parte." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa con ricavi per 7 milioni, quattro cantieri in corso di cui due pubblici. Tensione finanziaria conclamata: debito contributivo di 340.000 euro, esposizione bancaria al massimo degli affidamenti, fornitori strategici che iniziano a chiedere pagamenti anticipati. Il portafoglio ordini è però pieno e le commesse in corso hanno margini positivi." },
    { type: "p", text: "La diagnosi mostra un problema finanziario e non industriale: l'impresa guadagna sui cantieri ma ha finanziato la crescita con il breve e con il debito contributivo. È esattamente il profilo per cui la composizione negoziata è stata pensata." },
    { type: "p", text: "La sequenza degli interventi parte dal DURC. Con 340.000 euro di debito contributivo aperto, i due cantieri pubblici non generano incassi: l'ente attiva l'intervento sostitutivo e versa direttamente agli enti. Prima ancora di sedersi al tavolo con le banche, va presentata istanza di rateazione e vanno pagate le prime rate, perché è quello che riapre il flusso." },
    { type: "p", text: "In parallelo si costruisce il piano finanziario sulle commesse in corso e sul portafoglio ordini, si mappano le garanzie rilasciate e le fideiussioni personali dei soci, e si valuta se chiedere misure protettive. In questo caso, con i creditori ancora fermi e nessuna azione esecutiva in corso, la scelta è di procedere in via riservata, preservando il rapporto con le stazioni appaltanti." },
    { type: "note", text: "L'errore da non fare: rinviare l'istanza per mancanza di documentazione. Il tempo speso a costruire da zero margine per commessa e cassa prospettica è tempo in cui la situazione peggiora. Un'impresa che quei documenti li produce già mensilmente accede in giorni. Lo scenario è illustrativo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Devo essere insolvente per accedere?", a: "No, ed è il punto centrale: il presupposto è lo squilibrio patrimoniale o economico-finanziario che rende probabile la crisi o l'insolvenza, unito alla ragionevole perseguibilità del risanamento. È uno strumento per chi si muove prima, non per chi è già in insolvenza irreversibile." },
      { q: "Perdo la gestione dell'impresa?", a: "No: l'imprenditore resta alla guida. L'esperto agevola le trattative e verifica la percorribilità, ma non amministra. Restano però obblighi di comportamento, tra cui gestire evitando pregiudizi alla sostenibilità e informare l'esperto degli atti di straordinaria amministrazione." },
      { q: "Il percorso è pubblico?", a: "È riservato, salvo che l'imprenditore chieda le misure protettive: in quel caso la richiesta è pubblicata e confermata dal tribunale. È un trade-off da valutare, perché in edilizia la conoscenza del percorso da parte di committenti e stazioni appaltanti ha un costo reputazionale." },
      { q: "Perché in edilizia il DURC è così centrale?", a: "Perché senza DURC regolare i committenti pubblici non pagano l'impresa: attivano l'intervento sostitutivo e versano direttamente agli enti. Il risanamento perde così la sua fonte principale di flussi, proprio nel momento in cui servono. La posizione contributiva va messa in sicurezza per prima." },
      { q: "Cosa serve per presentare l'istanza?", a: "Bilanci e situazione contabile aggiornata, elenco dei creditori, situazione fiscale e contributiva, elenco delle commesse con avanzamento e margine, portafoglio ordini, piano finanziario con proiezione dei flussi ed elenco delle garanzie rilasciate. Chi produce già report mensili di commessa ha quasi tutto." },
      { q: "Cosa succede se le trattative non riescono?", a: "Restano gli strumenti di regolazione della crisi previsti dal codice, che possono utilizzare quanto costruito durante il percorso. Quando le trattative sono state condotte secondo correttezza e buona fede senza esito, è previsto l'accesso al concordato semplificato per la liquidazione del patrimonio." },
      { q: "Le fideiussioni personali dei soci sono toccate?", a: "Le garanzie personali rilasciate restano efficaci e i creditori possono agire su di esse. È uno dei motivi per cui la protezione patrimoniale va costruita quando l'azienda è in salute: in composizione negoziata quelle posizioni si negoziano, non si eliminano." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se la tensione finanziaria è già visibile e ci sono debiti contributivi aperti, il tempo lavora contro: ogni mese di attesa riduce le opzioni e peggiora il rapporto tra debito e valore recuperabile. Mandaci situazione contabile, elenco creditori, posizione fiscale e contributiva e commesse in corso dalla pagina contatti: valutiamo la perseguibilità del risanamento e la sequenza degli interventi, a partire dal DURC. Per il contesto leggi le guide su [assetti adeguati](/guide/assetti-adeguati-impresa-edile), DURC irregolare e flussi di cassa." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa vigente." },
  ],
};
