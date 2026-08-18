import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "anticipazione-e-revisione-prezzi",
  title: "Anticipazione del prezzo e revisione: le due leve di cassa negli appalti pubblici",
  excerpt:
    "Il 20% di anticipazione all'avvio dei lavori cambia il profilo finanziario di una commessa pubblica, ma costa una fideiussione. La revisione prezzi protegge dall'aumento dei materiali, a condizione di attivarla nei modi e nei tempi previsti.",
  category: "Appalti",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-brand-dark",
  keywords: [
    "anticipazione del prezzo appalti pubblici 20%",
    "revisione prezzi dlgs 36 2023",
    "fideiussione anticipazione appalto",
    "clausole revisione prezzi materiali",
    "cassa commessa pubblica",
    "compensazione caro materiali",
  ],
  intro:
    "Una commessa pubblica assorbe cassa più di una privata: split payment, SAL lunghi, ritenute a garanzia. Il codice mette a disposizione due strumenti che spostano quel profilo — l'anticipazione del prezzo all'avvio e la revisione dei prezzi in corso d'opera — e nessuno dei due funziona da solo: vanno attivati, garantiti e documentati.",
};

export const seo = {
  seoTitle: "Anticipazione e Revisione Prezzi negli Appalti Pubblici",
  metaDescription:
    "Il 20% di anticipazione all'avvio, la fideiussione che costa, e le clausole di revisione prezzi: le due leve di cassa della commessa pubblica.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — L'anticipazione: il codice dei contratti prevede la corresponsione di un'anticipazione sul valore del contratto, nella misura del 20%, da erogare dopo l'avvio dell'esecuzione. È subordinata alla costituzione di una garanzia fideiussoria di importo pari all'anticipazione maggiorata degli interessi, e viene gradualmente recuperata sui successivi stati di avanzamento. La revisione prezzi: le clausole di revisione sono obbligatorie nei contratti e si attivano al superamento di una soglia di variazione, sulla base di indici di riferimento. Entrambe vanno messe nel piano di cassa della commessa già in fase di offerta." },

    { type: "h2", text: "Perché la commessa pubblica assorbe più cassa", id: "perche-cassa" },
    { type: "p", text: "Prima degli strumenti conviene fissare il problema che risolvono. Una commessa pubblica ha un profilo finanziario peggiore di una privata di pari importo, per una somma di fattori che agiscono nella stessa direzione." },
    { type: "ul", items: [
      "Split payment: l'IVA la versa l'ente, l'impresa incassa il solo imponibile e accumula credito IVA sugli acquisti",
      "SAL a cadenze contrattuali, con approvazione e certificato di pagamento che allungano i tempi rispetto alla maturazione",
      "Ritenute a garanzia trattenute su ogni stato di avanzamento fino al collaudo",
      "Tempi di incasso che, tra emissione del certificato e mandato, si misurano in mesi",
      "Costi di avvio concentrati: allestimento, ponteggi, primi approvvigionamenti, mentre il primo SAL è lontano",
    ] },
    { type: "p", text: "L'ultimo punto è quello su cui interviene l'anticipazione, e spiega perché sia lo strumento più rilevante dei due: agisce esattamente nel momento di massima esposizione, cioè prima che il cantiere abbia prodotto alcunché di fatturabile." },

    { type: "h2", text: "L'anticipazione del prezzo", id: "anticipazione" },
    { type: "p", text: "Il codice prevede che sul valore del contratto sia corrisposta all'appaltatore un'anticipazione nella misura del 20%, da erogare dopo l'avvio dell'esecuzione entro i termini stabiliti. È una misura che nel tempo è stata oggetto di interventi e maggiorazioni straordinarie, ma la struttura resta quella." },
    { type: "p", text: "L'erogazione è subordinata alla costituzione di una garanzia fideiussoria bancaria o assicurativa di importo pari all'anticipazione maggiorata del tasso di interesse legale applicato al periodo necessario al recupero. La garanzia si riduce progressivamente man mano che l'anticipazione viene recuperata." },
    { type: "p", text: "Il recupero avviene sui successivi certificati di pagamento: su ogni SAL l'ente trattiene una quota proporzionale, fino a estinzione. Significa che l'anticipazione non è un ricavo aggiuntivo ma un anticipo su quanto comunque spettante: sposta la cassa nel tempo, non la aumenta." },
    { type: "table", headers: ["Aspetto", "Effetto sull'impresa"], rows: [
      ["Incasso all'avvio", "Liquidità disponibile quando l'esposizione è massima e nulla è ancora fatturabile"],
      ["Costo della fideiussione", "Premio commisurato all'importo garantito e alla durata: va messo a preventivo"],
      ["Impatto sugli affidamenti", "La fideiussione consuma linee di credito e incide sui plafond disponibili per altre gare"],
      ["Recupero sui SAL", "Ogni stato di avanzamento è decurtato di una quota: il flusso successivo è più magro"],
      ["Effetto netto", "Nessun ricavo aggiuntivo, ma un profilo di cassa sensibilmente migliore"],
    ] },
    { type: "p", text: "La terza riga è quella che le imprese sottovalutano e che pesa nella gestione di più commesse contemporanee. Le garanzie rilasciate consumano capacità di affidamento: un'impresa che ha in corso più appalti con anticipazione garantita può trovarsi senza plafond per la garanzia definitiva della gara successiva. È un vincolo da governare a livello di portafoglio, non di singola commessa." },

    { type: "figure", slot: "anticipazione-e-revisione-prezzi-1", alt: "Cantiere di opera pubblica in fase di allestimento, con ponteggi e area di cantiere", caption: "L'anticipazione agisce dove l'esposizione è massima: prima che esista qualcosa da fatturare." },

    { type: "h2", text: "La revisione dei prezzi", id: "revisione" },
    { type: "p", text: "L'esperienza degli aumenti straordinari dei materiali ha reso evidente un problema strutturale degli appalti pluriennali: un prezzo formulato oggi vincola l'impresa per anni, mentre i costi si muovono. Il codice ha risposto rendendo obbligatorie le clausole di revisione dei prezzi nei documenti di gara." },
    { type: "p", text: "Il meccanismo ha tre elementi che vanno letti insieme. Il primo è la soglia: la revisione si attiva quando la variazione dei costi supera una determinata percentuale rispetto al valore originario. Sotto quella soglia la variazione resta a carico della parte che la subisce. Il secondo è l'indice di riferimento, che misura la variazione. Il terzo è la quota riconosciuta, che di norma non copre l'intero scostamento ma una parte di esso oltre la soglia." },
    { type: "p", text: "Questa struttura ha una conseguenza che va capita bene in fase di offerta: la revisione non è un'assicurazione totale contro l'aumento dei costi. Copre gli scostamenti significativi e solo in parte. Un'impresa che offre con margini sottili contando sulla revisione per assorbire qualunque aumento sta facendo un calcolo sbagliato." },
    { type: "p", text: "La revisione opera in entrambe le direzioni: se i costi scendono oltre la soglia, la variazione è a favore della stazione appaltante. È un elemento che raramente si considera in offerta e che va tenuto presente nei contratti di lunga durata." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Codice dei contratti pubblici", ref: "D.lgs. 36/2023 — anticipazione", principle: "Sul valore del contratto di appalto è calcolato l'importo dell'anticipazione del prezzo da corrispondere all'appaltatore, da erogare dopo l'avvio dell'esecuzione, subordinatamente alla costituzione di garanzia fideiussoria di importo pari all'anticipazione maggiorato degli interessi.", impact: "L'anticipazione non è facoltativa per l'ente, ma è condizionata alla garanzia: il costo del premio va a preventivo." },
      { court: "Codice dei contratti pubblici", ref: "D.lgs. 36/2023 — revisione dei prezzi", principle: "Nei documenti di gara iniziali delle procedure sono inserite clausole di revisione dei prezzi, che si attivano al verificarsi di variazioni del costo dell'opera superiori a una soglia predeterminata e operano nella misura prevista.", impact: "Le clausole ci sono per legge, ma la revisione non copre tutto: opera oltre soglia e in misura parziale." },
      { court: "D.lgs. 231/2002", principle: "Gli interessi moratori decorrono automaticamente dalla scadenza del termine di pagamento, senza necessità di costituzione in mora.", impact: "Sui ritardi di pagamento della stazione appaltante il diritto esiste: va rilevato in contabilità e richiesto." },
    ] },

    { type: "h2", text: "Come si mettono entrambe nel piano di cassa", id: "piano-cassa" },
    { type: "p", text: "L'errore più comune è trattare anticipazione e revisione come eventualità amministrative, da gestire quando capitano. Sono invece due variabili del piano finanziario della commessa e vanno quantificate in fase di offerta, quando si decide se e a quanto partecipare." },
    { type: "ol", items: [
      "Costruire il profilo di cassa della commessa mese per mese: costi di avvio, maturazione dei SAL, tempi reali di incasso di quella stazione appaltante, ritenute a garanzia",
      "Inserire l'anticipazione al momento previsto e il suo recupero progressivo sui SAL successivi",
      "Mettere a costo il premio della fideiussione e verificare la disponibilità di plafond presso gli istituti",
      "Verificare la clausola di revisione: quale indice, quale soglia, quale quota riconosciuta, con quale periodicità",
      "Stimare l'esposizione massima e confrontarla con gli affidamenti disponibili, considerando le altre commesse in corso",
      "Quantificare il costo finanziario dell'immobilizzo e includerlo nel prezzo, come qualunque altro costo diretto",
    ] },
    { type: "p", text: "L'ultimo punto è quello che distingue un'offerta costruita da una offerta ribassata. Il costo del denaro su una commessa pubblica di durata pluriennale, con esposizione media di alcune centinaia di migliaia di euro, vale punti di margine. Non considerarlo significa scoprirlo a consuntivo, quando si legge un margine industriale buono e un risultato netto deludente." },

    { type: "figure", slot: "anticipazione-e-revisione-prezzi-2", alt: "Prospetto di cassa di commessa con anticipazione, SAL e recuperi progressivi", caption: "Anticipazione e revisione sono variabili del piano di cassa: si quantificano in offerta, non dopo." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Appalto pubblico da 1.500.000 euro, durata diciotto mesi, SAL trimestrali, ritenuta a garanzia dello 0,5% su ogni stato di avanzamento. L'impresa stima costi di avvio per circa 180.000 euro nei primi due mesi, tra allestimento, ponteggi e primi approvvigionamenti." },
    { type: "p", text: "Senza anticipazione, il profilo è chiaro: 180.000 euro di uscite prima che esista un SAL, il primo certificato di pagamento a distanza di mesi dall'avvio e l'incasso ancora più in là. L'esposizione di picco nei primi cinque mesi supera i 300.000 euro, e va finanziata." },
    { type: "p", text: "Con l'anticipazione del 20%, l'impresa incassa 300.000 euro dopo l'avvio dell'esecuzione. Il picco di esposizione si riduce drasticamente e il fabbisogno di affidamento con esso. Il costo è il premio della fideiussione su un importo garantito pari all'anticipazione maggiorata degli interessi, e il recupero avviene con trattenute proporzionali sui SAL successivi, che risultano quindi più contenuti." },
    { type: "p", text: "Sul fronte della revisione, il contratto prevede una clausola ancorata a un indice di riferimento con soglia di attivazione. L'impresa, in fase di offerta, non la considera una copertura: quantifica un margine di contingenza autonomo per l'oscillazione dei materiali sotto soglia, e tratta l'eventuale revisione come ciò che è — una protezione contro l'evento straordinario, non contro la fisiologia." },
    { type: "note", text: "L'errore da non fare: contare sulla revisione prezzi per giustificare un ribasso aggressivo. La revisione opera oltre una soglia e in misura parziale: sotto quella soglia l'aumento resta a carico dell'impresa, e la contingenza va messa a preventivo separatamente. Lo scenario è illustrativo: percentuali, soglie e indici vanno verificati sui documenti di gara." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quanto vale l'anticipazione del prezzo?", a: "Il codice la prevede nella misura del 20% del valore del contratto, da erogare dopo l'avvio dell'esecuzione. Nel tempo sono intervenute maggiorazioni straordinarie: la misura applicabile va verificata sui documenti della singola procedura." },
      { q: "L'anticipazione è un ricavo in più?", a: "No: è un anticipo su quanto comunque spettante, recuperato progressivamente con trattenute sui successivi stati di avanzamento. Non aumenta il corrispettivo, ma sposta la cassa nel momento in cui serve — prima che esista qualcosa da fatturare." },
      { q: "Che garanzia serve per ottenerla?", a: "Una fideiussione bancaria o assicurativa di importo pari all'anticipazione maggiorata degli interessi, che si riduce progressivamente con il recupero. Il premio è un costo da mettere a preventivo, e la garanzia consuma capacità di affidamento presso gli istituti." },
      { q: "La revisione prezzi copre tutto l'aumento dei materiali?", a: "No. Si attiva al superamento di una soglia di variazione e riconosce una quota dello scostamento eccedente, secondo l'indice previsto in contratto. Sotto soglia l'aumento resta a carico dell'impresa: la contingenza va comunque messa a preventivo." },
      { q: "La revisione vale anche a favore della stazione appaltante?", a: "Sì: opera in entrambe le direzioni. Se i costi scendono oltre la soglia, la variazione è a favore dell'ente. È un elemento raramente considerato in offerta e rilevante nei contratti di lunga durata." },
      { q: "Come incide l'anticipazione sui miei affidamenti?", a: "La fideiussione rilasciata consuma plafond presso l'istituto. Con più commesse in corso, il rischio è di trovarsi senza capacità di garanzia per la gara successiva: va governato a livello di portafoglio, verificando i plafond disponibili prima di impegnarsi." },
      { q: "Posso chiedere gli interessi se l'ente paga in ritardo?", a: "Sì. Gli interessi moratori previsti dal D.lgs. 231/2002 decorrono automaticamente dalla scadenza del termine, senza costituzione in mora. Il diritto esiste: va rilevato in contabilità e richiesto formalmente, cosa che quasi nessuna impresa fa." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se partecipi a gare pubbliche senza costruire il profilo di cassa della commessa, stai decidendo il prezzo senza conoscere una delle sue componenti. Mandaci i documenti di una gara in valutazione dalla pagina contatti: costruiamo il piano di cassa con anticipazione, recuperi e ritenute, quantifichiamo il costo finanziario e verifichiamo la capienza dei tuoi affidamenti. Per il contesto leggi le guide su split payment, flussi di cassa e attestazione SOA." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026: misure, soglie e indici vanno verificati sulla disciplina vigente e sui documenti della singola procedura." },
  ],
};
