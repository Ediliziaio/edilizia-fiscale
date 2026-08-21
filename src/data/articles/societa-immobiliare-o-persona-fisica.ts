import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "societa-immobiliare-o-persona-fisica",
  title: "Immobili: meglio intestarli alla società o a te personalmente?",
  excerpt:
    "Capannone, uffici, appartamenti e terreni: persona fisica, società semplice, immobiliare o holding. Deduzioni, IMU, plusvalenze, successione e disciplina delle società non operative a confronto, con il criterio che vale in edilizia.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-brand-dark to-brand",
  keywords: [
    "intestare immobili a società o persona fisica",
    "società immobiliare vantaggi",
    "società semplice immobiliare",
    "società non operative di comodo",
    "immobili strumentali deducibilità",
    "tassazione immobili società",
  ],
  intro:
    "Non esiste una risposta valida per tutti gli immobili: dipende dall'uso. Quelli strumentali all'attività stanno bene in una società immobiliare che li loca all'operativa; quelli di godimento personale raramente hanno senso in società, perché generano costi indeducibili, fringe benefit e il rischio della disciplina sulle società non operative. In edilizia vale però una regola che precede tutte: mai nell'operativa.",
};

export const seo = {
  seoTitle: "Immobili: Società o Persona Fisica? Il Confronto",
  metaDescription:
    "Persona fisica, società semplice, immobiliare o holding: deduzioni, IMU, plusvalenze e società non operative a confronto per l'imprenditore edile.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — La regola che precede tutte, in edilizia: gli immobili non stanno nella società che apre i cantieri. Gli strumentali: meglio in una immobiliare che li loca all'operativa, con deducibilità di ammortamenti, interessi e manutenzioni. Quelli di godimento personale: raramente in società, per fringe benefit, indeducibilità e rischio società non operative. La società semplice: veicolo di detenzione e passaggio generazionale, non di attività. Il criterio decisivo: l'uso effettivo, non il nome del contenitore." },

    { type: "h2", text: "La domanda giusta: a cosa serve l'immobile?", id: "domanda" },
    { type: "p", text: "La scelta del contenitore non si fa in astratto ma per destinazione. Un capannone in cui l'impresa lavora, un ufficio locato a terzi, un appartamento in cui vive la famiglia dell'imprenditore e un terreno tenuto per una futura iniziativa hanno esigenze diverse e regimi diversi. Trattarli allo stesso modo è l'errore di partenza." },
    { type: "table", headers: ["Tipo di immobile", "Contenitore preferibile", "Perché"], rows: [
      ["Capannone e uffici usati dall'operativa", "Immobiliare o holding", "Deducibilità di ammortamenti, interessi e manutenzioni; fuori dal rischio dei cantieri"],
      ["Immobili locati a terzi", "Immobiliare", "Attività economica reale, deducibilità dei costi, gestione unitaria"],
      ["Immobili destinati alla vendita", "Società di costruzione o immobiliare di sviluppo", "Sono merce: il regime fiscale e IVA è quello dell'attività"],
      ["Abitazione della famiglia", "Persona fisica", "In società genera fringe benefit e costi indeducibili"],
      ["Terreni per iniziative future", "Immobiliare o società semplice", "Dipende dall'orizzonte e dalla destinazione prevista"],
      ["Patrimonio da trasmettere ai figli", "Società semplice o holding", "Facilita il frazionamento delle quote e la governance familiare"],
    ] },
    { type: "p", text: "In edilizia vale però una regola che precede tutte le altre: gli immobili non stanno nella società che apre i cantieri. È l'asset che l'imprenditore ha impiegato più tempo a costruire ed è quello più esposto, perché la società operativa risponde di danni, infortuni, vizi dell'opera e obbligazioni solidali negli appalti." },

    { type: "h2", text: "Cosa si deduce in società e cosa no", id: "deduzioni" },
    { type: "p", text: "L'intestazione societaria consente di dedurre ammortamenti, interessi passivi sui finanziamenti, spese di manutenzione e gestione, e di far transitare il valore all'interno del gruppo senza passare dal patrimonio personale. Ma la deducibilità presuppone la strumentalità o la destinazione all'attività." },
    { type: "p", text: "Gli immobili patrimoniali — quelli non strumentali né destinati alla vendita — hanno una disciplina meno favorevole: concorrono al reddito secondo criteri propri e i relativi costi hanno una deducibilità limitata. Un appartamento tenuto a disposizione dentro una S.r.l. non produce le deduzioni che l'imprenditore si aspetta, e produce invece costi di gestione societaria." },
    { type: "p", text: "L'immobile concesso in uso ai soci o agli amministratori merita attenzione a parte: genera un reddito in capo all'utilizzatore e una limitazione della deducibilità in capo alla società, con una disciplina antielusiva costruita proprio per scoraggiare l'intestazione societaria dei beni di godimento personale." },

    { type: "figure", slot: "societa-immobiliare-o-persona-fisica-1", alt: "Capannone e appartamenti: immobili con destinazioni diverse", caption: "La scelta del contenitore si fa per destinazione: capannone, immobile locato e abitazione non seguono la stessa logica." },

    { type: "h2", text: "Il rischio delle società non operative", id: "non-operative" },
    { type: "p", text: "Una società che detiene immobili senza svolgere un'attività adeguata rischia di ricadere nella disciplina delle società non operative, che opera attraverso un test di ricavi minimi presunti calcolati applicando percentuali al valore degli asset. Chi non supera il test subisce effetti pesanti: reddito minimo presunto da dichiarare, limiti all'utilizzo del credito IVA e maggiorazione dell'aliquota IRES." },
    { type: "p", text: "Per un'immobiliare che loca il capannone all'operativa, il test si supera se il canone è congruo rispetto al valore dell'immobile. Ecco perché il canone di mercato non è solo una questione di prezzi di trasferimento tra parti correlate: è anche la condizione per non ricadere nella disciplina delle non operative." },
    { type: "p", text: "La disciplina prevede cause di esclusione e di disapplicazione, e la possibilità di dimostrare le situazioni oggettive che hanno impedito il conseguimento dei ricavi minimi. Sono strade percorribili, ma richiedono una documentazione preparata per tempo: un immobile sfitto per lavori di ristrutturazione documentati è una situazione difendibile, un immobile sfitto senza spiegazione no." },

    { type: "h2", text: "La società semplice: un veicolo diverso", id: "societa-semplice" },
    { type: "p", text: "La società semplice non può svolgere attività commerciale e non è quindi un contenitore per l'attività immobiliare di impresa. È però un veicolo di detenzione e di governo del patrimonio che, negli assetti familiari, ha caratteristiche interessanti." },
    { type: "p", text: "I redditi degli immobili detenuti conservano la loro natura fondiaria e sono imputati per trasparenza ai soci in proporzione alle quote; non c'è obbligo di tenuta della contabilità ordinaria né di deposito del bilancio, e la struttura ha costi di gestione contenuti. È inoltre un contenitore che si presta al frazionamento delle quote tra i figli e alla regolazione statutaria della governance familiare." },
    { type: "p", text: "I limiti sono altrettanto chiari: nessuna limitazione della responsabilità dei soci per le obbligazioni sociali, nessuna deducibilità dei costi tipica del reddito d'impresa, impossibilità di svolgere attività commerciale. Va valutata per quello che è: uno strumento di detenzione e di trasmissione, non di protezione da responsabilità d'impresa." },

    { type: "caselaw", title: "Riferimenti utili", items: [
      { court: "Testo unico imposte sui redditi", ref: "Art. 43 TUIR", principle: "Sono strumentali gli immobili utilizzati esclusivamente per l'esercizio dell'impresa e quelli che per le loro caratteristiche non sono suscettibili di diversa utilizzazione senza radicali trasformazioni.", impact: "La strumentalità è il presupposto della deducibilità piena: dipende dall'uso effettivo, non dall'intestazione." },
      { court: "Disciplina delle società non operative", principle: "Le società che non superano il test dei ricavi minimi presunti sono soggette a un reddito minimo, a limitazioni nell'utilizzo del credito IVA e a una maggiorazione dell'aliquota IRES, salvo cause di esclusione o disapplicazione.", impact: "Un'immobiliare che loca a canone non congruo rischia di ricadere nella disciplina: il canone di mercato è anche una difesa." },
      { court: "Disciplina dei beni concessi in godimento ai soci", principle: "La concessione in godimento di beni sociali a soci o familiari a corrispettivo inferiore al valore di mercato genera reddito in capo all'utilizzatore e limita la deducibilità dei relativi costi in capo alla società.", impact: "Intestare alla società l'abitazione o l'auto di famiglia produce l'effetto opposto a quello sperato." },
    ] },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Imprenditore edile con una S.r.l. operativa, un capannone con uffici di valore 900.000 euro usato dall'impresa, tre appartamenti locati a terzi per complessivi 480.000 euro, l'abitazione di famiglia e un terreno edificabile tenuto per una futura iniziativa. Tutto, tranne l'abitazione, è oggi intestato alla società operativa." },
    { type: "p", text: "L'assetto proposto separa per destinazione. Capannone e appartamenti locati escono dall'operativa con una scissione a favore di una immobiliare, che li gestisce: il capannone viene locato all'operativa a canone di mercato con perizia a supporto, gli appartamenti restano locati a terzi. L'immobiliare così configurata ha un'attività reale e supera agevolmente il test delle società non operative." },
    { type: "p", text: "Il terreno edificabile viene mantenuto nell'immobiliare in attesa della decisione sulla destinazione: se l'iniziativa partirà, sarà conferito o venduto alla società che la realizzerà, con le regole proprie di quell'operazione. L'abitazione di famiglia resta alla persona fisica: portarla in società avrebbe generato un fringe benefit tassabile, costi indeducibili e nessun beneficio." },
    { type: "note", text: "L'errore da non fare: portare in società l'abitazione o la seconda casa pensando di dedurre i costi. È l'operazione che produce più contestazioni con meno vantaggio: reddito imputato all'utilizzatore, costi indeducibili, rischio società non operative e nessuna protezione patrimoniale reale. Lo scenario è illustrativo." },

    { type: "figure", slot: "societa-immobiliare-o-persona-fisica-2", alt: "Contratto di locazione con perizia di congruità del canone", caption: "Il canone di mercato non serve solo ai prezzi di trasferimento: è la condizione per superare il test delle non operative." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Conviene intestare il capannone alla società o a me?", a: "Alla società, ma non a quella che apre i cantieri. Una immobiliare che lo detiene e lo loca all'operativa consente di dedurre ammortamenti, interessi e manutenzioni, e insieme tiene l'immobile fuori dal rischio di responsabilità dell'attività di costruzione." },
      { q: "Posso mettere la mia casa nella S.r.l.?", a: "Tecnicamente sì, ma raramente conviene. L'immobile concesso in godimento a soci o familiari a corrispettivo inferiore al valore di mercato genera reddito in capo all'utilizzatore e limita la deducibilità dei costi in capo alla società, oltre a esporre al rischio delle società non operative." },
      { q: "Che cos'è la disciplina delle società non operative?", a: "È un test che confronta i ricavi effettivi con ricavi minimi presunti calcolati sul valore degli asset. Chi non lo supera subisce un reddito minimo presunto, limiti all'utilizzo del credito IVA e una maggiorazione dell'aliquota IRES, salvo cause di esclusione o dimostrazione di situazioni oggettive." },
      { q: "Quando conviene una società semplice?", a: "Come veicolo di detenzione e trasmissione del patrimonio familiare, non come contenitore di attività d'impresa. Ha costi di gestione contenuti, redditi imputati per trasparenza ai soci e si presta al frazionamento delle quote tra i figli. Non limita però la responsabilità dei soci." },
      { q: "Che canone devo applicare all'operativa per il capannone?", a: "Un canone di mercato, supportato da perizia o da riferimenti oggettivi, con contratto scritto e registrato. Serve a due scopi: reggere alla verifica sui rapporti tra parti correlate e consentire all'immobiliare di superare il test delle società non operative." },
      { q: "Gli immobili destinati alla vendita dove stanno?", a: "Nella società che svolge l'attività di costruzione o di sviluppo immobiliare, perché per essa sono merce e seguono il regime dell'attività, anche ai fini IVA. Non vanno confusi con gli immobili patrimoniali, che hanno una disciplina diversa e meno favorevole." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Mandaci l'elenco dei tuoi immobili con destinazione d'uso attuale, intestazione, valore e eventuali ipoteche: ti restituiamo lo schema di assetto per destinazione, con i passaggi necessari e il carico fiscale di ciascuna strada. Se l'assetto attuale funziona già, te lo diciamo. Per approfondire leggi le guide su [scissione immobiliare](/guide/scissione-immobiliare-impresa-edile), holding e tassazione della vendita di immobili." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
