import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "cassa-edile-come-funziona",
  title: "Cassa Edile: come funziona e quanto pesa sul costo del lavoro",
  excerpt:
    "Accantonamenti per ferie e gratifica, Anzianità Professionale Edile, denuncia mensile, trasferte tra province. È la voce che rende il costo orario dell'edilizia diverso da tutti gli altri settori — e quella che quasi nessun preventivo calcola bene.",
  category: "Lavoro",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust to-brand-dark",
  keywords: [
    "cassa edile come funziona",
    "accantonamento cassa edile ferie gratifica",
    "ape anzianità professionale edile",
    "denuncia mensile mut cassa edile",
    "contributi cassa edile percentuali",
    "trasferta cassa edile altra provincia",
  ],
  intro:
    "La Cassa Edile è un ente bilaterale territoriale che gestisce, per conto delle imprese, prestazioni che in altri settori restano in busta paga: ferie, gratifica natalizia, anzianità professionale, assistenza sanitaria, formazione. Per l'impresa significa un flusso di contribuzione mensile e un accantonamento che esce dalla cassa prima di diventare costo del lavoro nel senso ordinario.",
};

export const seo = {
  seoTitle: "Cassa Edile: Come Funziona e Quanto Pesa",
  metaDescription:
    "Accantonamenti per ferie e gratifica, APE, denuncia mensile e trasferte: la voce che rende il costo orario dell'edilizia diverso da ogni altro settore.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Cos'è: ente bilaterale territoriale previsto dal contratto collettivo dell'edilizia, costituito da associazioni datoriali e sindacali. L'iscrizione: obbligatoria per le imprese che applicano il CCNL edile con operai in forza. L'adempimento: denuncia mensile telematica con le ore e le retribuzioni di ciascun operaio. Le due componenti: contribuzione vera e propria (che è costo) e accantonamento per ferie e gratifica (che è anticipazione di somme spettanti al lavoratore). Perché conta per i numeri: entra nel costo orario pieno, nel DURC e nella verifica di congruità della manodopera." },

    { type: "h2", text: "Perché in edilizia esiste un ente che in altri settori non c'è", id: "perche-esiste" },
    { type: "p", text: "Il settore delle costruzioni ha una caratteristica che nessun altro comparto industriale condivide nella stessa misura: gli operai cambiano impresa spesso, seguono i cantieri, lavorano per più datori nell'arco dello stesso anno. In un sistema ordinario questo produrrebbe un problema pratico: ferie, tredicesima e anzianità maturano presso un'impresa e vengono godute presso un'altra, o non vengono godute affatto." },
    { type: "p", text: "Le Casse Edili nascono per risolverlo. Sono enti bilaterali territoriali, costituiti dalle associazioni dei costruttori e dai sindacati, previsti dalla contrattazione collettiva. Ogni impresa versa mensilmente in base alle ore lavorate dai propri operai; la Cassa accumula e poi eroga direttamente al lavoratore, indipendentemente da quale impresa lo occupi in quel momento." },
    { type: "p", text: "Da qui discende tutto il resto: la denuncia mensile, gli accantonamenti, il ruolo nel DURC, la verifica di congruità. E discende anche il motivo per cui un commercialista abituato ad altri settori sottostima sistematicamente il costo orario di un operaio edile: le voci che qui passano dalla Cassa, altrove non esistono come flusso separato." },

    { type: "figure", slot: "cassa-edile-come-funziona-1", alt: "Squadra di operai edili in cantiere con attrezzature e ponteggi", caption: "L'operaio segue i cantieri e cambia impresa: la Cassa esiste per rendere portabili i suoi diritti." },

    { type: "h2", text: "Le due componenti che vanno tenute distinte", id: "componenti" },
    { type: "p", text: "Il versamento mensile alla Cassa Edile non è una cosa sola. Contiene due elementi con natura completamente diversa, e confonderli è l'errore contabile più comune." },
    { type: "table", headers: ["Componente", "Natura", "Effetto per l'impresa"], rows: [
      ["Accantonamento ferie, permessi e gratifica natalizia", "Somme che spettano al lavoratore, anticipate alla Cassa che gliele erogherà", "Uscita di cassa mensile a fronte di un debito verso il dipendente che si estingue"],
      ["Contribuzione per prestazioni (APE, assistenza, formazione)", "Contributo vero e proprio, in parte a carico impresa e in parte del lavoratore", "Costo del lavoro dell'esercizio"],
      ["Contributo per il funzionamento dell'ente", "Costo di sistema previsto dalla contrattazione", "Costo del lavoro dell'esercizio"],
      ["Quota per la sicurezza e la formazione (CTP e organismi paritetici)", "Contributo destinato agli enti formativi territoriali", "Costo del lavoro dell'esercizio, con obblighi formativi collegati"],
    ] },
    { type: "p", text: "La prima riga è quella che genera più fraintendimenti in sede di preventivo. L'accantonamento non è un costo aggiuntivo rispetto alla retribuzione: è una parte della retribuzione che invece di transitare in busta paga transita dalla Cassa. Chi lo somma alla retribuzione lorda come se fosse un onere ulteriore sovrastima il costo; chi lo ignora del tutto lo sottostima, perché quel denaro esce comunque dal conto ogni mese." },
    { type: "p", text: "Il modo corretto di trattarlo nel costo orario è considerare il costo annuo complessivo del lavoratore — comprensivo di quanto transita dalla Cassa — e dividerlo per le ore realmente produttive. È lo stesso metodo che descriviamo nella guida sul costo del lavoro, e la Cassa Edile è precisamente la voce che lo rende diverso da un calcolo fatto in un altro settore." },

    { type: "h2", text: "L'anzianità professionale edile", id: "ape" },
    { type: "p", text: "L'APE è la prestazione più caratteristica del sistema. È un importo che spetta all'operaio in funzione dell'anzianità maturata nel settore — non presso la singola impresa — e viene erogato periodicamente dalla Cassa in base alle ore denunciate nell'arco di riferimento." },
    { type: "p", text: "Per l'impresa è un contributo che si versa in percentuale sull'imponibile e che non ha corrispondenza in busta paga. Per il lavoratore è un riconoscimento della permanenza nel settore che nessun datore singolo potrebbe garantirgli. Per il preventivista è una voce che va nel costo orario e che, se dimenticata, si mangia margine su ogni ora fatturata." },
    { type: "p", text: "Le percentuali di contribuzione — sia dell'APE sia delle altre voci — non sono uniformi sul territorio nazionale: ogni Cassa territoriale ha le proprie aliquote, definite dalla contrattazione integrativa provinciale. È il motivo per cui non ha senso citare un numero unico e per cui il costo orario va calcolato sulla Cassa di riferimento dei propri cantieri, non su una media." },

    { type: "h2", text: "La denuncia mensile e i suoi effetti a catena", id: "denuncia" },
    { type: "p", text: "Ogni mese l'impresa trasmette telematicamente la denuncia con l'elenco degli operai, le ore lavorate, le retribuzioni corrisposte e il cantiere di impiego. Il sistema calcola contribuzione e accantonamenti e genera il flusso di pagamento." },
    { type: "p", text: "Quella denuncia non serve solo a versare. È il dato di partenza di due verifiche che decidono la vita operativa dell'impresa. La prima è il DURC: la Cassa Edile è uno dei tre enti la cui regolarità viene attestata, insieme a INPS e INAIL. La seconda è la congruità dell'incidenza della manodopera prevista dal D.M. 143/2021, che confronta proprio il costo del lavoro denunciato in Cassa con percentuali minime riferite al valore dell'opera." },
    { type: "p", text: "Ne segue una conseguenza operativa che molte imprese scoprono tardi: l'indicazione corretta del cantiere nella denuncia mensile non è un dettaglio amministrativo. È il dato su cui si costruisce la congruità di quel cantiere. Ore denunciate senza attribuzione corretta, o attribuite al cantiere sbagliato, producono scostamenti di congruità che poi vanno giustificati o versati." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Contrattazione collettiva", ref: "CCNL edilizia industria e artigianato", principle: "Le imprese che occupano operai con applicazione del contratto edile sono tenute all'iscrizione alla Cassa Edile territorialmente competente e al versamento della contribuzione prevista dagli accordi collettivi.", impact: "L'iscrizione non è opzionale: discende dall'applicazione del contratto, e la sua assenza emerge al primo DURC." },
      { court: "Decreto ministeriale", ref: "D.M. n. 143 del 25 giugno 2021", principle: "La congruità dell'incidenza della manodopera si verifica confrontando il costo del lavoro denunciato alle Casse Edili con percentuali minime riferite al valore dell'opera, differenziate per categoria di lavori.", impact: "La denuncia mensile è il dato di partenza: un'attribuzione di cantiere sbagliata si traduce in uno scostamento da giustificare." },
      { court: "Decreto ministeriale", ref: "D.M. 30 gennaio 2015", principle: "La regolarità contributiva attestata dal DURC riguarda i versamenti dovuti a INPS, INAIL e, per le imprese tenute, alle Casse Edili.", impact: "Un arretrato verso la Cassa blocca il DURC esattamente come un debito INPS: gli effetti su incassi e gare sono gli stessi." },
    ] },

    { type: "h2", text: "Trasferte e cantieri fuori provincia", id: "trasferte" },
    { type: "p", text: "Un'impresa che apre un cantiere fuori dalla provincia di iscrizione si trova davanti a una domanda pratica: a quale Cassa versa? La disciplina è regolata dagli accordi tra le Casse e prevede meccanismi di trasferimento, con soglie temporali oltre le quali l'impresa deve iscriversi alla Cassa del luogo in cui opera." },
    { type: "p", text: "Il punto operativo è che le regole variano e vanno verificate sul caso concreto, ma l'errore tipico è sempre lo stesso: continuare a denunciare tutto sulla Cassa di origine per comodità amministrativa. Il risultato è che la congruità del cantiere fuori provincia non risulta, e alla chiusura dei lavori la stazione appaltante o il committente chiedono un'attestazione che nessuno può rilasciare." },
    { type: "p", text: "Per le imprese che lavorano su più regioni questo diventa un tema organizzativo prima che contabile: serve una procedura che, all'apertura di ogni cantiere, stabilisca la Cassa competente e la registri nel sistema di denuncia. Non è complicato, ma va deciso all'inizio del cantiere e non alla prima richiesta di attestazione." },

    { type: "figure", slot: "cassa-edile-come-funziona-2", alt: "Denuncia mensile telematica con ore per operaio e attribuzione ai cantieri", caption: "L'attribuzione del cantiere nella denuncia non è burocrazia: è il dato su cui si calcola la congruità." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Impresa con dodici operai, cantiere di nuova edilizia civile da 900.000 euro, durata dieci mesi. Il preventivo è stato costruito valorizzando la manodopera alla retribuzione oraria di contratto, con una maggiorazione forfettaria per contributi decisa anni prima." },
    { type: "p", text: "Ricalcolando il costo annuo effettivo per operaio — retribuzione, contributi INPS e INAIL, contribuzione e accantonamenti Cassa Edile, TFR, mensilità aggiuntive, DPI e formazione obbligatoria — e dividendo per le ore realmente produttive anziché per il monte ore teorico, il costo orario risulta sensibilmente superiore a quello usato in preventivo. Su un cantiere che assorbe 14.000 ore di manodopera, ogni euro di differenza sul costo orario vale 14.000 euro di margine." },
    { type: "p", text: "Alla stessa verifica emerge un secondo tema. Il valore dell'opera è 900.000 euro; per la nuova edilizia civile la percentuale minima di incidenza della manodopera è il 14,28%, cioè circa 128.500 euro di costo del lavoro denunciato. Se una parte delle lavorazioni è stata subappaltata e le denunce dei subaffidatari non risultano correttamente collegate al cantiere, la congruità non è raggiunta anche se il lavoro è stato regolarmente eseguito e pagato." },
    { type: "p", text: "Le due questioni si tengono: la prima riguarda quanto ti costa davvero un'ora, la seconda quanto risulta all'esterno che tu abbia impiegato. Entrambe si governano con lo stesso strumento — una denuncia mensile fatta bene e attribuita al cantiere giusto — e si sistemano male quando il cantiere è finito." },
    { type: "note", text: "L'errore da non fare: aggiornare la maggiorazione per oneri contributivi una volta e lasciarla ferma per anni. Le aliquote della Cassa territoriale cambiano con la contrattazione integrativa provinciale, e il costo orario va rifatto dopo ogni rinnovo. Lo scenario è illustrativo: valori e percentuali vanno verificati sulla Cassa competente." },

    { type: "h2", text: "Cosa deve presidiare l'impresa, in pratica", id: "presidio" },
    { type: "ul", items: [
      "Denuncia mensile trasmessa nei termini, con ore e retribuzioni corrette per ciascun operaio",
      "Attribuzione del cantiere corretta in denuncia: è la base della congruità di quel cantiere",
      "Verifica della Cassa territorialmente competente all'apertura di ogni cantiere fuori provincia",
      "Monitoraggio della congruità durante i lavori, non alla chiusura",
      "Collegamento delle denunce dei subaffidatari al cantiere, per non ritrovarsi uno scostamento a proprio carico",
      "Ricalcolo del costo orario pieno dopo ogni rinnovo contrattuale o variazione delle aliquote territoriali",
      "Controllo periodico della regolarità verso la Cassa, che pesa sul DURC quanto INPS e INAIL",
    ] },
    { type: "p", text: "L'ultimo punto vale la pena sottolinearlo perché è controintuitivo: nella percezione di molti imprenditori il debito verso la Cassa Edile è meno grave di un debito INPS. Non lo è. Ai fini del DURC i tre enti pesano allo stesso modo, e un arretrato verso la Cassa blocca gli incassi pubblici esattamente come un arretrato previdenziale." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Chi deve iscriversi alla Cassa Edile?", a: "Le imprese che occupano operai applicando il contratto collettivo dell'edilizia, industria o artigianato. L'obbligo discende dall'applicazione del contratto e dalla territorialità dei cantieri: non è una scelta organizzativa, e la sua assenza emerge alla prima richiesta di DURC." },
      { q: "L'accantonamento per ferie e gratifica è un costo in più?", a: "No: è una parte della retribuzione del lavoratore che, invece di transitare in busta paga, transita dalla Cassa che gliela erogherà. Va considerato nel costo orario pieno perché esce mensilmente dal conto, ma non va sommato alla retribuzione come se fosse un onere ulteriore." },
      { q: "Che cos'è l'APE?", a: "L'Anzianità Professionale Edile: un importo che spetta all'operaio in funzione dell'anzianità maturata nel settore, non presso la singola impresa, erogato dalla Cassa in base alle ore denunciate. Per l'impresa è un contributo in percentuale sull'imponibile, senza corrispondenza in busta paga." },
      { q: "Le percentuali di contribuzione sono uguali in tutta Italia?", a: "No. Ogni Cassa territoriale ha le proprie aliquote, definite dalla contrattazione integrativa provinciale. È la ragione per cui il costo orario va calcolato sulla Cassa di riferimento dei propri cantieri e non su un valore medio nazionale." },
      { q: "Se apro un cantiere in un'altra provincia, a quale Cassa verso?", a: "Le regole di trasferimento sono definite dagli accordi tra le Casse e prevedono soglie oltre le quali occorre iscriversi alla Cassa del luogo di esecuzione. Vanno verificate sul caso concreto all'apertura del cantiere: denunciare tutto sulla Cassa di origine per comodità produce scostamenti di congruità." },
      { q: "Un debito verso la Cassa Edile blocca il DURC?", a: "Sì, allo stesso modo di un debito INPS o INAIL. Il DURC attesta la regolarità verso tutti e tre gli enti, e l'irregolarità verso uno solo è sufficiente a produrre l'esito negativo, con il blocco degli incassi pubblici e l'esclusione dalle gare." },
      { q: "La Cassa Edile incide sulla congruità della manodopera?", a: "È il dato di partenza. La verifica prevista dal D.M. 143/2021 confronta il costo del lavoro denunciato alle Casse con percentuali minime riferite al valore dell'opera. Un'attribuzione di cantiere errata in denuncia si traduce direttamente in uno scostamento da giustificare o versare." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se il costo orario che usi nei preventivi non è stato ricalcolato dopo l'ultimo rinnovo contrattuale, è quasi certo che sottostimi la componente Cassa Edile. Mandaci il libro unico dell'ultimo esercizio, i prospetti di denuncia mensile e l'elenco delle qualifiche: ricostruiamo il costo orario pieno sulla tua Cassa territoriale e lo confrontiamo con quello che stai applicando. Per il quadro completo leggi le guide su costo del lavoro edile, DURC irregolare e preventivo di commessa." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della contrattazione vigenti." },
  ],
};
