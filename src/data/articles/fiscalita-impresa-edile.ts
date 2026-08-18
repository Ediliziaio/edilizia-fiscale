import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "fiscalita-impresa-edile",
  title: "Fiscalità dell'impresa edile: la guida completa",
  excerpt:
    "IVA e reverse charge, aliquote agevolate, competenza dei ricavi di commessa, costi di cantiere deducibili, adempimenti negli appalti. Le regole che decidono quanto resta davvero all'impresa, con i riferimenti normativi e gli errori più costosi.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "16 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "fiscalità impresa edile",
    "tassazione impresa edile",
    "iva lavori edili quale aliquota",
    "commercialista imprese edili",
    "competenza ricavi commessa edile",
    "costi deducibili impresa costruzioni",
  ],
  intro:
    "La fiscalità dell'impresa edile ruota attorno a quattro nodi: quale IVA si applica a ciascuna lavorazione, quando il ricavo di commessa diventa di competenza, quali costi di cantiere sono deducibili e con quali tempi, e quali adempimenti scattano negli appalti. Sbagliare uno di questi passaggi non produce una multa isolata: produce un errore sistematico che si ripete su ogni cantiere.",
};

export const seo = {
  seoTitle: "Fiscalità dell'Impresa Edile: la Guida Completa",
  metaDescription:
    "IVA e reverse charge, competenza dei ricavi di commessa, costi di cantiere e adempimenti negli appalti: le regole fiscali dell'impresa edile.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — L'IVA: in edilizia l'aliquota dipende dalla lavorazione e dall'immobile, non dall'attività dell'impresa; il reverse charge sposta il debito d'imposta sul committente in due fattispecie distinte (art. 17, c. 6, lett. a e a-ter, D.P.R. 633/1972). I ricavi: seguono l'avanzamento della commessa (artt. 92 e 93 TUIR), non la data della fattura. I costi: manodopera al costo pieno, mezzi ammortizzati e ribaltati sulle commesse, subappalti documentati. Gli adempimenti: ritenute negli appalti ad alta manodopera, congruità del costo del lavoro, tracciabilità dei pagamenti." },

    { type: "h2", text: "Perché la fiscalità edile è diversa da tutte le altre", id: "perche-diversa" },
    { type: "p", text: "In quasi tutti i settori il fisco segue lo scambio: si vende un bene, si emette una fattura, si versa l'imposta. In edilizia no. Il prodotto non esiste in magazzino, si costruisce per mesi o per anni su un terreno di qualcun altro, viene pagato a stati di avanzamento negoziati, e nel frattempo cambia — con varianti, sospensioni e riserve. Il fisco ha dovuto costruire regole apposta, e sono queste regole a rendere la materia specialistica." },
    { type: "p", text: "Le conseguenze pratiche sono tre. Primo: l'IVA non segue l'impresa ma la singola lavorazione, tanto che una stessa fattura può contenere aliquote diverse e righe in reverse charge. Secondo: il ricavo non nasce con la fattura ma con l'avanzamento, e quindi il fatturato di un anno può divergere in modo sostanziale dal risultato di quell'anno. Terzo: il costo del lavoro è soggetto a un controllo di congruità che nessun altro settore conosce." },
    { type: "p", text: "Chi applica all'edilizia gli schemi della fiscalità d'impresa generalista non commette un errore di dettaglio: costruisce un bilancio che racconta una storia diversa da quella del cantiere. E quando la differenza emerge — di solito in occasione di una verifica o di una richiesta bancaria — è già maturata su più esercizi." },

    { type: "figure", slot: "fiscalita-impresa-edile-1", alt: "Scrivania di cantiere con computo metrico, fatture e calcolatrice", caption: "Il computo metrico è il documento da cui parte anche la corretta qualificazione fiscale delle lavorazioni." },

    { type: "h2", text: "Nodo 1: quale IVA si applica a quale lavorazione?", id: "iva" },
    { type: "p", text: "La regola da interiorizzare è che l'aliquota dipende da due variabili incrociate: il tipo di intervento nella sua qualificazione urbanistica e la natura dell'immobile su cui si lavora. Non dipende dall'attività prevalente dell'impresa né dal codice ATECO con cui è iscritta in camera di commercio." },
    { type: "table", headers: ["Situazione", "Aliquota", "Riferimento e avvertenza"], rows: [
      ["Manutenzione ordinaria e straordinaria su fabbricati a prevalente destinazione abitativa privata", "10%", "Art. 7, c. 1, lett. b), L. 488/1999. Soggetta alla regola dei beni significativi."],
      ["Restauro, risanamento conservativo, ristrutturazione edilizia", "10%", "Tabella A, parte III, n. 127-quaterdecies. Non limitata agli immobili abitativi; nessun limite sui beni significativi."],
      ["Costruzione di nuovo fabbricato non di lusso con requisiti prima casa", "4%", "Tabella A, parte II. Richiede la dichiarazione del committente sui requisiti."],
      ["Lavori su immobili strumentali, capannoni, uffici", "22%", "Salvo che l'intervento rientri tra restauro, risanamento o ristrutturazione."],
      ["Subappalto tra imprese del settore costruzioni", "Reverse charge", "Art. 17, c. 6, lett. a). Fattura senza addebito d'imposta."],
      ["Pulizia, demolizione, installazione impianti, completamento su edifici tra soggetti IVA", "Reverse charge", "Art. 17, c. 6, lett. a-ter). Prescinde dal subappalto."],
    ] },
    { type: "p", text: "La regola dei beni significativi è quella che genera più contestazioni. Su un elenco tassativo di beni — infissi, caldaie, ascensori, condizionatori, sanitari, rubinetteria, videocitofoni — l'aliquota ridotta si applica al valore del bene solo fino a concorrenza del valore della prestazione di posa. Sull'eccedenza si applica il 22%. E la fattura deve rendere visibile il calcolo: corrispettivo complessivo, valore dei beni significativi, quota assoggettata ad aliquota ordinaria." },
    { type: "p", text: "L'errore tipico non è calcolare male: è non calcolare affatto, applicando il 10% all'intero importo perché \"è una ristrutturazione\". Su una fornitura e posa di serramenti da 40.000 euro con 9.000 euro di manodopera, la differenza recuperabile in verifica è nell'ordine delle migliaia di euro per singolo cantiere." },

    { type: "h2", text: "Nodo 2: quando il ricavo di commessa diventa di competenza?", id: "competenza" },
    { type: "p", text: "Ai fini IVA il momento impositivo è il pagamento del corrispettivo, o la data della fattura se emessa prima (art. 6, c. 3, D.P.R. 633/1972). Ai fini delle imposte sui redditi, invece, il ricavo segue l'avanzamento dell'opera. Sono due binari diversi, e tenerli allineati per intuito è impossibile." },
    { type: "p", text: "Le opere di durata inferiore ai dodici mesi si valutano in base ai costi sostenuti, ai sensi dell'art. 92, comma 6, del TUIR. Le opere ultrannuali si valutano in base ai corrispettivi pattuiti maturati con l'avanzamento, secondo l'art. 93. Sul piano civilistico il riferimento è l'OIC 23, che consente il criterio della percentuale di completamento quando esiste un contratto con corrispettivo determinabile e i costi a finire sono stimabili in modo attendibile." },
    { type: "p", text: "La conseguenza operativa è che a fine anno esiste quasi sempre una differenza tra fatturato emesso e ricavo di competenza, e quella differenza va rilevata: come lavori in corso su ordinazione se l'avanzamento supera il fatturato, come acconto tra i debiti nel caso opposto. Non rilevarla è l'errore che più frequentemente produce bilanci in utile seguiti da esercizi in perdita improvvisa." },

    { type: "caselaw", title: "Le fonti da tenere davanti", items: [
      { court: "Agenzia delle Entrate", ref: "Circolare n. 14/E del 27 marzo 2015", principle: "Il perimetro del reverse charge nelle prestazioni su edifici si individua con criterio oggettivo, in base al codice attività della singola prestazione resa, e non in base all'attività prevalente dell'impresa che la esegue.", impact: "Una stessa fattura può contenere righe in reverse charge e righe con IVA ordinaria: vanno separate già nel computo metrico." },
      { court: "Testo unico imposte sui redditi", ref: "Artt. 92, c. 6 e 93 TUIR", principle: "Le opere di durata infrannuale si valutano in base alle spese sostenute; quelle di durata ultrannuale in base ai corrispettivi pattuiti maturati con l'avanzamento dell'esecuzione.", impact: "Il ricavo fiscale non coincide con il fatturato: la differenza va esposta tra i lavori in corso su ordinazione." },
      { court: "Principi contabili nazionali", ref: "OIC 23", principle: "Il criterio della percentuale di completamento è ammesso quando esiste un contratto vincolante con corrispettivo determinabile e i costi a finire sono stimabili in modo attendibile; altrimenti si applica la commessa completata.", impact: "Se i costi a finire non sono aggiornati, l'avanzamento risulta più alto del reale e il bilancio espone un margine che non esiste." },
    ] },

    { type: "h2", text: "Nodo 3: quali costi di cantiere sono deducibili, e quando", id: "costi" },
    { type: "p", text: "Il principio generale è quello di inerenza: sono deducibili i costi riferibili ad attività da cui derivano ricavi. In edilizia la difficoltà non sta nel principio ma nella tracciabilità: il cantiere è un luogo dove entrano materiali, mezzi, persone e subappaltatori, e dove la documentazione si produce sul campo, spesso male." },
    { type: "ul", items: [
      "Manodopera: deducibile per intero, ma va contabilizzata al costo orario pieno e attribuita alla commessa, altrimenti il margine di cantiere è falso anche se il bilancio è corretto",
      "Subappalti: deducibili a fronte di contratto scritto, fattura e prova del pagamento tracciato; senza contratto la contestazione tipica è quella dell'operazione inesistente o dell'interposizione di manodopera",
      "Materiali: deducibili per competenza, con attenzione alle rimanenze di cantiere a fine esercizio, che vanno inventariate e non lasciate a costo",
      "Mezzi e attrezzature: ammortizzabili secondo i coefficienti previsti, con il costo orario da ribaltare sulle commesse per non falsare il margine",
      "Noli a caldo e a freddo: deducibili, ma il nolo a caldo con personale del noleggiante va distinto dal subappalto, perché cambia il regime IVA applicabile",
      "Trasferte e indennità: deducibili nei limiti previsti, con documentazione che colleghi la trasferta al cantiere",
    ] },
    { type: "p", text: "Un capitolo a parte meritano le rimanenze di magazzino di cantiere. Il materiale approvvigionato e non ancora posato a fine anno non è un costo dell'esercizio: è una rimanenza. Nelle imprese edili piccole e medie questo inventario spesso non viene fatto, e il risultato è un costo anticipato che gonfia la perdita di un anno e l'utile di quello dopo." },

    { type: "h2", text: "Nodo 4: gli adempimenti che valgono solo in edilizia", id: "adempimenti" },
    { type: "p", text: "Ci sono obblighi che un'impresa manifatturiera non incontra mai e che in edilizia sono ordinaria amministrazione. Il primo è la disciplina delle ritenute negli appalti ad alta intensità di manodopera, prevista dall'art. 17-bis del D.lgs. 241/1997: quando ricorrono tutti i requisiti — soglia annua superiore a 200.000 euro, prevalenza della manodopera, esecuzione presso le sedi del committente, uso di beni strumentali riconducibili al committente — l'appaltatore non può compensare le ritenute e deve trasmettere le deleghe di versamento." },
    { type: "p", text: "Il secondo è la verifica della congruità dell'incidenza della manodopera, introdotta dal D.M. 143/2021: il costo del lavoro denunciato in Cassa Edile viene confrontato con percentuali minime riferite al valore dell'opera, e lo scostamento non giustificato incide sul DURC. Per la nuova edilizia civile il riferimento consolidato è il 14,28%." },
    { type: "p", text: "Il terzo, per chi lavora con la pubblica amministrazione, è lo split payment: l'IVA viene versata direttamente dall'ente committente, e l'impresa incassa il solo imponibile. Sul piano fiscale è neutro; sul piano finanziario no, perché genera strutturalmente crediti IVA da gestire con richieste di rimborso o compensazione." },

    { type: "figure", slot: "fiscalita-impresa-edile-2", alt: "Registro delle fatture di cantiere con evidenziate le righe in reverse charge", caption: "Separare le lavorazioni per regime IVA già in fase di computo evita quasi tutte le contestazioni." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Impresa edile con ricavi per 3,8 milioni, nove cantieri aperti. Su un intervento di ristrutturazione da 260.000 euro su un edificio residenziale, l'impresa affida a un impiantista il rifacimento dell'impianto termico per 48.000 euro e fornisce e posa serramenti per 52.000 euro, di cui 38.000 di valore dei beni e 14.000 di manodopera." },
    { type: "p", text: "Sull'impianto affidato all'impiantista si applica il reverse charge: la prestazione rientra nell'installazione di impianti su edifici della lettera a-ter), e opera anche senza rapporto di subappalto perché entrambe le parti sono soggetti IVA. Sui serramenti verso il committente finale, invece, l'aliquota del 10% si applica sul valore della prestazione di posa e sul valore dei beni significativi solo fino a concorrenza di quest'ultima: 14.000 euro di beni al 10%, i restanti 24.000 al 22%." },
    { type: "p", text: "La differenza rispetto all'applicazione indiscriminata del 10% è di circa 2.900 euro di IVA su un solo cantiere. Moltiplicata per i cantieri di un esercizio e per gli anni ancora accertabili, è l'ordine di grandezza tipico di una contestazione IVA in edilizia — al quale si aggiungono sanzioni e interessi." },
    { type: "note", text: "L'errore da non fare: decidere il regime IVA in fase di fatturazione, quando il lavoro è finito. La qualificazione va fatta prima, nel computo metrico e nel contratto, separando le lavorazioni per regime applicabile. A quel punto la fattura è solo la conseguenza. Lo scenario descritto è un caso illustrativo: gli importi dipendono dal contratto e dalle circostanze concrete." },

    { type: "timeline", title: "Il calendario fiscale ricorrente di un'impresa edile", steps: [
      { when: "Ogni mese, entro il 16", label: "Liquidazione IVA e versamento ritenute", detail: "Con il vincolo di non compensabilità delle ritenute negli appalti soggetti all'art. 17-bis." },
      { when: "Durante il cantiere", label: "Monitoraggio della congruità della manodopera", detail: "Va verificato in corso d'opera: a fine lavori lo scostamento è già maturato per intero." },
      { when: "Trimestrale", label: "Aggiornamento dei costi a finire per commessa", detail: "È il dato che regge la valutazione dei lavori in corso e il margine di periodo." },
      { when: "31 dicembre", label: "Inventario di cantiere e valutazione delle commesse", detail: "Materiali non posati a rimanenza, avanzamento economico rideterminato commessa per commessa." },
      { when: "Entro i termini dichiarativi", label: "Dichiarazioni e verifica degli indici ISA", detail: "Gli scostamenti vanno spiegati prima, non in sede di contraddittorio." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Qual è l'IVA da applicare a una ristrutturazione?", a: "Sugli interventi di manutenzione ordinaria e straordinaria su fabbricati a prevalente destinazione abitativa privata si applica il 10%, con la regola dei beni significativi che riporta al 22% la quota di alcuni beni eccedente il valore della manodopera. Restauro, risanamento conservativo e ristrutturazione edilizia hanno un'agevolazione autonoma, senza quel limite." },
      { q: "Il reverse charge si applica solo nei subappalti?", a: "No. La lettera a) dell'art. 17, comma 6, riguarda i subappalti nel settore costruzioni, ma la lettera a-ter) si applica a pulizia, demolizione, installazione di impianti e completamento relativi a edifici tra soggetti passivi IVA, anche senza subappalto. È la fattispecie che genera più errori." },
      { q: "Quando devo emettere fattura per un SAL?", a: "Ai fini IVA l'imposta è esigibile al pagamento del corrispettivo, o alla data della fattura se emessa prima. L'accettazione del SAL fa nascere il diritto al corrispettivo ma non da sola l'obbligo di fatturare. Ai fini delle imposte dirette, invece, il ricavo segue l'avanzamento indipendentemente dalla fattura." },
      { q: "I materiali comprati e non ancora posati sono un costo dell'anno?", a: "No, sono una rimanenza. Il materiale approvvigionato e non incorporato nell'opera al 31 dicembre va inventariato e rilevato tra le rimanenze, non lasciato a costo dell'esercizio. È uno degli errori più frequenti nelle imprese edili di piccola e media dimensione." },
      { q: "Cosa cambia se lavoro con la pubblica amministrazione?", a: "Si applica lo split payment: l'IVA viene versata direttamente dall'ente e l'impresa incassa il solo imponibile. L'effetto è finanziario più che fiscale, perché genera strutturalmente crediti IVA che vanno gestiti con compensazione o richiesta di rimborso, anche in via infrannuale." },
      { q: "Ogni quanto va aggiornata la stima dei costi a finire?", a: "Almeno trimestralmente, e sempre insieme al responsabile di cantiere. È il dato che determina la percentuale di avanzamento e quindi il margine esposto in bilancio: una stima ferma a inizio commessa produce un utile che non esiste e una perdita concentrata all'esercizio successivo." },
      { q: "Serve un commercialista specializzato in edilizia?", a: "Serve se l'impresa ha più commesse contemporanee, subappalti, lavori pluriennali o rapporti con la pubblica amministrazione. Le regole su IVA per lavorazione, valutazione delle commesse e congruità della manodopera non hanno equivalenti in altri settori, e applicare schemi generalisti produce errori sistematici." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai il dubbio che qualcuno di questi quattro nodi sia gestito male nella tua impresa, la verifica è più rapida di quanto sembri: bastano gli ultimi due bilanci, un estratto delle fatture attive dell'ultimo semestre e l'elenco delle commesse aperte. Scrivici dalla pagina contatti e ti diciamo dove sta la differenza tra quello che il bilancio racconta e quello che il cantiere ha prodotto. Per approfondire i singoli nodi, leggi le guide su reverse charge, IVA agevolata e valutazione dei lavori in corso." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
