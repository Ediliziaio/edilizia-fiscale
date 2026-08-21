import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "crediti-fiscali-incagliati-edilizia",
  title: "Crediti fiscali incagliati: cosa fare quando il cassetto è bloccato",
  excerpt:
    "Lavori eseguiti, crediti acquisiti, liquidità ferma. Sospensione dell'utilizzo, sequestro, capienza fiscale insufficiente: le tre cause del blocco, le strade percorribili e come si evita di ripetere l'errore.",
  category: "Fisco",
  date: "Agosto 2026",
  readTime: "11 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink via-trust-dark to-trust",
  keywords: [
    "crediti incagliati superbonus",
    "cassetto fiscale bloccato",
    "sequestro crediti d'imposta edilizia",
    "capienza fiscale crediti bonus",
    "cessione crediti edilizi",
    "sospensione utilizzo crediti f24",
  ],
  intro:
    "Un credito incagliato è un credito che l'impresa possiede ma non può usare. Le cause sono tre e vanno distinte prima di scegliere qualunque strada: sospensione amministrativa dell'utilizzo, sequestro disposto in sede penale, o semplice incapienza fiscale rispetto al piano di utilizzo. Le prime due sono questioni difensive; la terza è un problema di pianificazione finanziaria.",
};

export const seo = {
  seoTitle: "Crediti Fiscali Incagliati: Cosa Fare Davvero",
  metaDescription:
    "Sospensione, sequestro o incapienza: le tre cause del blocco dei crediti edilizi e come si costruisce un piano di utilizzo sostenibile.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Le tre cause: sospensione amministrativa dell'utilizzo in attesa di controlli, sequestro disposto in sede penale, incapienza fiscale rispetto al piano di utilizzo. Le tre risposte: percorso documentale e amministrativo, istanza di dissequestro con dimostrazione dell'estraneità, ripianificazione del piano di utilizzo e valutazione della cessione. Il presupposto comune: un fascicolo di intervento completo. La prevenzione: verificare la capienza prima di acquisire il credito, non dopo." },

    { type: "h2", text: "Distinguere la causa prima di scegliere la strada", id: "cause" },
    { type: "p", text: "L'espressione crediti incagliati raggruppa situazioni molto diverse tra loro, e la prima cosa da fare è capire in quale ci si trova. Il rimedio, i tempi e persino l'interlocutore cambiano completamente." },
    { type: "table", headers: ["Causa del blocco", "Chi decide", "Strada da percorrere"], rows: [
      ["Sospensione dell'utilizzo in attesa di controlli", "Amministrazione finanziaria", "Percorso documentale: produzione del fascicolo dell'intervento"],
      ["Atto di recupero già notificato", "Amministrazione finanziaria", "Difesa nel merito: adesione o ricorso, con eventuale sospensione"],
      ["Sequestro preventivo in sede penale", "Autorità giudiziaria", "Istanza di dissequestro, dimostrando l'estraneità della posizione"],
      ["Capienza fiscale insufficiente", "Nessuno: è un dato di fatto", "Ripianificazione del piano di utilizzo, valutazione della cessione"],
      ["Cessionario che non acquista più", "Mercato", "Ricerca di controparti, prezzo, valutazione dell'utilizzo diretto"],
    ] },
    { type: "p", text: "La quarta riga è quella che riguarda più imprese di quante ne parlino. Un'impresa che ha acquisito crediti tramite sconto in fattura per un importo che eccede largamente il proprio debito fiscale annuo non ha un credito bloccato da nessuno: ha un credito che impiegherà molti anni a utilizzare, e nel frattempo ha già pagato materiali e manodopera. È un problema di pianificazione, non di contenzioso." },

    { type: "h2", text: "La capienza fiscale: il calcolo che andava fatto prima", id: "capienza" },
    { type: "p", text: "I crediti da bonus edilizi si utilizzano in compensazione tramite F24, in quote annuali costanti secondo il piano previsto dalla normativa applicabile. La quota annuale non utilizzata per incapienza non si perde necessariamente, ma il suo recupero dipende dalle regole della specifica agevolazione: in molti casi la quota non compensata nell'anno non è riportabile agli anni successivi." },
    { type: "p", text: "Il calcolo della capienza va fatto sul debito fiscale e contributivo annuo compensabile: IVA a debito, ritenute, contributi, imposte sui redditi, IRAP. Un'impresa edile con quattro milioni di ricavi ha una capienza annua che si misura in decine di migliaia di euro, non in centinaia: acquisire crediti per importi molto superiori significa costruire un magazzino fiscale che si smaltisce in un decennio." },
    { type: "p", text: "Vanno inoltre considerati i vincoli generali alla compensazione: il tetto annuo previsto dalla normativa, il divieto di compensazione in presenza di ruoli scaduti oltre la soglia di legge, e — per chi opera in appalti soggetti all'[art. 17-bis](/guide/ritenute-appalti-17-bis) — il divieto di compensare le ritenute dei lavoratori impiegati in quegli appalti. Ognuno di questi riduce la capienza effettiva rispetto a quella teorica." },

    { type: "figure", slot: "crediti-fiscali-incagliati-edilizia-1", alt: "Prospetto di piano di utilizzo dei crediti fiscali per anno", caption: "La capienza fiscale annua è un numero: va calcolato prima di acquisire i crediti, non dopo." },

    { type: "h2", text: "Sospensione dell'utilizzo: il percorso documentale", id: "sospensione" },
    { type: "p", text: "Quando l'utilizzo è sospeso in attesa di controlli, il credito resta iscritto ma non è compensabile. Il percorso è amministrativo e documentale: si tratta di produrre, in modo ordinato e completo, la documentazione che dimostra la spettanza del credito e la corretta esecuzione dell'intervento." },
    { type: "p", text: "La qualità della risposta conta più della sua rapidità. Un fascicolo consegnato in modo disordinato, con documenti mancanti o incoerenti tra loro nelle date, allunga i tempi e alimenta i dubbi. Un fascicolo ordinato cronologicamente, con un indice e una nota che spiega la sequenza dell'intervento, chiude la questione molto più in fretta." },
    { type: "p", text: "Il contenuto è quello del fascicolo di commessa: contratto e computo metrico, titolo edilizio e comunicazioni, SAL e asseverazioni, fatture e bonifici parlanti, documentazione fotografica datata, documenti di trasporto dei materiali, denunce del personale impiegato. Se manca una di queste voci, va ricostruita ora, perché la sua assenza pesa." },

    { type: "h2", text: "Sequestro penale: dimostrare l'estraneità", id: "sequestro" },
    { type: "p", text: "Il sequestro preventivo dei crediti disposto in sede penale nasce quasi sempre da condotte contestate a soggetti che si collocano a monte della catena: il beneficiario che ha dichiarato lavori mai eseguiti, il tecnico che ha asseverato interventi inesistenti, l'intermediario che ha costruito la catena delle cessioni." },
    { type: "p", text: "L'impresa o il cessionario che si trova il credito sequestrato deve percorrere la strada dell'istanza di dissequestro, dimostrando la propria estraneità rispetto alla condotta contestata e la buona fede nell'acquisizione. Gli elementi che pesano sono documentali: le verifiche svolte prima dell'acquisto, la richiesta e l'esame del fascicolo dell'intervento, la congruità del prezzo pagato, la tracciabilità dei flussi finanziari." },
    { type: "p", text: "In questi casi è essenziale il coordinamento tra difesa tributaria e difesa penale: le due vicende procedono su binari distinti ma si influenzano, e argomenti spesi in una sede possono avere effetti nell'altra. Affrontarle separatamente, con professionisti che non si parlano, è un errore ricorrente." },

    { type: "caselaw", title: "Riferimenti utili", items: [
      { court: "D.lgs. 87/2024", ref: "Riforma del sistema sanzionatorio", principle: "Le nozioni di credito non spettante e credito inesistente sono state ridefinite, con misure sanzionatorie differenziate a seconda della categoria.", impact: "La qualificazione incide anche sui presupposti dei provvedimenti cautelari: va contestata subito." },
      { court: "D.P.R. 633/1972", ref: "Art. 30", principle: "Il rimborso dell'eccedenza IVA detraibile può essere richiesto, al ricorrere dei presupposti, anche in via infrannuale con cadenza trimestrale.", impact: "Per un'impresa con crediti bloccati, il rimborso IVA è spesso la leva di liquidità più rapida ancora disponibile." },
      { court: "Disciplina della compensazione", principle: "La compensazione è preclusa in presenza di ruoli scaduti oltre la soglia di legge e incontra il tetto annuo previsto dalla normativa vigente.", impact: "La capienza effettiva è quasi sempre inferiore a quella teorica: il piano di utilizzo va costruito sui vincoli reali." },
    ] },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa con ricavi per 3,6 milioni che ha acquisito, tramite sconto in fattura, crediti per 1,4 milioni su interventi realizzati in due esercizi. La capienza fiscale annua compensabile, calcolata su IVA a debito, ritenute, contributi e imposte, è di circa 150.000 euro." },
    { type: "p", text: "Nessun credito è sospeso e nessun atto è stato notificato: il problema è puramente aritmetico. Con quel livello di capienza, e considerando i vincoli sulla compensazione, l'impresa impiegherebbe circa un decennio a utilizzare i crediti, avendo però già pagato per intero materiali, manodopera e subappalti. È un caso di crediti incagliati senza alcun contenzioso." },
    { type: "p", text: "Le leve disponibili sono tre, e vanno valutate insieme. La cessione di una parte dei crediti a un prezzo di mercato, che sconta il valore nominale ma libera liquidità immediata. La richiesta di rimborso IVA infrannuale, che non riguarda i crediti da bonus ma libera liquidità da un'altra fonte. La ripianificazione degli investimenti e degli affidamenti, coerente con un orizzonte di utilizzo lungo. Ciò che non è disponibile è il tempo: quella liquidità è già uscita." },
    { type: "note", text: "L'errore da non fare: acquisire crediti tramite sconto in fattura senza aver calcolato prima la capienza fiscale annua. È l'errore che ha messo in difficoltà molte imprese edili strutturalmente sane, e non si corregge dopo. Lo scenario è illustrativo: valori e tempi dipendono dalla situazione concreta." },

    { type: "figure", slot: "crediti-fiscali-incagliati-edilizia-2", alt: "Documentazione di intervento ordinata cronologicamente in faldoni", caption: "Un fascicolo ordinato con indice chiude i controlli molto più in fretta di uno completo ma disordinato." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Perché non riesco a usare i crediti che ho in cassetto?", a: "Le cause sono tre e vanno distinte: sospensione amministrativa dell'utilizzo in attesa di controlli, sequestro disposto in sede penale, oppure semplice incapienza fiscale rispetto alla quota annuale utilizzabile. Le prime due richiedono una difesa, la terza una ripianificazione finanziaria." },
      { q: "Come si calcola la capienza fiscale annua?", a: "Sommando i debiti fiscali e contributivi compensabili nell'anno: IVA a debito, ritenute, contributi, imposte sui redditi, IRAP. Da questo va poi sottratto ciò che non è compensabile per effetto dei vincoli, come il divieto in presenza di ruoli scaduti o le ritenute negli appalti soggetti all'art. 17-bis." },
      { q: "La quota annuale non utilizzata si perde?", a: "Dipende dalla disciplina della specifica agevolazione: in molti casi la quota non compensata nell'anno non è riportabile agli anni successivi. È la ragione per cui il piano di utilizzo va costruito prima dell'acquisizione dei crediti e non ricalcolato ogni anno a consuntivo." },
      { q: "Conviene cedere i crediti a sconto?", a: "È una valutazione finanziaria: il prezzo di cessione va confrontato con il costo del denaro per il periodo di attesa e con il rischio di sopravvenienze. Su orizzonti di utilizzo molto lunghi la cessione a sconto è spesso preferibile all'immobilizzo, ma il conto va fatto sui numeri concreti." },
      { q: "I miei crediti sono sotto sequestro: posso recuperarli?", a: "La strada è l'istanza di dissequestro, dimostrando l'estraneità rispetto alla condotta contestata a monte e la diligenza usata nell'acquisizione. Gli elementi che pesano sono documentali: verifiche svolte prima dell'acquisto, esame del fascicolo, congruità del prezzo, tracciabilità dei flussi." },
      { q: "Posso compensare i crediti se ho cartelle scadute?", a: "No oltre la soglia prevista: la compensazione è preclusa in presenza di ruoli scaduti sopra il limite di legge. È un vincolo che riduce la capienza effettiva e che va verificato prima di costruire qualunque piano di utilizzo." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai crediti fermi, la prima cosa da capire è se il problema è un blocco o un'aritmetica. Mandaci l'estratto del cassetto fiscale, l'elenco dei crediti per anno di formazione e gli ultimi due modelli dichiarativi: calcoliamo la capienza reale, verifichiamo l'esistenza di provvedimenti e costruiamo un piano di utilizzo o una strategia di cessione. Per il contesto leggi la guida sugli accertamenti Superbonus." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
