import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "scissione-immobiliare-impresa-edile",
  title: "Scissione immobiliare: separare il capannone dall'impresa che apre i cantieri",
  excerpt:
    "Scissione, conferimento o assegnazione ai soci: tre strade con carichi fiscali molto diversi. La neutralità dell'art. 173 TUIR, il presidio dell'abuso del diritto, il consenso della banca sui mutui e il canone di locazione infragruppo.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-gold-dark to-gold",
  keywords: [
    "scissione immobiliare srl",
    "separare immobili da società operativa",
    "scissione neutralità fiscale art 173",
    "conferimento immobile in società",
    "assegnazione beni ai soci",
    "scissione abuso del diritto",
  ],
  intro:
    "Separare gli immobili dalla società che apre i cantieri è l'intervento di protezione patrimoniale più efficace per un'impresa edile. Le strade sono tre — scissione, conferimento, assegnazione ai soci — e hanno carichi fiscali molto diversi: le prime due possono avvenire in neutralità, la terza realizza plusvalenze imponibili. La scelta dipende da mutui, garanzie e ragioni economiche.",
};

export const seo = {
  seoTitle: "Scissione Immobiliare: Separare Capannone e Cantieri",
  metaDescription:
    "Scissione, conferimento o assegnazione: tre strade a confronto, la neutralità dell'art. 173 TUIR e il presidio dell'abuso del diritto.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Perché farlo: gli immobili nella società che apre i cantieri sono esposti a responsabilità per danni, infortuni, vizi dell'opera e solidarietà negli appalti. Le strade: scissione (art. 173 TUIR, neutrale), conferimento (neutrale al ricorrere dei requisiti), assegnazione ai soci (realizzativa, con plusvalenze imponibili). I vincoli pratici: consenso della banca sui mutui ipotecari, liberazione dei garanti, revisione degli affidamenti. Dopo l'operazione: locazione a canone di mercato, con perizia a supporto." },

    { type: "h2", text: "Perché gli immobili non devono stare nell'operativa", id: "perche" },
    { type: "p", text: "Una società di costruzioni risponde di danni a terzi, infortuni sul lavoro, vizi e difformità dell'opera per anni dopo la consegna, obbligazioni retributive e contributive in solido con i subappaltatori, penali per ritardo. È un profilo di rischio che non ha molti equivalenti nell'economia italiana." },
    { type: "p", text: "Se il capannone con gli uffici, gli appartamenti invenduti di una vecchia iniziativa e i terreni acquistati negli anni buoni stanno dentro quella stessa società, sono tutti esposti a quel rischio. Un solo evento significativo — un infortunio grave, un contenzioso su vizi di un edificio consegnato cinque anni prima — può assorbire il patrimonio accumulato in vent'anni di attività." },
    { type: "p", text: "La separazione non serve a sottrarre garanzie ai creditori esistenti: questo sarebbe un atto revocabile e, in certe condizioni, penalmente rilevante. Serve a impedire che rischi futuri e per definizione imprevedibili travolgano un patrimonio che con quei rischi non ha nulla a che fare. Ed è per questo che va fatta quando l'azienda è in salute." },

    { type: "h2", text: "Le tre strade a confronto", id: "strade" },
    { type: "table", headers: ["Operazione", "Effetto fiscale", "Quando ha senso"], rows: [
      ["Scissione parziale (art. 173 TUIR)", "Neutrale: nessuna plusvalenza, valori fiscali trasferiti alla beneficiaria", "Quando si separa un compendio di beni mantenendo la stessa compagine sociale"],
      ["Conferimento d'azienda o di ramo", "Neutrale al ricorrere dei requisiti, con continuità dei valori", "Quando il compendio ha natura di ramo d'azienda organizzato"],
      ["Conferimento di singolo immobile", "Realizzativo: emerge la plusvalenza sul valore di conferimento", "Raramente conveniente se l'immobile ha plusvalori latenti significativi"],
      ["Assegnazione ai soci", "Realizzativa: plusvalenza in capo alla società e tassazione in capo ai soci", "Solo se l'obiettivo è portare il bene alla persona fisica e i plusvalori sono contenuti"],
      ["Cessione a società terza", "Realizzativa, con imposte indirette sul trasferimento", "Quando c'è un reale acquirente esterno"],
    ] },
    { type: "p", text: "Nella grande maggioranza dei casi che incontriamo la strada corretta è la scissione parziale proporzionale: la società operativa trasferisce il compendio immobiliare a una beneficiaria di nuova costituzione, i cui soci sono gli stessi e nelle stesse proporzioni. L'operazione è fiscalmente neutrale ai sensi dell'art. 173 del TUIR: non emergono plusvalenze e i valori fiscalmente riconosciuti si trasferiscono senza salti d'imposta." },
    { type: "p", text: "La scissione non proporzionale — con soci diversi nelle due società risultanti — è lo strumento adatto quando l'obiettivo è anche separare compagini sociali, per esempio in una divisione tra fratelli. Ha una complessità maggiore e richiede attenzione ai profili di equivalenza dei valori attribuiti." },

    { type: "figure", slot: "scissione-immobiliare-impresa-edile-1", alt: "Capannone industriale con uffici di un'impresa di costruzioni", caption: "Il capannone dentro la società che apre i cantieri è l'asset più esposto e quello costato più tempo a costruire." },

    { type: "h2", text: "Il presidio dell'abuso del diritto", id: "abuso" },
    { type: "p", text: "La neutralità fiscale non è un salvacondotto. L'operazione deve avere ragioni economiche extrafiscali reali e documentabili, altrimenti è contestabile come abuso del diritto ai sensi dell'art. 10-bis della legge 212/2000. La norma stessa, però, afferma che resta ferma la libertà di scegliere tra operazioni comportanti un diverso carico fiscale, quando la scelta ha una ragione." },
    { type: "p", text: "Le ragioni che reggono, in edilizia, sono concrete e facili da documentare: separare il patrimonio immobiliare dal rischio d'impresa, preparare l'ingresso dei figli o di un socio finanziario in una sola delle due attività, riorganizzare un gruppo cresciuto in modo disordinato, rendere l'immobiliare autonomamente finanziabile con garanzie proprie." },
    { type: "p", text: "Vanno scritte quando l'operazione si fa: nella relazione dell'organo amministrativo, nei verbali assembleari, nella perizia di stima. Ricostruirle a posteriori è possibile ma parte in svantaggio. E vanno accompagnate da coerenza sostanziale: se dopo la scissione l'immobiliare non stipula contratti, non incassa canoni e non ha alcuna attività, la ricostruzione delle ragioni economiche perde credibilità." },
    { type: "p", text: "Un profilo che merita attenzione è la scissione seguita a breve dalla cessione delle quote di una delle due società. Non è di per sé abusiva — la prassi ha riconosciuto che la riorganizzazione preventiva a una cessione può avere ragioni proprie — ma è una sequenza che richiede una documentazione particolarmente solida e, quando i valori sono rilevanti, la valutazione di un interpello preventivo." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Testo unico imposte sui redditi", ref: "Art. 173 TUIR", principle: "La scissione di società non dà luogo a realizzo né a distribuzione di plusvalenze e minusvalenze dei beni della società scissa; i valori fiscalmente riconosciuti proseguono in capo alle beneficiarie.", impact: "È la base della neutralità: separare gli immobili non comporta il pagamento di imposte sui plusvalori latenti." },
      { court: "Statuto del contribuente", ref: "Art. 10-bis L. 212/2000", principle: "Configurano abuso del diritto le operazioni prive di sostanza economica che realizzano essenzialmente vantaggi fiscali indebiti; resta ferma la libertà di scelta tra operazioni comportanti un diverso carico fiscale.", impact: "La neutralità regge se le ragioni economiche esistono e sono documentate contestualmente all'operazione." },
      { court: "Codice civile", ref: "Art. 2506-bis e seguenti", principle: "Il progetto di scissione è depositato e iscritto, e i creditori sociali possono fare opposizione entro il termine di legge; le società partecipanti rispondono nei limiti previsti delle obbligazioni non soddisfatte.", impact: "I creditori esistenti conservano tutele: la scissione non li pregiudica, e questo è ciò che la rende un'operazione legittima." },
    ] },

    { type: "h2", text: "I vincoli pratici che decidono la fattibilità", id: "vincoli" },
    { type: "ol", items: [
      "Mutui ipotecari sull'immobile: il trasferimento richiede il coinvolgimento della banca, che valuta il merito creditizio della beneficiaria. È il passaggio che allunga di più i tempi",
      "Fideiussioni personali dei soci: restano efficaci salvo liberazione espressa, e vanno rinegoziate separatamente",
      "Affidamenti della società operativa: possono essere rivisti quando il patrimonio immobiliare esce dal bilancio, riducendo le garanzie disponibili",
      "Attestazione SOA e requisiti di qualificazione: verificare che la riduzione del patrimonio netto dell'operativa non incida sui requisiti economico-finanziari",
      "Contratti in corso con clausole di change of control o vincoli patrimoniali: vanno esaminati prima, non dopo",
      "Opposizione dei creditori: il codice civile prevede un termine entro il quale i creditori anteriori possono opporsi, e va messo in conto nel cronoprogramma",
    ] },
    { type: "p", text: "Il quarto punto è specifico dell'edilizia e viene spesso scoperto tardi. I requisiti economico-finanziari per la qualificazione SOA e per la partecipazione alle gare si basano anche su grandezze patrimoniali: trasferire il capannone alla beneficiaria riduce il patrimonio netto dell'operativa, e questo può incidere sulle classifiche di qualificazione. Va verificato prima di redigere il progetto di scissione." },

    { type: "h2", text: "Dopo l'operazione: far vivere la struttura", id: "dopo" },
    { type: "p", text: "La scissione non finisce con l'atto notarile. L'immobiliare deve concedere in locazione l'immobile all'operativa, con un contratto scritto e registrato e un canone di mercato supportato da una perizia o da riferimenti oggettivi verificabili. Un canone fuori mercato tra parti correlate è una delle contestazioni più semplici da muovere in verifica, in entrambe le direzioni." },
    { type: "p", text: "L'immobiliare deve inoltre avere una vita societaria reale: assemblee, decisioni sugli investimenti, un conto corrente movimentato con logica, la gestione effettiva del patrimonio. Va anche verificata la sua posizione rispetto alla disciplina delle società non operative, che colpisce proprio le società che detengono beni senza svolgere attività adeguata." },
    { type: "p", text: "Sopra le due società si colloca poi, di norma, una holding: è il passaggio successivo, che consente di far salire gli utili dell'operativa senza passare dalla tassazione personale e di avere una regia unitaria sul gruppo. Non è obbligatorio farlo contestualmente, ma è bene disegnare l'assetto finale fin dall'inizio per non ripetere operazioni straordinarie." },

    { type: "figure", slot: "scissione-immobiliare-impresa-edile-2", alt: "Contratto di locazione infragruppo con perizia di stima allegata", caption: "Il canone di locazione tra società correlate va supportato: è una delle contestazioni più semplici da muovere." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "S.r.l. di costruzioni con patrimonio netto di 1,4 milioni, due soci al 50%. Nell'attivo figurano il capannone con uffici, valore contabile 780.000 euro e valore di mercato stimato 1,1 milioni, gravato da mutuo residuo di 220.000 euro, e tre appartamenti invenduti per 340.000 euro di valore contabile." },
    { type: "p", text: "L'operazione scelta è una scissione parziale proporzionale a favore di una S.r.l. immobiliare di nuova costituzione, con trasferimento del capannone, degli appartamenti e del mutuo. In regime di neutralità non emergono plusvalenze: il plusvalore latente di circa 320.000 euro sul capannone non viene tassato, e i valori fiscali proseguono in capo alla beneficiaria." },
    { type: "p", text: "I passaggi che hanno richiesto più tempo non sono stati quelli fiscali. La banca ha valutato il trasferimento del mutuo alla beneficiaria e ha richiesto il mantenimento delle garanzie personali dei soci. La verifica sui requisiti SOA ha mostrato che la riduzione del patrimonio netto dell'operativa restava compatibile con la classifica posseduta, ma con margini ridotti: è stato deciso di lasciare in capo all'operativa una quota di liquidità superiore a quella inizialmente ipotizzata." },
    { type: "note", text: "L'errore da non fare: impostare l'operazione partendo dal risparmio fiscale e cercare le ragioni economiche dopo. In edilizia le ragioni economiche esistono e sono forti — il rischio di cantiere è reale e documentabile — ma vanno scritte nella relazione degli amministratori quando l'operazione si delibera. Lo scenario è illustrativo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "La scissione fa pagare imposte sulle plusvalenze?", a: "No. L'art. 173 del TUIR prevede la neutralità fiscale: la scissione non dà luogo a realizzo di plusvalenze o minusvalenze, e i valori fiscalmente riconosciuti proseguono in capo alla società beneficiaria. È la ragione per cui è preferibile all'assegnazione ai soci o alla vendita." },
      { q: "Serve il consenso della banca se c'è un mutuo?", a: "Il trasferimento di un immobile ipotecato richiede il coinvolgimento dell'istituto, che valuta il merito creditizio della beneficiaria e le garanzie disponibili. È il passaggio che allunga di più i tempi dell'operazione e va affrontato all'inizio, non alla fine." },
      { q: "La scissione mi protegge dai debiti già esistenti?", a: "No, e non deve. Il codice civile riconosce ai creditori anteriori il diritto di opposizione e prevede forme di responsabilità delle società partecipanti per le obbligazioni non soddisfatte. La scissione protegge da rischi futuri, non sottrae garanzie a creditori attuali." },
      { q: "Posso fare la scissione e poi vendere le quote?", a: "Non è di per sé abusivo, ma è una sequenza che richiede una documentazione particolarmente solida delle ragioni economiche. Su valori rilevanti è ragionevole valutare un interpello preventivo all'Agenzia delle Entrate prima di procedere." },
      { q: "Quale canone di locazione devo applicare all'operativa?", a: "Un canone di mercato, supportato da perizia o da riferimenti oggettivi verificabili, con contratto scritto e registrato. Un canone troppo basso o troppo alto tra parti correlate è contestabile in entrambe le direzioni: è uno dei rilievi più semplici da muovere in sede di verifica." },
      { q: "La scissione incide sulla mia qualificazione SOA?", a: "Può incidere, perché i requisiti economico-finanziari considerano anche grandezze patrimoniali e il trasferimento dell'immobile riduce il patrimonio netto dell'operativa. Va verificato prima di redigere il progetto, non dopo l'iscrizione dell'atto." },
      { q: "Quanto dura l'operazione?", a: "I tempi tecnici societari comprendono il deposito del progetto e il termine per l'opposizione dei creditori. Nella pratica, però, la variabile che determina la durata complessiva è il negoziato con la banca sui mutui e sulle garanzie, che può richiedere mesi." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Il primo passo non è scegliere l'operazione: è fotografare cosa c'è oggi nella società che apre i cantieri e con quali vincoli. Mandaci visura, ultimo bilancio, elenco degli immobili con eventuali ipoteche e l'elenco delle garanzie personali in essere: ti diciamo quale strada è praticabile nel tuo caso, in quali tempi e con quali passaggi bancari. Per il disegno complessivo leggi le guide su holding e protezione patrimoniale." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
