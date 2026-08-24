import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "cantieri-all-estero-stabile-organizzazione",
  title: "Cantieri all'estero: quando scatta la stabile organizzazione",
  excerpt:
    "Un cantiere che supera la soglia temporale prevista dalla convenzione diventa stabile organizzazione, con obbligo di tassazione nello Stato estero. La soglia va monitorata dal primo giorno, e frazionare i contratti per restare sotto è una strada che non regge.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "cantiere estero stabile organizzazione",
    "soglia temporale cantiere convenzione",
    "distacco personale all'estero a1",
    "iva prestazioni su immobili estero",
    "credito imposta redditi esteri art 165",
    "impresa edile lavori all'estero",
  ],
  intro:
    "Un cantiere di costruzione o montaggio all'estero costituisce stabile organizzazione se supera la durata prevista dalla convenzione contro le doppie imposizioni con quello Stato — spesso dodici mesi, ma in molte convenzioni sei o nove. Superarla comporta obblighi di tassazione locale che vanno preparati prima, non scoperti quando il cantiere è già avviato.",
};

export const seo = {
  seoTitle: "Cantieri all'Estero: Quando Scatta la Stabile Organizzazione",
  metaDescription:
    "La soglia temporale delle convenzioni, gli obblighi di tassazione locale, l'IVA sulle prestazioni immobiliari e il distacco del personale.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — La regola: un cantiere di costruzione o di montaggio costituisce stabile organizzazione solo se la sua durata supera il periodo previsto dalla convenzione applicabile; il modello OCSE indica dodici mesi, ma molte convenzioni bilaterali stipulate dall'Italia prevedono termini più brevi. L'effetto: il reddito attribuibile alla stabile organizzazione è tassabile nello Stato del cantiere, con eliminazione della doppia imposizione in Italia tramite il credito per le imposte estere (art. 165 TUIR). L'IVA: le prestazioni relative a un immobile si considerano effettuate dove è situato l'immobile. Il personale: distacco all'estero con adempimenti previdenziali propri. Il frazionamento dei contratti per restare sotto soglia è contestabile." },

    { type: "h2", text: "La soglia temporale e perché va monitorata dal primo giorno", id: "soglia" },
    { type: "p", text: "Il principio è quello del modello di convenzione OCSE, ripreso dalle convenzioni bilaterali: un cantiere di costruzione o di montaggio costituisce stabile organizzazione soltanto se la sua durata oltrepassa un determinato periodo. Il modello indica dodici mesi, ma la soglia effettiva dipende dalla singola convenzione, e molte di quelle stipulate dall'Italia prevedono termini inferiori." },
    { type: "p", text: "È il primo elemento da verificare, e va verificato sulla convenzione applicabile a quello Stato: assumere dodici mesi come regola generale è l'errore di partenza più comune. Su alcune destinazioni frequenti per le imprese italiane la soglia è sensibilmente più bassa." },
    { type: "p", text: "Il computo del periodo ha regole proprie che vanno conosciute: si considera generalmente il tempo che intercorre dall'inizio dei lavori — comprese le attività preparatorie in loco — fino al completamento, e le interruzioni stagionali o temporanee di norma non sospendono il decorso. Un cantiere fermo per l'inverno continua a contare." },
    { type: "p", text: "Ne discende la conseguenza pratica: la soglia va monitorata dal giorno uno, con una data di inizio registrata e una previsione di durata aggiornata. Un'impresa che se ne accorge all'undicesimo mese ha già perso la possibilità di organizzarsi, e si trova ad adempiere in ritardo in un ordinamento che non conosce." },

    { type: "h2", text: "Cosa comporta il superamento", id: "effetti" },
    { type: "table", headers: ["Ambito", "Effetto del superamento", "Cosa va predisposto"], rows: [
      ["Imposte sui redditi", "Il reddito attribuibile alla stabile organizzazione è tassabile nello Stato del cantiere", "Contabilità separata della stabile organizzazione, adempimenti dichiarativi locali"],
      ["Doppia imposizione", "In Italia il reddito concorre comunque, con credito per le imposte pagate all'estero", "Documentazione delle imposte estere per il credito ex art. 165 TUIR"],
      ["Registrazione locale", "Obbligo di identificazione o registrazione secondo le regole dello Stato", "Assistenza di un professionista locale, tempi non brevi"],
      ["Personale", "Adempimenti previdenziali e di distacco secondo le regole applicabili", "Documentazione di distacco, coperture, adempimenti nello Stato ospitante"],
      ["IVA", "Le prestazioni su immobili si considerano effettuate dove è l'immobile", "Identificazione ai fini IVA nello Stato o rappresentante fiscale, secondo le regole locali"],
    ] },
    { type: "p", text: "La riga sull'IVA merita una precisazione perché prescinde dalla soglia temporale. Le prestazioni di servizi relative a beni immobili — e i lavori edili lo sono — si considerano territorialmente rilevanti dove è situato l'immobile, indipendentemente da dove sia stabilito il prestatore e dalla durata del cantiere. Un'impresa italiana che esegue lavori su un immobile estero ha quindi un tema IVA fin dal primo giorno, anche su un cantiere di due mesi." },
    { type: "p", text: "È una distinzione che genera confusione perché mette in gioco due soglie diverse: quella temporale per le imposte sui redditi, e nessuna soglia per l'IVA sui lavori immobiliari. Le due questioni vanno affrontate separatamente e con tempi diversi." },

    { type: "figure", slot: "cantieri-all-estero-stabile-organizzazione-1", alt: "Cantiere edile all'estero con squadre e mezzi di un'impresa italiana", caption: "La soglia si conta dall'inizio dei lavori: le interruzioni stagionali di norma non la sospendono." },

    { type: "h2", text: "Il frazionamento dei contratti", id: "frazionamento" },
    { type: "p", text: "È la tentazione ricorrente: suddividere un'opera in più contratti di durata inferiore alla soglia, oppure ripartirla tra più società del gruppo, per evitare la configurazione della stabile organizzazione." },
    { type: "p", text: "È una strada che non regge, e conviene dirlo chiaramente. Le regole convenzionali e la prassi internazionale prevedono meccanismi antifrazionamento: attività connesse svolte nello stesso luogo da imprese strettamente collegate vengono considerate unitariamente ai fini del computo, quando la suddivisione non ha ragioni economiche autonome." },
    { type: "p", text: "Il criterio è lo stesso che governa l'[abuso del diritto](/glossario#abuso-del-diritto) nelle riorganizzazioni descritte nelle guide sul patrimonio: se la struttura non ha sostanza economica propria e serve essenzialmente a ottenere un risultato fiscale, viene disconosciuta. Un'opera unitaria spezzata in tre contratti tra società collegate, con le stesse squadre e la stessa direzione, è esattamente questo." },
    { type: "p", text: "Va aggiunto che il rischio non è simmetrico. Se l'amministrazione dello Stato estero riqualifica l'attività come stabile organizzazione a posteriori, l'impresa si trova ad avere omesso adempimenti per l'intera durata, con sanzioni locali e con la difficoltà di ricostruire una contabilità separata che non è mai esistita. È una posizione molto peggiore di quella di chi ha adempiuto dall'inizio." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Modello OCSE di convenzione fiscale", ref: "Art. 5, paragrafo 3", principle: "Un cantiere di costruzione o di montaggio costituisce stabile organizzazione soltanto se la sua durata oltrepassa i dodici mesi.", impact: "È il modello: la soglia effettiva va letta nella convenzione bilaterale con quello specifico Stato, che spesso prevede termini più brevi." },
      { court: "Testo unico imposte sui redditi", ref: "Art. 165", principle: "Le imposte pagate a titolo definitivo sui redditi prodotti all'estero sono ammesse in detrazione dall'imposta netta dovuta, fino a concorrenza della quota d'imposta corrispondente al rapporto tra i redditi prodotti all'estero e il reddito complessivo.", impact: "La doppia imposizione si elimina con il credito, ma serve la documentazione delle imposte estere pagate a titolo definitivo." },
      { court: "D.P.R. 633/1972", ref: "Art. 7-quater, lett. a)", principle: "Si considerano effettuate nel territorio dello Stato le prestazioni di servizi relative a beni immobili quando l'immobile è situato nel territorio dello Stato.", impact: "Per i lavori edili la rilevanza IVA segue l'immobile, senza soglie temporali: il tema esiste dal primo giorno di cantiere." },
    ] },

    { type: "h2", text: "Il personale distaccato", id: "personale" },
    { type: "p", text: "Portare le proprie squadre su un cantiere estero comporta adempimenti che vanno oltre la questione fiscale e che nella pratica sono quelli che creano più problemi operativi." },
    { type: "p", text: "In ambito europeo il coordinamento dei sistemi di sicurezza sociale consente, al ricorrere delle condizioni, di mantenere il lavoratore assoggettato alla legislazione previdenziale dello Stato di provenienza per un periodo determinato, attraverso il rilascio del documento portatile che attesta la legislazione applicabile. È l'adempimento da avviare prima della partenza, non dopo." },
    { type: "p", text: "Accanto a questo esistono gli obblighi previsti dalla [disciplina sul distacco](/guide/appalto-non-genuino-distacco-somministrazione) transnazionale nello Stato in cui i lavoratori operano: comunicazioni preventive, conservazione di documentazione, designazione di un referente, rispetto delle condizioni di lavoro e retributive minime previste in quello Stato. Sono adempimenti dello Stato ospitante e cambiano da Paese a Paese." },
    { type: "p", text: "Sul piano fiscale personale, la tassazione dei redditi di lavoro dipendente prestati all'estero segue regole proprie, con la possibilità in presenza di determinati requisiti di applicare le retribuzioni convenzionali. È una materia in cui l'errore ricade sul lavoratore prima che sull'impresa, e va gestita con il consulente del lavoro fin dalla programmazione della trasferta." },

    { type: "figure", slot: "cantieri-all-estero-stabile-organizzazione-2", alt: "Documentazione di distacco del personale e certificazioni per il lavoro all'estero", caption: "Gli adempimenti di distacco si avviano prima della partenza: dopo si rincorrono." },

    { type: "h2", text: "Come si prepara un cantiere estero", id: "preparazione" },
    { type: "ol", items: [
      "Verificare la convenzione applicabile con quello Stato e la soglia temporale effettiva per i cantieri, che spesso non è dodici mesi",
      "Stimare la durata reale del cantiere con margine, considerando che le interruzioni di norma non sospendono il computo",
      "Verificare fin da subito il trattamento IVA delle prestazioni sull'immobile, che non dipende dalla soglia temporale",
      "Individuare un professionista locale prima di iniziare: registrazioni, adempimenti e scadenze locali non si improvvisano",
      "Predisporre gli adempimenti di distacco del personale prima della partenza delle squadre",
      "Impostare una contabilità separata del cantiere fin dall'inizio, anche se la soglia non è ancora superata: se lo sarà, servirà a ritroso",
      "Conservare la documentazione delle imposte estere pagate, che è la condizione per il credito in Italia",
    ] },
    { type: "p", text: "Il sesto punto è quello che salva le situazioni. La contabilità separata della stabile organizzazione è ciò che consente di determinare il reddito ad essa attribuibile: costruirla dall'inizio costa poco, ricostruirla a posteriori su un cantiere di diciotto mesi è un'operazione lunga e imprecisa. E la soglia, per definizione, si supera senza che nessuno lo decida." },
    { type: "p", text: "Il settimo è quello che si dimentica per ultimo, con effetti che si vedono in dichiarazione: il credito per le imposte estere spetta per le imposte pagate a titolo definitivo, e richiede documentazione. Un'impresa che ha pagato correttamente all'estero ma non ha conservato le certificazioni si trova a subire la doppia imposizione che la convenzione era destinata a evitare." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa italiana che si aggiudica un lavoro di montaggio di strutture in uno Stato europeo, durata contrattuale prevista dieci mesi. La convenzione con quello Stato prevede per i cantieri una soglia di nove mesi. L'impresa invia sei operai e due mezzi." },
    { type: "p", text: "La prima verifica è sulla soglia, ed è già superata dalla previsione contrattuale: il cantiere configurerà stabile organizzazione. La preparazione parte quindi dall'individuazione di un professionista locale, dalla registrazione secondo le regole di quello Stato e dall'impostazione di una contabilità separata del cantiere, con imputazione di ricavi, costi diretti e quota di costi indiretti attribuibili." },
    { type: "p", text: "La seconda verifica riguarda l'IVA e prescinde dalla durata: si tratta di prestazioni relative a un immobile situato all'estero, quindi territorialmente rilevanti in quello Stato. Va verificato se l'impresa debba identificarsi ai fini IVA o se operi il meccanismo dell'inversione contabile in capo al committente locale, secondo le regole di quel Paese." },
    { type: "p", text: "La terza riguarda i sei operai: documento portatile per il mantenimento della legislazione previdenziale italiana, adempimenti di distacco transnazionale previsti dallo Stato ospitante, verifica delle condizioni retributive minime applicabili in loco, coperture assicurative. Sono adempimenti da completare prima della partenza." },
    { type: "p", text: "La quarta è la conseguenza in Italia: il reddito della stabile organizzazione concorre al reddito complessivo dell'impresa, con il credito per le imposte pagate a titolo definitivo all'estero. La documentazione di quel pagamento va richiesta e conservata contestualmente, non ricostruita a fine anno." },
    { type: "note", text: "L'errore da non fare: assumere che la soglia sia dodici mesi. È il valore del modello OCSE, ma le convenzioni bilaterali stipulate dall'Italia prevedono spesso termini più brevi, e un cantiere programmato su dieci mesi può superarla senza che nessuno se ne accorga. Lo scenario è illustrativo: convenzione, soglie e adempimenti vanno verificati sullo Stato concreto." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quando un cantiere estero diventa stabile organizzazione?", a: "Quando la sua durata supera il periodo previsto dalla convenzione contro le doppie imposizioni con quello Stato. Il modello OCSE indica dodici mesi, ma molte convenzioni stipulate dall'Italia prevedono termini più brevi: va verificata la convenzione applicabile a quel Paese." },
      { q: "Le interruzioni sospendono il computo?", a: "Di norma no: le interruzioni stagionali o temporanee non sospendono il decorso del periodo. Un cantiere fermo per l'inverno continua a contare ai fini della soglia, ed è uno degli elementi che porta a superarla senza accorgersene." },
      { q: "Posso dividere il contratto per restare sotto soglia?", a: "È una strada che non regge. Esistono meccanismi antifrazionamento che considerano unitariamente attività connesse svolte nello stesso luogo da imprese strettamente collegate, quando la suddivisione non ha ragioni economiche autonome. E la riqualificazione a posteriori è una posizione molto peggiore." },
      { q: "Come funziona l'IVA sui lavori all'estero?", a: "Le prestazioni relative a beni immobili si considerano effettuate dove è situato l'immobile, senza soglie temporali. Il tema esiste dal primo giorno di cantiere, indipendentemente dalla stabile organizzazione, e va verificato secondo le regole dello Stato in cui si trova l'immobile." },
      { q: "Pago le imposte due volte?", a: "No, se gli adempimenti sono corretti. Il reddito concorre in Italia, ma le imposte pagate a titolo definitivo all'estero sono ammesse in detrazione secondo l'art. 165 del TUIR, entro i limiti previsti. Serve però la documentazione del pagamento definitivo: senza, il credito non spetta." },
      { q: "Cosa serve per portare i miei operai all'estero?", a: "In ambito europeo il documento portatile che attesta la legislazione previdenziale applicabile, più gli adempimenti di distacco transnazionale previsti dallo Stato ospitante: comunicazioni preventive, documentazione, referente, rispetto delle condizioni minime locali. Tutto prima della partenza." },
      { q: "Devo tenere una contabilità separata?", a: "Sì, ed è opportuno impostarla fin dall'inizio anche prima che la soglia sia superata. È ciò che consente di determinare il reddito attribuibile alla stabile organizzazione: ricostruirla a posteriori su un cantiere lungo è impreciso e costoso." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se stai valutando un lavoro all'estero, le due verifiche da fare prima di firmare sono la soglia della convenzione con quello Stato e il trattamento IVA delle prestazioni sull'immobile. Mandaci il Paese, la durata prevista e il tipo di lavorazione dalla pagina contatti: verifichiamo soglie e adempimenti e impostiamo la contabilità separata prima dell'apertura del cantiere. Per il contesto leggi le guide su fiscalità dell'impresa edile e costo del lavoro." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026: soglie convenzionali e adempimenti variano per Stato e vanno verificati sulla convenzione applicabile e sulla normativa locale." },
  ],
};
