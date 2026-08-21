import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "bonus-edilizi-come-si-fatturano",
  title: "Bonus edilizi: cosa resta e come si fatturano oggi",
  excerpt:
    "Finita la stagione dello sconto in fattura generalizzato, il lavoro dell'impresa è cambiato: bonifico parlante con ritenuta dell'8%, congruità dei prezzi, fascicolo di commessa. Cosa serve davvero perché il committente porti la detrazione in dichiarazione.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "bonus edilizi come si fatturano",
    "bonifico parlante ritenuta 8%",
    "sconto in fattura cessione credito 2024",
    "detrazione ristrutturazione fatturazione impresa",
    "congruità prezzi bonus edilizi",
    "documentazione detrazioni edilizie impresa",
  ],
  intro:
    "Con il blocco generalizzato di sconto in fattura e cessione del credito disposto dal D.L. 39/2024, il ruolo dell'impresa nei bonus edilizi è tornato quello ordinario: eseguire, fatturare e incassare. Ma la fattura non basta. Perché il committente possa detrarre servono bonifico parlante, prezzi congrui e un fascicolo che regga a distanza di anni.",
};

export const seo = {
  seoTitle: "Bonus Edilizi: Cosa Resta e Come si Fatturano",
  metaDescription:
    "Bonifico parlante e ritenuta dell'8%, congruità dei prezzi e fascicolo di commessa: cosa serve perché il committente possa portare la detrazione.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Cosa è cambiato: il D.L. 39/2024 ha bloccato in via generale l'esercizio delle opzioni per sconto in fattura e cessione del credito, con eccezioni per fattispecie già avviate. Il ritorno all'ordinario: il committente paga, e recupera la spesa come detrazione nella propria dichiarazione. Il pagamento: bonifico bancario o postale con causale, codice fiscale del beneficiario e partita IVA dell'impresa; la banca opera una ritenuta d'acconto dell'8% sull'importo. Cosa deve presidiare l'impresa: prezzi congrui, separazione delle lavorazioni agevolabili, fascicolo documentale completo." },

    { type: "h2", text: "Come è cambiato il ruolo dell'impresa", id: "cambiamento" },
    { type: "p", text: "Per alcuni anni le imprese edili hanno svolto una funzione che non era la loro: anticipare il beneficio fiscale del committente. Con lo sconto in fattura l'impresa riduceva il corrispettivo e acquisiva un credito d'imposta; con la cessione, quel credito veniva rivenduto. Il risultato è noto: molte imprese si sono trovate a fare, di fatto, gli intermediari finanziari di sé stesse, con crediti in cassetto che non riuscivano a utilizzare." },
    { type: "p", text: "Il decreto legge 39 del 2024 ha chiuso in via generale quella stagione, bloccando l'esercizio delle opzioni salvo le fattispecie già avviate alle condizioni di legge. Il quadro attuale è tornato quello ordinario delle detrazioni edilizie: il committente sostiene la spesa, la paga, e la recupera in dichiarazione in quote annuali." },
    { type: "p", text: "Per l'impresa è una semplificazione finanziaria e un aggravio documentale insieme. Semplificazione, perché si torna a incassare denaro invece di crediti. Aggravio, perché la detrazione del committente dipende da come l'impresa ha fatturato e da cosa può dimostrare — e se salta, il committente torna dall'impresa." },

    { type: "figure", slot: "bonus-edilizi-come-si-fatturano-1", alt: "Fattura di lavori edili accanto alla ricevuta di un bonifico parlante", caption: "La detrazione del committente dipende da due documenti: la fattura e il bonifico. Uno solo non basta." },

    { type: "h2", text: "Il bonifico parlante e la ritenuta dell'8%", id: "bonifico" },
    { type: "p", text: "È il passaggio più meccanico e insieme quello che salta più spesso. Per accedere alle detrazioni edilizie il pagamento deve avvenire con bonifico bancario o postale dal quale risultino la causale del versamento con il riferimento normativo, il codice fiscale del beneficiario della detrazione e il numero di partita IVA del soggetto a favore del quale il bonifico è effettuato." },
    { type: "p", text: "Su questi bonifici l'istituto che riceve l'ordine opera una ritenuta d'acconto — attualmente nella misura dell'8% — sull'importo accreditato all'impresa, ai sensi dell'art. 25 del D.L. 78/2010. È una ritenuta a titolo di acconto delle imposte dovute dall'impresa, quindi recuperabile, ma nell'immediato è una uscita di cassa." },
    { type: "p", text: "L'effetto finanziario va capito bene, perché è sistematico e non occasionale. Su una fattura da 100.000 euro più IVA, pagata con bonifico parlante, all'impresa arriva l'imponibile decurtato dell'8%: 8.000 euro restano nelle mani dell'erario come acconto. Un'impresa che lavora prevalentemente su interventi agevolati subisce questo prelievo su ogni incasso, e se non lo mette a budget si ritrova una tensione di cassa che non sa spiegarsi." },
    { type: "p", text: "Va segnalato un errore ricorrente dal lato del committente: il bonifico compilato male — causale generica, codice fiscale mancante — pregiudica la detrazione. Non è un problema dell'impresa in senso stretto, ma lo diventa quando il committente se ne accorge a distanza di mesi. Fornire al committente il modello di causale corretto insieme alla fattura è un accorgimento che costa nulla ed evita contestazioni." },

    { type: "h2", text: "Cosa deve fare l'impresa in fattura", id: "fattura" },
    { type: "ol", items: [
      "Separare le lavorazioni agevolabili da quelle che non lo sono: in un intervento misto, solo una parte della spesa accede alla detrazione, e la ripartizione deve risultare dai documenti",
      "Applicare l'aliquota IVA corretta per ciascuna lavorazione, con l'esposizione del calcolo dei beni significativi dove la disciplina lo richiede",
      "Indicare in fattura il riferimento all'intervento e al titolo edilizio, così che il documento sia collegabile alla pratica",
      "Applicare prezzi documentabili e coerenti con i riferimenti di mercato, perché la congruità è oggetto di verifica",
      "Emettere fattura con tempistiche coerenti con i pagamenti e con l'avanzamento dei lavori",
      "Consegnare al committente, insieme alla fattura, l'indicazione della causale corretta per il bonifico",
    ] },
    { type: "p", text: "Il primo punto è quello che produce più contestazioni negli interventi reali. Una ristrutturazione comprende quasi sempre lavorazioni agevolabili e lavorazioni che non lo sono, e la ripartizione non può essere improvvisata in fattura a lavori finiti: deve emergere dal computo metrico. È lo stesso principio che vale per il regime IVA, e per la stessa ragione — la qualificazione si fa prima." },
    { type: "p", text: "Il quarto punto merita attenzione perché è cambiato nel tempo. Gli interventi agevolati sono soggetti a verifiche sulla congruità dei costi, con riferimento a prezzari e massimali definiti dalla normativa di settore. Applicare prezzi fuori mercato non produce solo un rischio per il committente: espone l'impresa nella catena dei controlli, e in caso di contestazione il preventivo diventa il documento centrale." },

    { type: "h2", text: "Il fascicolo che serve tra cinque anni", id: "fascicolo" },
    { type: "p", text: "La ragione per cui insistiamo tanto sulla documentazione è che i controlli sulle detrazioni edilizie arrivano tardi. Non nell'anno dei lavori: negli anni successivi, quando il committente porta le quote in dichiarazione. A quel punto il cantiere è chiuso da tempo, il capocantiere magari non lavora più in azienda, e ricostruire diventa difficile." },
    { type: "table", headers: ["Documento", "Serve a dimostrare", "Chi lo produce"], rows: [
      ["Contratto e computo metrico", "Oggetto dei lavori, prezzi unitari, separazione delle lavorazioni", "Impresa"],
      ["Titolo edilizio e comunicazioni", "Qualificazione urbanistica dell'intervento e legittimità", "Committente e tecnico"],
      ["Fatture", "Corrispettivo, aliquote applicate, riferimento all'intervento", "Impresa"],
      ["Bonifici parlanti", "Pagamento tracciato con i dati richiesti dalla norma", "Committente"],
      ["Asseverazioni e attestazioni tecniche", "Requisiti dell'intervento, dove previsti dalla misura", "Tecnico abilitato"],
      ["Documentazione fotografica datata", "Esecuzione materiale dell'opera: stato ante, in corso, post", "Impresa"],
      ["SAL e verbali", "Avanzamento e corrispondenza tra pagato ed eseguito", "Impresa e direzione lavori"],
    ] },
    { type: "p", text: "La documentazione fotografica datata è la voce più sottovalutata e, nella nostra esperienza, la più risolutiva. Dimostra che l'intervento è stato materialmente eseguito, che è quello descritto negli atti e che l'immobile si trovava nello stato dichiarato. Costa dieci minuti a fine giornata e vale quanto tutto il resto messo insieme." },
    { type: "p", text: "Va conservata per l'intero arco in cui la posizione resta controllabile, che nelle detrazioni pluriennali è ben più lungo dei termini contabili ordinari. Un archivio digitale ordinato per commessa, con le date, è l'investimento organizzativo con il miglior ritorno di tutto il capitolo bonus." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "D.L. 39/2024", principle: "È bloccato in via generale l'esercizio delle opzioni per lo sconto in fattura e per la cessione del credito relative agli interventi edilizi agevolati, salve le fattispecie per le quali risultino soddisfatte le condizioni previste alla data indicata dalla norma.", impact: "Il ruolo dell'impresa torna quello ordinario: si esegue, si fattura, si incassa. Il beneficio resta al committente." },
      { court: "D.L. 78/2010", ref: "Art. 25", principle: "Le banche e le poste operano una ritenuta a titolo di acconto dell'imposta sul reddito dovuta dall'impresa beneficiaria sui pagamenti relativi a bonifici disposti per beneficiare di oneri deducibili o detrazioni d'imposta.", impact: "Sull'incasso arriva l'imponibile decurtato dell'8%: è recuperabile, ma nell'immediato è cassa che non entra." },
      { court: "TUIR", ref: "Art. 16-bis", principle: "La detrazione per gli interventi di recupero del patrimonio edilizio spetta sulle spese documentate, sostenute ed effettivamente rimaste a carico del contribuente, entro i limiti previsti.", impact: "«Documentate» e «rimaste a carico» sono le due parole che reggono l'intero impianto: senza pagamento tracciato e documentazione, la detrazione non c'è." },
    ] },

    { type: "h2", text: "Cosa resta oggi, in sintesi", id: "cosa-resta" },
    { type: "p", text: "Il panorama delle misure è cambiato più volte e continuerà a cambiare: aliquote, massimali e scadenze vanno verificati sulla disciplina vigente al momento in cui la spesa viene sostenuta. Quello che si può dire con stabilità è la struttura." },
    { type: "p", text: "Esiste una detrazione ordinaria per gli interventi di recupero del patrimonio edilizio, prevista dall'art. 16-bis del TUIR, che è l'ossatura permanente del sistema e che nel tempo ha visto aliquote e massimali maggiorati in via temporanea. Esistono misure dedicate all'efficientamento energetico e alla riduzione del rischio sismico. Esiste la detrazione collegata all'acquisto di mobili ed elettrodomestici per gli immobili oggetto di recupero. Esistono misure per l'eliminazione delle barriere architettoniche." },
    { type: "p", text: "Il Superbonus, con le sue aliquote decrescenti, è ormai una coda che riguarda situazioni avviate. Per un'impresa che oggi acquisisce lavori, il riferimento pratico sono le detrazioni ordinarie, e il vantaggio competitivo non sta nel conoscerne le percentuali — quelle le trova chiunque — ma nel saper impostare il cantiere in modo che la detrazione del committente regga." },

    { type: "figure", slot: "bonus-edilizi-come-si-fatturano-2", alt: "Archivio digitale di commessa con foto datate, computi e asseverazioni", caption: "I controlli arrivano anni dopo: l'archivio per commessa è ciò che resta quando il cantiere non c'è più." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Impresa che esegue una ristrutturazione su un appartamento per 120.000 euro più IVA. L'intervento accede alla detrazione per il recupero del patrimonio edilizio; il committente è un privato e paga con bonifici parlanti in tre tranche, in corrispondenza degli stati di avanzamento." },
    { type: "p", text: "Sul piano dell'incasso l'impresa riceve, su ciascun bonifico, l'importo al netto della ritenuta dell'8% sull'imponibile: sui 120.000 euro complessivi sono 9.600 euro che restano come acconto d'imposta. Sono recuperabili in compensazione o a rimborso secondo le regole ordinarie, ma nell'esercizio in cui il cantiere si svolge sono cassa che non entra. Un'impresa con più cantieri agevolati contemporanei vede questa somma moltiplicarsi." },
    { type: "p", text: "Sul piano documentale, l'intervento comprende opere murarie, impianti e la fornitura e posa di serramenti. Le tre componenti hanno trattamenti IVA diversi — con la disciplina dei [beni significativi](/guide/iva-agevolata-lavori-edili) che incide sui serramenti — e non tutte le lavorazioni previste dal capitolato rientrano nel perimetro agevolabile. La ripartizione risulta dal computo metrico allegato al contratto: è ciò che consente, tre anni dopo, di rispondere a una richiesta di documentazione senza doverla ricostruire." },
    { type: "p", text: "Il costo di questa impostazione è di poche ore in fase di preventivo. Il costo dell'impostazione opposta — decidere tutto in fattura a lavori finiti — si manifesta al primo controllo, e ricade sul rapporto con il committente prima ancora che sull'impresa." },
    { type: "note", text: "L'errore da non fare: non mettere a budget la ritenuta dell'8%. Su un'impresa che lavora prevalentemente su interventi agevolati è un prelievo sistematico su ogni incasso, e va inserito nella cassa prospettica come una qualsiasi altra uscita ricorrente. Lo scenario è illustrativo: aliquote e massimali vanno verificati sulla disciplina vigente." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Lo sconto in fattura esiste ancora?", a: "Il D.L. 39/2024 ha bloccato in via generale l'esercizio delle opzioni per sconto in fattura e cessione del credito, con eccezioni per le fattispecie già avviate alle condizioni previste. Per i lavori acquisiti oggi il riferimento pratico è la detrazione ordinaria in capo al committente." },
      { q: "Che cos'è il bonifico parlante?", a: "Un bonifico bancario o postale dal quale risultino la causale con il riferimento normativo, il codice fiscale del beneficiario della detrazione e la partita IVA dell'impresa. Senza questi elementi la detrazione è pregiudicata: conviene fornire al committente il modello di causale insieme alla fattura." },
      { q: "Perché sul bonifico mi trattengono l'8%?", a: "È la ritenuta d'acconto prevista dall'art. 25 del D.L. 78/2010, operata dall'istituto che riceve l'ordine sui bonifici disposti per beneficiare di detrazioni. È un acconto sulle imposte dell'impresa, quindi recuperabile, ma nell'immediato riduce l'incasso e va messo a budget." },
      { q: "Devo separare in fattura le lavorazioni agevolabili?", a: "Sì, e la separazione deve emergere già dal computo metrico. In un intervento misto solo una parte della spesa accede alla detrazione, e improvvisare la ripartizione a lavori finiti produce documenti che non reggono a un controllo." },
      { q: "Chi risponde se la detrazione del committente viene contestata?", a: "Il beneficio è del committente ed è lui a rispondere in prima battuta. Ma le contestazioni riguardano quasi sempre documentazione, congruità dei prezzi o corrispondenza tra fatturato ed eseguito: tutti elementi che dipendono dall'impresa, che si trova coinvolta anche quando non è formalmente parte." },
      { q: "Per quanto tempo devo conservare la documentazione?", a: "Per l'intero arco in cui la posizione resta controllabile, che nelle detrazioni ripartite in più anni è sensibilmente più lungo dei termini contabili ordinari. Un archivio digitale per commessa, con foto datate, è l'accorgimento con il miglior rapporto tra costo e rischio evitato." },
      { q: "I prezzi che applico possono essere contestati?", a: "Sì: gli interventi agevolati sono soggetti a verifiche sulla congruità dei costi, con riferimento a prezzari e massimali di settore. Applicare prezzi documentabili non è una limitazione commerciale ma una protezione, e in caso di contestazione il preventivo diventa il documento centrale." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se lavori prevalentemente su interventi agevolati, due cose vanno verificate subito: che la ritenuta dell'8% sia nella tua cassa prospettica, e che il fascicolo di commessa contenga davvero tutto quello che servirà fra tre anni. Mandaci un contratto tipo con il relativo computo metrico dalla pagina contatti: verifichiamo la separazione delle lavorazioni, le aliquote applicate e la tenuta documentale. Per il contesto leggi le guide su IVA agevolata, accertamenti sui crediti e flussi di cassa." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026: aliquote, massimali e scadenze delle singole misure vanno verificati sulla disciplina vigente al momento in cui la spesa è sostenuta." },
  ],
};
