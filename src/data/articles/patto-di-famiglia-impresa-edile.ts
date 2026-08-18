import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "patto-di-famiglia-impresa-edile",
  title: "Patto di famiglia, trust e strumenti di governo familiare in edilizia",
  excerpt:
    "Quando i figli sono più di uno e solo alcuni lavorano in azienda, il trasferimento va messo al riparo dalle azioni dei legittimari. Patto di famiglia, trust, polizze e vincoli: cosa fa davvero ciascuno strumento e cosa no.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-gold-dark to-gold",
  keywords: [
    "patto di famiglia impresa",
    "trust familiare imprenditore",
    "legittimari azione di riduzione",
    "vincolo di destinazione 2645-ter",
    "governo familiare impresa edile",
    "successione quote societarie",
  ],
  intro:
    "Il problema che questi strumenti risolvono è preciso: mettere al riparo il trasferimento dell'impresa dalle contestazioni degli altri legittimari. Il patto di famiglia lo fa con un accordo che coinvolge tutti; il trust segrega beni per una finalità; i vincoli di destinazione li legano a uno scopo. Ognuno risponde a un'esigenza diversa, e nessuno è uno schermo generale.",
};

export const seo = {
  seoTitle: "Patto di Famiglia e Trust per l'Impresa Edile",
  metaDescription:
    "Come mettere al riparo il trasferimento dell'impresa dalle azioni dei legittimari: patto di famiglia, trust e vincoli di destinazione a confronto.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il problema: le donazioni lesive della quota di legittima possono essere ridotte su domanda dei legittimari, anche molti anni dopo. Il patto di famiglia (artt. 768-bis e ss. c.c.): contratto con cui l'imprenditore trasferisce l'azienda o le quote a uno o più discendenti, liquidando gli altri legittimari, con effetti stabili. Il trust: segrega beni presso un trustee per una finalità; regge se ha causa concreta e trustee realmente indipendente. Il vincolo di destinazione (art. 2645-ter c.c.): lega beni immobili o mobili registrati a uno scopo meritevole." },

    { type: "h2", text: "Il problema: la quota di legittima", id: "problema" },
    { type: "p", text: "L'ordinamento riserva ai legittimari — coniuge, figli e, in loro assenza, ascendenti — una quota dell'eredità di cui il testatore non può disporre. Le donazioni e le disposizioni testamentarie che ledono quella quota non sono nulle, ma possono essere ridotte su domanda dei legittimari lesi." },
    { type: "p", text: "Per un'impresa familiare questo significa che una donazione di quote a un figlio, per quanto ben costruita sotto il profilo fiscale, resta esposta: all'apertura della successione gli altri figli possono agire in riduzione, e l'azione può arrivare a colpire il bene donato. Un'impresa già passata di mano da anni può trovarsi al centro di un contenzioso ereditario." },
    { type: "p", text: "In edilizia il rischio è amplificato da due fattori. Il primo è il peso relativo dell'azienda sul patrimonio complessivo: spesso l'impresa vale più di tutto il resto messo insieme, e quindi qualunque attribuzione preferenziale è lesiva. Il secondo è il tempo: la successione si apre decenni dopo la donazione, quando gli equilibri familiari possono essere cambiati." },

    { type: "h2", text: "Il patto di famiglia: mettere tutti d'accordo prima", id: "patto" },
    { type: "p", text: "Il patto di famiglia, disciplinato dagli artt. 768-bis e seguenti del codice civile, è il contratto con cui l'imprenditore trasferisce, in tutto o in parte, l'azienda o le proprie partecipazioni societarie a uno o più discendenti. Deve essere stipulato per atto pubblico e vi devono partecipare il coniuge e tutti coloro che sarebbero legittimari se in quel momento si aprisse la successione." },
    { type: "p", text: "Gli assegnatari devono liquidare gli altri partecipanti con il pagamento di una somma corrispondente al valore delle quote loro spettanti, salvo che questi vi rinuncino in tutto o in parte. La liquidazione può avvenire anche in natura, con l'attribuzione di beni diversi." },
    { type: "p", text: "L'effetto è quello che rende lo strumento prezioso: quanto ricevuto dai contraenti non è soggetto a collazione né ad azione di riduzione. Il trasferimento diventa stabile, e all'apertura della successione non può essere rimesso in discussione da chi ha partecipato al patto." },
    { type: "p", text: "Il limite dello strumento è insieme la sua forza: richiede l'accordo di tutti. Se un figlio si rifiuta di partecipare o di rinunciare, il patto non si perfeziona. È quindi uno strumento per famiglie che riescono a parlarsi, non una soluzione per situazioni già conflittuali." },

    { type: "table", headers: ["Strumento", "Cosa fa", "Limite principale"], rows: [
      ["Patto di famiglia", "Trasferisce l'azienda con effetti stabili verso i legittimari partecipanti", "Richiede il consenso di tutti i legittimari"],
      ["Donazione con riserva di usufrutto", "Trasferisce la nuda proprietà mantenendo frutti e diritti amministrativi", "Resta esposta all'azione di riduzione"],
      ["Trust", "Segrega beni presso un trustee per una finalità determinata", "Regge solo con causa concreta e trustee realmente indipendente"],
      ["Vincolo di destinazione (art. 2645-ter c.c.)", "Destina immobili o mobili registrati a uno scopo meritevole, con effetti opponibili", "Ambito limitato ai beni trascrivibili e allo scopo dichiarato"],
      ["Polizze vita", "Attribuiscono somme al beneficiario con una disciplina propria", "I premi restano aggredibili in sede di riduzione e revocatoria"],
      ["Testamento", "Regola la successione nei limiti della quota disponibile", "Non protegge le donazioni già fatte né vincola i legittimari"],
    ] },

    { type: "figure", slot: "patto-di-famiglia-impresa-edile-1", alt: "Famiglia imprenditoriale attorno a un tavolo con documenti societari", caption: "Il patto di famiglia richiede che tutti partecipino: è uno strumento per famiglie che riescono a parlarsi." },

    { type: "h2", text: "Il trust: quando ha senso e quando no", id: "trust" },
    { type: "p", text: "Il trust è un rapporto in cui un disponente trasferisce beni a un trustee, che li amministra nell'interesse di beneficiari o per uno scopo. In Italia è riconosciuto in forza della Convenzione dell'Aja, e produce un effetto di segregazione: i beni in trust costituiscono una massa distinta dal patrimonio del trustee e non sono aggredibili dai creditori personali di quest'ultimo." },
    { type: "p", text: "Gli utilizzi che reggono sono quelli con una causa concreta e verificabile: la tutela di un familiare fragile o con disabilità, la gestione unitaria del patrimonio durante un passaggio generazionale complesso, la garanzia dell'esecuzione di un piano di risanamento, la destinazione di beni a un progetto determinato con un orizzonte temporale definito." },
    { type: "p", text: "Gli utilizzi che non reggono sono altrettanto identificabili: il trust autodichiarato in cui il disponente è anche trustee e conserva di fatto il controllo pieno sui beni, il trust costituito quando esistono già creditori o contenziosi, il trust privo di beneficiari determinati o determinabili e di una finalità reale. In queste situazioni la segregazione viene disconosciuta." },
    { type: "p", text: "Sul piano fiscale la materia ha visto una progressiva definizione, con l'individuazione del momento impositivo ai fini delle imposte indirette e del trattamento dei redditi prodotti dai beni in trust. È un profilo che richiede una valutazione specifica prima della costituzione, perché incide sulla convenienza complessiva dell'operazione." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Codice civile", ref: "Art. 768-bis e seguenti", principle: "È patto di famiglia il contratto con cui l'imprenditore trasferisce, in tutto o in parte, l'azienda, o il titolare di partecipazioni societarie trasferisce le proprie quote, a uno o più discendenti; devono partecipare il coniuge e tutti i legittimari.", impact: "Quanto ricevuto dai contraenti non è soggetto a collazione né a riduzione: è ciò che rende stabile il trasferimento." },
      { court: "Codice civile", ref: "Artt. 553 e seguenti", principle: "I legittimari lesi possono agire per la riduzione delle donazioni e delle disposizioni testamentarie eccedenti la quota di cui il testatore poteva disporre.", impact: "Una donazione di quote non accompagnata da un accordo con gli altri legittimari resta esposta anche a distanza di decenni." },
      { court: "Codice civile", ref: "Art. 2645-ter", principle: "Gli atti in forma pubblica con cui beni immobili o mobili registrati sono destinati alla realizzazione di interessi meritevoli di tutela possono essere trascritti, e i beni conferiti possono essere impiegati solo per la realizzazione del fine di destinazione.", impact: "È uno strumento più semplice del trust ma limitato ai beni trascrivibili e vincolato allo scopo dichiarato." },
    ] },

    { type: "h2", text: "Come si scelgono gli strumenti", id: "scelta" },
    { type: "ol", items: [
      "Partire dalla mappa familiare: chi sono i legittimari, chi lavora in azienda, chi ha aspettative diverse, quali tensioni esistono già oggi",
      "Fotografare il patrimonio complessivo: quanto pesa l'azienda sul totale, quali beni possono servire a compensare chi non entra in impresa",
      "Verificare se esiste un accordo possibile: se sì, il patto di famiglia è lo strumento più solido; se no, va costruito un percorso diverso e più graduale",
      "Individuare esigenze speciali: un familiare fragile, un figlio minore, un socio esterno da regolare. Sono i casi in cui il trust ha una causa concreta",
      "Coordinare con la struttura societaria: statuto della holding, clausole di prelazione e gradimento, regole sulle maggioranze qualificate",
      "Verificare la coerenza complessiva: testamento, donazioni pregresse, polizze, regime patrimoniale dei coniugi devono raccontare la stessa storia",
    ] },
    { type: "p", text: "L'ultimo punto è quello che più spesso manca. Capita di trovare famiglie con un patto di famiglia ben costruito, un testamento che dice altro, donazioni pregresse mai considerate e polizze con beneficiari incoerenti. Il risultato è un assetto che, invece di prevenire il conflitto, ne fornisce il materiale." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Imprenditore edile, tre figli. Il patrimonio complessivo è composto dall'impresa, valutata 2,4 milioni, da immobili per 1,1 milioni e da liquidità per 300.000 euro. Il figlio maggiore lavora in azienda da dieci anni e ne è di fatto il responsabile operativo; gli altri due hanno percorsi propri e nessun interesse a entrare." },
    { type: "p", text: "Una semplice donazione delle quote al figlio maggiore sarebbe lesiva: l'azienda vale più della metà del patrimonio, e alla successione gli altri due potrebbero agire in riduzione, con il rischio di rimettere in discussione l'assetto societario a distanza di anni." },
    { type: "p", text: "Il percorso scelto è un patto di famiglia: le quote vengono trasferite al figlio maggiore, che liquida i fratelli in parte in denaro e in parte con l'attribuzione di due immobili detenuti dall'immobiliare, di valore concordato in perizia. Tutti i legittimari partecipano all'atto. Quanto ricevuto non è soggetto a collazione né a riduzione: l'assetto è stabile. Contestualmente si aggiorna il testamento e si verificano le donazioni pregresse e i beneficiari delle polizze, per evitare incoerenze." },
    { type: "note", text: "L'errore da non fare: usare il trust come alternativa al dialogo familiare. Un trust costituito per aggirare il consenso degli altri figli non risolve il problema dei legittimari e aggiunge un elemento di conflitto. Il trust serve dove c'è una finalità concreta, non dove manca un accordo. Lo scenario è illustrativo." },

    { type: "figure", slot: "patto-di-famiglia-impresa-edile-2", alt: "Atto pubblico di patto di famiglia con perizia di valutazione allegata", caption: "La valutazione dell'azienda è il punto su cui il patto si regge o si rompe: va fatta da un terzo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Che cos'è il patto di famiglia?", a: "È il contratto, da stipulare per atto pubblico, con cui l'imprenditore trasferisce l'azienda o le proprie quote a uno o più discendenti, liquidando gli altri legittimari. Vi devono partecipare il coniuge e tutti coloro che sarebbero legittimari all'apertura della successione in quel momento." },
      { q: "Perché il patto è più solido di una donazione?", a: "Perché quanto ricevuto dai contraenti non è soggetto a collazione né ad azione di riduzione. Una donazione, invece, resta esposta: all'apertura della successione i legittimari lesi possono agire, anche decenni dopo, rimettendo in discussione l'assetto societario." },
      { q: "Serve il consenso di tutti i figli?", a: "Sì. Il patto richiede la partecipazione del coniuge e di tutti i legittimari, che possono essere liquidati o rinunciare in tutto o in parte. Se anche uno solo si rifiuta, il patto non si perfeziona: è uno strumento per famiglie che riescono ad accordarsi." },
      { q: "Come si valuta l'azienda nel patto di famiglia?", a: "Con una valutazione tecnica indipendente, che è il punto su cui l'accordo regge o si rompe. Una stima percepita come di parte da chi viene liquidato compromette il consenso e, in prospettiva, la stabilità dell'intero assetto." },
      { q: "Il trust protegge dai creditori dell'impresa?", a: "Produce un effetto di segregazione, ma solo se costituito con una causa concreta, con un trustee realmente indipendente e in un momento in cui non esistono creditori pregiudicati. Il trust autodichiarato in cui il disponente conserva il controllo pieno, o costituito quando i creditori sono già alla porta, viene disconosciuto." },
      { q: "Cos'è il vincolo di destinazione dell'art. 2645-ter?", a: "È un atto pubblico con cui immobili o mobili registrati vengono destinati alla realizzazione di interessi meritevoli di tutela, con trascrizione e opponibilità ai terzi. È più semplice del trust ma limitato ai beni trascrivibili e strettamente vincolato allo scopo dichiarato." },
      { q: "Il patto di famiglia paga imposte?", a: "Al ricorrere delle condizioni previste per i trasferimenti d'azienda a discendenti — tra cui l'impegno quinquennale a proseguire l'attività o a mantenere il controllo — si applica l'esenzione dall'imposta di donazione. Le attribuzioni compensative ai legittimari seguono regole proprie e vanno valutate separatamente." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "La domanda da cui partire non è quale strumento usare, ma se in famiglia esiste oggi la possibilità di un accordo. Se esiste, il patto di famiglia è la strada più solida; se non esiste, va costruito un percorso più graduale. Mandaci la composizione familiare, la valutazione indicativa dell'impresa e l'elenco del patrimonio: ti indichiamo lo strumento adatto e la sequenza. Per il contesto leggi le guide su passaggio generazionale e protezione patrimoniale." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa vigente." },
  ],
};
