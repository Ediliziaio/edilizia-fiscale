import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "trasformazione-ditta-individuale-srl",
  title: "Da ditta individuale a S.r.l.: conferimento, tempi e cosa si porta dietro",
  excerpt:
    "Non è una trasformazione ma un conferimento d'azienda, e in regime di neutralità non costa imposte sui plusvalori. Il punto delicato è cosa segue l'azienda: debiti, dipendenti, contratti, qualificazioni e responsabilità già maturate.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-brand-dark to-brand",
  keywords: [
    "da ditta individuale a srl edilizia",
    "conferimento azienda art 176 tuir",
    "neutralità fiscale conferimento",
    "perizia stima conferimento srl",
    "responsabilità debiti conferimento azienda",
    "quando passare a srl impresa edile",
  ],
  intro:
    "In edilizia il passaggio da ditta individuale a società non nasce quasi mai da un calcolo fiscale: nasce dal rischio. Un'impresa che apre cantieri risponde di danni, infortuni e vizi dell'opera con tutto il patrimonio dell'imprenditore. Il conferimento d'azienda in una S.r.l. si fa in neutralità fiscale; il lavoro vero è governare cosa l'azienda si porta dietro.",
};

export const seo = {
  seoTitle: "Da Ditta Individuale a S.r.l.: Conferimento e Tempi",
  metaDescription:
    "Il conferimento d'azienda in neutralità fiscale, la perizia di stima e cosa segue l'azienda: debiti, dipendenti, contratti e qualificazioni.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Non è una trasformazione: quella opera tra società. Da ditta individuale si passa con il conferimento d'azienda in una società di nuova costituzione o esistente, oppure con la cessione. Il regime: il conferimento d'azienda è fiscalmente neutro ai sensi dell'art. 176 del TUIR, con continuità dei valori fiscalmente riconosciuti. La forma: atto pubblico, con perizia di stima per i conferimenti in natura in S.r.l. Cosa segue l'azienda: i debiti risultanti dai libri contabili obbligatori, i rapporti di lavoro, i contratti in corso e, con verifiche, le qualificazioni. Cosa non segue: le responsabilità già maturate in capo alla persona fisica, che restano." },

    { type: "h2", text: "Perché in edilizia si fa, e quasi mai per le imposte", id: "perche" },
    { type: "p", text: "Il confronto fiscale tra impresa individuale e S.r.l. dipende da quanto utile resta in azienda: se l'imprenditore preleva tutto, la società non offre grandi vantaggi, perché alla tassazione societaria si somma quella sui dividendi. Se una parte viene reinvestita, l'imposizione societaria su quella quota è più leggera degli scaglioni più alti dell'IRPEF." },
    { type: "p", text: "Ma nel settore costruzioni il criterio che decide è un altro, ed è la responsabilità. La ditta individuale risponde delle obbligazioni con tutto il patrimonio del titolare: la casa, i conti, gli immobili. Un infortunio grave, un contenzioso su vizi dell'opera scoperti anni dopo la consegna, una solidarietà con un subappaltatore inadempiente possono arrivare direttamente al patrimonio familiare." },
    { type: "p", text: "La S.r.l. limita la responsabilità al patrimonio sociale, con le eccezioni note: le fideiussioni personali rilasciate alle banche, le azioni di responsabilità verso gli amministratori, alcune responsabilità di natura fiscale e sanzionatoria. Non è uno scudo assoluto, ma sposta il baricentro in modo sostanziale." },
    { type: "p", text: "C'è poi una ragione di sviluppo: la società consente di far entrare soci o familiari, di costruirci sopra una [holding](/guide/holding-immobiliare-edilizia), di accedere a qualificazioni e a un rapporto bancario più strutturato. Sono possibilità che la ditta individuale semplicemente non offre." },

    { type: "h2", text: "Le due strade: conferimento o cessione", id: "strade" },
    { type: "table", headers: ["", "Conferimento d'azienda", "Cessione d'azienda"], rows: [
      ["Cosa riceve l'imprenditore", "Quote della società conferitaria", "Un prezzo in denaro"],
      ["Regime fiscale", "Neutrale ex art. 176 TUIR: nessuna plusvalenza tassabile", "Realizzativo: la plusvalenza concorre al reddito"],
      ["Valori fiscali", "Proseguono in continuità in capo alla conferitaria", "La cessionaria iscrive i beni ai valori di acquisto"],
      ["Imposta di registro", "In misura fissa", "Proporzionale sui beni trasferiti"],
      ["Forma", "Atto pubblico con perizia di stima", "Atto pubblico o scrittura privata autenticata"],
      ["Quando ha senso", "Passaggio dell'attività alla forma societaria mantenendone la titolarità", "Quando c'è un acquirente terzo o si vuole monetizzare"],
    ] },
    { type: "p", text: "Per il passaggio da individuale a società la strada ordinaria è il conferimento: l'imprenditore conferisce l'azienda e riceve in cambio le quote, restando titolare dell'attività attraverso la società. La neutralità dell'art. 176 evita di tassare plusvalori latenti che nessuno ha realizzato — perché in effetti nessuno ha venduto nulla a nessuno." },
    { type: "p", text: "La cessione ha senso in situazioni diverse: quando esiste un acquirente terzo, o quando l'imprenditore vuole monetizzare l'azienda facendola acquistare da una società che controlla, accettando la tassazione della plusvalenza in cambio del riconoscimento dei valori in capo alla cessionaria. È una scelta che va valutata sui numeri, non per prassi." },

    { type: "figure", slot: "trasformazione-ditta-individuale-srl-1", alt: "Titolare di impresa edile individuale in cantiere con il proprio mezzo", caption: "In edilizia il passaggio nasce dal rischio: la ditta individuale risponde con la casa e i conti del titolare." },

    { type: "h2", text: "Cosa si porta dietro l'azienda", id: "cosa-segue" },
    { type: "p", text: "È il capitolo che richiede più attenzione e che viene affrontato per ultimo, quando invece dovrebbe guidare la tempistica dell'operazione. Il trasferimento dell'azienda non è solo un passaggio di beni: comporta effetti su rapporti giuridici in corso." },
    { type: "ul", items: [
      "Debiti: la società conferitaria risponde dei debiti risultanti dai libri contabili obbligatori; per i debiti tributari opera una responsabilità entro i limiti previsti, con l'effetto liberatorio del certificato sui carichi pendenti",
      "Rapporti di lavoro: proseguono con la società, e i lavoratori conservano tutti i diritti maturati, con responsabilità solidale del cedente e del cessionario nei limiti di legge",
      "Contratti in corso: la società subentra nei contratti per l'esercizio dell'azienda che non abbiano carattere personale, salvo il diritto di recesso del terzo contraente per giusta causa",
      "Autorizzazioni, iscrizioni e requisiti: vanno verificati uno per uno, perché alcuni sono riferiti al soggetto e non si trasferiscono automaticamente",
      "Attestazione SOA e qualificazioni: sono riferite al soggetto giuridico e richiedono verifiche specifiche sui meccanismi di trasferimento dei requisiti",
      "Responsabilità già maturate: quelle sorte prima del conferimento in capo alla persona fisica restano sue, e il conferimento non le trasferisce né le estingue",
    ] },
    { type: "p", text: "L'ultima riga è quella che va detta con la massima chiarezza, perché è l'illusione più diffusa. Un imprenditore individuale che ha consegnato opere negli anni precedenti risponde dei vizi di quelle opere secondo le regole ordinarie: costituire oggi una S.r.l. non lo protegge da un contenzioso su un cantiere del 2021. La società protegge da quello che accade dopo." },
    { type: "p", text: "È una ragione in più per farlo presto. Ogni anno di attività in forma individuale accumula responsabilità che restano sulla persona, e che nessuna riorganizzazione successiva può spostare." },
    { type: "p", text: "Il punto sui contratti merita un'aggiunta pratica: nei rapporti con committenti pubblici e con banche il subentro va comunicato e talvolta autorizzato, e i tempi non sono immediati. Programmare il conferimento a ridosso di una scadenza di gara o di una liquidazione di [SAL](/glossario#sal) è un errore di calendario che costa più della complessità tecnica dell'operazione." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Testo unico imposte sui redditi", ref: "Art. 176", principle: "I conferimenti di aziende effettuati tra soggetti residenti nell'esercizio di imprese commerciali non costituiscono realizzo di plusvalenze o minusvalenze; il soggetto conferitario subentra nella posizione di quello conferente in ordine agli elementi dell'attivo e del passivo dell'azienda.", impact: "La neutralità è il presupposto che rende il passaggio praticabile: nessuna imposta sui plusvalori che nessuno ha realizzato." },
      { court: "Codice civile", ref: "Art. 2560", principle: "Nel trasferimento di un'azienda commerciale risponde dei debiti inerenti all'esercizio dell'azienda ceduta anteriori al trasferimento anche l'acquirente, se essi risultano dai libri contabili obbligatori.", impact: "I debiti risultanti dalle scritture seguono l'azienda: la loro ricognizione è parte dell'operazione, non un dettaglio." },
      { court: "Codice civile", ref: "Art. 2465", principle: "Chi conferisce beni in natura o crediti in una società a responsabilità limitata deve presentare la relazione giurata di un revisore legale o di una società di revisione legale che ne attesti il valore.", impact: "La perizia non è una formalità: è il documento che sostiene il capitale sociale e il valore attribuito all'azienda." },
    ] },

    { type: "h2", text: "La perizia e il valore da attribuire", id: "perizia" },
    { type: "p", text: "Il conferimento di beni in natura in una S.r.l. richiede una relazione giurata che attesti il valore di quanto conferito. Nel caso di un'azienda edile, la perizia deve valutare un complesso: mezzi e attrezzature, magazzino, crediti, commesse in corso, debiti, avviamento." },
    { type: "p", text: "La valutazione delle commesse in corso è la parte più delicata e quella in cui questa guida si collega al resto del sito. Un'azienda edile conferita a metà di un ciclo di lavori porta con sé [lavori in corso su ordinazione](/guide/bilancio-impresa-edile-lavori-in-corso) il cui valore dipende dall'avanzamento e dai costi a finire. Se quei dati non esistono, la perizia si costruisce su stime deboli e il capitale sociale poggia su un valore fragile." },
    { type: "p", text: "L'avviamento merita una nota. In una ditta individuale edile una quota rilevante del valore è legata alla persona del titolare: le relazioni con i committenti, la conoscenza dei prezzi, la reputazione locale. È avviamento che si trasferisce solo se il titolare continua a operare nella società — cosa che nel conferimento avviene per definizione, ma che va tenuta presente nella valutazione." },
    { type: "p", text: "Un'ultima avvertenza pratica: il valore attribuito determina il capitale sociale della S.r.l., e il capitale sociale incide su come la società verrà letta da banche e organismi di attestazione. Sottodimensionarlo per prudenza può costare in termini di merito creditizio e di requisiti di qualificazione." },

    { type: "figure", slot: "trasformazione-ditta-individuale-srl-2", alt: "Perizia di stima dell'azienda con inventario dei mezzi e prospetto delle commesse", caption: "La perizia valuta anche le commesse in corso: senza avanzamento e costi a finire, poggia su stime deboli." },

    { type: "h2", text: "Il momento giusto", id: "momento" },
    { type: "p", text: "La risposta breve è: prima di quanto si pensi. Le ragioni sono tre e agiscono tutte nella stessa direzione." },
    { type: "ol", items: [
      "Le responsabilità maturate in forma individuale restano sulla persona: ogni anno in più ne accumula, e il conferimento non le sposta",
      "Il conferimento è più semplice quando l'azienda è piccola: meno contratti da far subentrare, meno rapporti da comunicare, meno debiti da ricognire",
      "La qualificazione e il rapporto bancario si costruiscono sulla società: iniziare presto significa che la serie storica di bilanci matura sul soggetto giusto",
    ] },
    { type: "p", text: "Il terzo punto è quello che l'imprenditore sottovaluta di più. Attestazione SOA e [rating bancario](/guide/rating-bancario-centrale-rischi-edilizia) si fondano su bilanci pluriennali: una società costituita oggi parte da zero come storia, anche se l'attività va avanti da quindici anni. Chi rinvia il passaggio rinvia anche l'inizio di quell'orologio." },
    { type: "p", text: "Va infine considerato il collegamento con la [protezione patrimoniale](/guide/protezione-patrimoniale-imprenditore-edile) descritta nelle altre guide: la S.r.l. è il primo mattone. Sopra ci si può costruire una holding, separare gli immobili, pianificare il passaggio ai figli. Su una ditta individuale nessuna di queste cose è possibile." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Artigiano edile con impresa individuale, ricavi per 480.000 euro, tre dipendenti, un escavatore e un autocarro di proprietà, due cantieri in corso e un capannone di proprietà personale utilizzato come deposito. Preleva tutto l'utile per il tenore di vita familiare." },
    { type: "p", text: "Il confronto fiscale puro tra individuale e S.r.l. in questa configurazione non è dirimente: prelevando tutto, il vantaggio societario è modesto. Ma il quadro del rischio lo è: con tre dipendenti in cantiere e opere consegnate ogni anno, l'esposizione personale del titolare è totale, e comprende la casa di abitazione." },
    { type: "p", text: "L'operazione consiste nel conferimento dell'azienda in una S.r.l. di nuova costituzione, in regime di neutralità: mezzi, magazzino, crediti, debiti e commesse in corso passano alla società, e il titolare riceve le quote. Il capannone di proprietà personale resta invece fuori — non è nell'azienda — e viene concesso in locazione alla società a canone di mercato: è già la separazione tra immobile e operativa descritta nella guida sulla scissione, ottenuta qui semplicemente non conferendolo." },
    { type: "p", text: "I passaggi che richiedono più tempo non sono fiscali. La perizia deve valutare le due commesse in corso, e per farlo servono avanzamento e [costi a finire](/glossario#costi-a-finire) che l'impresa non aveva mai formalizzato. Il subentro nei contratti va comunicato ai committenti. Il rapporto bancario va ricostituito sul nuovo soggetto, e le fideiussioni personali del titolare restano — perché la banca non le libera automaticamente." },
    { type: "note", text: "L'errore da non fare: pensare che costituire la S.r.l. metta al riparo dalle responsabilità già maturate. Le opere consegnate come impresa individuale continuano a rispondere sul patrimonio della persona. La società protegge da quello che accade dopo, ed è la ragione per cui va fatta presto. Lo scenario è illustrativo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "È davvero una trasformazione?", a: "No, tecnicamente. La trasformazione opera tra società. Dalla ditta individuale si passa con il conferimento dell'azienda in una società, oppure con la cessione. Il conferimento è la strada ordinaria perché avviene in neutralità fiscale e mantiene la titolarità in capo all'imprenditore, attraverso le quote." },
      { q: "Il conferimento fa pagare imposte?", a: "Non sui plusvalori: l'art. 176 del TUIR prevede la neutralità, con continuità dei valori fiscalmente riconosciuti in capo alla conferitaria. L'imposta di registro è in misura fissa. Restano i costi dell'operazione: atto, perizia, adempimenti." },
      { q: "I debiti passano alla società?", a: "Quelli risultanti dai libri contabili obbligatori sì, secondo l'art. 2560 del codice civile; per i debiti tributari opera una responsabilità entro i limiti previsti, con l'effetto liberatorio del certificato sui carichi pendenti. La ricognizione dei debiti è parte integrante dell'operazione." },
      { q: "E i miei dipendenti?", a: "I rapporti proseguono con la società e i lavoratori conservano tutti i diritti maturati, con responsabilità solidale nei limiti di legge. Non è una riassunzione: è una continuazione, con gli adempimenti di comunicazione previsti." },
      { q: "La S.r.l. mi protegge dai contenziosi sulle opere già consegnate?", a: "No. Le responsabilità sorte quando operavi come impresa individuale restano in capo alla persona fisica: il conferimento non le trasferisce né le estingue. La società protegge da ciò che accade dopo, ed è il motivo per cui conviene farla presto." },
      { q: "Cosa serve per la perizia?", a: "L'inventario dei beni, la situazione contabile, l'elenco di crediti e debiti e la valutazione delle commesse in corso con avanzamento e costi a finire. È quest'ultimo il dato che spesso manca: senza, la perizia poggia su stime deboli e il capitale sociale ne risente." },
      { q: "Le fideiussioni personali si estinguono?", a: "No, restano efficaci fino alla liberazione espressa da parte del creditore. Il passaggio alla società non le tocca: vanno rinegoziate separatamente con gli istituti, ed è un percorso che richiede tempo e bilanci della nuova società." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se operi come impresa individuale con dipendenti e cantieri aperti, l'esposizione personale è totale e cresce ogni anno. Mandaci l'ultimo bilancio, l'elenco dei beni strumentali, i contratti in corso e la situazione debitoria dalla pagina contatti: verifichiamo la fattibilità del conferimento, cosa segue l'azienda e cosa resta a te. Per il contesto leggi le guide su protezione patrimoniale, holding e attestazione SOA." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa vigente." },
  ],
};
