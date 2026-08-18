import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "costi-deducibili-impresa-edile",
  title: "Costi deducibili dell'impresa edile: mezzi, attrezzature, trasferte e magazzino",
  excerpt:
    "Cosa si deduce e con quali tempi: ammortamento dei mezzi d'opera, noli, veicoli, trasferte, rimanenze di cantiere. Il principio di inerenza applicato a un'attività dove la documentazione si produce sul campo.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "11 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-navy to-navy-light",
  keywords: [
    "costi deducibili impresa edile",
    "ammortamento mezzi d'opera",
    "deducibilità auto impresa costruzioni",
    "rimanenze di cantiere",
    "trasferte operai deducibilità",
    "noli a caldo e a freddo",
  ],
  intro:
    "In edilizia la deducibilità dei costi non si gioca sul principio — l'inerenza è quella di sempre — ma sulla documentazione. Il cantiere è un luogo dove entrano materiali, mezzi, persone e subappaltatori, e dove la carta si produce sul campo, spesso male. Le contestazioni più frequenti riguardano subappalti senza contratto, rimanenze mai inventariate e mezzi non ribaltati sulle commesse.",
};

export const seo = {
  seoTitle: "Costi Deducibili dell'Impresa Edile: Guida Pratica",
  metaDescription:
    "Ammortamento dei mezzi d'opera, noli, veicoli, trasferte e rimanenze di cantiere: cosa si deduce, con quali tempi e con quale documentazione a supporto.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il principio: inerenza e competenza, con la documentazione a reggere entrambe. I mezzi d'opera: ammortizzabili secondo i coefficienti previsti, con il costo orario da ribaltare sulle commesse. I veicoli: autovetture al 20% con tetto sul costo (art. 164 TUIR), veicoli strumentali per natura deducibili per intero. I subappalti: contratto scritto, fattura e pagamento tracciato, altrimenti la contestazione è di operazione inesistente. Le rimanenze: il materiale non posato al 31 dicembre è rimanenza, non costo." },

    { type: "h2", text: "Il principio di inerenza applicato al cantiere", id: "inerenza" },
    { type: "p", text: "Sono deducibili i costi riferibili all'attività da cui derivano ricavi. La formula è semplice; l'applicazione in edilizia lo è meno, perché il collegamento tra il costo e la commessa deve poter essere dimostrato, e la prova si costruisce durante i lavori, non in sede di verifica." },
    { type: "p", text: "Il criterio che consigliamo è pratico: ogni costo deve poter essere ricondotto a una commessa attraverso un documento. Una fattura di materiali con l'indicazione del cantiere di destinazione, un rapportino di nolo firmato, un contratto di subappalto con il computo allegato, un rapportino ore per la manodopera. Non è burocrazia: è la stessa documentazione che serve al controllo di gestione, ed è per questo che le due esigenze si sostengono a vicenda." },
    { type: "p", text: "Il secondo criterio è la competenza. In un'attività per commessa il costo va imputato all'esercizio in cui matura la relativa prestazione, e il materiale acquistato ma non ancora impiegato non è un costo dell'anno: è una rimanenza. È il punto su cui si concentra la maggior parte delle rettifiche nelle imprese edili di piccola e media dimensione." },

    { type: "h2", text: "Mezzi d'opera e attrezzature", id: "mezzi" },
    { type: "p", text: "Escavatori, gru, betoniere, ponteggi, casseforme e attrezzature di cantiere sono beni strumentali ammortizzabili secondo i coefficienti previsti per il settore. La deducibilità dell'ammortamento non è normalmente in discussione; quello che spesso manca è il collegamento con le commesse." },
    { type: "p", text: "Un mezzo di proprietà ha un costo orario che comprende ammortamento, manutenzione ordinaria e straordinaria, assicurazione, bollo, carburante e la quota di fermo macchina. Se questo costo non viene addebitato alle commesse che utilizzano il mezzo, resta nelle spese generali: il cantiere che lo impiega appare più redditizio del reale e tutti gli altri appaiono meno redditizi. Fiscalmente non cambia nulla; gestionalmente cambia tutto." },
    { type: "p", text: "Sulle piccole attrezzature vale la regola della deduzione integrale nell'esercizio per i beni di costo unitario non superiore alla soglia prevista. È una semplificazione utile, purché non diventi il modo per spesare come minuto materiale beni che compongono un'attrezzatura unitaria di valore superiore." },

    { type: "h2", text: "Noli a caldo e a freddo", id: "noli" },
    { type: "p", text: "Il nolo a freddo — la macchina senza operatore — è una locazione di bene mobile: il canone è deducibile per competenza e l'IVA segue le regole ordinarie. Il nolo a caldo, con operatore del noleggiante, richiede più attenzione perché la qualificazione del rapporto può slittare verso l'appalto." },
    { type: "p", text: "La distinzione ha effetti concreti. Se l'operatore lavora sotto la direzione e a rischio del noleggiante per realizzare un risultato, il rapporto tende a qualificarsi come appalto di servizi, con le conseguenze del caso su regime IVA applicabile e su eventuali responsabilità solidali. Se invece il mezzo e l'operatore sono messi a disposizione dell'impresa utilizzatrice, che ne dirige l'impiego, siamo più vicini alla somministrazione." },
    { type: "p", text: "La regola operativa è scriverlo nel contratto e comportarsi coerentemente in cantiere. Un contratto di nolo a caldo e un cantiere in cui l'operatore riceve ordini dal capocantiere dell'impresa utilizzatrice sono una combinazione che, in verifica, viene riqualificata." },

    { type: "table", headers: ["Voce", "Trattamento", "Documentazione minima"], rows: [
      ["Mezzi d'opera di proprietà", "Ammortamento secondo i coefficienti", "Libro cespiti, rapportini di impiego per il ribaltamento"],
      ["Piccole attrezzature sotto soglia", "Deduzione integrale nell'esercizio", "Fattura, con attenzione a non frazionare beni unitari"],
      ["Nolo a freddo", "Canone deducibile per competenza", "Contratto e rapportino di consegna e riconsegna"],
      ["Nolo a caldo", "Deducibile, ma verificare la qualificazione", "Contratto che definisca direzione e rischio della prestazione"],
      ["Autovetture non assegnate", "20% con tetto sul costo (art. 164 TUIR)", "Libro cespiti, uso aziendale documentabile"],
      ["Autocarri e mezzi strumentali per natura", "Deduzione integrale, IVA detraibile", "Omologazione e uso effettivo coerente"],
      ["Subappalti", "Deducibili per competenza", "Contratto scritto, computo, fattura, pagamento tracciato"],
      ["Materiali non posati al 31/12", "Rimanenza, non costo", "Inventario di cantiere datato e firmato"],
    ] },

    { type: "figure", slot: "costi-deducibili-impresa-edile-1", alt: "Deposito di cantiere con materiali accatastati e inventario", caption: "Il materiale approvvigionato e non posato al 31 dicembre è una rimanenza: va inventariato." },

    { type: "h2", text: "Veicoli: dove passa la linea", id: "veicoli" },
    { type: "p", text: "L'art. 164 del TUIR limita la deducibilità delle autovetture non assegnate al 20%, con un tetto sul costo di acquisto fiscalmente riconosciuto. I veicoli strumentali per natura — autocarri, furgoni, mezzi d'opera realmente impiegati nell'attività — sono invece deducibili integralmente, con IVA detraibile per intero." },
    { type: "p", text: "La qualificazione non dipende dal nome commerciale del modello né dall'omologazione formale presa isolatamente: conta l'uso effettivo. Un pick-up omologato autocarro utilizzato per trasportare attrezzature e personale in cantiere è strumentale; lo stesso veicolo usato prevalentemente per spostamenti personali non regge a un controllo, e la ripresa a tassazione è agevole da motivare." },
    { type: "p", text: "Per i veicoli concessi in uso promiscuo ai dipendenti la disciplina è diversa e più favorevole in termini di deducibilità, a fronte della tassazione di un fringe benefit in capo al dipendente determinato su base convenzionale. Richiede però assegnazione formale documentata e coerenza tra assegnazione e uso reale." },

    { type: "h2", text: "Subappalti: la voce più contestata", id: "subappalti" },
    { type: "p", text: "Il costo del subappalto è deducibile, ma è anche la voce su cui si concentrano le contestazioni più pesanti, perché è quella storicamente usata per creare costi fittizi. La difesa si costruisce con tre documenti: il contratto scritto con il computo delle lavorazioni affidate, la fattura coerente con l'avanzamento, la prova del pagamento tracciato." },
    { type: "p", text: "A questi si aggiungono elementi che pesano molto in sede di verifica: la presenza del subappaltatore nei documenti di cantiere, la notifica preliminare, i badge o i registri di accesso, le denunce in Cassa Edile del personale impiegato. Un subappalto documentato solo da una fattura, senza traccia in cantiere, è la fattispecie che genera i rilievi più difficili da smontare." },
    { type: "p", text: "Va tenuto presente anche il profilo della responsabilità solidale in materia retributiva e contributiva: la verifica della regolarità del subappaltatore non è solo un adempimento formale, è la protezione dell'impresa da obbligazioni di cui non ha il controllo diretto." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa con ricavi per 2,9 milioni. Al 31 dicembre risultano in cantiere materiali approvvigionati e non posati per circa 180.000 euro, mai inventariati e interamente spesati come costo dell'esercizio. Nello stesso anno l'impresa ha dedotto 240.000 euro di subappalti, di cui 60.000 documentati dalla sola fattura, senza contratto né traccia del subappaltatore nei documenti di cantiere." },
    { type: "p", text: "In verifica le due contestazioni hanno natura diversa. La prima è un errore di competenza: i 180.000 euro vanno rilevati come rimanenza, con maggior reddito nell'esercizio e corrispondente minor reddito in quello successivo. È una rettifica di timing, con sanzioni e interessi ma senza contestazione di fittizietà." },
    { type: "p", text: "La seconda è più grave: un costo privo di riscontro documentale espone alla contestazione di operazione inesistente, con effetti sull'indeducibilità del costo, sull'indetraibilità dell'IVA e potenziali profili ulteriori. La differenza tra le due situazioni non sta nella sostanza economica ma nella carta prodotta durante i lavori." },
    { type: "note", text: "L'errore da non fare: rimandare la produzione documentale a fine anno. L'inventario di cantiere si fa il 31 dicembre, il contratto di subappalto si firma prima dell'ingresso in cantiere, il rapportino di nolo si compila il giorno stesso. Ricostruire a posteriori è possibile solo in parte, e si vede. Lo scenario è illustrativo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "I materiali comprati e non ancora posati sono un costo?", a: "No, sono una rimanenza. Il materiale approvvigionato e non incorporato nell'opera al 31 dicembre va inventariato e rilevato tra le rimanenze. È una delle rettifiche più frequenti nelle imprese edili, e produce un effetto a catena su due esercizi." },
      { q: "Posso dedurre integralmente il pick-up aziendale?", a: "Se è omologato come autocarro ed è effettivamente strumentale all'attività — trasporto di attrezzature e personale in cantiere — sì. Se l'uso è prevalentemente personale, la deduzione integrale non regge a un controllo, indipendentemente dall'omologazione formale." },
      { q: "Che differenza c'è tra nolo a caldo e subappalto?", a: "Nel subappalto l'impresa affidataria assume l'esecuzione di una lavorazione a proprio rischio e con propria organizzazione. Nel nolo a caldo viene messo a disposizione un mezzo con operatore. La distinzione si scrive nel contratto ma si dimostra in cantiere: se l'operatore riceve ordini dal capocantiere dell'utilizzatore, la qualificazione cambia." },
      { q: "Come documento un subappalto per non avere contestazioni?", a: "Contratto scritto con il computo delle lavorazioni affidate, fattura coerente con l'avanzamento, pagamento tracciato, e riscontri di cantiere: notifica preliminare, registri di accesso, denunce in Cassa Edile del personale impiegato. La fattura da sola non basta." },
      { q: "Le trasferte degli operai sono deducibili?", a: "Sì, nei limiti previsti dalla normativa e con documentazione che colleghi la trasferta al cantiere. In edilizia va distinto il trasfertista, con un trattamento proprio, dal dipendente in trasferta occasionale: l'inquadramento errato produce effetti sia fiscali sia contributivi." },
      { q: "Le piccole attrezzature si deducono subito?", a: "I beni di costo unitario non superiore alla soglia prevista possono essere dedotti integralmente nell'esercizio. La semplificazione non consente però di frazionare artificialmente un'attrezzatura unitaria di valore superiore in più componenti sotto soglia." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "La maggior parte delle rettifiche su costi in edilizia non nasce da scelte aggressive: nasce da documenti che non sono stati prodotti al momento giusto. Mandaci il bilancio dell'ultimo esercizio e un elenco dei subappalti dell'anno: verifichiamo la tenuta documentale delle voci più esposte e ti indichiamo cosa sistemare prima che lo faccia una verifica. Per il quadro d'insieme leggi la guida alla fiscalità dell'impresa edile." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026." },
  ],
};
