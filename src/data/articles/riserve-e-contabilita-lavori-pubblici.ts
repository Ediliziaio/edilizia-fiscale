import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "riserve-e-contabilita-lavori-pubblici",
  title: "Riserve e contabilità dei lavori: quando diventano ricavo e come si valutano",
  excerpt:
    "Una riserva non iscritta nei modi e nei tempi previsti è un diritto perso. Ma anche una riserva iscritta correttamente non è automaticamente un ricavo di bilancio: come si valuta in sede di chiusura e come incide sul margine di commessa.",
  category: "Appalti",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-brand-dark",
  keywords: [
    "riserve appalti pubblici iscrizione",
    "registro di contabilità riserve",
    "riserve valutazione bilancio",
    "accordo bonario appalti",
    "riserve ricavo competenza",
    "contabilità dei lavori sal",
  ],
  intro:
    "Nei lavori pubblici la contabilità di cantiere non è un adempimento amministrativo: è il luogo in cui i diritti economici dell'impresa nascono o si estinguono. Una pretesa non iscritta come riserva nei modi e nei tempi previsti è persa. E una riserva iscritta va poi valutata in bilancio con criteri di prudenza, perché iscritta non significa riconosciuta.",
};

export const seo = {
  seoTitle: "Riserve e Contabilità dei Lavori: Quando Fanno Ricavo",
  metaDescription:
    "Come si iscrivono le riserve, perché una riserva tardiva è un diritto perso e come si valutano in bilancio senza gonfiare il margine di commessa.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Cos'è una riserva: la contestazione con cui l'esecutore fa valere una pretesa economica su fatti che incidono sul corrispettivo o sui tempi. Dove si iscrive: negli atti contabili, con la sottoscrizione con riserva e l'esplicazione entro i termini previsti. Il vincolo decisivo: la riserva non tempestivamente iscritta ed esplicata si intende abbandonata. In bilancio: una riserva iscritta non è un ricavo certo. Va valutata secondo prudenza, e solo la quota ragionevolmente certa concorre alla valutazione della commessa. La conseguenza gestionale: le riserve vanno lette nella riunione mensile di commessa, non solo dall'ufficio tecnico." },

    { type: "h2", text: "Perché la contabilità dei lavori è un fatto economico", id: "perche" },
    { type: "p", text: "In un appalto privato, se il committente ordina una variante a voce e poi non la riconosce, resta un problema di prova. In un appalto pubblico esiste una procedura: gli atti contabili — registro di contabilità, stati di avanzamento, libretto delle misure — sono i documenti in cui l'esecutore deve far constare le proprie pretese, e il modo in cui lo fa determina se quelle pretese esistono ancora." },
    { type: "p", text: "Il meccanismo è severo per una ragione precisa: consente alla stazione appaltante di conoscere in tempo reale l'entità delle pretese e di valutarne l'impatto sulla spesa. In cambio di questa trasparenza, l'ordinamento chiede all'esecutore tempestività: chi firma senza riserva accetta, e chi iscrive riserva senza esplicarla nei termini la perde." },
    { type: "p", text: "Per un'impresa questo significa che il responsabile di cantiere che firma il registro di contabilità sta compiendo un atto con effetti economici diretti, spesso senza esserne consapevole. È una delle poche situazioni in cui una firma apposta distrattamente vale decine di migliaia di euro." },

    { type: "h2", text: "Come si iscrive una riserva", id: "come" },
    { type: "ol", items: [
      "All'atto della sottoscrizione del documento contabile: la firma va apposta con l'indicazione «con riserva», altrimenti il documento si intende accettato senza contestazioni",
      "Entro il termine previsto per l'esplicazione: la riserva va sviluppata indicando le ragioni, i fatti che la giustificano e la quantificazione della pretesa",
      "Con quantificazione: una riserva non quantificata è incompleta e può essere considerata inefficace",
      "Rinnovando la riserva sui successivi atti contabili, dove il fatto continua a produrre effetti",
      "Conservando la documentazione di supporto: ordini di servizio, corrispondenza, verbali, fotografie datate, rapportini",
    ] },
    { type: "p", text: "Il terzo punto è quello che fa fallire più riserve formalmente iscritte. Una riserva che si limita a contestare — «i lavori hanno subito ritardi imputabili alla stazione appaltante» — senza indicare quali fatti, in quali date e per quale importo, è una dichiarazione di malcontento, non una pretesa azionabile." },
    { type: "p", text: "La quantificazione richiede però dati che l'impresa deve avere: il costo del fermo cantiere per giorno, il costo orario delle squadre inattive, il costo dei mezzi fermi, il maggiore onere di allestimento prolungato. Sono esattamente i numeri del [controllo di gestione](/guide/controllo-di-gestione-impresa-edile) descritti nelle altre guide di questo sito. Un'impresa che non conosce il proprio costo orario non è in grado di quantificare una riserva in modo difendibile." },
    { type: "p", text: "È il collegamento che rende questa materia non solo tecnica ma contabile: la contabilità industriale non serve solo a sapere se un cantiere guadagna, serve anche a poter chiedere quello che spetta quando qualcosa va storto." },

    { type: "figure", slot: "riserve-e-contabilita-lavori-pubblici-1", alt: "Registro di contabilità dei lavori con firma e iscrizione di riserva", caption: "Chi firma il registro senza riserva accetta: è un atto con effetti economici diretti." },

    { type: "h2", text: "Quando una riserva diventa un ricavo di bilancio", id: "bilancio" },
    { type: "p", text: "Qui si passa dal piano procedurale a quello contabile, ed è il punto in cui vediamo più errori. Una riserva iscritta è una pretesa: non è un credito certo, e non lo diventa fino a quando non viene riconosciuta in via bonaria o accertata in sede contenziosa." },
    { type: "p", text: "Il principio di prudenza impone di non rilevare come ricavo pretese di esito incerto. La regola operativa che ne discende: le riserve concorrono alla valutazione della commessa solo per la quota di cui esista una ragionevole certezza di riconoscimento — tipicamente perché già oggetto di accordo, o perché fondate su fatti documentati e su un orientamento consolidato." },
    { type: "table", headers: ["Situazione della riserva", "Trattamento in bilancio", "Effetto sul margine di commessa"], rows: [
      ["Iscritta, non esplicata nei termini", "Nessuna rilevazione: la pretesa è abbandonata", "Il costo resta, il ricavo non ci sarà mai"],
      ["Iscritta ed esplicata, esito incerto", "Nessun ricavo; informativa in nota integrativa", "Il costo sostenuto pesa sul margine: il cantiere appare peggiore"],
      ["Oggetto di proposta di accordo bonario", "Valutazione della quota ragionevolmente certa", "Il margine si riallinea in misura prudenziale"],
      ["Riconosciuta con accordo o accertata", "Ricavo di competenza", "Il margine recupera l'importo riconosciuto"],
    ] },
    { type: "p", text: "La seconda riga descrive la situazione più frequente e più fraintesa. Nel periodo che intercorre tra l'iscrizione della riserva e la sua definizione, il cantiere mostra un margine depresso: i costi ci sono tutti, il ricavo corrispondente no. È corretto che sia così, ma va spiegato — a chi legge il bilancio e alla banca — perché altrimenti si legge come una commessa gestita male." },
    { type: "p", text: "L'informativa in nota integrativa è precisamente lo strumento previsto per questo: dà conto delle pretese in essere senza anticiparne il risultato. Un'impresa con riserve rilevanti che non le espone lascia il lettore del bilancio senza un elemento decisivo per interpretare i numeri." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Disciplina dell'esecuzione dei contratti pubblici", principle: "L'esecutore che intenda far valere pretese deve iscrivere riserva negli atti contabili, all'atto della sottoscrizione, ed esplicarla nei termini previsti indicando le ragioni e la quantificazione; le riserve non tempestivamente iscritte ed esplicate si intendono abbandonate.", impact: "La firma senza riserva è accettazione. È l'atto con cui si perdono più diritti economici in edilizia." },
      { court: "Accordo bonario", principle: "Al superamento di una determinata incidenza delle riserve sull'importo contrattuale è previsto un procedimento di accordo bonario, volto alla definizione delle pretese in via amministrativa prima del contenzioso.", impact: "È la sede naturale in cui una riserva diventa un importo definito: da lì la valutazione in bilancio cambia." },
      { court: "Principi contabili nazionali", ref: "OIC 23", principle: "I ricavi derivanti da richieste di corrispettivi aggiuntivi sono inclusi nella valutazione della commessa solo quando vi sia ragionevole certezza del loro riconoscimento e l'importo sia attendibilmente determinabile.", impact: "Iscritta non significa incassabile: solo la quota ragionevolmente certa concorre alla valutazione." },
    ] },

    { type: "h2", text: "L'accordo bonario e la definizione delle pretese", id: "accordo" },
    { type: "p", text: "Quando le riserve superano una determinata incidenza sull'importo contrattuale, la disciplina prevede l'attivazione di un procedimento di accordo bonario, che mira a definire le pretese in via amministrativa prima che diventino contenzioso." },
    { type: "p", text: "Per l'impresa è un momento decisivo su due piani. Sul piano economico, perché è la sede in cui la pretesa si trasforma in un importo negoziato e definito. Sul piano contabile, perché da quel momento esiste un elemento oggettivo su cui fondare la valutazione: una proposta formulata è un dato molto diverso da una riserva ancora tutta da discutere." },
    { type: "p", text: "La preparazione a quel tavolo si fa però molto prima, e con i documenti. Le riserve che si definiscono meglio sono quelle sostenute da un apparato documentale costruito durante l'esecuzione: ordini di servizio, corrispondenza tempestiva, verbali di sospensione, fotografie datate, rapportini che dimostrino le squadre ferme. Ricostruire tutto questo a distanza di due anni, quando il cantiere è smobilitato, è quasi sempre impossibile." },

    { type: "h2", text: "Le riserve come indicatore di commessa", id: "indicatore" },
    { type: "p", text: "La proposta operativa che facciamo alle imprese seguite è di trattare le riserve come un dato di gestione e non come una pratica dell'ufficio tecnico. Concretamente: il registro delle riserve iscritte, con importo e stato, entra nel report mensile di commessa accanto al margine e all'avanzamento." },
    { type: "p", text: "Il motivo è duplice. Il primo è di controllo: un cantiere con riserve crescenti è un cantiere in tensione, e l'informazione serve alla direzione prima che al legale. Il secondo è di valutazione: a fine anno la valutazione dei lavori in corso richiede di sapere quali riserve esistono, per quali importi e con quale grado di fondatezza. Se quel dato vive solo nei faldoni del cantiere, la chiusura di bilancio si fa a occhio." },
    { type: "p", text: "C'è poi un terzo effetto, meno immediato ma reale. Un'impresa che monitora le riserve mensilmente le iscrive meglio, perché la disciplina di rendicontare costringe a formalizzare i fatti mentre accadono. È lo stesso principio della congruità e del fascicolo di commessa: il presidio non è documentale, è organizzativo." },

    { type: "figure", slot: "riserve-e-contabilita-lavori-pubblici-2", alt: "Report mensile di commessa con registro delle riserve accanto al margine", caption: "Le riserve sono un indicatore di commessa: vanno lette con il margine, non lasciate all'ufficio tecnico." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Appalto pubblico da 2.000.000 euro. Nel corso dell'esecuzione la stazione appaltante dispone una sospensione di sessanta giorni per interferenze non risolte con un sottoservizio. L'impresa ha in cantiere due squadre e un escavatore, e sostiene costi di fermo che quantifica in circa 96.000 euro tra manodopera non riallocabile, nolo e allestimento prolungato." },
    { type: "p", text: "Sul piano procedurale l'impresa iscrive riserva alla sottoscrizione del verbale di sospensione e del successivo stato di avanzamento, esplicandola nei termini con indicazione dei fatti, delle date e della quantificazione voce per voce. La quantificazione è possibile perché l'impresa conosce il proprio [costo orario pieno](/guide/costo-del-lavoro-impresa-edile) e il costo orario dei mezzi: senza quei numeri, la riserva sarebbe stata generica." },
    { type: "p", text: "Sul piano contabile, alla chiusura dell'esercizio la riserva è iscritta ed esplicata ma non ancora definita. I 96.000 euro di costi sono stati sostenuti e pesano sul margine della commessa; il corrispondente ricavo non viene rilevato, perché non esiste ragionevole certezza del riconoscimento. Il cantiere chiude l'anno con un margine depresso, e la nota integrativa dà conto della riserva in essere." },
    { type: "p", text: "L'esercizio successivo, in sede di accordo bonario, la pretesa viene definita in 71.000 euro. Da quel momento esiste un importo certo: il ricavo viene rilevato e il [margine di commessa](/guide/margine-di-commessa-edilizia) recupera. La lettura corretta dei due esercizi richiede di sapere che i due movimenti sono collegati — ed è esattamente ciò che l'informativa in nota integrativa consente." },
    { type: "note", text: "L'errore da non fare: rilevare come ricavo l'intero importo della riserva nell'esercizio in cui viene iscritta. Produce un utile che non esiste e, quando la definizione arriva per un importo inferiore, una perdita che sembra improvvisa. Lo scenario è illustrativo: termini e procedure vanno verificati sulla disciplina applicabile al contratto." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Cosa succede se firmo il registro di contabilità senza riserva?", a: "Il documento si intende accettato senza contestazioni per quanto vi è riportato. È l'atto con cui si perdono più diritti economici negli appalti pubblici, spesso per distrazione: chi firma in cantiere deve sapere che sta compiendo un atto con effetti economici diretti." },
      { q: "Basta scrivere «con riserva»?", a: "No. La riserva va poi esplicata nei termini previsti, indicando le ragioni, i fatti che la giustificano e la quantificazione della pretesa. Una riserva non esplicata o non quantificata è incompleta e può risultare inefficace." },
      { q: "Come si quantifica una riserva?", a: "Con i numeri del controllo di gestione: costo orario pieno delle squadre ferme, costo orario dei mezzi, maggiori oneri di allestimento prolungato, costi generali di cantiere per giorno. Un'impresa che non conosce il proprio costo orario non è in grado di quantificare in modo difendibile." },
      { q: "Una riserva iscritta è un ricavo?", a: "No. È una pretesa di esito incerto. Secondo il principio di prudenza concorre alla valutazione della commessa solo la quota di cui esista ragionevole certezza di riconoscimento e il cui importo sia attendibilmente determinabile: tipicamente dopo una proposta di accordo." },
      { q: "Perché il cantiere con riserve sembra andare male?", a: "Perché i costi sono stati sostenuti e il ricavo corrispondente non è ancora rilevabile. È corretto, ma va spiegato a chi legge il bilancio: l'informativa in nota integrativa serve proprio a dare conto delle pretese in essere senza anticiparne l'esito." },
      { q: "Cos'è l'accordo bonario?", a: "Un procedimento previsto al superamento di una determinata incidenza delle riserve sull'importo contrattuale, volto a definire le pretese in via amministrativa prima del contenzioso. È la sede in cui la riserva diventa un importo definito, e da lì cambia anche la valutazione in bilancio." },
      { q: "Per quanto tempo conservo la documentazione delle riserve?", a: "Per l'intera durata della definizione e oltre, considerando i tempi del contenzioso eventuale. Ordini di servizio, corrispondenza, verbali, foto datate e rapportini sono ciò su cui si regge la pretesa: ricostruirli a cantiere smobilitato è quasi sempre impossibile." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai riserve iscritte su appalti in corso e non compaiono nel report mensile di commessa, stai leggendo margini che non tengono conto di una parte della realtà. Mandaci l'elenco delle riserve in essere con importo e stato, insieme all'ultimo bilancio: verifichiamo la valutazione delle commesse interessate e l'informativa da esporre. Per il contesto leggi le guide su [lavori in corso su ordinazione](/guide/bilancio-impresa-edile-lavori-in-corso), margine di commessa e costo del lavoro edile." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026: termini e procedure vanno verificati sulla disciplina applicabile al singolo contratto." },
  ],
};
