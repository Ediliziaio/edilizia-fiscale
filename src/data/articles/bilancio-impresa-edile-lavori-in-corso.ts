import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "bilancio-impresa-edile-lavori-in-corso",
  title: "Lavori in corso su ordinazione: la voce che decide l'utile di un'impresa edile",
  excerpt:
    "OIC 23, percentuale di completamento e commessa completata, artt. 92 e 93 del TUIR: come si valutano le commesse aperte a fine anno e perché una stima sbagliata dei costi a finire produce utili che non esistono.",
  category: "Controllo",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust-dark to-trust",
  keywords: [
    "lavori in corso su ordinazione",
    "oic 23 commesse",
    "percentuale di completamento cost to cost",
    "valutazione commesse pluriennali",
    "art 93 tuir opere ultrannuali",
    "bilancio impresa edile",
  ],
  intro:
    "Nelle imprese che lavorano per commessa la voce lavori in corso su ordinazione è quella che determina l'utile più di ogni altra. Si valuta con il criterio della percentuale di completamento o con quello della commessa completata, secondo l'OIC 23, e fiscalmente segue gli artt. 92 e 93 del TUIR. Il punto debole non è il criterio: è la stima dei costi a finire.",
};

export const seo = {
  seoTitle: "Lavori in Corso su Ordinazione: Come si Valutano",
  metaDescription:
    "OIC 23, percentuale di completamento e artt. 92-93 TUIR: come si valutano le commesse aperte e perché i costi a finire decidono l'utile.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il criterio civilistico: OIC 23, con la percentuale di completamento ammessa quando esiste un contratto vincolante con corrispettivo determinabile e i costi a finire sono stimabili in modo attendibile; altrimenti commessa completata. Il criterio fiscale: opere infrannuali valutate in base ai costi (art. 92, c. 6, TUIR), opere ultrannuali in base ai corrispettivi pattuiti maturati (art. 93). Il metodo di misura: cost-to-cost, costi sostenuti su costi totali stimati. Il punto debole: il denominatore." },

    { type: "h2", text: "Perché questa voce conta più delle altre", id: "perche-conta" },
    { type: "p", text: "In un'impresa commerciale il risultato d'esercizio è la differenza tra ricavi realizzati e costi sostenuti: sono grandezze verificabili. In un'impresa che lavora per commessa, invece, una parte rilevante dei ricavi non è ancora stata fatturata e una parte dei costi si riferisce a opere non ancora consegnate. La voce lavori in corso su ordinazione è ciò che tiene insieme il quadro — e insieme il punto in cui l'utile può essere costruito o distrutto." },
    { type: "p", text: "L'ordine di grandezza rende l'idea. In un'impresa edile con dieci commesse aperte, il valore dei lavori in corso a fine esercizio può superare il patrimonio netto. Una variazione del 10% nella valutazione di quella voce può trasformare un utile in una perdita, senza che sia cambiato nulla nella realtà del cantiere." },
    { type: "p", text: "È per questo che la valutazione delle commesse non è un adempimento contabile di fine anno: è il risultato di un processo di controllo che deve funzionare tutto l'anno. Se i costi a finire non sono aggiornati mensilmente, a dicembre non c'è modo di produrre una valutazione attendibile." },

    { type: "h2", text: "I due criteri civilistici", id: "criteri" },
    { type: "p", text: "L'OIC 23 individua due criteri alternativi. Il criterio della percentuale di completamento riconosce ricavi e margine man mano che la commessa avanza, ed è quello che rappresenta meglio la realtà economica di un'attività pluriennale. Il criterio della commessa completata rinvia il riconoscimento del margine alla consegna dell'opera." },
    { type: "p", text: "La percentuale di completamento non è però liberamente adottabile: richiede l'esistenza di un contratto vincolante, un corrispettivo determinabile con ragionevole certezza, e la possibilità di stimare in modo attendibile i costi a finire e lo stato di avanzamento. In assenza anche di uno solo di questi presupposti si applica la commessa completata." },
    { type: "table", headers: ["Aspetto", "Percentuale di completamento", "Commessa completata"], rows: [
      ["Riconoscimento del margine", "Progressivo, con l'avanzamento", "Interamente alla consegna"],
      ["Presupposti", "Contratto vincolante, corrispettivo determinabile, costi a finire stimabili", "Nessun presupposto particolare"],
      ["Rappresentazione economica", "Aderente all'andamento reale della commessa", "Volatile: esercizi a zero margine seguiti da esercizi con tutto il margine"],
      ["Rischio principale", "Stima ottimistica dei costi a finire", "Risultati d'esercizio non comparabili"],
      ["Effetto sul bilancio", "Utile distribuito nel tempo", "Utile concentrato negli esercizi di consegna"],
    ] },
    { type: "p", text: "Nella pratica, un'impresa che lavora su commesse pluriennali e adotta la commessa completata produce bilanci difficili da leggere e da far leggere alle banche: due esercizi in sostanziale pareggio seguiti da uno con un utile molto elevato non descrivono un andamento, descrivono un calendario di consegne." },

    { type: "h2", text: "Come si misura l'avanzamento: il metodo cost-to-cost", id: "cost-to-cost" },
    { type: "p", text: "Il metodo più diffuso rapporta i costi sostenuti fino alla data di bilancio ai costi totali stimati della commessa. La percentuale così ottenuta viene applicata ai ricavi contrattuali per determinare il ricavo di competenza." },
    { type: "p", text: "La formula è elementare, e proprio per questo il rischio si concentra tutto in un punto: i costi totali stimati al denominatore. Se sono sottostimati, la percentuale di avanzamento risulta più alta di quella reale, il ricavo di competenza è gonfiato e il bilancio espone un margine che non esiste. Non è una manipolazione: è il risultato meccanico di un dato non aggiornato." },
    { type: "p", text: "La causa più frequente di sottostima è la mancata contabilizzazione delle varianti. Le lavorazioni eseguite su richiesta verbale del direttore dei lavori entrano nei costi ma non nei ricavi contrattuali, e quasi mai vengono inserite nella stima dei costi a finire finché non sono già state sostenute. Il risultato è un doppio errore, che agisce su numeratore e denominatore in direzioni opposte." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Principi contabili nazionali", ref: "OIC 23", principle: "I lavori in corso su ordinazione sono valutati con il criterio della percentuale di completamento quando ricorrono le condizioni previste; in mancanza si applica il criterio della commessa completata.", impact: "Il criterio non si sceglie per convenienza: dipende dalla sussistenza dei presupposti, e va applicato con continuità." },
      { court: "Testo unico imposte sui redditi", ref: "Art. 92, comma 6", principle: "Le rimanenze di opere, forniture e servizi di durata inferiore ai dodici mesi sono valutate in base alle spese sostenute nell'esercizio.", impact: "Sulle commesse brevi il criterio fiscale è il costo: il margine emerge alla chiusura dell'opera." },
      { court: "Testo unico imposte sui redditi", ref: "Art. 93", principle: "Le opere di durata ultrannuale sono valutate sulla base dei corrispettivi pattuiti, con imputazione a ciascun esercizio della quota maturata in relazione all'avanzamento.", impact: "Sulle commesse lunghe il fisco segue l'avanzamento: il ricavo matura anche se la fattura non è stata emessa." },
    ] },

    { type: "h2", text: "Le rettifiche che quasi nessuno fa", id: "rettifiche" },
    { type: "ol", items: [
      "Aggiornare i costi a finire con il responsabile di cantiere, voce per voce, e non applicare una percentuale di completamento stimata a occhio sull'avanzamento fisico",
      "Rilevare le perdite attese per intero nell'esercizio in cui emergono: se la commessa chiuderà in perdita, la perdita va iscritta subito e non spalmata sull'avanzamento residuo",
      "Distinguere il SAL contabile, che misura l'avanzamento economico, dal SAL contrattuale, che è ciò che si può fatturare secondo contratto: coincidono raramente",
      "Inventariare i materiali approvvigionati e non ancora posati, che sono rimanenze di magazzino e non costi di commessa già sostenuti",
      "Verificare la coerenza tra la valutazione civilistica e quella fiscale, gestendo le eventuali differenze temporanee",
    ] },
    { type: "p", text: "Il secondo punto merita attenzione. Il principio di prudenza impone di rilevare integralmente la perdita attesa nel momento in cui diventa prevedibile, indipendentemente dall'avanzamento. È il caso della commessa che, dopo una variante non riconosciuta o un errore di preventivazione, chiuderà sotto costo: iscrivere solo la quota proporzionale all'avanzamento è un errore che rinvia il problema all'esercizio successivo." },

    { type: "figure", slot: "bilancio-impresa-edile-lavori-in-corso-1", alt: "Prospetto di avanzamento commessa con costi sostenuti e costi a finire", caption: "Il denominatore della formula è il punto debole: i costi a finire vanno aggiornati, non stimati a inizio commessa." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Commessa da 1.200.000 euro, costi totali preventivati 1.020.000 euro, margine atteso 180.000 euro, pari al 15%. A fine esercizio i costi sostenuti ammontano a 612.000 euro. Applicando il cost-to-cost, l'avanzamento risulta del 60% e il ricavo di competenza di 720.000 euro, con un margine maturato di 108.000 euro." },
    { type: "p", text: "In corso d'opera, però, sono state eseguite varianti richieste a voce dalla direzione lavori per circa 90.000 euro di costi, non ancora riconosciute contrattualmente, e i costi a finire risultano superiori di 70.000 euro rispetto al preventivo iniziale. I costi totali stimati corretti sono quindi 1.180.000 euro." },
    { type: "p", text: "Ricalcolando: l'avanzamento reale è del 51,9%, il ricavo di competenza è di 622.800 euro e il margine maturato è di 10.800 euro. La differenza rispetto alla prima valutazione è di oltre 97.000 euro su una sola commessa. Se l'impresa ne ha otto aperte e l'errore si ripete, il bilancio d'esercizio racconta una realtà che il cantiere non ha prodotto." },
    { type: "note", text: "L'errore da non fare: usare il preventivo iniziale come stima dei costi totali per tutta la durata della commessa. Il preventivo è l'ipotesi di partenza; la stima dei costi a finire è un dato di gestione che va rifatto a ogni chiusura. Lo scenario è illustrativo: i valori dipendono dalla singola commessa." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Posso scegliere liberamente tra i due criteri?", a: "No. La percentuale di completamento richiede un contratto vincolante, un corrispettivo determinabile e la stimabilità attendibile dei costi a finire e dell'avanzamento. In assenza di questi presupposti si applica la commessa completata. Il criterio adottato va poi mantenuto con continuità." },
      { q: "Che differenza c'è tra criterio civilistico e fiscale?", a: "Ai fini fiscali le opere di durata inferiore a dodici mesi si valutano in base ai costi sostenuti (art. 92, c. 6, TUIR), quelle ultrannuali in base ai corrispettivi pattuiti maturati con l'avanzamento (art. 93). Le eventuali differenze rispetto alla valutazione civilistica generano variazioni da gestire in dichiarazione." },
      { q: "Come si stimano i costi a finire?", a: "Voce per voce, insieme al responsabile di cantiere, considerando lavorazioni residue, varianti già eseguite e non ancora contabilizzate, aumenti dei prezzi dei materiali e ore di manodopera ancora necessarie. È un'attività di controllo di gestione, non un calcolo contabile." },
      { q: "Cosa faccio se la commessa chiuderà in perdita?", a: "La perdita attesa va rilevata integralmente nell'esercizio in cui diventa prevedibile, per il principio di prudenza, e non ripartita sull'avanzamento residuo. Rinviarla significa spostare il problema all'esercizio successivo e produrre un bilancio non veritiero." },
      { q: "Il SAL fatturato coincide con l'avanzamento contabile?", a: "Quasi mai. Il SAL contrattuale è ciò che si può fatturare secondo contratto; l'avanzamento contabile misura la quota di opera realizzata. La differenza va esposta tra i lavori in corso se l'avanzamento supera il fatturato, o tra gli acconti se accade il contrario." },
      { q: "Perché la banca guarda questa voce?", a: "Perché è la voce su cui il risultato d'esercizio è più sensibile e più discrezionale. Un'impresa che documenta la valutazione con prospetti di avanzamento per commessa e stime dei costi a finire aggiornate presenta un bilancio molto più credibile di chi espone un valore complessivo non scomposto." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se la voce lavori in corso del tuo ultimo bilancio non è supportata da un prospetto per singola commessa con costi sostenuti e costi a finire aggiornati, il risultato d'esercizio è meno solido di quanto sembri. Mandaci l'ultimo bilancio e l'elenco delle commesse aperte: ricostruiamo la valutazione commessa per commessa e ti mostriamo la differenza. Per il metodo, leggi la guida sul controllo di gestione e quella sul [margine di commessa](/guide/margine-di-commessa-edilizia)." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026." },
  ],
};
