import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "iva-per-cassa-e-acconti",
  title: "IVA per cassa e acconti: perché in edilizia serve meno di quanto sembri",
  excerpt:
    "Versare l'IVA quando incassi invece che quando fatturi sembra la risposta ai committenti lenti. Ma il regime esclude le operazioni in reverse charge e in split payment — cioè quasi tutto quello che fa un'impresa edile — e differisce anche la detrazione sugli acquisti.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "iva per cassa requisiti",
    "regime iva per cassa edilizia",
    "esigibilità iva acconti appalto",
    "caparra confirmatoria iva",
    "iva per cassa reverse charge esclusione",
    "differimento esigibilità imposta",
  ],
  intro:
    "Il regime dell'IVA per cassa consente di versare l'imposta quando si incassa anziché quando si emette fattura. Per un'impresa che aspetta i pagamenti sembra la soluzione. In edilizia però funziona poco, per una ragione strutturale: le operazioni in reverse charge e in split payment ne sono escluse, e sono proprio quelle che compongono la maggior parte del fatturato del settore.",
};

export const seo = {
  seoTitle: "IVA per Cassa e Acconti: Quando Serve in Edilizia",
  metaDescription:
    "Il regime dell'IVA per cassa, le esclusioni che in edilizia lo svuotano, e il trattamento di acconti e caparre nell'appalto.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il regime: consente di differire l'esigibilità dell'IVA sulle cessioni e prestazioni al momento dell'incasso del corrispettivo, per i soggetti con volume d'affari non superiore al limite previsto. Il contrappeso: si differisce anche la detrazione dell'IVA sugli acquisti, che matura al pagamento. Il limite temporale: l'imposta diventa comunque esigibile decorso un anno dall'effettuazione dell'operazione, salvo che il cessionario sia assoggettato a procedura concorsuale. Le esclusioni che contano: reverse charge e split payment restano fuori dal regime. Gli acconti: l'incasso anticipato determina l'esigibilità limitatamente all'importo riscosso; la caparra confirmatoria ha natura diversa." },

    { type: "h2", text: "Come funziona il regime", id: "come-funziona" },
    { type: "p", text: "Nel regime ordinario l'IVA sulle prestazioni di servizi è esigibile all'atto del pagamento del corrispettivo, ma se la fattura viene emessa prima l'imposta diventa dovuta con l'emissione. Nella pratica delle imprese edili, che fatturano i SAL alla loro maturazione, questo significa spesso versare l'imposta molto prima di incassarla." },
    { type: "p", text: "Il regime dell'IVA per cassa nasce per rispondere a questo. Su opzione, l'esigibilità dell'imposta sulle operazioni attive viene differita al momento dell'incasso del corrispettivo: si versa quando si è incassato, non quando si è fatturato." },
    { type: "p", text: "Il contrappeso è simmetrico e va capito bene: anche il diritto alla detrazione dell'IVA sugli acquisti viene differito al momento in cui si paga il fornitore. Non si tratta quindi di un vantaggio netto ma di uno spostamento coerente su entrambi i lati, il cui effetto dipende dal rapporto tra tempi di incasso e tempi di pagamento della singola impresa." },
    { type: "p", text: "Esiste inoltre un limite temporale: l'imposta diventa comunque esigibile decorso un anno dal momento di effettuazione dell'operazione, anche se non si è incassato, salvo il caso in cui il cessionario o committente sia stato assoggettato a procedure concorsuali. È una valvola che impedisce al differimento di diventare indefinito." },

    { type: "h2", text: "Perché in edilizia rende poco", id: "perche-poco" },
    { type: "p", text: "Qui sta il punto della guida, ed è il motivo per cui vale la pena scriverla: il regime viene proposto alle imprese edili come rimedio ai committenti lenti, e nella maggior parte dei casi non lo è." },
    { type: "table", headers: ["Tipo di operazione", "Peso nel fatturato edile", "Ammessa all'IVA per cassa"], rows: [
      ["Subappalti tra imprese del settore costruzioni", "Alto", "No: sono in reverse charge"],
      ["Installazione impianti, demolizione, completamento su edifici tra soggetti IVA", "Alto", "No: sono in reverse charge"],
      ["Lavori per committenti pubblici", "Alto per chi opera nel pubblico", "No: sono in split payment"],
      ["Lavori per committenti privati consumatori", "Variabile", "Sì"],
      ["Lavori per imprese non del settore costruzioni fuori dalle fattispecie di inversione", "Variabile", "Sì"],
    ] },
    { type: "p", text: "Le prime tre righe sono quelle che compongono la parte prevalente del fatturato di molte imprese edili. Nelle operazioni in [reverse charge](/guide/reverse-charge-edilizia) l'impresa non addebita l'imposta e quindi non ha nulla da differire; in quelle in split payment l'IVA la versa l'ente committente. In entrambi i casi il regime non ha oggetto su cui operare." },
    { type: "p", text: "Ne segue una conclusione pratica: l'IVA per cassa può avere senso per un'impresa che lavora prevalentemente per committenti privati con incassi lenti — una ristrutturazione residenziale pagata a rate, per esempio. Ha poco senso per un subappaltatore, per un impiantista che opera tra soggetti IVA o per chi lavora con la pubblica amministrazione." },
    { type: "p", text: "Per queste ultime situazioni il problema di cassa è reale ma la risposta è un'altra, ed è quella descritta nelle guide su [split payment](/guide/split-payment-e-fatturazione-pa) e flussi di cassa: gestione attiva del credito IVA con rimborsi infrannuali, anticipazione del prezzo negli appalti pubblici, e leve operative sul ciclo di incasso." },

    { type: "figure", slot: "iva-per-cassa-e-acconti-1", alt: "Scadenzario delle liquidazioni IVA accanto a un prospetto di incassi da committenti", caption: "Il regime differisce l'esigibilità, ma solo sulle operazioni che ne sono ammesse: in edilizia sono la minoranza." },

    { type: "h2", text: "Gli acconti nell'appalto", id: "acconti" },
    { type: "p", text: "Il tema degli acconti si affronta a prescindere dal regime adottato, ed è quello che nella pratica quotidiana produce più errori di fatturazione." },
    { type: "p", text: "La regola è che il pagamento anticipato, in tutto o in parte, del corrispettivo determina l'effettuazione dell'operazione limitatamente all'importo pagato: da quel momento l'imposta è dovuta su quella somma e va emessa fattura. Non conta che l'opera non sia iniziata o sia a metà: conta che il denaro sia stato incassato." },
    { type: "p", text: "La stessa regola vale nel senso opposto: l'emissione della fattura prima del pagamento rende comunque esigibile l'imposta. È il motivo per cui, nelle imprese edili, la decisione di anticipare l'emissione di una fattura per ragioni commerciali o di rapporto con il committente ha un costo finanziario immediato che va conosciuto." },
    { type: "p", text: "Va poi distinta la caparra confirmatoria, che ha funzione di garanzia e non costituisce corrispettivo: come tale resta fuori dal campo di applicazione dell'imposta finché conserva quella natura. Se però le parti la imputano ad acconto sul prezzo, cambia natura e segue le regole dell'acconto. È una distinzione che va risolta nel contratto e non lasciata all'interpretazione successiva." },
    { type: "p", text: "Un'ultima avvertenza riguarda la [vendita su carta](/guide/vendita-su-carta-acconti-garanzie) descritta nella guida dedicata: gli acconti riscossi dal costruttore sono soggetti a fatturazione e l'imposta è dovuta, mentre ai fini delle imposte dirette il ricavo si realizza solo al trasferimento della proprietà. Sono due piani distinti e confonderli produce bilanci sbagliati." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "D.L. 83/2012", ref: "Art. 32-bis", principle: "I soggetti passivi con volume d'affari non superiore al limite previsto possono optare per il differimento dell'esigibilità dell'imposta al momento dell'incasso del corrispettivo; correlativamente il diritto alla detrazione sugli acquisti sorge al momento del pagamento.", impact: "Non è un vantaggio netto: è uno spostamento su entrambi i lati, il cui effetto dipende dai tempi di incasso e di pagamento dell'impresa." },
      { court: "D.L. 83/2012", ref: "Art. 32-bis, limiti", principle: "L'imposta diviene comunque esigibile decorso un anno dal momento di effettuazione dell'operazione, salvo che il cessionario o committente sia stato assoggettato a procedure concorsuali; il regime non si applica alle operazioni soggette a regimi speciali e a quelle per le quali l'imposta è dovuta dal cessionario.", impact: "Reverse charge e split payment restano fuori: in edilizia è ciò che svuota il regime del suo oggetto." },
      { court: "D.P.R. 633/1972", ref: "Art. 6, commi 3 e 4", principle: "Le prestazioni di servizi si considerano effettuate all'atto del pagamento del corrispettivo; se anteriormente è emessa fattura o è pagato in tutto o in parte il corrispettivo, l'operazione si considera effettuata limitatamente all'importo fatturato o pagato.", impact: "Incassare un acconto o emettere fattura in anticipo rende l'imposta dovuta: è una decisione con costo finanziario immediato." },
    ] },

    { type: "h2", text: "Quando l'opzione ha senso: la verifica in tre passaggi", id: "verifica" },
    { type: "p", text: "Prima di optare conviene fare un calcolo che richiede poco tempo e che quasi nessuno fa." },
    { type: "ol", items: [
      "Calcolare la quota di fatturato composta da operazioni ammesse al regime, escludendo reverse charge e split payment: se è inferiore alla metà, il beneficio è marginale per costruzione",
      "Confrontare i tempi medi di incasso dai committenti con i tempi medi di pagamento ai fornitori: il regime conviene quando i primi sono sensibilmente più lunghi dei secondi",
      "Considerare il limite annuale di esigibilità: su committenti che pagano oltre l'anno il differimento si interrompe comunque",
    ] },
    { type: "p", text: "Il secondo passaggio è quello che ribalta il risultato più spesso. Un'impresa che incassa a novanta giorni ma paga i fornitori a sessanta trae un beneficio; una che incassa a novanta e paga a centoventi — situazione non rara nel settore — con il regime peggiora, perché differisce una detrazione di cui oggi beneficia prima." },
    { type: "p", text: "Va inoltre ricordato che il regime comporta obblighi gestionali: occorre tracciare l'incasso di ciascuna fattura per determinarne l'esigibilità, e lo stesso per i pagamenti ai fornitori ai fini della detrazione. Su un'impresa con molte fatture è un carico amministrativo che va messo nel conto." },

    { type: "figure", slot: "iva-per-cassa-e-acconti-2", alt: "Contratto d'appalto con clausola sugli acconti e sulla caparra", caption: "Caparra o acconto: la natura si stabilisce nel contratto, non si interpreta dopo." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Impresa edile con fatturato di 2,4 milioni così composto: 1,1 milioni di subappalti verso imprese del settore costruzioni, 600.000 euro di lavori per committenti pubblici, 700.000 euro di ristrutturazioni per privati. Tempi medi di incasso: 40 giorni dai privati, oltre 90 dal pubblico. Tempi medi di pagamento fornitori: 60 giorni." },
    { type: "p", text: "La verifica del primo passaggio è immediata. I subappalti sono in reverse charge e i lavori pubblici in split payment: entrambi fuori dal regime. La base su cui l'IVA per cassa potrebbe operare è quindi limitata ai 700.000 euro di lavori per privati, meno di un terzo del fatturato." },
    { type: "p", text: "Su quella base il secondo passaggio è sfavorevole: l'impresa incassa dai privati in 40 giorni e paga i fornitori in 60. Differire l'esigibilità sulle vendite di 40 giorni e la detrazione sugli acquisti di 60 peggiora la posizione invece di migliorarla." },
    { type: "p", text: "La conclusione è che per questa impresa l'opzione non ha senso, e il problema di cassa — che è reale, perché il pubblico paga oltre i novanta giorni — va affrontato dove nasce: richiesta di rimborso IVA infrannuale sul credito generato da reverse charge e split payment, [anticipazione del prezzo](/guide/anticipazione-e-revisione-prezzi) sugli appalti pubblici, e gestione del ciclo di incasso. Sono le leve descritte nelle guide dedicate, e agiscono esattamente sui due terzi di fatturato che il regime non tocca." },
    { type: "note", text: "L'errore da non fare: adottare l'IVA per cassa perché il committente pubblico paga tardi. Su quelle operazioni il regime non opera, perché lo split payment le esclude: la risposta è il rimborso IVA infrannuale, non l'opzione. Lo scenario è illustrativo: soglie e condizioni vanno verificate sulla disciplina vigente." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Che cos'è l'IVA per cassa?", a: "Un regime opzionale che differisce l'esigibilità dell'imposta sulle operazioni attive al momento dell'incasso del corrispettivo. In contropartita differisce anche il diritto alla detrazione sugli acquisti al momento del pagamento ai fornitori: è uno spostamento su entrambi i lati, non un vantaggio netto." },
      { q: "Posso usarlo sui lavori in reverse charge?", a: "No. Le operazioni per le quali l'imposta è dovuta dal cessionario restano fuori dal regime: non c'è imposta da differire, perché non la addebiti tu. In edilizia è la ragione principale per cui il regime rende poco." },
      { q: "E sui lavori per la pubblica amministrazione?", a: "Nemmeno: le operazioni soggette a scissione dei pagamenti sono escluse, perché l'imposta viene versata direttamente dall'ente. Per il problema di cassa che il pubblico genera la risposta è il rimborso IVA infrannuale, non l'opzione per il regime." },
      { q: "L'IVA sull'acconto è dovuta anche se i lavori non sono iniziati?", a: "Sì. Il pagamento anticipato del corrispettivo determina l'effettuazione dell'operazione limitatamente all'importo pagato: da quel momento l'imposta è dovuta e va emessa fattura, indipendentemente dallo stato dei lavori." },
      { q: "La caparra è soggetta a IVA?", a: "La caparra confirmatoria ha funzione di garanzia e non costituisce corrispettivo, restando fuori dal campo di applicazione finché conserva quella natura. Se viene imputata ad acconto sul prezzo cambia natura e segue le regole dell'acconto: la distinzione va risolta nel contratto." },
      { q: "Il differimento dura all'infinito se non incasso?", a: "No: l'imposta diviene comunque esigibile decorso un anno dal momento di effettuazione dell'operazione, salvo che il cessionario sia stato assoggettato a procedure concorsuali. Su committenti che pagano oltre l'anno il beneficio si interrompe comunque." },
      { q: "Quando conviene davvero optare?", a: "Quando la quota di fatturato ammessa al regime è significativa — quindi con clientela privata prevalente — e quando i tempi di incasso sono sensibilmente più lunghi di quelli di pagamento ai fornitori. Se paghi i fornitori più tardi di quanto incassi, il regime peggiora la posizione." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se ti hanno proposto l'IVA per cassa come rimedio ai committenti lenti, il calcolo che serve è semplice: quota di fatturato ammessa al regime, tempi medi di incasso e tempi medi di pagamento. Mandaci il fatturato per tipologia di committente e lo scadenzario dalla pagina contatti: verifichiamo se l'opzione ha senso o se il problema va risolto altrove. Per il contesto leggi le guide su split payment, flussi di cassa e reverse charge." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026: soglie e condizioni del regime vanno verificate sulla disciplina vigente." },
  ],
};
