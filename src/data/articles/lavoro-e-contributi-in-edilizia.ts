import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "lavoro-e-contributi-in-edilizia",
  title: "Lavoro e contributi in edilizia: la mappa completa per chi ha i cantieri",
  excerpt:
    "Cassa Edile, DURC, congruità, subappalti, sicurezza: il lavoro edile è un sistema a parte, con regole che non esistono in nessun altro settore. La guida che le mette in fila, dall'assunzione alla denuncia mensile, e rimanda all'approfondimento giusto per ogni passaggio.",
  category: "Lavoro",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "lavoro in edilizia regole",
    "contributi impresa edile",
    "cassa edile durc congruità",
    "gestione personale impresa edile",
    "adempimenti mensili edilizia",
    "assumere operai edili",
  ],
  intro:
    "Il lavoro in edilizia è regolato da un sistema che non esiste in nessun altro settore: una cassa di categoria che gestisce pezzi di retribuzione, un documento di regolarità che condiziona gli incassi, una verifica di congruità sulla manodopera denunciata e un confine sottile tra subappalto lecito e interposizione vietata. Questa guida mette in fila l'intero sistema — dall'assunzione alla denuncia mensile — e indica per ogni passaggio l'approfondimento dedicato.",
};

export const seo = {
  seoTitle: "Lavoro e Contributi in Edilizia: la Guida Completa",
  metaDescription:
    "Cassa Edile, DURC, congruità, subappalti e sicurezza: come funziona il sistema del lavoro edile e come si presidia mese per mese, cantiere per cantiere.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il lavoro edile poggia su quattro istituti che esistono solo in questo settore: la Cassa Edile (gestisce ferie, gratifica e anzianità per conto delle imprese), il DURC (regolarità contributiva, condiziona incassi pubblici e gare), la congruità della manodopera (D.M. 143/2021: costo del lavoro denunciato confrontato con percentuali minime sul valore dell'opera) e il confine dell'appalto genuino (art. 29 D.lgs. 276/2003). Si presidiano con tre numeri mensili: ore denunciate per cantiere, costo orario pieno, incidenza della manodopera per commessa." },

    { type: "h2", text: "Perché il lavoro edile è un sistema a parte", id: "sistema" },
    { type: "p", text: "Chi arriva in edilizia da un altro settore — o chi delega tutto al consulente del lavoro senza guardare i numeri — scopre gli istituti speciali del settore quasi sempre nel modo peggiore: un DURC sospeso che blocca un incasso, un invito a regolarizzare la congruità su un cantiere chiuso da mesi, una contestazione di somministrazione irregolare su un subappalto che sembrava normale." },
    { type: "p", text: "La ragione storica è semplice: gli operai edili cambiano impresa di continuo, seguono i cantieri, alternano periodi pieni e vuoti. Il legislatore e la contrattazione collettiva hanno costruito attorno a questa mobilità un sistema che rende i diritti portabili — la [Cassa Edile](/guide/cassa-edile-come-funziona) — e che scoraggia il lavoro nero con due strumenti che colpiscono dove fa male: il [DURC](/guide/durc-irregolare-impresa-edile), che blocca gli incassi, e la [congruità della manodopera](/guide/congruita-manodopera-durc), che rende il costo del lavoro denunciato un numero verificato, non dichiarato." },
    { type: "p", text: "Il risultato pratico: in edilizia il costo del lavoro non è solo una voce di bilancio. È un fascio di adempimenti mensili che, se gestiti in ritardo, si trasformano in blocchi operativi. Questa guida è la mappa; ogni sezione rimanda alla guida che scende nel dettaglio." },

    { type: "h2", text: "La filiera: dall'assunzione alla denuncia mensile", id: "filiera" },
    { type: "p", text: "Il ciclo di vita amministrativo di un operaio edile ha più stazioni di quello di qualunque altro dipendente. All'assunzione si aggiunge l'iscrizione alla Cassa Edile territoriale; ogni mese, oltre a busta paga e F24, c'è la denuncia telematica delle ore per singolo operaio e per singolo cantiere; e ogni cantiere sopra soglia va agganciato alla verifica di congruità fin dalla notifica preliminare." },
    { type: "ol", items: [
      "Assunzione: comunicazione obbligatoria, iscrizione in Cassa Edile, visita medica preassuntiva. Qui si decide anche l'inquadramento, da cui dipendono paga e contributi — e l'eventuale accesso ad [apprendistato e agevolazioni](/guide/assunzioni-agevolazioni-contributive-edilizia).",
      "Ogni mese: denuncia in Cassa Edile con ore per operaio e per cantiere, versamento degli accantonamenti, F24 con la riduzione contributiva di settore se spetta.",
      "Ogni cantiere: attribuzione corretta delle ore nella denuncia. È il dato su cui si calcola la congruità: ore denunciate sul cantiere sbagliato sono il modo più banale di risultare incongrui su quello giusto.",
      "Alla chiusura del cantiere sopra soglia: attestazione di congruità, da esibire prima del saldo finale nei lavori pubblici.",
    ] },
    { type: "p", text: "L'errore organizzativo tipico è trattare questi passaggi come pratiche separate — una del consulente del lavoro, una dell'ufficio gare, una del capocantiere. La congruità li lega tutti: la percentuale si calcola sulle ore che il capocantiere fa denunciare, sul valore dell'opera che l'ufficio gare ha contrattualizzato, sui versamenti che il consulente esegue." },

    { type: "figure", slot: "lavoro-e-contributi-in-edilizia-1", alt: "Ufficio del personale di un'impresa edile con denunce mensili e prospetti per cantiere", caption: "La denuncia mensile per cantiere è il dato su cui si calcolano congruità e DURC: non è una pratica, è un numero di gestione." },

    { type: "h2", text: "Quanto costa davvero un'ora di lavoro", id: "costo" },
    { type: "p", text: "Ogni ragionamento su preventivi e margini parte da un numero: il [costo orario pieno](/guide/costo-del-lavoro-impresa-edile) della manodopera. Non la paga di contratto: il costo annuo completo — retribuzione, contributi, Cassa Edile, TFR, mensilità aggiuntive, DPI, formazione — diviso per le ore realmente produttive, che sono sensibilmente meno di quelle teoriche." },
    { type: "p", text: "Il rapporto tipico tra costo orario pieno e paga base si colloca attorno a una volta e mezza. Un'impresa che preventiva sulla paga base sta regalando la differenza su ogni ora venduta, e lo scoprirà solo a bilancio chiuso — quando il [margine di commessa](/guide/margine-di-commessa-edilizia) non è più correggibile." },
    { type: "p", text: "La componente che rende il costo edile diverso da tutti gli altri è la contribuzione alla Cassa Edile: dentro ci sono gli accantonamenti per ferie e gratifica natalizia, l'[anzianità professionale edile](/glossario#ape), l'assistenza sanitaria e la formazione. Voci che negli altri settori stanno in busta paga e qui transitano da un ente bilaterale, con l'effetto che il costo visibile in busta sottostima il costo vero." },

    { type: "h2", text: "DURC: il documento che decide se incassi", id: "durc" },
    { type: "p", text: "Il DURC attesta la regolarità verso INPS, INAIL e Cassa Edile e vale 120 giorni. Senza DURC regolare non incassi dai committenti pubblici, non partecipi alle gare, non accedi ai benefici contributivi. È l'unico documento amministrativo che trasforma un debito contributivo in un blocco di cassa immediato." },
    { type: "p", text: "Il punto che molte imprese scoprono tardi: prima dell'esito negativo c'è un preavviso con quindici giorni per regolarizzare. Quindici giorni che bastano quasi sempre — rateazione, compensazione, correzione dell'anomalia — se qualcuno legge la PEC in tempo e sa cosa fare. La [guida sul DURC irregolare](/guide/durc-irregolare-impresa-edile) percorre le tre strade di regolarizzazione una per una." },
    { type: "p", text: "In situazione di crisi il DURC diventa la variabile decisiva: nella [composizione negoziata](/guide/composizione-negoziata-impresa-edile) la continuità dei cantieri dipende dalla possibilità di mantenere la regolarità contributiva durante il risanamento." },

    { type: "h2", text: "Congruità: la manodopera denunciata è un numero verificato", id: "congruita" },
    { type: "p", text: "Dal D.M. 143/2021, il costo del lavoro denunciato alle Casse Edili viene confrontato con percentuali minime di incidenza riferite al valore dell'opera, differenziate per categoria di lavori: per la nuova edilizia civile il riferimento è il 14,28%. Sotto la soglia, l'impresa è invitata a regolarizzare: o dimostra documentalmente lo scostamento, o versa la differenza. L'esito negativo incide sul DURC." },
    { type: "p", text: "Si applica ai lavori pubblici di qualunque importo e ai privati da 70.000 euro in su. La [guida dedicata alla congruità](/guide/congruita-manodopera-durc) spiega il calcolo e le giustificazioni ammesse; il punto di metodo è un altro: la congruità non si sistema alla fine, si presidia durante — confrontando ogni mese l'incidenza della manodopera denunciata con la soglia della categoria, cantiere per cantiere, insieme al margine." },

    { type: "h2", text: "Manodopera altrui: il confine che non va sbagliato", id: "subappalti" },
    { type: "p", text: "Quasi nessuna impresa edile lavora solo con i propri operai. Subappalto, distacco, noli a caldo: forme lecite, finché l'appaltatore organizza i propri mezzi e si assume il rischio d'impresa. Quando invece i tuoi capicantiere dirigono gli operai di un'altra impresa, il corrispettivo è a ore e l'attrezzatura è tutta tua, il contratto si riqualifica in somministrazione irregolare di manodopera — con sanzioni pesanti, responsabilità solidale e, dopo le modifiche del 2024, rilevanza penale." },
    { type: "p", text: "Il confine passa da fatti concreti, non dalle clausole scritte: chi impartisce le direttive quotidiane, chi possiede l'organizzazione, come è determinato il prezzo. La [guida sull'appalto non genuino](/guide/appalto-non-genuino-distacco-somministrazione) elenca gli indici che gli ispettori usano davvero e come strutturare i subcontratti perché reggano." },

    { type: "figure", slot: "lavoro-e-contributi-in-edilizia-2", alt: "Cantiere con squadre di più imprese al lavoro sullo stesso fronte", caption: "Con più imprese nello stesso perimetro, il confine tra appalto genuino e interposizione passa da chi dirige davvero le squadre." },

    { type: "h2", text: "Sicurezza: costi che non si ribassano e non si annegano", id: "sicurezza" },
    { type: "p", text: "I [costi della sicurezza](/guide/oneri-della-sicurezza-trattamento) previsti dal piano di sicurezza e coordinamento non sono soggetti a ribasso e vanno tenuti distinti dagli oneri aziendali propri dell'impresa. Non è solo una regola di gara: è una voce di commessa che, se annegata nei costi generali, sparisce dal controllo — e riemerge come scostamento inspiegabile a consuntivo." },
    { type: "p", text: "Il trattamento corretto è doppio: in contabilità analitica come voce dedicata di ogni commessa, e in sede di offerta come importo separato che non entra nel gioco del ribasso." },

    { type: "h2", text: "I sei presidi mensili", id: "presidi" },
    { type: "table", headers: ["Presidio", "Frequenza", "Cosa previene"], rows: [
      ["Denuncia Cassa Edile con ore per cantiere", "Mensile", "Incongruità da ore attribuite male; sanzioni per omessa denuncia"],
      ["Verifica incidenza manodopera per cantiere", "Mensile", "Scoprire l'incongruità a cantiere chiuso, quando non è più correggibile"],
      ["Controllo regolarità DURC (autointerrogazione)", "Mensile", "Preavvisi non letti; blocco incassi su SAL in pagamento"],
      ["Riconciliazione F24 e riduzione contributiva", "Mensile", "Perdere l'agevolazione di settore per un'istanza non presentata"],
      ["Revisione costo orario pieno per qualifica", "Semestrale", "Preventivi costruiti su un costo vecchio di anni"],
      ["Audit dei subcontratti attivi", "A ogni nuovo subappalto", "Contratti che sulla carta sono appalti e nei fatti sono somministrazione"],
    ] },

    { type: "h2", text: "Il calendario di un cantiere sopra soglia", id: "calendario" },
    { type: "timeline", title: "Dalla notifica preliminare all'attestazione di congruità", steps: [
      { when: "Prima dell'apertura", label: "Notifica preliminare e denuncia di nuovo lavoro in Cassa Edile", detail: "Il cantiere entra nel sistema CNCE: da qui in poi le ore denunciate vengono agganciate all'opera." },
      { when: "Ogni mese", label: "Denuncia delle ore per operaio e per cantiere", detail: "Il dato che alimenta la congruità. Ore di subaffidatari comprese: la loro denuncia concorre alla tua percentuale." },
      { when: "Durante i lavori", label: "Monitoraggio dell'incidenza rispetto alla soglia di categoria", detail: "Se lo scostamento nasce da forniture o lavorazioni ad alto contenuto di materiale, la documentazione si prepara ora." },
      { when: "Fine lavori", label: "Richiesta dell'attestazione di congruità", detail: "Nei lavori pubblici condiziona il saldo finale. Se l'esito è negativo: 15 giorni per giustificare o versare." },
      { when: "Dopo la chiusura", label: "Conservazione del fascicolo", detail: "Denunce, giustificativi dello scostamento, subcontratti: sono la difesa in caso di verifica successiva." },
    ] },

    { type: "h2", text: "Le fonti che regolano il sistema", id: "fonti" },
    { type: "caselaw", title: "Riferimenti normativi", items: [
      { court: "Ministero del Lavoro", ref: "D.M. n. 143 del 25 giugno 2021", principle: "Verifica di congruità dell'incidenza della manodopera: percentuali minime per categoria di lavori, lavori pubblici di qualunque importo e privati da 70.000 euro.", impact: "L'incidenza della manodopera denunciata diventa un numero controllato: va monitorata per cantiere durante i lavori, non ricostruita alla fine." },
      { court: "Ministero del Lavoro", ref: "D.M. 30 gennaio 2015", principle: "Disciplina del DURC online: verifica in tempo reale verso INPS, INAIL e Cassa Edile, validità di 120 giorni, preavviso di accertamento negativo con 15 giorni per regolarizzare.", impact: "I quindici giorni del preavviso sono la vera finestra di gestione: superarli trasforma un'anomalia sanabile in un blocco degli incassi." },
      { court: "Legislatore", ref: "Art. 29 D.lgs. 276/2003", principle: "L'appalto si distingue dalla somministrazione per l'organizzazione dei mezzi e l'assunzione del rischio d'impresa da parte dell'appaltatore.", impact: "Nei subappalti di sola manodopera il confine va presidiato nei fatti: direttive, attrezzature, criterio di determinazione del corrispettivo." },
      { court: "Contrattazione collettiva", ref: "CCNL edilizia e accordi territoriali", principle: "Iscrizione e contribuzione alla Cassa Edile territoriale per gli operai: accantonamenti, anzianità professionale edile, prestazioni sanitarie e formazione.", impact: "La contribuzione di cassa è parte del costo orario pieno: un preventivo che la ignora sottostima il costo del lavoro in modo sistematico." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Devo iscrivere in Cassa Edile anche gli impiegati?", a: "L'obbligo di iscrizione riguarda gli operai. Per impiegati e quadri la contribuzione alla Cassa Edile non è dovuta, salvo specifiche previsioni territoriali su forme di assistenza. È una delle ragioni per cui il costo orario di un operaio e quello di un impiegato si costruiscono in modo diverso." },
      { q: "Le ore dei subappaltatori contano nella mia congruità?", a: "Sì. La verifica considera la manodopera complessivamente denunciata sull'opera: la tua e quella delle imprese subaffidatarie. Per questo conviene imporre contrattualmente ai subappaltatori la denuncia corretta delle ore sul tuo cantiere e verificarla mensilmente." },
      { q: "Cosa succede se sbaglio l'attribuzione delle ore tra due cantieri?", a: "Il cantiere che riceve ore in meno rischia di risultare incongruo, con invito a regolarizzare; quello che ne riceve in più non compensa. La denuncia si può rettificare, ma farlo dopo l'avvio della verifica è molto più difficile che presidiare l'attribuzione ogni mese." },
      { q: "Il DURC irregolare blocca anche i cantieri privati?", a: "Il blocco diretto degli incassi riguarda i committenti pubblici. Nei privati gli effetti sono indiretti ma concreti: perdita dei benefici contributivi, responsabilità del committente che paga senza verificare, esclusione dalle detrazioni edilizie per i lavori che le richiedono." },
      { q: "La riduzione contributiva edile è automatica?", a: "No: va richiesta con istanza telematica e spetta solo con DURC regolare e rispetto della contrattazione. Ogni anno un decreto ne conferma la misura. È il caso tipico di beneficio perso non per mancanza di requisiti ma per mancanza di presidio." },
      { q: "Posso pagare gli operai direttamente senza passare dalla Cassa Edile?", a: "No, per le voci che il CCNL affida alla cassa: ferie, gratifica natalizia e anzianità professionale edile transitano dagli accantonamenti. Pagarle in busta non estingue l'obbligo verso la cassa: si paga due volte e si resta irregolari ai fini del DURC." },
      { q: "Da dove comincio se oggi non presidio nulla di tutto questo?", a: "Dal dato che alimenta tutto il resto: la denuncia mensile per cantiere. Se le ore sono attribuite correttamente, congruità e DURC diventano numeri che vedi arrivare con mesi di anticipo. Il passo successivo è ricalcolare il costo orario pieno e portarlo nei preventivi." },
    ] },
  ],
};
