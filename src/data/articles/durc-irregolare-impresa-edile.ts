import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "durc-irregolare-impresa-edile",
  title: "DURC irregolare: cosa blocca e come si sblocca",
  excerpt:
    "Senza DURC regolare si fermano gli incassi pubblici, le gare e i benefici contributivi. I quindici giorni del preavviso, la soglia di scostamento non grave, la rateazione che salva il documento e l'intervento sostitutivo della stazione appaltante.",
  category: "Lavoro",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust to-brand-dark",
  keywords: [
    "durc irregolare cosa fare",
    "durc non regolare come sbloccarlo",
    "preavviso di accertamento durc 15 giorni",
    "durc rateazione inps",
    "intervento sostitutivo stazione appaltante",
    "scostamento non grave 150 euro durc",
  ],
  intro:
    "Il DURC attesta la regolarità dell'impresa verso INPS, INAIL e Cassa Edile. Quando risulta irregolare, l'ente non lo nega subito: invia un preavviso e concede quindici giorni per regolarizzare. È l'unica finestra utile. Superata quella, il documento non viene rilasciato e si fermano incassi pubblici, gare e benefici contributivi.",
};

export const seo = {
  seoTitle: "DURC Irregolare: Cosa Blocca e Come si Sblocca",
  metaDescription:
    "I quindici giorni del preavviso, la soglia di scostamento non grave, la rateazione che salva il documento e l'intervento sostitutivo del committente.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Cos'è: attestazione unica della regolarità verso INPS, INAIL e Cassa Edile, richiesta in via telematica tramite Durc On Line. La validità: 120 giorni dalla data della richiesta. Il preavviso: prima di negare il documento gli enti invitano a regolarizzare entro 15 giorni (D.M. 30 gennaio 2015). Lo scostamento non grave: un debito complessivo di importo contenuto — la soglia storica è 150 euro — non impedisce il rilascio. La rateazione: un piano in essere con le rate pagate rende il DURC regolare. L'effetto sui pagamenti: la stazione appaltante non paga a te, paga agli enti (intervento sostitutivo)." },

    { type: "h2", text: "Che cos'è il DURC e chi lo chiede davvero", id: "cosa-e" },
    { type: "p", text: "Il Documento Unico di Regolarità Contributiva certifica che l'impresa è in regola con i versamenti verso INPS, INAIL e — per chi applica il contratto edile — Cassa Edile. Si ottiene in via telematica con una procedura unica: chi ha interesse inserisce il codice fiscale dell'impresa e il sistema restituisce l'esito, valido 120 giorni dalla data della richiesta." },
    { type: "p", text: "Il punto che sfugge a molti imprenditori è che il DURC non lo chiede quasi mai l'impresa. Lo chiedono gli altri: la stazione appaltante prima di pagare un SAL, il committente privato prima di saldare in certi casi, la banca prima di erogare, l'ente che concede un'agevolazione, il notaio in alcune operazioni. Quando scopri di essere irregolare, spesso lo scopri perché qualcuno ha bloccato un pagamento." },
    { type: "p", text: "Per un'impresa edile questo cambia la natura del problema. Non è un adempimento da tenere in ordine per correttezza: è la condizione perché il denaro entri. Un DURC irregolare non produce una sanzione, produce un blocco — e il blocco arriva nel momento peggiore, cioè quando hai già sostenuto i costi del cantiere." },

    { type: "figure", slot: "durc-irregolare-impresa-edile-1", alt: "Schermata del portale Durc On Line con esito di irregolarità", caption: "Il DURC lo chiede quasi sempre qualcun altro: te ne accorgi quando un pagamento si ferma." },

    { type: "h2", text: "Cosa blocca concretamente un DURC irregolare", id: "cosa-blocca" },
    { type: "table", headers: ["Ambito", "Effetto", "Quando si manifesta"], rows: [
      ["Pagamenti da committenti pubblici", "La stazione appaltante non paga l'impresa: versa direttamente agli enti previdenziali fino a concorrenza del debito", "Alla liquidazione di ogni SAL"],
      ["Partecipazione alle gare", "La regolarità contributiva è requisito di ordine generale: l'irregolarità è causa di esclusione", "In fase di verifica dei requisiti, anche dopo l'aggiudicazione"],
      ["Benefici normativi e contributivi", "Decadenza da sgravi e agevolazioni per il periodo di irregolarità", "In sede di conguaglio o di verifica ispettiva"],
      ["Subappalto", "L'appaltatore verifica il DURC del subappaltatore: senza, il rapporto si blocca a monte", "All'autorizzazione del subappalto e a ogni pagamento"],
      ["Attestazione SOA", "La regolarità contributiva è condizione per il mantenimento della qualificazione", "Alla verifica triennale e al rinnovo"],
      ["Bonus e agevolazioni edilizie", "Alcune misure richiedono la regolarità come condizione di accesso", "Alla comunicazione o all'asseverazione"],
    ] },
    { type: "p", text: "La prima riga merita una spiegazione, perché è quella che sorprende di più. Negli appalti pubblici, se il DURC dell'esecutore è irregolare, la stazione appaltante non sospende semplicemente il pagamento: attiva l'intervento sostitutivo, cioè paga direttamente gli enti previdenziali l'importo del debito contributivo e liquida all'impresa solo la differenza." },
    { type: "p", text: "Dal punto di vista dell'impresa l'effetto è duplice e va capito bene. Il debito viene estinto, il che è un bene; ma l'incasso atteso si riduce di pari importo, in un momento in cui la cassa era già stata programmata su quel SAL. Chi non lo mette a preventivo si trova un buco improvviso di decine di migliaia di euro." },

    { type: "h2", text: "I quindici giorni che decidono tutto", id: "quindici-giorni" },
    { type: "p", text: "Il decreto ministeriale del 30 gennaio 2015 ha introdotto una garanzia procedurale che troppe imprese non sfruttano: prima di attestare l'irregolarità, l'ente invita l'interessato a regolarizzare la propria posizione entro un termine di quindici giorni, tramite posta elettronica certificata." },
    { type: "p", text: "È il momento decisivo dell'intera vicenda. Entro quei quindici giorni la posizione si può sistemare — versando, rateizzando o dimostrando che il debito non esiste — e il DURC viene rilasciato regolare, come se nulla fosse. Superato il termine senza intervento, l'esito diventa negativo e da lì in avanti il problema è pubblico: lo vede la stazione appaltante, lo vede l'appaltatore, lo vede la banca." },
    { type: "p", text: "Il motivo per cui quel termine viene perso è quasi sempre banale: la PEC dell'impresa non viene letta con continuità, oppure è intestata a un consulente che non la presidia, oppure la casella è piena. Vale la pena dirlo con chiarezza, perché è il singolo accorgimento organizzativo con il miglior rapporto tra costo e danno evitato: quella casella va controllata ogni giorno lavorativo." },

    { type: "h2", text: "Le tre strade per regolarizzare", id: "regolarizzare" },
    { type: "ol", items: [
      "Versamento integrale del debito contestato entro i quindici giorni: è la strada più rapida quando l'importo è sostenibile e il debito è effettivamente dovuto",
      "Rateazione: la presentazione dell'istanza e il pagamento regolare delle rate rendono la posizione regolare ai fini del DURC. È la strada da valutare quando l'importo è rilevante, ma richiede attenzione perché il decadere dal piano fa tornare l'irregolarità",
      "Contestazione: se il debito non esiste o è già stato pagato, va dimostrato documentalmente entro il termine. Capita più spesso di quanto si creda, per versamenti imputati a periodi sbagliati o denunce non acquisite dal sistema",
    ] },
    { type: "p", text: "La seconda strada ha un dettaglio operativo che vale la pena presidiare: la regolarità dipende dal pagamento puntuale delle rate, non dall'esistenza del piano. Un'impresa che rateizza e poi salta una scadenza si ritrova irregolare senza un nuovo preavviso, e spesso lo scopre — di nuovo — da un pagamento bloccato. Le rate del piano vanno trattate come le scadenze fiscali, non come un debito accessorio." },
    { type: "p", text: "C'è poi una possibilità che molte imprese edili ignorano: la compensazione con crediti certificati verso la pubblica amministrazione. Se l'impresa vanta crediti certi, liquidi ed esigibili verso enti pubblici, certificati attraverso la piattaforma dedicata, quei crediti possono essere utilizzati per estinguere debiti contributivi. È una strada tecnica ma reale, e nel settore costruzioni la situazione di chi ha crediti verso la PA e debiti contributivi è tutt'altro che rara." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Decreto ministeriale", ref: "D.M. 30 gennaio 2015", principle: "La verifica della regolarità è effettuata con modalità esclusivamente telematiche; in caso di assenza dei requisiti l'interessato è invitato a regolarizzare la propria posizione entro un termine non superiore a quindici giorni, mediante posta elettronica certificata.", impact: "È l'unica finestra in cui l'irregolarità resta invisibile all'esterno. Dipende da una casella PEC letta ogni giorno." },
      { court: "Decreto ministeriale", ref: "D.M. 30 gennaio 2015, scostamento non grave", principle: "Non osta al rilascio del documento uno scostamento non grave tra le somme dovute e quelle versate, riferito a ciascun istituto e a ciascuna gestione.", impact: "La soglia storicamente applicata è di 150 euro comprensivi di eventuali accessori: un debito residuo minimo non blocca il documento." },
      { court: "Codice dei contratti pubblici", ref: "D.lgs. 36/2023", principle: "La regolarità contributiva è requisito di ordine generale per la partecipazione alle procedure; in caso di inadempienza contributiva dell'esecutore la stazione appaltante trattiene l'importo corrispondente e provvede al pagamento diretto agli enti previdenziali.", impact: "Non è una sospensione del pagamento: è un dirottamento. Va messo in conto nella cassa di commessa." },
    ] },

    { type: "h2", text: "Il DURC di congruità: un documento diverso", id: "congruita" },
    { type: "p", text: "Accanto al DURC ordinario esiste, solo per l'edilizia, l'attestazione di congruità dell'incidenza della manodopera, introdotta dal decreto ministeriale n. 143 del 25 giugno 2021. Sono due cose distinte e vengono confuse di continuo." },
    { type: "p", text: "Il DURC ordinario guarda se hai versato quello che hai denunciato. La congruità guarda se hai denunciato abbastanza manodopera rispetto al valore dell'opera: confronta il costo del lavoro denunciato in Cassa Edile con percentuali minime differenziate per categoria di lavori. Per la nuova edilizia civile il riferimento consolidato è il 14,28% del valore dell'opera." },
    { type: "p", text: "Un'impresa può quindi essere perfettamente regolare nei versamenti e risultare non congrua, o viceversa. E gli effetti sono diversi: la non congruità non regolarizzata viene segnalata e incide sul rilascio del DURC, ma il percorso per sistemarla passa dalla dimostrazione documentale o dal versamento della differenza contributiva, non dal semplice pagamento di un arretrato." },
    { type: "p", text: "La regola operativa è la stessa che vale per tutto il resto in questo settore: la congruità va monitorata durante il cantiere. A fine lavori lo scostamento è maturato per intero e l'unica strada rimasta è versare." },

    { type: "figure", slot: "durc-irregolare-impresa-edile-2", alt: "Prospetto di congruità della manodopera confrontato con il valore dell'opera", caption: "DURC ordinario e congruità sono due documenti diversi: si può essere in regola con uno e non con l'altra." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa con tre cantieri pubblici aperti. A metà settembre la stazione appaltante del cantiere principale comunica che il pagamento del quarto SAL, da 96.000 euro, è sospeso per irregolarità contributiva. L'imprenditore non ne sapeva nulla." },
    { type: "p", text: "La ricostruzione mostra che a fine luglio era arrivato sulla PEC aziendale il preavviso di accertamento negativo per un debito INPS di 11.400 euro, relativo a un conguaglio di due anni prima mai versato. Nessuno aveva aperto la PEC durante le settimane di chiusura estiva. I quindici giorni erano scaduti a metà agosto." },
    { type: "p", text: "Le conseguenze sono a catena. Sul SAL, la stazione appaltante attiva l'intervento sostitutivo: versa 11.400 euro all'INPS e liquida all'impresa 84.600. La cassa di settembre, costruita su 96.000, salta. Su un secondo cantiere in fase di aggiudicazione, la verifica dei requisiti rileva l'irregolarità e apre un procedimento di esclusione. E il rinnovo SOA, previsto per ottobre, si complica." },
    { type: "p", text: "Il debito era di 11.400 euro. Il danno complessivo — tra ritardo di incasso, costo del contenzioso sull'esclusione e tempo dedicato — vale un multiplo di quella cifra. Ed era interamente evitabile aprendo una PEC a fine luglio." },
    { type: "note", text: "L'errore da non fare: trattare la PEC aziendale come una casella secondaria, presidiata da chi passa in ufficio. Il preavviso DURC arriva lì, dà quindici giorni e non viene ripetuto. Lo scenario descritto è un caso illustrativo: importi ed effetti dipendono dalla situazione concreta e dal contratto." },

    { type: "timeline", title: "La sequenza dal preavviso al blocco", steps: [
      { when: "Giorno 0", label: "Qualcuno richiede il DURC", detail: "Stazione appaltante, appaltatore, banca o ente: quasi mai l'impresa stessa." },
      { when: "Entro pochi giorni", label: "Preavviso di accertamento negativo via PEC", detail: "L'ente rileva l'irregolarità e invita a regolarizzare. È l'unica finestra utile." },
      { when: "15 giorni", label: "Termine per versare, rateizzare o contestare", detail: "Se la posizione si sistema, il DURC esce regolare e nessuno all'esterno se ne accorge." },
      { when: "Scaduto il termine", label: "Esito negativo, visibile a chi ha fatto la richiesta", detail: "Da qui partono blocco dei pagamenti, esclusione dalle gare e verifiche sui benefici." },
      { when: "Alla liquidazione del SAL", label: "Intervento sostitutivo del committente pubblico", detail: "L'ente viene pagato direttamente: all'impresa arriva la differenza." },
    ] },

    { type: "h2", text: "Come si evita il problema", id: "prevenzione" },
    { type: "ul", items: [
      "Presidiare la PEC aziendale ogni giorno lavorativo, ferie comprese, con almeno due persone abilitate alla lettura",
      "Verificare il proprio DURC in autonomia con cadenza almeno trimestrale, senza aspettare che lo chieda qualcun altro",
      "Trattare le rate di un piano di dilazione come scadenze fiscali: una rata saltata riapre l'irregolarità senza nuovo preavviso",
      "Monitorare la congruità della manodopera durante il cantiere, non alla chiusura",
      "Verificare il DURC dei subappaltatori prima di autorizzare il subappalto e prima di ogni pagamento, per la responsabilità solidale",
      "Se esistono crediti verso la pubblica amministrazione, valutarne la certificazione: possono servire a estinguere debiti contributivi",
    ] },
    { type: "p", text: "Il secondo punto è quello che cambia di più la posizione dell'impresa. Un controllo trimestrale del proprio DURC costa pochi minuti e sposta la scoperta di un'irregolarità dal momento peggiore — un pagamento bloccato — a un momento qualunque, in cui c'è tempo per sistemare." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quanto vale un DURC regolare?", a: "Centoventi giorni dalla data della richiesta. Nel periodo di validità può essere utilizzato da chiunque per le finalità previste, senza che serva una nuova verifica: è il motivo per cui conviene averne uno recente prima di scadenze importanti come la liquidazione di un SAL o una gara." },
      { q: "Cosa succede se non leggo il preavviso in tempo?", a: "Il termine di quindici giorni decorre comunque e non viene ripetuto. Scaduto, l'esito diventa negativo ed è visibile a chi ha effettuato la richiesta. La posizione si può ancora regolarizzare, ma nel frattempo i pagamenti e le gare si sono già bloccati." },
      { q: "Un debito di poche decine di euro blocca il DURC?", a: "No. La disciplina prevede che uno scostamento non grave tra somme dovute e versate non osti al rilascio: la soglia storicamente applicata è di 150 euro per ciascun istituto e gestione, comprensivi di eventuali accessori. È bene però verificarla, perché non è un margine su cui costruire una prassi." },
      { q: "Con una rateazione in corso il DURC è regolare?", a: "Sì, a condizione che il piano sia in essere e le rate vengano pagate puntualmente. Il decadimento dal piano fa tornare irregolare la posizione senza un nuovo preavviso: è la ragione per cui le rate vanno gestite come scadenze fiscali." },
      { q: "Che differenza c'è tra DURC e DURC di congruità?", a: "Il DURC ordinario verifica che tu abbia versato quanto denunciato. La congruità verifica che tu abbia denunciato abbastanza manodopera rispetto al valore dell'opera, secondo il D.M. 143/2021. Sono documenti distinti: si può essere in regola con uno e non con l'altra." },
      { q: "Il committente pubblico può pagare direttamente l'INPS al posto mio?", a: "Sì, ed è quello che accade. In caso di inadempienza contributiva dell'esecutore la stazione appaltante trattiene l'importo corrispondente e lo versa direttamente agli enti previdenziali, liquidando all'impresa la sola differenza. Il debito si estingue, ma l'incasso atteso si riduce." },
      { q: "Rispondo del DURC dei miei subappaltatori?", a: "In materia retributiva e contributiva l'appaltatore risponde in solido con il subappaltatore nei limiti previsti dalla legge. Verificare il DURC del subappaltatore prima dell'autorizzazione e prima di ogni pagamento non è una formalità: è la protezione da obbligazioni di cui non hai il controllo." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai un DURC irregolare in questo momento, la prima cosa da stabilire è se il preavviso è ancora aperto: dentro i quindici giorni il problema si chiude senza che nessuno lo veda, fuori diventa una gestione. Mandaci il preavviso o l'esito negativo dalla pagina contatti, con l'elenco dei cantieri pubblici in corso: verifichiamo la posizione, valutiamo versamento, rateazione o contestazione e quantifichiamo l'impatto sui SAL in liquidazione. Per il contesto leggi le guide su costo del lavoro edile e Cassa Edile." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
