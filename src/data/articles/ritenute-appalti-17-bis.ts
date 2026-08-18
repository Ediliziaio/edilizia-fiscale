import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "ritenute-appalti-17-bis",
  title: "Ritenute negli appalti: quando scatta l'art. 17-bis e come ottenere l'esonero",
  excerpt:
    "Sopra 200.000 euro annui, con prevalenza di manodopera presso le sedi del committente e beni strumentali suoi, l'appaltatore non può compensare le ritenute e deve trasmettere le deleghe. L'esonero passa dal certificato di regolarità.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "11 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "ritenute appalti 17-bis",
    "durf certificato agenzia entrate",
    "appalti ad alta intensità di manodopera ritenute",
    "divieto compensazione ritenute appalti",
    "obblighi committente appalto ritenute",
    "esonero art 17 bis dlgs 241/1997",
  ],
  intro:
    "L'art. 17-bis del D.lgs. 241/1997 si applica quando un committente affida opere o servizi per oltre 200.000 euro annui, con prevalente utilizzo di manodopera, presso le sue sedi e con beni strumentali a lui riconducibili. I quattro requisiti devono ricorrere insieme. Quando ricorrono, l'appaltatore non può compensare le ritenute e deve trasmettere le deleghe di versamento, salvo esonero.",
};

export const seo = {
  seoTitle: "Ritenute negli Appalti: l'Art. 17-bis e l'Esonero",
  metaDescription:
    "I quattro requisiti che fanno scattare l'art. 17-bis, gli obblighi di appaltatore e committente e come ottenere l'esonero con il certificato di regolarità.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — I quattro requisiti, tutti necessari: affidamento superiore a 200.000 euro annui allo stesso soggetto, prevalente utilizzo di manodopera, esecuzione presso le sedi di attività del committente, utilizzo di beni strumentali di proprietà del committente o comunque a lui riconducibili. Gli obblighi: l'appaltatore versa le ritenute senza compensazione e trasmette le deleghe con il dettaglio dei lavoratori; il committente controlla e sospende i pagamenti in caso di inadempienza. L'esonero: certificato di sussistenza dei requisiti rilasciato dall'Agenzia delle Entrate, con validità limitata nel tempo." },

    { type: "h2", text: "Perché esiste questa norma e chi colpisce", id: "perche" },
    { type: "p", text: "La disposizione nasce per contrastare un fenomeno preciso: le imprese che si aggiudicano appalti ad alta intensità di manodopera, applicano ritenute ai lavoratori e poi non le versano, compensandole con crediti fiscali inesistenti o inutilizzabili. Quando l'impresa scompare, il danno resta all'erario e spesso anche ai lavoratori." },
    { type: "p", text: "Il legislatore ha reagito su due fronti: ha vietato all'appaltatore di compensare quelle ritenute con propri crediti, e ha responsabilizzato il committente, che deve verificare e sospendere i pagamenti se l'appaltatore non dimostra di aver versato. È una norma di sistema, non di settore, ma in edilizia trova applicazione frequente." },
    { type: "p", text: "Va detto subito che in molti appalti edili la norma non si applica, ed è un punto che genera confusione. Il requisito dei beni strumentali riconducibili al committente esclude tutti i casi in cui l'impresa lavora con mezzi e attrezzature propri, che nel settore costruzioni è la situazione ordinaria. La verifica va fatta contratto per contratto." },

    { type: "h2", text: "I quattro requisiti, uno per uno", id: "requisiti" },
    { type: "table", headers: ["Requisito", "Cosa significa", "Dove si sbaglia"], rows: [
      ["Soglia di 200.000 euro annui", "Importo complessivo delle opere o servizi affidati allo stesso soggetto nell'anno solare", "Guardare il singolo contratto invece del totale annuo verso quel soggetto"],
      ["Prevalente utilizzo di manodopera", "La manodopera deve essere la componente prevalente della prestazione", "Valutare a occhio senza confrontare il costo del lavoro con il valore complessivo"],
      ["Esecuzione presso le sedi del committente", "I lavoratori operano nei luoghi di attività del committente", "Estendere il concetto a qualunque cantiere, anche di terzi"],
      ["Beni strumentali riconducibili al committente", "Attrezzature e mezzi di proprietà del committente o a lui riconducibili", "Ignorare il requisito e applicare la norma per prudenza, con costi di cassa evitabili"],
    ] },
    { type: "p", text: "Il quarto requisito è quello che nella pratica decide la maggior parte dei casi. Un'impresa edile che entra in cantiere con i propri escavatori, i propri ponteggi e le proprie attrezzature non utilizza beni strumentali del committente: la norma non si applica, e applicarla comunque significa rinunciare senza necessità alla compensazione delle ritenute, con un impatto finanziario evitabile." },
    { type: "p", text: "Attenzione però alla nozione di riconducibilità, che è più ampia della proprietà. Rientrano i beni concessi in uso dal committente a qualunque titolo, anche gratuitamente. Se il committente mette a disposizione la gru di cantiere, i ponteggi già montati o l'impianto elettrico di cantiere, il requisito può considerarsi integrato: la valutazione va fatta sul contratto e sulla realtà operativa." },

    { type: "figure", slot: "ritenute-appalti-17-bis-1", alt: "Cantiere con gru e attrezzature, contratto d'appalto in primo piano", caption: "Chi mette i mezzi in cantiere è il fattore che più spesso decide se la norma si applica." },

    { type: "h2", text: "Cosa deve fare l'appaltatore", id: "obblighi-appaltatore" },
    { type: "ol", items: [
      "Versare le ritenute fiscali sui redditi di lavoro dipendente e assimilati relative ai lavoratori impiegati nell'appalto, con F24 distinti per committente e senza possibilità di compensazione orizzontale con propri crediti",
      "Trasmettere al committente, entro cinque giorni lavorativi dalla scadenza del versamento, copia delle deleghe di pagamento utilizzate",
      "Trasmettere un elenco nominativo dei lavoratori impiegati nel mese presso il committente, con codice fiscale e dettaglio delle ore di lavoro prestate",
      "Indicare per ciascun lavoratore l'ammontare della retribuzione corrisposta collegata alla prestazione nell'appalto e il dettaglio delle ritenute operate",
      "In alternativa a tutto quanto sopra, consegnare al committente il certificato di sussistenza dei requisiti che dà diritto all'esonero",
    ] },
    { type: "p", text: "Il divieto di compensazione è la parte che pesa di più. Un'impresa che ha crediti IVA o crediti d'imposta e che contava di usarli per abbattere gli F24 si trova a dover versare per intero le ritenute di quei lavoratori. Su un appalto significativo l'impatto mensile di cassa è rilevante e va messo a preventivo, non scoperto alla prima scadenza." },

    { type: "h2", text: "Cosa deve fare il committente", id: "obblighi-committente" },
    { type: "p", text: "Il committente non è un semplice destinatario di documenti: ha un obbligo di controllo con conseguenze proprie. Deve verificare che le deleghe trasmesse corrispondano ai versamenti dovuti per i lavoratori impiegati nel suo appalto e, se l'appaltatore non trasmette la documentazione o risulta un omesso versamento, deve sospendere il pagamento dei corrispettivi." },
    { type: "p", text: "La sospensione non è facoltativa e opera fino a concorrenza del 20% del valore complessivo dell'opera o del servizio, oppure per un importo pari alle ritenute non versate. Il committente deve inoltre darne comunicazione all'Agenzia delle Entrate entro novanta giorni." },
    { type: "p", text: "L'inosservanza espone il committente a una sanzione autonoma, commisurata a quanto avrebbe dovuto trattenere. È il motivo per cui i committenti strutturati inseriscono nei contratti d'appalto clausole specifiche sulla trasmissione della documentazione e sulla sospensione dei pagamenti: per l'appaltatore, ignorarle significa vedersi bloccare gli incassi." },

    { type: "caselaw", title: "Cosa dice la norma", items: [
      { court: "D.lgs. 241/1997", ref: "Art. 17-bis, comma 1", principle: "I committenti che affidano il compimento di un'opera o di un servizio di importo complessivo annuo superiore a 200.000 euro, caratterizzati da prevalente utilizzo di manodopera presso le sedi del committente con utilizzo di beni strumentali a lui riconducibili, sono tenuti a richiedere copia delle deleghe di pagamento delle ritenute.", impact: "I quattro requisiti sono cumulativi: se ne manca uno, l'intero apparato di obblighi non si attiva." },
      { court: "D.lgs. 241/1997", ref: "Art. 17-bis, comma 5", principle: "Gli obblighi non trovano applicazione se le imprese appaltatrici comunicano al committente la certificazione, rilasciata dall'Agenzia delle Entrate, che attesta la sussistenza dei requisiti di regolarità previsti.", impact: "Il certificato è la via ordinaria per uscire dal meccanismo: va richiesto e rinnovato con continuità, non alla prima contestazione." },
      { court: "D.lgs. 241/1997", ref: "Art. 17-bis, comma 3", principle: "In caso di mancata trasmissione della documentazione o di omesso versamento delle ritenute, il committente sospende il pagamento dei corrispettivi maturati e ne dà comunicazione all'Agenzia delle Entrate.", impact: "Per l'appaltatore l'effetto è immediato e finanziario: gli incassi si fermano finché la posizione non è regolarizzata." },
    ] },

    { type: "h2", text: "L'esonero: il certificato di regolarità", id: "esonero" },
    { type: "p", text: "L'uscita ordinaria dal meccanismo passa dal certificato rilasciato dall'Agenzia delle Entrate che attesta la sussistenza di determinati requisiti di regolarità. Nella prassi viene chiamato DURF, per analogia con il DURC contributivo, ed è messo a disposizione presso gli uffici territoriali." },
    { type: "ul", items: [
      "Essere in attività da almeno tre anni ed essere in regola con gli obblighi dichiarativi",
      "Aver eseguito nel corso dei periodi d'imposta di riferimento versamenti complessivi registrati nel conto fiscale per un importo non inferiore al 10% dei ricavi o compensi risultanti dalle dichiarazioni",
      "Non avere iscrizioni a ruolo o accertamenti esecutivi affidati agli agenti della riscossione, relativi a imposte sui redditi, IRAP, ritenute e contributi previdenziali, per importi superiori a 50.000 euro, con scadenze già decorse e non oggetto di provvedimenti di sospensione o rateazione in regola",
    ] },
    { type: "p", text: "Il certificato ha una validità limitata nel tempo dalla data del rilascio, il che significa che va rinnovato con continuità se si lavora stabilmente su appalti soggetti alla norma. Molte imprese lo richiedono una volta e poi se ne dimenticano: alla scadenza gli obblighi si riattivano automaticamente, e il committente è tenuto a chiederlo aggiornato." },
    { type: "p", text: "Il secondo requisito — versamenti pari almeno al 10% dei ricavi — è quello che più spesso manca alle imprese che lavorano molto in reverse charge o in split payment, proprio perché quei regimi riducono strutturalmente l'IVA versata. È una situazione da verificare in anticipo, perché non si risolve nel giorno in cui serve il certificato." },

    { type: "figure", slot: "ritenute-appalti-17-bis-2", alt: "Deleghe F24 e elenco nominativo dei lavoratori impiegati nell'appalto", caption: "Cinque giorni lavorativi dalla scadenza per trasmettere le deleghe: è un adempimento a calendario fisso." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa di manutenzioni che opera stabilmente presso lo stabilimento di un committente industriale, con un contratto annuale da 340.000 euro. I lavoratori operano all'interno dello stabilimento, la manodopera è la componente largamente prevalente e il committente mette a disposizione carrelli elevatori, ponteggi fissi e l'officina interna." },
    { type: "p", text: "Tutti e quattro i requisiti ricorrono: la norma si applica. L'impresa ha però un credito IVA di 90.000 euro che contava di compensare progressivamente. Con il divieto di compensazione sulle ritenute dei lavoratori impiegati in quell'appalto — circa 7.800 euro al mese — l'impatto annuo di cassa è di oltre 90.000 euro da versare per intero, mentre il credito IVA resta fermo." },
    { type: "p", text: "La soluzione praticabile è duplice: richiedere il certificato di regolarità, verificando prima di avere il requisito dei versamenti pari almeno al 10% dei ricavi, e in parallelo attivare la richiesta di rimborso del credito IVA anziché contare sulla compensazione. Il secondo intervento ha tempi più lunghi, ma è quello che risolve strutturalmente la tensione di cassa." },
    { type: "note", text: "L'errore da non fare: applicare la norma per prudenza a tutti gli appalti sopra i 200.000 euro senza verificare gli altri tre requisiti. In edilizia, dove l'impresa lavora quasi sempre con mezzi propri, il requisito dei beni strumentali del committente spesso non ricorre: rinunciare alla compensazione senza esserne obbligati è un costo finanziario evitabile. Lo scenario è illustrativo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "La soglia di 200.000 euro è per contratto o per anno?", a: "È riferita all'importo complessivo annuo delle opere e dei servizi affidati allo stesso soggetto. Più contratti distinti verso lo stesso committente si sommano: guardare il singolo contratto è uno degli errori di valutazione più frequenti, in entrambe le direzioni." },
      { q: "Vale anche se lavoro con i miei mezzi?", a: "Se i beni strumentali utilizzati sono propri e non riconducibili al committente, il quarto requisito non ricorre e la norma non si applica. È la situazione ordinaria di molti appalti edili. La nozione di riconducibilità è però più ampia della proprietà: comprende i beni messi a disposizione dal committente a qualunque titolo." },
      { q: "Cosa succede se non trasmetto le deleghe?", a: "Il committente è tenuto a sospendere il pagamento dei corrispettivi maturati, fino a concorrenza del 20% del valore dell'opera o dell'importo delle ritenute non versate, e a comunicarlo all'Agenzia delle Entrate. Per l'appaltatore l'effetto è immediato: gli incassi si fermano." },
      { q: "Come ottengo il certificato di esonero?", a: "Va richiesto agli uffici dell'Agenzia delle Entrate territorialmente competenti. I requisiti riguardano l'anzianità di attività, la regolarità dichiarativa, i versamenti in rapporto ai ricavi e l'assenza di debiti iscritti a ruolo sopra la soglia di legge. Ha validità limitata e va rinnovato." },
      { q: "Il certificato ha una scadenza?", a: "Sì, ha una validità limitata dalla data di rilascio. Alla scadenza gli obblighi si riattivano automaticamente e il committente deve chiedere il documento aggiornato. Chi lavora stabilmente su appalti soggetti alla norma deve mettere il rinnovo a calendario." },
      { q: "Il divieto di compensazione riguarda tutte le ritenute?", a: "Riguarda le ritenute sui redditi di lavoro dipendente e assimilati dei lavoratori impiegati nell'esecuzione di quell'appalto. Gli altri versamenti restano compensabili secondo le regole ordinarie, ma la separazione richiede F24 distinti e una gestione attenta del personale impiegato." },
      { q: "Se ho crediti IVA elevati posso comunque compensarli?", a: "Non su quelle ritenute. La strada alternativa è la richiesta di rimborso del credito IVA, anche in via trimestrale al ricorrere dei presupposti, che è spesso la soluzione strutturale per le imprese che lavorano molto in reverse charge o in split payment." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai appalti sopra i 200.000 euro annui verso lo stesso committente, la prima cosa da fare è verificare se i quattro requisiti ricorrono davvero: è una verifica contrattuale che si fa in poche ore e che può evitarti un impatto di cassa rilevante. Mandaci i contratti e l'elenco dei committenti principali dalla pagina contatti. Per il quadro d'insieme leggi la guida alla fiscalità dell'impresa edile e quella sui flussi di cassa di cantiere." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
