import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "attestazione-soa-requisiti-economici",
  title: "Attestazione SOA: come il bilancio decide la classifica che puoi ottenere",
  excerpt:
    "Cifra d'affari in lavori, patrimonio netto, costo del personale, attrezzatura: i requisiti economico-finanziari della qualificazione si leggono nei tuoi bilanci. Le scelte contabili fatte oggi decidono a quali gare potrai partecipare fra tre anni.",
  category: "Appalti",
  date: "Agosto 2026",
  readTime: "15 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-brand-dark",
  keywords: [
    "attestazione soa requisiti",
    "classifiche soa importi",
    "cifra d'affari in lavori soa",
    "requisiti economico finanziari qualificazione",
    "soa costo del personale 15%",
    "come ottenere la soa",
  ],
  intro:
    "L'attestazione SOA certifica che l'impresa ha i requisiti per eseguire lavori pubblici sopra una certa soglia, in determinate categorie e fino a un determinato importo. I requisiti tecnici li dimostrano i certificati di esecuzione lavori; quelli economico-finanziari li dimostrano i bilanci. È il punto in cui le scelte contabili smettono di essere una questione contabile.",
};

export const seo = {
  seoTitle: "Attestazione SOA: Come il Bilancio Decide la Classifica",
  metaDescription:
    "Cifra d'affari in lavori, patrimonio netto, costo del personale e attrezzatura: come i bilanci determinano categorie e classifiche ottenibili.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Cos'è: attestazione rilasciata da un organismo privato autorizzato (SOA) che qualifica l'impresa per i lavori pubblici sopra la soglia di legge. Cosa certifica: categorie (OG per opere generali, OS per opere specializzate) e classifiche, cioè l'importo massimo per il quale puoi concorrere. La durata: cinque anni, con verifica di mantenimento alla scadenza del terzo. I requisiti economici: cifra d'affari in lavori, adeguata dotazione di attrezzatura tecnica, adeguato organico medio annuo, patrimonio netto. La leva contabile: la cifra d'affari in lavori dipende anche da come valuti i lavori in corso su ordinazione." },

    { type: "h2", text: "Come è fatta un'attestazione", id: "come-fatta" },
    { type: "p", text: "L'attestazione SOA non è un documento generico: dice esattamente cosa puoi fare e per quanto. Si compone di due coordinate. La prima è la categoria: le opere generali sono classificate da OG1 a OG13 — edifici civili e industriali, opere stradali, impianti, restauro, opere idrauliche — mentre le opere specializzate vanno da OS1 a OS35 e coprono lavorazioni specifiche come strutture in cemento armato, impianti termici, finiture, barriere." },
    { type: "p", text: "La seconda coordinata è la classifica, che stabilisce l'importo massimo dei lavori per i quali l'impresa può concorrere in quella categoria. La scala è progressiva e va dalla prima classifica, che copre importi contenuti, fino alla ottava, che è illimitata." },
    { type: "table", headers: ["Classifica", "Importo massimo", "In pratica"], rows: [
      ["I", "258.000 €", "Piccoli interventi, manutenzioni"],
      ["II", "516.000 €", "Cantieri di dimensione locale"],
      ["III", "1.033.000 €", "Da qui in su serve la certificazione di qualità"],
      ["III-bis", "1.500.000 €", "Classifica intermedia introdotta per gradualità"],
      ["IV", "2.582.000 €", "Appalti di media dimensione"],
      ["IV-bis", "3.500.000 €", "Classifica intermedia"],
      ["V", "5.165.000 €", "Imprese strutturate"],
      ["VI", "10.329.000 €", "Grandi opere"],
      ["VII", "15.494.000 €", "Grandi opere"],
      ["VIII", "illimitata", "Nessun limite di importo"],
    ] },
    { type: "p", text: "Nella partecipazione alle gare la classifica posseduta è incrementabile di un quinto, entro i limiti previsti: significa che con una classifica III si può concorrere a lavori fino a un importo superiore a quello nominale. È un margine utile, ma va verificato caso per caso perché la disciplina di dettaglio è puntuale — e costruirci sopra la strategia commerciale è imprudente." },
    { type: "p", text: "Dalla terza classifica in su l'attestazione richiede il possesso della certificazione del sistema di qualità aziendale. Non è un dettaglio formale: comporta un percorso di certificazione, un costo ricorrente e un audit periodico, e va messo a piano insieme al resto." },

    { type: "figure", slot: "attestazione-soa-requisiti-economici-1", alt: "Attestazione SOA con categorie e classifiche affiancata ai bilanci d'esercizio", caption: "Le categorie le dimostri con i lavori eseguiti. Le classifiche le dimostri con i bilanci." },

    { type: "h2", text: "I requisiti economico-finanziari, uno per uno", id: "requisiti" },
    { type: "p", text: "Qui sta il punto che rende questa materia una questione da commercialista e non solo da consulente per le gare. I requisiti tecnici — aver eseguito lavori di quella categoria — si dimostrano con i certificati di esecuzione lavori rilasciati dalle stazioni appaltanti. I requisiti economico-finanziari si leggono nei bilanci depositati." },
    { type: "table", headers: ["Requisito", "Dove si legge", "Cosa lo influenza"], rows: [
      ["Cifra d'affari in lavori", "Ricavi delle vendite e prestazioni, per la sola parte riferita a lavori", "La valutazione dei lavori in corso su ordinazione e la classificazione dei ricavi"],
      ["Adeguata dotazione di attrezzatura tecnica", "Immobilizzazioni materiali, canoni di locazione finanziaria e noli", "Politica di acquisto contro noleggio dei mezzi d'opera"],
      ["Adeguato organico medio annuo", "Costo del personale e libro unico", "Ricorso al subappalto rispetto alla manodopera diretta"],
      ["Patrimonio netto", "Passivo dello stato patrimoniale", "Distribuzione degli utili, perdite, riserve"],
      ["Regolarità contributiva e fiscale", "DURC e certificazioni", "Puntualità dei versamenti"],
    ] },
    { type: "p", text: "La cifra d'affari in lavori è il requisito che pesa di più ed è anche quello su cui le scelte contabili incidono di più. In un'impresa che lavora per commessa, i ricavi dell'esercizio non coincidono con quanto fatturato: dipendono dalla valutazione dei lavori in corso su ordinazione, cioè dalla percentuale di avanzamento attribuita alle commesse aperte al 31 dicembre." },
    { type: "p", text: "Ne segue una conseguenza che sorprende molti imprenditori: due bilanci ugualmente corretti, redatti con criteri diversi ma entrambi legittimi, possono restituire cifre d'affari sensibilmente diverse. Non si tratta di forzare i numeri — questo non si fa e non regge — ma di sapere che la scelta del criterio di valutazione, fatta a dicembre, produce effetti sulla qualificazione ottenibile tre anni dopo." },
    { type: "p", text: "Il requisito dell'organico medio annuo, misurato attraverso il costo del personale, è il secondo con effetti strategici. Un'impresa che subappalta molto ha un costo del personale basso rispetto alla cifra d'affari, e può trovarsi in difficoltà proprio su quel parametro. È una tensione reale: il subappalto conviene operativamente ma erode il requisito, e la decisione va presa sapendolo." },

    { type: "h2", text: "Il periodo di riferimento: perché si decide oggi per fra tre anni", id: "periodo" },
    { type: "p", text: "I requisiti economico-finanziari non si misurano su un singolo esercizio ma su un arco pluriennale di riferimento. Questo produce l'effetto che rende la materia interessante dal punto di vista della pianificazione: un esercizio debole non si compensa a ridosso della domanda di attestazione, perché entra comunque nella media." },
    { type: "p", text: "Il corollario pratico è netto. Se un'impresa vuole salire di classifica, il lavoro non inizia quando decide di chiedere l'attestazione: inizia diversi esercizi prima, con scelte coerenti su valutazione delle commesse, distribuzione degli utili, politica di acquisto dei mezzi e ricorso al subappalto. Chi arriva alla SOA con tre bilanci fatti senza pensarci ottiene la classifica che quei bilanci consentono, e basta." },
    { type: "p", text: "Vale anche il contrario, ed è il caso che vediamo più spesso: imprese che hanno i numeri per una classifica superiore e non lo sanno, perché nessuno ha mai messo insieme il bilancio e la qualificazione. È una verifica che costa poche ore e che a volte apre un intero segmento di gare." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Codice dei contratti pubblici", ref: "D.lgs. 36/2023", principle: "Per i lavori pubblici di importo superiore alla soglia di legge la qualificazione è condizione necessaria per la partecipazione; il sistema è attuato da organismi di attestazione autorizzati, sulla base di requisiti di ordine generale, tecnico-organizzativo ed economico-finanziario.", impact: "Sopra la soglia la SOA non è un vantaggio competitivo: è la condizione per esistere in quel mercato." },
      { court: "Disciplina attuativa della qualificazione", principle: "I requisiti economico-finanziari comprendono la cifra d'affari realizzata con lavori, l'adeguata dotazione di attrezzatura tecnica e l'adeguato organico medio annuo, riferiti a un periodo pluriennale documentato dai bilanci.", impact: "Il periodo pluriennale è la ragione per cui la classifica si costruisce anni prima, non alla domanda." },
      { court: "Principi contabili nazionali", ref: "OIC 23", principle: "I lavori in corso su ordinazione sono valutati con il criterio della percentuale di completamento quando ricorrono le condizioni previste; in mancanza si applica la commessa completata.", impact: "La scelta del criterio incide sui ricavi dell'esercizio e quindi sulla cifra d'affari in lavori rilevante per la SOA." },
    ] },

    { type: "h2", text: "Le operazioni straordinarie e il rischio di perdere la qualificazione", id: "straordinarie" },
    { type: "p", text: "È il tema che collega questa guida al resto del sito, ed è quello su cui abbiamo visto più danni evitabili. Le riorganizzazioni societarie che consigliamo per proteggere il patrimonio — separare gli immobili dall'operativa, costituire una holding — riducono il patrimonio netto della società operativa. E il patrimonio netto è un requisito della qualificazione." },
    { type: "p", text: "Non significa che non si debbano fare: significa che vanno dimensionate. Una scissione che trasferisce il capannone a un'immobiliare va progettata verificando prima che il patrimonio netto residuo dell'operativa resti compatibile con le classifiche possedute, e con un margine — perché una verifica di mantenimento che arriva subito dopo l'operazione non perdona." },
    { type: "p", text: "Lo stesso vale per le operazioni che riguardano il soggetto giuridico. Cedere l'azienda senza cedere la società, ad esempio, non trasferisce automaticamente l'attestazione: esistono meccanismi per il trasferimento dei requisiti in caso di operazioni straordinarie, ma sono soggetti a condizioni e verifiche che vanno esaminate prima di impostare la struttura dell'operazione, non dopo il rogito." },
    { type: "p", text: "C'è infine il tema delle persone. I requisiti tecnici richiedono direttori tecnici con determinati titoli ed esperienza documentata. Se quei requisiti sono in capo al fondatore e il fondatore esce — per cessione, per passaggio generazionale, per pensionamento — la qualificazione traballa. È una delle ragioni per cui il passaggio generazionale in edilizia richiede anni e non mesi." },

    { type: "figure", slot: "attestazione-soa-requisiti-economici-2", alt: "Riunione con bilanci, certificati di esecuzione lavori e progetto di scissione sul tavolo", caption: "Una scissione mal dimensionata può far perdere una classifica: il patrimonio netto è un requisito." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa di costruzioni con attestazione OG1 classifica III, che le consente di concorrere a lavori fino a 1.033.000 euro, elevabili di un quinto. Negli ultimi esercizi il volume è cresciuto e l'imprenditore vorrebbe salire alla IV per accedere a gare da oltre due milioni." },
    { type: "p", text: "La verifica sui bilanci mostra due situazioni opposte. Sulla cifra d'affari in lavori i numeri ci sono e con margine: il periodo di riferimento è ampiamente sufficiente per la classifica IV. Sul costo del personale, invece, il rapporto con la cifra d'affari è compresso, perché negli ultimi due esercizi l'impresa ha subappaltato una quota crescente delle lavorazioni per gestire i picchi senza assumere." },
    { type: "p", text: "La strada praticabile non è contabile ma organizzativa, e richiede tempo: riportare in casa una parte delle lavorazioni, oppure strutturare diversamente il rapporto con alcune squadre. Sono scelte che incidono sul margine e sulla flessibilità, quindi vanno valutate per quello che sono — un investimento per accedere a un segmento di mercato — e non come un adempimento." },
    { type: "p", text: "Nello stesso esame emerge un secondo elemento. L'impresa aveva in programma per l'anno successivo la scissione del capannone a favore di una immobiliare. Con il patrimonio netto ridotto di quell'importo, la classifica III sarebbe rimasta compatibile ma la IV, obiettivo dichiarato, no. L'operazione è stata mantenuta e ridimensionata nella tempistica, lasciando in capo all'operativa una quota di liquidità superiore a quella inizialmente ipotizzata." },
    { type: "note", text: "L'errore da non fare: progettare la protezione patrimoniale e la crescita della qualificazione come due percorsi separati, seguiti da consulenti che non si parlano. Sono due usi dello stesso patrimonio netto e vanno dimensionati insieme. Lo scenario è illustrativo: importi e requisiti vanno verificati sulla disciplina vigente e sui bilanci concreti." },

    { type: "timeline", title: "Come si costruisce una classifica superiore", steps: [
      { when: "Almeno 3 esercizi prima", label: "Verifica dei requisiti attuali sui bilanci", detail: "Cifra d'affari in lavori, costo del personale, patrimonio netto, attrezzatura." },
      { when: "In sede di chiusura", label: "Scelte contabili consapevoli", detail: "Valutazione delle commesse, distribuzione degli utili, capitalizzazione." },
      { when: "In corso d'anno", label: "Equilibrio tra manodopera diretta e subappalto", detail: "È il parametro che più spesso blocca il salto di classifica." },
      { when: "Prima di ogni operazione straordinaria", label: "Verifica dell'impatto sul patrimonio netto", detail: "Scissioni e distribuzioni vanno dimensionate sulla classifica da mantenere." },
      { when: "All'istruttoria SOA", label: "Raccolta di bilanci e certificati di esecuzione", detail: "I CEL vanno richiesti alle stazioni appaltanti per tempo: arrivano lentamente." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quando serve l'attestazione SOA?", a: "Per partecipare a procedure di affidamento di lavori pubblici di importo superiore alla soglia prevista dal codice dei contratti. Sotto quella soglia si dimostrano i requisiti in altro modo. Sopra, senza attestazione non si concorre: non è un vantaggio competitivo ma la condizione per accedere a quel mercato." },
      { q: "Quanto dura l'attestazione?", a: "Cinque anni, con una verifica di mantenimento dei requisiti alla scadenza del terzo. La verifica intermedia è il momento in cui emergono gli effetti di operazioni straordinarie o di esercizi deboli: va messa a calendario e preparata, non subita." },
      { q: "Come incide il bilancio sulla classifica ottenibile?", a: "In modo diretto. La cifra d'affari in lavori, il costo del personale e il patrimonio netto si leggono nei bilanci depositati, su un periodo pluriennale. In un'impresa che lavora per commessa, la valutazione dei lavori in corso su ordinazione incide sui ricavi dell'esercizio e quindi sul requisito." },
      { q: "Se subappalto molto rischio di non qualificarmi?", a: "È una tensione reale. Il requisito dell'organico medio annuo si misura sul costo del personale: un ricorso elevato al subappalto lo comprime rispetto alla cifra d'affari. Il subappalto resta una leva operativa legittima, ma la scelta va fatta sapendo che incide sulla qualificazione." },
      { q: "Una scissione mi fa perdere la SOA?", a: "Può farlo se riduce il patrimonio netto sotto la soglia richiesta dalle classifiche possedute. Non è un motivo per rinunciare alla protezione patrimoniale: è un motivo per dimensionarla, verificando prima l'impatto e lasciando un margine in capo alla società operativa." },
      { q: "Se vendo l'azienda, l'attestazione passa all'acquirente?", a: "Non automaticamente. L'attestazione è riferita al soggetto giuridico: nella cessione di quote resta alla società ceduta, nella cessione d'azienda no. Esistono meccanismi di trasferimento dei requisiti nelle operazioni straordinarie, soggetti a condizioni da verificare prima di impostare l'operazione." },
      { q: "Serve la certificazione di qualità?", a: "Dalla terza classifica in su sì. Comporta un percorso di certificazione, un costo ricorrente e audit periodici: va pianificata insieme al salto di classifica e non affrontata all'ultimo, perché ha tempi propri." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai un'attestazione e non hai mai verificato quale classifica i tuoi bilanci consentirebbero, è possibile che tu stia lasciando fuori gare a cui potresti già partecipare. E se hai in programma una riorganizzazione societaria, va dimensionata prima sulla qualificazione da mantenere. Mandaci gli ultimi bilanci, l'attestazione in corso e l'elenco dei certificati di esecuzione: verifichiamo la distanza dalla classifica successiva e l'impatto delle operazioni in programma. Per il contesto leggi le guide su lavori in corso su ordinazione, scissione immobiliare e passaggio generazionale." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026: importi delle classifiche e requisiti vanno verificati sulla disciplina vigente al momento della domanda." },
  ],
};
