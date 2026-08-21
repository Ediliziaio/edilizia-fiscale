import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "rating-bancario-centrale-rischi-edilizia",
  title: "Rating bancario e Centrale dei Rischi: come la banca legge un'impresa edile",
  excerpt:
    "Il bilancio pesa meno di quanto si creda: contano l'andamentale — utilizzo degli affidamenti, sconfini, insoluti — e la capacità di spiegare voci che in edilizia una banca legge male. Cosa si può migliorare e in quanto tempo.",
  category: "Controllo",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-trust-dark",
  keywords: [
    "rating bancario impresa edile",
    "centrale rischi banca d'italia soglia",
    "come migliorare il rating aziendale",
    "sconfinamento centrale rischi conseguenze",
    "dossier bancario impresa costruzioni",
    "posizione finanziaria netta edilizia",
  ],
  intro:
    "Il giudizio della banca su un'impresa nasce da tre fonti: i dati di bilancio, i dati andamentali su come l'impresa usa il credito, e le informazioni qualitative che l'impresa fornisce. In edilizia la prima fonte è quella che comunica peggio, perché lavori in corso, invenduto e riserve sono voci che un modello standard legge male. La terza è l'unica su cui si può agire subito.",
};

export const seo = {
  seoTitle: "Rating Bancario e Centrale Rischi per l'Impresa Edile",
  metaDescription:
    "Come la banca legge un bilancio edile, cosa pesa davvero nell'andamentale e quali interventi migliorano la valutazione in pochi mesi.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Le tre componenti del giudizio: dati di bilancio, dati andamentali (comportamento sui conti e sugli affidamenti), informazioni qualitative fornite dall'impresa. La Centrale dei Rischi: sistema informativo della Banca d'Italia che raccoglie le esposizioni verso il sistema bancario oltre la soglia di censimento; le sofferenze sono segnalate a prescindere dall'importo. Cosa pesa di più nel breve: l'andamentale. Utilizzo medio degli affidamenti, sconfinamenti anche di un giorno, insoluti su effetti presentati. Il vantaggio specifico dell'edilizia: le voci che il modello legge male si possono spiegare, ma solo se hai i documenti." },

    { type: "h2", text: "Le tre fonti del giudizio", id: "tre-fonti" },
    { type: "p", text: "Quando un'impresa chiede un affidamento, la banca non guarda una cosa sola. Costruisce un giudizio combinando informazioni di natura diversa, e conoscerne il peso relativo serve a capire su cosa si può intervenire e con quali tempi." },
    { type: "table", headers: ["Fonte", "Cosa contiene", "Con che velocità si può migliorare"], rows: [
      ["Dati di bilancio", "Struttura patrimoniale, redditività, indebitamento, indici", "Lenta: serve almeno un esercizio, e pesa la serie storica"],
      ["Dati andamentali", "Utilizzo degli affidamenti, sconfini, insoluti, movimentazione dei conti", "Rapida: si muove in pochi mesi di comportamento diverso"],
      ["Centrale dei Rischi", "Esposizione verso l'intero sistema bancario, non solo verso quella banca", "Media: dipende dalle segnalazioni mensili"],
      ["Informazioni qualitative", "Portafoglio ordini, budget, cassa prospettica, governance, settore", "Immediata: dipende solo da cosa consegni"],
    ] },
    { type: "p", text: "L'ultima riga è quella su cui insistiamo di più, perché è l'unica interamente nelle mani dell'impresa e perché in edilizia vale più che altrove. Un'impresa che consegna solo l'ultimo bilancio depositato lascia che il modello faccia tutto il lavoro; una che consegna portafoglio ordini, margine per commessa e cassa prospettica dà al gestore gli elementi per motivare una valutazione diversa." },
    { type: "p", text: "La seconda riga è quella che cambia più in fretta. Il comportamento sui conti — quanto usi mediamente le linee, se sconfini, se hai insoluti — si aggiorna di continuo e pesa in modo significativo. Un'impresa che corregge quel comportamento vede l'effetto in pochi mesi, molto prima che un bilancio migliore arrivi a essere depositato." },

    { type: "h2", text: "La Centrale dei Rischi: cosa vede davvero", id: "centrale-rischi" },
    { type: "p", text: "La Centrale dei Rischi è il sistema informativo gestito dalla Banca d'Italia in cui gli intermediari segnalano mensilmente le esposizioni della clientela. La funzione è dare a ciascun intermediario una visione dell'esposizione complessiva del cliente verso l'intero sistema, non solo verso di sé." },
    { type: "p", text: "Le segnalazioni avvengono al superamento di una soglia di censimento e riguardano i crediti per cassa e di firma. Le posizioni classificate a sofferenza vengono segnalate a prescindere dall'importo: è la differenza sostanziale tra un ritardo e una classificazione negativa." },
    { type: "p", text: "Tre elementi vanno conosciuti perché producono effetti sproporzionati rispetto alla loro entità. Il primo sono gli sconfinamenti: superare il fido accordato, anche per un giorno e anche per un importo modesto, viene registrato e letto come segnale di tensione. Il secondo sono gli insoluti sugli effetti presentati allo sconto: incidono sulla percezione della qualità del portafoglio clienti. Il terzo è l'utilizzo medio delle linee: un'impresa costantemente al massimo dell'accordato comunica che quelle linee non sono un margine ma una necessità." },
    { type: "p", text: "L'impresa ha diritto di accedere ai dati che la riguardano, e farlo periodicamente è un'abitudine sana. Capita di trovare segnalazioni errate — importi non aggiornati, posizioni chiuse ancora aperte — che nessuno correggerà se non le si segnala." },

    { type: "figure", slot: "rating-bancario-centrale-rischi-edilizia-1", alt: "Estratti conto e prospetto degli affidamenti bancari con evidenza degli utilizzi", caption: "L'andamentale si muove in pochi mesi: è la leva più rapida che l'impresa ha." },

    { type: "h2", text: "Perché un bilancio edile comunica male", id: "bilancio-edile" },
    { type: "p", text: "Qui sta la specificità del settore, ed è la parte che nessun modello standard gestisce bene. Un'impresa che lavora per commessa ha voci di bilancio che, lette senza contesto, portano a conclusioni sbagliate." },
    { type: "ul", items: [
      "Lavori in corso su ordinazione elevati: il modello li legge come attivo circolante di dubbia realizzabilità, mentre rappresentano opere realizzate e non ancora fatturate",
      "Rimanenze immobiliari importanti: in un'iniziativa di sviluppo sono normali, ma un modello generalista le legge come magazzino invenduto",
      "Risultati a scalini: nelle imprese di sviluppo il margine emerge alla vendita, e gli esercizi intermedi mostrano risultati prossimi allo zero",
      "Debito a breve elevato: finanzia il circolante di commessa, ma appare come squilibrio della struttura finanziaria",
      "Crediti verso clienti con lunga anzianità: nei lavori pubblici i tempi di incasso sono strutturali, non un problema di qualità del credito",
      "Riserve iscritte e non riconosciute: i costi ci sono, il ricavo no, e il margine appare depresso senza spiegazione",
    ] },
    { type: "p", text: "Nessuna di queste voci è di per sé negativa: sono la fisiologia di un'attività per commessa. Ma il modello non lo sa, e in assenza di spiegazione le tratta come segnali di rischio. È esattamente qui che la quarta fonte — le informazioni qualitative — cambia il risultato." },
    { type: "p", text: "L'errore da evitare è pensare che la banca sia in malafede o incompetente. Il gestore, nella maggior parte dei casi, sarebbe felice di avere gli elementi per motivare una valutazione migliore: quello che gli manca sono i documenti. Un'impresa che glieli fornisce non sta forzando nulla, sta facendo il proprio interesse fornendo informazione." },

    { type: "caselaw", title: "Riferimenti utili", items: [
      { court: "Banca d'Italia", ref: "Circolare sulla Centrale dei Rischi", principle: "Gli intermediari segnalano mensilmente le posizioni di rischio della clientela al superamento della soglia di censimento; le posizioni classificate a sofferenza sono segnalate indipendentemente dall'importo.", impact: "Una sofferenza non ha soglia. Uno sconfinamento di pochi giorni, invece, incide sull'andamentale senza essere una sofferenza." },
      { court: "Codice civile", ref: "Art. 2086, comma 2", principle: "L'imprenditore deve istituire assetti organizzativi, amministrativi e contabili adeguati, anche in funzione della rilevazione tempestiva della crisi.", impact: "Gli stessi documenti che dimostrano assetti adeguati — cassa prospettica, budget — sono quelli che migliorano il dossier bancario." },
      { court: "Prassi di valutazione del merito creditizio", principle: "La valutazione considera dati di bilancio, informazioni andamentali interne ed esterne e informazioni qualitative fornite dal cliente, con pesi differenziati per segmento e dimensione.", impact: "L'andamentale pesa e si muove in fretta: è la leva su cui un'impresa vede risultati nel giro di mesi." },
    ] },

    { type: "h2", text: "Cosa si può migliorare, e in quanto tempo", id: "migliorare" },
    { type: "p", text: "Conviene distinguere gli interventi per orizzonte temporale, perché la domanda che ci fanno è quasi sempre la stessa: quanto ci vuole?" },
    { type: "ol", items: [
      "Immediato — consegnare il dossier: portafoglio ordini con margine per commessa, cassa prospettica a tredici settimane, budget e forecast, nota esplicativa sulle voci tipiche del settore. Non serve aspettare niente: dipende solo da cosa produci",
      "Pochi giorni — accedere ai propri dati di Centrale dei Rischi e verificare che non ci siano segnalazioni errate o posizioni chiuse ancora aperte",
      "Da subito, con effetto in mesi — eliminare gli sconfinamenti: presidiare i saldi giornalieri e chiedere per tempo un aumento temporaneo invece di sconfinare",
      "Da subito, con effetto in mesi — ridurre l'utilizzo medio degli affidamenti, anche spostando parte del fabbisogno su fonti a medio termine coerenti con il circolante permanente",
      "Un esercizio — migliorare la struttura: patrimonializzazione, allungamento delle fonti, riduzione della dipendenza dal breve",
      "Due o tre esercizi — la serie storica di bilanci ordinati e coerenti, che è ciò su cui il modello poggia",
    ] },
    { type: "p", text: "Il terzo punto merita un'insistenza particolare, perché è quello con il rapporto più sproporzionato tra sforzo e beneficio. Uno sconfinamento di duemila euro per due giorni non ha alcun significato economico, ma viene registrato e letto come indisciplina finanziaria. Chiedere in anticipo un aumento temporaneo dell'accordato, anche solo per una settimana, costa una telefonata e produce un dato completamente diverso." },
    { type: "p", text: "Il quarto è quello che collega questa guida a quella sui flussi di cassa: un'impresa che finanzia con lo scoperto di conto una quota permanente di circolante avrà sempre un utilizzo medio elevato, qualunque sia la sua disciplina. La soluzione non è comportamentale ma strutturale — consolidare quella quota su una fonte a medio termine." },

    { type: "h2", text: "Il dossier che si consegna alla banca", id: "dossier" },
    { type: "p", text: "Vale la pena essere concreti su cosa contenga, perché il termine dossier evoca qualcosa di complicato mentre è materiale che un'impresa organizzata già produce per sé." },
    { type: "table", headers: ["Documento", "Cosa comunica", "Da dove viene"], rows: [
      ["Portafoglio ordini con margine atteso", "Visibilità sui ricavi futuri e sulla loro redditività", "Controllo di gestione"],
      ["Margine per commessa, storico e in corso", "Che l'impresa sa dove guadagna, non solo quanto", "Report mensile"],
      ["Cassa prospettica a tredici settimane", "Che il fabbisogno è previsto e non subito", "Tesoreria"],
      ["Budget e forecast", "Che esiste una direzione, non solo un consuntivo", "Pianificazione"],
      ["Nota sulle voci di bilancio tipiche", "Perché lavori in corso, invenduto e riserve sono quello che sono", "Bilancio e nota integrativa"],
      ["Situazione contabile infrannuale", "Che i dati non arrivano una volta l'anno", "Contabilità"],
    ] },
    { type: "p", text: "Sono gli stessi documenti che servono a dimostrare l'adeguatezza degli assetti ai sensi dell'art. 2086 del codice civile, e gli stessi che servono a governare l'impresa. Non si producono per la banca: si producono per sé, e si consegnano alla banca perché tanto esistono." },

    { type: "figure", slot: "rating-bancario-centrale-rischi-edilizia-2", alt: "Incontro con il gestore bancario, con report di commessa e cassa prospettica sul tavolo", caption: "Il gestore non è ostile: gli mancano gli elementi per motivare una valutazione diversa." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa con ricavi per 6 milioni, tre banche, affidamenti complessivi per 1,2 milioni utilizzati mediamente all'88%. Nell'ultimo anno ha registrato sette sconfinamenti, tutti di importo modesto e tutti rientrati entro pochi giorni. Il bilancio mostra lavori in corso per 1,9 milioni e un debito a breve elevato." },
    { type: "p", text: "La richiesta di aumento dell'affidamento viene istruita con lentezza e a condizioni peggiorative. Dal punto di vista dell'imprenditore è incomprensibile: l'impresa è in utile, ha portafoglio ordini pieno e non ha mai avuto insoluti. Dal punto di vista del modello, invece, il quadro è quello di un'impresa che usa tutto quello che ha, sconfina con regolarità e presenta un attivo circolante di difficile lettura." },
    { type: "p", text: "Gli interventi partono da quello che si muove subito. Gli sconfinamenti si eliminano con il presidio giornaliero dei saldi e con la richiesta anticipata di elasticità temporanee: nel giro di un trimestre l'andamentale cambia. Il dossier viene costruito con portafoglio ordini, margine per commessa e cassa prospettica, e presentato ai tre istituti nella stessa settimana." },
    { type: "p", text: "L'intervento strutturale è il terzo: la quota di circolante che non torna mai a zero — quella permanente — viene consolidata su una fonte a medio termine, riducendo l'utilizzo medio delle linee a breve. È l'operazione che richiede più tempo e negoziazione, ed è quella che produce l'effetto duraturo. Le prime due la rendono possibile." },
    { type: "note", text: "L'errore da non fare: presentarsi in banca quando serve. Le condizioni si negoziano quando i numeri sono buoni e non serve nulla; quando la richiesta nasce da un'urgenza, il potere contrattuale è già evaporato. Lo scenario è illustrativo: pesi e criteri di valutazione variano per intermediario." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Cosa pesa di più nel giudizio della banca?", a: "Dipende dal segmento, ma i dati andamentali — utilizzo degli affidamenti, sconfini, insoluti — pesano molto e si muovono in fretta. I dati di bilancio contano ma riflettono il passato; le informazioni qualitative dipendono interamente da cosa l'impresa consegna." },
      { q: "Uno sconfinamento di pochi giorni fa danno?", a: "Sì, più di quanto l'importo suggerisca: viene registrato e letto come indisciplina finanziaria. Chiedere in anticipo un'elasticità temporanea dell'accordato costa una telefonata e produce un dato completamente diverso." },
      { q: "Posso vedere i miei dati di Centrale dei Rischi?", a: "Sì, l'impresa ha diritto di accedere alle informazioni che la riguardano. È un controllo che conviene fare periodicamente: capita di trovare segnalazioni errate o posizioni chiuse ancora aperte, che nessuno correggerà se non vengono segnalate." },
      { q: "Perché la banca legge male il mio bilancio?", a: "Perché lavori in corso, rimanenze immobiliari, riserve e debito a breve sono voci fisiologiche in un'attività per commessa ma vengono lette da un modello generalista come segnali di rischio. La soluzione non è cambiare il bilancio: è spiegarlo con i documenti di gestione." },
      { q: "Cosa metto nel dossier per la banca?", a: "Portafoglio ordini con margine atteso, margine per commessa storico e in corso, cassa prospettica a tredici settimane, budget e forecast, situazione contabile infrannuale e una nota che spieghi le voci tipiche del settore. Sono gli stessi documenti che servono a governare l'impresa." },
      { q: "In quanto tempo si migliora il rating?", a: "L'andamentale si muove in pochi mesi con un comportamento diverso sui conti. La struttura di bilancio richiede almeno un esercizio, e la serie storica due o tre. Il dossier qualitativo, invece, ha effetto immediato: dipende solo da cosa consegni." },
      { q: "Conviene concentrare tutto su una banca?", a: "La diversificazione riduce il rischio di dipendenza, ma frammentare troppo rende ciascun rapporto marginale e poco negoziabile. In edilizia, dove servono anche plafond per le garanzie, l'assetto va disegnato considerando insieme cassa, fidi e capacità fideiussoria." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se una richiesta di affidamento è andata peggio di quanto ti aspettassi, quasi sempre la spiegazione sta nell'andamentale o nell'assenza di dossier — non nel bilancio. Mandaci gli estratti degli affidamenti, i dati di Centrale dei Rischi e l'ultimo bilancio dalla pagina contatti: ricostruiamo come ti legge il sistema e prepariamo il dossier da presentare. Per il contesto leggi le guide su flussi di cassa, garanzie negli appalti e [assetti adeguati](/guide/assetti-adeguati-impresa-edile)." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026: soglie e criteri di segnalazione vanno verificati sulla disciplina vigente." },
  ],
};
