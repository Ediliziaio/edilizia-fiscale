import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "garanzie-e-polizze-appalto",
  title: "Garanzie e polizze negli appalti: quanto costano e quanto plafond consumano",
  excerpt:
    "Provvisoria, definitiva, anticipazione, CAR, decennale postuma: ogni garanzia ha un costo, una durata e un effetto sulle linee di credito. Come si mettono a preventivo e perché il plafond va gestito a livello di portafoglio, non di singola gara.",
  category: "Appalti",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-brand-dark",
  keywords: [
    "garanzia provvisoria definitiva appalto",
    "polizza car costruzione",
    "polizza decennale postuma",
    "fideiussione appalto costo",
    "plafond fideiussorio impresa edile",
    "riduzione garanzia certificazione qualità",
  ],
  intro:
    "Negli appalti pubblici le garanzie non sono un adempimento: sono un costo e un consumo di capacità finanziaria. Provvisoria in gara, definitiva alla firma, fideiussione sull'anticipazione, polizza CAR durante i lavori, decennale postuma dopo. Ognuna ha un premio, una durata e occupa plafond che poi non c'è per la gara successiva.",
};

export const seo = {
  seoTitle: "Garanzie e Polizze negli Appalti: Costi e Plafond",
  metaDescription:
    "Provvisoria, definitiva, anticipazione, CAR e decennale postuma: costo, durata e consumo di linee di credito. Come si mettono a preventivo.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Le garanzie tipiche: provvisoria a corredo dell'offerta, definitiva alla stipula, fideiussoria sull'anticipazione del prezzo, polizza di assicurazione dei lavori (CAR) durante l'esecuzione, polizza indennitaria decennale per le opere che la richiedono. Il costo: un premio commisurato a importo garantito, durata e merito creditizio dell'impresa. L'effetto nascosto: ogni garanzia consuma capacità di affidamento presso l'istituto, e il plafond è unico per tutte le gare. Le riduzioni: le certificazioni di qualità e ambientali riducono l'importo delle garanzie richieste." },

    { type: "h2", text: "La sequenza delle garanzie in una commessa pubblica", id: "sequenza" },
    { type: "p", text: "Conviene vederle in ordine cronologico, perché è così che si presentano e perché è così che consumano cassa e plafond." },
    { type: "table", headers: ["Momento", "Garanzia", "A cosa serve", "Durata"], rows: [
      ["Presentazione dell'offerta", "Garanzia provvisoria", "Copre la mancata sottoscrizione del contratto per fatto dell'aggiudicatario", "Fino all'aggiudicazione; svincolata per i non aggiudicatari"],
      ["Stipula del contratto", "Garanzia definitiva", "Copre l'inadempimento degli obblighi contrattuali", "Fino al collaudo, con svincoli progressivi"],
      ["Erogazione dell'anticipazione", "Fideiussione sull'anticipazione", "Copre la restituzione dell'anticipo", "Fino al recupero integrale, con riduzione progressiva"],
      ["Durante l'esecuzione", "Polizza CAR", "Danni all'opera e responsabilità civile verso terzi in cantiere", "Per tutta la durata dei lavori"],
      ["Dopo il collaudo", "Polizza indennitaria decennale", "Rovina e gravi difetti dell'opera, dove richiesta", "Dieci anni dall'ultimazione"],
    ] },
    { type: "p", text: "La riga sulla garanzia definitiva contiene un elemento che vale denaro e che si trascura: gli svincoli progressivi. La garanzia si riduce man mano che l'esecuzione avanza, e la riduzione va richiesta e ottenuta. Un'impresa che non presidia gli svincoli tiene occupato plafond per importi ormai eccedenti, per mesi." },
    { type: "p", text: "La polizza decennale postuma merita una nota a parte perché è quella con l'orizzonte più lungo e l'impatto più difficile da percepire. Copre la rovina e i gravi difetti dell'opera per dieci anni dall'ultimazione: significa che una commessa chiusa continua a generare un costo assicurativo e una posizione aperta molto dopo che il margine è stato incassato e distribuito." },

    { type: "h2", text: "Le riduzioni: perché le certificazioni si ripagano", id: "riduzioni" },
    { type: "p", text: "Il codice prevede riduzioni dell'importo delle garanzie in favore degli operatori economici in possesso di determinate certificazioni: sistema di qualità, sistemi di gestione ambientale, e altre attestazioni previste. Le riduzioni sono cumulabili entro i limiti stabiliti." },
    { type: "p", text: "È il punto in cui una spesa che l'impresa percepisce come burocratica — mantenere una certificazione — si traduce in un risparmio misurabile. Una riduzione sull'importo garantito significa un premio più basso su ogni garanzia rilasciata, e su un'impresa che partecipa regolarmente a gare l'effetto annuo può coprire una parte significativa del costo di mantenimento della certificazione." },
    { type: "p", text: "A questo si somma l'effetto sulla qualificazione, descritto nella guida sull'attestazione SOA: dalla terza classifica in su la certificazione di qualità è comunque richiesta. Le due esigenze convergono, e vale la pena valutarle insieme invece che come due spese separate." },

    { type: "figure", slot: "garanzie-e-polizze-appalto-1", alt: "Documenti di garanzia fideiussoria e polizza assicurativa di cantiere", caption: "Ogni garanzia ha un premio e occupa plafond: il conto va fatto a livello di portafoglio." },

    { type: "h2", text: "Il vincolo che nessuno mette a budget: il plafond", id: "plafond" },
    { type: "p", text: "Il costo del premio è visibile e finisce a bilancio. L'effetto meno visibile, e più limitante, è il consumo di capacità di affidamento. Banche e compagnie assicurano un'impresa entro un massimale complessivo, determinato in funzione dei suoi numeri e delle sue garanzie: ogni fideiussione rilasciata riduce quello che resta." },
    { type: "p", text: "La conseguenza operativa è che il plafond è una risorsa scarsa da allocare, esattamente come la cassa. Un'impresa con tre appalti in corso, ciascuno con garanzia definitiva e fideiussione sull'anticipazione, può trovarsi impossibilitata a presentare la garanzia provvisoria per la gara che avrebbe voluto vincere. Non per mancanza di lavoro o di merito, ma per esaurimento del plafond." },
    { type: "p", text: "Governarlo richiede tre cose. La prima è conoscerlo: sapere qual è il massimale complessivo presso ciascun istituto e quanto ne è occupato in ogni momento. La seconda è liberarlo: presidiare gli svincoli progressivi della garanzia definitiva e la riduzione della fideiussione sull'anticipazione man mano che viene recuperata. La terza è ampliarlo: il plafond dipende dai numeri dell'impresa, e migliora con gli stessi documenti che migliorano il rating — bilanci ordinati, margine per commessa, cassa prospettica." },
    { type: "p", text: "È il punto in cui questa guida si collega a quella sui flussi di cassa e sul rapporto con le banche: le garanzie non si negoziano quando servono, si negoziano quando i numeri sono buoni e non serve nulla." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Codice dei contratti pubblici", ref: "D.lgs. 36/2023 — garanzia provvisoria", principle: "L'offerta è corredata da una garanzia, denominata garanzia provvisoria, a copertura della mancata sottoscrizione del contratto dopo l'aggiudicazione per fatto dell'affidatario.", impact: "È il primo consumo di plafond, e avviene prima di sapere se si vincerà: va considerato nella scelta di quante gare presentare insieme." },
      { court: "Codice dei contratti pubblici", ref: "D.lgs. 36/2023 — garanzia definitiva", principle: "L'appaltatore costituisce a garanzia dell'adempimento delle obbligazioni contrattuali una garanzia definitiva, con svincolo progressivo in ragione dell'avanzamento dell'esecuzione.", impact: "Lo svincolo progressivo è un diritto ma va richiesto: chi non lo presidia tiene occupato plafond per importi già liberabili." },
      { court: "Codice dei contratti pubblici", ref: "D.lgs. 36/2023 — riduzioni", principle: "L'importo delle garanzie è ridotto per gli operatori economici in possesso delle certificazioni e attestazioni previste, con cumulabilità entro i limiti stabiliti.", impact: "Le certificazioni si ripagano anche qui: premio più basso su ogni garanzia rilasciata." },
    ] },

    { type: "h2", text: "Il trattamento contabile e fiscale", id: "contabile" },
    { type: "p", text: "I premi delle garanzie e delle polizze sono costi inerenti e deducibili secondo il principio di competenza. La questione rilevante, come per i costi della sicurezza, non è la deducibilità ma la corretta imputazione temporale e per commessa." },
    { type: "p", text: "Sul piano della competenza: un premio pagato in via anticipata per una polizza che copre un arco pluriennale va ripartito sugli esercizi di competenza, con la rilevazione dei risconti. È il caso tipico della polizza decennale postuma, il cui premio viene corrisposto in prossimità dell'ultimazione ma la cui copertura si estende per dieci anni." },
    { type: "p", text: "Sul piano dell'imputazione a commessa: i premi delle garanzie riferite a uno specifico appalto sono costi diretti di quella commessa e vanno attribuiti, come il costo finanziario dell'immobilizzo. Lasciarli nelle spese generali produce lo stesso effetto distorsivo già visto altrove: le commesse pubbliche, che ne assorbono molte, sembrano più redditizie di quanto siano." },
    { type: "p", text: "Va infine ricordato che le garanzie rilasciate sono impegni da indicare nella nota integrativa, tra i conti d'ordine e le informazioni sugli impegni e le garanzie non risultanti dallo stato patrimoniale. È un'informazione che la banca legge e che concorre a formare il giudizio sull'esposizione complessiva dell'impresa." },

    { type: "figure", slot: "garanzie-e-polizze-appalto-2", alt: "Prospetto di monitoraggio dei plafond fideiussori per istituto e per commessa", caption: "Il plafond è una risorsa scarsa: va monitorato per istituto e liberato con gli svincoli." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa che partecipa a tre gare nello stesso trimestre, per importi di 900.000, 1.400.000 e 2.100.000 euro. Presenta le tre garanzie provvisorie, che nel frattempo occupano plafond pur senza esito. Ne vince due." },
    { type: "p", text: "Alla stipula scattano le due garanzie definitive; su entrambi gli appalti l'impresa chiede l'anticipazione del prezzo, e servono le relative fideiussioni. Nel giro di poche settimane il plafond disponibile si è ridotto in misura sostanziale, e per la gara successiva — quella che l'imprenditore considerava la più interessante dell'anno — la garanzia provvisoria non è più rilasciabile." },
    { type: "p", text: "Le leve praticabili sono tre e vanno usate insieme. Presidiare gli svincoli progressivi delle garanzie definitive sui due appalti in corso, liberando plafond man mano che l'esecuzione avanza. Verificare la riduzione della fideiussione sull'anticipazione a ogni recupero sui SAL. E, dal lato strutturale, presentare agli istituti un dossier con margine per commessa e cassa prospettica per rinegoziare il massimale complessivo." },
    { type: "p", text: "La terza è quella che risolve davvero, ma è anche quella che richiede più tempo e che va avviata prima di averne bisogno. È lo stesso principio della protezione patrimoniale: gli strumenti si costruiscono quando l'azienda è in salute, non quando servono." },
    { type: "note", text: "L'errore da non fare: presentare più gare contemporaneamente senza verificare il plafond residuo. Le garanzie provvisorie occupano capacità anche sulle gare che non si vincono, e il conto si presenta esattamente quando arriva l'occasione buona. Lo scenario è illustrativo: massimali e condizioni dipendono dagli istituti e dai numeri dell'impresa." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quali garanzie servono in un appalto pubblico?", a: "In sequenza: provvisoria a corredo dell'offerta, definitiva alla stipula, fideiussione sull'anticipazione se richiesta, polizza di assicurazione dei lavori durante l'esecuzione e, per le opere che la prevedono, polizza indennitaria decennale dopo il collaudo." },
      { q: "Quanto costano?", a: "Il premio è commisurato all'importo garantito, alla durata e al merito creditizio dell'impresa. Il costo visibile è quello; quello meno visibile è il consumo di plafond presso l'istituto, che limita la partecipazione alle gare successive." },
      { q: "Cos'è lo svincolo progressivo?", a: "La riduzione della garanzia definitiva man mano che l'esecuzione avanza. È previsto dalla disciplina ma va richiesto e ottenuto: un'impresa che non lo presidia tiene occupato plafond per importi già liberabili, per mesi." },
      { q: "Le certificazioni riducono davvero le garanzie?", a: "Sì: il codice prevede riduzioni dell'importo garantito per gli operatori in possesso delle certificazioni previste, cumulabili entro i limiti stabiliti. Su un'impresa che partecipa regolarmente a gare il risparmio annuo può coprire buona parte del costo di mantenimento." },
      { q: "Perché non riesco più a ottenere una garanzia provvisoria?", a: "Quasi sempre per esaurimento del plafond, non per un problema di merito. Le garanzie in essere sulle commesse in corso — definitive e sull'anticipazione — occupano capacità, e anche le provvisorie delle gare non vinte pesano finché non vengono svincolate." },
      { q: "Il premio della decennale postuma quando si deduce?", a: "Per competenza. Un premio corrisposto in prossimità dell'ultimazione per una copertura decennale va ripartito sugli esercizi di competenza con la rilevazione dei risconti, non spesato integralmente nell'anno del pagamento." },
      { q: "Le garanzie vanno imputate alla commessa?", a: "Sì, quelle riferite a uno specifico appalto sono costi diretti di quella commessa. Lasciarle nelle spese generali fa sembrare le commesse pubbliche più redditizie di quanto siano, perché sono proprio quelle che ne assorbono di più." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai più appalti in corso e non sai con precisione quanto plafond ti resta, la prossima gara la deciderà l'istituto e non tu. Mandaci l'elenco delle garanzie in essere per istituto e importo, insieme agli ultimi bilanci: ricostruiamo il plafond occupato, verifichiamo gli svincoli ottenibili e prepariamo il dossier per rinegoziare il massimale. Per il contesto leggi le guide su anticipazione e revisione prezzi, flussi di cassa e attestazione SOA." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026: percentuali, riduzioni e obblighi vanno verificati sulla disciplina vigente e sui documenti della singola procedura." },
  ],
};
