import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "forfettario-artigiano-edile",
  title: "Regime forfettario per l'artigiano edile: perché conviene meno di quanto sembra",
  excerpt:
    "Coefficiente di redditività all'86%, IVA sugli acquisti indetraibile e — il punto che quasi nessuno conosce — l'IVA da versare sulle fatture ricevute in reverse charge, senza poterla detrarre. Quando il forfettario funziona in edilizia e quando è una trappola.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "regime forfettario edilizia coefficiente",
    "forfettario reverse charge iva",
    "forfettario 85.000 limite ricavi",
    "coefficiente redditività costruzioni 86",
    "quando conviene uscire dal forfettario",
    "artigiano edile partita iva regime",
  ],
  intro:
    "Il forfettario sembra la scelta naturale per l'impiantista o il piccolo artigiano edile: imposta sostitutiva bassa, contabilità semplificata, nessuna IVA da addebitare. In edilizia però due elementi lo rendono meno conveniente di quanto appaia — il coefficiente di redditività per il settore è tra i più alti, e l'IVA sugli acquisti non si detrae. A cui si aggiunge il nodo del reverse charge.",
};

export const seo = {
  seoTitle: "Forfettario per l'Artigiano Edile: Conviene Davvero?",
  metaDescription:
    "Coefficiente all'86%, IVA sugli acquisti indetraibile e il nodo del reverse charge: quando il forfettario funziona in edilizia e quando no.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il limite: ricavi o compensi non superiori a 85.000 euro nell'anno precedente. Il calcolo: il reddito imponibile si determina applicando ai ricavi un coefficiente di redditività fissato per gruppo di attività; per le costruzioni è tra i più alti del sistema. L'imposta: sostitutiva del 15%, ridotta al 5% per i primi cinque anni al ricorrere dei requisiti per le nuove attività. Il costo nascosto in edilizia: l'IVA sugli acquisti non è detraibile, e chi compra molti materiali la subisce per intero. Il nodo tecnico: il forfettario che riceve una fattura in reverse charge deve integrarla e versare l'imposta, senza poterla detrarre. L'uscita: sopra 85.000 dall'anno successivo, sopra 100.000 immediatamente." },

    { type: "h2", text: "Come funziona, in due righe", id: "come-funziona" },
    { type: "p", text: "Il regime forfettario determina il reddito imponibile in modo forfetario: si applica ai ricavi incassati un coefficiente di redditività stabilito per gruppo di attività, e sul risultato si calcola l'imposta sostitutiva. I costi effettivi non si deducono, con l'eccezione dei contributi previdenziali versati." },
    { type: "p", text: "È qui che nasce il primo equivoco. Un artigiano abituato a ragionare per differenza tra ricavi e costi legge il forfettario come un regime in cui non deve tenere le fatture. Ma il punto non è la semplificazione contabile: è che il reddito su cui paga non dipende da quanto ha speso davvero. Se i costi reali sono superiori alla parte forfetizzata, paga imposte su un reddito che non ha prodotto." },
    { type: "p", text: "Per le attività di costruzione il coefficiente di redditività è tra i più elevati previsti dal sistema: significa che l'ordinamento presume una marginalità alta e riconosce forfetariamente una quota di costi contenuta. Per un artigiano che lavora prevalentemente con manodopera propria e pochi materiali la presunzione può reggere; per chi acquista materiali in misura significativa, no." },

    { type: "h2", text: "Il primo costo nascosto: l'IVA sugli acquisti", id: "iva-acquisti" },
    { type: "p", text: "Il forfettario non addebita l'IVA in fattura e non la versa. Il rovescio è che non la detrae sugli acquisti: l'IVA pagata su materiali, attrezzature, carburante e servizi resta un costo definitivo." },
    { type: "p", text: "In molti settori questo pesa poco, perché gli acquisti sono marginali rispetto al valore aggiunto. In edilizia no. Un serramentista, un impiantista, un posatore acquistano materiali che rappresentano una quota importante del corrispettivo, e su quei materiali l'IVA è persa." },
    { type: "table", headers: ["Situazione dell'artigiano", "Peso dell'IVA indetraibile", "Il forfettario"], rows: [
      ["Prevalenza di manodopera, materiali forniti dal committente", "Basso", "Spesso conveniente"],
      ["Servizi con pochi materiali di consumo", "Basso", "Spesso conveniente"],
      ["Fornitura e posa con materiali propri", "Alto", "Va verificato con i numeri"],
      ["Acquisto di attrezzature e mezzi", "Alto e concentrato", "Sfavorevole nell'anno dell'investimento"],
      ["Clientela composta da imprese soggetti IVA", "—", "L'assenza di rivalsa non è un vantaggio commerciale"],
    ] },
    { type: "p", text: "L'ultima riga merita una spiegazione perché ribalta un'idea diffusa. Il forfettario viene percepito come più competitivo perché non addebita l'IVA. È vero verso i privati consumatori, per i quali l'IVA è un costo. Verso un'impresa soggetto passivo non è un vantaggio: quell'impresa l'IVA la detrarrebbe comunque, quindi il prezzo con o senza imposta le è indifferente. Un subappaltatore forfettario non è più economico per l'appaltatore: è solo diverso da gestire." },

    { type: "figure", slot: "forfettario-artigiano-edile-1", alt: "Furgone di un artigiano edile con materiali e attrezzature", caption: "Chi acquista materiali paga un'IVA che non recupera: è il costo nascosto del forfettario in edilizia." },

    { type: "h2", text: "Il nodo che quasi nessuno conosce: il reverse charge", id: "reverse-charge" },
    { type: "p", text: "È l'aspetto più tecnico di questa guida ed è quello che produce le sorprese più sgradite. Il forfettario è escluso dagli obblighi ordinari in materia di IVA, ma non da quelli che derivano dal meccanismo dell'inversione contabile quando è lui il committente." },
    { type: "p", text: "Se un artigiano in regime forfettario affida una lavorazione a un altro operatore e riceve una fattura in reverse charge — ad esempio per un'installazione di impianti su edificio, o per un subappalto nel settore costruzioni — deve integrare quella fattura con l'aliquota e l'imposta, annotarla e versare l'IVA. E non può detrarla, perché il regime non lo consente." },
    { type: "p", text: "L'effetto è che quell'IVA diventa un costo puro. Su un subappalto da 30.000 euro ricevuto in reverse charge, il forfettario versa l'imposta senza recuperarla: è una somma che un operatore in regime ordinario non avrebbe pagato, perché l'avrebbe detratta. È una delle poche situazioni in cui il regime agevolato produce un aggravio secco rispetto a quello ordinario." },
    { type: "p", text: "Nel verso opposto la situazione è neutra: il forfettario che emette fattura non addebita comunque l'imposta, quindi il fatto che l'operazione rientrerebbe nel reverse charge non cambia nulla per lui. Il problema è solo quando riceve." },
    { type: "p", text: "La conseguenza pratica: un artigiano forfettario che si struttura e comincia ad affidare lavorazioni a terzi trova nel reverse charge un costo che cresce con la sua crescita. È spesso il segnale che il regime non è più quello giusto, molto prima che si raggiunga il limite dei ricavi." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Legge 190/2014", ref: "Art. 1, commi 54 e seguenti", principle: "Il regime forfettario si applica ai contribuenti persone fisiche che nell'anno precedente hanno conseguito ricavi o percepito compensi non superiori al limite previsto; il reddito imponibile si determina applicando ai ricavi il coefficiente di redditività stabilito per il gruppo di attività.", impact: "Il reddito non dipende dai costi effettivi: se sono più alti della quota forfetizzata, si pagano imposte su reddito non prodotto." },
      { court: "Legge 190/2014", ref: "Regime IVA del forfettario", principle: "I contribuenti in regime forfettario non addebitano l'imposta in fattura e non hanno diritto alla detrazione dell'IVA assolta sugli acquisti; restano tenuti agli adempimenti relativi alle operazioni per le quali risultano debitori d'imposta.", impact: "Ricevendo una fattura in reverse charge il forfettario integra e versa senza poter detrarre: l'imposta diventa costo." },
      { court: "Legge 190/2014", ref: "Cause di cessazione", principle: "Il regime cessa di avere applicazione a partire dall'anno successivo a quello in cui i ricavi superano il limite; in caso di superamento della soglia maggiorata la cessazione ha effetto già nell'anno in corso.", impact: "Superare di poco fa uscire dall'anno dopo; superare di molto fa uscire subito, con effetti retroattivi sull'anno in corso." },
    ] },

    { type: "h2", text: "Le cause ostative da verificare", id: "ostative" },
    { type: "p", text: "Oltre al limite di ricavi esistono situazioni che precludono l'accesso o la permanenza nel regime, e che in edilizia si verificano più spesso di quanto si pensi." },
    { type: "ul", items: [
      "Partecipazione, contemporaneamente all'esercizio dell'attività, in società di persone o associazioni professionali",
      "Controllo, diretto o indiretto, di società a responsabilità limitata che esercitano attività economiche riconducibili a quella svolta in regime forfettario",
      "Attività esercitata prevalentemente nei confronti di datori di lavoro attuali o di quelli dei due anni precedenti, o di soggetti a essi riconducibili",
      "Possesso di redditi da lavoro dipendente o assimilati eccedenti la soglia prevista",
      "Residenza fiscale all'estero, salvo le eccezioni previste",
    ] },
    { type: "p", text: "La seconda voce è quella che riguarda direttamente il nostro settore. Un artigiano forfettario che è anche socio di controllo di una S.r.l. edile che svolge attività riconducibile alla sua incorre nella causa ostativa. È una situazione frequente in famiglie imprenditoriali, dove più soggetti operano su attività contigue, e va verificata prima di impostare la struttura." },
    { type: "p", text: "La terza riguarda chi esce da un rapporto di lavoro dipendente per mettersi in proprio continuando a lavorare prevalentemente per l'ex datore. È una fattispecie comune nel settore, dove il passaggio da operaio specializzato ad artigiano autonomo avviene spesso mantenendo il committente principale." },

    { type: "h2", text: "Quando conviene uscirne, prima del limite", id: "uscire" },
    { type: "p", text: "La domanda giusta non è quando si è obbligati a uscire, ma quando conviene farlo. E la risposta arriva quasi sempre prima del limite dei ricavi." },
    { type: "ol", items: [
      "Quando i costi reali superano stabilmente la quota forfetizzata dal coefficiente: si pagano imposte su reddito non prodotto",
      "Quando si affidano lavorazioni a terzi con fatture in reverse charge: l'IVA versata e non detratta diventa un costo crescente",
      "Quando si programmano investimenti in mezzi o attrezzature: l'IVA sull'acquisto è persa per intero nell'anno",
      "Quando si assume personale: cambia la struttura di costo e il forfetario smette di rappresentarla",
      "Quando la clientela è prevalentemente composta da imprese: l'assenza di rivalsa non porta alcun vantaggio commerciale",
      "Quando si vuole accedere a lavori pubblici o a qualificazioni: la struttura richiesta è incompatibile con la dimensione del regime",
    ] },
    { type: "p", text: "Il confronto va fatto con i numeri e non per principio. Il calcolo è semplice: si costruisce il reddito effettivo — ricavi meno costi realmente sostenuti, IVA compresa dove indetraibile — e lo si confronta con il reddito forfetizzato. Se il secondo è sistematicamente superiore al primo, il regime sta costando." },

    { type: "figure", slot: "forfettario-artigiano-edile-2", alt: "Prospetto di confronto tra reddito forfetizzato e reddito effettivo di un artigiano", caption: "Il confronto si fa con i numeri: se il reddito forfetizzato supera stabilmente quello reale, il regime costa." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Impiantista in regime forfettario, ricavi incassati nell'anno per 62.000 euro. Acquista materiali e componenti per 21.000 euro più IVA, sostiene costi di veicolo, carburante e attrezzature per 7.000 euro più IVA, e affida a un collega una lavorazione da 9.000 euro che riceve in reverse charge." },
    { type: "p", text: "Con il coefficiente di redditività del settore, il reddito imponibile forfetizzato si attesta su una cifra sensibilmente superiore al reddito effettivo, perché i costi realmente sostenuti superano la quota che il coefficiente riconosce. Su quella differenza l'artigiano paga imposta sostitutiva e contributi." },
    { type: "p", text: "A questo si aggiungono due voci che nel regime ordinario non esisterebbero. L'IVA su materiali e costi di gestione, che nel forfettario resta a carico per intero: su 28.000 euro di imponibile di acquisti è una somma rilevante. E l'IVA sul subappalto ricevuto in reverse charge, che l'impiantista integra, versa e non detrae." },
    { type: "p", text: "Il confronto complessivo con il regime ordinario semplificato — che consente la deduzione dei costi effettivi e la detrazione dell'IVA — in questa configurazione risulta sfavorevole al forfettario, pur essendo i ricavi ampiamente sotto il limite. È la dimostrazione che il limite di 85.000 euro non è il criterio di scelta: è solo il criterio di ammissibilità." },
    { type: "note", text: "L'errore da non fare: restare nel forfettario perché i ricavi sono sotto soglia. La soglia dice se puoi, non se conviene. Il confronto va rifatto ogni anno con i costi effettivi, l'IVA indetraibile e l'eventuale reverse charge subito. Lo scenario è illustrativo: coefficienti, soglie e aliquote vanno verificati sulla disciplina vigente." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Qual è il limite di ricavi del forfettario?", a: "Ricavi o compensi non superiori a 85.000 euro nell'anno precedente. Il superamento comporta la fuoriuscita dall'anno successivo; il superamento della soglia maggiorata di 100.000 euro produce la cessazione già nell'anno in corso, con effetti sull'IVA delle operazioni successive." },
      { q: "Perché il coefficiente delle costruzioni è così alto?", a: "Perché l'ordinamento presume per quel gruppo di attività una marginalità elevata, riconoscendo forfetariamente una quota di costi contenuta. Per chi lavora prevalentemente con manodopera propria la presunzione può reggere; per chi acquista molti materiali no." },
      { q: "Posso detrarre l'IVA sugli acquisti?", a: "No. Il forfettario non addebita l'imposta in fattura e non ha diritto alla detrazione su acquisti, attrezzature e servizi. In edilizia, dove i materiali pesano, è il costo nascosto che più spesso ribalta la convenienza del regime." },
      { q: "Cosa succede se ricevo una fattura in reverse charge?", a: "Devi integrarla con aliquota e imposta, annotarla e versare l'IVA, senza poterla detrarre. Diventa un costo puro che un operatore in regime ordinario non avrebbe sostenuto. È il motivo per cui il regime peggiora man mano che l'artigiano affida lavorazioni a terzi." },
      { q: "Il forfettario è più competitivo perché non applica l'IVA?", a: "Solo verso i privati consumatori, per i quali l'imposta è un costo. Verso un'impresa soggetto passivo non è un vantaggio: quell'impresa l'IVA la detrarrebbe comunque. Un subappaltatore forfettario non è più economico per l'appaltatore." },
      { q: "Posso essere forfettario e socio di una S.r.l. edile?", a: "Non se controlli, direttamente o indirettamente, una S.r.l. che esercita attività economiche riconducibili a quella svolta in regime forfettario. È una causa ostativa frequente nelle famiglie imprenditoriali del settore e va verificata prima di impostare la struttura." },
      { q: "Quando conviene uscire dal regime?", a: "Quando i costi effettivi superano stabilmente la quota forfetizzata, quando si ricevono fatture in reverse charge, quando si programmano investimenti in mezzi, quando si assume personale o quando la clientela è composta da imprese. Spesso molto prima del limite dei ricavi." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Il calcolo che risolve la questione richiede tre dati: ricavi incassati, costi effettivamente sostenuti con la relativa IVA, e l'elenco delle fatture ricevute in reverse charge. Mandaceli dalla pagina contatti: confrontiamo reddito forfetizzato e reddito effettivo e ti diciamo se il regime ti sta costando. Per il contesto leggi le guide su reverse charge, costi deducibili e trasformazione in S.r.l." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026: soglie, coefficienti e aliquote vanno verificati sulla disciplina vigente." },
  ],
};
