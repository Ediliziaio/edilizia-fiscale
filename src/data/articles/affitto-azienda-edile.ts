import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "affitto-azienda-edile",
  title: "Affitto d'azienda in edilizia: passaggio graduale, prova prima della vendita, risanamento",
  excerpt:
    "Chi affitta continua a possedere e incassa un canone; chi prende in affitto esercita senza comprare. È lo strumento del passaggio generazionale graduale e della prova prima della cessione, ma sulle qualificazioni e sui debiti richiede verifiche precise.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-brand-dark to-brand",
  keywords: [
    "affitto azienda edile",
    "affitto ramo azienda costruzioni",
    "art 2562 codice civile affitto azienda",
    "ammortamenti affitto azienda deroga",
    "affitto azienda passaggio generazionale",
    "affitto azienda debiti pregressi",
  ],
  intro:
    "Nell'affitto d'azienda il titolare conserva la proprietà del complesso e ne concede il godimento a un altro soggetto, che lo esercita in nome proprio pagando un canone. In edilizia serve a tre cose: accompagnare un passaggio generazionale senza cedere subito, far provare l'azienda a chi la comprerà, e mantenere in vita l'attività quando la società titolare è in difficoltà.",
};

export const seo = {
  seoTitle: "Affitto d'Azienda in Edilizia: Quando e Come",
  metaDescription:
    "Passaggio graduale, prova prima della vendita o risanamento: come funziona l'affitto d'azienda, con le verifiche su qualificazioni e debiti.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — La disciplina: art. 2562 del codice civile, che rinvia alle norme sull'usufrutto d'azienda. L'affittuario deve esercitare l'azienda sotto la ditta che la contraddistingue, non modificarne la destinazione e conservare l'efficienza dell'organizzazione e degli impianti. Gli ammortamenti: salvo diversa pattuizione competono all'affittuario, che deve mantenere l'efficienza dei beni; la deroga contrattuale è possibile e va scritta. Il divieto di concorrenza: opera a carico del concedente per la durata del contratto. I punti da verificare in edilizia: sorte delle qualificazioni, subentro nei contratti d'appalto in corso, rapporti di lavoro e responsabilità per i debiti." },

    { type: "h2", text: "Le tre situazioni in cui serve davvero", id: "situazioni" },
    { type: "p", text: "L'affitto d'azienda non è uno strumento generico: risponde a esigenze precise, e fuori da quelle è una complicazione. In edilizia le tre situazioni ricorrenti sono queste." },
    { type: "table", headers: ["Situazione", "Perché l'affitto funziona", "Cosa va presidiato"], rows: [
      ["Passaggio generazionale graduale", "I figli gestiscono e si misurano con l'impresa mentre il fondatore resta proprietario", "Governance, durata, opzione di acquisto, criteri di riscatto"],
      ["Prova prima della cessione", "L'acquirente verifica l'azienda operando, il venditore incassa un canone nel frattempo", "Prezzo di esercizio dell'opzione, obblighi di conservazione, uscita se non si compra"],
      ["Continuità in situazione di crisi", "L'attività prosegue in un soggetto diverso mentre la titolare affronta il risanamento", "Congruità del canone, revocatoria, posizione dei creditori, qualificazioni"],
    ] },
    { type: "p", text: "La terza riga richiede la massima attenzione ed è quella in cui l'affitto viene usato peggio. Un affitto d'azienda a canone incongruo, verso una società riconducibile agli stessi soci, stipulato quando i creditori sono già alla porta, è un'operazione fragile: espone all'azione revocatoria e, in certe condizioni, ad altre valutazioni. Non significa che l'affitto in crisi sia vietato — è previsto e utilizzato anche nei percorsi di risanamento — significa che va fatto con canone di mercato, ragioni documentate e nel quadro giusto." },
    { type: "p", text: "La prima riga è invece l'uso più interessante e meno praticato. In un passaggio generazionale l'affitto consente ai figli di guidare l'impresa per un periodo definito, con il fondatore che resta proprietario e osserva. Se funziona si procede con il trasferimento; se non funziona, il contratto scade e l'azienda torna. È una prova reversibile che una donazione di quote non consente." },

    { type: "h2", text: "Cosa prevede la disciplina", id: "disciplina" },
    { type: "p", text: "L'art. 2562 del codice civile disciplina l'affitto d'azienda rinviando alle norme sull'usufrutto. Da lì discendono gli obblighi principali dell'affittuario: esercitare l'azienda sotto la ditta che la contraddistingue, non modificarne la destinazione, conservare l'efficienza dell'organizzazione e degli impianti e le normali dotazioni di scorte." },
    { type: "p", text: "L'obbligo di conservare l'efficienza è quello con più conseguenze pratiche. Significa che l'affittuario non può lasciare deperire i mezzi, non può disperdere l'organizzazione, deve mantenere l'azienda in condizione di funzionare. Alla scadenza la differenza tra le consistenze di inventario all'inizio e alla fine viene regolata in denaro sulla base dei valori correnti." },
    { type: "p", text: "Sul piano degli ammortamenti la regola è che, in assenza di diversa pattuizione, competono all'affittuario, coerentemente con il suo obbligo di conservazione. Le parti possono derogare, e la deroga va scritta nel contratto: è uno degli aspetti che vanno decisi consapevolmente perché incide sul risultato di entrambe." },
    { type: "p", text: "Opera inoltre il divieto di concorrenza a carico del concedente per la durata del contratto, per la stessa ragione per cui opera nella cessione: chi concede l'azienda non può poi svolgere un'attività che ne svii la clientela." },

    { type: "figure", slot: "affitto-azienda-edile-1", alt: "Padre e figlio davanti alla sede di un'impresa edile", caption: "Nel passaggio generazionale l'affitto è una prova reversibile: se non funziona, il contratto scade." },

    { type: "h2", text: "Le verifiche specifiche dell'edilizia", id: "verifiche" },
    { type: "p", text: "Qui sta la differenza tra un'operazione che funziona e una che blocca l'attività. Tre elementi vanno verificati prima di stipulare, e nessuno dei tre è scontato." },
    { type: "p", text: "Il primo sono le qualificazioni. L'attestazione SOA è riferita al soggetto giuridico e non segue automaticamente l'azienda affittata. Esistono meccanismi per il riconoscimento dei requisiti in caso di operazioni straordinarie, soggetti a condizioni e verifiche: vanno esaminati prima, perché un affitto che fa perdere l'accesso ai lavori pubblici svuota l'operazione del suo oggetto." },
    { type: "p", text: "Il secondo sono i contratti d'appalto in corso. Il subentro dell'affittuario nei contratti in esecuzione va verificato contratto per contratto, e negli appalti pubblici richiede il rispetto delle procedure previste per le modifiche soggettive. Non è un passaggio automatico e ha tempi propri: programmare l'affitto a metà di un cantiere pubblico senza averlo istruito è un errore che ferma i lavori." },
    { type: "p", text: "Il terzo sono i rapporti di lavoro. Al trasferimento d'azienda, e l'affitto lo è, si applica la disciplina di continuazione dei rapporti con conservazione dei diritti dei lavoratori e responsabilità solidale nei limiti previsti. In un'impresa edile, dove il costo del lavoro è la voce principale, la quantificazione di quanto passa e con quali oneri va fatta prima." },
    { type: "p", text: "A questi si aggiunge il tema dei debiti. Nell'affitto la responsabilità dell'affittuario per i debiti pregressi non segue le stesse regole della cessione: la disciplina dell'art. 2560 sui debiti risultanti dalle scritture riguarda il trasferimento della proprietà. Resta però la disciplina specifica in materia tributaria, con l'opportunità della richiesta del certificato sui carichi pendenti. È una materia in cui la verifica preventiva vale molto più di qualunque clausola." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Codice civile", ref: "Art. 2562", principle: "Le disposizioni sull'usufrutto d'azienda si applicano anche nel caso di affitto dell'azienda.", impact: "Da qui discendono gli obblighi dell'affittuario: esercizio sotto la ditta, conservazione dell'efficienza, mantenimento delle scorte." },
      { court: "Codice civile", ref: "Art. 2561", principle: "L'usufruttuario dell'azienda deve esercitarla sotto la ditta che la contraddistingue, non può modificarne la destinazione e deve conservare l'efficienza dell'organizzazione e degli impianti e le normali dotazioni di scorte; la differenza tra le consistenze d'inventario all'inizio e al termine è regolata in denaro sulla base dei valori correnti.", impact: "Il conguaglio finale sulle consistenze è un elemento economico dell'operazione: va stimato all'inizio, non scoperto alla scadenza." },
      { court: "Codice civile", ref: "Art. 2112", principle: "In caso di trasferimento d'azienda il rapporto di lavoro continua con il cessionario e il lavoratore conserva tutti i diritti che ne derivano; cedente e cessionario sono obbligati in solido per i crediti del lavoratore al tempo del trasferimento.", impact: "Vale anche per l'affitto: i rapporti proseguono, e in edilizia il costo del lavoro è la voce che va quantificata per prima." },
    ] },

    { type: "h2", text: "Il canone e gli aspetti fiscali", id: "canone" },
    { type: "p", text: "Il canone di affitto d'azienda costituisce per il concedente un componente positivo di reddito e per l'affittuario un costo deducibile per competenza. La qualificazione del reddito in capo al concedente dipende dalla sua natura soggettiva e dalla circostanza che l'affitto riguardi l'unica azienda o un ramo." },
    { type: "p", text: "Il punto su cui insistiamo è la congruità del canone, specialmente quando le parti sono correlate — come accade nel passaggio generazionale e nelle operazioni di gruppo. Un canone determinato senza riferimenti oggettivi è contestabile in entrambe le direzioni, e la difesa si costruisce con una perizia o con riferimenti di mercato documentati, non con una giustificazione a posteriori." },
    { type: "p", text: "Sul piano dell'IVA, l'affitto d'azienda è una prestazione di servizi soggetta a imposta secondo le regole ordinarie: è una differenza rispetto alla cessione d'azienda, che è invece esclusa dal campo di applicazione dell'IVA. Va tenuto presente perché incide sui flussi e sull'imposta di registro applicabile." },
    { type: "p", text: "Va infine considerato il tema degli ammortamenti già richiamato: la loro attribuzione all'affittuario o al concedente, secondo quanto pattuito, sposta componenti negative da un soggetto all'altro e va decisa guardando alla situazione fiscale di entrambi, non per prassi." },

    { type: "figure", slot: "affitto-azienda-edile-2", alt: "Contratto di affitto d'azienda con inventario dei beni e perizia sul canone", caption: "Inventario iniziale e canone documentato: due elementi che alla scadenza evitano il contenzioso." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa edile con ricavi per 3,2 milioni, titolare di 63 anni, un figlio che lavora in azienda da otto anni come responsabile tecnico e due figli estranei all'attività. Il fondatore vuole verificare che il figlio sia in grado di guidare l'impresa prima di trasferirgliela, e non vuole creare squilibri con gli altri due." },
    { type: "p", text: "L'operazione scelta è l'affitto dell'azienda a una S.r.l. costituita dal figlio, per una durata di cinque anni, con canone determinato in perizia e opzione di acquisto a un prezzo definito con criteri fissati nel contratto. Il fondatore resta proprietario dell'azienda e percepisce il canone, che gli garantisce un reddito e che è un elemento di equilibrio verso gli altri due figli." },
    { type: "p", text: "Le verifiche preventive hanno riguardato tre punti. La sorte dell'attestazione SOA, che ha richiesto un'istruttoria specifica sui meccanismi di riconoscimento dei requisiti in capo alla società affittuaria. Il subentro nei due appalti pubblici in corso, con le procedure previste per le modifiche soggettive. La continuazione dei rapporti di lavoro dei dodici dipendenti, con la quantificazione degli oneri e la responsabilità solidale." },
    { type: "p", text: "Il contratto ha inoltre disciplinato due elementi economici che alla scadenza sarebbero diventati contenzioso: l'attribuzione degli ammortamenti, lasciata all'affittuario coerentemente con il suo obbligo di conservazione, e l'inventario iniziale con i criteri di regolazione del conguaglio finale sulle consistenze." },
    { type: "note", text: "L'errore da non fare: stipulare l'affitto senza aver verificato prima la sorte delle qualificazioni e il subentro nei contratti pubblici in corso. Un'azienda edile che perde l'accesso alle gare durante l'affitto vale molto meno di quella che il fondatore ha concesso. Lo scenario è illustrativo: verifiche e procedure vanno condotte sul caso concreto." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Che differenza c'è tra affitto e cessione d'azienda?", a: "Nell'affitto il concedente resta proprietario e percepisce un canone; l'affittuario esercita l'azienda in nome proprio per la durata pattuita e poi la restituisce. Nella cessione la proprietà passa definitivamente. L'affitto è reversibile, la cessione no: è la ragione per cui funziona come prova." },
      { q: "Chi fa gli ammortamenti?", a: "In assenza di diversa pattuizione competono all'affittuario, coerentemente con il suo obbligo di conservare l'efficienza dei beni. Le parti possono derogare, e la deroga va scritta nel contratto: sposta componenti negative tra i soggetti e va decisa guardando alla situazione di entrambi." },
      { q: "L'attestazione SOA passa all'affittuario?", a: "Non automaticamente: è riferita al soggetto giuridico. Esistono meccanismi di riconoscimento dei requisiti nelle operazioni straordinarie, soggetti a condizioni e verifiche. Vanno istruiti prima della stipula, perché un affitto che fa perdere l'accesso alle gare pubbliche svuota l'operazione." },
      { q: "Cosa succede ai dipendenti?", a: "I rapporti proseguono con l'affittuario e i lavoratori conservano i diritti maturati, con responsabilità solidale nei limiti previsti. In un'impresa edile, dove il costo del lavoro è la voce principale, la quantificazione degli oneri che passano va fatta prima della stipula." },
      { q: "L'affittuario risponde dei debiti pregressi?", a: "Le regole non sono le stesse della cessione: la disciplina sui debiti risultanti dalle scritture riguarda il trasferimento della proprietà. Restano però le regole specifiche in materia tributaria, e la richiesta del certificato sui carichi pendenti è una verifica che conviene fare comunque." },
      { q: "Posso affittare l'azienda a una società dei miei figli?", a: "Sì, ed è uno degli usi più efficaci nel passaggio generazionale. Va però curata la congruità del canone, perché le parti sono correlate: serve una perizia o riferimenti di mercato documentati, non una determinazione fatta in famiglia." },
      { q: "L'affitto d'azienda è soggetto a IVA?", a: "Sì: è una prestazione di servizi soggetta a imposta secondo le regole ordinarie. È una differenza rispetto alla cessione d'azienda, che è esclusa dal campo IVA, e incide sui flussi e sul trattamento ai fini dell'imposta di registro." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se stai valutando un affitto d'azienda — per il passaggio ai figli, per far provare l'impresa a chi la comprerà o per mantenere la continuità in una fase difficile — le tre verifiche da fare prima sono qualificazioni, contratti in corso e rapporti di lavoro. Mandaci visura, attestazione SOA, elenco dei contratti in esecuzione e organico dalla pagina contatti. Per il contesto leggi le guide su passaggio generazionale, cessione d'azienda e attestazione SOA." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa vigente." },
  ],
};
