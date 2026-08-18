import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "liquidazione-societa-edile",
  title: "Liquidare una società edile: cosa sopravvive alla cancellazione",
  excerpt:
    "Chiudere non è finire. Le commesse in corso, le garanzie rilasciate, la responsabilità per vizi delle opere consegnate e le sopravvenienze passive continuano a esistere dopo la cancellazione, e possono raggiungere soci e liquidatori entro limiti precisi.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-brand-dark to-brand",
  keywords: [
    "liquidazione societa edile",
    "cancellazione societa responsabilità soci",
    "art 2495 codice civile creditori",
    "commesse in corso liquidazione",
    "garanzie dopo la chiusura societa",
    "reddito periodo di liquidazione art 182 tuir",
  ],
  intro:
    "Nel settore costruzioni la liquidazione ha una complicazione che altri settori non hanno: l'impresa lascia dietro di sé opere che rispondono per anni. Alla cancellazione dal registro imprese la società si estingue, ma i creditori insoddisfatti possono agire verso i soci nei limiti di quanto riscosso in liquidazione e verso i liquidatori se il mancato pagamento dipende da loro colpa.",
};

export const seo = {
  seoTitle: "Liquidare una Società Edile: Cosa Sopravvive",
  metaDescription:
    "Commesse in corso, garanzie rilasciate e responsabilità per vizi: cosa continua a esistere dopo la cancellazione e chi ne risponde.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Le fasi: scioglimento per una delle cause previste, nomina del liquidatore, iscrizione, gestione liquidatoria, bilancio finale con piano di riparto, cancellazione. Il reddito: il periodo di liquidazione ha una disciplina propria (art. 182 TUIR), con determinazione provvisoria e conguaglio finale se la liquidazione si chiude entro il termine previsto. Cosa sopravvive: dopo la cancellazione i creditori insoddisfatti possono agire verso i soci fino a concorrenza delle somme riscosse in base al bilancio finale, e verso i liquidatori se il mancato pagamento è dipeso da loro colpa (art. 2495 c.c.). La specificità edile: garanzie in essere, decennale postuma e responsabilità per vizi delle opere consegnate." },

    { type: "h2", text: "Le fasi, in ordine", id: "fasi" },
    { type: "p", text: "La liquidazione volontaria segue una sequenza definita, e conoscerla serve soprattutto a capire dove si collocano le decisioni che contano." },
    { type: "ol", items: [
      "Verificarsi di una causa di scioglimento e accertamento da parte degli amministratori, con iscrizione nel registro delle imprese",
      "Nomina del liquidatore, con l'indicazione dei criteri di svolgimento della liquidazione e dei poteri conferiti",
      "Consegna dei beni e dei documenti, con la situazione dei conti alla data di effetto dello scioglimento",
      "Gestione liquidatoria: realizzo dell'attivo, pagamento dei creditori, chiusura dei rapporti pendenti",
      "Bilancio finale di liquidazione con il piano di riparto, depositato e soggetto a reclamo dei soci",
      "Cancellazione della società dal registro delle imprese",
    ] },
    { type: "p", text: "Il secondo punto merita attenzione perché è quello in cui si definisce il perimetro. I criteri e i poteri conferiti al liquidatore determinano se potrà, ad esempio, proseguire temporaneamente l'attività per completare le commesse in corso oppure dovrà limitarsi al realizzo. In un'impresa edile è una scelta che cambia il valore recuperabile in misura sostanziale." },
    { type: "p", text: "Il quarto punto è quello che in edilizia dura più a lungo. Chiudere i rapporti pendenti significa affrontare cantieri aperti, garanzie in essere, riserve non definite, contenziosi su opere consegnate. È la ragione per cui una liquidazione edile richiede tempi che raramente coincidono con quelli preventivati." },

    { type: "h2", text: "Le commesse in corso: completare o cedere?", id: "commesse" },
    { type: "p", text: "È la prima decisione economica della liquidazione e va presa presto. Una commessa lasciata a metà ha un valore prossimo a zero e genera responsabilità verso il committente; una commessa completata restituisce il corrispettivo residuo ma richiede di continuare a operare — con costi, personale, forniture e garanzie." },
    { type: "table", headers: ["Opzione", "Quando ha senso", "Cosa richiede"], rows: [
      ["Completare i lavori", "Commesse con margine residuo positivo e vicine all'ultimazione", "Poteri del liquidatore per l'esercizio provvisorio, personale, fornitori disponibili, garanzie in essere"],
      ["Cedere le commesse", "Commesse lunghe o complesse, con un'impresa disponibile a subentrare", "Consenso del committente, procedure per le modifiche soggettive negli appalti pubblici"],
      ["Risolvere il contratto", "Commesse in perdita o senza alternative", "Definizione del corrispettivo per l'eseguito, gestione delle penali e delle garanzie"],
      ["Affittare l'azienda", "Struttura ancora viva e valore nell'organizzazione", "È l'alternativa alla liquidazione stessa: vedi la guida dedicata"],
    ] },
    { type: "p", text: "L'ultima riga è un promemoria che va fatto prima di iniziare: la liquidazione non è l'unica uscita. Un'impresa con commesse, qualificazioni e squadre può valere di più ceduta o affittata che liquidata, perché la liquidazione disperde proprio quel valore organizzativo. La scelta di liquidare va confrontata con le alternative, non presa per esclusione." },

    { type: "figure", slot: "liquidazione-societa-edile-1", alt: "Cantiere fermo con opere incomplete e attrezzature ancora in posto", caption: "Una commessa lasciata a metà vale quasi nulla e genera responsabilità: la scelta va fatta presto." },

    { type: "h2", text: "Cosa sopravvive alla cancellazione", id: "sopravvive" },
    { type: "p", text: "È il capitolo che rende questa materia diversa in edilizia rispetto ad altri settori, e quello su cui l'imprenditore riceve più sorprese." },
    { type: "p", text: "L'art. 2495 del codice civile stabilisce che, dopo la cancellazione, i creditori sociali non soddisfatti possono far valere i loro crediti nei confronti dei soci, fino a concorrenza delle somme da questi riscosse in base al bilancio finale di liquidazione, e nei confronti dei liquidatori se il mancato pagamento è dipeso da loro colpa." },
    { type: "p", text: "Tradotto: un socio che ha ricevuto un riparto di 200.000 euro risponde fino a quella cifra verso un creditore che si presenta dopo. E il liquidatore risponde se ha pagato alcuni creditori trascurandone altri di cui conosceva o doveva conoscere l'esistenza. Sono due responsabilità distinte, e in edilizia la seconda è concreta proprio per le posizioni che maturano nel tempo." },
    { type: "ul", items: [
      "Responsabilità per vizi e difformità delle opere consegnate, che si manifestano anche anni dopo la consegna",
      "Garanzie definitive rilasciate su appalti pubblici, che restano in essere fino ai collaudi",
      "Polizza indennitaria decennale sulle opere che la richiedevano, con la relativa posizione",
      "Riserve iscritte e non definite, che possono chiudersi in un senso o nell'altro",
      "Posizioni fiscali e contributive delle annualità ancora accertabili",
      "Contenziosi in corso e quelli non ancora instaurati su fatti già avvenuti",
    ] },
    { type: "p", text: "La prima riga è quella che caratterizza il settore. Un'impresa che ha consegnato edifici risponde dei gravi difetti secondo i termini di legge, e quei termini si contano dalla scoperta: possono attivarsi molti anni dopo la chiusura dell'attività. Liquidare non estingue quelle posizioni, le lascia senza un soggetto capiente." },
    { type: "p", text: "È la ragione per cui una liquidazione edile ben condotta prevede un accantonamento prudenziale per le passività potenziali prima del riparto, e non distribuisce l'intero attivo ai soci il giorno dopo aver pagato l'ultimo fornitore noto. Distribuire tutto è precisamente ciò che espone soci e liquidatore." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Codice civile", ref: "Art. 2495", principle: "Dopo la cancellazione della società i creditori sociali non soddisfatti possono far valere i loro crediti nei confronti dei soci, fino a concorrenza delle somme da questi riscosse in base al bilancio finale di liquidazione, e nei confronti dei liquidatori se il mancato pagamento è dipeso da colpa di questi.", impact: "La cancellazione non estingue i debiti: li rende esigibili verso soci e liquidatori entro limiti precisi." },
      { court: "Codice civile", ref: "Art. 2484 e seguenti", principle: "La società si scioglie per le cause previste; verificatasi una causa di scioglimento gli amministratori ne accertano il verificarsi e procedono agli adempimenti pubblicitari, conservando il potere di gestire ai soli fini della conservazione dell'integrità e del valore del patrimonio sociale.", impact: "Tra scioglimento e nomina del liquidatore i poteri sono limitati alla conservazione: non è il momento per acquisire nuovi lavori." },
      { court: "Testo unico imposte sui redditi", ref: "Art. 182", principle: "In caso di liquidazione il reddito relativo al periodo compreso tra l'inizio dell'esercizio e la data di effetto della deliberazione è determinato in via provvisoria, salvo conguaglio in base al bilancio finale, se la liquidazione si chiude entro il termine previsto.", impact: "La determinazione è provvisoria: chi chiude entro il termine conguaglia, chi va oltre consolida i risultati dei singoli periodi." },
    ] },

    { type: "h2", text: "Il periodo di liquidazione ai fini fiscali", id: "fiscale" },
    { type: "p", text: "Con l'inizio della liquidazione si apre un periodo d'imposta autonomo: il reddito relativo alla frazione compresa tra l'inizio dell'esercizio e la data di effetto della deliberazione si determina in via provvisoria, con conguaglio sulla base del bilancio finale se la liquidazione si conclude entro il termine previsto dalla norma." },
    { type: "p", text: "Il meccanismo ha una logica: la liquidazione è un unico fenomeno economico che si svolge nel tempo, e il risultato definitivo si conosce solo alla fine. Se però la liquidazione si protrae oltre il termine, i risultati dei singoli periodi si consolidano e il conguaglio non opera." },
    { type: "p", text: "Sul piano operativo, le voci che richiedono più attenzione in un'impresa edile sono quelle già viste altrove: la valutazione delle commesse in corso, le rimanenze di magazzino e di cantiere, le riserve iscritte, i crediti verso committenti pubblici con tempi di incasso lunghi. Sono le stesse grandezze del controllo di gestione, e la loro qualità determina l'attendibilità dei bilanci di liquidazione." },
    { type: "p", text: "Va infine ricordata la chiusura della posizione IVA e degli adempimenti dichiarativi, con il tema del credito IVA eventualmente maturato: in imprese che hanno lavorato in reverse charge o in split payment il credito può essere significativo, e il suo recupero va programmato perché richiede tempo." },

    { type: "figure", slot: "liquidazione-societa-edile-2", alt: "Bilancio finale di liquidazione con piano di riparto e accantonamenti", caption: "Distribuire l'intero attivo dopo l'ultimo fornitore noto è ciò che espone soci e liquidatore." },

    { type: "h2", text: "Come si riduce l'esposizione residua", id: "ridurre" },
    { type: "p", text: "Non esiste un modo per azzerare quanto sopravvive, ma esistono accorgimenti che riducono sensibilmente il rischio per soci e liquidatore." },
    { type: "ol", items: [
      "Ricognizione completa delle posizioni potenziali prima del riparto: opere consegnate ancora nei termini, garanzie in essere, riserve, contenziosi, annualità fiscali aperte",
      "Accantonamento prudenziale nel bilancio finale per le passività potenziali, invece della distribuzione integrale dell'attivo",
      "Definizione delle riserve e dei contenziosi prima della cancellazione, dove possibile, anche accettando una transazione meno favorevole",
      "Verifica delle garanzie rilasciate e coordinamento con banche e compagnie sulla loro sorte dopo la chiusura",
      "Richiesta del certificato sui carichi pendenti in materia tributaria, per fotografare la posizione",
      "Conservazione ordinata della documentazione di commessa oltre la cancellazione: è ciò che consentirà di difendersi da una contestazione futura",
    ] },
    { type: "p", text: "L'ultimo punto è quello che viene trascurato con più regolarità, ed è quello che poi costa di più. Un socio che riceve una richiesta risarcitoria su un edificio consegnato sei anni prima si difende con il fascicolo di commessa: computo, SAL, collaudi, certificazioni, documentazione fotografica. Se quel materiale è stato distrutto alla chiusura, la difesa è quasi impossibile." },
    { type: "p", text: "La regola pratica che diamo è di conservare la documentazione tecnica delle opere per l'intero arco in cui la responsabilità può essere fatta valere, che è più lungo dei termini di conservazione contabile. Un archivio digitale ordinato costa poco e risolve un problema che si presenta anni dopo." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "S.r.l. di costruzioni, ricavi in calo da tre esercizi, due soci che decidono di chiudere. All'avvio della liquidazione risultano: due commesse private in corso al 70% e al 30% di avanzamento, un appalto pubblico ultimato con collaudo non ancora emesso, tre edifici consegnati negli ultimi cinque anni, garanzie definitive in essere per 180.000 euro e un credito IVA di 96.000 euro." },
    { type: "p", text: "La prima decisione riguarda le commesse. Quella al 70% viene completata, perché il margine residuo è positivo e l'ultimazione è vicina: il liquidatore riceve i poteri necessari all'esercizio provvisorio. Quella al 30% viene ceduta a un'altra impresa con il consenso del committente, evitando la risoluzione e il contenzioso che ne sarebbe derivato." },
    { type: "p", text: "La seconda riguarda ciò che sopravvive. I tre edifici consegnati sono ancora nei termini di responsabilità per gravi difetti; l'appalto pubblico ha garanzie in essere fino al collaudo. Il bilancio finale prevede quindi un accantonamento prudenziale, e il riparto ai soci viene dimensionato di conseguenza invece di distribuire l'intero attivo." },
    { type: "p", text: "La terza riguarda il credito IVA: 96.000 euro il cui recupero richiede una richiesta di rimborso con tempi propri. La liquidazione non si chiude prima di averlo incassato, perché distribuire un attivo che include un credito non ancora realizzato espone il liquidatore. È una delle ragioni per cui la tempistica preventivata si allunga." },
    { type: "note", text: "L'errore da non fare: distribuire l'intero attivo ai soci subito dopo aver pagato i creditori noti. In edilizia le passività potenziali si manifestano anni dopo, e il riparto integrale è esattamente ciò che rende soci e liquidatore aggredibili. Lo scenario è illustrativo: termini e responsabilità vanno valutati sul caso concreto." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Dopo la cancellazione i debiti si estinguono?", a: "No. L'art. 2495 del codice civile consente ai creditori insoddisfatti di agire verso i soci fino a concorrenza delle somme riscosse in base al bilancio finale, e verso i liquidatori se il mancato pagamento è dipeso da loro colpa. La cancellazione chiude la società, non le obbligazioni." },
      { q: "Per quanto tempo rispondo dei vizi delle opere consegnate?", a: "Secondo i termini di legge propri della responsabilità per vizi e per gravi difetti, che decorrono anche dalla scoperta e possono quindi attivarsi molti anni dopo la consegna. La liquidazione non li estingue: li lascia senza un soggetto capiente, spostando il problema su soci e liquidatore." },
      { q: "Posso completare le commesse durante la liquidazione?", a: "Sì, se al liquidatore sono conferiti i poteri necessari all'esercizio provvisorio. È spesso la scelta economicamente migliore per le commesse vicine all'ultimazione con margine residuo positivo: una commessa lasciata a metà vale quasi nulla e genera responsabilità." },
      { q: "Cosa succede alle garanzie rilasciate?", a: "Restano in essere secondo i termini contrattuali, tipicamente fino al collaudo per le garanzie definitive e per dieci anni per la polizza decennale postuma. Vanno mappate e coordinate con banche e compagnie prima della cancellazione, non dopo." },
      { q: "Come si determina il reddito del periodo di liquidazione?", a: "In via provvisoria per la frazione tra inizio dell'esercizio e data di effetto dello scioglimento, con conguaglio sulla base del bilancio finale se la liquidazione si chiude entro il termine previsto. Oltre quel termine i risultati dei singoli periodi si consolidano." },
      { q: "Devo accantonare per le passività potenziali?", a: "È la scelta prudente e quella che protegge soci e liquidatore. Distribuire l'intero attivo subito dopo aver pagato i creditori noti espone entrambi verso posizioni che in edilizia si manifestano tipicamente anni dopo la chiusura." },
      { q: "Conviene liquidare o cedere l'azienda?", a: "Vanno confrontate. La liquidazione disperde il valore organizzativo — commesse, qualificazioni, squadre, relazioni — che una cessione o un affitto conservano e valorizzano. La scelta di liquidare va presa dopo aver verificato le alternative, non per esclusione." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se stai valutando di chiudere, la prima cosa utile non è la procedura ma l'inventario di ciò che sopravvive: opere consegnate ancora nei termini, garanzie in essere, riserve aperte, annualità fiscali accertabili. Mandaci l'elenco delle commesse degli ultimi anni, le garanzie rilasciate e l'ultimo bilancio dalla pagina contatti: costruiamo quella mappa e valutiamo se la liquidazione è davvero l'uscita migliore. Per le alternative leggi le guide su cessione d'azienda e affitto d'azienda." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa vigente." },
  ],
};
