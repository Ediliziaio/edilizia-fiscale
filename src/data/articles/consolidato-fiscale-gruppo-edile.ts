import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "consolidato-fiscale-gruppo-edile",
  title: "Gruppo edile e consolidato fiscale: compensare utili e perdite tra società",
  excerpt:
    "Più società di cantiere, un'immobiliare, una holding: come si compensano i risultati, quando conviene il consolidato nazionale, cosa chiede l'IVA di gruppo e come si documentano i rapporti infragruppo per reggere a un controllo.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "11 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-brand-dark to-brand",
  keywords: [
    "consolidato fiscale nazionale requisiti",
    "gruppo societario edilizia",
    "compensare perdite tra società",
    "iva di gruppo liquidazione",
    "contratti infragruppo documentazione",
    "distacco personale tra società",
  ],
  intro:
    "Un'impresa edile che cresce finisce quasi sempre con più società: l'operativa storica, una seconda per iniziative specifiche, l'immobiliare, la holding. Da lì nasce un problema concreto: una società chiude in utile, un'altra in perdita, e le imposte si pagano comunque. Il consolidato fiscale nazionale serve a questo, ma richiede requisiti e comporta vincoli.",
};

export const seo = {
  seoTitle: "Gruppo Edile e Consolidato Fiscale: Come Funziona",
  metaDescription:
    "Compensare utili e perdite tra società, requisiti del consolidato nazionale, IVA di gruppo e documentazione dei rapporti infragruppo in un gruppo edile.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il problema: in un gruppo, utili e perdite di società diverse non si compensano automaticamente. Il consolidato nazionale (artt. 117 e seguenti TUIR): consente di determinare un reddito complessivo di gruppo, con requisiti di controllo e opzione vincolante per tre esercizi. L'IVA di gruppo: strumento distinto, che consente la liquidazione unitaria dell'imposta. I rapporti infragruppo: contratti scritti, corrispettivi congrui, prestazioni tracciabili — è lì che si concentrano le contestazioni." },

    { type: "h2", text: "Perché un'impresa edile si ritrova con più società", id: "perche-gruppo" },
    { type: "p", text: "La struttura di gruppo in edilizia raramente nasce da un disegno: si forma per stratificazione. Una società nuova per un'iniziativa immobiliare specifica, per isolarne il rischio e il finanziamento. Una società separata per un ramo di attività diverso, per esempio gli impianti. L'immobiliare creata per separare il capannone. Poi la [holding](/guide/holding-immobiliare-edilizia) sopra, quando qualcuno lo suggerisce." },
    { type: "p", text: "Il risultato è un gruppo che funziona operativamente ma non è mai stato pensato dal punto di vista fiscale e finanziario. I sintomi tipici sono tre: una società paga imposte mentre un'altra accumula perdite, i rapporti tra società si regolano senza contratti, e la liquidità si sposta con giroconti che nessuno ha qualificato." },
    { type: "p", text: "Il terzo sintomo è il più pericoloso. I trasferimenti di denaro tra società collegate senza un titolo — un finanziamento, un corrispettivo per una prestazione, una distribuzione di utili — sono la prima cosa che una verifica esamina, e la loro riqualificazione può produrre effetti sia sul reddito sia sull'IVA." },

    { type: "h2", text: "Il consolidato fiscale nazionale", id: "consolidato" },
    { type: "p", text: "Il consolidato nazionale, disciplinato dagli artt. 117 e seguenti del TUIR, consente a una controllante e alle controllate che vi aderiscono di determinare un unico reddito complessivo globale, sommando algebricamente i redditi e le perdite delle società incluse. È lo strumento che risolve il problema della società in utile accanto a quella in perdita." },
    { type: "p", text: "I requisiti principali riguardano il controllo: la controllante deve possedere, direttamente o indirettamente, una partecipazione al capitale e agli utili superiore alla soglia prevista, e il requisito deve sussistere dall'inizio del periodo d'imposta. L'opzione è esercitata congiuntamente ed è vincolante per tre esercizi, con rinnovo." },
    { type: "table", headers: ["Aspetto", "Consolidato nazionale", "Nessun consolidato"], rows: [
      ["Utili e perdite tra società", "Si compensano nel reddito globale", "Restano separati: si pagano imposte su una e si accumulano perdite sull'altra"],
      ["Perdite pregresse anteriori all'opzione", "Restano utilizzabili solo dalla società che le ha prodotte", "Utilizzabili dalla stessa società secondo le regole ordinarie"],
      ["Adempimenti", "Dichiarazione di gruppo oltre a quelle individuali", "Solo dichiarazioni individuali"],
      ["Vincolo temporale", "Opzione irrevocabile per tre esercizi", "Nessuno"],
      ["Responsabilità", "Regime di responsabilità tra consolidante e consolidate", "Ciascuna società risponde per sé"],
      ["Interruzione anticipata", "Comporta effetti di recupero previsti dalla disciplina", "Non applicabile"],
    ] },
    { type: "p", text: "La riga più importante è la seconda. Le perdite prodotte prima dell'ingresso nel consolidato non entrano nel gioco della compensazione di gruppo: restano utilizzabili solo dalla società che le ha generate. È un limite che va verificato prima di esercitare l'opzione, perché in molti gruppi edili le perdite pregresse sono proprio la ragione per cui si stava valutando il consolidato." },

    { type: "figure", slot: "consolidato-fiscale-gruppo-edile-1", alt: "Organigramma di gruppo con holding, immobiliare e due società operative", caption: "Il gruppo edile si forma per stratificazione: raramente è stato disegnato in anticipo." },

    { type: "h2", text: "L'IVA di gruppo", id: "iva-gruppo" },
    { type: "p", text: "Distinto dal consolidato ai fini delle imposte dirette è lo strumento della liquidazione IVA di gruppo, che consente di compensare le posizioni a debito e a credito delle società partecipanti con un versamento unitario. Per un gruppo edile può essere rilevante, perché è frequente che una società accumuli credito IVA — lavorando in [reverse charge](/guide/reverse-charge-edilizia) o in split payment — mentre un'altra versa regolarmente." },
    { type: "p", text: "Anche qui esistono requisiti di controllo e obblighi formali di comunicazione, oltre a un regime di responsabilità solidale per le somme risultanti dalle liquidazioni. Va valutato con attenzione, perché la solidarietà espone ciascuna società alle posizioni delle altre." },
    { type: "p", text: "Per molti gruppi di dimensione media, la strada alternativa e più semplice resta la gestione attiva del credito IVA nella singola società: richiesta di rimborso infrannuale trimestrale al ricorrere dei presupposti, compensazione orizzontale nei limiti previsti. Il confronto tra le due strade va fatto sui numeri, non per principio." },

    { type: "h2", text: "I rapporti infragruppo: dove si concentrano le contestazioni", id: "infragruppo" },
    { type: "p", text: "In un gruppo edile i rapporti tra società sono continui: l'immobiliare loca il capannone all'operativa, la holding presta servizi amministrativi, una società distacca personale su un cantiere di un'altra, una finanzia l'altra nei momenti di tensione. Ognuno di questi rapporti deve avere un contratto scritto, un corrispettivo congruo e una tracciabilità documentale." },
    { type: "ul", items: [
      "Locazione infragruppo: contratto registrato e canone di mercato con perizia o riferimenti oggettivi a supporto",
      "Prestazioni di servizi dalla holding: contratto che descriva le prestazioni, criterio di determinazione del corrispettivo e riscontro documentale dell'effettiva esecuzione",
      "Distacco di personale: accordo scritto con indicazione dell'interesse del distaccante e della durata, rimborso del costo secondo la disciplina applicabile",
      "Finanziamenti infragruppo: contratto, tasso, piano di rimborso, tracciabilità dei flussi, attenzione alla postergazione nelle S.r.l.",
      "Cessioni di beni o rami: valutazione supportata, coerenza con i valori contabili e fiscali, adempimenti propri dell'operazione",
      "Utilizzo comune di mezzi e attrezzature: contratto di nolo con tariffa e rapportini di impiego",
    ] },
    { type: "p", text: "Il secondo punto merita una nota. Le prestazioni di servizi rese dalla holding alle controllate sono un'area di contestazione classica: l'ufficio verifica se il servizio è stato realmente reso, se è utile alla controllata e se il corrispettivo è congruo. La difesa non è il contratto ma la prova dell'esecuzione: relazioni, report, corrispondenza, output concreti. Un contratto di service senza traccia di attività è indifendibile." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Testo unico imposte sui redditi", ref: "Artt. 117 e seguenti TUIR", principle: "Le società controllate e la controllante possono congiuntamente esercitare l'opzione per la determinazione in capo alla controllante di un'unica base imponibile per il gruppo; l'opzione è irrevocabile per tre esercizi.", impact: "La compensazione di utili e perdite è possibile, ma con un vincolo triennale e con il limite delle perdite pregresse." },
      { court: "Testo unico imposte sui redditi", ref: "Art. 118, comma 2", principle: "Le perdite fiscali relative agli esercizi anteriori all'inizio della tassazione di gruppo possono essere utilizzate solo dalle società cui si riferiscono.", impact: "È il limite che spesso rende il consolidato meno utile di quanto sembri: va verificato prima di optare." },
      { court: "Disciplina IVA", principle: "La liquidazione dell'IVA di gruppo consente la compensazione delle posizioni a debito e a credito delle società partecipanti, con un regime di responsabilità solidale per le somme risultanti.", impact: "Utile dove una società accumula credito e un'altra versa, ma la solidarietà va valutata prima di aderire." },
    ] },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Gruppo con una holding, una società operativa storica che chiude con un reddito imponibile di 320.000 euro, una seconda operativa costituita per un'iniziativa immobiliare che chiude con una perdita di 180.000 euro, e un'immobiliare in sostanziale pareggio." },
    { type: "p", text: "Senza consolidato, la prima operativa versa IRES su 320.000 euro, mentre la seconda porta a nuovo una perdita che utilizzerà negli esercizi futuri secondo le regole ordinarie. L'esborso immediato è di circa 76.800 euro. Con il consolidato, il reddito complessivo di gruppo si riduce a 140.000 euro e l'IRES dovuta a circa 33.600 euro: la differenza è di oltre 43.000 euro di liquidità che resta nel gruppo." },
    { type: "p", text: "Prima di optare vanno però verificati tre elementi: che il requisito di controllo sussista dall'inizio del periodo d'imposta, che le perdite della seconda operativa siano maturate dopo l'ingresso nel consolidato e non prima, e che il vincolo triennale sia compatibile con eventuali operazioni straordinarie già in programma — una cessione o una fusione durante il triennio comporta effetti di interruzione." },
    { type: "note", text: "L'errore da non fare: optare per il consolidato per compensare perdite pregresse. Le perdite anteriori all'opzione restano utilizzabili solo dalla società che le ha prodotte: se erano quelle la ragione, il consolidato non risolve il problema. Lo scenario è illustrativo." },

    { type: "figure", slot: "consolidato-fiscale-gruppo-edile-2", alt: "Contratti infragruppo con relazioni e report a supporto", caption: "Un contratto di service senza traccia di attività è indifendibile: serve la prova dell'esecuzione." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Posso compensare la perdita di una società con l'utile di un'altra?", a: "Solo aderendo al consolidato fiscale nazionale, che consente di determinare un unico reddito complessivo di gruppo. Senza consolidato ogni società determina il proprio reddito autonomamente, e le perdite restano utilizzabili solo da chi le ha prodotte." },
      { q: "Il consolidato conviene sempre?", a: "No. Va valutato caso per caso, perché comporta un vincolo triennale, adempimenti aggiuntivi, un regime di responsabilità tra le società e il limite delle perdite pregresse, che non entrano nella compensazione di gruppo. Se il gruppo ha risultati stabilmente positivi ovunque, il beneficio è modesto." },
      { q: "Che requisiti servono per il consolidato?", a: "Un rapporto di controllo con partecipazione al capitale e agli utili superiore alla soglia prevista, sussistente dall'inizio del periodo d'imposta, e l'esercizio congiunto dell'opzione da parte di controllante e controllate. L'opzione è irrevocabile per tre esercizi." },
      { q: "Come devo documentare i rapporti tra le mie società?", a: "Con contratti scritti, corrispettivi congrui e prova dell'effettiva esecuzione. Per le prestazioni di servizi della holding la difesa non è il contratto ma l'output: relazioni, report, corrispondenza. Un contratto di service senza traccia di attività viene contestato con facilità." },
      { q: "Posso spostare liquidità tra le mie società?", a: "Sì, ma con un titolo: un finanziamento con contratto, tasso e piano di rimborso, un corrispettivo per una prestazione reale, una distribuzione di utili deliberata. I giroconti privi di qualificazione sono la prima cosa che una verifica esamina, e la riqualificazione ha effetti su reddito e IVA." },
      { q: "Cos'è l'IVA di gruppo e mi serve?", a: "È uno strumento distinto dal consolidato, che consente la liquidazione unitaria dell'IVA compensando posizioni a debito e a credito delle società partecipanti. Può essere utile quando una società accumula credito e un'altra versa, ma comporta responsabilità solidale e va confrontato con il rimborso infrannuale." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se il tuo gruppo si è formato per stratificazione, è probabile che i rapporti tra le società siano regolati male e che utili e perdite non si stiano compensando. Mandaci le visure, gli ultimi bilanci di ciascuna società e l'elenco dei rapporti reciproci in essere: verifichiamo la convenienza del consolidato e mettiamo in ordine la contrattualistica infragruppo. Per il disegno complessivo leggi le guide su holding e dividendi." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
