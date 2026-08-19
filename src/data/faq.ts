/**
 * Motore AEO: una URL per ogni domanda (/domande-frequenti/[slug]).
 * Ogni risposta breve è autonoma (40-60 parole) — è il blocco che i motori
 * di risposta estraggono. L'approfondimento aggiunge il riferimento normativo.
 */

export type FaqEntry = {
  slug: string;
  question: string;
  /** Risposta diretta, 40-60 parole, autonoma. */
  answer: string;
  /** Approfondimento: 2-4 paragrafi. */
  detail: string[];
  /** Slug della guida correlata, se esiste. */
  guida?: string;
  silo: "imprese" | "patrimonio";
};

export const faqEntries: FaqEntry[] = [
  {
    slug: "quando-si-applica-il-reverse-charge-in-edilizia",
    question: "Quando si applica il reverse charge in edilizia?",
    answer:
      "In due casi principali: nei subappalti tra imprese del settore costruzioni (art. 17, comma 6, lett. a, D.P.R. 633/1972) e nelle prestazioni di pulizia, demolizione, installazione impianti e completamento relative a edifici, comunque rese tra soggetti passivi IVA (lett. a-ter), anche senza subappalto.",
    detail: [
      "La lettera a) richiede tre condizioni insieme: un rapporto di subappalto, un committente che opera nel settore costruzioni e prestazioni riconducibili alla sezione F della classificazione ATECO. Se manca il rapporto di subappalto — per esempio quando l'impresa fattura direttamente al committente finale — la lettera a) non si applica.",
      "La lettera a-ter) funziona in modo diverso e più esteso: riguarda quattro categorie di servizi su edifici (pulizia, demolizione, installazione di impianti, completamento) e prescinde dal subappalto. Basta che entrambe le parti siano soggetti passivi IVA. È la disposizione che genera più errori, perché copre anche l'impiantista che lavora per il proprietario dell'immobile.",
      "L'Agenzia delle Entrate ha chiarito il perimetro con la circolare n. 14/E del 27 marzo 2015, adottando un criterio oggettivo: conta il codice ATECO della prestazione, non l'attività prevalente dell'impresa. Una stessa fattura può quindi contenere lavorazioni in reverse charge e lavorazioni con IVA ordinaria, e vanno separate.",
      "L'errore costa in entrambe le direzioni: applicare il reverse charge dove non spetta e non applicarlo dove spetta sono entrambe violazioni sanzionabili. Nei contratti misti, la strada corretta è distinguere gli importi per lavorazione già nel computo metrico.",
    ],
    guida: "reverse-charge-edilizia",
    silo: "imprese",
  },
  {
    slug: "quale-iva-si-applica-a-una-ristrutturazione",
    question: "Quale IVA si applica a una ristrutturazione?",
    answer:
      "Sugli interventi di manutenzione ordinaria e straordinaria su fabbricati a prevalente destinazione abitativa privata si applica l'IVA al 10%. Sale al 22% sulla quota dei cosiddetti beni significativi che eccede il valore della manodopera. Restauro, risanamento conservativo e ristrutturazione edilizia hanno un'aliquota agevolata autonoma.",
    detail: [
      "L'aliquota del 10% sulla manutenzione deriva dall'art. 7, comma 1, lettera b), della legge 488/1999 e riguarda i fabbricati a prevalente destinazione abitativa privata. Non si applica quindi ai capannoni, agli uffici e agli immobili strumentali, dove l'IVA resta ordinaria salvo diverse previsioni.",
      "La regola dei beni significativi è quella che sfugge più spesso. Per un elenco tassativo di beni — ascensori, infissi esterni e interni, caldaie, videocitofoni, apparecchiature di condizionamento, sanitari e rubinetteria — l'aliquota ridotta si applica al valore del bene solo fino a concorrenza del valore della prestazione. Sull'eccedenza si applica il 22%.",
      "In fattura questa distinzione va resa esplicita: vanno indicati separatamente il corrispettivo complessivo, il valore dei beni significativi e la parte di essi assoggettata ad aliquota ordinaria. Una fattura che non lo fa è formalmente irregolare, anche se l'imposta versata è corretta.",
      "Per gli interventi di restauro, risanamento conservativo e ristrutturazione edilizia l'agevolazione ha una base normativa diversa (voce 127-quaterdecies della Tabella A, parte III, allegata al D.P.R. 633/1972), non soffre della regola dei beni significativi e non è limitata agli immobili abitativi. La qualificazione urbanistica dell'intervento diventa quindi decisiva anche ai fini IVA.",
    ],
    guida: "iva-agevolata-lavori-edili",
    silo: "imprese",
  },
  {
    slug: "come-si-valutano-i-lavori-in-corso-a-fine-anno",
    question: "Come si valutano i lavori in corso a fine anno?",
    answer:
      "Dipende dalla durata della commessa. Le opere di durata inferiore a dodici mesi si valutano in base ai costi sostenuti (art. 92, comma 6, TUIR); quelle ultrannuali in base ai corrispettivi pattuiti maturati con l'avanzamento (art. 93 TUIR). È la voce che decide l'utile di bilancio di un'impresa edile.",
    detail: [
      "Sul piano civilistico il riferimento è l'OIC 23. Il criterio della percentuale di completamento consente di riconoscere il margine man mano che la commessa avanza, a condizione che esista un contratto con corrispettivo determinabile e che i costi a finire siano stimabili in modo attendibile. In assenza di questi requisiti si applica il criterio della commessa completata, che rinvia tutto il margine alla consegna.",
      "La percentuale di avanzamento si misura di norma con il metodo cost-to-cost: costi sostenuti diviso costi totali stimati. Il punto debole è il denominatore. Se i costi a finire sono sottostimati — cosa frequente quando le varianti non sono state contabilizzate — l'avanzamento risulta più alto del reale e il bilancio registra un margine che non esiste.",
      "L'effetto pratico è quello che vediamo più spesso: un'impresa chiude in utile e l'anno successivo si trova la perdita concentrata su una commessa, quando i costi a finire vengono finalmente aggiornati. Non è un problema contabile, è un problema di controllo: i costi a finire vanno rivisti a ogni chiusura, con il capocantiere, commessa per commessa.",
      "Attenzione anche alla differenza tra SAL contabile e SAL contrattuale: il primo misura l'avanzamento economico ai fini della valutazione, il secondo è ciò che si può fatturare secondo contratto. Coincidono raramente, e confonderli produce sia errori di bilancio sia errori di competenza fiscale.",
    ],
    guida: "bilancio-impresa-edile-lavori-in-corso",
    silo: "imprese",
  },
  {
    slug: "come-si-calcola-il-margine-di-una-commessa",
    question: "Come si calcola il margine di una commessa edile?",
    answer:
      "Ricavi maturati per avanzamento meno costi diretti della commessa (materiali, manodopera al costo orario pieno, subappalti, noli, mezzi) meno la quota di costi indiretti attribuita. Il risultato va confrontato con il margine previsto in preventivo: è lo scostamento, non il valore assoluto, a dire dove si sta perdendo.",
    detail: [
      "L'errore più comune è usare la paga oraria al posto del costo orario pieno. Il costo vero di un operaio comprende retribuzione, contributi, Cassa Edile, TFR, ferie, permessi, festività, ore non produttive e formazione: il rapporto con la paga lorda è nell'ordine di una volta e mezza, non di poco superiore a uno. Un preventivo costruito sulla paga oraria nasce già in perdita.",
      "Il secondo errore è tenere fuori i noli e l'ammortamento dei mezzi propri. Un escavatore di proprietà non è gratis: ha un costo orario che comprende ammortamento, manutenzione, carburante e fermo macchina. Se non viene ribaltato sulla commessa, il margine di quel cantiere è sovrastimato e quello degli altri è sottostimato.",
      "Il terzo è ignorare le varianti non formalizzate. Le lavorazioni in più eseguite su richiesta verbale del direttore dei lavori entrano nei costi ma non nei ricavi: sono la voce che più spesso trasforma una commessa in utile in una commessa in pareggio.",
      "Il margine va letto mensilmente e per singola commessa, non a fine anno e non aggregato. A esercizio chiuso l'informazione è già stata mediata da dodici mesi di lavorazioni diverse, e non è più azionabile: sai di aver perso, non sai dove.",
    ],
    guida: "controllo-di-gestione-impresa-edile",
    silo: "imprese",
  },
  {
    slug: "quando-si-fattura-il-sal",
    question: "Quando si fattura un SAL e quando nasce l'IVA?",
    answer:
      "Nell'appalto l'IVA diventa esigibile al pagamento del corrispettivo, oppure alla data della fattura se emessa prima (art. 6, comma 3, D.P.R. 633/1972). L'accettazione del SAL da parte del committente fa nascere il diritto al corrispettivo, ma non da sola l'obbligo di fatturare: contano pagamento o emissione anticipata.",
    detail: [
      "La distinzione tra momento impositivo IVA e competenza dei ricavi ai fini delle imposte dirette è una delle cause più frequenti di disallineamento nei bilanci delle imprese edili. Ai fini IRES o IRPEF il ricavo segue l'avanzamento della commessa secondo le regole degli artt. 92 e 93 del TUIR, indipendentemente da quando si emette la fattura.",
      "In pratica questo significa che a fine anno una commessa può avere ricavi di competenza superiori al fatturato emesso: la differenza va rilevata tra i lavori in corso su ordinazione, non lasciata fuori. Il contrario — fatturato superiore all'avanzamento reale, per esempio dopo un anticipo — genera invece un risconto o un acconto da esporre tra i debiti.",
      "Sul piano contrattuale, il SAL accettato è il documento che cristallizza il diritto al pagamento e fa decorrere i termini. Vale la pena tenerne traccia formale — verbale firmato o comunicazione via PEC — anche quando il rapporto con il committente è buono: serve al recupero del credito, alla valutazione di bilancio e in caso di verifica.",
      "Negli appalti pubblici e in quelli soggetti a split payment il meccanismo di versamento dell'imposta cambia, ma la regola sulla competenza dei ricavi resta la stessa.",
    ],
    guida: "fiscalita-impresa-edile",
    silo: "imprese",
  },
  {
    slug: "cosa-fare-se-arriva-una-verifica-fiscale-in-cantiere",
    question: "Cosa fare se arriva una verifica fiscale in cantiere?",
    answer:
      "Chiedere e conservare copia dell'ordine di accesso, verificare quali documenti vengono richiesti, non consegnare nulla oltre il perimetro dell'atto e avvisare subito il proprio commercialista. Dopo la consegna del processo verbale di constatazione hai 60 giorni per presentare osservazioni (art. 12, comma 7, L. 212/2000).",
    detail: [
      "L'accesso deve essere autorizzato e motivato: l'ordine di accesso indica il perimetro dell'attività, i periodi d'imposta e i soggetti verificati. La permanenza dei verificatori presso la sede è contingentata dallo Statuto del contribuente, con limiti di giorni prorogabili solo in casi motivati. Prendere nota di date e orari di ogni accesso non è pignoleria: è la base di eventuali eccezioni successive.",
      "Le dichiarazioni rese durante la verifica finiscono a verbale e pesano. Rispondere con onestà è doveroso, ma rispondere a braccio su ricostruzioni di costi o di ore lavorate — quando i dati esatti sono in contabilità — è il modo più rapido per consolidare una ricostruzione presuntiva sfavorevole. La risposta corretta, quando serve, è che il dato verrà fornito documentalmente.",
      "I 60 giorni per le osservazioni al PVC sono la fase più sottovalutata dell'intero procedimento: è l'unico momento in cui si può smontare una ricostruzione prima che diventi un avviso di accertamento. In edilizia le contestazioni tipiche riguardano i ricavi presunti da metri quadri costruiti, il costo della manodopera dichiarato rispetto alle ore di cantiere e le rimanenze di commessa.",
      "L'avviso di accertamento non può essere emesso prima della scadenza dei 60 giorni, salvo casi di particolare e motivata urgenza. Se arriva prima, è un vizio che va eccepito.",
    ],
    guida: "verifica-fiscale-impresa-edile",
    silo: "imprese",
  },
  {
    slug: "quanto-tempo-ha-l-agenzia-delle-entrate-per-accertare",
    question: "Quanto tempo ha l'Agenzia delle Entrate per accertare?",
    answer:
      "Gli avvisi di accertamento vanno notificati entro il 31 dicembre del quinto anno successivo a quello di presentazione della dichiarazione; in caso di dichiarazione omessa il termine sale al settimo anno (art. 43 D.P.R. 600/1973). Termini specifici valgono per i crediti d'imposta e per alcune fattispecie particolari.",
    detail: [
      "Il conteggio parte dall'anno di presentazione, non dall'anno d'imposta: la dichiarazione dei redditi presentata nel 2026 per l'anno 2025 è accertabile fino al 31 dicembre 2031. È un dettaglio che sposta di un anno intero la scadenza, e viene sbagliato di continuo.",
      "Per i crediti d'imposta la disciplina è autonoma. L'atto di recupero dei crediti utilizzati in compensazione segue termini propri, più lunghi nel caso di crediti qualificati come inesistenti: è la ragione per cui le posizioni sui bonus edilizi restano aperte molto oltre l'ordinario.",
      "Alcuni eventi allungano i termini: l'adesione a definizioni agevolate, alcune proroghe di legge intervenute negli anni e, in passato, i periodi di sospensione connessi all'emergenza sanitaria. Prima di dare per prescritta un'annualità va sempre ricostruita la sequenza applicabile a quello specifico periodo d'imposta.",
      "In pratica, per un'impresa edile questo significa conservare in modo ordinato non solo le scritture obbligatorie ma anche la documentazione di cantiere — computi, SAL, rapportini, contratti di subappalto — per l'intero arco di accertabilità: è quella che regge o smonta le ricostruzioni presuntive.",
    ],
    guida: "verifica-fiscale-impresa-edile",
    silo: "imprese",
  },
  {
    slug: "quando-si-applicano-le-ritenute-negli-appalti",
    question: "Quando si applicano le ritenute negli appalti dell'art. 17-bis?",
    answer:
      "Quando un committente affida a un'impresa opere o servizi per oltre 200.000 euro annui, con prevalente utilizzo di manodopera, presso le sedi del committente e con beni strumentali di sua proprietà. In quel caso scattano obblighi di trasmissione delle deleghe di versamento, salvo esonero con certificato di regolarità.",
    detail: [
      "I quattro requisiti dell'art. 17-bis del D.lgs. 241/1997 devono ricorrere insieme. Il più discusso è quello dei beni strumentali riconducibili al committente: in molti appalti edili l'impresa lavora con mezzi propri, e questo esclude l'applicazione della norma. La verifica va fatta contratto per contratto, non per prassi generale.",
      "Quando la norma si applica, l'appaltatore deve versare le ritenute sui lavoratori impiegati nell'appalto senza poterle compensare con propri crediti, e trasmettere al committente le deleghe di versamento con l'elenco dei lavoratori, le ore impiegate e il dettaglio delle ritenute. Il committente, dal canto suo, deve sospendere i pagamenti in caso di inadempienza.",
      "L'esonero opera se l'impresa ottiene il certificato di sussistenza dei requisiti — comunemente chiamato DURF — rilasciato dall'Agenzia delle Entrate. I requisiti riguardano l'anzianità di attività, la regolarità delle dichiarazioni, i versamenti effettuati in rapporto ai ricavi e l'assenza di debiti iscritti a ruolo sopra una soglia. Il certificato ha validità limitata nel tempo e va rinnovato.",
      "L'errore tipico è trattare la questione come un adempimento del committente. Per l'impresa appaltatrice, non poter compensare le ritenute significa un impatto immediato sulla cassa: va messo in conto nel preventivo di commessa, non scoperto al primo F24.",
    ],
    guida: "ritenute-appalti-17-bis",
    silo: "imprese",
  },
  {
    slug: "quanto-costa-davvero-un-operaio-edile-all-ora",
    question: "Quanto costa davvero un operaio edile all'ora?",
    answer:
      "Molto più della paga oraria di contratto. Al lordo vanno aggiunti contributi, Cassa Edile, TFR, ferie, permessi, festività, malattia, formazione e ore improduttive. Il rapporto tra costo pieno e paga base si colloca tipicamente attorno a una volta e mezza, e va calcolato sulle ore effettivamente produttive.",
    detail: [
      "Il riferimento oggettivo esiste: le tabelle del costo medio orario del lavoro per i dipendenti delle imprese edili, pubblicate periodicamente con decreto ministeriale su base provinciale e per qualifica. Sono la base che le stazioni appaltanti usano per verificare la congruità delle offerte, ed è la stessa base che conviene usare nei preventivi privati.",
      "Il passaggio che quasi nessuno fa è il denominatore. Il costo annuo va diviso per le ore realmente lavorabili in cantiere, non per le ore teoriche di contratto: tolti ferie, permessi, festività, malattia media, formazione obbligatoria e giornate di maltempo, le ore produttive sono sensibilmente meno. Dividere per il monte ore teorico sottostima il costo orario del 10-15%.",
      "A questo va aggiunta la quota di improduttività di cantiere: spostamenti interni, attese di forniture, montaggio e smontaggio delle attrezzature. In un preventivo serio questa quota viene stimata esplicitamente, non nascosta in una percentuale generica di spese generali.",
      "Il costo orario pieno è il numero singolo che più incide sul margine di un'impresa edile: se è sbagliato in preventivo, nessun controllo successivo può recuperare la differenza. Va ricalcolato almeno una volta l'anno, dopo il rinnovo contrattuale e dopo ogni variazione significativa dell'organico.",
    ],
    guida: "costo-del-lavoro-impresa-edile",
    silo: "imprese",
  },
  {
    slug: "cosa-succede-se-la-congruita-della-manodopera-non-e-raggiunta",
    question: "Cosa succede se il DURC di congruità non è raggiunto?",
    answer:
      "L'impresa viene invitata a regolarizzare entro un termine. Se non lo fa, la mancata congruità viene segnalata e incide sul rilascio del DURC, con effetti su pagamenti e partecipazione alle gare. La verifica confronta il costo del lavoro denunciato in Cassa Edile con percentuali minime riferite al valore dell'opera.",
    detail: [
      "Il sistema è disciplinato dal decreto ministeriale n. 143 del 25 giugno 2021, che ha dato attuazione alla verifica della congruità dell'incidenza della manodopera nei lavori edili. Le percentuali minime sono differenziate per categoria di opera: per la nuova edilizia civile il riferimento consolidato è il 14,28% del valore dell'opera.",
      "La verifica si attiva sui lavori pubblici di qualunque importo e sui lavori privati sopra una soglia di valore. Il calcolo tiene conto del costo della manodopera denunciata dall'impresa affidataria e dalle imprese subaffidatarie: è per questo che la gestione documentale dei subappalti pesa sul risultato finale.",
      "Se lo scostamento è giustificabile — per esempio per un elevato ricorso a lavorazioni ad alta incidenza di materiale o per subappalti con manodopera denunciata altrove — la strada è la dimostrazione documentale, non il versamento. Se invece lo scostamento non è giustificato, la regolarizzazione avviene con il versamento della differenza contributiva.",
      "L'effetto pratico è quello che l'imprenditore percepisce per primo: senza DURC regolare si bloccano gli incassi dai committenti pubblici e la partecipazione alle gare. Va monitorato durante il cantiere, non alla chiusura, quando la differenza è ormai maturata per intero.",
    ],
    guida: "costo-del-lavoro-impresa-edile",
    silo: "imprese",
  },
  {
    slug: "differenza-tra-credito-inesistente-e-non-spettante",
    question: "Che differenza c'è tra credito inesistente e credito non spettante?",
    answer:
      "Il credito non spettante esiste ma è stato usato in misura o in tempi non consentiti, o mancano adempimenti previsti. Il credito inesistente manca del presupposto sostanziale: i lavori non sono stati eseguiti o i requisiti non esistono. La distinzione cambia sanzioni, termini di accertamento e rilevanza penale.",
    detail: [
      "La riforma del sistema sanzionatorio operata dal D.lgs. 87/2024 ha ridefinito le due nozioni e le relative misure: la sanzione per l'utilizzo di crediti non spettanti è sensibilmente inferiore a quella prevista per i crediti inesistenti, che resta la contestazione più grave anche sul piano penale.",
      "Nella pratica dei bonus edilizi la linea di confine passa quasi sempre dai documenti di cantiere. Un intervento realmente eseguito, ma con un vizio formale nella documentazione o nella comunicazione, è tipicamente un credito non spettante. Un intervento mai eseguito, o eseguito su un immobile che non aveva i requisiti, è inesistente.",
      "Per l'impresa la conseguenza operativa è chiara: la difesa si costruisce sul fascicolo di commessa. Contratto, computo metrico, SAL, fatture, bonifici parlanti, asseverazioni, foto datate dello stato ante e post operam, comunicazioni di inizio lavori. È quella documentazione a stabilire in quale delle due categorie ricade la contestazione.",
      "Chi ha acquistato crediti da terzi ha una posizione ulteriore da presidiare: la responsabilità del cessionario dipende dal grado di diligenza usato nella verifica documentale al momento dell'acquisto. Anche in questo caso è la carta conservata a fare la differenza.",
    ],
    guida: "accertamento-superbonus-imprese",
    silo: "imprese",
  },
  {
    slug: "conviene-la-srl-o-la-ditta-individuale-in-edilizia",
    question: "Conviene la SRL o la ditta individuale per un'impresa edile?",
    answer:
      "Dipende da utile, patrimonio e rischio. La ditta individuale paga IRPEF progressiva più contributi su tutto il reddito e risponde con il patrimonio personale. La SRL sconta IRES al 24% più IRAP e tassa i dividendi al 26% solo quando li distribuisce, e limita la responsabilità al capitale sociale.",
    detail: [
      "La convenienza fiscale pura si misura sul reddito che l'imprenditore lascia in azienda. Se tutto l'utile viene prelevato, la SRL non offre grandi vantaggi rispetto all'impresa individuale: alla tassazione societaria si somma quella sui dividendi. Se invece una parte dell'utile resta reinvestita in mezzi, scorte o capitale circolante, l'imposizione societaria del 24% su quella quota è quasi sempre più leggera degli scaglioni IRPEF più alti.",
      "In edilizia però il criterio decisivo raramente è quello fiscale: è il rischio. Un'impresa che apre cantieri risponde di danni, infortuni, vizi dell'opera e responsabilità solidali negli appalti. Con la ditta individuale la casa, i conti e gli immobili di famiglia sono aggredibili direttamente. È la ragione per cui la scelta della SRL, in questo settore, precede il calcolo di convenienza.",
      "Vanno considerati anche gli aspetti operativi: la SRL consente di qualificarsi meglio verso committenti pubblici e privati, di ottenere attestazioni SOA, di far entrare soci o familiari nella compagine e di costruire sopra una holding. La ditta individuale è più leggera nei costi di gestione, ma non offre nessuna di queste possibilità.",
      "Il passaggio da impresa individuale a società non è neutro: la trasformazione o il conferimento d'azienda hanno regole fiscali proprie e vanno pianificati, non improvvisati a fine anno.",
    ],
    guida: "fiscalita-impresa-edile",
    silo: "imprese",
  },
  {
    slug: "quali-costi-dell-auto-puo-dedurre-un-impresa-edile",
    question: "Quali costi dell'auto può dedurre un'impresa edile?",
    answer:
      "Le autovetture aziendali non assegnate hanno deducibilità limitata al 20%, con un tetto sul costo di acquisto (art. 164 TUIR). I veicoli strumentali per natura — autocarri, furgoni, mezzi d'opera realmente usati in cantiere — sono deducibili integralmente, con IVA detraibile per intero.",
    detail: [
      "La distinzione tra autovettura e autocarro non dipende dal nome commerciale né dalla percezione dell'imprenditore, ma dalla classificazione del veicolo e dal suo uso effettivo. I pick-up e i furgoni con omologazione da autocarro usati per trasportare attrezzature e personale in cantiere rientrano tra i beni strumentali; lo stesso veicolo usato prevalentemente per spostamenti personali non regge a un controllo.",
      "Per i veicoli concessi in uso promiscuo ai dipendenti la disciplina è diversa: la deducibilità è più ampia rispetto al 20%, a fronte della tassazione di un fringe benefit in capo al dipendente calcolato su base convenzionale. È una soluzione spesso più efficiente, ma richiede assegnazione formale e tracciabilità.",
      "Carburanti e pedaggi seguono la sorte del veicolo cui si riferiscono e richiedono pagamento tracciato per essere deducibili e per consentire la detrazione dell'IVA. La scheda carburante non è più sufficiente: serve il pagamento con mezzi tracciabili.",
      "In edilizia la voce che pesa di più non è l'auto ma il parco mezzi: escavatori, gru, ponteggi, betoniere. Lì il tema non è la percentuale di deducibilità ma il corretto piano di ammortamento e il ribaltamento del costo orario sulle commesse, che incide sul margine molto più di qualunque ottimizzazione sull'autovettura.",
    ],
    guida: "fiscalita-impresa-edile",
    silo: "imprese",
  },
  {
    slug: "quando-conviene-una-holding-a-un-impresa-edile",
    question: "Quando conviene una holding a un'impresa edile?",
    answer:
      "Quando l'impresa genera utili stabili che non servono tutti all'operativa, quando esistono immobili o liquidità da tenere fuori dal rischio dei cantieri, quando le società sono più di una o quando si prepara il passaggio generazionale. Con un solo cantiere e utili appena sufficienti, la holding è un costo senza contropartita.",
    detail: [
      "Il vantaggio fiscale più concreto è sui dividendi: gli utili distribuiti da una società operativa a una holding italiana concorrono al reddito di quest'ultima solo per il 5%, con un prelievo effettivo molto contenuto. Gli stessi utili distribuiti direttamente a una persona fisica scontano la ritenuta del 26%. La differenza non è un risparmio definitivo, ma consente di accumulare e reinvestire risorse a livello di gruppo senza passare dalla tassazione personale.",
      "Il vantaggio non fiscale è spesso quello che conta di più in edilizia: la separazione del rischio. La società che apre i cantieri è esposta a responsabilità per danni, infortuni, vizi dell'opera e solidarietà negli appalti. Tenere immobili, liquidità e partecipazioni sopra quel livello significa che un sinistro di cantiere non travolge il patrimonio accumulato in vent'anni.",
      "La holding va costituita quando l'azienda è in salute, non quando i creditori sono già alla porta: gli atti compiuti in prossimità dell'insolvenza sono attaccabili con l'azione revocatoria e non offrono la protezione che si cercava. È il motivo per cui l'operazione va anticipata, non rincorsa.",
      "Il rovescio della medaglia va detto: la holding comporta un secondo bilancio, adempimenti aggiuntivi, costi societari ricorrenti e — se costruita senza sostanza — il rischio di contestazione come abuso del diritto. Sotto una certa dimensione, la risposta onesta è che non serve.",
    ],
    guida: "holding-immobiliare-edilizia",
    silo: "patrimonio",
  },
  {
    slug: "quanto-si-paga-sui-dividendi-di-una-holding",
    question: "Quanto si paga sui dividendi incassati da una holding?",
    answer:
      "I dividendi percepiti da una società di capitali italiana concorrono al reddito imponibile solo per il 5% del loro ammontare: con l'IRES al 24% il carico effettivo è dell'1,2%. Gli stessi dividendi distribuiti a una persona fisica non imprenditore scontano invece una ritenuta a titolo d'imposta del 26%.",
    detail: [
      "L'esenzione parziale del 95% non è un regime opzionale né un'agevolazione: è la regola generale prevista dall'art. 89 del TUIR per evitare la doppia imposizione economica sugli utili già tassati in capo alla società che li ha prodotti.",
      "Il punto da capire è che si tratta di un differimento, non di un azzeramento. Finché l'utile resta nella holding il prelievo è dell'1,2%; nel momento in cui la holding distribuisce a sua volta ai soci persone fisiche, si applica il 26%. Il vantaggio sta nel poter reinvestire risorse quasi integre a livello di gruppo, non nell'evitare per sempre la tassazione personale.",
      "Un meccanismo analogo vale sulle plusvalenze da cessione di partecipazioni, attraverso la participation exemption dell'art. 87 del TUIR: al ricorrere di tutti i requisiti, la plusvalenza è esente al 95%. Uno dei requisiti richiede però l'esercizio di un'impresa commerciale da parte della società ceduta, e le società di mera gestione immobiliare ne sono di norma escluse. È un dettaglio decisivo proprio in edilizia, dove le immobiliari sono frequenti.",
      "Prima di impostare la struttura vanno verificati anche i profili non fiscali: la holding che si limita a detenere partecipazioni può ricadere nella disciplina degli intermediari finanziari se i requisiti dimensionali e di attività sono superati, con obblighi di iscrizione e vigilanza.",
    ],
    guida: "dividendi-holding-pex",
    silo: "patrimonio",
  },
  {
    slug: "come-si-separa-il-capannone-dalla-societa-operativa",
    question: "Come si separa il capannone dalla società che apre i cantieri?",
    answer:
      "Le strade principali sono la scissione parziale a favore di una società immobiliare e il conferimento dell'immobile in una nuova società, entrambe in regime di neutralità fiscale. Assegnare l'immobile ai soci o venderlo, invece, realizza plusvalenze imponibili. La scelta dipende da mutui, garanzie e ragioni economiche dell'operazione.",
    detail: [
      "La scissione societaria è fiscalmente neutrale ai sensi dell'art. 173 del TUIR: non genera plusvalenze imponibili né in capo alla società scissa né in capo ai soci, e i valori fiscalmente riconosciuti si trasferiscono alla beneficiaria. È lo strumento tipico per separare il patrimonio immobiliare dall'attività di costruzione senza pagare imposte sui plusvalori latenti.",
      "La neutralità fiscale non è però un salvacondotto. L'operazione deve avere ragioni economiche extrafiscali documentabili — separare il rischio d'impresa dal patrimonio, preparare l'ingresso di un socio, riorganizzare un gruppo — altrimenti si espone alla contestazione di abuso del diritto ai sensi dell'art. 10-bis della legge 212/2000. Le ragioni vanno scritte nella relazione dell'organo amministrativo, non ricostruite dopo.",
      "Ci sono poi vincoli concreti che decidono la fattibilità: un mutuo ipotecario sull'immobile richiede il consenso della banca, le fideiussioni rilasciate dai soci restano in piedi salvo liberazione espressa, e gli affidamenti bancari della società operativa possono essere rivisti quando il patrimonio immobiliare esce dal bilancio. Vanno affrontati prima dell'atto, non dopo.",
      "Dopo la separazione, l'immobiliare concede in locazione il capannone all'operativa: il canone deve essere di mercato e supportato da una perizia o da riferimenti oggettivi. Un canone fuori mercato tra parti correlate è una delle contestazioni più semplici da muovere in sede di verifica.",
    ],
    guida: "scissione-immobiliare-impresa-edile",
    silo: "patrimonio",
  },
  {
    slug: "il-fondo-patrimoniale-protegge-dai-debiti-dell-impresa",
    question: "Il fondo patrimoniale protegge dai debiti dell'impresa?",
    answer:
      "Molto meno di quanto si creda. L'art. 170 c.c. esclude l'esecuzione solo per i debiti che il creditore sapeva essere estranei ai bisogni della famiglia. La giurisprudenza considera spesso i debiti dell'impresa familiare come contratti anche nell'interesse della famiglia, e in quel caso il fondo non protegge.",
    detail: [
      "Il fondo patrimoniale nasce come strumento di destinazione di beni ai bisogni della famiglia, non come schermo dai creditori d'impresa. Il criterio applicato è quello dell'inerenza: se il debito è servito, anche indirettamente, a sostenere il tenore di vita familiare — e il reddito dell'imprenditore ne è la fonte — il vincolo non è opponibile.",
      "C'è poi un secondo limite: la costituzione del fondo è un atto a titolo gratuito e come tale è aggredibile con l'azione revocatoria. Un fondo costituito quando l'impresa è già in difficoltà, o dopo l'apertura di un contenzioso, non regge nella quasi totalità dei casi.",
      "In edilizia il tema è più delicato che altrove, per la responsabilità solidale negli appalti e per l'esposizione a fideiussioni personali. Un imprenditore che ha firmato garanzie personali verso banche e fornitori non ottiene alcuna protezione dal fondo: il creditore agisce in forza della garanzia, non del rapporto societario.",
      "Gli strumenti che funzionano davvero sono altri e vanno costruiti prima: la scelta della forma societaria a responsabilità limitata, la separazione degli immobili dall'operativa, una holding con sostanza, e soprattutto la riduzione progressiva delle garanzie personali rilasciate. Sono meno suggestivi del fondo patrimoniale, ma reggono.",
    ],
    guida: "protezione-patrimoniale-imprenditore-edile",
    silo: "patrimonio",
  },
  {
    slug: "come-si-passa-l-impresa-edile-ai-figli",
    question: "Come si passa l'impresa edile ai figli?",
    answer:
      "Di norma con la donazione di quote, spesso riservando l'usufrutto al genitore, oppure attraverso un patto di famiglia. Il trasferimento di aziende o di partecipazioni di controllo a discendenti è esente da imposta di donazione se gli eredi proseguono l'attività o mantengono il controllo per almeno cinque anni.",
    detail: [
      "L'esenzione è prevista dall'art. 3, comma 4-ter, del D.lgs. 346/1990 ed è una delle poche agevolazioni davvero significative del sistema. Richiede però una condizione sostanziale: i beneficiari devono rendere in atto l'impegno espresso a proseguire l'attività d'impresa o a detenere il controllo per almeno cinque anni. La decadenza fa rivivere l'imposta con sanzioni e interessi.",
      "La donazione con riserva di usufrutto è la formula più usata quando il fondatore vuole trasferire la proprietà ma mantenere per sé i diritti amministrativi e i frutti. Va costruita con attenzione allo statuto: il diritto di voto in caso di usufrutto su quote può essere regolato diversamente, e la governance transitoria è il punto in cui questi passaggi si rompono più spesso.",
      "Il patto di famiglia (artt. 768-bis e seguenti c.c.) serve a un problema diverso: mettere d'accordo in anticipo tutti i legittimari, liquidando chi non entra in azienda, in modo che il trasferimento non venga rimesso in discussione all'apertura della successione. È lo strumento da valutare quando i figli sono più di uno e solo alcuni lavorano in impresa.",
      "In edilizia c'è un vincolo pratico che precede tutto: le qualificazioni. Attestazioni SOA, requisiti tecnici e rapporti bancari sono spesso legati alla persona del fondatore. Il passaggio va programmato con anni di anticipo, affiancando i figli nei ruoli formali richiesti, altrimenti la successione societaria funziona sulla carta e si blocca sui cantieri.",
    ],
    guida: "passaggio-generazionale-impresa-edile",
    silo: "patrimonio",
  },
  {
    slug: "conviene-vendere-l-azienda-o-le-quote",
    question: "Conviene vendere l'azienda o le quote della società?",
    answer:
      "Per il venditore persona fisica la cessione di quote è di norma più leggera: la plusvalenza sconta un'imposta sostitutiva del 26%. La cessione d'azienda genera invece una plusvalenza tassata come reddito d'impresa e sconta imposta di registro proporzionale. L'acquirente, però, preferisce quasi sempre l'azienda.",
    detail: [
      "Il conflitto di interessi tra le parti è strutturale. Chi compra le quote acquista la società con tutta la sua storia: debiti fiscali, contenziosi, responsabilità per vizi delle opere realizzate, posizioni previdenziali. Chi compra l'azienda acquista un perimetro definito di beni e contratti, con una responsabilità più circoscritta anche se non nulla.",
      "Sul piano fiscale, la cessione d'azienda da parte di un imprenditore individuale che possiede l'azienda da più di cinque anni può accedere alla tassazione separata, che attenua l'effetto della progressività. Per le società, la plusvalenza può essere rateizzata in cinque esercizi se il bene è posseduto da almeno tre anni.",
      "L'imposta di registro sulla cessione d'azienda è proporzionale e si applica per aliquote differenziate sui diversi beni trasferiti, con il valore dell'avviamento imputato secondo criteri propri; sulla cessione di quote è invece dovuta in misura fissa. È una differenza che pesa sul costo complessivo dell'operazione e che va negoziata insieme al prezzo.",
      "In edilizia c'è un ulteriore elemento che spesso decide: le qualificazioni. L'attestazione SOA e i requisiti di gara sono riferiti alla società; cedere l'azienda senza cedere il soggetto giuridico può significare far perdere all'acquirente proprio ciò per cui stava pagando. Va verificato prima di impostare la struttura dell'operazione.",
    ],
    guida: "cessione-azienda-impresa-edile",
    silo: "patrimonio",
  },
  {
    slug: "meglio-intestare-gli-immobili-alla-societa-o-a-me",
    question: "Meglio intestare gli immobili alla società o a me personalmente?",
    answer:
      "Dipende dall'uso. Gli immobili strumentali usati in azienda stanno meglio in una società immobiliare distinta, che li concede in locazione all'operativa. Gli immobili di godimento personale raramente hanno senso in società: generano fringe benefit, costi indeducibili e contestazioni sulla società di comodo.",
    detail: [
      "L'intestazione societaria consente di dedurre ammortamenti, interessi passivi e costi di manutenzione, e di far transitare il valore all'interno del gruppo senza passare dal patrimonio personale. Ma la deducibilità presuppone la strumentalità: un immobile che l'amministratore usa come abitazione non è strumentale, e i relativi costi sono ripresi a tassazione.",
      "La società immobiliare che detiene beni senza svolgere attività reale rischia inoltre di ricadere nella disciplina delle società non operative, con effetti pesanti: reddito minimo presunto, limiti all'utilizzo del credito IVA e maggiorazione dell'aliquota. La sostanza operativa — canoni di mercato, contratti registrati, gestione effettiva — non è un dettaglio formale.",
      "Sul fronte delle imposte indirette pesa l'IMU, dovuta sugli immobili a prescindere dal soggetto che li possiede, e il regime IVA o di registro applicabile alla compravendita, che cambia sensibilmente a seconda che il venditore sia un'impresa di costruzione entro i termini di legge dall'ultimazione dei lavori o un privato.",
      "Il criterio che consigliamo in edilizia è semplice: gli immobili non stanno mai nella società che apre i cantieri. Vanno in una immobiliare separata o sotto la holding, perché sono l'asset più aggredibile e quello che l'imprenditore ha impiegato più tempo a costruire.",
    ],
    guida: "societa-immobiliare-o-persona-fisica",
    silo: "patrimonio",
  },
  {
    slug: "una-holding-e-abuso-del-diritto",
    question: "Costituire una holding è abuso del diritto?",
    answer:
      "No, se l'operazione ha ragioni economiche reali: separare il rischio d'impresa, riorganizzare un gruppo, preparare il passaggio generazionale, far entrare nuovi soci. Diventa contestabile quando è priva di sostanza economica e serve essenzialmente a ottenere un vantaggio fiscale indebito (art. 10-bis L. 212/2000).",
    detail: [
      "L'art. 10-bis dello Statuto del contribuente definisce abusive le operazioni prive di sostanza economica che, pur formalmente rispettose delle norme, realizzano essenzialmente vantaggi fiscali indebiti. La norma precisa anche il contrario: resta ferma la libertà di scegliere tra regimi opzionali diversi e tra operazioni comportanti un diverso carico fiscale, quando la scelta ha una ragione.",
      "In concreto, la contestazione si regge o cade sulla documentazione delle ragioni extrafiscali. Una holding costituita per separare gli immobili dal rischio dei cantieri, con una società operativa che continua a operare, canoni di locazione di mercato e una governance reale, ha una storia difendibile. Una holding creata a ridosso di una cessione, senza alcuna attività, ha una storia molto più fragile.",
      "Le ragioni economiche vanno scritte quando l'operazione si fa: nella relazione dell'organo amministrativo, nei verbali assembleari, nella perizia di stima. Ricostruirle a posteriori, in sede di contraddittorio, è possibile ma parte in svantaggio.",
      "Quando la questione è genuinamente dubbia esiste uno strumento preventivo: l'interpello anti-abuso all'Agenzia delle Entrate, che consente di sottoporre l'operazione prima di realizzarla. Ha tempi e costi, ma su operazioni di valore rilevante è spesso l'investimento più razionale.",
    ],
    guida: "holding-immobiliare-edilizia",
    silo: "patrimonio",
  },
  {
    slug: "quanto-tempo-ho-per-sistemare-un-durc-irregolare",
    question: "Quanto tempo ho per sistemare un DURC irregolare?",
    answer:
      "Quindici giorni. Prima di attestare l'irregolarità l'ente invia un preavviso via PEC e invita a regolarizzare entro quel termine (D.M. 30 gennaio 2015). Dentro quella finestra il problema si chiude senza che nessuno lo veda; superata, l'esito negativo diventa visibile a chi ha richiesto il documento.",
    detail: [
      "Il termine decorre comunque e non viene ripetuto. Il motivo per cui viene perso è quasi sempre banale: la PEC aziendale non viene letta con continuità, oppure è intestata a un consulente che non la presidia.",
      "Le strade per regolarizzare sono tre: versare il dovuto, presentare istanza di rateazione pagando le prime rate, oppure dimostrare documentalmente che il debito non esiste — cosa che capita più spesso di quanto si creda, per versamenti imputati a periodi sbagliati.",
      "Uno scostamento non grave non blocca il documento: la soglia storicamente applicata è di 150 euro per ciascun istituto e gestione, comprensivi di accessori.",
    ],
    guida: "durc-irregolare-impresa-edile",
    silo: "imprese",
  },
  {
    slug: "cosa-contiene-il-versamento-alla-cassa-edile",
    question: "Cosa contiene il versamento mensile alla Cassa Edile?",
    answer:
      "Due componenti di natura diversa: l'accantonamento per ferie, permessi e gratifica natalizia, che è retribuzione del lavoratore anticipata alla Cassa; e la contribuzione vera e propria per le prestazioni — anzianità professionale, assistenza, formazione — che è costo dell'esercizio. Confonderle è l'errore contabile più comune del settore.",
    detail: [
      "L'accantonamento non va sommato alla retribuzione lorda come se fosse un onere ulteriore: è una parte della retribuzione che invece di transitare in busta paga transita dalla Cassa. Chi lo tratta come costo aggiuntivo sovrastima il costo orario; chi lo ignora lo sottostima.",
      "Le aliquote non sono uniformi sul territorio: ogni Cassa territoriale ha le proprie, definite dalla contrattazione integrativa provinciale. Il costo orario va quindi calcolato sulla Cassa di riferimento dei propri cantieri.",
      "La denuncia mensile è anche il dato di partenza della verifica di congruità e concorre al rilascio del DURC: un arretrato verso la Cassa blocca gli incassi pubblici esattamente come un debito INPS.",
    ],
    guida: "cassa-edile-come-funziona",
    silo: "imprese",
  },
  {
    slug: "come-si-calcola-la-congruita-della-manodopera",
    question: "Come si calcola la congruità della manodopera?",
    answer:
      "Si moltiplica il valore dell'opera per la percentuale minima di incidenza prevista per quella categoria di lavori dal D.M. 143/2021, e si confronta il risultato con il costo del lavoro denunciato alle Casse Edili per quel cantiere. Per la nuova edilizia civile il riferimento è il 14,28%.",
    detail: [
      "La verifica si applica ai lavori pubblici di qualunque importo e ai lavori privati di valore complessivo pari o superiore a 70.000 euro. La soglia guarda l'opera, non il singolo affidamento: frazionare i contratti non fa scendere sotto.",
      "Il calcolo considera anche la manodopera denunciata dai subaffidatari, ma solo se le denunce sono riferite a quel cantiere. Ore regolarmente denunciate e non attribuite producono uno scostamento a carico dell'impresa affidataria.",
      "Il 14,28% non è universale: le altre categorie hanno percentuali proprie, da leggere nell'allegato al decreto. Applicare un valore unico a lavorazioni diverse è uno degli errori più frequenti.",
    ],
    guida: "congruita-manodopera-durc",
    silo: "imprese",
  },
  {
    slug: "il-capocantiere-puo-dare-ordini-al-subappaltatore",
    question: "Il mio capocantiere può dare ordini alla squadra del subappaltatore?",
    answer:
      "Deve coordinare le attività ai fini della sicurezza, ed è obbligato a farlo. Ma non deve dirigere il lavoro: cosa fa quel lavoratore, come e in che ordine lo decide il preposto del subappaltatore. È la distinzione da cui dipende se l'appalto è genuino o è fornitura di manodopera.",
    detail: [
      "In verifica la qualificazione si ricostruisce sentendo i lavoratori e guardando chi impartiva le direttive quotidiane. Se il contratto dice una cosa e il cantiere ne dice un'altra, prevale il cantiere.",
      "Gli altri indici che pesano: corrispettivo determinato a ore anziché sulla lavorazione, oggetto contrattuale generico, assenza di un preposto del subappaltatore, nessun rischio economico in capo all'affidatario.",
      "Il rischio non è solo sanzionatorio: il lavoratore interposto può chiedere la costituzione del rapporto di lavoro in capo all'utilizzatore, con l'anzianità maturata.",
    ],
    guida: "appalto-non-genuino-distacco-somministrazione",
    silo: "imprese",
  },
  {
    slug: "la-riduzione-contributiva-edile-va-richiesta",
    question: "La riduzione contributiva dell'edilizia si applica da sola?",
    answer:
      "No, e questo è il punto: va richiesta con istanza telematica. La riduzione prevista dall'art. 29 del D.L. 244/1995 per gli operai a tempo pieno delle imprese edili non viene riconosciuta d'ufficio. Molte imprese non ne beneficiano semplicemente perché nessuno l'ha mai chiesta.",
    detail: [
      "Si applica agli operai occupati a tempo pieno: impiegati, quadri e operai a tempo parziale ne sono esclusi. La misura è confermata di anno in anno con decreto e il valore storicamente applicato si colloca attorno all'11,50%.",
      "Le condizioni sono cumulative: regolarità contributiva attestata dal DURC, rispetto degli accordi collettivi nazionali e territoriali, assenza di provvedimenti che precludano i benefici. Un periodo di irregolarità fa decadere il beneficio per quel periodo, con recupero.",
      "L'effetto va oltre il risparmio immediato: incide sul costo orario pieno e quindi sui preventivi. Chi la ottiene e chi non la ottiene non ha la stessa struttura di costo, a parità di tutto il resto.",
    ],
    guida: "assunzioni-agevolazioni-contributive-edilizia",
    silo: "imprese",
  },
  {
    slug: "quanto-vale-l-anticipazione-del-prezzo-negli-appalti",
    question: "Quanto vale l'anticipazione del prezzo in un appalto pubblico?",
    answer:
      "Il codice dei contratti la prevede nella misura del 20% del valore del contratto, da erogare dopo l'avvio dell'esecuzione. Non è un ricavo aggiuntivo ma un anticipo, recuperato con trattenute proporzionali sui successivi stati di avanzamento: sposta la cassa nel momento in cui serve.",
    detail: [
      "L'erogazione è subordinata alla costituzione di una garanzia fideiussoria di importo pari all'anticipazione maggiorata degli interessi, che si riduce progressivamente con il recupero. Il premio è un costo da mettere a preventivo.",
      "L'effetto meno considerato è sul plafond: la fideiussione consuma capacità di affidamento presso l'istituto, e con più appalti in corso può mancare la garanzia per la gara successiva.",
      "Agisce esattamente dove l'esposizione è massima, cioè prima che il cantiere abbia prodotto qualcosa di fatturabile: è la leva di cassa più rilevante della commessa pubblica.",
    ],
    guida: "anticipazione-e-revisione-prezzi",
    silo: "imprese",
  },
  {
    slug: "cosa-serve-per-ottenere-l-attestazione-soa",
    question: "Cosa serve per ottenere l'attestazione SOA?",
    answer:
      "Requisiti tecnici, dimostrati con i certificati di esecuzione lavori rilasciati dalle stazioni appaltanti, e requisiti economico-finanziari, che si leggono nei bilanci depositati: cifra d'affari in lavori, adeguata attrezzatura tecnica, adeguato organico medio annuo e patrimonio netto. Dalla terza classifica serve anche la certificazione di qualità.",
    detail: [
      "I requisiti economici si misurano su un arco pluriennale: un esercizio debole non si compensa a ridosso della domanda. Chi vuole salire di classifica deve lavorarci diversi esercizi prima, con scelte coerenti sulla valutazione delle commesse e sulla distribuzione degli utili.",
      "Il parametro che più spesso blocca il salto è il costo del personale: un ricorso elevato al subappalto lo comprime rispetto alla cifra d'affari, e il requisito dell'organico medio annuo ne risente.",
      "Attenzione alle operazioni straordinarie: una scissione che trasferisce il capannone a un'immobiliare riduce il patrimonio netto dell'operativa, che è un requisito. Va dimensionata verificando prima l'impatto sulle classifiche possedute.",
    ],
    guida: "attestazione-soa-requisiti-economici",
    silo: "imprese",
  },
  {
    slug: "cosa-succede-se-firmo-il-registro-senza-riserva",
    question: "Cosa succede se firmo il registro di contabilità senza riserva?",
    answer:
      "Il documento si intende accettato senza contestazioni per quanto vi è riportato. È l'atto con cui si perdono più diritti economici negli appalti pubblici, spesso per distrazione: chi firma in cantiere sta compiendo un atto con effetti economici diretti, non un adempimento amministrativo.",
    detail: [
      "Scrivere «con riserva» non basta: la riserva va poi esplicata nei termini previsti, indicando le ragioni, i fatti che la giustificano e la quantificazione della pretesa. Una riserva non esplicata o non quantificata può risultare inefficace.",
      "Per quantificare servono i numeri del controllo di gestione: costo orario pieno delle squadre ferme, costo orario dei mezzi, maggiori oneri di allestimento prolungato. Un'impresa che non conosce il proprio costo orario non riesce a formulare una riserva difendibile.",
      "Una riserva iscritta non è però un ricavo: concorre alla valutazione della commessa solo per la quota di cui esista ragionevole certezza di riconoscimento, tipicamente dopo una proposta di accordo bonario.",
    ],
    guida: "riserve-e-contabilita-lavori-pubblici",
    silo: "imprese",
  },
  {
    slug: "meglio-consorzio-o-ati",
    question: "Per una gara conviene di più il consorzio o l'ATI?",
    answer:
      "Dipende dall'orizzonte. Se la collaborazione è per un lavoro, l'ATI costa zero e si scioglie da sola. Se è per un modo di lavorare, il consorzio è l'unico che accumula qualcosa nel tempo: è un soggetto autonomo che mantiene i requisiti maturati e si ripresenta alla gara successiva.",
    detail: [
      "Il consorzio ha partita IVA e bilancio propri: assume il lavoro, fattura alla stazione appaltante e ribalta ai consorziati esecutori, che fatturano a lui. L'ATI non è un soggetto: è un mandato collettivo, e ciascuna impresa resta autonoma anche fiscalmente.",
      "Il consorzio stabile può utilizzare i requisiti maturati dalle consorziate secondo le regole di cumulo previste: è la ragione principale per cui viene costituito. Richiede però struttura comune reale e durata non inferiore a cinque anni.",
      "Un vincolo da coordinare: il consorzio indica in gara le consorziate per le quali concorre, e quelle imprese non possono presentare offerta autonoma per la stessa procedura.",
    ],
    guida: "consorzi-ati-fiscalita",
    silo: "imprese",
  },
  {
    slug: "perche-non-ottengo-piu-una-garanzia-provvisoria",
    question: "Perché non riesco più a ottenere una garanzia provvisoria?",
    answer:
      "Quasi sempre per esaurimento del plafond, non per un problema di merito. Le garanzie in essere sulle commesse in corso — definitive e sull'anticipazione — occupano capacità presso banche e compagnie, e anche le provvisorie delle gare non vinte pesano finché non vengono svincolate.",
    detail: [
      "Il plafond è una risorsa scarsa da allocare come la cassa. Va conosciuto — quanto è il massimale presso ciascun istituto e quanto ne è occupato — prima di decidere a quante gare presentarsi contemporaneamente.",
      "Si libera presidiando gli svincoli progressivi della garanzia definitiva, che sono un diritto ma vanno richiesti, e la riduzione della fideiussione sull'anticipazione man mano che viene recuperata sui SAL.",
      "Si amplia con gli stessi documenti che migliorano il rating: bilanci ordinati, margine per commessa, cassa prospettica. Ma va negoziato quando i numeri sono buoni, non quando serve.",
    ],
    guida: "garanzie-e-polizze-appalto",
    silo: "imprese",
  },
  {
    slug: "gli-immobili-costruiti-per-la-vendita-si-ammortizzano",
    question: "Gli immobili costruiti per la vendita si ammortizzano?",
    answer:
      "No: sono beni merce e stanno tra le rimanenze, non tra le immobilizzazioni. L'ammortamento riguarda i beni strumentali destinati a essere utilizzati durevolmente nell'attività, non quelli destinati allo scambio. Il costo si recupera con il ricavo della vendita, non con quote annuali.",
    detail: [
      "Nel periodo di costruzione i costi vengono capitalizzati nel valore delle rimanenze: costo dell'area, oneri di urbanizzazione, progettazione, costruzione e — al ricorrere delle condizioni — gli interessi passivi sui finanziamenti dell'iniziativa.",
      "Le spese di commercializzazione non si capitalizzano: provvigioni, pubblicità e costi di vendita sono costi dell'esercizio in cui vengono sostenuti.",
      "Se l'immobile viene poi destinato stabilmente alla locazione cambia natura: esce dalle rimanenze ed entra tra le immobilizzazioni. È un cambio di destinazione che va deliberato e documentato, non deciso di fatto.",
    ],
    guida: "operazione-immobiliare-dal-terreno-alla-vendita",
    silo: "patrimonio",
  },
  {
    slug: "posso-incassare-acconti-senza-fideiussione",
    question: "Posso incassare acconti sugli immobili da costruire senza fideiussione?",
    answer:
      "No, non validamente. Il D.lgs. 122/2005 obbliga il costruttore a procurare e consegnare all'acquirente una fideiussione di importo corrispondente alle somme riscosse e da riscuotere prima del trasferimento. La mancanza rende il contratto nullo, e la nullità può essere fatta valere dall'acquirente.",
    detail: [
      "L'impegno fideiussorio complessivo va negoziato con gli istituti prima di aprire le vendite: senza plafond sufficiente i preliminari non si possono stipulare validamente, e il rischio si manifesta proprio quando il mercato gira.",
      "Alla stipula dell'atto definitivo va poi consegnata la polizza indennitaria decennale a copertura di rovina e gravi difetti. Il premio va nel costo dell'iniziativa e riscontato sugli esercizi di copertura.",
      "Sul piano finanziario, degli acconti incassati una parte è IVA da versare e non è liquidità dell'impresa: il piano di cassa va costruito sull'imponibile, non sul lordo.",
    ],
    guida: "vendita-su-carta-acconti-garanzie",
    silo: "patrimonio",
  },
  {
    slug: "la-permuta-terreno-appartamenti-e-senza-imposte",
    question: "La permuta terreno contro appartamenti è un'operazione senza imposte?",
    answer:
      "No. Fiscalmente sono due cessioni autonome, non una compensazione che si annulla: il corrispettivo di ciascuna è costituito dal valore del bene ricevuto in cambio. Gli obblighi maturano al momento di ciascun trasferimento, anche se tra le parti non gira denaro.",
    detail: [
      "Il disallineamento dei tempi è il punto critico: la cessione dell'area avviene alla stipula, quella delle unità anni dopo. Gli oneri del primo atto maturano subito, su un'operazione che non ha portato liquidità a nessuno dei due.",
      "La variabile che cambia tutto è la qualità soggettiva di chi cede l'area: un privato è fuori campo IVA e sconta le imposte d'atto, un'impresa entra nel campo IVA con il regime che le compete.",
      "Il piano di cassa dell'iniziativa va costruito solo sulle unità che verranno effettivamente vendute: quelle destinate alla permuta sono già state pagate con l'area e non genereranno incassi.",
    ],
    guida: "permuta-terreno-appartamenti",
    silo: "patrimonio",
  },
  {
    slug: "posso-capitalizzare-gli-interessi-passivi-sull-iniziativa",
    question: "Posso capitalizzare gli interessi passivi su un'iniziativa immobiliare?",
    answer:
      "Al ricorrere delle condizioni sì, ma solo quelli riferibili a finanziamenti effettivamente contratti per quell'iniziativa e solo per il periodo di costruzione. Con l'ultimazione il presupposto cessa: gli oneri finanziari successivi sono costi dell'esercizio e non vanno più nel valore delle rimanenze.",
    detail: [
      "Continuare a capitalizzarli su un'iniziativa ultimata ma invenduta è l'errore che fa più danni: gonfia il valore dell'attivo e rinvia una perdita che, quando emerge, emerge tutta insieme.",
      "Le rimanenze si valutano al minore tra il costo e il valore di realizzazione desumibile dal mercato, al netto dei costi ancora da sostenere e di quelli di commercializzazione. Se il mercato si è mosso, la svalutazione va rilevata subito.",
      "L'indicatore che anticipa il problema è semplice: l'invenduto per unità con la sua anzianità. Chi lo guarda mensilmente svaluta gradualmente e spiega; chi lo scopre a dicembre svaluta tutto insieme.",
    ],
    guida: "operazione-immobiliare-dal-terreno-alla-vendita",
    silo: "patrimonio",
  },
  {
    slug: "cosa-sopravvive-alla-cancellazione-della-societa",
    question: "Dopo la liquidazione della società i debiti si estinguono?",
    answer:
      "No. L'art. 2495 del codice civile consente ai creditori insoddisfatti di agire verso i soci fino a concorrenza delle somme riscosse in base al bilancio finale, e verso i liquidatori se il mancato pagamento è dipeso da loro colpa. La cancellazione chiude la società, non le obbligazioni.",
    detail: [
      "In edilizia il tema è più pesante che altrove: le opere consegnate rispondono di vizi e gravi difetti secondo termini che decorrono anche dalla scoperta, e possono attivarsi molti anni dopo la chiusura dell'attività.",
      "Restano in essere anche le garanzie rilasciate — definitive fino al collaudo, decennale postuma per dieci anni — e le posizioni fiscali e contributive delle annualità ancora accertabili.",
      "La scelta prudente è accantonare per le passività potenziali nel bilancio finale invece di distribuire l'intero attivo: è la distribuzione integrale che rende aggredibili soci e liquidatore.",
    ],
    guida: "liquidazione-societa-edile",
    silo: "patrimonio",
  },
];

export const getFaq = (slug: string) => faqEntries.find((f) => f.slug === slug);
