import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "preventivo-di-commessa-edilizia",
  title: "Preventivo di commessa: costruire un prezzo che regge fino alla consegna",
  excerpt:
    "Dal computo metrico al prezzo di vendita: analisi prezzi con costi reali, incidenza della struttura, contingenza, oneri di sicurezza e revisione prezzi. Perché il margine di un cantiere si decide prima di aprirlo.",
  category: "Controllo",
  date: "Agosto 2026",
  readTime: "11 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust-dark to-trust",
  keywords: [
    "preventivo di commessa edilizia",
    "analisi prezzi edilizia",
    "come si fa un preventivo impresa edile",
    "listino prezzi impresa costruzioni",
    "revisione prezzi appalto",
    "incidenza spese generali edilizia",
  ],
  intro:
    "Il margine di un cantiere si decide prima di aprirlo. Un preventivo costruito su costi orari reali, con una quota esplicita di struttura, una contingenza dichiarata e clausole di revisione dei prezzi, regge fino alla consegna. Un preventivo costruito su prezzi di listino aggiornati a memoria produce un margine teorico che il cantiere non potrà mai realizzare.",
};

export const seo = {
  seoTitle: "Preventivo di Commessa: un Prezzo che Regge",
  metaDescription:
    "Analisi prezzi con costi reali, incidenza della struttura, contingenza e revisione prezzi: come si costruisce un preventivo edile che tiene.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — La catena: computo metrico, analisi prezzi con costi elementari reali, incidenza dei costi indiretti, quota di struttura, contingenza, utile atteso. I costi elementari: costo orario pieno della manodopera, costo orario dei mezzi propri, prezzi materiali con validità dichiarata dal fornitore. Le protezioni contrattuali: validità limitata dell'offerta, clausola di revisione prezzi, esclusioni esplicite, procedura scritta per le varianti. La regola: la contingenza si dichiara, non si nasconde nel prezzo." },

    { type: "h2", text: "Perché i preventivi edili si rompono", id: "perche" },
    { type: "p", text: "Un preventivo edile viene formulato mesi prima dell'inizio dei lavori e vincola l'impresa per tutta la durata del cantiere, che può essere di anni. In quel periodo cambiano i prezzi dei materiali, il costo del lavoro dopo un rinnovo contrattuale, la disponibilità dei subappaltatori e spesso il progetto stesso. Un prezzo formulato senza tenere conto di questa esposizione non è un prezzo: è una scommessa." },
    { type: "p", text: "A questo si aggiunge un problema strutturale del settore: la pressione competitiva spinge a costruire il preventivo partendo dal prezzo che il mercato accetta e a giustificarlo a ritroso, invece di partire dai costi e verificare se il prezzo che ne risulta è competitivo. Il primo metodo produce commesse acquisite e margine perso; il secondo produce meno commesse e un'impresa che sta in piedi." },
    { type: "p", text: "La buona notizia è che il preventivo è l'unico momento in cui l'impresa ha pieno controllo. Una volta firmato il contratto, la leva si riduce alle varianti e alla rinegoziazione; prima della firma la leva è totale." },

    { type: "h2", text: "La catena del prezzo, passo per passo", id: "catena" },
    { type: "ol", items: [
      "Computo metrico: quantità per ciascuna lavorazione, verificate sul progetto e non copiate dal capitolato del committente senza controllo",
      "Analisi prezzi: per ogni lavorazione, costo dei materiali, ore di manodopera per qualifica, ore dei mezzi, quota di noli e trasporti",
      "Costi elementari reali: costo orario pieno per qualifica, costo orario dei mezzi propri, prezzi materiali con validità dichiarata dal fornitore",
      "Costi indiretti di cantiere: allestimento e smobilizzo, oneri di sicurezza, direzione tecnica di cantiere, utenze, sorveglianza",
      "Quota di struttura: percentuale ribaltata con il driver adottato in azienda, coerente con quella usata nel controllo di gestione",
      "Contingenza: percentuale esplicita per rischi identificati, dichiarata internamente e non confusa con l'utile",
      "Utile atteso: la remunerazione del capitale e del rischio d'impresa, che è ciò che resta dopo tutto il resto",
    ] },
    { type: "p", text: "Il punto sei merita una precisazione. La contingenza non è un margine di sicurezza generico ma la copertura di rischi identificati: sondaggi geologici incerti, interferenze impiantistiche non rilevate, lavorazioni su edifici esistenti con struttura non nota. Va quantificata rischio per rischio e discussa, non applicata come percentuale uguale su tutti i lavori." },
    { type: "p", text: "Confondere contingenza e utile è l'errore che rende impossibile capire come è andato un cantiere. Se la contingenza non viene consumata, il risultato positivo è un rischio non manifestatosi, non una migliore esecuzione; se viene consumata, il cantiere ha comunque prodotto l'utile atteso. Tenerle separate consente di leggere correttamente il consuntivo." },

    { type: "figure", slot: "preventivo-di-commessa-edilizia-1", alt: "Computo metrico e analisi prezzi su scrivania con calcolatrice", caption: "L'analisi prezzi parte dai costi elementari reali dell'impresa, non dal prezziario regionale." },

    { type: "h2", text: "Prezziari regionali: utili come riferimento, pericolosi come base", id: "prezziari" },
    { type: "p", text: "I prezziari regionali delle opere pubbliche sono uno strumento prezioso per il confronto e per la partecipazione alle gare, ma non descrivono la struttura di costo della singola impresa. Un'impresa con squadre proprie, mezzi di proprietà e alta specializzazione su una lavorazione ha costi diversi da un'impresa che subappalta la stessa lavorazione." },
    { type: "p", text: "Usare il prezziario come base del preventivo privato significa adottare la struttura di costo di un'impresa media teorica. Se la propria è migliore, si lascia margine sul tavolo; se è peggiore, si acquisisce lavoro sotto costo senza saperlo. In entrambi i casi il preventivo non dice nulla su di sé." },
    { type: "p", text: "Il modo corretto di usarlo è come termine di confronto: costruire l'analisi prezzi con i propri costi elementari e poi confrontare il risultato con il prezziario, per capire dove si è più efficienti e dove meno. Le lavorazioni in cui il proprio costo è sistematicamente superiore al prezziario sono candidate al subappalto o a una revisione organizzativa." },

    { type: "h2", text: "Le protezioni contrattuali", id: "protezioni" },
    { type: "table", headers: ["Rischio", "Protezione contrattuale", "Cosa scrivere"], rows: [
      ["Aumento prezzi materiali", "Clausola di revisione prezzi", "Indice di riferimento, soglia di attivazione, periodicità della revisione"],
      ["Offerta accettata a distanza di mesi", "Validità limitata dell'offerta", "Termine di validità espresso in giorni, oltre il quale il prezzo va riconfermato"],
      ["Lavorazioni non previste", "Elenco delle esclusioni", "Esplicito e dettagliato: ciò che non è escritto si presume compreso"],
      ["Varianti richieste a voce", "Procedura scritta per le varianti", "Nessuna lavorazione extra senza ordine scritto e prezzo concordato prima"],
      ["Sospensioni imputabili al committente", "Riconoscimento dei maggiori oneri", "Costo giornaliero di fermo cantiere quantificato in contratto"],
      ["Ritardi nei pagamenti", "Interessi e facoltà di sospensione", "Richiamo al D.lgs. 231/2002 e condizioni della sospensione"],
    ] },
    { type: "p", text: "La quarta riga è quella che nella pratica salva più margine di tutte le altre messe insieme. Le varianti eseguite su richiesta verbale della direzione lavori sono la prima causa di erosione del margine nei cantieri privati: il costo è certo, il ricavo è incerto. Una procedura scritta, applicata senza eccezioni fin dal primo giorno, cambia la fisionomia economica del cantiere." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Lavorazione di intonaco su 1.400 metri quadrati. L'analisi prezzi interna considera 0,42 ore di manodopera al metro quadrato, materiali per 4,10 euro al metro quadrato e una quota di nolo ponteggio di 1,80 euro al metro quadrato." },
    { type: "p", text: "Con il costo orario pieno di 29,60 euro, la manodopera pesa 12,43 euro al metro quadrato. Sommati materiali e nolo, il costo diretto è di 18,33 euro. Aggiungendo l'8% di costi indiretti di cantiere si arriva a 19,80 euro; ribaltando il 12% di struttura, a 22,18 euro; con una contingenza del 3% per l'incertezza sullo stato del supporto murario, a 22,85 euro. Applicando un utile atteso del 10%, il prezzo di vendita è di 25,14 euro al metro quadrato." },
    { type: "p", text: "La stessa analisi condotta sulla paga oraria di 21 euro anziché sul costo pieno avrebbe restituito un costo diretto di 14,71 euro e un prezzo di vendita di 20,17 euro: quasi cinque euro in meno al metro quadrato. Su 1.400 metri quadrati sono 6.950 euro di margine che l'impresa avrebbe regalato, convinta di applicare un utile del 10%." },
    { type: "note", text: "L'errore da non fare: aggiornare l'analisi prezzi solo quando cambiano i materiali. Il costo orario della manodopera cambia a ogni rinnovo contrattuale e a ogni variazione del mix di qualifiche; il costo dei mezzi cambia con gli acquisti e le dismissioni. Un'analisi prezzi ferma a due anni fa è un preventivo sbagliato in partenza. Lo scenario è illustrativo." },

    { type: "figure", slot: "preventivo-di-commessa-edilizia-2", alt: "Contratto d'appalto con clausola di revisione prezzi evidenziata", caption: "La procedura scritta per le varianti è la clausola che salva più margine di tutte." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Posso usare il prezziario regionale per i lavori privati?", a: "Come riferimento sì, come base del prezzo no. Il prezziario descrive un'impresa media teorica, non la struttura di costo della tua. Usalo per confrontare il risultato della tua analisi prezzi e capire dove sei più efficiente e dove no." },
      { q: "Quanta contingenza va messa in un preventivo edile?", a: "Non esiste una percentuale valida sempre: va quantificata rischio per rischio, in funzione dell'incertezza specifica di quel cantiere. Un intervento su edificio esistente con struttura non nota merita una contingenza sensibilmente maggiore di una nuova costruzione su progetto definitivo." },
      { q: "Come funziona la clausola di revisione prezzi?", a: "Collega la variazione del corrispettivo alla variazione di un indice di riferimento, con una soglia oltre la quale si attiva e una periodicità di applicazione. Va scritta con precisione: indice, soglia, periodicità e modalità di calcolo. Una clausola generica non è azionabile." },
      { q: "Quanto deve durare la validità di un'offerta?", a: "Il termine va commisurato alla volatilità dei costi principali di quella commessa. In periodi di forti oscillazioni dei prezzi dei materiali, validità lunghe senza clausola di revisione trasferiscono all'impresa un rischio che il margine non copre." },
      { q: "Come gestisco le varianti richieste a voce in cantiere?", a: "Con una procedura scritta applicata senza eccezioni: nessuna lavorazione extra senza ordine scritto e prezzo concordato prima dell'esecuzione. È una regola scomoda nei primi giorni di cantiere e diventa normale dopo due settimane, e vale più di qualunque altra clausola." },
      { q: "Ogni quanto va aggiornata l'analisi prezzi?", a: "I costi elementari almeno una volta l'anno e comunque dopo ogni rinnovo contrattuale del CCNL o variazione significativa del parco mezzi. I prezzi dei materiali con la frequenza con cui li aggiornano i fornitori, chiedendo sempre la validità dichiarata dell'offerta." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Prendi l'ultimo preventivo importante che hai formulato e mandacelo insieme al costo del lavoro dell'ultimo esercizio: verifichiamo su quali costi elementari è costruito e ricalcoliamo il prezzo con i tuoi numeri reali. È l'esercizio che, nella nostra esperienza, produce la reazione più forte. Per il quadro completo leggi le guide su costo del lavoro edile e margine di commessa." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026." },
  ],
};
