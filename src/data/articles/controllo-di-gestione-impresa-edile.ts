import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "controllo-di-gestione-impresa-edile",
  title: "Controllo di gestione per l'impresa edile: leggere il margine commessa per commessa",
  excerpt:
    "Il bilancio dice se hai guadagnato. Non dice dove. Come si costruisce un controllo di gestione di cantiere: costo orario pieno, ribaltamento dei costi indiretti, avanzamento economico, scostamenti e report mensile.",
  category: "Controllo",
  date: "Agosto 2026",
  readTime: "15 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust-dark to-trust",
  keywords: [
    "controllo di gestione impresa edile",
    "controllo di gestione edilizia",
    "contabilità industriale cantiere",
    "margine di commessa",
    "budget di cantiere",
    "costo orario impresa edile",
  ],
  intro:
    "Il controllo di gestione in edilizia serve a rispondere a una domanda che il bilancio non affronta: quale cantiere sta guadagnando e quale sta perdendo, adesso. Si costruisce su tre elementi — un preventivo di commessa con voci confrontabili, una rilevazione dei costi per cantiere, un aggiornamento mensile dei costi a finire — e su un numero che va calcolato bene: il costo orario pieno della manodopera.",
};

export const seo = {
  seoTitle: "Controllo di Gestione per l'Impresa Edile",
  metaDescription:
    "Come leggere il margine commessa per commessa: costo orario pieno, costi indiretti, avanzamento economico e report mensile di cantiere.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il problema: il conto economico d'esercizio aggrega dodici mesi di cantieri diversi, e quando il dato arriva non è più azionabile. La soluzione: una contabilità per commessa che confronti il preventivo con il consuntivo alla stessa data e alla stessa profondità di voci. I tre numeri che decidono tutto: costo orario pieno della manodopera, costo orario dei mezzi propri, costi a finire aggiornati. La cadenza: mensile. Trimestrale è già troppo tardi per intervenire su un cantiere in corso." },

    { type: "h2", text: "Perché il bilancio non basta a un'impresa edile", id: "perche-non-basta" },
    { type: "p", text: "Un'impresa edile che chiude l'esercizio con un utile del 4% non sa quasi nulla di sé. Quel 4% può nascere da otto cantieri tutti al 4%, oppure da sei cantieri al 12% e due che hanno bruciato margine per 300.000 euro. I due scenari richiedono decisioni opposte — nel primo caso si alza il listino, nel secondo si cambia il modo di preventivare certe lavorazioni — ma il bilancio li rappresenta in modo identico." },
    { type: "p", text: "C'è poi il problema del tempo. Il bilancio arriva mesi dopo la chiusura, quando i cantieri che l'hanno generato sono finiti e quelli nuovi sono già stati preventivati con gli stessi errori. Il controllo di gestione esiste per accorciare quella distanza: portare l'informazione a ridosso del fatto, mentre il cantiere è ancora aperto e qualcosa si può ancora fare." },
    { type: "p", text: "La terza ragione è più insidiosa. In edilizia il conto economico dipende in modo determinante dalla valutazione dei lavori in corso, che a sua volta dipende dai [costi a finire](/glossario#costi-a-finire) stimati. Se quella stima è ottimistica, il bilancio espone un utile che non esiste: non è una manipolazione, è il risultato meccanico di un dato non aggiornato. Un controllo di gestione serio è anche il presidio che rende affidabile il bilancio." },

    { type: "figure", slot: "controllo-di-gestione-impresa-edile-1", alt: "Tabellone di cantiere con avanzamento lavori e costi a confronto", caption: "Il confronto preventivo-consuntivo va fatto alla stessa data e sulle stesse voci: altrimenti non è un confronto." },

    { type: "h2", text: "Il numero da cui dipende tutto: il costo orario pieno", id: "costo-orario" },
    { type: "p", text: "Se un solo numero merita attenzione prima di tutti gli altri, è il [costo orario pieno](/guide/costo-del-lavoro-impresa-edile) della manodopera. È il moltiplicatore che entra in ogni preventivo e in ogni consuntivo: se è sbagliato del 15%, tutto il sistema restituisce numeri sbagliati del 15%, per quanto sofisticato sia il resto." },
    { type: "p", text: "Il calcolo ha due lati. Al numeratore va il costo annuo completo: retribuzione lorda, contributi INPS e INAIL, contribuzione alla [Cassa Edile](/guide/cassa-edile-come-funziona), TFR, tredicesima e quattordicesima, ferie, permessi, festività, malattia media, formazione obbligatoria, dispositivi di protezione. Al denominatore vanno le ore realmente lavorabili in cantiere, non quelle teoriche del contratto." },
    { type: "table", headers: ["Voce", "Effetto sul calcolo", "Errore tipico"], rows: [
      ["Retribuzione lorda", "Base di partenza", "Fermarsi qui e usare la paga oraria come costo"],
      ["Contributi, INAIL, Cassa Edile", "Incremento rilevante sul lordo", "Usare una percentuale forfettaria mai verificata"],
      ["TFR, mensilità aggiuntive", "Incremento ulteriore", "Considerarli costo di fine anno anziché costo orario"],
      ["Ferie, permessi, festività, malattia", "Riducono il denominatore", "Dividere per le ore teoriche di contratto"],
      ["Formazione e sicurezza obbligatorie", "Riducono il denominatore", "Trattarle come spesa generale, non come ore non produttive"],
      ["Improduttività di cantiere (spostamenti, attese)", "Riduce ulteriormente il denominatore", "Nasconderla in una percentuale generica di spese generali"],
    ] },
    { type: "p", text: "Il riferimento oggettivo per la verifica esiste: le tabelle del costo medio orario del lavoro per i dipendenti delle imprese edili, pubblicate periodicamente con decreto ministeriale su base provinciale e per qualifica. Sono la base che le stazioni appaltanti usano per valutare la congruità delle offerte, ed è ragionevole che sia anche la base dei preventivi privati." },
    { type: "p", text: "Nella pratica il rapporto tra costo orario pieno e paga oraria base si colloca attorno a una volta e mezza. Un'impresa che preventiva sulla paga base parte con un margine teorico che si dissolve in cantiere, e non capirà mai perché: i cantieri sembrano andare bene e l'esercizio chiude in pareggio." },

    { type: "h2", text: "Il secondo numero: il costo orario dei mezzi propri", id: "costo-mezzi" },
    { type: "p", text: "Un escavatore di proprietà non è gratis. Ha un costo orario che comprende la quota di ammortamento, la manutenzione ordinaria e straordinaria, l'assicurazione, il bollo, il carburante e — voce sempre dimenticata — il costo del fermo macchina, cioè le ore in cui il mezzo è a libro paga dell'impresa senza produrre." },
    { type: "p", text: "Se questo costo non viene ribaltato sulle commesse che usano il mezzo, succedono due cose insieme: il cantiere che lo usa appare più redditizio di quanto sia, e tutti gli altri appaiono meno redditizi, perché il costo resta nelle spese generali ripartite su tutti. Il risultato è un sistema che indirizza le decisioni commerciali nella direzione sbagliata." },
    { type: "p", text: "Il metodo è semplice: costo annuo complessivo del mezzo diviso ore di impiego previste, con una tariffa interna che viene addebitata alla commessa a fronte di un rapportino di utilizzo. Non serve un software complesso; serve la disciplina di far compilare il rapportino." },

    { type: "h2", text: "Come si costruisce il sistema, in cinque passi", id: "come-si-costruisce" },
    { type: "ol", items: [
      "Definire un piano dei conti di commessa con voci confrontabili tra preventivo e consuntivo: se il preventivo ha dieci voci e la contabilità ne ha quaranta diverse, il confronto non è possibile e il sistema muore al secondo mese",
      "Calcolare il costo orario pieno per qualifica e il costo orario dei mezzi propri, e aggiornarli almeno una volta l'anno dopo il rinnovo contrattuale",
      "Attribuire ogni costo a una commessa al momento della registrazione: fattura fornitore, rapportino ore, nolo, subappalto. Un costo attribuito a fine mese \"a memoria\" è un costo attribuito male",
      "Rideterminare mensilmente i costi a finire con il responsabile di cantiere, e da lì ricalcolare la percentuale di avanzamento e il margine maturato",
      "Produrre un report mensile con margine per commessa, scostamento rispetto al preventivo e cassa prospettica, e discuterlo in una riunione fissa di trenta minuti",
    ] },
    { type: "p", text: "Il quinto passo è quello che fa la differenza tra un sistema vivo e un file che nessuno apre. Un report che non viene discusso non produce decisioni; una riunione mensile breve, con lo stesso ordine del giorno e le stesse tre domande — quale commessa sta scendendo, perché, cosa facciamo — produce cambiamenti misurabili nel giro di due trimestri." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Codice civile", ref: "Art. 2086, comma 2", principle: "L'imprenditore che opera in forma societaria o collettiva ha il dovere di istituire un assetto organizzativo, amministrativo e contabile adeguato alla natura e alle dimensioni dell'impresa, anche in funzione della rilevazione tempestiva della crisi.", impact: "In edilizia un assetto adeguato passa necessariamente dal controllo per commessa: senza margine di cantiere non esiste rilevazione tempestiva." },
      { court: "Principi contabili nazionali", ref: "OIC 23", principle: "La percentuale di completamento si determina con metodi che misurano l'avanzamento dell'opera, tra cui il rapporto tra costi sostenuti e costi totali stimati.", impact: "La qualità del bilancio dipende dalla qualità della stima dei costi a finire: è un dato di controllo di gestione prima che di contabilità." },
      { court: "Riferimento operativo", ref: "Tabelle ministeriali del costo medio orario in edilizia", principle: "Il costo medio orario del lavoro per i dipendenti delle imprese edili è rilevato periodicamente con decreto su base provinciale e per qualifica.", impact: "È il riferimento oggettivo con cui verificare il costo orario usato nei preventivi, prima ancora che nelle gare pubbliche." },
    ] },

    { type: "figure", slot: "controllo-di-gestione-impresa-edile-2", alt: "Report mensile con margine per commessa e scostamenti evidenziati", caption: "Un report che nessuno discute non produce decisioni: la riunione mensile è parte del sistema." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Impresa con ricavi per 4,2 milioni e undici cantieri aperti. Il bilancio dell'anno precedente chiude con un utile di 168.000 euro, il 4% dei ricavi. L'imprenditore è soddisfatto: cresce da tre anni e il risultato è stabile." },
    { type: "p", text: "Introdotto il controllo per commessa, il quadro cambia. Sette cantieri di ristrutturazione chiudono con un margine industriale medio dell'11%. Due cantieri di nuova costruzione chiudono al 2%. Due cantieri con committente pubblico chiudono in perdita per 214.000 euro complessivi, per una combinazione di costo orario preventivato sulla paga base, varianti eseguite e mai formalizzate e mezzi propri non ribaltati." },
    { type: "p", text: "La decisione che ne segue non è tagliare i costi generali, che era l'ipotesi iniziale. È rifare il listino sul costo orario reale, introdurre una procedura di formalizzazione scritta delle varianti prima dell'esecuzione, e valutare con criteri diversi la partecipazione alle gare pubbliche. L'anno successivo, a parità di ricavi, il margine complessivo sale di oltre due punti percentuali — non per aver risparmiato, ma per aver smesso di vendere sotto costo senza saperlo." },
    { type: "note", text: "L'errore da non fare: partire da un software. Un gestionale installato su un'impresa che non ha ancora definito il costo orario pieno e il piano dei conti di commessa produce report precisi su dati sbagliati. Prima si definiscono i numeri e le regole di attribuzione, poi si sceglie lo strumento. Lo scenario descritto è illustrativo: i valori dipendono dal mix di lavorazioni di ciascuna impresa." },

    { type: "timeline", title: "Il ciclo mensile del controllo di commessa", steps: [
      { when: "Entro il giorno 5", label: "Chiusura dei costi del mese precedente", detail: "Fatture fornitori, rapportini ore, noli e subappalti attribuiti alla commessa." },
      { when: "Entro il giorno 10", label: "Aggiornamento dei costi a finire", detail: "Con il responsabile di cantiere, commessa per commessa. È il passaggio che nessuno vuole fare e che regge tutto il sistema." },
      { when: "Entro il giorno 12", label: "Calcolo di avanzamento e margine maturato", detail: "Confronto con il preventivo di commessa alla stessa data." },
      { when: "Entro il giorno 15", label: "Report e riunione di trenta minuti", detail: "Tre domande: quale commessa scende, perché, cosa facciamo entro il mese." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Da quale dimensione serve un controllo di gestione in edilizia?", a: "Il criterio non è il fatturato ma il numero di commesse contemporanee. Con un solo cantiere alla volta l'imprenditore ha il controllo in testa. Da tre o quattro cantieri simultanei quel controllo si perde, e da lì in avanti il margine complessivo diventa la somma di risultati che nessuno ha misurato singolarmente." },
      { q: "Quanto costa mettere in piedi un sistema di controllo per commessa?", a: "L'investimento iniziale è soprattutto di tempo: definizione del piano dei conti di commessa, calcolo dei costi orari, impostazione del flusso di rilevazione. Il costo ricorrente dipende da chi produce il report. La domanda utile è un'altra: quanto costa non sapere quale cantiere sta perdendo." },
      { q: "Serve un software gestionale dedicato?", a: "Non all'inizio. Un'impresa con meno di dieci commesse contemporanee può partire con un foglio di calcolo ben strutturato, purché i costi vengano attribuiti alla commessa già in fase di registrazione contabile. Il software diventa necessario quando il volume dei documenti rende ingestibile la rilevazione manuale." },
      { q: "Ogni quanto va aggiornato il margine di commessa?", a: "Mensilmente. Trimestralmente si scopre il problema quando il cantiere è già oltre metà avanzamento e i margini di intervento sono ridotti. Il valore del controllo di gestione sta nella tempestività: un dato preciso ma tardivo vale meno di un dato approssimato ma disponibile subito." },
      { q: "Come si trattano i costi generali di struttura?", a: "Vanno ribaltati sulle commesse con un driver dichiarato e stabile — ore di manodopera, valore della commessa, giorni di cantiere — per arrivare al margine netto. È però il margine industriale, prima del ribaltamento, il dato su cui si prendono le decisioni operative: è quello che il capocantiere può influenzare." },
      { q: "Il controllo di gestione serve anche per la banca?", a: "Sì, ed è uno degli usi più immediati. Un'impresa che presenta margine per commessa, avanzamento e cassa prospettica documentati ottiene condizioni diverse rispetto a chi porta solo l'ultimo bilancio depositato. Il rating bancario premia la prevedibilità, e la prevedibilità si dimostra con i numeri di gestione." },
      { q: "Che rapporto c'è tra controllo di gestione e assetti adeguati?", a: "Diretto. L'art. 2086 del codice civile impone assetti organizzativi, amministrativi e contabili adeguati anche in funzione della rilevazione tempestiva della crisi. In un'impresa che lavora per commessa, un assetto privo di margine di cantiere e di cassa prospettica difficilmente può dirsi adeguato." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se vuoi sapere quale dei tuoi cantieri sta guadagnando davvero, il punto di partenza è più semplice di quanto sembri: l'elenco delle commesse aperte con importo contrattuale e avanzamento stimato, gli ultimi due bilanci e un mese di rapportini ore. Scrivici dalla pagina contatti: ricostruiamo il margine di due o tre commesse rappresentative e ti mostriamo la distanza tra il preventivo e quello che sta succedendo. Per i singoli tasselli, leggi le guide sul [margine di commessa](/guide/margine-di-commessa-edilizia), sul preventivo e sui lavori in corso." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026." },
  ],
};
