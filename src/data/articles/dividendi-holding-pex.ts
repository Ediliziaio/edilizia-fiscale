import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "dividendi-holding-pex",
  title: "Dividendi, PEX e prelievi: come si portano a casa gli utili",
  excerpt:
    "Dividendo alla persona fisica al 26% o alla holding all'1,2%, participation exemption sulle cessioni di partecipazioni, compenso amministratore e finanziamento soci: le strade per remunerare l'imprenditore e i loro costi reali.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-gold-dark to-gold",
  keywords: [
    "tassazione dividendi holding",
    "participation exemption pex requisiti",
    "dividendi srl persona fisica 26%",
    "compenso amministratore o dividendo",
    "finanziamento soci restituzione",
    "prelievi soci srl",
  ],
  intro:
    "Portare a casa gli utili di una società di costruzioni non è un'operazione neutra: la strada scelta cambia il carico complessivo di imposte e contributi. Dividendo alla persona fisica, dividendo alla holding, compenso amministratore, restituzione di finanziamento soci sono quattro percorsi con regole diverse, e la combinazione ottimale dipende da quanto serve davvero fuori dall'azienda.",
};

export const seo = {
  seoTitle: "Dividendi, PEX e Prelievi: Come Portare a Casa gli Utili",
  metaDescription:
    "Dividendo al 26% o alla holding all'1,2%, participation exemption, compenso amministratore e finanziamento soci: le strade a confronto e i loro costi reali.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Dividendo a persona fisica non imprenditore: ritenuta a titolo d'imposta del 26%. Dividendo a holding italiana: imponibile per il 5%, carico effettivo dell'1,2% con IRES al 24% (art. 89 TUIR). PEX (art. 87 TUIR): plusvalenze da cessione di partecipazioni esenti al 95% al ricorrere di tutti i requisiti, tra cui la commercialità della partecipata — che di norma esclude le immobiliari di mera gestione. Compenso amministratore: deducibile per la società, tassato IRPEF e con contribuzione. Finanziamento soci: la restituzione non è tassata, ma va tracciata." },

    { type: "h2", text: "Le quattro strade, in ordine di frequenza", id: "strade" },
    { type: "table", headers: ["Strada", "Effetto per la società", "Effetto per il socio"], rows: [
      ["Dividendo a persona fisica", "Nessuna deduzione: distribuisce utile già tassato", "Ritenuta a titolo d'imposta del 26%"],
      ["Dividendo a holding", "Nessuna deduzione", "Imponibile al 5%, carico effettivo 1,2%"],
      ["Compenso amministratore", "Deducibile per cassa", "IRPEF progressiva più contribuzione previdenziale"],
      ["Restituzione finanziamento soci", "Riduce il debito, nessun effetto reddituale", "Non tassata: è la restituzione di un capitale"],
      ["Rimborso spese documentate", "Deducibile se inerente e documentato", "Non tassato nei limiti previsti"],
      ["Canone di locazione da immobile del socio", "Deducibile se a valore di mercato", "Reddito fondiario o d'impresa in capo al socio"],
    ] },
    { type: "p", text: "Nessuna di queste strade è in assoluto migliore: dipende da quanto denaro serve realmente fuori dall'azienda e da cosa se ne fa. La domanda preliminare non è fiscale ma personale, ed è quella che quasi mai viene posta: quanto ti serve davvero sul conto privato ogni anno?" },
    { type: "p", text: "Se la risposta è che serve tutto l'utile, la holding non produce vantaggi: il 26% si paga comunque, con un passaggio in più e i costi di una società aggiuntiva. Se la risposta è che serve una parte e il resto va reinvestito, la holding consente di far circolare la parte reinvestita quasi integra." },

    { type: "h2", text: "Il dividendo alla holding: differimento, non azzeramento", id: "dividendo-holding" },
    { type: "p", text: "Gli utili distribuiti da una società di capitali residente a un'altra società di capitali residente concorrono al reddito di quest'ultima solo per il 5%, ai sensi dell'art. 89 del TUIR. Con l'IRES al 24%, il carico effettivo è dell'1,2%. La ragione della norma è evitare la doppia imposizione economica su utili già tassati in capo alla società che li ha prodotti." },
    { type: "p", text: "È essenziale capire che si tratta di un differimento. Finché l'utile resta nella holding il prelievo è dell'1,2%; nel momento in cui la holding distribuisce ai soci persone fisiche, si applica il 26% sul distribuito. Sommando i due passaggi, il carico complessivo è appena superiore a quello del dividendo diretto." },
    { type: "p", text: "Il vantaggio, quindi, non sta nel risparmio ma nella disponibilità: 197.600 euro su 200.000 restano utilizzabili a livello di gruppo per acquistare un immobile, capitalizzare una nuova società operativa, costituire una riserva per i picchi di cantiere o acquisire un concorrente. Passando dalla persona fisica, la stessa operazione partirebbe da 148.000 euro." },

    { type: "figure", slot: "dividendi-holding-pex-1", alt: "Schema del flusso dei dividendi da operativa a holding a socio", caption: "Il 95% di esenzione è un differimento: il 26% si paga quando l'utile arriva alla persona fisica." },

    { type: "h2", text: "La PEX e la trappola delle immobiliari", id: "pex" },
    { type: "p", text: "L'art. 87 del TUIR prevede che le plusvalenze realizzate dalla cessione di partecipazioni siano esenti al 95% al ricorrere di quattro requisiti: possesso ininterrotto dal primo giorno del dodicesimo mese precedente la cessione, classificazione tra le immobilizzazioni finanziarie nel primo bilancio di possesso, residenza fiscale della partecipata in uno Stato non a fiscalità privilegiata, ed esercizio da parte della partecipata di un'impresa commerciale." },
    { type: "p", text: "L'ultimo requisito è quello che in edilizia crea più problemi. La norma stessa presume la non commercialità per le società il cui patrimonio è prevalentemente costituito da immobili diversi da quelli alla cui produzione o scambio è diretta l'attività d'impresa e da quelli utilizzati direttamente nell'esercizio dell'impresa. Una società immobiliare di mera gestione, che detiene beni e incassa canoni, è di norma esclusa dalla PEX." },
    { type: "p", text: "L'implicazione pratica è rilevante per chi progetta una riorganizzazione: se la beneficiaria della scissione immobiliare sarà un giorno ceduta, la plusvalenza sulle sue quote potrebbe non godere dell'esenzione. Va tenuto presente nel disegno dell'assetto, valutando se e come l'immobiliare svolge attività qualificabile come commerciale." },
    { type: "p", text: "Attenzione anche a un punto di segno opposto: le società di costruzione che realizzano immobili destinati alla vendita hanno per definizione immobili alla cui produzione è diretta l'attività, e la presunzione di non commercialità non opera. È una distinzione che va verificata sulla specifica situazione." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Testo unico imposte sui redditi", ref: "Art. 89 TUIR", principle: "Gli utili distribuiti da società di capitali residenti concorrono a formare il reddito della società percipiente limitatamente al 5% del loro ammontare.", impact: "È la base matematica della holding: 1,2% di carico effettivo con IRES al 24%." },
      { court: "Testo unico imposte sui redditi", ref: "Art. 87 TUIR", principle: "Le plusvalenze da cessione di partecipazioni sono esenti al 95% al ricorrere di tutti i requisiti previsti, tra cui l'esercizio da parte della partecipata di un'impresa commerciale; si presume la non commercialità per le società con patrimonio prevalentemente immobiliare non strumentale né destinato allo scambio.", impact: "Le immobiliari di mera gestione sono di norma escluse: va considerato quando si progetta la struttura del gruppo." },
      { court: "Testo unico imposte sui redditi", ref: "Art. 95 TUIR", principle: "I compensi spettanti agli amministratori sono deducibili nell'esercizio in cui sono corrisposti, secondo il principio di cassa.", impact: "Il compenso deliberato e non pagato entro l'esercizio non è deducibile: è un errore ricorrente nelle chiusure di fine anno." },
    ] },

    { type: "h2", text: "Compenso amministratore e finanziamento soci", id: "compenso" },
    { type: "p", text: "Il compenso all'amministratore è deducibile per la società secondo il principio di cassa, e va deliberato dall'assemblea: un compenso corrisposto senza delibera è esposto a contestazione sulla deducibilità. In capo al percettore è tassato con IRPEF progressiva e sconta la contribuzione previdenziale prevista." },
    { type: "p", text: "Il confronto con il dividendo non si riduce alle aliquote. Il compenso riduce il reddito imponibile della società, quindi l'IRES; il dividendo no. Ma il compenso sconta l'IRPEF progressiva e i contributi, che nelle fasce alte superano il 26% del dividendo. Il punto di indifferenza dipende dal reddito complessivo del percettore e va calcolato caso per caso, considerando anche l'effetto previdenziale positivo della contribuzione." },
    { type: "p", text: "La restituzione di un finanziamento soci non è tassata, perché non è reddito ma rimborso di un capitale prestato. È la strada più efficiente quando esiste, ma richiede che il finanziamento sia stato correttamente documentato al momento dell'erogazione: contratto o delibera, tracciabilità del versamento, iscrizione in bilancio. Restituzioni non supportate da un finanziamento documentato sono facilmente riqualificate come distribuzione di utili." },
    { type: "p", text: "Va infine ricordato che il finanziamento soci nelle S.r.l. incontra la disciplina della postergazione: i rimborsi effettuati in situazioni di squilibrio dell'indebitamento rispetto al patrimonio netto possono essere restituiti in caso di successiva insolvenza. È un profilo da valutare prima di programmare i rimborsi." },

    { type: "figure", slot: "dividendi-holding-pex-2", alt: "Verbale di assemblea per la delibera di distribuzione utili", caption: "Delibera assembleare e tracciabilità: la forma qui non è un dettaglio, decide la qualificazione." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "S.r.l. di costruzioni con utile ante imposte di 400.000 euro, socio unico persona fisica. L'imprenditore ha bisogno di 90.000 euro l'anno per il tenore di vita familiare; il resto vorrebbe reinvestirlo in immobili." },
    { type: "p", text: "Scenario senza holding: l'utile netto dopo IRES è di circa 304.000 euro. Distribuendo tutto al socio, la ritenuta del 26% porta a circa 225.000 euro netti. Se l'imprenditore ne spende 90.000 e reinveste il resto, il capitale disponibile per l'investimento è di circa 135.000 euro." },
    { type: "p", text: "Scenario con holding: l'utile netto di 304.000 euro sale alla holding con un prelievo dell'1,2%, restando pari a circa 300.400 euro. La holding distribuisce al socio i 90.000 euro che servono, con ritenuta del 26%: per erogare 90.000 netti servono circa 121.600 euro lordi. Restano nella holding circa 178.800 euro, disponibili per l'acquisto immobiliare contro i 135.000 dello scenario precedente. La differenza annua è di quasi 44.000 euro di capacità di investimento." },
    { type: "note", text: "L'errore da non fare: costruire la holding e poi distribuire comunque tutto alla persona fisica ogni anno. In quel caso la struttura è solo un costo aggiuntivo: il vantaggio esiste unicamente sulla quota che resta a livello di gruppo. Lo scenario è illustrativo: i valori vanno verificati sulla situazione concreta." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quanto si paga sui dividendi di una S.r.l.?", a: "Se il socio è una persona fisica non imprenditore, si applica una ritenuta a titolo d'imposta del 26%. Se il socio è una società di capitali residente, il dividendo concorre al reddito solo per il 5%, con un carico effettivo dell'1,2% considerando l'IRES al 24%." },
      { q: "La holding fa risparmiare imposte sui dividendi?", a: "Non in senso definitivo: è un differimento. Il 26% si applica comunque quando la holding distribuisce al socio persona fisica. Il vantaggio è poter reinvestire a livello di gruppo risorse quasi integre, invece di farle passare per il patrimonio personale con un taglio del 26%." },
      { q: "La PEX si applica anche alle società immobiliari?", a: "Di norma no. La legge presume la non commercialità per le società il cui patrimonio è prevalentemente costituito da immobili non strumentali né destinati allo scambio: le immobiliari di mera gestione restano quindi escluse dall'esenzione del 95%." },
      { q: "Conviene il compenso amministratore o il dividendo?", a: "Dipende dal reddito complessivo del percettore. Il compenso riduce l'imponibile della società ma sconta IRPEF progressiva e contribuzione; il dividendo non è deducibile ma sconta il 26% secco. Il punto di indifferenza va calcolato caso per caso, considerando anche il valore previdenziale della contribuzione." },
      { q: "La restituzione del finanziamento soci è tassata?", a: "No, perché è rimborso di un capitale e non reddito. Richiede però che il finanziamento sia stato documentato all'origine con contratto o delibera, versamento tracciato e iscrizione in bilancio. Restituzioni non supportate sono facilmente riqualificate come distribuzione di utili." },
      { q: "Posso distribuire utili se ho perdite pregresse?", a: "La distribuzione presuppone l'esistenza di utili distribuibili risultanti dall'ultimo bilancio approvato, al netto delle perdite non ancora coperte e delle riserve indisponibili. È una verifica che va fatta sul bilancio prima della delibera, non dopo." },
      { q: "Serve una delibera per distribuire i dividendi?", a: "Sì, la distribuzione deve essere deliberata dall'assemblea in sede di approvazione del bilancio o successivamente. Prelievi effettuati senza delibera vengono facilmente qualificati come distribuzione irregolare o come compensi non deliberati, con effetti diversi e peggiori." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "La domanda da cui partire non è fiscale: quanto ti serve davvero sul conto privato ogni anno, e cosa vuoi fare del resto? Con quella risposta e gli ultimi due bilanci possiamo calcolare quale combinazione di dividendo, compenso e rimborso finanziamento ha il costo complessivo più basso nel tuo caso — e se la holding, per te, si ripaga. Per il quadro d'insieme leggi le guide su holding e scissione immobiliare." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
