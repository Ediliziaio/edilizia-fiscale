import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "flussi-di-cassa-impresa-edile",
  title: "Flussi di cassa in edilizia: perché il fatturato cresce e il conto no",
  excerpt:
    "Il capitale circolante di cantiere spiega quasi tutto: anticipi ai fornitori, SAL incassati in ritardo, ritenute a garanzia, crediti IVA. Come si costruisce una cassa prospettica a tredici settimane e come si finanzia la crescita.",
  category: "Controllo",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust-dark to-trust",
  keywords: [
    "flussi di cassa impresa edile",
    "capitale circolante cantiere",
    "cash flow edilizia",
    "cassa prospettica tredici settimane",
    "ritenuta a garanzia contabilità",
    "anticipo sal banca",
  ],
  intro:
    "In edilizia la crescita consuma cassa: ogni cantiere nuovo richiede materiali, manodopera e mezzi prima di produrre incassi, e i pagamenti arrivano quando l'esposizione è già massima. Il fatturato che sale mentre il conto corrente peggiora non è un paradosso: è il funzionamento normale del capitale circolante di commessa, e va governato con una cassa prospettica.",
};

export const seo = {
  seoTitle: "Flussi di Cassa in Edilizia: Governare il Circolante",
  metaDescription:
    "Anticipi, SAL incassati tardi, ritenute a garanzia e crediti IVA: come costruire una cassa prospettica a tredici settimane e finanziare la crescita.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il meccanismo: in edilizia i costi precedono gli incassi, e ogni cantiere nuovo assorbe cassa prima di restituirla. Le voci che immobilizzano: anticipi ai fornitori, materiali a magazzino, lavori eseguiti e non ancora fatturati, SAL fatturati e non incassati, ritenute a garanzia, crediti IVA da reverse charge e split payment. Lo strumento: la cassa prospettica rolling a tredici settimane, aggiornata settimanalmente. La regola: la crescita va finanziata prima, non rincorsa dopo." },

    { type: "h2", text: "Perché il fatturato non è cassa", id: "fatturato-non-cassa" },
    { type: "p", text: "L'imprenditore edile che cresce vive un'esperienza controintuitiva: più lavoro acquisisce, più il conto corrente peggiora. Non è un problema di redditività, ed è per questo che è difficile da diagnosticare guardando il conto economico: è il ciclo del circolante di commessa." },
    { type: "p", text: "La sequenza è sempre la stessa. L'impresa acquista materiali e paga i fornitori a trenta o sessanta giorni; paga la manodopera ogni mese; sostiene i costi di allestimento e i noli fin dal primo giorno. Il primo SAL matura dopo settimane, viene approvato dopo altri giorni, viene fatturato e incassato dopo altri sessanta o novanta. Nel frattempo il cantiere ha già assorbito una quota rilevante dei costi totali." },
    { type: "p", text: "Su una commessa singola questo si assorbe. Su cinque commesse aperte contemporaneamente in fase iniziale, l'assorbimento è simultaneo, e l'impresa si trova con un portafoglio ordini record e la tesoreria in tensione. È il momento in cui molte imprese edili solide entrano in difficoltà: non per perdite, ma per squilibrio finanziario." },

    { type: "h2", text: "Le voci che immobilizzano cassa, in ordine di peso", id: "voci" },
    { type: "table", headers: ["Voce", "Perché immobilizza", "Leva disponibile"], rows: [
      ["Lavori eseguiti e non fatturati", "Il SAL matura ma non è ancora approvato o fatturabile", "Accorciare i cicli di SAL nel contratto, presidiare l'approvazione"],
      ["Crediti verso committenti", "Fatture emesse e non incassate", "Termini contrattuali, interessi di mora, anticipo su fatture"],
      ["Ritenute a garanzia", "Quota trattenuta a ogni SAL fino al collaudo", "Sostituzione con polizza fideiussoria, dove il contratto lo consente"],
      ["Materiali a magazzino", "Approvvigionati e non ancora posati", "Programmazione degli acquisti sull'avanzamento reale"],
      ["Anticipi ai fornitori", "Pagamento anticipato su forniture speciali", "Negoziazione dei termini, garanzie alternative"],
      ["Crediti IVA", "Reverse charge e split payment riducono l'IVA incassata", "Rimborso infrannuale trimestrale, compensazione nei limiti"],
      ["Cauzioni e depositi", "Somme vincolate per gare e contratti", "Uso di garanzie fideiussorie al posto dei depositi in denaro"],
    ] },
    { type: "p", text: "Le ritenute a garanzia sono la voce più sottovalutata. Una trattenuta a ogni SAL, su tutte le commesse aperte, cumula un importo che resta immobilizzato fino al collaudo e talvolta oltre. Dove il contratto lo consente, sostituirle con una polizza fideiussoria libera liquidità a un costo che è una frazione del costo del denaro." },

    { type: "figure", slot: "flussi-di-cassa-impresa-edile-1", alt: "Prospetto di cassa prospettica settimanale con incassi e pagamenti", caption: "La cassa prospettica a tredici settimane è lo strumento operativo: si aggiorna ogni settimana, non ogni trimestre." },

    { type: "h2", text: "La cassa prospettica a tredici settimane", id: "cassa-prospettica" },
    { type: "p", text: "Lo strumento operativo è un prospetto rolling che copre le tredici settimane successive e viene aggiornato ogni settimana. Tredici settimane, cioè un trimestre, è l'orizzonte in cui le decisioni sono ancora possibili: si può rinegoziare una scadenza, accelerare un SAL, attivare un affidamento, rimandare un acquisto." },
    { type: "ol", items: [
      "Saldo iniziale di cassa e affidamenti disponibili, per banca",
      "Incassi previsti per settimana: SAL già fatturati con data attesa realistica, non contrattuale, e SAL in maturazione con probabilità di approvazione",
      "Pagamenti certi: stipendi, contributi, F24, rate di finanziamento, canoni",
      "Pagamenti fornitori per scadenza effettiva, distinguendo quelli negoziabili da quelli non differibili",
      "Saldo settimanale e saldo cumulato, con evidenza delle settimane in cui l'affidamento viene superato",
    ] },
    { type: "p", text: "Il punto due è quello che determina l'utilità dell'intero strumento. Inserire le date di incasso contrattuali anziché quelle realmente osservate su quel committente rende il prospetto inutile. Ogni committente ha un ritardo medio storico: va misurato e applicato." },
    { type: "p", text: "Le settimane in cui il saldo cumulato scende sotto zero o supera l'affidamento sono l'output vero del prospetto. Se emergono con otto settimane di anticipo, si risolvono con una telefonata; se emergono il venerdì della settimana stessa, si risolvono con un insoluto." },

    { type: "caselaw", title: "Riferimenti utili", items: [
      { court: "D.lgs. 231/2002", ref: "Ritardi di pagamento nelle transazioni commerciali", principle: "Gli interessi moratori decorrono automaticamente dalla scadenza del termine di pagamento, senza necessità di costituzione in mora.", impact: "Il credito verso i committenti che pagano tardi ha un costo che l'impresa può, e dovrebbe, quantificare e richiedere." },
      { court: "Codice civile", ref: "Art. 2086, comma 2", principle: "L'imprenditore deve istituire assetti adeguati anche in funzione della rilevazione tempestiva della crisi d'impresa e della perdita della continuità aziendale.", impact: "Una cassa prospettica documentata è uno degli elementi con cui si dimostra l'adeguatezza degli assetti." },
      { court: "D.P.R. 633/1972", ref: "Art. 30", principle: "Il rimborso dell'eccedenza IVA detraibile può essere richiesto, al ricorrere dei presupposti, anche in via infrannuale con cadenza trimestrale.", impact: "Per chi lavora in reverse charge o split payment è la leva più rapida per liberare liquidità immobilizzata." },
    ] },

    { type: "h2", text: "Come si finanzia la crescita", id: "finanziare" },
    { type: "p", text: "Una volta misurato il fabbisogno, le leve sono di tre tipi. Le leve operative agiscono sul ciclo: SAL più frequenti, approvazioni presidiate, acquisti programmati sull'avanzamento reale, sostituzione delle ritenute con polizze. Costano poco e vanno esaurite per prime." },
    { type: "p", text: "Le leve finanziarie a breve accompagnano il ciclo: anticipo su fatture o su SAL certificati, factoring pro soluto per i crediti verso la pubblica amministrazione, affidamenti di cassa dimensionati sul picco e non sulla media. Il criterio corretto è che il debito a breve finanzi il circolante, non gli investimenti." },
    { type: "p", text: "Le leve strutturali riguardano il capitale: apporti dei soci, finanziamento soci postergato, finanziamenti a medio termine per la quota permanente del circolante. Un'impresa che cresce stabilmente ha un fabbisogno di circolante che non torna mai a zero: quella quota è un investimento permanente e va finanziata con fonti coerenti, non con lo scoperto di conto." },
    { type: "p", text: "Il documento che rende possibile ottenere queste risorse a condizioni ragionevoli è lo stesso che serve a governarle: il portafoglio ordini con margine per commessa e la cassa prospettica. Una richiesta di affidamento accompagnata da questi due documenti riceve una risposta diversa da una richiesta accompagnata dal solo bilancio depositato." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Impresa con ricavi che passano da 3,2 a 4,8 milioni in un esercizio. L'utile netto sale da 96.000 a 154.000 euro. Il conto corrente, però, passa da un saldo positivo di 120.000 euro a un utilizzo dell'affidamento per 260.000 euro." },
    { type: "p", text: "L'analisi del circolante spiega il movimento. I lavori eseguiti e non fatturati salgono di 180.000 euro, i crediti verso committenti di 240.000, le ritenute a garanzia di 95.000, il magazzino di cantiere di 60.000. I debiti verso fornitori crescono solo di 190.000 euro, perché i fornitori strategici hanno chiesto termini più brevi a fronte dei maggiori volumi. Il credito IVA cresce di 45.000 euro per effetto del reverse charge." },
    { type: "p", text: "L'assorbimento netto di circolante è di circa 430.000 euro a fronte di 154.000 euro di utile: la differenza è esattamente il peggioramento della posizione finanziaria. Nessun errore gestionale, nessuna perdita: solo crescita non finanziata. Le contromisure immediate — richiesta di rimborso IVA trimestrale, sostituzione delle ritenute con polizza, anticipo su SAL certificati — recuperano circa la metà del fabbisogno; il resto richiede una fonte strutturale." },
    { type: "note", text: "L'errore da non fare: leggere la tensione di cassa come un problema di redditività e reagire tagliando i costi. In questo scenario i costi non c'entrano: il problema è che la crescita è stata finanziata con lo scoperto di conto anziché con fonti coerenti. Lo scenario è illustrativo." },

    { type: "figure", slot: "flussi-di-cassa-impresa-edile-2", alt: "Grafico dell'andamento del capitale circolante rispetto al fatturato", caption: "La crescita assorbe circolante: se non la si finanzia prima, la si rincorre dopo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Perché cresco e ho sempre meno soldi in cassa?", a: "Perché in edilizia i costi precedono gli incassi. Ogni cantiere nuovo assorbe materiali, manodopera e noli prima di produrre il primo incasso: se ne apri diversi contemporaneamente, l'assorbimento è simultaneo. È un problema di finanziamento del circolante, non di redditività." },
      { q: "Su quale orizzonte va costruita la cassa prospettica?", a: "Tredici settimane, aggiornate ogni settimana con criterio rolling. È l'orizzonte in cui le decisioni sono ancora possibili: rinegoziare una scadenza, accelerare un SAL, attivare un affidamento. Oltre il trimestre l'attendibilità cala; sotto il mese non c'è più tempo per agire." },
      { q: "Come si riducono le ritenute a garanzia immobilizzate?", a: "Dove il contratto lo consente, sostituendole con una polizza fideiussoria: il costo della polizza è una frazione del costo del denaro immobilizzato. È una richiesta da avanzare in fase di negoziazione contrattuale, non a cantiere avviato." },
      { q: "Conviene il factoring per i crediti verso la PA?", a: "Dipende dal costo del denaro e dall'alternativa. Il factoring pro soluto trasferisce anche il rischio di insolvenza ed è particolarmente adatto ai crediti certificati verso la pubblica amministrazione. Va confrontato con l'anticipo bancario, che costa meno ma lascia il rischio all'impresa." },
      { q: "Che documenti chiede la banca per aumentare l'affidamento?", a: "Oltre al bilancio, un'impresa edile che presenta portafoglio ordini con margine per commessa e cassa prospettica documentata ottiene condizioni diverse. Il rating premia la prevedibilità, e la prevedibilità in edilizia si dimostra con i numeri di gestione, non con quelli consuntivi." },
      { q: "Il credito IVA posso recuperarlo prima della dichiarazione?", a: "Sì, al ricorrere dei presupposti previsti dall'art. 30 del D.P.R. 633/1972 il rimborso può essere chiesto in via infrannuale con cadenza trimestrale. Per chi lavora molto in reverse charge o con la pubblica amministrazione è la leva più rapida per liberare liquidità." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se il tuo fatturato è cresciuto negli ultimi due anni e la posizione bancaria è peggiorata, il problema quasi certamente non è nei costi. Mandaci gli ultimi due bilanci, la situazione contabile aggiornata e l'elenco degli affidamenti: ricostruiamo l'assorbimento di circolante e ti indichiamo quali leve, nel tuo caso, liberano cassa più in fretta. Per il quadro d'insieme leggi le guide sul controllo di gestione e sullo split payment." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026." },
  ],
};
