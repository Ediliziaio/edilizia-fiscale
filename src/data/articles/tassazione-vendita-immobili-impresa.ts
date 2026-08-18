import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "tassazione-vendita-immobili-impresa",
  title: "Vendita di immobili costruiti o ristrutturati: IVA, registro e plusvalenze",
  excerpt:
    "Chi vende decide meno di quanto crede: il regime dipende da chi è il venditore, da cosa è stato fatto sull'immobile e da quanto tempo è passato dall'ultimazione dei lavori. Quando si applica l'IVA, quando il registro e come si calcola la plusvalenza.",
  category: "Patrimonio",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-gold-dark to-gold",
  keywords: [
    "vendita immobili impresa costruzione iva",
    "cessione fabbricati regime iva o registro",
    "plusvalenza vendita immobile società",
    "cinque anni ultimazione lavori iva",
    "opzione imponibilità cessione fabbricati",
    "prezzo valore compravendita",
  ],
  intro:
    "Nella cessione di fabbricati il regime non si sceglie liberamente: dipende da chi vende, da che tipo di immobile si tratta e — per le imprese di costruzione o ristrutturazione — da quanto tempo è passato dall'ultimazione dei lavori. Entro il termine di legge la cessione è imponibile IVA per obbligo; oltre, è esente salvo opzione, con effetti pesanti sulla detrazione.",
};

export const seo = {
  seoTitle: "Vendita di Immobili: IVA, Registro e Plusvalenze",
  metaDescription:
    "Quando la cessione è imponibile IVA e quando esente, l'opzione per l'imponibilità, il reverse charge e il calcolo della plusvalenza per l'impresa edile.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — La regola base (art. 10, n. 8-bis e 8-ter, D.P.R. 633/1972): le cessioni di fabbricati sono esenti da IVA, salvo eccezioni. L'eccezione principale: le cessioni effettuate dalle imprese costruttrici o che hanno eseguito interventi di recupero, entro cinque anni dall'ultimazione dei lavori, sono imponibili per obbligo. Oltre i cinque anni: esenti, salvo opzione per l'imponibilità espressa in atto. L'effetto dell'esenzione: incide sul pro rata di detrazione e può comportare la rettifica della detrazione operata." },

    { type: "h2", text: "Chi vende e cosa ha fatto sull'immobile", id: "chi-vende" },
    { type: "p", text: "Il primo passaggio è qualificare il venditore. Una persona fisica che vende un immobile non agisce nell'esercizio d'impresa: l'operazione è fuori campo IVA e sconta le imposte di registro, ipotecaria e catastale, con eventuale plusvalenza tassabile se ricorrono i presupposti. Una società o un imprenditore che vende nell'esercizio dell'attività ricade invece nella disciplina IVA delle cessioni di fabbricati." },
    { type: "p", text: "Il secondo passaggio riguarda cosa è stato fatto sull'immobile. La disciplina attribuisce un trattamento particolare alle imprese costruttrici e a quelle che hanno eseguito sull'immobile interventi di restauro, risanamento conservativo, ristrutturazione edilizia o ristrutturazione urbanistica. Non basta possedere un immobile: conta aver realizzato o recuperato." },
    { type: "p", text: "Il terzo passaggio è il tempo trascorso dall'ultimazione dei lavori. Entro cinque anni la cessione da parte di quelle imprese è imponibile IVA per obbligo; oltre i cinque anni diventa esente, con facoltà di optare per l'imponibilità manifestando l'opzione nell'atto di cessione." },

    { type: "table", headers: ["Venditore", "Tipo di fabbricato", "Regime"], rows: [
      ["Impresa costruttrice o di recupero, entro 5 anni dall'ultimazione", "Abitativo o strumentale", "Imponibile IVA per obbligo"],
      ["Impresa costruttrice o di recupero, oltre 5 anni", "Abitativo", "Esente, salvo opzione per l'imponibilità in atto"],
      ["Impresa costruttrice o di recupero, oltre 5 anni", "Strumentale", "Esente, salvo opzione; con opzione si applica il reverse charge tra soggetti IVA"],
      ["Altra impresa (non costruttrice né di recupero)", "Abitativo", "Esente"],
      ["Altra impresa", "Strumentale", "Esente, salvo opzione per l'imponibilità"],
      ["Persona fisica non imprenditore", "Qualunque", "Fuori campo IVA: imposte di registro, ipotecaria e catastale"],
    ] },

    { type: "h2", text: "Perché l'esenzione può costare più dell'imposta", id: "esenzione" },
    { type: "p", text: "Vendere in esenzione sembra vantaggioso: nessuna IVA da addebitare all'acquirente, prezzo più appetibile sul mercato. Ma l'esenzione ha due effetti che raramente vengono considerati in fase di trattativa, e che possono costare più dell'imposta." },
    { type: "p", text: "Il primo è il pro rata. Le operazioni esenti incidono sulla percentuale di detrazione dell'IVA sugli acquisti dell'anno: un'impresa che effettua una cessione esente di importo rilevante può vedersi ridurre la detraibilità dell'IVA su tutti gli acquisti dell'esercizio, con un effetto che eccede largamente l'operazione singola." },
    { type: "p", text: "Il secondo è la rettifica della detrazione. Se sull'immobile ceduto in esenzione era stata detratta l'IVA — perché acquistato o costruito con imposta detratta — può scattare l'obbligo di rettificare quella detrazione in proporzione al periodo di osservazione residuo previsto per i beni immobili. È un esborso che si manifesta dopo la vendita e che va calcolato prima." },
    { type: "p", text: "Per questo l'opzione per l'imponibilità, dove ammessa, va valutata con un conto e non per abitudine. Se l'acquirente è un soggetto passivo che detrae l'IVA, l'imponibilità è spesso neutra per lui e conveniente per il venditore. Se l'acquirente è un privato, l'IVA è un costo effettivo e incide sul prezzo negoziabile." },

    { type: "figure", slot: "tassazione-vendita-immobili-impresa-1", alt: "Atto di compravendita immobiliare con documentazione dei lavori eseguiti", caption: "La data di ultimazione dei lavori decide il regime: va documentata, non ricordata." },

    { type: "h2", text: "Il reverse charge sulle cessioni di strumentali", id: "reverse-charge" },
    { type: "p", text: "Quando la cessione di un fabbricato strumentale avviene con opzione per l'imponibilità e l'acquirente è un soggetto passivo IVA, l'imposta è assolta con il meccanismo dell'inversione contabile: il cedente emette fattura senza addebito, il cessionario integra e assolve l'imposta." },
    { type: "p", text: "È un aspetto che va gestito correttamente in atto e in fattura, con l'indicazione dell'opzione esercitata e del richiamo normativo. Errori in questa fase sono frequenti perché il notaio e il consulente fiscale lavorano su documenti diversi: l'opzione va espressa nell'atto, e la fattura deve esserne coerente." },
    { type: "p", text: "Per il venditore l'effetto pratico è duplice: non incassa l'IVA, ma evita l'esenzione e quindi il pro rata e la rettifica della detrazione. Per l'acquirente soggetto passivo l'operazione è finanziariamente neutra. È la combinazione che nella maggior parte dei casi conviene a entrambi." },

    { type: "h2", text: "La plusvalenza: come si calcola e quando si tassa", id: "plusvalenza" },
    { type: "p", text: "Sul fronte delle imposte dirette il trattamento dipende dalla natura dell'immobile per il venditore. Per un'impresa di costruzione gli immobili realizzati per la vendita sono merce: il ricavo concorre integralmente al reddito d'impresa, senza logica di plusvalenza." },
    { type: "p", text: "Per gli immobili strumentali o patrimoniali di un'impresa, la differenza tra corrispettivo e costo fiscalmente riconosciuto al netto degli ammortamenti costituisce plusvalenza, che concorre al reddito. Se il bene è posseduto da almeno tre anni, la plusvalenza può essere rateizzata in quote costanti nell'esercizio di realizzo e nei successivi, entro il limite previsto." },
    { type: "p", text: "Per la persona fisica che vende fuori dall'esercizio d'impresa, la plusvalenza è tassabile solo al ricorrere dei presupposti previsti dal TUIR, tra cui la cessione entro cinque anni dall'acquisto o dalla costruzione, con esclusioni specifiche. Per i terreni edificabili la disciplina è autonoma e la plusvalenza è sempre rilevante." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "D.P.R. 633/1972", ref: "Art. 10, n. 8-bis", principle: "Sono esenti le cessioni di fabbricati abitativi, escluse quelle effettuate dalle imprese costruttrici o che vi hanno eseguito interventi di recupero entro cinque anni dall'ultimazione, e quelle per cui il cedente manifesti in atto l'opzione per l'imposizione.", impact: "La finestra dei cinque anni è la variabile che l'impresa deve monitorare: oltre, il regime cambia e con esso il conto." },
      { court: "D.P.R. 633/1972", ref: "Art. 10, n. 8-ter", principle: "Sono esenti le cessioni di fabbricati strumentali, salve le eccezioni previste e salva l'opzione per l'imposizione manifestata in atto dal cedente.", impact: "Con opzione e acquirente soggetto passivo si applica l'inversione contabile: neutra per l'acquirente, utile al venditore." },
      { court: "D.P.R. 633/1972", ref: "Art. 19-bis2", principle: "La detrazione operata è soggetta a rettifica quando i beni ammortizzabili sono utilizzati per operazioni che danno diritto alla detrazione in misura diversa, nel periodo di osservazione previsto per i beni immobili.", impact: "Vendere in esenzione può obbligare a restituire parte dell'IVA detratta: va calcolato prima di impostare la trattativa." },
    ] },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Impresa di costruzioni che ha ultimato nel 2021 un intervento di ristrutturazione edilizia su una palazzina, con IVA detratta sui costi di realizzazione. Nel 2026 restano invenduti due appartamenti, per un valore complessivo di 520.000 euro." },
    { type: "p", text: "La finestra dei cinque anni dall'ultimazione è ormai scaduta: la cessione non è più imponibile per obbligo, ma esente salvo opzione. Se l'acquirente è un privato, l'esenzione appare vantaggiosa perché evita di caricare l'IVA sul prezzo. Ma sull'immobile era stata detratta l'IVA sui costi di ristrutturazione, e la cessione esente può far scattare la rettifica della detrazione per la quota corrispondente al periodo di osservazione residuo." },
    { type: "p", text: "Il calcolo va fatto prima di impostare la trattativa, non dopo il rogito: confrontare l'effetto della rettifica e l'impatto sul pro rata dell'esercizio con l'alternativa dell'opzione per l'imponibilità e il suo effetto sul prezzo negoziabile. Con un acquirente privato l'IVA è un costo reale e riduce il prezzo ottenibile; con un acquirente soggetto passivo l'opzione è quasi sempre la strada migliore per il venditore." },
    { type: "note", text: "L'errore da non fare: decidere il regime al momento del rogito. La data di ultimazione dei lavori, l'IVA detratta sui costi e il periodo di osservazione residuo vanno ricostruiti prima di mettere l'immobile sul mercato, perché condizionano il prezzo. Lo scenario è illustrativo: la valutazione va fatta sul caso concreto." },

    { type: "figure", slot: "tassazione-vendita-immobili-impresa-2", alt: "Prospetto di calcolo della rettifica della detrazione IVA", caption: "La rettifica della detrazione si calcola prima della trattativa: influisce sul prezzo minimo accettabile." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quando la vendita di un immobile è soggetta a IVA?", a: "Le cessioni di fabbricati sono in via generale esenti, ma quelle effettuate dalle imprese costruttrici o che hanno eseguito interventi di recupero entro cinque anni dall'ultimazione dei lavori sono imponibili per obbligo. Oltre i cinque anni la cessione è esente, salvo opzione per l'imponibilità espressa in atto." },
      { q: "Da quando decorrono i cinque anni?", a: "Dall'ultimazione dei lavori di costruzione o di recupero, non dall'acquisto del terreno né dalla data di accatastamento. È un dato che va documentato con le comunicazioni all'ente competente e con i certificati di fine lavori: ricostruirlo a memoria è rischioso." },
      { q: "Conviene sempre vendere in esenzione?", a: "No. L'esenzione incide sul pro rata di detrazione dell'esercizio e può far scattare la rettifica della detrazione operata sull'immobile. Il conto va fatto prima: in alcuni casi l'opzione per l'imponibilità è più conveniente, soprattutto se l'acquirente è un soggetto passivo che detrae." },
      { q: "Cos'è la rettifica della detrazione?", a: "È l'obbligo di restituire parte dell'IVA detratta quando il bene viene destinato a operazioni che danno diritto alla detrazione in misura diversa, entro il periodo di osservazione previsto per gli immobili. Una cessione esente di un immobile su cui si era detratta l'imposta può farla scattare." },
      { q: "Come si applica il reverse charge nella cessione di uno strumentale?", a: "Quando la cessione di un fabbricato strumentale avviene con opzione per l'imponibilità e l'acquirente è un soggetto passivo IVA, l'imposta è assolta con inversione contabile: il cedente fattura senza addebito, il cessionario integra. L'opzione va espressa in atto e la fattura deve esserne coerente." },
      { q: "Come si calcola la plusvalenza per la società?", a: "Per gli immobili merce non c'è plusvalenza: il ricavo concorre integralmente al reddito. Per gli strumentali e i patrimoniali la plusvalenza è la differenza tra corrispettivo e costo fiscalmente riconosciuto al netto degli ammortamenti, con possibilità di rateizzazione se il bene è posseduto da almeno tre anni." },
      { q: "E se vendo come persona fisica?", a: "L'operazione è fuori campo IVA e sconta le imposte di registro, ipotecaria e catastale. La plusvalenza è tassabile solo al ricorrere dei presupposti previsti dal TUIR, tra cui la cessione entro cinque anni dall'acquisto o dalla costruzione, con esclusioni specifiche. Per i terreni edificabili la disciplina è autonoma." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai immobili invenduti da iniziative concluse, il regime applicabile alla loro vendita è probabilmente cambiato senza che nessuno lo abbia ricalcolato. Mandaci l'elenco degli immobili con data di ultimazione lavori, IVA detratta sui costi e valore di realizzo atteso: calcoliamo il regime, l'eventuale rettifica e il prezzo minimo che ha senso accettare. Per il contesto leggi le guide su immobili e società e su fiscalità dell'impresa edile." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
