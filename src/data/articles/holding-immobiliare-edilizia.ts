import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "holding-immobiliare-edilizia",
  title: "Holding per l'impresa edile: quando serve davvero e come si costruisce",
  excerpt:
    "Dividendi tassati all'1,2% invece che al 26%, immobili fuori dal rischio dei cantieri, regia unica su più società. Ma anche costi ricorrenti e rischio di abuso del diritto: quando la holding conviene e quando è solo una spesa.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "16 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-gold-dark to-gold",
  keywords: [
    "holding impresa edile",
    "holding immobiliare",
    "quando conviene una holding",
    "holding srl vantaggi fiscali",
    "costituire holding costruzioni",
    "holding e abuso del diritto",
  ],
  intro:
    "La holding è una società che detiene le partecipazioni nelle società operative e, di norma, gli immobili e la liquidità del gruppo. In edilizia risolve due problemi insieme: separa il patrimonio accumulato dal rischio dei cantieri e consente di far circolare gli utili tra le società con un prelievo dell'1,2% invece che del 26%. Ha senso quando ci sono utili stabili, immobili o più società; non ne ha con un solo cantiere e margini appena sufficienti.",
};

export const seo = {
  seoTitle: "Holding per l'Impresa Edile: Quando Serve Davvero",
  metaDescription:
    "Dividendi al 95% esenti e immobili fuori dal rischio dei cantieri: quando la holding conviene a un'impresa edile, quanto costa e come si difende.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il vantaggio fiscale: i dividendi incassati da una holding italiana concorrono al reddito solo per il 5% (art. 89 TUIR), con un carico effettivo dell'1,2% contro il 26% della ritenuta sulla persona fisica. Il vantaggio patrimoniale: immobili e liquidità restano fuori dalla società che apre i cantieri e risponde di infortuni, vizi e solidarietà negli appalti. Il vincolo: servono ragioni economiche reali e documentate, altrimenti l'operazione è contestabile come abuso del diritto (art. 10-bis L. 212/2000). Il momento giusto: quando l'azienda è in salute, mai quando i creditori sono già alla porta." },

    { type: "h2", text: "Che cos'è una holding, in concreto", id: "cosa-e" },
    { type: "p", text: "Una holding è una società — nella pratica quasi sempre una S.r.l. — che sta sopra le società operative e ne detiene le quote. I soci persone fisiche non possiedono più direttamente l'impresa di costruzioni: possiedono la holding, che a sua volta possiede l'impresa. Sopra quella stessa holding si collocano di norma gli immobili strumentali, la liquidità in eccesso e le eventuali altre partecipazioni." },
    { type: "p", text: "La struttura si costruisce in due modi. Il primo è il conferimento delle quote della società operativa in una nuova società, operazione che in presenza dei requisiti dell'art. 177 del TUIR avviene in regime di neutralità indotta, cioè senza generare plusvalenze tassabili. Il secondo è la scissione, con cui si separa un ramo — tipicamente quello immobiliare — a favore di una beneficiaria, in neutralità fiscale ai sensi dell'art. 173 del TUIR." },
    { type: "p", text: "La scelta tra le due strade non è indifferente e dipende da cosa si vuole separare: le partecipazioni o i beni. Nella maggior parte delle imprese edili che seguiamo il risultato finale combina entrambe: una holding sopra, un'immobiliare che detiene il capannone, una o più operative che aprono i cantieri." },

    { type: "figure", slot: "holding-immobiliare-edilizia-1", alt: "Schema di gruppo con holding, immobiliare e società operativa di costruzioni", caption: "La struttura tipo: gli immobili non stanno mai nella società che apre i cantieri." },

    { type: "h2", text: "Il vantaggio fiscale: dividendi all'1,2% invece che al 26%", id: "dividendi" },
    { type: "p", text: "Quando la società operativa distribuisce utili, la destinazione cambia radicalmente il prelievo. Se il socio è una persona fisica non imprenditore, si applica una ritenuta a titolo d'imposta del 26%: su 200.000 euro di dividendi restano 148.000 euro. Se il socio è una società di capitali italiana, il dividendo concorre al suo reddito imponibile solo per il 5%, e con l'IRES al 24% il carico effettivo è dell'1,2%: su 200.000 euro ne restano circa 197.600." },
    { type: "table", headers: ["Destinazione dell'utile distribuito", "Prelievo", "Su 200.000 € distribuiti"], rows: [
      ["Socio persona fisica non imprenditore", "Ritenuta d'imposta 26%", "Restano 148.000 €"],
      ["Holding S.r.l. italiana", "IRES 24% sul 5% imponibile = 1,2%", "Restano circa 197.600 €"],
      ["Holding, e poi distribuzione al socio persona fisica", "1,2% + 26% sul residuo", "Restano circa 146.200 €"],
    ] },
    { type: "p", text: "La terza riga è la più importante, ed è quella che i venditori di strutture societarie non mostrano. Il 95% di esenzione non è un azzeramento: è un differimento. Nel momento in cui la holding distribuisce a sua volta al socio persona fisica, il 26% si applica comunque. Se l'obiettivo è portare i soldi sul conto personale, la holding non fa risparmiare nulla — anzi, aggiunge un passaggio." },
    { type: "p", text: "Il vantaggio è reale quando l'utile non serve al consumo personale ma va reinvestito: comprare un altro immobile, capitalizzare una nuova società operativa, costituire una riserva di liquidità per i picchi di cantiere, acquisire un concorrente. In quel caso la holding consente di muovere risorse quasi integre a livello di gruppo, invece di farle passare per il patrimonio personale con un taglio del 26%." },

    { type: "h2", text: "Il vantaggio che in edilizia conta di più: separare il rischio", id: "rischio" },
    { type: "p", text: "L'edilizia è, dopo il trasporto, l'attività che espone di più l'imprenditore. La società che apre i cantieri risponde di danni a terzi, infortuni sul lavoro, vizi e difformità dell'opera per anni dopo la consegna, responsabilità solidale con i subappaltatori in materia retributiva e contributiva, penali per ritardo. Un solo evento significativo può assorbire il patrimonio di dieci anni di lavoro." },
    { type: "p", text: "Se il capannone, gli appartamenti acquistati negli anni buoni e la liquidità stanno dentro quella stessa società, sono tutti esposti a quel rischio. Se stanno sopra, in una holding o in un'immobiliare controllata dalla holding, il perimetro aggredibile si ferma alla società operativa e al suo patrimonio netto." },
    { type: "p", text: "Attenzione però a un equivoco frequente: la separazione societaria non copre le garanzie personali. Se l'imprenditore ha firmato fideiussioni verso banche, fornitori o stazioni appaltanti, il creditore agisce in forza di quelle garanzie e la struttura non lo ferma. La riduzione progressiva delle fideiussioni personali è parte integrante di qualunque piano di protezione patrimoniale serio, e spesso è la parte più difficile." },

    { type: "h2", text: "Quando la holding non serve", id: "quando-non-serve" },
    { type: "p", text: "Vale la pena essere espliciti, perché è la parte che quasi nessuno scrive. La holding è un costo ricorrente: un secondo bilancio da redigere e depositare, adempimenti dichiarativi autonomi, eventuale organo di controllo, compensi, oneri societari. A questo si aggiunge il costo una tantum dell'operazione di costituzione, tra atti notarili, perizie e consulenza." },
    { type: "ul", items: [
      "Non serve se l'utile viene interamente prelevato ogni anno per il tenore di vita familiare: il 26% si paga comunque, con un passaggio in più",
      "Non serve se c'è una sola società operativa piccola, senza immobili e senza liquidità accumulata: non c'è nulla da separare",
      "Non serve se l'impresa è già in tensione finanziaria: gli atti compiuti in prossimità dell'insolvenza sono revocabili e non proteggono",
      "Non serve, da sola, se l'imprenditore ha rilasciato fideiussioni personali su tutte le esposizioni: lì il problema è un altro",
      "Non serve come schermo per operazioni prive di sostanza: è esattamente la fattispecie che l'art. 10-bis colpisce",
    ] },
    { type: "p", text: "La soglia sotto cui, nella nostra esperienza, l'operazione non si ripaga è indicativamente quella di un'impresa che non genera utili stabilmente reinvestibili e non ha immobili da separare. Sopra quella soglia, il beneficio patrimoniale da solo giustifica quasi sempre la struttura, anche prescindendo dal vantaggio sui dividendi." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Testo unico imposte sui redditi", ref: "Art. 89 TUIR", principle: "Gli utili distribuiti da società di capitali residenti concorrono a formare il reddito della società percipiente limitatamente al 5% del loro ammontare.", impact: "Con l'IRES al 24%, il carico effettivo sul dividendo incassato dalla holding è dell'1,2%: è la base matematica di tutta la struttura." },
      { court: "Testo unico imposte sui redditi", ref: "Art. 87 TUIR (participation exemption)", principle: "Le plusvalenze da cessione di partecipazioni sono esenti al 95% al ricorrere di tutti i requisiti, tra cui l'esercizio da parte della partecipata di un'impresa commerciale.", impact: "Le società di mera gestione immobiliare sono di norma escluse dal requisito di commercialità: in edilizia va verificato prima di impostare la struttura." },
      { court: "Statuto del contribuente", ref: "Art. 10-bis L. 212/2000", principle: "Configurano abuso del diritto le operazioni prive di sostanza economica che, pur formalmente rispettose delle norme, realizzano essenzialmente vantaggi fiscali indebiti; resta ferma la libertà di scelta tra operazioni comportanti un diverso carico fiscale.", impact: "La holding con ragioni economiche reali e documentate è legittima; quella priva di sostanza è disconoscibile. La differenza sta nella documentazione." },
    ] },

    { type: "h2", text: "Il presidio dell'abuso del diritto: come si documenta", id: "abuso" },
    { type: "p", text: "L'art. 10-bis dello Statuto del contribuente non vieta di organizzarsi in modo fiscalmente efficiente: vieta le operazioni prive di sostanza economica che realizzano essenzialmente vantaggi fiscali indebiti. La stessa norma afferma esplicitamente che resta ferma la libertà di scegliere tra operazioni comportanti un diverso carico fiscale, quando la scelta ha una ragione." },
    { type: "p", text: "La differenza tra una struttura difendibile e una attaccabile sta quasi interamente nella documentazione contemporanea all'operazione. Le ragioni economiche vanno scritte nella relazione dell'organo amministrativo, nel verbale assembleare, nella perizia di stima: separazione del rischio d'impresa dal patrimonio, preparazione dell'ingresso dei figli o di un socio finanziario, riorganizzazione di un gruppo cresciuto in modo disordinato, accesso al credito con un veicolo dedicato." },
    { type: "p", text: "Ci sono poi segnali di sostanza che pesano più di qualunque relazione: la holding ha una sede, tiene assemblee, prende decisioni reali sugli investimenti, incassa canoni di locazione di mercato dall'operativa, ha un conto corrente movimentato con logica. Una holding che esiste solo in visura e sul cui conto non passa nulla è indifendibile, per quanto ben scritta sia la relazione." },
    { type: "p", text: "Quando l'operazione è di valore rilevante e la questione è genuinamente dubbia, esiste uno strumento preventivo: l'interpello anti-abuso, che consente di sottoporre l'operazione all'Agenzia delle Entrate prima di realizzarla. Ha tempi e costi, ma su riorganizzazioni importanti è spesso l'investimento più razionale." },

    { type: "figure", slot: "holding-immobiliare-edilizia-2", alt: "Verbale assembleare e perizia di stima su una scrivania", caption: "Le ragioni economiche si scrivono quando l'operazione si fa, non quando arriva la contestazione." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Impresa di costruzioni S.r.l. con ricavi per 6,5 milioni, utile netto medio di 420.000 euro negli ultimi tre esercizi, due soci fratelli al 50%. Nel bilancio della società operativa figurano il capannone con uffici (valore contabile 900.000 euro), quattro appartamenti invenduti di una vecchia iniziativa (600.000 euro) e liquidità per 800.000 euro. I due soci prelevano circa 120.000 euro l'anno a testa e reinvestono il resto." },
    { type: "p", text: "La situazione di partenza espone 2,3 milioni di patrimonio al rischio dei cantieri. Un contenzioso su vizi dell'opera, un infortunio grave o una solidarietà retributiva con un subappaltatore inadempiente aggredirebbero direttamente quel patrimonio." },
    { type: "p", text: "La riorganizzazione prevede una scissione parziale che trasferisce capannone e appartamenti a una società immobiliare di nuova costituzione, e un conferimento delle partecipazioni in una holding che controlla sia l'immobiliare sia l'operativa. L'immobiliare loca il capannone all'operativa a canone di mercato, supportato da perizia. Sulla parte di utile non prelevata — circa 180.000 euro l'anno — il transito verso la holding sconta l'1,2% invece del 26%: la differenza è nell'ordine dei 44.000 euro annui di risorse che restano disponibili per il reinvestimento." },
    { type: "note", text: "L'errore da non fare: costituire la holding e poi lasciarla inerte, senza sede reale, senza assemblee, con canoni di locazione fissati a occhio tra parti correlate. È il profilo che rende contestabile l'intera operazione, e paradossalmente è più pericoloso di non averla fatta. Lo scenario descritto è illustrativo: valori ed effetti dipendono dalla situazione concreta e vanno verificati prima di qualunque atto." },

    { type: "timeline", title: "Le fasi di una riorganizzazione con holding", steps: [
      { when: "Fase 1 — Analisi", label: "Fotografia patrimoniale e dei rischi", detail: "Cosa c'è nella società operativa, quali garanzie personali sono in essere, quali mutui gravano sugli immobili." },
      { when: "Fase 2 — Disegno", label: "Scelta tra conferimento e scissione", detail: "Dipende da cosa si separa (partecipazioni o beni) e dai vincoli bancari esistenti." },
      { when: "Fase 3 — Consenso", label: "Banche, garanti e soci", detail: "Il consenso della banca sui mutui ipotecari e la liberazione dei garanti vanno affrontati prima dell'atto." },
      { when: "Fase 4 — Atti", label: "Perizie, relazioni e atti notarili", detail: "Le ragioni economiche vanno scritte qui: è la documentazione che regge in caso di verifica." },
      { when: "Fase 5 — Sostanza", label: "Far vivere la struttura", detail: "Contratto di locazione a canone di mercato, assemblee, conti separati, decisioni reali della holding." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quanto costa mantenere una holding?", a: "Il costo ricorrente comprende bilancio e dichiarazioni autonome, adempimenti societari, eventuale organo di controllo se scattano i requisiti di legge, e i compensi degli amministratori. Va confrontato con il beneficio: se l'utile reinvestibile è modesto, il conto non torna. Sopra una certa dimensione il beneficio patrimoniale da solo giustifica la struttura." },
      { q: "La holding protegge dalle fideiussioni che ho già firmato?", a: "No. Le garanzie personali già rilasciate restano efficaci e il creditore agisce in forza di quelle, indipendentemente dalla struttura societaria. Ridurre progressivamente le fideiussioni personali è parte del piano, e va negoziato con le banche: è quasi sempre il passaggio più lento." },
      { q: "Posso costituire la holding quando ho già dei debiti?", a: "Tecnicamente sì, ma non ottiene lo scopo. Gli atti a titolo gratuito o comunque pregiudizievoli compiuti in prossimità dell'insolvenza sono aggredibili con l'azione revocatoria, e possono avere rilievo anche in sede penale se configurano sottrazione di garanzie. La protezione patrimoniale si costruisce quando l'azienda è in salute." },
      { q: "La holding deve avere dipendenti o una sede?", a: "Non esiste un obbligo formale generalizzato, ma la sostanza economica si dimostra con elementi concreti: una sede, assemblee che decidono davvero, un conto movimentato, contratti reali con le controllate. Una società che esiste solo in visura è il profilo più esposto alla contestazione di abuso." },
      { q: "Conviene una holding all'estero?", a: "Nella quasi totalità dei casi no, per un'impresa edile che opera in Italia con immobili e cantieri italiani. La disciplina sull'esterovestizione e sulle società controllate estere ha proprio l'obiettivo di ricondurre a tassazione italiana le strutture prive di sostanza all'estero. Il rapporto tra rischio e beneficio è sfavorevole." },
      { q: "Posso mettere anche la mia casa nella holding?", a: "Tecnicamente sì, ma raramente conviene. L'abitazione usata dai soci non è strumentale, i relativi costi non sono deducibili, l'uso genera un fringe benefit tassabile e la società rischia di ricadere nella disciplina delle società non operative. Per la prima casa esistono strumenti più adatti." },
      { q: "Quanto tempo serve per costituire il gruppo?", a: "Dipende dallo strumento. Un conferimento di partecipazioni può concludersi in poche settimane; una scissione ha tempi tecnici più lunghi per via dei termini di opposizione dei creditori. Il fattore che allunga di più i tempi non è però tecnico: è il negoziato con le banche sui mutui e sulle garanzie." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "La domanda giusta non è \"mi conviene una holding\" ma \"cosa ho oggi dentro la società che apre i cantieri, e cosa succederebbe se un cantiere andasse male\". Mandaci visura, ultimo bilancio ed elenco delle garanzie personali in essere: ti diciamo se la struttura ha senso nel tuo caso, quanto costa e in quanto tempo si ripaga — anche quando la risposta è che così com'è va già bene. Per approfondire, leggi le guide su scissione immobiliare, dividendi e PEX e protezione patrimoniale." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
