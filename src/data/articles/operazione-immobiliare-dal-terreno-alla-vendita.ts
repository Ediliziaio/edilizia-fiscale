import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "operazione-immobiliare-dal-terreno-alla-vendita",
  title: "Operazione immobiliare: dal terreno alla vendita, come si tiene il conto",
  excerpt:
    "Acquisto dell'area, oneri di urbanizzazione, costi capitalizzabili, interessi passivi, rimanenze e vendita: in un'iniziativa di sviluppo il margine si vede solo alla fine, e nel frattempo il bilancio racconta cose che vanno sapute leggere.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "15 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-brand-dark to-brand",
  keywords: [
    "operazione immobiliare fiscalità",
    "immobili merce rimanenze costruttore",
    "capitalizzazione oneri urbanizzazione",
    "interessi passivi capitalizzabili immobiliare",
    "costruttore venditore iva vendita",
    "iniziativa immobiliare margine",
  ],
  intro:
    "In un'iniziativa di sviluppo l'impresa compra un'area, costruisce e vende: tra il primo esborso e il primo incasso possono passare anni. In quel periodo tutto sta nelle rimanenze, il conto economico dice poco e il margine reale si conosce solo alla fine. Sapere cosa si capitalizza e cosa no è ciò che distingue un bilancio leggibile da uno che sorprende.",
};

export const seo = {
  seoTitle: "Operazione Immobiliare: dal Terreno alla Vendita",
  metaDescription:
    "Costi capitalizzabili, oneri di urbanizzazione, interessi passivi, rimanenze e vendita: come si tiene il conto di un'iniziativa di sviluppo.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Gli immobili costruiti per la vendita sono beni merce: stanno tra le rimanenze, non tra le immobilizzazioni, e non si ammortizzano. Cosa si capitalizza: costo dell'area, oneri di urbanizzazione e contributo di costruzione, progettazione, direzione lavori, costi di costruzione, e — al ricorrere delle condizioni — gli interessi passivi sui finanziamenti dell'iniziativa. Cosa no: i costi di commercializzazione e le spese generali non riferibili. Il ciclo: per anni l'iniziativa vive nello stato patrimoniale; il conto economico mostra il risultato solo quando si vende." },

    { type: "h2", text: "Perché un'iniziativa di sviluppo si legge male", id: "perche" },
    { type: "p", text: "Un'impresa che esegue appalti ha un ciclo comprensibile: lavora, matura ricavi per avanzamento, incassa. Un'impresa che sviluppa in proprio no. Compra un terreno, sostiene costi per anni e non ha ricavi finché non vende. Il conto economico degli esercizi intermedi mostra numeri che, letti da soli, non dicono niente di utile." },
    { type: "p", text: "Il meccanismo contabile che tiene insieme il quadro è quello delle rimanenze. I costi sostenuti per l'iniziativa non transitano a conto economico come perdita: vengono capitalizzati nel valore delle rimanenze, cioè dell'immobile in costruzione. La variazione delle rimanenze compensa i costi dell'esercizio, e il risultato resta prossimo allo zero fino alla vendita." },
    { type: "p", text: "Ne discende la domanda che governa tutta la materia: quali costi entrano legittimamente in quel valore e quali no. Capitalizzare troppo significa gonfiare l'attivo e rinviare perdite; capitalizzare troppo poco significa mostrare perdite che non ci sono. Ed è una scelta che, in un'iniziativa pluriennale, si ripete a ogni chiusura." },

    { type: "figure", slot: "operazione-immobiliare-dal-terreno-alla-vendita-1", alt: "Area edificabile con cartello di cantiere e scavi in corso", caption: "Tra il primo esborso e il primo incasso passano anni: nel frattempo tutto vive nelle rimanenze." },

    { type: "h2", text: "Cosa si capitalizza e cosa no", id: "capitalizzazione" },
    { type: "table", headers: ["Voce", "Capitalizzabile", "Nota"], rows: [
      ["Costo di acquisto dell'area", "Sì", "Comprensivo di imposte indirette non recuperabili e oneri accessori"],
      ["Contributo di costruzione e oneri di urbanizzazione", "Sì", "Sono costi necessari alla realizzazione dell'iniziativa"],
      ["Progettazione, DL, coordinamento sicurezza", "Sì", "Riferibili direttamente all'opera"],
      ["Costi di costruzione: materiali, manodopera, subappalti", "Sì", "Sono il nucleo del valore"],
      ["Costi della sicurezza di cantiere", "Sì", "Costi diretti dell'opera"],
      ["Interessi passivi sui finanziamenti dell'iniziativa", "Sì, al ricorrere delle condizioni", "Per il periodo di costruzione e nei limiti previsti dai principi contabili"],
      ["Spese di commercializzazione, provvigioni, pubblicità", "No", "Costi dell'esercizio in cui si sostengono"],
      ["Spese generali di struttura non riferibili", "No", "Restano costi di periodo"],
      ["Oneri finanziari dopo l'ultimazione", "No", "Cessa il presupposto della capitalizzazione"],
    ] },
    { type: "p", text: "La riga sugli interessi passivi è quella che richiede più attenzione, perché è la più discrezionale e la più controllata. La capitalizzazione degli oneri finanziari è ammessa a condizioni precise: devono essere riferibili a finanziamenti effettivamente contratti per quell'iniziativa e sono capitalizzabili solo per il periodo di costruzione, cessando quando il bene è pronto per la vendita." },
    { type: "p", text: "L'errore tipico è continuare a capitalizzare gli interessi su un'iniziativa ultimata ma invenduta. In quel momento il presupposto è venuto meno: l'immobile è finito e gli oneri finanziari successivi sono costi dell'esercizio. Continuare a capitalizzarli gonfia il valore delle rimanenze e rinvia una perdita che, quando emerge, emerge tutta insieme." },
    { type: "p", text: "L'ultima riga della tabella e questo paragrafo descrivono lo stesso fenomeno visto da due lati, ed è il rischio principale delle iniziative che restano invendute a lungo: il bilancio continua a mostrare un attivo importante mentre il valore recuperabile si allontana." },

    { type: "h2", text: "La svalutazione: quando il valore non si recupera", id: "svalutazione" },
    { type: "p", text: "Le rimanenze si valutano al minore tra il costo e il valore di realizzazione desumibile dall'andamento del mercato. È il principio che impedisce a un'iniziativa in difficoltà di restare a bilancio al costo storico per anni." },
    { type: "p", text: "In un'iniziativa immobiliare l'applicazione richiede una stima del ricavato atteso dalla vendita, al netto dei costi ancora da sostenere per il completamento e dei costi di commercializzazione. Se quel valore risulta inferiore al costo capitalizzato, la differenza va rilevata come svalutazione." },
    { type: "p", text: "È il momento più scomodo del ciclo, e quello che più spesso viene rinviato. Va detto però che rinviarlo non elimina il problema: lo sposta e lo concentra. Un'impresa che svaluta gradualmente man mano che il mercato si muove presenta bilanci comprensibili; una che tiene il costo storico fino alla vendita presenta anni di risultati neutri seguiti da una perdita che nessuno si aspettava — inclusa la banca." },
    { type: "p", text: "Sul piano della valutazione, l'elemento su cui si costruisce la stima è il preventivo dei costi a finire, esattamente come nelle commesse. È lo stesso dato di [controllo di gestione](/guide/controllo-di-gestione-impresa-edile): senza costi a finire aggiornati non si può né valutare la commessa né verificare la recuperabilità del valore delle rimanenze." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Principi contabili nazionali", ref: "OIC 13", principle: "Le rimanenze sono iscritte al minore tra il costo di acquisto o di produzione e il valore di realizzazione desumibile dall'andamento del mercato; il costo di produzione comprende i costi direttamente imputabili e la quota ragionevolmente imputabile di costi indiretti.", impact: "Il costo storico non è un porto sicuro: se il valore recuperabile scende, la svalutazione va rilevata." },
      { court: "Testo unico imposte sui redditi", ref: "Art. 110, comma 1, lett. b)", principle: "Nel costo dei beni si comprendono gli oneri accessori di diretta imputazione, esclusi gli interessi passivi; per i beni materiali e immateriali strumentali si comprendono gli interessi passivi iscritti in bilancio ad aumento del costo, per la quota ragionevolmente imputabile.", impact: "La capitalizzazione degli oneri finanziari segue regole precise: è ammessa a condizioni e per il solo periodo di costruzione." },
      { court: "D.P.R. 633/1972", ref: "Art. 10, n. 8-bis", principle: "Le cessioni di fabbricati abitativi effettuate dalle imprese costruttrici entro cinque anni dall'ultimazione sono imponibili ai fini IVA; oltre tale termine sono esenti, salva l'opzione per l'imposizione manifestata in atto.", impact: "La finestra dei cinque anni governa il regime della vendita: un'iniziativa che resta invenduta cambia trattamento." },
    ] },

    { type: "h2", text: "La vendita: il momento in cui il conto si chiude", id: "vendita" },
    { type: "p", text: "Alla vendita il ricavo si contrappone al costo capitalizzato e il margine dell'intera iniziativa emerge in un colpo solo. È il motivo per cui i bilanci delle imprese di sviluppo hanno un andamento a scalini che nessun indice di bilancio letto anno per anno sa interpretare." },
    { type: "p", text: "Sul regime della cessione vale quanto descritto nella guida dedicata: per le imprese costruttrici la cessione entro cinque anni dall'ultimazione è imponibile ai fini IVA; oltre quel termine è esente, salva l'opzione per l'imposizione. L'esenzione ha però conseguenze sul pro rata e può far scattare la rettifica della detrazione operata sui costi di costruzione." },
    { type: "p", text: "È un punto che va anticipato in fase di pianificazione dell'iniziativa e non scoperto al quinto anno. Un'iniziativa che si prevede possa restare invenduta oltre la finestra richiede una valutazione preventiva del carico che si genererebbe: in alcuni casi conviene rivedere la strategia di prezzo, in altri valutare destinazioni alternative come la locazione, che a sua volta cambia la qualificazione del bene." },
    { type: "p", text: "Quest'ultimo punto merita una precisazione, perché è una decisione con effetti profondi. Un immobile costruito per la vendita e poi destinato stabilmente alla locazione cambia natura: da bene merce diventa bene patrimoniale o strumentale, esce dalle rimanenze ed entra tra le immobilizzazioni, con tutte le conseguenze del caso. Non è un'operazione contabile: è un cambio di destinazione che va deliberato e documentato." },

    { type: "figure", slot: "operazione-immobiliare-dal-terreno-alla-vendita-2", alt: "Prospetto di iniziativa immobiliare con costi capitalizzati e ricavato atteso", caption: "Il valore delle rimanenze regge finché il ricavato atteso lo copre: serve la stima dei costi a finire." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Iniziativa di sviluppo: acquisto di un'area per 600.000 euro, contributo di costruzione e oneri per 140.000, progettazione e direzione lavori per 90.000, costi di costruzione previsti per 1.850.000. Il finanziamento bancario dedicato genera interessi per circa 45.000 euro l'anno durante i tre anni di realizzazione. Il ricavato di vendita atteso è di 3.400.000 euro." },
    { type: "p", text: "Nei tre esercizi di costruzione i costi vengono capitalizzati nel valore delle rimanenze, insieme agli interessi passivi riferibili al periodo. Il conto economico di quegli anni mostra la variazione delle rimanenze che compensa i costi: il risultato resta prossimo allo zero, e chi legge il bilancio senza conoscere l'iniziativa non capisce nulla dell'impresa." },
    { type: "p", text: "Al termine del terzo anno il valore capitalizzato ammonta a circa 2.815.000 euro. Il margine atteso è quindi di circa 585.000 euro, che emergerà nell'esercizio in cui gli immobili verranno venduti — o si distribuirà su più esercizi se le vendite saranno scaglionate, come accade quasi sempre." },
    { type: "p", text: "Se al quarto anno risultano invenduti tre appartamenti su dodici, cambiano due cose. La prima: gli interessi passivi successivi all'ultimazione non sono più capitalizzabili e diventano costi dell'esercizio. La seconda: il valore delle rimanenze residue va confrontato con il ricavato atteso da quelle unità, al netto dei costi di commercializzazione. Se il mercato si è mosso, la svalutazione va rilevata subito — non alla vendita." },
    { type: "note", text: "L'errore da non fare: continuare a capitalizzare gli interessi passivi su un'iniziativa ultimata ma invenduta. Il presupposto è cessato con l'ultimazione: da lì sono costi dell'esercizio, e capitalizzarli rinvia una perdita che poi emerge tutta insieme. Lo scenario è illustrativo: valori e condizioni vanno verificati sull'iniziativa concreta." },

    { type: "h2", text: "Cosa presidiare, in pratica", id: "presidio" },
    { type: "ol", items: [
      "Un prospetto per iniziativa con i costi capitalizzati per natura, aggiornato a ogni chiusura: è il documento che regge la voce di bilancio più importante",
      "La stima dei costi a finire, rideterminata almeno trimestralmente: serve alla valutazione delle rimanenze come serve alle commesse",
      "Il ricavato atteso aggiornato sull'andamento reale del mercato, non sul business plan iniziale",
      "La data di ultimazione, che governa insieme la cessazione della capitalizzazione degli interessi e la finestra dei cinque anni ai fini IVA",
      "La separazione netta tra costi capitalizzabili e costi di commercializzazione, che vanno a conto economico",
      "Il monitoraggio dell'invenduto per unità, con l'anzianità di ciascuna: è l'indicatore che anticipa la svalutazione",
    ] },
    { type: "p", text: "Il sesto punto è quello che nella nostra esperienza fa la differenza tra un'impresa che governa un'iniziativa e una che la subisce. L'invenduto per unità con la sua anzianità è un dato semplice da produrre e dice, mesi prima del bilancio, se la valutazione regge. Chi lo guarda mensilmente svaluta gradualmente e spiega; chi lo scopre a dicembre svaluta tutto insieme e non spiega niente." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Gli immobili costruiti per la vendita si ammortizzano?", a: "No: sono beni merce e stanno tra le rimanenze, non tra le immobilizzazioni. L'ammortamento riguarda i beni strumentali destinati a essere utilizzati durevolmente nell'attività, non quelli destinati allo scambio." },
      { q: "Gli oneri di urbanizzazione si capitalizzano?", a: "Sì: contributo di costruzione e oneri di urbanizzazione sono costi necessari alla realizzazione dell'iniziativa e concorrono al costo di produzione delle rimanenze, insieme al costo dell'area, alla progettazione e ai costi di costruzione." },
      { q: "Posso capitalizzare gli interessi passivi?", a: "Al ricorrere delle condizioni sì, ma solo quelli riferibili a finanziamenti effettivamente contratti per quell'iniziativa e solo per il periodo di costruzione. Con l'ultimazione il presupposto cessa: gli interessi successivi sono costi dell'esercizio." },
      { q: "E le spese di commercializzazione?", a: "Non si capitalizzano. Provvigioni, pubblicità e costi di vendita sono costi dell'esercizio in cui vengono sostenuti, e vanno tenuti distinti nel prospetto dell'iniziativa: confonderli con i costi di produzione gonfia il valore delle rimanenze." },
      { q: "Quando devo svalutare?", a: "Quando il valore di realizzazione desumibile dal mercato, al netto dei costi ancora da sostenere e di quelli di commercializzazione, scende sotto il costo capitalizzato. La verifica va fatta a ogni chiusura, non alla vendita: rinviarla concentra la perdita invece di eliminarla." },
      { q: "Cosa cambia dopo cinque anni dall'ultimazione?", a: "Il regime IVA della cessione: entro cinque anni la vendita da parte dell'impresa costruttrice è imponibile, oltre è esente salva l'opzione. L'esenzione incide sul pro rata e può far scattare la rettifica della detrazione operata sui costi di costruzione: va valutato prima, non al quinto anno." },
      { q: "Posso destinare alla locazione gli invenduti?", a: "Sì, ma è un cambio di destinazione con effetti sostanziali: il bene esce dalle rimanenze ed entra tra le immobilizzazioni, cambiando natura fiscale e contabile. Va deliberato e documentato, non deciso di fatto lasciando l'immobile locato tra le rimanenze." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai un'iniziativa in corso e il prospetto dei costi capitalizzati non esiste come documento autonomo, la voce più importante del tuo bilancio non è verificabile. Mandaci il piano dell'iniziativa, i costi sostenuti e l'elenco delle unità con lo stato di vendita: ricostruiamo il valore capitalizzato, verifichiamo la recuperabilità e mettiamo a calendario la finestra dei cinque anni. Per il contesto leggi le guide su tassazione della vendita di immobili, lavori in corso e società immobiliari." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa, dei principi contabili e della prassi vigenti." },
  ],
};
