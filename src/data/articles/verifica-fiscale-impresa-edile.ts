import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "verifica-fiscale-impresa-edile",
  title: "Verifica fiscale all'impresa edile: cosa succede e cosa fare",
  excerpt:
    "Accesso in cantiere o in sede, permanenza dei verificatori, processo verbale di constatazione e i 60 giorni per le osservazioni. Le contestazioni tipiche del settore e come si prepara la difesa mentre la verifica è ancora in corso.",
  category: "Fisco",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink via-trust-dark to-trust",
  keywords: [
    "verifica fiscale impresa edile",
    "accesso guardia di finanza cantiere",
    "processo verbale di constatazione osservazioni",
    "60 giorni pvc statuto contribuente",
    "difesa verifica fiscale edilizia",
    "controllo fiscale costruzioni",
  ],
  intro:
    "Una verifica fiscale a un'impresa edile segue uno schema ricorrente: accesso, acquisizione della documentazione contabile e di cantiere, ricostruzione dei ricavi e dei costi, processo verbale di constatazione. Il momento decisivo non è l'avviso di accertamento ma i 60 giorni successivi al PVC previsti dall'art. 12, comma 7, dello Statuto del contribuente: è lì che una ricostruzione si smonta.",
};

export const seo = {
  seoTitle: "Verifica Fiscale all'Impresa Edile: Cosa Fare",
  metaDescription:
    "Accesso, permanenza, processo verbale e i 60 giorni per le osservazioni: le contestazioni tipiche del settore edile e come si prepara la difesa.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — L'accesso: deve essere autorizzato e motivato; chiedere e conservare copia dell'ordine di accesso. La permanenza: contingentata dallo Statuto del contribuente, con limiti di giorni prorogabili solo in casi motivati. Le dichiarazioni: finiscono a verbale e pesano; rispondere documentalmente, non a memoria. I 60 giorni dopo il PVC: è la fase più sottovalutata e l'unica in cui si può smontare la ricostruzione prima che diventi accertamento. L'avviso: non può essere emesso prima della scadenza dei 60 giorni, salvo motivata urgenza." },

    { type: "h2", text: "Come inizia: l'accesso", id: "accesso" },
    { type: "p", text: "L'accesso presso la sede dell'impresa o presso il cantiere deve essere autorizzato e motivato. L'ordine di accesso indica il perimetro dell'attività, i periodi d'imposta oggetto di controllo e i soggetti verificati: è il documento che delimita ciò che i verificatori possono legittimamente chiedere, e va acquisito in copia fin dal primo momento." },
    { type: "p", text: "Lo Statuto del contribuente riconosce al verificato alcuni diritti che vale la pena conoscere prima che servano: essere informato delle ragioni del controllo e dell'oggetto, farsi assistere da un professionista, chiedere che l'esame dei documenti avvenga presso lo studio del professionista, formulare osservazioni e rilievi che devono essere verbalizzati." },
    { type: "p", text: "La permanenza dei verificatori presso la sede è contingentata, con un numero massimo di giorni lavorativi prorogabile solo in casi motivati. Annotare con precisione date e orari di ogni accesso non è pignoleria: è la base fattuale di eventuali eccezioni successive, e nessuno lo ricostruisce a distanza di mesi." },

    { type: "h2", text: "Cosa cercano in un'impresa edile", id: "cosa-cercano" },
    { type: "table", headers: ["Area", "Contestazione tipica", "Documento che la smonta"], rows: [
      ["Ricavi", "Ricavi presunti da metri quadri costruiti o da consumi di materiali", "Computi metrici, SAL approvati, contratti, contabilità di cantiere"],
      ["Manodopera", "Ore dichiarate incoerenti con l'opera realizzata, lavoro irregolare", "Rapportini ore, denunce Cassa Edile, registri di accesso al cantiere"],
      ["Subappalti", "Operazioni inesistenti, costi non inerenti", "Contratti, computi, notifica preliminare, pagamenti tracciati"],
      ["Rimanenze", "Materiali spesati e non inventariati a fine esercizio", "Inventario di cantiere datato e sottoscritto"],
      ["IVA", "Aliquote agevolate senza presupposti, reverse charge applicato male", "Titolo edilizio, dichiarazioni del committente, computo per lavorazioni"],
      ["Crediti d'imposta", "Credito inesistente o non spettante sui bonus edilizi", "Fascicolo di commessa completo: asseverazioni, bonifici, foto datate"],
    ] },
    { type: "p", text: "Il filo conduttore è evidente: in edilizia la difesa si costruisce con la documentazione di cantiere, non con quella contabile. La contabilità dimostra le registrazioni; il computo metrico, i SAL approvati, i rapportini e le foto datate dimostrano che l'opera è stata realizzata come dichiarato, con quelle ore e con quei materiali." },
    { type: "p", text: "È il motivo per cui il fascicolo di commessa va costruito durante i lavori e conservato per l'intero periodo accertabile. Ricostruirlo a distanza di quattro anni, quando il cantiere è chiuso e il capocantiere non lavora più in azienda, è quasi sempre impossibile." },

    { type: "figure", slot: "verifica-fiscale-impresa-edile-1", alt: "Fascicoli di cantiere e documentazione contabile su un tavolo riunioni", caption: "In edilizia la difesa è nel fascicolo di commessa: la contabilità da sola non basta." },

    { type: "h2", text: "Le dichiarazioni durante la verifica", id: "dichiarazioni" },
    { type: "p", text: "Le dichiarazioni rese durante la verifica vengono verbalizzate e diventano elementi del procedimento. Rispondere con correttezza è doveroso; rispondere a braccio su quantità, ore lavorate o ricostruzioni di costi quando quei dati sono in contabilità è il modo più rapido per consolidare una ricostruzione presuntiva sfavorevole." },
    { type: "p", text: "La condotta corretta è semplice: quando la domanda riguarda un dato documentale, la risposta è che il dato verrà fornito documentalmente entro un termine. Nessuno ha l'obbligo di ricordare a memoria quante ore ha impiegato una squadra su un cantiere di tre anni prima, e una stima approssimativa fornita in buona fede può diventare la base di un rilievo." },
    { type: "p", text: "Vale anche il contrario: le osservazioni del contribuente devono essere verbalizzate su richiesta. Se durante la verifica emerge un fraintendimento su come funziona un processo di cantiere, chiedere che la spiegazione sia messa a verbale è più efficace che affrontarla mesi dopo in sede di contraddittorio." },

    { type: "h2", text: "I 60 giorni dopo il PVC: la fase decisiva", id: "sessanta-giorni" },
    { type: "p", text: "Alla chiusura della verifica viene consegnato il processo verbale di constatazione, che contiene i rilievi. Da quel momento decorrono 60 giorni entro i quali il contribuente può comunicare osservazioni e richieste agli uffici impositori, ai sensi dell'art. 12, comma 7, della legge 212/2000. L'avviso di accertamento non può essere emanato prima di quella scadenza, salvo casi di particolare e motivata urgenza." },
    { type: "p", text: "È la fase più sottovalutata dell'intero procedimento, e per una ragione psicologica comprensibile: il PVC non è un atto impositivo, non chiede soldi, e l'imprenditore tende ad archiviarlo in attesa di ciò che arriverà. Ma è l'unico momento in cui una ricostruzione può essere corretta prima di cristallizzarsi in un atto che poi va impugnato." },
    { type: "ol", items: [
      "Analizzare ogni rilievo separando le questioni di fatto da quelle di diritto: le prime si smontano con documenti, le seconde con argomentazioni",
      "Recuperare la documentazione di cantiere che i verificatori non hanno acquisito o non hanno considerato, e produrla organizzata per rilievo",
      "Verificare la correttezza del metodo di ricostruzione utilizzato, in particolare nelle ricostruzioni presuntive basate su parametri medi",
      "Verificare il rispetto delle garanzie procedurali: autorizzazione all'accesso, durata della permanenza, verbalizzazione delle osservazioni",
      "Depositare le osservazioni entro il termine, in modo strutturato e con gli allegati numerati: è un documento che l'ufficio deve valutare e di cui deve dare conto",
    ] },
    { type: "p", text: "Un'osservazione ben costruita produce due effetti. Nel migliore dei casi induce l'ufficio a ridurre o abbandonare rilievi; nel peggiore, costringe l'accertamento a confrontarsi con argomenti e documenti già in atti, il che rafforza sensibilmente la posizione in un eventuale giudizio." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Statuto del contribuente", ref: "Art. 12, comma 7, L. 212/2000", principle: "Dopo il rilascio della copia del processo verbale di chiusura delle operazioni, il contribuente può comunicare entro sessanta giorni osservazioni e richieste; l'avviso di accertamento non può essere emanato prima della scadenza del termine, salvo casi di particolare e motivata urgenza.", impact: "È il termine più importante dell'intero procedimento: un avviso emesso prima, senza urgenza motivata, è viziato." },
      { court: "Statuto del contribuente", ref: "Art. 12, commi 1-5", principle: "Gli accessi e le verifiche si svolgono con modalità che arrechino la minore turbativa possibile; la permanenza presso la sede del contribuente è contingentata nei termini di legge, prorogabili in casi motivati.", impact: "Date e orari di ogni accesso vanno annotati: sono la base fattuale di eventuali eccezioni sulla durata." },
      { court: "D.P.R. 600/1973", ref: "Art. 43", principle: "Gli avvisi di accertamento devono essere notificati entro il 31 dicembre del quinto anno successivo a quello di presentazione della dichiarazione; in caso di omessa dichiarazione, entro il settimo.", impact: "La documentazione di cantiere va conservata per l'intero arco accertabile, non per il tempo dei soli obblighi contabili." },
    ] },

    { type: "h2", text: "Dopo l'accertamento: le strade disponibili", id: "dopo" },
    { type: "p", text: "Se l'avviso arriva, le opzioni non sono solo pagare o fare ricorso. L'accertamento con adesione consente di aprire un contraddittorio con l'ufficio e di definire la pretesa con una riduzione delle sanzioni, e la presentazione dell'istanza sospende il termine per il ricorso di 90 giorni. È lo strumento più usato quando i rilievi sono in parte fondati." },
    { type: "p", text: "L'autotutela è la strada per gli errori evidenti, quelli che non richiedono valutazione: un periodo d'imposta sbagliato, un documento già prodotto e non considerato, un calcolo errato. Non sospende però i termini di impugnazione, e questo va tenuto presente." },
    { type: "p", text: "Il ricorso alla Corte di giustizia tributaria va proposto entro 60 giorni dalla notifica, con possibilità di chiedere la sospensione dell'atto quando dall'esecuzione può derivare un danno grave e irreparabile. La scelta tra adesione e ricorso non è alternativa in senso stretto: l'adesione può essere tentata e, se non si conclude, il termine per il ricorso riprende a decorrere." },

    { type: "figure", slot: "verifica-fiscale-impresa-edile-2", alt: "Calendario con evidenziato il termine di sessanta giorni dal PVC", caption: "Sessanta giorni dal PVC: è l'unica finestra in cui la ricostruzione si può ancora correggere." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Verifica su un'impresa di costruzioni per tre annualità. Il PVC contesta maggiori ricavi per 640.000 euro complessivi, ricostruiti sulla base di un rapporto medio tra costo dei materiali impiegati e ricavi dichiarati, applicato uniformemente a tutti i cantieri del triennio." },
    { type: "p", text: "L'analisi mostra che la ricostruzione ignora la composizione delle commesse: nel triennio l'impresa ha eseguito tre cantieri di sola posa, con materiali forniti dal committente, e due cantieri di ristrutturazione ad altissima incidenza di manodopera. Applicare a queste commesse un rapporto medio calcolato su lavori chiavi in mano produce una distorsione strutturale." },
    { type: "p", text: "Nelle osservazioni ai sensi dell'art. 12, comma 7, vengono prodotti i contratti dei cinque cantieri, i computi metrici che evidenziano la fornitura a carico del committente e i SAL approvati. La ricostruzione viene ricalcolata per gruppi omogenei di commesse. Non è un tecnicismo: è la differenza tra un metodo presuntivo applicabile e uno che non tiene conto della realtà dell'attività verificata." },
    { type: "note", text: "L'errore da non fare: aspettare l'avviso di accertamento per attivarsi. I 60 giorni dopo il PVC sono la finestra in cui i documenti hanno il massimo effetto, perché la pretesa non è ancora stata formalizzata. Lo scenario è illustrativo: ogni verifica va valutata sui rilievi concreti." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Cosa devo fare appena arrivano i verificatori?", a: "Chiedere e conservare copia dell'ordine di accesso, verificare il perimetro indicato, avvisare immediatamente il proprio consulente e annotare data e ora dell'accesso. Non consegnare documentazione estranea al perimetro dell'atto e chiedere che ogni osservazione rilevante sia messa a verbale." },
      { q: "Posso far esaminare i documenti presso lo studio del commercialista?", a: "Sì, lo Statuto del contribuente lo consente su richiesta. È una facoltà utile quando la permanenza in azienda interferisce con l'attività, ma va valutata caso per caso perché sposta anche la gestione operativa della verifica." },
      { q: "Quanto possono restare i verificatori in azienda?", a: "La permanenza presso la sede è contingentata dallo Statuto del contribuente in un numero massimo di giorni lavorativi, prorogabile solo in casi motivati. Le date e gli orari di ciascun accesso vanno annotati con precisione: sono la base di eventuali eccezioni." },
      { q: "Il PVC è già una richiesta di pagamento?", a: "No, il processo verbale di constatazione non è un atto impositivo e non chiede somme: contiene i rilievi. La pretesa nasce con l'avviso di accertamento. Proprio per questo i 60 giorni successivi sono la fase in cui intervenire, prima che i rilievi si trasformino in un atto da impugnare." },
      { q: "Cosa succede se l'avviso arriva prima dei 60 giorni?", a: "L'art. 12, comma 7, della legge 212/2000 vieta l'emanazione dell'avviso prima della scadenza del termine, salvo casi di particolare e motivata urgenza. Un avviso emesso prima, senza che l'urgenza sia specificamente motivata nell'atto, presenta un vizio che va eccepito." },
      { q: "Quali documenti di cantiere devo conservare e per quanto?", a: "Contratti, computi metrici, SAL approvati, rapportini ore, contratti di subappalto, notifiche preliminari, inventari di cantiere, titoli edilizi e, per i bonus, l'intero fascicolo con asseverazioni, bonifici e foto datate. Per l'intero periodo accertabile, quindi ben oltre i termini contabili ordinari." },
      { q: "Conviene l'adesione o il ricorso?", a: "Dipende dalla fondatezza dei rilievi. L'adesione è indicata quando la pretesa è in parte fondata e consente una riduzione delle sanzioni, con sospensione di 90 giorni del termine per il ricorso. Il ricorso è la strada quando la ricostruzione è viziata nel metodo o smentita dai documenti." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai ricevuto un processo verbale di constatazione, il tempo che hai è già iniziato a correre. Mandacelo insieme alla documentazione di cantiere delle annualità interessate: analizziamo i rilievi, individuiamo quelli attaccabili sul metodo e quelli smontabili con i documenti, e prepariamo le osservazioni entro il termine. Per il quadro d'insieme leggi le guide su accertamento induttivo e su ravvedimento e adesione." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
