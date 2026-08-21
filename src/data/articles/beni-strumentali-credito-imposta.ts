import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "beni-strumentali-credito-imposta",
  title: "Crediti d'imposta sui beni strumentali: cosa serve perché reggano",
  excerpt:
    "Misure che cambiano quasi ogni anno, ma adempimenti che restano gli stessi: riferimento normativo in fattura, perizia o attestazione sopra soglia, interconnessione documentata, periodo di sorveglianza. Il metodo che vale a prescindere dalla misura vigente.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "credito imposta beni strumentali edilizia",
    "interconnessione macchine di cantiere",
    "dicitura fattura credito imposta",
    "perizia asseverata beni 4.0",
    "recapture credito imposta cessione bene",
    "investimenti macchinari impresa edile",
  ],
  intro:
    "Le misure agevolative sugli investimenti in beni strumentali cambiano con ogni legge di bilancio: aliquote, massimali e requisiti hanno una vita breve. Gli adempimenti che le reggono, invece, sono stabili nel tempo — e sono quelli che fanno perdere il beneficio quando mancano. Questa guida sta sul metodo, non sulle percentuali.",
};

export const seo = {
  seoTitle: "Crediti d'Imposta sui Beni Strumentali in Edilizia",
  metaDescription:
    "Riferimento in fattura, perizia sopra soglia, interconnessione documentata e periodo di sorveglianza: gli adempimenti che reggono il beneficio.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "AVVERTENZA — La disciplina degli incentivi agli investimenti in beni strumentali è tra le più mobili del sistema: aliquote, massimali, finestre temporali e requisiti cambiano con le leggi di bilancio e con i provvedimenti attuativi. Questa guida non riporta percentuali proprio per questo: descrive gli adempimenti che restano costanti e che, quando mancano, fanno perdere il beneficio anche quando la misura spettava. Prima di programmare un investimento verifica la misura vigente in quel momento con il tuo consulente." },

    { type: "h2", text: "Perché la parte instabile non è quella che fa perdere il credito", id: "perche" },
    { type: "p", text: "Nella nostra esperienza le contestazioni sui crediti d'imposta per investimenti non nascono quasi mai da un'errata individuazione della misura o dell'aliquota: quelle si verificano prima dell'acquisto e raramente sfuggono. Nascono dagli adempimenti formali e documentali, che vengono trattati come burocrazia e che invece sono condizione di spettanza." },
    { type: "p", text: "È la stessa dinamica dei bonus edilizi descritta nella guida dedicata: l'intervento c'è, l'investimento è reale, il bene è in azienda e funziona — ma manca il riferimento normativo in fattura, o la perizia, o la documentazione dell'interconnessione, e il beneficio salta." },
    { type: "p", text: "Ne segue l'impostazione di questa guida: la parte che cambia — quali beni, quali percentuali, quali massimali, entro quali date — va verificata al momento dell'investimento e non ha senso fissarla per iscritto qui. La parte che resta è il metodo, ed è quella che vale la pena presidiare una volta per tutte." },

    { type: "h2", text: "Gli adempimenti che restano costanti", id: "adempimenti" },
    { type: "table", headers: ["Adempimento", "A cosa serve", "Quando va fatto"], rows: [
      ["Riferimento normativo nella fattura", "Collegare il documento di acquisto alla misura agevolativa", "All'emissione: una fattura senza riferimento va regolarizzata prima possibile"],
      ["Perizia o attestazione tecnica", "Attestare che il bene possiede le caratteristiche richieste dalla misura", "Sopra le soglie di valore previste, secondo le regole della misura vigente"],
      ["Documentazione dell'interconnessione", "Dimostrare che il bene è integrato con il sistema aziendale, dove richiesto", "Al momento dell'interconnessione, che può essere successivo all'entrata in funzione"],
      ["Documento di trasporto e collaudo", "Fissare la data di consegna e di entrata in funzione", "Alla consegna e all'avvio"],
      ["Registrazione in libro cespiti", "Individuare il bene, il costo e il periodo di ammortamento", "All'iscrizione in bilancio"],
      ["Conservazione per il periodo di sorveglianza", "Rispondere a controlli successivi e gestire eventuali cessioni", "Per l'intero periodo previsto dalla misura"],
    ] },
    { type: "p", text: "La prima riga è quella che produce più perdite di beneficio con la minor consapevolezza. La fattura del fornitore deve recare il riferimento alla disposizione agevolativa: se non lo reca, il documento non è idoneo. È un'omissione del fornitore che ricade sull'acquirente, e va verificata alla ricezione di ogni fattura, non a fine anno." },
    { type: "p", text: "La terza è quella su cui il settore costruzioni ha la posizione più delicata, e merita un paragrafo a parte." },

    { type: "figure", slot: "beni-strumentali-credito-imposta-1", alt: "Macchina operatrice di cantiere con sistemi di controllo e monitoraggio", caption: "L'interconnessione va dimostrata: sui mezzi di cantiere è il requisito più delicato da documentare." },

    { type: "h2", text: "L'interconnessione: il punto critico per i mezzi di cantiere", id: "interconnessione" },
    { type: "p", text: "Le misure che riconoscono i benefici più elevati sono storicamente riservate ai beni caratterizzati da requisiti tecnologici avanzati, tra cui l'integrazione con il sistema aziendale di gestione. È il requisito di interconnessione, e in edilizia pone problemi che in un'azienda manifatturiera non esistono." },
    { type: "p", text: "In fabbrica una macchina è ferma, collegata alla rete aziendale, dialoga con il gestionale della produzione. Un escavatore no: si sposta di cantiere in cantiere, opera in luoghi che possono non avere connettività, e il suo dialogo con i sistemi aziendali passa da telematica di bordo e piattaforme del costruttore." },
    { type: "p", text: "Questo non significa che i mezzi di cantiere siano esclusi: molte macchine moderne dispongono di sistemi di telemetria e di gestione della flotta che possono soddisfare i requisiti. Significa che la verifica va fatta prima dell'acquisto, sul modello specifico e sulla configurazione ordinata, e che va documentata con precisione." },
    { type: "p", text: "L'errore ricorrente è dare per acquisito che il mezzo sia idoneo perché il venditore lo afferma in trattativa. L'affermazione commerciale non è documentazione: servono le caratteristiche tecniche del bene, la configurazione effettivamente fornita e la dimostrazione dell'avvenuta interconnessione con i sistemi aziendali. Ed è l'acquirente, non il venditore, a doverle produrre in caso di controllo." },
    { type: "p", text: "Va infine ricordato che l'interconnessione può avvenire in un momento successivo all'entrata in funzione del bene, con effetti sulla decorrenza del beneficio. È un aspetto da coordinare con il fornitore e da datare con precisione." },

    { type: "caselaw", title: "Riferimenti di metodo", items: [
      { court: "Disciplina degli incentivi agli investimenti", principle: "Le fatture e i documenti relativi all'acquisizione dei beni agevolati devono contenere l'espresso riferimento alle disposizioni normative che riconoscono il beneficio.", impact: "Una fattura priva del riferimento non è idonea: va verificata alla ricezione e regolarizzata, non scoperta in sede di controllo." },
      { court: "Disciplina degli incentivi agli investimenti", principle: "Per gli investimenti di importo superiore alle soglie previste è richiesta una perizia asseverata o un'attestazione di conformità che certifichi il possesso delle caratteristiche tecniche e l'avvenuta interconnessione.", impact: "La perizia non attesta solo le caratteristiche del bene: attesta anche l'interconnessione, che va quindi realizzata e documentata." },
      { court: "Disciplina degli incentivi agli investimenti", principle: "La cessione a titolo oneroso o la destinazione a strutture produttive diverse entro il periodo di sorveglianza previsto comporta la riduzione o la restituzione del beneficio fruito.", impact: "Vendere il mezzo prima del termine fa restituire il credito: va messo nel piano di rinnovo del parco macchine." },
    ] },

    { type: "h2", text: "Il periodo di sorveglianza e la cessione del bene", id: "sorveglianza" },
    { type: "p", text: "Le misure agevolative prevedono di norma un periodo entro il quale la cessione a titolo oneroso del bene, o la sua destinazione a strutture produttive diverse, comporta la restituzione o la riduzione del beneficio fruito." },
    { type: "p", text: "In edilizia questo intercetta una prassi consolidata: il rinnovo periodico del parco macchine, con la [permuta](/guide/permuta-terreno-appartamenti) del mezzo usato al momento dell'acquisto del nuovo. Un'impresa che sostituisce l'escavatore ogni tre o quattro anni deve verificare che la cessione non cada dentro il periodo di sorveglianza del bene agevolato, altrimenti il credito ottenuto va restituito." },
    { type: "p", text: "È un elemento che va nel piano degli investimenti, non nella gestione a posteriori: sapere che quel mezzo non può essere ceduto prima di una certa data cambia la programmazione del rinnovo, e in alcuni casi la scelta stessa tra acquisto, leasing e noleggio descritta nella guida dedicata." },
    { type: "p", text: "Vanno inoltre verificate, misura per misura, le regole sulla cumulabilità con altre agevolazioni sullo stesso investimento e sull'utilizzo del credito in compensazione, che tipicamente avviene in quote annuali e incontra i vincoli generali alla compensazione già descritti nella guida sui [crediti incagliati](/guide/crediti-fiscali-incagliati-edilizia)." },

    { type: "h2", text: "La procedura interna che protegge il beneficio", id: "procedura" },
    { type: "p", text: "La proposta operativa è di trattare ogni investimento agevolato come una piccola pratica, con una lista di controllo. Costa pochi minuti per acquisto e chiude la quasi totalità dei rischi." },
    { type: "ol", items: [
      "Prima dell'ordine: verifica della misura vigente, dei requisiti tecnici del modello e della configurazione ordinata, con evidenza scritta dal fornitore",
      "Nell'ordine: richiesta espressa che la fattura rechi il riferimento normativo previsto",
      "Alla consegna: conservazione del documento di trasporto e verbale di entrata in funzione datato",
      "All'interconnessione: documentazione tecnica dell'avvenuta integrazione con i sistemi aziendali, datata",
      "Sopra soglia: perizia o attestazione, con verifica che copra sia le caratteristiche sia l'interconnessione",
      "In contabilità: registrazione in libro cespiti e determinazione del piano di utilizzo del credito in compensazione",
      "Nel piano investimenti: annotazione della data di scadenza del periodo di sorveglianza, per non cedere il bene prima",
    ] },
    { type: "p", text: "L'ultimo punto è quello che nessuno fa e che si ricorda tardi. Una riga in più nel libro cespiti — la data oltre la quale il bene è cedibile senza conseguenze — evita di scoprire il problema quando la permuta è già stata concordata con il concessionario." },

    { type: "figure", slot: "beni-strumentali-credito-imposta-2", alt: "Fascicolo di investimento con fattura, perizia e documentazione di interconnessione", caption: "Ogni investimento agevolato è una pratica: fattura con riferimento, perizia, interconnessione datata." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa che acquista una macchina operatrice dotata di sistema di telemetria e gestione della flotta, con l'obiettivo di accedere alla misura agevolativa vigente al momento dell'investimento." },
    { type: "p", text: "Prima dell'ordine viene richiesta al fornitore un'evidenza scritta delle caratteristiche tecniche del modello nella configurazione proposta, con riferimento ai requisiti della misura. Nell'ordine si specifica che la fattura dovrà recare il riferimento normativo previsto. Sono due richieste che il fornitore soddisfa senza difficoltà se avanzate prima, e che diventano complicate se avanzate dopo." },
    { type: "p", text: "Alla consegna vengono conservati documento di trasporto e verbale di entrata in funzione. L'interconnessione con i sistemi aziendali viene realizzata nelle settimane successive e documentata con data certa: è un passaggio che richiede il coinvolgimento del fornitore e che, se rinviato, rischia di non essere mai completato — con il bene che funziona benissimo ma senza il requisito che dà diritto al beneficio maggiore." },
    { type: "p", text: "Trattandosi di investimento sopra la soglia prevista, viene acquisita la perizia asseverata che attesta caratteristiche e interconnessione. Infine, nel libro cespiti e nel piano investimenti viene annotata la data di scadenza del periodo di sorveglianza: quel mezzo non entrerà nella permuta programmata per il rinnovo prima di quella data." },
    { type: "note", text: "L'errore da non fare: fidarsi dell'affermazione commerciale del venditore sull'idoneità del bene. In caso di controllo la documentazione la produce l'acquirente, non il fornitore: le caratteristiche e la configurazione vanno acquisite per iscritto prima dell'ordine. Lo scenario è illustrativo: misure, soglie e requisiti vanno verificati sulla disciplina vigente al momento dell'investimento." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Perché questa guida non riporta le percentuali?", a: "Perché la disciplina degli incentivi agli investimenti cambia con le leggi di bilancio e con i provvedimenti attuativi: aliquote, massimali e finestre temporali hanno una vita breve. Scriverle qui significherebbe pubblicare un'informazione destinata a diventare sbagliata. La misura vigente va verificata al momento dell'investimento." },
      { q: "Cosa deve contenere la fattura?", a: "L'espresso riferimento alle disposizioni normative che riconoscono il beneficio. È un'omissione del fornitore che ricade sull'acquirente: va verificata alla ricezione di ogni fattura e, se manca, regolarizzata prima possibile." },
      { q: "I mezzi di cantiere possono essere interconnessi?", a: "Molte macchine moderne dispongono di telemetria e sistemi di gestione della flotta che possono soddisfare i requisiti. La verifica va però fatta prima dell'acquisto, sul modello e sulla configurazione ordinata, e documentata: l'affermazione commerciale del venditore non è documentazione." },
      { q: "L'interconnessione deve avvenire subito?", a: "Può avvenire in un momento successivo all'entrata in funzione del bene, con effetti sulla decorrenza del beneficio. Va però realizzata e datata: rinviarla indefinitamente significa avere un bene che funziona e un requisito mai soddisfatto." },
      { q: "Posso vendere il bene agevolato?", a: "Non prima della scadenza del periodo di sorveglianza previsto dalla misura, altrimenti il beneficio va restituito o ridotto. In edilizia intercetta la prassi del rinnovo periodico del parco macchine: la data va annotata nel libro cespiti e nel piano investimenti." },
      { q: "Serve sempre la perizia?", a: "Sopra le soglie di valore previste dalla misura vigente. Al di sotto sono generalmente sufficienti dichiarazioni del legale rappresentante, secondo le regole della singola disciplina. La perizia, dove richiesta, attesta sia le caratteristiche tecniche sia l'avvenuta interconnessione." },
      { q: "Il credito è cumulabile con altre agevolazioni?", a: "Dipende dalla misura: le regole di cumulabilità con altri incentivi sullo stesso investimento vanno verificate caso per caso, insieme ai vincoli generali all'utilizzo in compensazione. È una verifica da fare prima di programmare l'investimento, non dopo." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai investimenti in programma, la verifica utile riguarda due cose: quale misura è vigente in quel momento e se il bene che stai per ordinare ne ha i requisiti nella configurazione proposta. Mandaci il preventivo del fornitore e la scheda tecnica dalla pagina contatti prima di firmare l'ordine: verifichiamo requisiti, adempimenti e periodo di sorveglianza. Per il contesto leggi le guide su leasing o acquisto dei mezzi e costi deducibili." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026: la disciplina degli incentivi agli investimenti è in continua evoluzione e va verificata sulle misure vigenti al momento dell'investimento." },
  ],
};
