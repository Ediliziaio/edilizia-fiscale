import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "assetti-adeguati-impresa-edile",
  title: "Assetti adeguati e allerta della crisi nell'impresa edile",
  excerpt:
    "L'art. 2086 c.c. impone assetti organizzativi, amministrativi e contabili adeguati e la rilevazione tempestiva della crisi. Cosa significa in concreto per chi lavora per commessa, e quali strumenti dimostrano l'adeguatezza.",
  category: "Controllo",
  date: "Agosto 2026",
  readTime: "11 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust-dark to-trust",
  keywords: [
    "assetti adeguati art 2086",
    "adeguati assetti impresa edile",
    "rilevazione tempestiva della crisi",
    "composizione negoziata crisi impresa",
    "responsabilità amministratori assetti",
    "codice crisi impresa edilizia",
  ],
  intro:
    "L'art. 2086, comma 2, del codice civile impone all'imprenditore che opera in forma societaria di istituire assetti organizzativi, amministrativi e contabili adeguati alla natura e alle dimensioni dell'impresa, anche in funzione della rilevazione tempestiva della crisi. In un'impresa che lavora per commessa, un assetto privo di margine di cantiere e di cassa prospettica difficilmente può dirsi adeguato.",
};

export const seo = {
  seoTitle: "Assetti Adeguati e Crisi nell'Impresa Edile",
  metaDescription:
    "Cosa impone l'art. 2086 c.c. a chi lavora per commessa, quali strumenti dimostrano l'adeguatezza e come funziona la composizione negoziata.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — L'obbligo: assetti organizzativi, amministrativi e contabili adeguati alla natura e alle dimensioni dell'impresa (art. 2086, c. 2, c.c.), con funzione di rilevazione tempestiva della crisi. Cosa serve in edilizia: margine per commessa, cassa prospettica, budget e forecast, verifica della sostenibilità dei debiti nei dodici mesi. La responsabilità: l'inadeguatezza degli assetti è un profilo autonomo di responsabilità degli amministratori. Lo strumento di emersione: la composizione negoziata, accessibile finché l'impresa è risanabile." },

    { type: "h2", text: "Che cosa impone la norma", id: "norma" },
    { type: "p", text: "La riforma introdotta con il codice della crisi ha modificato l'art. 2086 del codice civile aggiungendo un secondo comma che vale per tutte le imprese che operano in forma societaria o collettiva, non solo per le grandi. L'imprenditore deve istituire un assetto organizzativo, amministrativo e contabile adeguato alla natura e alle dimensioni dell'impresa, anche in funzione della rilevazione tempestiva della crisi e della perdita della continuità aziendale, e attivarsi senza indugio per l'adozione degli strumenti previsti." },
    { type: "p", text: "La norma non elenca gli strumenti: usa un criterio di adeguatezza, cioè di proporzionalità rispetto alla natura e alla dimensione dell'impresa. Per una piccola impresa commerciale può bastare poco; per un'impresa che lavora su commesse pluriennali con rischi di esecuzione, il livello richiesto è più alto, perché è più alto il rischio che la crisi maturi senza essere vista." },
    { type: "p", text: "Il punto che interessa direttamente l'imprenditore è la conseguenza: l'inadeguatezza degli assetti è un profilo autonomo di responsabilità degli amministratori, che può essere fatto valere anche a prescindere dall'esito delle singole scelte gestionali. Non è quindi una raccomandazione di buona amministrazione: è un obbligo con effetti patrimoniali personali." },

    { type: "h2", text: "Cosa significa adeguato per chi lavora per commessa", id: "commessa" },
    { type: "p", text: "In un'impresa edile la crisi ha una caratteristica specifica: matura dentro le commesse e diventa visibile a bilancio quando è già consolidata. Una commessa che chiuderà in perdita produce cassa in entrata per mesi, mentre i costi si accumulano; la perdita emerge alla chiusura, quando non c'è più nulla da fare." },
    { type: "p", text: "Ne segue che un assetto adeguato in edilizia deve contenere elementi che nelle altre attività sono facoltativi. Non è una lettura estensiva: è la traduzione del criterio di proporzionalità alla natura dell'attività." },
    { type: "ul", items: [
      "Margine per commessa aggiornato mensilmente, con costi a finire rideterminati insieme al responsabile di cantiere",
      "Cassa prospettica a tredici settimane, aggiornata settimanalmente, con evidenza dei superamenti di affidamento",
      "Budget annuale e forecast rivisto almeno trimestralmente sulla base del portafoglio ordini",
      "Verifica della sostenibilità dei debiti nei dodici mesi successivi, con proiezione dei flussi",
      "Monitoraggio delle esposizioni fiscali e contributive, incluse le rateazioni in corso",
      "Presidio dei rischi contrattuali: penali, ritenute a garanzia, varianti non formalizzate, contenziosi aperti",
    ] },
    { type: "p", text: "Il quarto punto merita attenzione: la sostenibilità dei debiti nei dodici mesi è uno dei parametri con cui la normativa individua lo stato di crisi. Non è un giudizio soggettivo, è una proiezione che va fatta e documentata: se i flussi previsti non coprono le obbligazioni in scadenza, la condizione è rilevante e fa scattare i doveri di attivazione." },

    { type: "figure", slot: "assetti-adeguati-impresa-edile-1", alt: "Documenti di monitoraggio aziendale con proiezione dei flussi a dodici mesi", caption: "La sostenibilità dei debiti a dodici mesi non è un'opinione: è una proiezione che va fatta e conservata." },

    { type: "h2", text: "I segnali che in edilizia arrivano prima del bilancio", id: "segnali" },
    { type: "table", headers: ["Segnale", "Cosa indica", "Dove si vede"], rows: [
      ["Costi a finire in crescita su più commesse", "Erosione del margine non ancora riflessa a bilancio", "Report mensile di commessa"],
      ["Varianti eseguite e non formalizzate in aumento", "Costi certi a fronte di ricavi incerti", "Registro varianti di cantiere"],
      ["Allungamento dei tempi medi di incasso", "Tensione di circolante in formazione", "Scadenzario clienti e cassa prospettica"],
      ["Utilizzo stabile degli affidamenti al massimo", "Il debito a breve sta finanziando fabbisogno permanente", "Estratti conto e centrale rischi"],
      ["Ricorso a rateazioni fiscali ricorrenti", "Il fisco sta finanziando la gestione corrente", "Cassetto fiscale e piani di rateazione"],
      ["Ritardi nei versamenti contributivi", "Segnale avanzato, con effetti immediati sul DURC", "F24 e posizione Cassa Edile"],
    ] },
    { type: "p", text: "Gli ultimi due segnali hanno una particolarità: sono quelli che le procedure di segnalazione dei creditori pubblici qualificati intercettano. Quando l'esposizione supera determinate soglie, gli enti sono tenuti a segnalare all'impresa la situazione, invitandola a valutare gli strumenti disponibili. Ricevere quella segnalazione significa che l'informazione è uscita dall'azienda prima ancora che l'imprenditore l'abbia elaborata." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Codice civile", ref: "Art. 2086, comma 2", principle: "L'imprenditore che opera in forma societaria o collettiva ha il dovere di istituire un assetto organizzativo, amministrativo e contabile adeguato alla natura e alle dimensioni dell'impresa, anche in funzione della rilevazione tempestiva della crisi e della perdita della continuità aziendale.", impact: "L'obbligo vale a qualunque dimensione: cambia il livello richiesto, non l'esistenza del dovere." },
      { court: "Codice della crisi d'impresa e dell'insolvenza", principle: "L'impresa deve adottare misure idonee a rilevare tempestivamente lo stato di crisi e assumere senza indugio le iniziative necessarie a farvi fronte, verificando la sostenibilità dei debiti nei successivi dodici mesi.", impact: "La proiezione a dodici mesi è un adempimento sostanziale: va prodotta e conservata, non ricostruita quando serve." },
      { court: "Composizione negoziata", principle: "L'imprenditore in condizioni di squilibrio patrimoniale o economico-finanziario che ne rendano probabile la crisi può chiedere la nomina di un esperto indipendente per agevolare le trattative con i creditori.", impact: "È lo strumento accessibile finché l'impresa è ancora risanabile: attivarlo tardi ne annulla l'utilità." },
    ] },

    { type: "h2", text: "La composizione negoziata: quando e perché attivarla", id: "composizione" },
    { type: "p", text: "La [composizione negoziata](/guide/composizione-negoziata-impresa-edile) è un percorso volontario e riservato che consente all'imprenditore in condizione di squilibrio di chiedere la nomina di un esperto indipendente, che affianca l'impresa nelle trattative con i creditori. L'impresa resta in gestione, e possono essere richieste misure protettive del patrimonio." },
    { type: "p", text: "Il presupposto è la probabilità della crisi, non l'insolvenza: è uno strumento pensato per essere attivato prima, quando esiste ancora una prospettiva di risanamento. È esattamente ciò che lo rende poco utilizzato — l'imprenditore che si accorge dello squilibrio tende ad aspettare che la situazione si risolva da sola — e insieme ciò che lo rende efficace quando viene usato." },
    { type: "p", text: "In edilizia il percorso ha una specificità: la continuità dei cantieri e il mantenimento del [DURC](/guide/durc-irregolare-impresa-edile) sono spesso la condizione per qualunque risanamento, perché senza di essi si perdono le commesse e con esse ogni prospettiva. La sequenza degli interventi va quindi costruita attorno a quel vincolo, e ciò richiede di intervenire quando i cantieri sono ancora attivi." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa con ricavi per 5,6 milioni, bilancio dell'esercizio precedente in utile per 82.000 euro. Il report di commessa introdotto in corso d'anno mostra che tre commesse su nove hanno [costi a finire](/glossario#costi-a-finire) in crescita per complessivi 310.000 euro rispetto al preventivo, e che le varianti eseguite e non formalizzate ammontano a 140.000 euro." },
    { type: "p", text: "La proiezione a dodici mesi, costruita sul portafoglio ordini e sulle scadenze, evidenzia che nei mesi da marzo a giugno i flussi non coprono le obbligazioni in scadenza per circa 190.000 euro, anche ipotizzando il rinnovo degli affidamenti in essere. Il bilancio in utile non aveva mostrato nulla di tutto questo, perché la perdita sulle commesse non era ancora emersa e la tensione finanziaria era ancora prospettica." },
    { type: "p", text: "Con nove mesi di anticipo le opzioni sono molte: formalizzare le varianti e incassarle, richiedere il rimborso IVA trimestrale, rinegoziare i termini con i fornitori strategici, rivedere il piano degli investimenti, chiedere alla banca un consolidamento a medio termine della quota permanente di circolante. Nessuna di queste opzioni sarebbe disponibile a marzo, con gli insoluti già maturati." },
    { type: "note", text: "L'errore da non fare: considerare gli assetti adeguati un adempimento formale da documentare con un verbale. La documentazione serve, ma ciò che protegge davvero l'amministratore è aver prodotto e usato gli strumenti: report di commessa, cassa prospettica, proiezione a dodici mesi. Lo scenario è illustrativo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "L'obbligo di assetti adeguati vale anche per le piccole imprese?", a: "Sì, per tutte quelle che operano in forma societaria o collettiva. Cambia il livello richiesto, che è proporzionato alla natura e alle dimensioni dell'impresa, non l'esistenza dell'obbligo. Per chi lavora su commesse pluriennali il livello richiesto è più alto, perché è più alto il rischio di crisi non rilevata." },
      { q: "Come dimostro che i miei assetti sono adeguati?", a: "Con gli strumenti effettivamente prodotti e utilizzati: report mensile di commessa, cassa prospettica, budget e forecast, proiezione della sostenibilità dei debiti a dodici mesi, verbali delle riunioni in cui questi documenti sono stati discussi. Un verbale che dichiara l'adeguatezza senza documenti a supporto non prova nulla." },
      { q: "Cosa rischia l'amministratore se gli assetti non sono adeguati?", a: "L'inadeguatezza è un profilo autonomo di responsabilità, azionabile indipendentemente dall'esito delle singole scelte gestionali. Nelle situazioni di crisi è uno dei primi elementi che vengono esaminati, e può fondare un'azione di responsabilità con effetti sul patrimonio personale." },
      { q: "Che cos'è la segnalazione dei creditori pubblici qualificati?", a: "È l'obbligo, per determinati enti, di segnalare all'impresa il superamento di soglie di esposizione debitoria, invitandola a valutare gli strumenti di regolazione della crisi. Riceverla significa che la situazione è già visibile dall'esterno: è un segnale da trattare con la massima serietà." },
      { q: "La composizione negoziata blocca i cantieri?", a: "No: è un percorso in cui l'impresa resta in gestione e prosegue l'attività, ed è proprio la continuità dei cantieri a rendere possibile il risanamento. Possono essere richieste misure protettive del patrimonio, che sospendono le azioni esecutive dei creditori durante le trattative." },
      { q: "Da dove comincio se oggi non ho nessuno di questi strumenti?", a: "Dai due che producono più informazione con meno sforzo: il margine per commessa e la cassa prospettica a tredici settimane. Il resto si costruisce sopra. Partire dal budget annuale senza avere il margine di cantiere significa costruire previsioni su dati che non esistono." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se oggi non sapresti dimostrare, documenti alla mano, che l'impresa rileva tempestivamente uno squilibrio, l'esposizione non è solo economica ma anche personale per chi amministra. Mandaci gli ultimi due bilanci, l'elenco delle commesse aperte e la situazione debitoria fiscale e contributiva: verifichiamo il livello attuale degli assetti e cosa manca per renderli adeguati. Per gli strumenti operativi leggi le guide su [controllo di gestione](/guide/controllo-di-gestione-impresa-edile) e flussi di cassa." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026." },
  ],
};
