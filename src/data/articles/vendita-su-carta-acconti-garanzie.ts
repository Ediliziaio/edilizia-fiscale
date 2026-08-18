import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "vendita-su-carta-acconti-garanzie",
  title: "Vendere su carta: preliminari, acconti e la fideiussione obbligatoria",
  excerpt:
    "Incassare durante la costruzione risolve il problema di cassa dell'iniziativa, ma comporta obblighi precisi: fideiussione a garanzia degli importi riscossi, polizza decennale alla consegna, contenuto vincolato del preliminare. Cosa serve e quanto costa.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-brand-dark to-brand",
  keywords: [
    "vendita su carta immobili da costruire",
    "fideiussione acconti dlgs 122 2005",
    "preliminare immobile da costruire contenuto",
    "polizza decennale postuma acquirente",
    "iva acconti preliminare costruttore",
    "tutela acquirenti immobili da costruire",
  ],
  intro:
    "Vendere le unità prima che siano finite è ciò che rende sostenibile un'iniziativa immobiliare: gli acconti finanziano la costruzione. Ma il D.lgs. 122/2005 subordina questa possibilità a tutele precise per l'acquirente — fideiussione sugli importi riscossi, polizza decennale alla consegna, contenuto obbligatorio del preliminare — e la loro assenza ha conseguenze sul contratto.",
};

export const seo = {
  seoTitle: "Vendere su Carta: Acconti, Fideiussione e Preliminare",
  metaDescription:
    "Fideiussione sugli importi riscossi, polizza decennale, contenuto vincolato del preliminare: gli obblighi di chi vende immobili da costruire.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — La disciplina: D.lgs. 122/2005, a tutela degli acquirenti di immobili da costruire. La fideiussione: il costruttore deve consegnare all'acquirente, a pena di nullità relativa del contratto, una fideiussione di importo corrispondente alle somme riscosse e da riscuotere prima del trasferimento. La polizza: alla stipula dell'atto definitivo va consegnata una polizza indennitaria decennale a copertura di rovina e gravi difetti. Il preliminare: ha un contenuto obbligatorio e va stipulato per atto pubblico o scrittura privata autenticata, con possibilità di trascrizione. L'effetto finanziario: gli acconti finanziano l'iniziativa, ma il costo delle garanzie va a preventivo." },

    { type: "h2", text: "Perché la disciplina esiste", id: "perche" },
    { type: "p", text: "Chi acquista un immobile da costruire versa denaro per anni contro una promessa. Se il costruttore non arriva alla fine — per insolvenza, per difficoltà finanziarie, per abbandono dell'iniziativa — l'acquirente rischia di perdere quanto versato senza avere né l'immobile né la restituzione." },
    { type: "p", text: "Il D.lgs. 122/2005 è nato per rispondere a questo, dopo una stagione in cui il fenomeno aveva colpito molte famiglie. Impone al costruttore garanzie a favore dell'acquirente e prescrive un contenuto vincolato del contratto preliminare, con l'obiettivo di rendere trasparente e assistita un'operazione che altrimenti si regge sulla sola fiducia." },
    { type: "p", text: "Per l'impresa che vende su carta questo significa che gli acconti non sono liberamente incassabili: sono incassabili a condizione di aver prestato le garanzie previste. È un vincolo che ha un costo e che va inserito nel piano dell'iniziativa fin dall'inizio, non affrontato al primo preliminare." },

    { type: "h2", text: "La fideiussione sugli importi riscossi", id: "fideiussione" },
    { type: "p", text: "È l'obbligo centrale della disciplina. All'atto della stipula del contratto che ha per oggetto il trasferimento non immediato della proprietà, il costruttore deve procurare il rilascio e consegnare all'acquirente una fideiussione di importo corrispondente alle somme e al valore di ogni altro eventuale corrispettivo che il costruttore ha riscosso e deve ancora riscuotere prima del trasferimento della proprietà." },
    { type: "p", text: "La garanzia copre l'acquirente nell'ipotesi in cui il costruttore incorra in una situazione di crisi: consente di recuperare quanto versato senza doversi inserire in una procedura concorsuale. È rilasciata da banche o imprese di assicurazione ed è escutibile al verificarsi dei presupposti previsti." },
    { type: "p", text: "La conseguenza della mancata consegna è severa e va conosciuta: il contratto è nullo, ma di una nullità che può essere fatta valere solo dall'acquirente. Significa che un costruttore che non ha prestato la fideiussione ha stipulato un contratto che l'altra parte può far cadere a sua scelta, anche a distanza di tempo e magari quando il mercato si è mosso in modo sfavorevole." },
    { type: "p", text: "Sul piano economico, la fideiussione è un costo e un consumo di plafond, esattamente come le garanzie negli appalti pubblici descritte nella guida dedicata. Un'iniziativa venduta su carta per intero comporta un impegno fideiussorio pari al totale degli acconti previsti, che va negoziato con gli istituti prima di aprire le vendite." },

    { type: "figure", slot: "vendita-su-carta-acconti-garanzie-1", alt: "Cantiere residenziale in costruzione con cartello di vendita delle unità", caption: "Gli acconti finanziano la costruzione, ma sono incassabili solo a fronte della fideiussione." },

    { type: "h2", text: "Il preliminare e il suo contenuto obbligatorio", id: "preliminare" },
    { type: "p", text: "La disciplina non si limita alle garanzie: prescrive che il contratto preliminare e ogni altro contratto diretto al successivo acquisto contengano una serie di elementi, la cui assenza incide sulla validità o comunque espone a contestazioni." },
    { type: "ul", items: [
      "Le indicazioni identificative dell'immobile e i dati del permesso di costruire o della denuncia di inizio attività",
      "La descrizione delle caratteristiche tecniche della costruzione, con l'indicazione dei materiali e delle finiture",
      "I termini massimi di esecuzione della costruzione",
      "L'indicazione del prezzo complessivo, delle modalità e dei tempi di pagamento",
      "Gli estremi della fideiussione rilasciata",
      "L'eventuale esistenza di iscrizioni ipotecarie e trascrizioni pregiudizievoli, con l'obbligo di cancellazione o frazionamento prima del trasferimento",
      "Gli elaborati progettuali e il capitolato, da allegare",
    ] },
    { type: "p", text: "La riga sulle ipoteche merita attenzione particolare perché tocca il finanziamento dell'iniziativa. Un'operazione realizzata con mutuo fondiario ha un'ipoteca sull'intero complesso: prima del trasferimento di ciascuna unità l'ipoteca va frazionata e la quota relativa cancellata, oppure va accollata secondo quanto pattuito. È un adempimento che richiede tempo e coordinamento con la banca, e che va programmato con i rogiti." },
    { type: "p", text: "Va inoltre segnalata la possibilità di trascrizione del preliminare, che protegge l'acquirente da trascrizioni successive pregiudizievoli. È una tutela che spesso l'acquirente chiede e che il costruttore può concedere: ha un costo, ma facilita la vendita a soggetti prudenti e ai loro consulenti." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "D.lgs. 122/2005", ref: "Art. 2", principle: "All'atto della stipula del contratto che abbia come finalità il trasferimento non immediato della proprietà di un immobile da costruire, il costruttore è obbligato a procurare il rilascio e a consegnare all'acquirente una fideiussione di importo corrispondente alle somme e al valore di ogni altro eventuale corrispettivo riscossi e da riscuotere prima del trasferimento.", impact: "La fideiussione non è opzionale: la sua mancanza rende il contratto nullo, e la nullità può essere fatta valere solo dall'acquirente." },
      { court: "D.lgs. 122/2005", ref: "Art. 4", principle: "Il costruttore è obbligato a contrarre e a consegnare all'acquirente, all'atto del trasferimento della proprietà, una polizza assicurativa indennitaria decennale a copertura dei danni materiali e diretti all'immobile derivanti da rovina totale o parziale o da gravi difetti costruttivi.", impact: "La decennale postuma è dovuta alla consegna: il premio va messo nel costo dell'iniziativa, con la ripartizione per competenza." },
      { court: "D.lgs. 122/2005", ref: "Art. 6", principle: "Il contratto preliminare deve contenere gli elementi indicati dalla norma, tra cui le caratteristiche tecniche della costruzione, i termini di esecuzione, il prezzo e le modalità di pagamento, gli estremi della fideiussione e l'indicazione delle iscrizioni ipotecarie.", impact: "Il contenuto è vincolato: un preliminare incompleto espone a contestazioni proprio quando il rapporto si deteriora." },
    ] },

    { type: "h2", text: "L'IVA sugli acconti e la competenza", id: "iva" },
    { type: "p", text: "Sul piano fiscale la vendita su carta pone un tema di tempi che va coordinato con quanto descritto nella guida sull'operazione immobiliare. L'incasso di un acconto in relazione a una cessione futura determina l'esigibilità dell'imposta limitatamente all'importo incassato: va emessa fattura e l'IVA è dovuta, anche se l'immobile non esiste ancora." },
    { type: "p", text: "Sul piano delle imposte dirette il discorso è diverso. Il ricavo si realizza con il trasferimento della proprietà, non con l'incasso dell'acconto: fino ad allora le somme ricevute sono un debito verso l'acquirente e gli immobili restano tra le rimanenze al costo capitalizzato. Confondere i due piani produce bilanci sbagliati in entrambe le direzioni." },
    { type: "p", text: "L'effetto pratico più rilevante è finanziario. Gli acconti incassati sono liquidità disponibile per la costruzione, ma una quota è IVA da versare e non appartiene all'impresa. Un'iniziativa che programma la cassa sugli acconti lordi si trova, alla prima liquidazione, con meno risorse di quelle previste." },

    { type: "h2", text: "Il costo complessivo delle tutele", id: "costo" },
    { type: "table", headers: ["Voce", "Quando matura", "Come si tratta"], rows: [
      ["Fideiussione sugli acconti", "Alla stipula di ogni preliminare", "Premio a costo dell'esercizio; consuma plafond fideiussorio"],
      ["Polizza decennale postuma", "Alla stipula dell'atto definitivo", "Premio da ripartire per competenza sui dieci anni di copertura"],
      ["Frazionamento e cancellazione dell'ipoteca", "Prima di ciascun rogito", "Costi notarili e bancari, da programmare con i rogiti"],
      ["Trascrizione del preliminare", "Su richiesta dell'acquirente", "Costo d'atto, spesso condiviso"],
      ["IVA sugli acconti", "All'incasso di ciascun acconto", "Debito verso l'erario: non è liquidità disponibile"],
    ] },
    { type: "p", text: "Sommate, queste voci incidono sul margine dell'iniziativa in misura non trascurabile, e sono tutte prevedibili. Il piano economico di un'operazione venduta su carta che non le contenga è incompleto, e lo scarto emerge in corso d'opera, quando il margine si assottiglia senza una ragione apparente." },

    { type: "figure", slot: "vendita-su-carta-acconti-garanzie-2", alt: "Contratto preliminare con allegati progettuali, capitolato e fideiussione", caption: "Il preliminare ha un contenuto vincolato: capitolato ed elaborati vanno allegati, non promessi." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Iniziativa da dodici unità, ricavato atteso 3.400.000 euro. L'impresa apre le vendite con la struttura al grezzo e stipula otto preliminari, con acconti complessivi previsti pari al 40% del prezzo di ciascuna unità: circa 900.000 euro da incassare nell'arco di diciotto mesi." },
    { type: "p", text: "Sul fronte delle garanzie, l'impresa deve procurare fideiussioni per un importo corrispondente alle somme riscosse e da riscuotere prima di ciascun trasferimento. L'impegno fideiussorio complessivo si costruisce progressivamente ma va negoziato prima di aprire le vendite: senza plafond sufficiente, i preliminari non si possono stipulare validamente." },
    { type: "p", text: "Sul fronte della cassa, degli acconti incassati una parte è IVA da versare e non è disponibile per la costruzione. Il piano di cassa va costruito sull'imponibile, non sul lordo: è un errore semplice che su un'iniziativa di questa dimensione vale decine di migliaia di euro di scostamento." },
    { type: "p", text: "Al momento dei rogiti si aggiungono due voci: il frazionamento dell'ipoteca con cancellazione della quota relativa a ciascuna unità, da coordinare con la banca e con il notaio, e il premio della polizza decennale, che va corrisposto e poi riscontato sui dieci anni di copertura. Entrambe erano prevedibili dal primo giorno." },
    { type: "note", text: "L'errore da non fare: aprire le vendite prima di aver negoziato con gli istituti il plafond fideiussorio complessivo. Senza garanzia i preliminari sono nulli su iniziativa dell'acquirente, e il rischio si manifesta proprio quando il mercato gira e qualcuno vuole uscire dal contratto. Lo scenario è illustrativo." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Posso incassare acconti senza fideiussione?", a: "No, non validamente. Il D.lgs. 122/2005 obbliga il costruttore a procurare e consegnare la fideiussione all'atto della stipula del contratto che prevede il trasferimento non immediato. La mancanza rende il contratto nullo, e la nullità può essere fatta valere dall'acquirente." },
      { q: "Cosa copre la fideiussione?", a: "Le somme e il valore di ogni altro corrispettivo riscossi e ancora da riscuotere prima del trasferimento della proprietà, nell'ipotesi in cui il costruttore incorra in una situazione di crisi. Consente all'acquirente di recuperare quanto versato senza inserirsi in una procedura concorsuale." },
      { q: "La polizza decennale quando va consegnata?", a: "All'atto del trasferimento della proprietà. Copre i danni materiali e diretti all'immobile derivanti da rovina totale o parziale o da gravi difetti costruttivi, per dieci anni. Il premio va messo nel costo dell'iniziativa e riscontato sugli esercizi di copertura." },
      { q: "Cosa deve contenere il preliminare?", a: "Elementi vincolati: identificazione dell'immobile e del titolo edilizio, caratteristiche tecniche della costruzione, termini di esecuzione, prezzo e modalità di pagamento, estremi della fideiussione, indicazione delle iscrizioni ipotecarie, con elaborati progettuali e capitolato allegati." },
      { q: "Sull'acconto devo emettere fattura?", a: "Sì: l'incasso dell'acconto determina l'esigibilità dell'imposta limitatamente all'importo riscosso. Ai fini delle imposte dirette invece il ricavo si realizza con il trasferimento della proprietà: fino ad allora le somme sono un debito e gli immobili restano tra le rimanenze." },
      { q: "Cosa succede all'ipoteca del mutuo di costruzione?", a: "Prima del trasferimento di ciascuna unità va frazionata e la quota relativa cancellata, oppure accollata secondo quanto pattuito. È un adempimento con tempi tecnici, da coordinare con banca e notaio e da programmare insieme al calendario dei rogiti." },
      { q: "Conviene concedere la trascrizione del preliminare?", a: "Ha un costo ma protegge l'acquirente da trascrizioni successive pregiudizievoli, ed è spesso richiesta da acquirenti assistiti da un consulente. In un mercato in cui la fiducia è un fattore di vendita, concederla facilita la chiusura più di quanto costi." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se stai per aprire le vendite di un'iniziativa, tre cose vanno definite prima del primo preliminare: il plafond fideiussorio complessivo negoziato con gli istituti, il modello di preliminare con il contenuto vincolato e gli allegati, e il piano di cassa costruito sugli acconti al netto dell'IVA. Mandaci i dati dell'iniziativa dalla pagina contatti. Per il contesto leggi le guide su operazione immobiliare, garanzie negli appalti e tassazione della vendita." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale e legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa vigente." },
  ],
};
