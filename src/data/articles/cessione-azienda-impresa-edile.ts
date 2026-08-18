import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "cessione-azienda-impresa-edile",
  title: "Vendere l'impresa edile: cessione d'azienda o cessione di quote?",
  excerpt:
    "Due strade con carichi fiscali e rischi opposti: chi vende preferisce le quote, chi compra preferisce l'azienda. Imposte a confronto, responsabilità per i debiti, sorte dell'attestazione SOA e come si prepara la società alla vendita.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-brand-dark to-brand",
  keywords: [
    "cessione azienda o cessione quote",
    "vendere impresa edile",
    "tassazione cessione partecipazioni 26%",
    "responsabilità acquirente debiti azienda",
    "imposta di registro cessione azienda",
    "due diligence impresa costruzioni",
  ],
  intro:
    "La scelta tra cedere l'azienda e cedere le quote non è tecnica ma sostanziale: cambia il carico fiscale del venditore, il rischio dell'acquirente e la sorte delle qualificazioni. Il venditore persona fisica preferisce quasi sempre le quote, tassate con imposta sostitutiva del 26%; l'acquirente preferisce l'azienda, che circoscrive il perimetro dei rischi ereditati.",
};

export const seo = {
  seoTitle: "Vendere l'Impresa Edile: Azienda o Quote?",
  metaDescription:
    "Carichi fiscali a confronto, responsabilità per i debiti, sorte dell'attestazione SOA e come si prepara una società di costruzioni alla vendita.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Cessione di quote: per il venditore persona fisica la plusvalenza sconta l'imposta sostitutiva del 26%; l'imposta di registro è in misura fissa; l'acquirente eredita la società con tutta la sua storia. Cessione d'azienda: la plusvalenza concorre al reddito d'impresa, con possibile rateizzazione o tassazione separata al ricorrere dei requisiti; l'imposta di registro è proporzionale; l'acquirente eredita un perimetro definito, ma con responsabilità di legge per debiti e rapporti di lavoro. In edilizia pesa un terzo fattore: la SOA è della società." },

    { type: "h2", text: "Il conflitto strutturale tra le parti", id: "conflitto" },
    { type: "p", text: "Chi acquista le quote di una S.r.l. compra la società: entra in tutto ciò che essa è, con i debiti noti e quelli non ancora emersi, i contenziosi aperti e quelli futuri su opere già consegnate, le posizioni fiscali e contributive delle annualità ancora accertabili, le responsabilità per vizi delle costruzioni realizzate." },
    { type: "p", text: "Chi acquista l'azienda compra un complesso di beni e rapporti definito nel contratto. La responsabilità non è però azzerata: il codice civile prevede una responsabilità dell'acquirente per i debiti risultanti dai libri contabili obbligatori, una disciplina specifica per i debiti tributari e la continuità dei rapporti di lavoro con responsabilità solidale. Il perimetro è più circoscritto, non nullo." },
    { type: "p", text: "Da qui il conflitto: il venditore ha un interesse fiscale a cedere le quote, l'acquirente ha un interesse di rischio a comprare l'azienda. La differenza di prezzo che l'acquirente chiede per assumersi il rischio delle quote è, nella pratica, l'oggetto reale della trattativa." },

    { type: "table", headers: ["Profilo", "Cessione di quote", "Cessione d'azienda"], rows: [
      ["Tassazione del venditore persona fisica", "Imposta sostitutiva del 26% sulla plusvalenza", "Plusvalenza tassata come reddito d'impresa, con possibile rateizzazione o tassazione separata"],
      ["Tassazione del venditore società", "Plusvalenza tassata, PEX se ricorrono tutti i requisiti", "Plusvalenza tassata, rateizzabile se il bene è posseduto da almeno tre anni"],
      ["Imposta di registro", "In misura fissa", "Proporzionale, con aliquote differenziate sui beni trasferiti"],
      ["Debiti e contenziosi", "Restano tutti nella società ceduta", "Responsabilità dell'acquirente nei limiti di legge, con perimetro contrattuale"],
      ["Rapporti di lavoro", "Proseguono senza variazioni", "Proseguono con l'acquirente, con responsabilità solidale nei limiti di legge"],
      ["Attestazione SOA e qualificazioni", "Restano alla società ceduta", "Non si trasferiscono automaticamente: profilo critico in edilizia"],
      ["Contratti in corso", "Proseguono, salvo clausole di change of control", "Richiedono il consenso del contraente ceduto salvo casi previsti"],
    ] },

    { type: "h2", text: "Il fattore che in edilizia decide: le qualificazioni", id: "soa" },
    { type: "p", text: "L'attestazione SOA e i requisiti di qualificazione per gli appalti pubblici sono riferiti al soggetto giuridico, non al complesso aziendale. Cedere l'azienda senza cedere la società può quindi significare far perdere all'acquirente esattamente ciò per cui stava pagando: la possibilità di partecipare a gare in determinate categorie e classifiche." },
    { type: "p", text: "Esistono meccanismi per il trasferimento dei requisiti in caso di operazioni straordinarie, ma sono soggetti a condizioni e verifiche che vanno esaminate prima di impostare la struttura dell'operazione. Un'operazione disegnata sulla sola convenienza fiscale e poi bloccata dalla perdita della qualificazione è un esito che si vede più spesso di quanto si pensi." },
    { type: "p", text: "Lo stesso vale per i requisiti tecnici legati alle persone: il direttore tecnico con determinati titoli ed esperienza, le certificazioni di sistema, le abilitazioni specifiche. Se il venditore è anche la persona che porta questi requisiti, la sua uscita immediata dopo il closing può svuotare il valore acquistato. È il motivo per cui questi contratti prevedono quasi sempre un periodo di affiancamento." },

    { type: "figure", slot: "cessione-azienda-impresa-edile-1", alt: "Documenti societari e attestazione SOA su una scrivania durante una trattativa", caption: "In edilizia la qualificazione è della società: la struttura dell'operazione va disegnata attorno a questo." },

    { type: "h2", text: "Come si prepara la società alla vendita", id: "preparazione" },
    { type: "p", text: "Un'impresa edile che arriva alla trattativa senza preparazione perde valore in due modi: perché l'acquirente sconta i rischi che non riesce a valutare, e perché la due diligence fa emergere problemi che avrebbero potuto essere risolti prima con calma." },
    { type: "ol", items: [
      "Ordinare la contabilità di commessa: margine per cantiere, avanzamento, costi a finire aggiornati. È il documento che dimostra la redditività ricorrente e giustifica il prezzo",
      "Chiudere o quantificare i contenziosi aperti, incluse le posizioni su vizi delle opere consegnate e le riserve non definite",
      "Verificare le posizioni fiscali e contributive delle annualità ancora accertabili, e regolarizzare ciò che va regolarizzato prima della trattativa",
      "Separare per tempo gli immobili e i beni non funzionali all'attività: l'acquirente compra l'attività, non il patrimonio del venditore",
      "Formalizzare ciò che è informale: accordi con fornitori, listini, procedure di preventivazione, rapporti con i committenti storici",
      "Definire il ruolo del venditore dopo il closing: periodo di affiancamento, requisiti tecnici, patto di non concorrenza",
    ] },
    { type: "p", text: "Il quarto punto ha un effetto diretto sul prezzo. Un acquirente che deve comprare anche il capannone e gli appartamenti invenduti si trova davanti a un investimento più grande e meno finanziabile: separare il patrimonio immobiliare prima della vendita amplia sensibilmente la platea dei possibili acquirenti." },

    { type: "h2", text: "La responsabilità per i debiti nella cessione d'azienda", id: "debiti" },
    { type: "p", text: "Nella cessione d'azienda l'acquirente risponde dei debiti risultanti dai libri contabili obbligatori, secondo quanto previsto dal codice civile. Per i debiti tributari esiste una disciplina specifica, che prevede una responsabilità dell'acquirente entro determinati limiti e con la possibilità di richiedere all'amministrazione finanziaria un certificato sull'esistenza di contestazioni e debiti." },
    { type: "p", text: "La richiesta di quel certificato è un passaggio che l'acquirente non dovrebbe mai saltare: il rilascio con esito negativo, o il decorso del termine senza risposta, ha un effetto liberatorio nei limiti previsti. È uno degli strumenti più efficaci per circoscrivere il rischio, e ha tempi tecnici che vanno messi nel cronoprogramma dell'operazione." },
    { type: "p", text: "Per i rapporti di lavoro vale la disciplina del trasferimento d'azienda: i rapporti proseguono con l'acquirente e il lavoratore conserva i diritti maturati, con responsabilità solidale del cedente e del cessionario nei limiti previsti. In edilizia, dove il costo del lavoro è la componente principale, è un profilo da quantificare con precisione." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Codice civile", ref: "Art. 2560", principle: "L'alienante non è liberato dai debiti inerenti all'esercizio dell'azienda ceduta anteriori al trasferimento se non risulta che i creditori vi hanno consentito; nel trasferimento di un'azienda commerciale risponde dei debiti suddetti anche l'acquirente, se essi risultano dai libri contabili obbligatori.", impact: "La responsabilità dell'acquirente è ancorata alle scritture: la loro completezza è un elemento centrale della due diligence." },
      { court: "D.lgs. 472/1997", ref: "Art. 14", principle: "Il cessionario è responsabile in solido, entro i limiti previsti, per il pagamento di imposte e sanzioni riferibili a violazioni commesse nell'anno della cessione e nei due precedenti; la responsabilità è limitata dal certificato rilasciato dall'amministrazione.", impact: "Il certificato sui carichi pendenti è lo strumento che circoscrive il rischio fiscale: va richiesto sempre." },
      { court: "Codice civile", ref: "Art. 2112", principle: "In caso di trasferimento d'azienda il rapporto di lavoro continua con il cessionario e il lavoratore conserva tutti i diritti che ne derivano; cedente e cessionario sono obbligati in solido per i crediti del lavoratore al tempo del trasferimento.", impact: "In edilizia, dove la manodopera è la voce principale, questa responsabilità va quantificata prima del closing." },
    ] },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "S.r.l. di costruzioni con patrimonio netto di 900.000 euro e valore concordato di 1,6 milioni. Il socio unico è una persona fisica che detiene le quote dal 2009, con un costo fiscale della partecipazione di 100.000 euro." },
    { type: "p", text: "Nella cessione di quote la plusvalenza è di 1,5 milioni e sconta l'imposta sostitutiva del 26%, pari a 390.000 euro; l'imposta di registro è in misura fissa. Nella cessione d'azienda, invece, la plusvalenza si realizza in capo alla società, concorre al suo reddito ed è tassata con IRES; per portare poi il ricavato al socio serve un ulteriore passaggio, con la relativa tassazione. L'imposta di registro proporzionale, a carico dell'acquirente ma parte del costo complessivo dell'operazione, si aggiunge." },
    { type: "p", text: "Il conto complessivo favorisce nettamente la cessione di quote per il venditore. L'acquirente, però, chiederà uno sconto sul prezzo per il rischio di ereditare la società: la trattativa si sposta quindi sulle garanzie contrattuali — dichiarazioni e garanzie del venditore, indennizzi, somme depositate a garanzia, durata dei termini di escussione — che sono il vero terreno su cui il conflitto tra le due esigenze si risolve." },
    { type: "note", text: "L'errore da non fare: iniziare la trattativa senza aver messo in ordine contenziosi, posizioni fiscali e contabilità di commessa. La due diligence dell'acquirente farà emergere tutto, e ogni problema scoperto in quella fase vale, in termini di sconto sul prezzo, molto più di quanto sarebbe costato risolverlo prima. Lo scenario è illustrativo." },

    { type: "figure", slot: "cessione-azienda-impresa-edile-2", alt: "Contratto di cessione con clausole di garanzia e indennizzo evidenziate", caption: "Dichiarazioni, garanzie e indennizzi: è lì che si risolve il conflitto tra le due esigenze." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Conviene vendere le quote o l'azienda?", a: "Per il venditore persona fisica quasi sempre le quote, perché la plusvalenza sconta l'imposta sostitutiva del 26% e il registro è in misura fissa. Per l'acquirente conviene l'azienda, che circoscrive il perimetro dei rischi ereditati. La differenza si negozia sul prezzo e sulle garanzie contrattuali." },
      { q: "L'acquirente risponde dei miei debiti?", a: "Nella cessione d'azienda risponde dei debiti risultanti dai libri contabili obbligatori e, per i debiti tributari, entro i limiti previsti dall'art. 14 del D.lgs. 472/1997, con effetto liberatorio del certificato sui carichi pendenti. Nella cessione di quote i debiti restano nella società, che passa all'acquirente." },
      { q: "Che fine fa l'attestazione SOA?", a: "È riferita al soggetto giuridico: nella cessione di quote resta alla società che viene ceduta; nella cessione d'azienda non si trasferisce automaticamente. Esistono meccanismi di trasferimento dei requisiti in caso di operazioni straordinarie, ma vanno verificati prima di impostare la struttura." },
      { q: "Cos'è il certificato sui carichi pendenti?", a: "È il certificato che l'amministrazione finanziaria rilascia sull'esistenza di contestazioni e debiti tributari del cedente. Il rilascio con esito negativo, o il decorso del termine senza risposta, ha effetto liberatorio nei limiti previsti: per l'acquirente è uno strumento essenziale, con tempi tecnici da mettere in conto." },
      { q: "Come si valuta un'impresa edile?", a: "Sui risultati ricorrenti e sulla qualità del portafoglio ordini, non sul patrimonio immobiliare, che di norma viene separato prima della vendita. Il documento che più incide sulla valutazione è la contabilità di commessa: dimostra se la redditività è strutturale o dipende da singoli cantieri irripetibili." },
      { q: "Devo restare in azienda dopo la vendita?", a: "Quasi sempre per un periodo di affiancamento, e in edilizia più che altrove, perché relazioni con i committenti, conoscenza dei prezzi e requisiti tecnici sono legati alle persone. Durata, compenso e patto di non concorrenza vanno definiti nel contratto, non lasciati agli accordi verbali." },
      { q: "Devo separare gli immobili prima di vendere?", a: "Di norma sì. L'acquirente compra l'attività, non il patrimonio del venditore: includere capannone e immobili invenduti aumenta l'investimento richiesto, riduce la platea degli acquirenti e rende l'operazione più difficile da finanziare. La separazione va però fatta con largo anticipo." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se stai valutando di vendere, il lavoro utile inizia almeno un anno prima della trattativa: contabilità di commessa in ordine, contenziosi quantificati, posizioni fiscali verificate, immobili separati. Mandaci ultimi bilanci, elenco dei contenziosi e situazione delle qualificazioni: costruiamo il percorso di preparazione e simuliamo il carico fiscale delle due strade. Per il contesto leggi le guide su scissione immobiliare e dividendi." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
