import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "consorzi-ati-fiscalita",
  title: "Consorzi e ATI: come funzionano fiscalmente e quando conviene ciascuno",
  excerpt:
    "Il consorzio è un soggetto autonomo che fattura e ribalta ai consorziati; l'ATI non esiste come soggetto e ciascuna impresa fattura per la sua quota. Due meccanismi diversi con effetti opposti su IVA, bilancio e responsabilità.",
  category: "Appalti",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-brand-dark",
  keywords: [
    "consorzio stabile fiscalità",
    "ati raggruppamento temporaneo imprese fatturazione",
    "ribaltamento costi consorziati",
    "differenza consorzio ati",
    "consorzio ordinario partita iva",
    "reverse charge consorzio consorziati",
  ],
  intro:
    "Consorzio e raggruppamento temporaneo servono allo stesso scopo pratico — mettere insieme più imprese per un lavoro che nessuna reggerebbe da sola — ma sono strumenti giuridicamente opposti. Il consorzio è un soggetto autonomo con partita IVA che fattura e poi ribalta ai consorziati. L'ATI non è un soggetto: ogni impresa resta sé stessa e fattura la propria quota.",
};

export const seo = {
  seoTitle: "Consorzi e ATI: Fiscalità e Quando Conviene Ciascuno",
  metaDescription:
    "Il consorzio fattura e ribalta ai consorziati, l'ATI non è un soggetto autonomo: due meccanismi con effetti opposti su IVA, bilancio e responsabilità.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il consorzio: soggetto giuridico autonomo con partita IVA. Assume il lavoro, fattura alla stazione appaltante e ribalta i costi ai consorziati esecutori, che fatturano al consorzio. Il consorzio stabile (art. 65 D.lgs. 36/2023) cumula i requisiti delle consorziate ai fini della qualificazione. L'ATI: non è un soggetto autonomo né un centro di imputazione fiscale. La mandataria ha rappresentanza, ma ciascuna impresa fattura la propria quota di lavori. La responsabilità: solidale verso la stazione appaltante in entrambi i casi, con differenze nell'ATI verticale." },

    { type: "h2", text: "Due strumenti che sembrano uguali e non lo sono", id: "due-strumenti" },
    { type: "p", text: "L'esigenza è la stessa: un appalto che richiede categorie o importi che la singola impresa non copre. La risposta dell'ordinamento è duplice, e la scelta tra le due ha conseguenze che durano anni." },
    { type: "p", text: "Il consorzio è un ente: nasce con un contratto, ha un fondo consortile, si iscrive al registro delle imprese, ha una partita IVA e redige un proprio bilancio. Quando partecipa a una gara, il contratto lo firma il consorzio; quando emette fattura, la emette il consorzio. Le imprese consorziate eseguono i lavori e fatturano al consorzio, non al committente." },
    { type: "p", text: "Il raggruppamento temporaneo di imprese, che tutti chiamano ATI, non è nulla di tutto questo. È un rapporto di mandato collettivo: le imprese conferiscono mandato a una di esse, la mandataria, che le rappresenta verso la stazione appaltante. Ma il raggruppamento non ha personalità, non ha partita IVA e non redige bilancio. Ciascuna impresa resta un soggetto autonomo e, sul piano fiscale, fattura per quello che ha eseguito." },
    { type: "p", text: "La differenza si vede meglio guardando cosa resta dopo. Sciolto il raggruppamento, non resta niente: era un contratto per quel lavoro. Il consorzio invece continua a esistere, mantiene i requisiti che ha maturato e può presentarsi alla gara successiva. È la ragione per cui il consorzio è uno strumento strutturale e l'ATI uno strumento occasionale." },

    { type: "figure", slot: "consorzi-ati-fiscalita-1", alt: "Schema del flusso di fatturazione in un consorzio e in un raggruppamento temporaneo", caption: "Nel consorzio la fattura al committente è una sola. Nell'ATI sono tante quante le imprese." },

    { type: "h2", text: "Il confronto, voce per voce", id: "confronto" },
    { type: "table", headers: ["Aspetto", "Consorzio", "ATI"], rows: [
      ["Soggettività", "Ente autonomo con partita IVA e bilancio proprio", "Nessuna: è un mandato collettivo tra imprese"],
      ["Chi firma il contratto", "Il consorzio", "La mandataria, in nome e per conto di tutte"],
      ["Chi fattura al committente", "Il consorzio, per l'intero", "Ciascuna impresa per la propria quota, o la mandataria per tutte secondo l'assetto scelto"],
      ["Flusso interno", "I consorziati esecutori fatturano al consorzio", "Nessun flusso interno se ciascuno fattura direttamente"],
      ["Qualificazione", "Il consorzio stabile cumula i requisiti delle consorziate", "I requisiti si sommano secondo le quote, con i minimi previsti per la mandataria"],
      ["Durata", "Struttura stabile, sopravvive al singolo appalto", "Occasionale: si scioglie con la conclusione dei lavori"],
      ["Costi di gestione", "Bilancio, adempimenti, organi, contribuzione consortile", "Nessun costo strutturale ricorrente"],
      ["Responsabilità verso la stazione appaltante", "Del consorzio, con responsabilità solidale delle consorziate esecutrici", "Solidale nell'ATI orizzontale; nella verticale ciascuna risponde delle proprie lavorazioni"],
    ] },
    { type: "p", text: "L'ultima riga contiene la distinzione più fraintesa. Nel raggruppamento orizzontale le imprese eseguono la stessa tipologia di lavori dividendosene la quantità, e rispondono in solido per l'intero. Nel raggruppamento verticale la mandataria esegue la categoria prevalente e le mandanti le categorie scorporabili, e la responsabilità della mandante è limitata alle lavorazioni di sua competenza — restando la mandataria responsabile per l'intera opera." },
    { type: "p", text: "È una differenza che va decisa prima e scritta nell'atto costitutivo, non ricostruita quando qualcosa va storto. In un raggruppamento misto le due logiche coesistono nello stesso contratto, e serve chiarezza su quale lavorazione ricade in quale regime." },

    { type: "h2", text: "Il ribaltamento nel consorzio: come funziona davvero", id: "ribaltamento" },
    { type: "p", text: "È il meccanismo che genera più errori contabili, perché sembra semplice e ha diverse varianti. Lo schema base: il consorzio assume il lavoro, emette fattura alla stazione appaltante per l'intero corrispettivo, e riceve dalle consorziate esecutrici le fatture per i lavori che hanno realizzato." },
    { type: "p", text: "Nella pratica consortile classica il consorzio opera senza margine: ribalta ai consorziati l'intero corrispettivo al netto delle spese di funzionamento, e il suo conto economico chiude sostanzialmente a pareggio. È coerente con la natura mutualistica dello strumento, ma richiede che lo statuto e i rapporti interni siano coerenti con quella impostazione." },
    { type: "p", text: "Sul piano IVA il punto delicato è il regime applicabile ai due passaggi. Le prestazioni rese dalle consorziate al consorzio e quelle rese dal consorzio al committente sono operazioni distinte, ciascuna con la propria qualificazione. Quando l'opera principale ricade in un regime particolare — reverse charge nei rapporti tra imprese del settore costruzioni, oppure scissione dei pagamenti verso la pubblica amministrazione — la prassi ha affrontato il tema del trattamento del ribaltamento interno, e la soluzione va verificata sul caso concreto perché dipende dalla natura delle prestazioni e dalla qualità dei soggetti." },
    { type: "p", text: "L'indicazione operativa che diamo è di trattarlo come una questione da risolvere in fase di costituzione del rapporto, non alla prima fattura: definire per iscritto chi fattura cosa, con quale regime, e con quali documenti di supporto. Un consorzio che decide il regime IVA a lavoro avviato genera rettifiche a catena su tutte le consorziate." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Codice dei contratti pubblici", ref: "Art. 65 D.lgs. 36/2023", principle: "Sono consorzi stabili quelli costituiti tra imprenditori che abbiano stabilito di operare in modo congiunto nel settore dei contratti pubblici per un periodo di tempo non inferiore a cinque anni, istituendo una comune struttura di impresa.", impact: "È la forma che consente il cumulo dei requisiti: non un consorzio qualunque, ma quello con struttura comune e durata minima." },
      { court: "Codice civile", ref: "Art. 2602 e seguenti", principle: "Con il contratto di consorzio più imprenditori istituiscono un'organizzazione comune per lo svolgimento di determinate fasi delle rispettive imprese; il consorzio con attività esterna ha un fondo consortile e obblighi pubblicitari.", impact: "Il consorzio con attività esterna è il soggetto che contratta con i terzi: da qui partita IVA, bilancio e adempimenti." },
      { court: "Codice dei contratti pubblici", ref: "D.lgs. 36/2023, raggruppamenti temporanei", principle: "Nel raggruppamento le imprese conferiscono mandato collettivo speciale con rappresentanza a una di esse, qualificata mandataria; l'offerta comporta la responsabilità solidale verso la stazione appaltante, salvo il regime dei raggruppamenti verticali.", impact: "Il raggruppamento non è un soggetto: il mandato riguarda la rappresentanza, non la fiscalità, che resta di ciascuna impresa." },
    ] },

    { type: "h2", text: "Il consorzio stabile e il cumulo dei requisiti", id: "consorzio-stabile" },
    { type: "p", text: "La ragione principale per cui un gruppo di imprese edili costituisce un consorzio stabile non è fiscale: è la qualificazione. Il consorzio stabile può utilizzare, ai fini della partecipazione alle gare, i requisiti maturati dalle imprese consorziate, secondo le regole di cumulo previste dalla disciplina." },
    { type: "p", text: "In concreto significa che tre imprese con classifica III, singolarmente escluse da un appalto da tre milioni, attraverso il consorzio stabile possono concorrere a lavori che nessuna di loro raggiungerebbe. È un effetto potente e ha un prezzo: il consorzio deve avere una struttura comune reale, una durata non inferiore a cinque anni e un funzionamento effettivo." },
    { type: "p", text: "Il punto su cui insistiamo con i clienti è proprio questo. Un consorzio stabile costituito sulla carta, senza struttura, senza personale, senza una gestione autonoma, è fragile su due fronti insieme: sul fronte della qualificazione, perché la stazione appaltante può contestare l'assenza dei presupposti; e sul fronte fiscale, perché un ente privo di sostanza economica che si limita a far transitare fatture è il profilo che le verifiche guardano per primo." },
    { type: "p", text: "Va aggiunto un elemento organizzativo spesso sottovalutato: il consorzio deve indicare in sede di gara le consorziate per le quali concorre, e quelle imprese non possono partecipare autonomamente alla stessa gara. È un vincolo che va coordinato con la strategia commerciale delle singole imprese, altrimenti si scopre di essersi esclusi da soli." },

    { type: "figure", slot: "consorzi-ati-fiscalita-2", alt: "Atto costitutivo di consorzio stabile con statuto e regolamento interno", caption: "Un consorzio senza struttura reale è fragile due volte: sulla qualificazione e in verifica." },

    { type: "h2", text: "Quando conviene l'uno e quando l'altra", id: "quando" },
    { type: "ol", items: [
      "Lavoro singolo, imprese che non intendono legarsi: ATI. Costo zero, si scioglie a fine lavori, nessun adempimento residuo",
      "Collaborazione ricorrente tra le stesse imprese: consorzio. I costi di struttura si ammortizzano su più appalti e i requisiti si accumulano",
      "Obiettivo di salire di classifica senza crescere per linee interne: consorzio stabile, che consente il cumulo dei requisiti delle consorziate",
      "Categorie diverse e ben separabili, con imprese specializzate: ATI verticale, che limita la responsabilità della mandante alle sue lavorazioni",
      "Stessa categoria da dividere per quantità: ATI orizzontale, con responsabilità solidale per l'intero",
      "Necessità di una struttura che sopravviva ai singoli soci e alle singole gare: consorzio, che è anche uno strumento di continuità aziendale",
    ] },
    { type: "p", text: "La domanda che consigliamo di porsi prima di tutte è temporale: questa collaborazione è per un lavoro o per un modo di lavorare? Se è per un lavoro, l'ATI costa meno e finisce da sola. Se è per un modo di lavorare, il consorzio è l'unico che accumula qualcosa nel tempo — e il tempo, nella qualificazione, è esattamente ciò che serve." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Tre imprese edili di dimensione simile, attive nella stessa provincia, con attestazione OG1 classifica III. Collaborano da anni in raggruppamento temporaneo su appalti che nessuna coprirebbe da sola, costituendo ogni volta un'ATI nuova." },
    { type: "p", text: "Il conto di quel modo di lavorare è meno neutro di quanto sembri. Ogni gara richiede la costituzione di un nuovo raggruppamento, con i suoi atti e i suoi tempi. Soprattutto, ogni ATI si scioglie a fine lavori: i requisiti maturati restano alle singole imprese secondo le quote eseguite, ma nulla si accumula in una struttura comune. Dopo sei anni di collaborazione, le tre imprese hanno ancora tre classifiche III." },
    { type: "p", text: "Con un consorzio stabile la traiettoria cambia. Il consorzio cumula i requisiti delle consorziate e può concorrere a lavori di importo superiore; matura propri certificati di esecuzione; costruisce una struttura che sopravvive alle singole gare. Il prezzo è reale — bilancio, organi, personale, contribuzione, adempimenti — e va confrontato con il valore delle gare a cui si accede." },
    { type: "p", text: "Il criterio di decisione non è quindi il costo del consorzio in assoluto, ma il numero di appalti all'anno in cui le tre imprese si presentano insieme. Sotto una certa frequenza l'ATI resta più efficiente; sopra, i costi di struttura si ammortizzano e ciò che si accumula ha più valore di ciò che si spende." },
    { type: "note", text: "L'errore da non fare: costituire un consorzio stabile per una gara e poi lasciarlo inattivo. Senza struttura comune, senza attività e senza durata effettiva, non regge né alla verifica dei requisiti né a un controllo fiscale — e nel frattempo ha escluso le consorziate dalla partecipazione autonoma. Lo scenario è illustrativo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Che differenza c'è tra consorzio e ATI?", a: "Il consorzio è un soggetto giuridico autonomo, con partita IVA e bilancio, che assume il lavoro e ribalta ai consorziati. L'ATI non è un soggetto: è un mandato collettivo con rappresentanza, in cui ogni impresa resta autonoma anche fiscalmente. Il consorzio sopravvive all'appalto, l'ATI si scioglie con esso." },
      { q: "Chi emette fattura al committente?", a: "Nel consorzio la emette il consorzio, per l'intero corrispettivo, e le consorziate esecutrici fatturano al consorzio. Nell'ATI ciascuna impresa fattura la propria quota di lavori, oppure la mandataria fattura per tutte secondo l'assetto concordato: l'impostazione va definita prima dell'avvio, non alla prima fattura." },
      { q: "Il consorzio stabile permette di partecipare a gare più grandi?", a: "Sì: è la ragione principale per cui viene costituito. Il consorzio stabile può utilizzare i requisiti maturati dalle consorziate secondo le regole di cumulo previste, accedendo a importi che le singole imprese non raggiungerebbero. Richiede però struttura comune reale e durata non inferiore a cinque anni." },
      { q: "Le consorziate possono partecipare alla stessa gara del consorzio?", a: "No. Il consorzio indica in gara le consorziate per le quali concorre, e quelle imprese non possono presentare offerta autonoma per la medesima procedura. È un vincolo da coordinare con la strategia commerciale delle singole imprese." },
      { q: "Come si applica il reverse charge tra consorzio e consorziate?", a: "I due passaggi — consorziata verso consorzio e consorzio verso committente — sono operazioni distinte, ciascuna da qualificare per sé. Quando l'opera principale ricade in reverse charge o in scissione dei pagamenti, il trattamento del ribaltamento interno va verificato sul caso concreto: è una decisione da prendere in fase di costituzione del rapporto." },
      { q: "Nell'ATI rispondo anche per gli errori degli altri?", a: "Nel raggruppamento orizzontale la responsabilità verso la stazione appaltante è solidale per l'intero. Nel verticale la mandante risponde delle sole lavorazioni di sua competenza, mentre la mandataria resta responsabile per l'intera opera. La qualificazione del raggruppamento va decisa e scritta prima." },
      { q: "Il consorzio deve avere dipendenti e una sede?", a: "Il consorzio stabile richiede una comune struttura di impresa: non è un requisito puramente formale. Un ente privo di organizzazione, che si limita a far transitare fatture, è esposto sia alla contestazione dei requisiti in gara sia ai rilievi in sede di verifica fiscale." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se collabori stabilmente con le stesse imprese e ogni volta costituisci un raggruppamento nuovo, vale la pena fare il conto: quante gare all'anno fate insieme, quali importi vi sfuggono per classifica insufficiente, quanto costerebbe una struttura consortile. Mandaci le attestazioni delle imprese coinvolte e l'elenco delle gare degli ultimi due anni dalla pagina contatti: valutiamo se il consorzio stabile si ripaga e come impostare i rapporti interni. Per il contesto leggi le guide su attestazione SOA e gruppo societario." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
