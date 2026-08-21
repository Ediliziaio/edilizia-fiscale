import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "oneri-della-sicurezza-trattamento",
  title: "Costi della sicurezza: non ribassabili, e vanno tenuti separati",
  excerpt:
    "Costi della sicurezza da PSC e oneri aziendali sono due cose diverse: i primi non sono soggetti a ribasso, i secondi restano nelle spese generali dell'impresa. Come si scorporano in offerta, come si imputano a commessa e come si deducono.",
  category: "Lavoro",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust to-brand-dark",
  keywords: [
    "costi della sicurezza non soggetti a ribasso",
    "oneri aziendali della sicurezza offerta",
    "differenza costi e oneri sicurezza",
    "psc costi sicurezza computo",
    "deducibilità costi sicurezza cantiere",
    "art 41 comma 14 dlgs 36 2023",
  ],
  intro:
    "In edilizia la parola sicurezza indica due voci economiche distinte, che si confondono di continuo. I costi della sicurezza sono quelli previsti dal piano di sicurezza e coordinamento per quel cantiere, e non sono soggetti a ribasso. Gli oneri aziendali sono quelli propri dell'impresa e restano nella sua struttura di costo. Sbagliare la distinzione costa in gara e in verifica.",
};

export const seo = {
  seoTitle: "Costi della Sicurezza: Non Ribassabili e Separati",
  metaDescription:
    "Costi da PSC e oneri aziendali sono voci diverse: come si scorporano in offerta, come si imputano a commessa e come si deducono.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — I costi della sicurezza: quelli individuati dal piano di sicurezza e coordinamento per lo specifico cantiere — apprestamenti, protezioni collettive, procedure, coordinamento — non sono soggetti a ribasso e sono scorporati dall'importo assoggettato a gara. Gli oneri aziendali della sicurezza: quelli propri dell'organizzazione dell'impresa, che l'operatore economico deve indicare nella propria offerta. Il riferimento: art. 41, comma 14, del D.lgs. 36/2023 e allegato XV al D.lgs. 81/2008. Sul piano fiscale: entrambi sono costi inerenti e deducibili, ma vanno imputati alla commessa per non falsare il margine." },

    { type: "h2", text: "Due voci che sembrano una sola", id: "due-voci" },
    { type: "p", text: "La confusione nasce dal linguaggio: in cantiere si dice sicurezza per indicare tutto. Ma dal punto di vista economico e contrattuale esistono due grandezze con regole diverse, e tenerle insieme produce errori sia in offerta sia in contabilità." },
    { type: "table", headers: ["", "Costi della sicurezza", "Oneri aziendali della sicurezza"], rows: [
      ["Cosa sono", "Misure previste dal PSC per quello specifico cantiere", "Costi propri dell'organizzazione dell'impresa"],
      ["Esempi", "Ponteggi di servizio comune, recinzioni, parapetti, segnaletica, riunioni di coordinamento, servizi igienico-assistenziali", "Formazione, sorveglianza sanitaria, DPI individuali, RSPP, gestione documentale"],
      ["Chi li quantifica", "Il coordinatore per la progettazione, nel PSC e nel relativo computo", "L'impresa, in funzione della propria struttura"],
      ["Ribassabili in gara", "No: sono scorporati dall'importo assoggettato al ribasso", "Sì: fanno parte dell'offerta, ma vanno indicati separatamente"],
      ["Dove finiscono in contabilità", "Costo diretto della commessa", "Spese generali, da ribaltare sulle commesse"],
    ] },
    { type: "p", text: "La riga sui ribassi è quella che vale denaro immediato. I costi della sicurezza indicati nel PSC vengono riconosciuti per intero, senza subire il ribasso offerto: un'impresa che si aggiudica con un ribasso significativo li incassa comunque nella misura prevista. Confonderli con gli oneri aziendali significa, in pratica, ribassare qualcosa che non doveva essere ribassato." },
    { type: "p", text: "Gli oneri aziendali seguono una logica opposta: sono parte dell'offerta e quindi concorrono a formare il prezzo, ma la disciplina di gara richiede che siano indicati separatamente. L'omissione è stata a lungo materia di contenzioso amministrativo, ed è comunque una compilazione che va fatta con attenzione perché riguarda un elemento dell'offerta." },

    { type: "figure", slot: "oneri-della-sicurezza-trattamento-1", alt: "Cantiere con ponteggi di servizio comune, parapetti e segnaletica di sicurezza", caption: "Gli apprestamenti previsti dal PSC sono costi della sicurezza: non si ribassano." },

    { type: "h2", text: "Cosa dice il piano di sicurezza e coordinamento", id: "psc" },
    { type: "p", text: "Il PSC è redatto dal coordinatore per la progettazione nei cantieri in cui è prevista la presenza di più imprese esecutrici. Contiene, tra l'altro, la stima dei costi della sicurezza, analiticamente determinata secondo i criteri dell'allegato XV al D.lgs. 81/2008." },
    { type: "p", text: "Quell'allegato elenca le categorie che compongono la stima: apprestamenti previsti nel piano, misure preventive e protettive e dispositivi di protezione collettiva, impianti di terra e di protezione contro le scariche atmosferiche, mezzi e servizi di protezione collettiva, procedure specifiche, eventuali interventi finalizzati alla sicurezza richiesti dallo sfasamento spaziale o temporale delle lavorazioni, e le misure di coordinamento relative all'uso comune di apprestamenti e attrezzature." },
    { type: "p", text: "Il punto pratico per l'impresa è che questa stima è un documento di terzi. Non la fa l'impresa: la fa il coordinatore. Ma l'impresa la subisce, perché è quella che determina l'importo non ribassabile e quindi una parte del proprio ricavo. Leggerla con attenzione in fase di offerta — e segnalare eventuali incongruenze prima, non dopo l'aggiudicazione — è parte del lavoro di preventivazione." },
    { type: "p", text: "C'è poi il POS, il piano operativo di sicurezza, che ogni impresa esecutrice redige per la propria attività. È il documento in cui si riflettono gli oneri aziendali: le procedure che l'impresa adotta, la formazione del proprio personale, i DPI che fornisce. Non genera un importo non ribassabile ma descrive costi reali, che vanno riconosciuti nel prezzo offerto." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Codice dei contratti pubblici", ref: "Art. 41, comma 14, D.lgs. 36/2023", principle: "Nei contratti di lavori e servizi, per determinare l'importo posto a base di gara, la stazione appaltante individua nei documenti di gara i costi della manodopera; i costi della manodopera e gli oneri della sicurezza sono scorporati dall'importo assoggettato al ribasso.", impact: "L'importo su cui si applica il ribasso non è il totale dei lavori: chi ribassa sul totale sta regalando margine." },
      { court: "D.lgs. 81/2008", ref: "Allegato XV, punto 4", principle: "Nella stima dei costi della sicurezza vanno considerati, per tutta la durata delle lavorazioni, gli apprestamenti, le misure preventive e protettive, gli impianti di protezione, i mezzi e servizi di protezione collettiva, le procedure specifiche, gli interventi per lo sfasamento delle lavorazioni e le misure di coordinamento.", impact: "È l'elenco su cui verificare la stima del coordinatore: una voce mancante è margine che non verrà riconosciuto." },
      { court: "D.lgs. 81/2008", ref: "Art. 100 e art. 96", principle: "Il piano di sicurezza e coordinamento è redatto dal coordinatore per la progettazione; ciascuna impresa esecutrice redige il proprio piano operativo di sicurezza in riferimento al singolo cantiere.", impact: "PSC e POS hanno autori e funzioni diversi: il primo determina i costi non ribassabili, il secondo descrive gli oneri aziendali." },
    ] },

    { type: "h2", text: "Il trattamento fiscale e contabile", id: "fiscale" },
    { type: "p", text: "Sul piano della deducibilità non ci sono particolarità: i costi sostenuti per la sicurezza sono costi inerenti all'attività e deducibili secondo le regole ordinarie, per competenza. Ponteggi, recinzioni, segnaletica, formazione, sorveglianza sanitaria, dispositivi: tutto quello che serve a rispettare gli obblighi di legge è per definizione inerente." },
    { type: "p", text: "Le questioni interessanti sono altre due, e riguardano la corretta rappresentazione più che la deducibilità. La prima è la distinzione tra costo dell'esercizio e bene ammortizzabile: i ponteggi di proprietà dell'impresa sono attrezzature che si ammortizzano e il cui costo orario va ribaltato sui cantieri che li impiegano, esattamente come per gli altri mezzi. Trattarli come costo dell'anno in cui vengono acquistati distorce il margine di quell'esercizio e di tutti i successivi." },
    { type: "p", text: "La seconda è l'imputazione a commessa. I costi della sicurezza previsti dal PSC sono per definizione riferibili a quel cantiere: sono costi diretti e vanno attribuiti alla commessa. Gli oneri aziendali sono invece costi di struttura, che vanno ribaltati con il driver adottato in azienda. Lasciarli entrambi nelle spese generali è l'errore che rende incomparabili le commesse con requisiti di sicurezza molto diversi tra loro." },
    { type: "p", text: "Su una ristrutturazione in centro storico con ponteggio su suolo pubblico, occupazione, mantovane e viabilità, i costi della sicurezza possono raggiungere una percentuale del valore dell'opera molto superiore a quella di un cantiere in area libera. Se non sono imputati alla commessa, quel cantiere sembra semplicemente meno redditizio degli altri, senza che nessuno sappia perché." },

    { type: "h2", text: "Cosa presidiare in fase di offerta", id: "offerta" },
    { type: "ol", items: [
      "Leggere il computo dei costi della sicurezza allegato al PSC e verificarlo contro l'allegato XV: le voci mancanti non verranno riconosciute",
      "Verificare che l'importo dei costi della sicurezza risulti scorporato dalla base d'asta soggetta a ribasso, e applicare il ribasso solo sull'importo corretto",
      "Quantificare gli oneri aziendali sulla base della propria struttura reale, non con una percentuale forfettaria copiata da un'offerta precedente",
      "Indicare gli oneri aziendali separatamente nell'offerta, dove richiesto dalla disciplina di gara",
      "Segnalare le incongruenze del PSC prima dell'offerta: dopo l'aggiudicazione diventano una riserva da iscrivere, con esiti incerti",
      "Riportare i costi della sicurezza nel preventivo di commessa come voce autonoma, così che il consuntivo sia confrontabile",
    ] },
    { type: "p", text: "Il terzo punto è quello dove si annidano gli errori più silenziosi. Gli oneri aziendali della sicurezza non sono una percentuale convenzionale: sono formazione obbligatoria, sorveglianza sanitaria, DPI, tempo del RSPP, gestione documentale. In un'impresa con molto personale e alto turnover pesano sensibilmente più che in un'impresa piccola e stabile, e usare un valore standard significa sottostimarli o sovrastimarli sistematicamente." },

    { type: "figure", slot: "oneri-della-sicurezza-trattamento-2", alt: "Computo dei costi della sicurezza allegato al piano di sicurezza e coordinamento", caption: "Il computo lo fa il coordinatore, ma determina il tuo ricavo non ribassabile: va letto in fase di offerta." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Gara per lavori di ristrutturazione con base d'asta di 840.000 euro. Il PSC quantifica i costi della sicurezza in 38.000 euro. L'importo soggetto a ribasso è quindi 802.000 euro, non 840.000." },
    { type: "p", text: "L'impresa offre un ribasso del 9%. Applicato correttamente sull'importo soggetto a ribasso, il corrispettivo risulta di 729.820 euro più 38.000 di costi della sicurezza, per un totale di 767.820 euro. Applicato per errore sull'intera base d'asta, il totale sarebbe stato di 764.400 euro: una differenza di 3.420 euro su una sola gara, prodotta da un'operazione aritmetica sbagliata." },
    { type: "p", text: "Sul fronte degli oneri aziendali, l'impresa li quantifica in 11.000 euro sulla base della propria struttura: formazione del personale impiegato, sorveglianza sanitaria, DPI, quota del tempo del responsabile del servizio di prevenzione e protezione riferita al cantiere. Sono costi reali e concorrono a formare il prezzo, ma non essendo scorporabili vengono assorbiti dal ribasso." },
    { type: "p", text: "In fase di consuntivo, i 38.000 euro di costi della sicurezza vengono imputati alla commessa come costo diretto, insieme al costo orario del ponteggio di proprietà impiegato. Il margine di quel cantiere diventa così confrontabile con quello di un cantiere in area libera, dove la stessa voce vale una frazione." },
    { type: "note", text: "L'errore da non fare: applicare il ribasso sull'intera base d'asta. È un errore aritmetico, non di strategia, e si ripete su ogni gara finché qualcuno non lo nota. Lo scenario è illustrativo: importi e discipline vanno verificati sui documenti di gara concreti." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Che differenza c'è tra costi e oneri della sicurezza?", a: "I costi della sicurezza sono quelli previsti dal PSC per lo specifico cantiere — apprestamenti, protezioni collettive, coordinamento — e non sono soggetti a ribasso. Gli oneri aziendali sono i costi propri dell'organizzazione dell'impresa, come formazione, sorveglianza sanitaria e DPI: concorrono al prezzo offerto e vanno indicati separatamente." },
      { q: "I costi della sicurezza si possono ribassare?", a: "No. L'art. 41, comma 14, del D.lgs. 36/2023 prevede che siano scorporati dall'importo assoggettato al ribasso. L'errore tipico è applicare la percentuale di ribasso all'intera base d'asta: si regala margine su ogni gara, e l'errore si ripete finché non viene notato." },
      { q: "Chi quantifica i costi della sicurezza?", a: "Il coordinatore per la progettazione, nel PSC, secondo i criteri dell'allegato XV al D.lgs. 81/2008. Non li quantifica l'impresa, che però li subisce: leggere quel computo in fase di offerta e segnalare le incongruenze prima dell'aggiudicazione fa parte della preventivazione." },
      { q: "Come si quantificano gli oneri aziendali?", a: "Sulla propria struttura reale: formazione obbligatoria, sorveglianza sanitaria, DPI, tempo del RSPP, gestione documentale, riferiti al cantiere. Usare una percentuale forfettaria copiata da un'offerta precedente produce una stima sistematicamente sbagliata, in eccesso o in difetto a seconda dell'organico." },
      { q: "I costi della sicurezza sono deducibili?", a: "Sì, sono costi inerenti all'attività e deducibili secondo le regole ordinarie. La questione rilevante non è la deducibilità ma la corretta rappresentazione: i ponteggi di proprietà sono attrezzature da ammortizzare, non costi dell'esercizio in cui vengono acquistati." },
      { q: "Vanno imputati alla commessa?", a: "I costi della sicurezza sì: sono per definizione riferibili a quel cantiere e sono costi diretti. Gli oneri aziendali sono costi di struttura e si ribaltano con il driver aziendale. Tenerli entrambi nelle spese generali rende incomparabili cantieri con requisiti di sicurezza molto diversi." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Due verifiche rapide che spesso restituiscono qualcosa: come applichi il ribasso nelle ultime gare presentate, e se i costi della sicurezza compaiono come voce autonoma nei tuoi preventivi di commessa. Mandaci due offerte recenti con i relativi documenti di gara dalla pagina contatti. Per il contesto leggi le guide su preventivo di commessa, [margine di commessa](/guide/margine-di-commessa-edilizia) e costo del lavoro edile." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa vigente." },
  ],
};
