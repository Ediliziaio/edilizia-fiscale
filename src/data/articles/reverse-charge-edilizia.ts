import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "reverse-charge-edilizia",
  title: "Reverse charge in edilizia: quando si applica davvero",
  excerpt:
    "Due fattispecie diverse che vengono confuse di continuo: il subappalto della lettera a) e le prestazioni su edifici della lettera a-ter). Come si qualifica una lavorazione, cosa scrivere in fattura e quanto costa sbagliare.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "reverse charge edilizia",
    "quando si applica il reverse charge",
    "inversione contabile subappalto edile",
    "reverse charge impianti art 17 a-ter",
    "reverse charge o iva ordinaria",
    "fattura reverse charge edilizia dicitura",
  ],
  intro:
    "In edilizia il reverse charge opera in due casi che hanno presupposti diversi: nei subappalti tra imprese del settore costruzioni (art. 17, comma 6, lettera a, D.P.R. 633/1972) e nelle prestazioni di pulizia, demolizione, installazione di impianti e completamento relative a edifici rese tra soggetti passivi IVA (lettera a-ter), anche senza subappalto. Confonderle è l'errore più diffuso e più costoso del settore.",
};

export const seo = {
  seoTitle: "Reverse Charge in Edilizia: Quando si Applica",
  metaDescription:
    "Subappalto o prestazioni su edifici: le due fattispecie dell'art. 17 c. 6, come qualificare la lavorazione, cosa scrivere in fattura e quanto costa sbagliare.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — La lettera a): richiede insieme rapporto di subappalto, committente che opera nel settore costruzioni e prestazioni della sezione F ATECO. La lettera a-ter): riguarda pulizia, demolizione, installazione di impianti e completamento relativi a edifici, tra soggetti passivi IVA, anche senza subappalto. Il criterio di qualificazione: oggettivo, per singola prestazione, secondo la circolare 14/E del 2015. La sanzione: l'errore è punito in entrambe le direzioni, sia applicando il reverse charge dove non spetta sia omettendolo dove spetta." },

    { type: "h2", text: "Che cos'è il reverse charge e perché esiste in edilizia", id: "cosa-e" },
    { type: "p", text: "Nel meccanismo ordinario chi presta il servizio addebita l'IVA in fattura e la versa all'erario; chi la riceve la detrae. Con il reverse charge — o inversione contabile — il prestatore emette fattura senza addebito d'imposta, e il committente integra il documento assolvendo l'imposta sia a debito sia a credito. Il gettito è lo stesso; cambia chi materialmente lo versa." },
    { type: "p", text: "La ragione è antifrode. Nelle filiere lunghe, come quelle edili con appaltatore, subappaltatore e sub-subappaltatore, il rischio è che l'IVA venga addebitata e non versata mentre il committente la detrae regolarmente. Spostando il debito d'imposta sul committente, quel varco si chiude." },
    { type: "p", text: "Per l'impresa che lavora in reverse charge l'effetto collaterale è finanziario e non va sottovalutato: fatturando senza IVA a valle ma acquistando materiali con IVA a monte, si genera strutturalmente un credito IVA. Va gestito con compensazione o richiesta di rimborso, anche trimestrale, altrimenti diventa liquidità immobilizzata." },

    { type: "h2", text: "La lettera a): il subappalto nel settore costruzioni", id: "lettera-a" },
    { type: "p", text: "La prima fattispecie richiede tre condizioni che devono ricorrere insieme. La prima è l'esistenza di un rapporto di subappalto: l'impresa deve fatturare a un'altra impresa che a sua volta ha ricevuto l'incarico da un committente. La seconda è che il committente della prestazione operi nel settore delle costruzioni. La terza è che la prestazione sia riconducibile alle attività della sezione F della classificazione delle attività economiche." },
    { type: "p", text: "Se manca il rapporto di subappalto, la lettera a) non si applica. È il caso dell'impresa che fattura direttamente al committente finale — privato, condominio, società non edile — dove l'IVA torna ordinaria con l'aliquota propria dell'intervento. Ed è il caso, spesso dimenticato, del rapporto tra appaltatore e committente che pure è un'impresa edile: se quel committente è il proprietario dell'immobile e non un appaltatore a sua volta, non c'è subappalto." },
    { type: "p", text: "Non rientrano nella lettera a) le prestazioni d'opera senza organizzazione, le forniture con posa in opera in cui la posa è accessoria alla cessione del bene, e i noli a freddo. Il nolo a caldo, cioè con personale del noleggiante, va invece valutato caso per caso: se l'operatore lavora sotto la direzione del noleggiante realizzando un risultato, il rapporto tende a qualificarsi come appalto." },

    { type: "figure", slot: "reverse-charge-edilizia-1", alt: "Catena appaltatore-subappaltatore in cantiere con documenti contrattuali", caption: "Senza rapporto di subappalto la lettera a) non si applica: è il presupposto che si dimentica più spesso." },

    { type: "h2", text: "La lettera a-ter): le prestazioni su edifici, anche senza subappalto", id: "lettera-a-ter" },
    { type: "p", text: "La seconda fattispecie funziona in modo diverso e più esteso. Riguarda quattro categorie di servizi relativi a edifici — pulizia, demolizione, installazione di impianti e completamento — e prescinde totalmente dal subappalto. È sufficiente che sia il prestatore sia il committente siano soggetti passivi IVA." },
    { type: "p", text: "È la disposizione che genera più errori, perché copre situazioni che l'imprenditore percepisce come normali appalti diretti: l'impiantista che rifà l'impianto elettrico del capannone di una società di logistica, l'impresa di pulizie che opera su un edificio per conto della società proprietaria, il demolitore incaricato direttamente dal committente. In tutti questi casi il reverse charge si applica." },
    { type: "p", text: "Due limiti vanno tenuti presenti. Il primo: la prestazione deve riguardare un edificio, non un terreno, un impianto industriale non incorporato o un'opera di urbanizzazione priva del carattere di edificio. Il secondo: il committente deve essere soggetto passivo IVA. Verso un privato consumatore la lettera a-ter) non opera mai, e si applica l'aliquota ordinaria o agevolata propria dell'intervento." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Agenzia delle Entrate", ref: "Circolare n. 14/E del 27 marzo 2015", principle: "Il perimetro delle prestazioni soggette a inversione contabile si individua con criterio oggettivo, in base al codice attività della singola prestazione resa, indipendentemente dall'attività prevalente esercitata dall'impresa.", impact: "Il codice ATECO con cui l'impresa è iscritta non decide nulla: conta cosa è stata fatta in quel cantiere." },
      { court: "D.P.R. 633/1972", ref: "Art. 17, comma 6, lett. a)", principle: "L'inversione contabile si applica alle prestazioni di servizi rese nel settore edile da subappaltatori nei confronti di imprese che svolgono attività di costruzione o ristrutturazione, o nei confronti dell'appaltatore principale.", impact: "Senza rapporto di subappalto la disposizione non opera: la fattura torna con IVA e aliquota propria dell'intervento." },
      { court: "D.P.R. 633/1972", ref: "Art. 17, comma 6, lett. a-ter)", principle: "L'inversione contabile si applica alle prestazioni di servizi di pulizia, demolizione, installazione di impianti e completamento relative a edifici.", impact: "Opera anche senza subappalto, purché entrambe le parti siano soggetti passivi IVA: è la fattispecie più fraintesa." },
    ] },

    { type: "h2", text: "Il caso dei contratti misti", id: "contratti-misti" },
    { type: "p", text: "Un contratto di ristrutturazione contiene tipicamente lavorazioni eterogenee: demolizioni, opere murarie, impianti, pavimentazioni, tinteggiature, serramenti. Alcune rientrano nel reverse charge, altre no. La domanda pratica è se si debba scomporre o applicare un regime unico." },
    { type: "p", text: "La linea da seguire è la scomposizione, con un'eccezione. Se il contratto ha per oggetto un intervento unitario di ristrutturazione affidato a un unico esecutore, e le singole lavorazioni sono strumentali al risultato complessivo, la prassi ha riconosciuto un regime unitario riferito alla prestazione principale. Se invece il contratto elenca prestazioni autonome, ciascuna va qualificata per sé." },
    { type: "p", text: "La conseguenza operativa è che la qualificazione va fatta prima, nel computo metrico e nel contratto, separando gli importi per regime applicabile. Deciderla in fase di fatturazione, a lavoro finito, significa ricostruire a posteriori una scomposizione che i documenti non supportano." },

    { type: "table", headers: ["Situazione", "Regime", "Perché"], rows: [
      ["Subappaltatore edile fattura all'appaltatore edile", "Reverse charge", "Lettera a): subappalto in settore costruzioni"],
      ["Impresa edile fattura al committente privato", "IVA ordinaria o agevolata", "Nessun subappalto e committente non soggetto passivo"],
      ["Impiantista fattura alla società proprietaria del capannone", "Reverse charge", "Lettera a-ter): installazione impianti su edificio tra soggetti IVA"],
      ["Impresa di pulizie fattura a un condominio", "Da verificare", "Dipende dalla soggettività passiva IVA del condominio nel caso concreto"],
      ["Fornitura di serramenti con posa accessoria", "IVA ordinaria o agevolata", "Cessione di bene, non prestazione di servizi su edificio"],
      ["Nolo a freddo di gru senza operatore", "IVA ordinaria", "Non è prestazione di servizi edili né appalto"],
    ] },

    { type: "h2", text: "Cosa scrivere in fattura e come si integra", id: "fattura" },
    { type: "p", text: "La fattura del prestatore va emessa senza addebito d'imposta, con l'indicazione della norma di riferimento: l'annotazione corretta richiama l'inversione contabile ai sensi dell'art. 17, comma 6, lettera a) o a-ter), del D.P.R. 633/1972. Nella fatturazione elettronica va utilizzato il codice natura previsto per l'inversione contabile, distinto per fattispecie." },
    { type: "p", text: "Il committente integra la fattura ricevuta con aliquota e imposta, e la annota sia nel registro delle vendite sia in quello degli acquisti entro i termini previsti. L'operazione è neutra sul piano finanziario, ma l'omessa integrazione è una violazione autonomamente sanzionabile, anche quando non c'è imposta dovuta." },
    { type: "p", text: "Va segnalato un punto che genera contenzioso: quando l'imposta è stata comunque assolta, sia pure in modo irregolare, il regime sanzionatorio previsto dall'art. 6 del D.lgs. 471/1997 prevede sanzioni in misura fissa entro determinati limiti, e non il recupero dell'imposta. È una tutela importante, ma non copre le ipotesi di operazioni inesistenti o di intento fraudolento." },

    { type: "figure", slot: "reverse-charge-edilizia-2", alt: "Fattura elettronica con codice natura per inversione contabile", caption: "Codice natura e richiamo normativo corretti: l'errore formale è sanzionabile anche senza imposta dovuta." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa generale che esegue la ristrutturazione di un edificio residenziale per un committente privato, per 380.000 euro. Affida in subappalto le opere murarie a un'impresa edile per 120.000 euro e l'impianto termico e idraulico a un impiantista per 74.000 euro. Acquista inoltre serramenti da un produttore, con posa eseguita dal produttore stesso, per 46.000 euro." },
    { type: "p", text: "Le tre fatture in entrata seguono regimi diversi. Il subappalto delle opere murarie rientra nella lettera a): reverse charge. L'impianto rientra nella lettera a-ter) e sarebbe in reverse charge anche in assenza di subappalto: reverse charge. La fornitura di serramenti con posa, se la posa è accessoria alla cessione, è una cessione di beni con IVA ordinaria o agevolata secondo le regole proprie, non un servizio su edificio." },
    { type: "p", text: "La fattura in uscita verso il committente privato, invece, è con IVA: aliquota agevolata al 10% sulla parte di intervento che ne ha i requisiti, con la regola dei beni significativi applicata ai serramenti. L'impresa generale si trova quindi con IVA a credito sugli acquisti e IVA a debito sulla vendita: la posizione finanziaria va monitorata, ma è fisiologica." },
    { type: "note", text: "L'errore da non fare: qualificare le lavorazioni in fase di fatturazione. La separazione va fatta nel computo metrico e nel contratto, prima dell'esecuzione: è l'unico modo per avere documenti coerenti con il regime applicato. Lo scenario descritto è illustrativo: la qualificazione va verificata sul contratto concreto." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Il reverse charge si applica solo tra imprese edili?", a: "No. La lettera a) richiede il subappalto nel settore costruzioni, ma la lettera a-ter) si applica a pulizia, demolizione, installazione di impianti e completamento su edifici tra qualunque coppia di soggetti passivi IVA, anche quando nessuno dei due è un'impresa edile in senso stretto." },
      { q: "Come faccio a sapere se una lavorazione rientra?", a: "Il criterio è oggettivo e riferito alla singola prestazione, secondo la circolare 14/E del 2015: si guarda al codice attività proprio della lavorazione eseguita, non all'attività prevalente dell'impresa né al suo codice ATECO camerale. In caso di contratto misto, la qualificazione va fatta voce per voce." },
      { q: "Cosa succede se applico il reverse charge dove non spettava?", a: "È una violazione sanzionabile, anche se l'imposta è stata complessivamente assolta. L'art. 6 del D.lgs. 471/1997 prevede in questi casi sanzioni in misura fissa entro determinati limiti, salvo che l'operazione sia inesistente o l'errore sia determinato da intento fraudolento." },
      { q: "Il condominio è soggetto passivo IVA?", a: "Non lo è di regola, ma può esserlo in situazioni particolari. Poiché la lettera a-ter) richiede che il committente sia soggetto passivo, la verifica va fatta caso per caso: applicare il reverse charge verso un condominio non soggetto passivo è un errore, e lo è anche il contrario." },
      { q: "La fornitura con posa in opera va in reverse charge?", a: "Dipende dalla qualificazione del contratto. Se prevale la cessione del bene e la posa è accessoria, siamo di fronte a una cessione con IVA ordinaria o agevolata. Se invece prevale la prestazione di servizi su edificio, si ricade nel perimetro della lettera a-ter). Il criterio è la volontà delle parti come emerge dal contratto." },
      { q: "Il reverse charge mi crea problemi di cassa?", a: "Genera un credito IVA strutturale, perché acquisti materiali con imposta e fatturi senza. La soluzione è la gestione attiva del credito: compensazione orizzontale nei limiti previsti e richiesta di rimborso, anche in via trimestrale al ricorrere dei presupposti. Va pianificato, non subito." },
      { q: "Devo integrare la fattura anche se non devo versare nulla?", a: "Sì. L'integrazione e la doppia annotazione nei registri sono obblighi autonomi: l'omissione è sanzionabile anche quando l'operazione è finanziariamente neutra. È uno dei rilievi più frequenti nelle verifiche perché è facile da riscontrare." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai il dubbio di aver applicato il regime sbagliato su cantieri già chiusi, la verifica è rapida: bastano un estratto delle fatture attive e passive dell'ultimo biennio e i relativi contratti. Scrivici dalla pagina contatti: ricostruiamo la qualificazione corretta e, dove serve, valutiamo la regolarizzazione con ravvedimento prima che lo faccia una verifica. Per il quadro generale leggi la guida alla fiscalità dell'impresa edile e quella sulle aliquote IVA agevolate." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
