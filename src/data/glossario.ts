/**
 * Glossario: le definizioni brevi dei termini che il sito usa ovunque.
 * Serve alle query «cos'è X», che sono le più frequenti sugli answer engine e
 * che il sito non presidiava: le guide spiegano come si fa, non cosa significa.
 *
 * Ogni definizione è autonoma (40-70 parole): deve funzionare estratta dal
 * contesto, senza pronomi che rimandano ad altro.
 */

export type Termine = {
  /** Ancora nella pagina: /glossario#<slug> */
  slug: string;
  termine: string;
  /** Sigla o forma estesa, dove esiste. */
  altro?: string;
  /** Definizione autonoma, 40-70 parole. */
  definizione: string;
  /** Riferimento normativo puntuale, dove esiste. */
  norma?: string;
  /** Guida che lo approfondisce. */
  guida?: string;
  gruppo: "Fisco e IVA" | "Numeri e bilancio" | "Lavoro" | "Appalti" | "Patrimonio";
};

export const termini: Termine[] = [
  // --- Fisco e IVA ---------------------------------------------------------
  {
    slug: "reverse-charge",
    termine: "Reverse charge",
    altro: "Inversione contabile",
    definizione:
      "Meccanismo per cui l'IVA non viene addebitata da chi esegue la prestazione ma assolta da chi la riceve, che integra la fattura registrandola sia a debito sia a credito. In edilizia si applica ai subappalti tra imprese del settore costruzioni e alle prestazioni di pulizia, demolizione, installazione impianti e completamento su edifici tra soggetti IVA.",
    norma: "Art. 17, c. 6, lett. a) e a-ter), D.P.R. 633/1972",
    guida: "reverse-charge-edilizia",
    gruppo: "Fisco e IVA",
  },
  {
    slug: "beni-significativi",
    termine: "Beni significativi",
    definizione:
      "Elenco tassativo di beni — infissi, caldaie, ascensori, condizionatori, sanitari e rubinetteria, videocitofoni, impianti di sicurezza — per i quali, negli interventi di manutenzione su immobili abitativi, l'aliquota IVA ridotta si applica solo fino a concorrenza del valore della prestazione di posa. Sull'eccedenza si applica l'aliquota ordinaria.",
    norma: "Art. 7, c. 1, lett. b), L. 488/1999",
    guida: "iva-agevolata-lavori-edili",
    gruppo: "Fisco e IVA",
  },
  {
    slug: "split-payment",
    termine: "Split payment",
    altro: "Scissione dei pagamenti",
    definizione:
      "Regime per cui, nelle cessioni e prestazioni verso la pubblica amministrazione, l'IVA è versata direttamente dall'ente committente anziché dal fornitore. L'impresa emette fattura con l'imposta esposta ma incassa il solo imponibile, accumulando un credito IVA strutturale sugli acquisti.",
    norma: "Art. 17-ter D.P.R. 633/1972",
    guida: "split-payment-e-fatturazione-pa",
    gruppo: "Fisco e IVA",
  },
  {
    slug: "bonifico-parlante",
    termine: "Bonifico parlante",
    definizione:
      "Bonifico bancario o postale dal quale risultano la causale con il riferimento normativo dell'agevolazione, il codice fiscale del beneficiario della detrazione e la partita IVA dell'impresa. È condizione per accedere alle detrazioni edilizie. Su questi bonifici l'istituto opera una ritenuta d'acconto dell'8% sull'importo accreditato all'impresa.",
    norma: "Art. 25 D.L. 78/2010",
    guida: "bonus-edilizi-come-si-fatturano",
    gruppo: "Fisco e IVA",
  },
  {
    slug: "credito-inesistente",
    termine: "Credito inesistente e credito non spettante",
    definizione:
      "Il credito non spettante esiste nel presupposto ma è stato utilizzato in difetto di un requisito o di un adempimento previsto. Il credito inesistente è privo, in tutto o in parte, del presupposto costitutivo: l'intervento non è stato eseguito o l'immobile non aveva i requisiti. La distinzione incide su sanzioni, termini di accertamento e rilevanza penale.",
    norma: "D.lgs. 87/2024",
    guida: "accertamento-superbonus-imprese",
    gruppo: "Fisco e IVA",
  },
  {
    slug: "isa",
    termine: "ISA",
    altro: "Indici sintetici di affidabilità fiscale",
    definizione:
      "Indicatori che assegnano al contribuente un punteggio da 1 a 10 in funzione della coerenza dei dati dichiarati. Al superamento di determinate soglie si accede a un regime premiale. Non sono uno strumento di accertamento automatico: un punteggio basso segnala la posizione tra quelle selezionabili per un controllo, senza costituire di per sé una presunzione.",
    norma: "Art. 9-bis D.L. 50/2017",
    guida: "isa-indici-affidabilita-edilizia",
    gruppo: "Fisco e IVA",
  },

  // --- Numeri e bilancio ---------------------------------------------------
  {
    slug: "lavori-in-corso-su-ordinazione",
    termine: "Lavori in corso su ordinazione",
    definizione:
      "Voce di bilancio che accoglie le commesse iniziate e non ultimate alla data di chiusura. Si valutano con il criterio della percentuale di completamento quando esiste un contratto con corrispettivo determinabile e i costi a finire sono stimabili in modo attendibile; altrimenti con quello della commessa completata. È la voce che determina l'utile di un'impresa che lavora per commessa.",
    norma: "OIC 23; artt. 92, c. 6 e 93 TUIR",
    guida: "bilancio-impresa-edile-lavori-in-corso",
    gruppo: "Numeri e bilancio",
  },
  {
    slug: "costi-a-finire",
    termine: "Costi a finire",
    definizione:
      "Stima dei costi ancora necessari a completare una commessa aperta. Entra al denominatore del calcolo di avanzamento con il metodo cost-to-cost: se è sottostimata, la percentuale di completamento risulta più alta del reale e il bilancio espone un margine che non esiste. Va rideterminata a ogni chiusura insieme al responsabile di cantiere.",
    guida: "bilancio-impresa-edile-lavori-in-corso",
    gruppo: "Numeri e bilancio",
  },
  {
    slug: "costo-orario-pieno",
    termine: "Costo orario pieno",
    definizione:
      "Costo effettivo di un'ora di manodopera: costo annuo completo del lavoratore — retribuzione, contributi, Cassa Edile, TFR, mensilità aggiuntive, DPI, formazione — diviso per le ore realmente produttive, non per quelle teoriche di contratto. In edilizia il rapporto con la paga oraria base si colloca tipicamente attorno a una volta e mezza.",
    guida: "costo-del-lavoro-impresa-edile",
    gruppo: "Numeri e bilancio",
  },
  {
    slug: "margine-di-commessa",
    termine: "Margine di commessa",
    definizione:
      "Differenza tra i ricavi maturati per avanzamento di un cantiere e i costi a esso attribuibili. Si legge su due livelli: margine industriale, al netto dei soli costi diretti, e margine netto, dopo il ribaltamento della quota di costi di struttura. Il dato utile è lo scostamento rispetto al preventivo, non il valore assoluto.",
    guida: "margine-di-commessa-edilizia",
    gruppo: "Numeri e bilancio",
  },
  {
    slug: "sal",
    termine: "SAL",
    altro: "Stato di avanzamento lavori",
    definizione:
      "Documento che accerta la quantità di opere eseguite a una certa data e fa sorgere il diritto al pagamento della relativa rata. Va distinto il SAL contrattuale, cioè quanto si può fatturare secondo contratto, dal SAL contabile che misura l'avanzamento economico ai fini della valutazione di bilancio: coincidono raramente.",
    guida: "fiscalita-impresa-edile",
    gruppo: "Numeri e bilancio",
  },
  {
    slug: "assetti-adeguati",
    termine: "Assetti adeguati",
    definizione:
      "Obbligo per l'imprenditore che opera in forma societaria di istituire un assetto organizzativo, amministrativo e contabile proporzionato alla natura e alle dimensioni dell'impresa, anche in funzione della rilevazione tempestiva della crisi. In un'impresa che lavora per commessa un assetto privo di margine di cantiere e di cassa prospettica difficilmente può dirsi adeguato.",
    norma: "Art. 2086, c. 2, c.c.",
    guida: "assetti-adeguati-impresa-edile",
    gruppo: "Numeri e bilancio",
  },

  // --- Lavoro --------------------------------------------------------------
  {
    slug: "durc",
    termine: "DURC",
    altro: "Documento unico di regolarità contributiva",
    definizione:
      "Attestazione della regolarità dell'impresa verso INPS, INAIL e Cassa Edile, richiesta per via telematica e valida 120 giorni dalla richiesta. Prima di attestare l'irregolarità gli enti inviano un preavviso e concedono quindici giorni per regolarizzare. Senza DURC regolare si bloccano gli incassi dai committenti pubblici e la partecipazione alle gare.",
    norma: "D.M. 30 gennaio 2015",
    guida: "durc-irregolare-impresa-edile",
    gruppo: "Lavoro",
  },
  {
    slug: "congruita-manodopera",
    termine: "Congruità della manodopera",
    definizione:
      "Verifica che confronta il costo del lavoro denunciato alle Casse Edili con percentuali minime di incidenza riferite al valore dell'opera, differenziate per categoria di lavori. Si applica ai lavori pubblici di qualunque importo e ai lavori privati di valore pari o superiore a 70.000 euro. Per la nuova edilizia civile il riferimento è il 14,28%.",
    norma: "D.M. n. 143 del 25 giugno 2021",
    guida: "congruita-manodopera-durc",
    gruppo: "Lavoro",
  },
  {
    slug: "cassa-edile",
    termine: "Cassa Edile",
    definizione:
      "Ente bilaterale territoriale, costituito da associazioni datoriali e sindacali, che gestisce per conto delle imprese prestazioni che in altri settori restano in busta paga: ferie, gratifica natalizia, anzianità professionale edile, assistenza sanitaria e formazione. Esiste perché in edilizia gli operai cambiano impresa spesso e i loro diritti devono restare portabili.",
    guida: "cassa-edile-come-funziona",
    gruppo: "Lavoro",
  },
  {
    slug: "ape",
    termine: "APE",
    altro: "Anzianità professionale edile",
    definizione:
      "Prestazione erogata dalla Cassa Edile all'operaio in funzione dell'anzianità maturata nel settore — non presso la singola impresa — sulla base delle ore denunciate nell'arco di riferimento. Per l'impresa è un contributo in percentuale sull'imponibile che non ha corrispondenza in busta paga, e va incluso nel costo orario pieno.",
    guida: "cassa-edile-come-funziona",
    gruppo: "Lavoro",
  },
  {
    slug: "appalto-non-genuino",
    termine: "Appalto non genuino",
    altro: "Interposizione di manodopera",
    definizione:
      "Contratto qualificato come appalto in cui manca l'organizzazione dei mezzi necessari o l'assunzione del rischio da parte dell'appaltatore: di fatto una fornitura di lavoratori, riservata alle agenzie autorizzate. Si ricostruisce da chi impartiva le direttive quotidiane, dall'assenza di un preposto e dal corrispettivo determinato a ore anziché sulla lavorazione.",
    norma: "Art. 1655 c.c.; artt. 29 e 30 D.lgs. 276/2003",
    guida: "appalto-non-genuino-distacco-somministrazione",
    gruppo: "Lavoro",
  },
  {
    slug: "costi-della-sicurezza",
    termine: "Costi della sicurezza",
    definizione:
      "Misure previste dal piano di sicurezza e coordinamento per uno specifico cantiere — apprestamenti, protezioni collettive, procedure, coordinamento — stimate dal coordinatore per la progettazione. Non sono soggette a ribasso e vengono scorporate dall'importo posto a base di gara. Vanno distinte dagli oneri aziendali, che sono i costi propri dell'organizzazione dell'impresa.",
    norma: "Art. 41, c. 14, D.lgs. 36/2023; allegato XV D.lgs. 81/2008",
    guida: "oneri-della-sicurezza-trattamento",
    gruppo: "Lavoro",
  },

  // --- Appalti -------------------------------------------------------------
  {
    slug: "soa",
    termine: "Attestazione SOA",
    definizione:
      "Certificazione rilasciata da un organismo autorizzato che qualifica l'impresa per i lavori pubblici sopra la soglia di legge, indicando le categorie di opere e le classifiche, cioè gli importi massimi per cui può concorrere. Dura cinque anni, con verifica di mantenimento al terzo. I requisiti economico-finanziari si leggono nei bilanci depositati.",
    norma: "D.lgs. 36/2023",
    guida: "attestazione-soa-requisiti-economici",
    gruppo: "Appalti",
  },
  {
    slug: "riserva",
    termine: "Riserva",
    definizione:
      "Contestazione con cui l'esecutore di un appalto pubblico fa valere una pretesa economica su fatti che incidono sul corrispettivo o sui tempi. Va iscritta negli atti contabili all'atto della sottoscrizione ed esplicata nei termini previsti, con indicazione delle ragioni e della quantificazione. La riserva non tempestivamente iscritta ed esplicata si intende abbandonata.",
    guida: "riserve-e-contabilita-lavori-pubblici",
    gruppo: "Appalti",
  },
  {
    slug: "anticipazione-del-prezzo",
    termine: "Anticipazione del prezzo",
    definizione:
      "Somma corrisposta all'appaltatore dopo l'avvio dell'esecuzione, nella misura del 20% del valore del contratto, subordinata alla costituzione di una garanzia fideiussoria maggiorata degli interessi. Viene recuperata con trattenute proporzionali sui successivi stati di avanzamento: non è un ricavo aggiuntivo ma uno spostamento della cassa nel tempo.",
    norma: "D.lgs. 36/2023",
    guida: "anticipazione-e-revisione-prezzi",
    gruppo: "Appalti",
  },
  {
    slug: "consorzio-stabile",
    termine: "Consorzio stabile",
    definizione:
      "Consorzio costituito tra imprenditori che hanno stabilito di operare in modo congiunto nel settore dei contratti pubblici per almeno cinque anni, istituendo una comune struttura di impresa. Può utilizzare i requisiti maturati dalle consorziate ai fini della qualificazione, secondo le regole di cumulo previste. Le consorziate indicate in gara non possono concorrere autonomamente alla stessa procedura.",
    norma: "Art. 65 D.lgs. 36/2023",
    guida: "consorzi-ati-fiscalita",
    gruppo: "Appalti",
  },
  {
    slug: "ati",
    termine: "ATI",
    altro: "Raggruppamento temporaneo di imprese",
    definizione:
      "Rapporto di mandato collettivo con rappresentanza con cui più imprese concorrono insieme a una gara: la mandataria le rappresenta verso la stazione appaltante. Non è un soggetto giuridico né un centro di imputazione fiscale: ciascuna impresa resta autonoma e fattura la propria quota. Si scioglie con la conclusione dei lavori.",
    norma: "D.lgs. 36/2023",
    guida: "consorzi-ati-fiscalita",
    gruppo: "Appalti",
  },

  // --- Patrimonio ----------------------------------------------------------
  {
    slug: "holding",
    termine: "Holding",
    definizione:
      "Società che detiene le partecipazioni nelle società operative e, di norma, gli immobili e la liquidità del gruppo. Gli utili distribuiti dall'operativa concorrono al suo reddito solo per il 5%, con un carico effettivo dell'1,2%, contro il 26% della ritenuta sul socio persona fisica. Il vantaggio è di differimento: il 26% si applica comunque quando la holding distribuisce.",
    norma: "Art. 89 TUIR",
    guida: "holding-immobiliare-edilizia",
    gruppo: "Patrimonio",
  },
  {
    slug: "pex",
    termine: "PEX",
    altro: "Participation exemption",
    definizione:
      "Regime per cui le plusvalenze da cessione di partecipazioni sono esenti al 95% al ricorrere di tutti i requisiti previsti, tra cui l'esercizio da parte della partecipata di un'impresa commerciale. Le società di mera gestione immobiliare ne sono di norma escluse: è un limite decisivo in edilizia, dove le immobiliari sono frequenti.",
    norma: "Art. 87 TUIR",
    guida: "dividendi-holding-pex",
    gruppo: "Patrimonio",
  },
  {
    slug: "scissione",
    termine: "Scissione societaria",
    definizione:
      "Operazione con cui una società trasferisce parte del proprio patrimonio a una o più società beneficiarie. È fiscalmente neutrale: non genera plusvalenze imponibili e i valori fiscalmente riconosciuti proseguono in capo alle beneficiarie. In edilizia è lo strumento tipico per separare gli immobili dalla società che apre i cantieri.",
    norma: "Art. 173 TUIR",
    guida: "scissione-immobiliare-impresa-edile",
    gruppo: "Patrimonio",
  },
  {
    slug: "abuso-del-diritto",
    termine: "Abuso del diritto",
    definizione:
      "Operazioni prive di sostanza economica che, pur formalmente rispettose delle norme, realizzano essenzialmente vantaggi fiscali indebiti. La stessa norma precisa che resta ferma la libertà di scegliere tra operazioni comportanti un diverso carico fiscale quando la scelta ha una ragione economica: la differenza sta nella documentazione contemporanea all'operazione.",
    norma: "Art. 10-bis L. 212/2000",
    guida: "holding-immobiliare-edilizia",
    gruppo: "Patrimonio",
  },
  {
    slug: "patto-di-famiglia",
    termine: "Patto di famiglia",
    definizione:
      "Contratto stipulato per atto pubblico con cui l'imprenditore trasferisce l'azienda o le proprie quote a uno o più discendenti, liquidando gli altri legittimari, che devono partecipare all'atto. Quanto ricevuto dai contraenti non è soggetto a collazione né ad azione di riduzione: è ciò che rende stabile il trasferimento.",
    norma: "Artt. 768-bis e ss. c.c.",
    guida: "patto-di-famiglia-impresa-edile",
    gruppo: "Patrimonio",
  },
  {
    slug: "azione-revocatoria",
    termine: "Azione revocatoria",
    definizione:
      "Rimedio con cui il creditore può far dichiarare inefficaci nei propri confronti gli atti di disposizione del patrimonio compiuti dal debitore in suo pregiudizio. Per gli atti a titolo gratuito è sufficiente la consapevolezza del pregiudizio. È la ragione per cui la protezione patrimoniale va costruita quando l'azienda è in salute e non quando i creditori sono già alla porta.",
    norma: "Art. 2901 c.c.",
    guida: "protezione-patrimoniale-imprenditore-edile",
    gruppo: "Patrimonio",
  },
];

export const GRUPPI = [
  "Fisco e IVA",
  "Numeri e bilancio",
  "Lavoro",
  "Appalti",
  "Patrimonio",
] as const;

export const getTermine = (slug: string) => termini.find((t) => t.slug === slug);
