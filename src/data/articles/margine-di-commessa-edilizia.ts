import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "margine-di-commessa-edilizia",
  title: "Margine di commessa: come si calcola davvero in un'impresa edile",
  excerpt:
    "Ricavi maturati, costi diretti al valore reale, ribaltamento dei costi indiretti e degli oneri di struttura. Le cinque voci che vengono dimenticate e che trasformano un cantiere in utile in un cantiere in pareggio.",
  category: "Controllo",
  date: "Agosto 2026",
  readTime: "11 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust-dark to-trust",
  keywords: [
    "margine di commessa",
    "marginalità cantiere edile",
    "calcolo margine commessa edilizia",
    "costi indiretti di cantiere",
    "scostamento preventivo consuntivo",
    "margine industriale cantiere",
  ],
  intro:
    "Il margine di commessa è la differenza tra i ricavi maturati per avanzamento e i costi realmente attribuibili al cantiere, diretti e indiretti. Si legge in due livelli: margine industriale, prima degli oneri di struttura, e margine netto dopo il loro ribaltamento. Il primo è quello su cui si decide in cantiere; il secondo è quello che dice se l'impresa sta in piedi.",
};

export const seo = {
  seoTitle: "Margine di Commessa: Come si Calcola in Edilizia",
  metaDescription:
    "Ricavi per avanzamento, costi diretti al valore reale, ribaltamento degli indiretti: le voci dimenticate che azzerano il margine di un cantiere.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — La formula: ricavi maturati per avanzamento meno costi diretti meno quota di costi indiretti attribuita. I due livelli: margine industriale (prima degli oneri di struttura) e margine netto (dopo il ribaltamento). Le cinque voci dimenticate: costo orario pieno anziché paga base, costo orario dei mezzi propri, varianti eseguite e non contabilizzate, oneri di sicurezza e allestimento cantiere, costo finanziario dell'immobilizzo. Il dato che conta: lo scostamento rispetto al preventivo, non il valore assoluto." },

    { type: "h2", text: "Cosa si misura, e a che livello", id: "cosa-si-misura" },
    { type: "p", text: "Il margine di commessa va letto su due livelli, perché rispondono a domande diverse. Il margine industriale è la differenza tra ricavi maturati e costi direttamente attribuibili al cantiere: manodopera, materiali, subappalti, noli, mezzi, oneri di sicurezza specifici. È il margine che il capocantiere e il responsabile tecnico possono influenzare con le loro decisioni." },
    { type: "p", text: "Il margine netto si ottiene sottraendo la quota di costi generali di struttura ribaltata sulla commessa: amministrazione, direzione, ufficio tecnico, immobili, assicurazioni generali. È il margine che dice se, a quel prezzo e con quel mix di lavori, l'impresa copre la propria struttura e produce utile." },
    { type: "p", text: "Confondere i due livelli produce decisioni sbagliate in entrambe le direzioni. Valutare la performance di un cantiere sul margine netto significa attribuire al capocantiere responsabilità su costi che non controlla; valutare la convenienza commerciale sul solo margine industriale significa accettare commesse che non coprono la struttura." },

    { type: "h2", text: "I ricavi: maturati, non fatturati", id: "ricavi" },
    { type: "p", text: "Il primo errore si commette già sul numeratore. I ricavi da considerare non sono quelli fatturati ma quelli maturati per avanzamento, calcolati applicando la [percentuale di completamento](/guide/bilancio-impresa-edile-lavori-in-corso) ai corrispettivi contrattuali. Confrontare il fatturato con i costi sostenuti produce un margine che oscilla con il calendario di fatturazione e non dice nulla sull'andamento reale." },
    { type: "p", text: "Vanno inoltre inclusi i ricavi per varianti, ma solo quando sono contrattualmente riconosciute. Le varianti eseguite su richiesta verbale e non ancora formalizzate sono la voce più insidiosa: i costi sono già stati sostenuti, i ricavi non esistono ancora e potrebbero non esistere mai. Nel calcolo del margine vanno tenute separate, e il loro importo va monitorato come indicatore di rischio." },

    { type: "h2", text: "I costi diretti: le voci che si dimenticano", id: "costi-diretti" },
    { type: "table", headers: ["Voce", "Come va valorizzata", "Errore tipico"], rows: [
      ["Manodopera propria", "Ore rilevate x costo orario pieno per qualifica", "Usare la paga oraria di contratto"],
      ["Mezzi e attrezzature proprie", "Ore di impiego x costo orario del mezzo", "Lasciare il costo nelle spese generali"],
      ["Materiali", "Consumo effettivo, non acquisto", "Spesare il materiale approvvigionato e non posato"],
      ["Subappalti", "Importo maturato per avanzamento", "Contabilizzare per fattura ricevuta"],
      ["Noli", "Canone per periodo di effettivo impiego", "Attribuire il nolo al mese di fatturazione"],
      ["Oneri di sicurezza e allestimento", "Costo effettivo, attribuito alla commessa", "Trattarli come costo generale"],
      ["Trasporti e smaltimenti", "Costo effettivo per cantiere", "Aggregare su più cantieri"],
      ["Costo finanziario dell'immobilizzo", "Esposizione media x tasso di affidamento", "Ignorarlo del tutto"],
    ] },
    { type: "p", text: "Le ultime due righe sono quelle che quasi nessuna impresa considera. Il costo finanziario dell'immobilizzo, in particolare, è reale: una commessa che espone mediamente l'impresa per 200.000 euro per dodici mesi costa, al tasso di affidamento applicato, diverse migliaia di euro. Su commesse pubbliche con tempi di incasso lunghi può assorbire uno o due punti di margine." },

    { type: "figure", slot: "margine-di-commessa-edilizia-1", alt: "Prospetto di margine di commessa con voci di costo dettagliate", caption: "Ogni voce non attribuita alla commessa finisce nelle spese generali: il cantiere sembra migliore di quanto sia." },

    { type: "h2", text: "Il ribaltamento dei costi indiretti", id: "indiretti" },
    { type: "p", text: "I costi di struttura vanno ribaltati sulle commesse con un driver dichiarato, stabile nel tempo e coerente con la natura del costo. I driver più usati in edilizia sono tre: le ore di manodopera diretta, il valore della commessa, i giorni di cantiere. Nessuno è perfetto; l'importante è sceglierne uno, motivarlo e non cambiarlo ogni anno." },
    { type: "p", text: "Il driver delle ore di manodopera funziona bene nelle imprese ad alta intensità di manodopera e penalizza correttamente le commesse che assorbono squadre. Il driver del valore funziona meglio dove le commesse hanno composizione simile. Il driver dei giorni di cantiere è utile quando la struttura è impegnata proporzionalmente alla durata, per esempio nelle imprese con molti cantieri di piccola dimensione." },
    { type: "p", text: "Un avvertimento pratico: il ribaltamento serve a capire se il prezzo copre la struttura, non a giudicare i cantieri. Una commessa con margine industriale buono e margine netto negativo non è un cantiere gestito male: è un cantiere venduto a un prezzo che, con quella struttura, non è sostenibile." },

    { type: "caselaw", title: "Riferimenti utili", items: [
      { court: "Codice civile", ref: "Art. 2086, comma 2", principle: "L'imprenditore deve istituire un assetto organizzativo, amministrativo e contabile adeguato alla natura e alle dimensioni dell'impresa.", impact: "In un'impresa per commessa, un assetto senza margine di cantiere difficilmente può dirsi adeguato." },
      { court: "Principi contabili nazionali", ref: "OIC 23", principle: "La percentuale di completamento si determina con metodi che misurano l'avanzamento dell'opera, tra cui il rapporto tra costi sostenuti e costi totali stimati.", impact: "Il margine di commessa e la valutazione di bilancio poggiano sugli stessi dati: se il primo è sbagliato, lo è anche la seconda." },
      { court: "Riferimento operativo", ref: "Tabelle ministeriali del costo medio orario in edilizia", principle: "Il costo medio orario del lavoro per i dipendenti delle imprese edili è rilevato periodicamente con decreto su base provinciale e per qualifica.", impact: "È il parametro con cui verificare che il costo orario usato nel margine sia realistico." },
    ] },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Commessa da 420.000 euro, avanzamento 70%, ricavi maturati 294.000 euro. Il consuntivo aziendale espone costi diretti per 244.000 euro, con un margine industriale apparente di 50.000 euro, pari al 17%." },
    { type: "p", text: "La revisione delle voci cambia il quadro. La manodopera, 3.100 ore, era valorizzata alla paga base di 21 euro anziché al [costo orario pieno](/guide/costo-del-lavoro-impresa-edile) di 29,60: mancano 26.660 euro. Il costo dei mezzi propri, 480 ore di escavatore e autocarro, non era attribuito: mancano 14.400 euro. Gli oneri di allestimento e sicurezza specifici del cantiere, 6.200 euro, erano nelle spese generali." },
    { type: "p", text: "Il margine industriale corretto scende quindi a 2.740 euro, meno dell'1%. Aggiungendo il ribaltamento dei costi di struttura, la commessa chiude in perdita. La differenza rispetto alla lettura iniziale non è dovuta a un peggioramento del cantiere: quel cantiere ha sempre avuto questi numeri, semplicemente nessuno li aveva attribuiti." },
    { type: "note", text: "L'errore da non fare: leggere il margine solo a fine commessa. Con l'avanzamento al 70% e il quadro corretto sotto gli occhi, restava ancora un 30% di lavorazioni su cui intervenire — rinegoziando le varianti, rivedendo l'organizzazione delle squadre, chiedendo la revisione prezzi dove contrattualmente prevista. A consuntivo non resta niente da fare. Lo scenario è illustrativo." },

    { type: "figure", slot: "margine-di-commessa-edilizia-2", alt: "Grafico a barre con margine per commessa e scostamenti rispetto al preventivo", caption: "Il dato che serve è lo scostamento rispetto al preventivo, non il margine assoluto." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Ogni quanto va calcolato il margine di commessa?", a: "Mensilmente. Con cadenza trimestrale si scopre il problema quando il cantiere è oltre metà avanzamento e i margini di intervento sono ridotti. Il valore dell'informazione dipende più dalla tempestività che dalla precisione decimale." },
      { q: "Che differenza c'è tra margine industriale e margine netto?", a: "Il margine industriale è al netto dei soli costi diretti di cantiere ed è quello su cui il responsabile tecnico può incidere. Il margine netto sottrae anche la quota di costi di struttura ribaltata, e dice se il prezzo di vendita copre l'intera organizzazione dell'impresa." },
      { q: "Come si ribaltano i costi generali sulle commesse?", a: "Con un driver dichiarato e stabile: ore di manodopera diretta, valore della commessa o giorni di cantiere. Nessuno è perfetto; l'importante è sceglierne uno coerente con la natura dei costi e mantenerlo, per rendere i confronti tra periodi significativi." },
      { q: "Le varianti non ancora approvate entrano nel margine?", a: "I costi già sostenuti sì, i ricavi no finché non sono contrattualmente riconosciuti. È corretto esporli separatamente come rischio aperto: l'importo delle varianti eseguite e non formalizzate è uno degli indicatori più utili sullo stato di salute di una commessa." },
      { q: "Il costo finanziario va davvero attribuito alla commessa?", a: "Sì, ed è una delle voci più trascurate. Una commessa che espone l'impresa per centinaia di migliaia di euro per mesi ha un costo del denaro reale, che su lavori pubblici con incassi lenti può assorbire uno o due punti di margine. Va messo a preventivo, non scoperto a consuntivo." },
      { q: "Serve un software per calcolarlo?", a: "Non nelle imprese con poche commesse contemporanee: un foglio di calcolo strutturato è sufficiente, purché i costi siano attribuiti alla commessa già in fase di registrazione. Il software diventa necessario quando il volume dei documenti rende ingestibile la rilevazione manuale." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Scegli due commesse chiuse di recente, una che ti è sembrata buona e una che ti è sembrata problematica, e mandaci contratto, consuntivo dei costi e rapportini ore. Ricostruiamo il margine con tutte le voci attribuite e ti mostriamo la distanza rispetto a quello che il tuo gestionale ti sta dicendo. Per il metodo completo leggi la guida sul [controllo di gestione](/guide/controllo-di-gestione-impresa-edile), e per il numero base quella sul costo del lavoro edile." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026." },
  ],
};
