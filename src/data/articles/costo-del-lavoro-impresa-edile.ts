import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "costo-del-lavoro-impresa-edile",
  title: "Costo del lavoro edile: calcolare il costo orario pieno e reggere la congruità",
  excerpt:
    "Il numero da cui dipende ogni preventivo. Come si costruisce il costo orario pieno, perché va diviso per le ore realmente produttive e come si presidia la verifica di congruità della manodopera che incide sul DURC.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "costo orario operaio edile",
    "costo del lavoro impresa edile",
    "congruità manodopera durc",
    "tabelle costo medio orario edilizia",
    "cassa edile costi",
    "incidenza manodopera 14,28%",
  ],
  intro:
    "Il costo orario pieno della manodopera è il numero che entra in ogni preventivo e in ogni consuntivo di commessa: se è sbagliato, tutto il sistema restituisce risultati sbagliati nella stessa misura. Accanto a questo, l'edilizia ha un vincolo che nessun altro settore conosce: la verifica di congruità dell'incidenza della manodopera, che incide direttamente sul DURC e quindi sugli incassi.",
};

export const seo = {
  seoTitle: "Costo del Lavoro Edile: Costo Orario e Congruità",
  metaDescription:
    "Come si calcola il costo orario pieno di un operaio edile, perché va diviso per le ore produttive e come si presidia la congruità della manodopera nel DURC.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il calcolo: costo annuo completo (lordo, contributi, Cassa Edile, TFR, mensilità aggiuntive, DPI, formazione) diviso ore realmente produttive, non ore teoriche di contratto. Il rapporto tipico tra costo orario pieno e paga base si colloca attorno a una volta e mezza. Il riferimento oggettivo: le tabelle ministeriali del costo medio orario per provincia e qualifica. La congruità: D.M. 143/2021, con il 14,28% come riferimento consolidato per la nuova edilizia civile; lo scostamento non giustificato incide sul DURC." },

    { type: "h2", text: "Perché la paga oraria non è il costo orario", id: "paga-vs-costo" },
    { type: "p", text: "Nel preventivo di molte imprese edili la manodopera viene valorizzata a un importo vicino alla paga oraria di contratto, magari maggiorato di una percentuale forfettaria decisa anni fa. È l'errore che più frequentemente trasforma un cantiere apparentemente redditizio in un cantiere che chiude in pareggio." },
    { type: "p", text: "Il costo vero di un'ora di operaio comprende molto più della retribuzione. Sopra il lordo si sommano contributi previdenziali e assicurativi, contribuzione alla Cassa Edile, TFR, tredicesima e quattordicesima. Sotto, il monte ore su cui dividere si riduce per ferie, permessi, festività, malattia media, formazione obbligatoria e giornate di maltempo." },
    { type: "p", text: "L'effetto combinato è che il costo orario pieno si colloca tipicamente attorno a una volta e mezza la paga base. Un'impresa che preventiva sulla paga base non ha un margine più basso: ha un margine teorico che non esiste, e non capirà mai perché i cantieri sembrano andare bene mentre l'esercizio chiude in pareggio." },

    { type: "h2", text: "Il calcolo, voce per voce", id: "calcolo" },
    { type: "table", headers: ["Componente", "Dove agisce", "Effetto"], rows: [
      ["Retribuzione lorda annua", "Numeratore", "Base di partenza"],
      ["Contributi previdenziali e INAIL", "Numeratore", "Incremento rilevante, variabile per qualifica e rischio"],
      ["Contribuzione Cassa Edile", "Numeratore", "Voce specifica del settore, comprende prestazioni e accantonamenti"],
      ["TFR, tredicesima, quattordicesima", "Numeratore", "Incremento ulteriore, spesso trattato come costo di fine anno anziché come costo orario"],
      ["DPI, visite mediche, formazione", "Numeratore", "Voce piccola ma sistematica, quasi sempre dimenticata"],
      ["Ferie, permessi, festività", "Denominatore", "Riducono le ore lavorabili"],
      ["Malattia media e infortuni", "Denominatore", "Vanno stimati su base storica aziendale"],
      ["Maltempo e improduttività di cantiere", "Denominatore", "Spostamenti interni, attese forniture, montaggio attrezzature"],
    ] },
    { type: "p", text: "Il passaggio che quasi nessuno esegue correttamente è il denominatore. Dividere il costo annuo per le ore teoriche del contratto sottostima il costo orario in modo sistematico: tolte tutte le assenze fisiologiche, le ore realmente disponibili sono sensibilmente meno. E su quelle disponibili va poi scontata la quota di improduttività di cantiere." },
    { type: "p", text: "Il riferimento oggettivo per verificare il proprio calcolo esiste: le tabelle del costo medio orario del lavoro per i dipendenti delle imprese edili, rilevate periodicamente con decreto ministeriale su base provinciale e per qualifica. Sono la base che le stazioni appaltanti usano per valutare la congruità delle offerte nelle gare, e non c'è ragione per non usarle anche nei preventivi privati." },

    { type: "figure", slot: "costo-del-lavoro-impresa-edile-1", alt: "Squadra di operai al lavoro in cantiere con attrezzature", caption: "Il costo orario pieno si calcola sulle ore realmente produttive, non su quelle teoriche di contratto." },

    { type: "h2", text: "La congruità della manodopera: il vincolo che vale solo in edilizia", id: "congruita" },
    { type: "p", text: "Il D.M. 143 del 25 giugno 2021 ha dato attuazione al sistema di verifica della congruità dell'incidenza della manodopera nei lavori edili. Il meccanismo confronta il costo del lavoro denunciato in Cassa Edile con percentuali minime riferite al valore complessivo dell'opera, differenziate per categoria di lavorazione. Per la nuova edilizia civile il riferimento consolidato è il 14,28%." },
    { type: "p", text: "La verifica si attiva sui lavori pubblici a prescindere dall'importo e sui lavori privati sopra una soglia di valore. Il calcolo considera la manodopera denunciata dall'impresa affidataria e dalle imprese subaffidatarie: la gestione documentale dei subappalti incide quindi direttamente sul risultato finale." },
    { type: "p", text: "Se la congruità non risulta raggiunta, l'impresa viene invitata a regolarizzare entro un termine. Le strade sono due: dimostrare documentalmente che lo scostamento è giustificato — per esempio per un'elevata incidenza di forniture, per lavorazioni ad alto contenuto di materiale o per manodopera denunciata da subaffidatari — oppure versare la differenza contributiva. In assenza di regolarizzazione la mancata congruità viene segnalata e incide sul rilascio del DURC." },
    { type: "p", text: "L'effetto pratico è quello che l'imprenditore percepisce per primo: senza DURC regolare si bloccano gli incassi dai committenti pubblici e la partecipazione alle gare. Ed è il motivo per cui la congruità va monitorata durante il cantiere, non alla chiusura, quando lo scostamento è ormai maturato per intero e l'unica strada rimasta è il versamento." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Decreto ministeriale", ref: "D.M. n. 143 del 25 giugno 2021", principle: "La congruità dell'incidenza della manodopera si verifica confrontando il costo del lavoro denunciato con percentuali minime riferite al valore dell'opera, differenziate per categoria di lavori.", impact: "Il parametro non è discrezionale: o si raggiunge, o si giustifica documentalmente, o si versa la differenza." },
      { court: "Riferimento di settore", ref: "Nuova edilizia civile: 14,28%", principle: "Per le opere di nuova edilizia civile l'incidenza minima della manodopera sul valore dell'opera è fissata nella percentuale consolidata del 14,28%.", impact: "È la percentuale da tenere sott'occhio durante il cantiere: a fine lavori lo scostamento è già maturato." },
      { court: "Riferimento operativo", ref: "Tabelle ministeriali del costo medio orario in edilizia", principle: "Il costo medio orario del lavoro per i dipendenti delle imprese edili è rilevato periodicamente con decreto, su base provinciale e per qualifica.", impact: "È il termine di paragone oggettivo per verificare il costo orario usato nei preventivi, prima che lo faccia una stazione appaltante." },
    ] },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Operaio qualificato con paga oraria base di riferimento. Il costo annuo aziendale complessivo — comprensivo di contributi, Cassa Edile, TFR, mensilità aggiuntive, DPI e formazione — risulta pari a 46.800 euro. Le ore teoriche annue di contratto sono 2.080. Dividendo si otterrebbe un costo orario di 22,50 euro." },
    { type: "p", text: "Il calcolo corretto riduce il denominatore. Tolte ferie, permessi, festività, malattia media rilevata sul triennio e formazione obbligatoria, le ore lavorabili scendono a circa 1.680. Scontando poi una quota di improduttività di cantiere del 6% per spostamenti interni e attese, le ore realmente produttive risultano circa 1.580. Il costo orario pieno è quindi di circa 29,60 euro." },
    { type: "p", text: "La differenza rispetto al calcolo teorico è di 7,10 euro l'ora, il 32% in più. Su una commessa che impiega 2.400 ore di manodopera, sono oltre 17.000 euro di costo non considerato in preventivo: su un appalto da 260.000 euro, quasi sette punti di margine che svaniscono senza che nessuno se ne accorga." },
    { type: "note", text: "L'errore da non fare: aggiornare il costo orario una volta e poi lasciarlo fermo per anni. Va ricalcolato dopo ogni rinnovo contrattuale e dopo ogni variazione significativa dell'organico o del mix di qualifiche. Lo scenario è illustrativo: i valori vanno determinati sui dati aziendali reali e sulle tabelle provinciali applicabili." },

    { type: "figure", slot: "costo-del-lavoro-impresa-edile-2", alt: "Denuncia Cassa Edile e prospetto di congruità della manodopera", caption: "La congruità si monitora durante il cantiere: a fine lavori resta solo il versamento." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quanto costa davvero un operaio edile all'ora?", a: "Molto più della paga di contratto. Sommando contributi, Cassa Edile, TFR, mensilità aggiuntive, DPI e formazione, e dividendo per le ore realmente produttive anziché per quelle teoriche, il rapporto tra costo orario pieno e paga base si colloca tipicamente attorno a una volta e mezza." },
      { q: "Dove trovo un riferimento oggettivo?", a: "Nelle tabelle del costo medio orario del lavoro per i dipendenti delle imprese edili, rilevate periodicamente con decreto ministeriale su base provinciale e per qualifica. Sono lo stesso parametro usato dalle stazioni appaltanti per valutare la congruità delle offerte in gara." },
      { q: "Come si calcolano le ore realmente produttive?", a: "Si parte dalle ore teoriche annue e si sottraggono ferie, permessi, festività, malattia media rilevata sul dato storico aziendale, formazione obbligatoria e giornate perse per maltempo. Sul risultato si sconta poi una quota di improduttività di cantiere, che va stimata esplicitamente e non nascosta nelle spese generali." },
      { q: "Cosa succede se non raggiungo la congruità?", a: "L'impresa viene invitata a regolarizzare. Può dimostrare documentalmente che lo scostamento è giustificato oppure versare la differenza contributiva. In mancanza, la non congruità viene segnalata e incide sul rilascio del DURC, con effetti immediati su incassi pubblici e partecipazione alle gare." },
      { q: "La manodopera dei subappaltatori conta nella congruità?", a: "Sì: il calcolo considera la manodopera denunciata dall'affidataria e dalle subaffidatarie. È il motivo per cui la gestione documentale dei subappalti va curata durante il cantiere: una denuncia mancante di un subaffidatario si traduce in uno scostamento a carico dell'impresa principale." },
      { q: "Il costo orario va differenziato per qualifica?", a: "Sì, sempre. Operaio comune, qualificato e specializzato hanno costi annui e aliquote di rischio diversi. Usare un costo medio unico su squadre a composizione variabile produce distorsioni sistematiche nel margine delle commesse a maggiore incidenza di manodopera specializzata." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se non hai ricalcolato il costo orario dopo l'ultimo rinnovo contrattuale, è probabile che i preventivi in corso siano costruiti su un numero vecchio. Mandaci il libro unico dell'ultimo esercizio, il prospetto delle qualifiche e i dati delle assenze: ricostruiamo il costo orario pieno per qualifica e lo confrontiamo con quello che stai usando nei preventivi. Per il quadro d'insieme leggi le guide sul controllo di gestione e sul preventivo di commessa." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026." },
  ],
};
