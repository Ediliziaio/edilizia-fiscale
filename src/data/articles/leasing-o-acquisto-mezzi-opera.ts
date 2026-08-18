import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "leasing-o-acquisto-mezzi-opera",
  title: "Leasing, acquisto o noleggio dei mezzi d'opera: come si decide davvero",
  excerpt:
    "Escavatore, gru, autocarro: tre strade con effetti diversi su deduzione, cassa, bilancio e requisiti di qualificazione. Il confronto va fatto sul costo orario del mezzo, non sulla rata — ed è lì che quasi tutti sbagliano.",
  category: "Controllo",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-trust-dark",
  keywords: [
    "leasing o acquisto mezzi d'opera",
    "deducibilità canoni leasing durata minima",
    "noleggio a lungo termine escavatore",
    "ammortamento macchine operatrici edilizia",
    "costo orario mezzo di cantiere",
    "leasing requisiti soa attrezzatura",
  ],
  intro:
    "La domanda arriva sempre nella stessa forma: conviene comprare o prendere in leasing? È la domanda sbagliata, perché mette a confronto una rata con un esborso. Il confronto utile è tra costi orari del mezzo nelle tre configurazioni — acquisto, leasing, noleggio — e tiene dentro deduzione, cassa, impegni bancari e requisiti di qualificazione.",
};

export const seo = {
  seoTitle: "Leasing, Acquisto o Noleggio dei Mezzi d'Opera",
  metaDescription:
    "Tre strade a confronto su deduzione, cassa, bilancio e requisiti SOA: come si decide guardando il costo orario del mezzo e non la rata.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Acquisto: il bene entra tra le immobilizzazioni e si ammortizza secondo i coefficienti previsti; l'esborso è immediato o finanziato con mutuo. Leasing finanziario: i canoni sono deducibili a condizione che il contratto abbia una durata non inferiore ai due terzi del periodo di ammortamento (art. 102, comma 7, TUIR), con regole proprie per i veicoli. Noleggio: canoni deducibili per competenza, nessun bene in bilancio, massima flessibilità e costo più alto. Il criterio di scelta: il costo orario del mezzo, calcolato sulle ore di impiego previste, non la rata mensile. Il vincolo nascosto: leasing e mutuo consumano capacità di affidamento." },

    { type: "h2", text: "Perché la rata è il numero sbagliato", id: "rata" },
    { type: "p", text: "Un escavatore da 180.000 euro può costare 3.100 euro al mese in leasing a sessanta mesi, oppure 180.000 subito, oppure 4.200 al mese di noleggio a lungo termine con manutenzione inclusa. Messi in fila così, i tre numeri non dicono quale scelta convenga: dicono solo che tre cose diverse costano cifre diverse." },
    { type: "p", text: "Il numero che permette la decisione è il costo orario del mezzo, cioè quanto quel mezzo costa per ogni ora in cui produce. Ed è lo stesso numero che serve per il controllo di gestione, descritto nella guida sul margine di commessa: senza di esso non si sa quanto ribaltare sui cantieri, e con esso la scelta tra le tre configurazioni diventa aritmetica." },
    { type: "p", text: "Il costo orario si costruisce allo stesso modo in tutti e tre i casi: si prende il costo annuo complessivo della disponibilità del mezzo e lo si divide per le ore di impiego previste. Cambia cosa entra al numeratore." },
    { type: "table", headers: ["Voce del costo annuo", "Acquisto", "Leasing", "Noleggio a lungo termine"], rows: [
      ["Quota di ammortamento o canone", "Ammortamento secondo coefficiente", "Canone di competenza", "Canone di competenza"],
      ["Oneri finanziari", "Interessi sul finanziamento, se acceso", "Compresi nel canone", "Compresi nel canone"],
      ["Manutenzione ordinaria e straordinaria", "A carico dell'impresa", "A carico dell'impresa", "Di norma compresa"],
      ["Assicurazione e tasse di possesso", "A carico dell'impresa", "A carico dell'impresa", "Di norma comprese"],
      ["Fermo macchina e sostituzione", "Rischio dell'impresa", "Rischio dell'impresa", "Di norma coperto"],
      ["Valore residuo alla fine", "Realizzo dalla rivendita", "Riscatto o restituzione", "Nessuno"],
    ] },
    { type: "p", text: "Le righe su manutenzione e fermo macchina sono quelle che ribaltano più spesso il confronto. Un noleggio che costa il 30% in più della rata di leasing può risultare più conveniente su un mezzo con alta incidenza di manutenzione o con un impatto pesante del fermo — perché quel rischio, nell'acquisto e nel leasing, resta all'impresa e non compare in nessuna rata." },

    { type: "figure", slot: "leasing-o-acquisto-mezzi-opera-1", alt: "Escavatore e autocarro in cantiere, con officina di manutenzione sullo sfondo", caption: "Il confronto si fa sul costo orario del mezzo, non sulla rata: manutenzione e fermo macchina cambiano il risultato." },

    { type: "h2", text: "Il trattamento fiscale delle tre strade", id: "fiscale" },
    { type: "p", text: "Nell'acquisto il bene entra tra le immobilizzazioni materiali e il costo si recupera attraverso l'ammortamento, secondo i coefficienti previsti per la categoria. Gli eventuali interessi passivi sul finanziamento seguono le regole proprie della deducibilità degli oneri finanziari." },
    { type: "p", text: "Nel leasing finanziario i canoni sono deducibili per competenza, ma la deduzione è subordinata a una condizione di durata: l'art. 102, comma 7, del TUIR ammette la deduzione a condizione che la durata del contratto non sia inferiore ai due terzi del periodo di ammortamento corrispondente al coefficiente stabilito per il bene. Per i beni immobili e per i veicoli valgono regole specifiche." },
    { type: "p", text: "Il punto che genera più errori è che questa è una condizione fiscale, non contrattuale: si può stipulare un leasing di durata inferiore, ma in quel caso la deduzione dei canoni segue comunque la durata minima fiscale, con la ripresa delle quote eccedenti e il loro recupero negli esercizi successivi. Non si perde nulla, ma si sposta — e chi non lo sa costruisce previsioni sbagliate." },
    { type: "p", text: "Nel noleggio i canoni sono costi di competenza deducibili secondo le regole ordinarie, senza vincoli di durata: è la configurazione più semplice sul piano fiscale, e anche quella in cui l'impresa non ha alcun bene da gestire in bilancio." },
    { type: "p", text: "Sul piano contabile, la prassi nazionale prevede per il leasing la rilevazione dei canoni a conto economico secondo il metodo patrimoniale, con l'obbligo di fornire in nota integrativa le informazioni che consentono di apprezzare gli effetti che deriverebbero dal metodo finanziario. È un'informativa che la banca legge: un'impresa con molti leasing e una nota integrativa muta presenta un indebitamento che appare più basso di quello reale." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Testo unico imposte sui redditi", ref: "Art. 102, comma 7", principle: "Per i beni concessi in locazione finanziaria la deduzione dei canoni da parte dell'impresa utilizzatrice è ammessa per un periodo non inferiore ai due terzi del periodo di ammortamento corrispondente al coefficiente stabilito, con regole specifiche per immobili e veicoli.", impact: "La durata minima è fiscale, non contrattuale: un leasing più breve non fa perdere la deduzione, la sposta nel tempo." },
      { court: "Testo unico imposte sui redditi", ref: "Art. 102, commi 1-2", principle: "Le quote di ammortamento del costo dei beni materiali strumentali sono deducibili a partire dall'esercizio di entrata in funzione, in misura non superiore a quella risultante dall'applicazione dei coefficienti stabiliti con decreto.", impact: "Nell'acquisto il recupero del costo segue il coefficiente della categoria: va verificato prima di confrontare le alternative." },
      { court: "Principi contabili nazionali", principle: "I canoni di locazione finanziaria sono rilevati a conto economico secondo il metodo patrimoniale; in nota integrativa vanno fornite le informazioni relative agli effetti che si sarebbero prodotti applicando il metodo finanziario.", impact: "L'informativa in nota integrativa è ciò che consente alla banca di leggere l'indebitamento reale: ometterla non aiuta." },
    ] },

    { type: "h2", text: "Gli effetti che non stanno nel conto economico", id: "effetti" },
    { type: "p", text: "Tre conseguenze pesano sulla decisione quanto la deducibilità, e non compaiono nel confronto tra rate." },
    { type: "p", text: "La prima è il consumo di capacità di affidamento. Un leasing è un impegno che risulta agli istituti e concorre a formare l'esposizione complessiva dell'impresa. Lo stesso vale per un mutuo acceso per l'acquisto. Il noleggio operativo, a seconda della forma, può avere un impatto diverso. Per un'impresa che ha bisogno di plafond per le garanzie negli appalti — come descritto nella guida dedicata — non è un dettaglio: è la scelta tra avere o non avere capacità per la gara successiva." },
    { type: "p", text: "La seconda riguarda i requisiti di qualificazione. Tra i requisiti economico-finanziari per l'attestazione SOA figura l'adeguata dotazione di attrezzatura tecnica, e la disciplina considera anche i beni in disponibilità a titolo di locazione finanziaria e di noleggio, secondo i criteri previsti. Prima di scegliere la configurazione conviene verificare come incide sul requisito, soprattutto se si sta lavorando a un salto di classifica." },
    { type: "p", text: "La terza è il valore residuo. Un mezzo acquistato o riscattato resta di proprietà e ha un valore di realizzo: in un settore dove le macchine operatrici mantengono mercato per anni, quel valore è parte del conto. In compenso comporta il rischio di obsolescenza e l'onere della rivendita, che su alcune tipologie di mezzi non è banale." },

    { type: "h2", text: "Il criterio pratico: quante ore lo userai", id: "criterio" },
    { type: "p", text: "Riducendo tutto all'essenziale, la variabile che decide è l'utilizzo previsto. Un mezzo impiegato con continuità su più cantieri ammortizza il costo fisso su molte ore e rende conveniente la proprietà o il leasing; un mezzo impiegato per poche settimane l'anno ha un costo orario proibitivo in entrambe quelle configurazioni." },
    { type: "ol", items: [
      "Stimare le ore di impiego annue realistiche, sulla base dello storico e non delle intenzioni: è il denominatore e determina tutto",
      "Costruire il costo annuo nelle tre configurazioni, includendo manutenzione, assicurazione, fermo macchina e oneri finanziari",
      "Calcolare il costo orario di ciascuna e confrontarlo con la tariffa di nolo di mercato per quel mezzo",
      "Verificare l'impatto sulla capacità di affidamento presso gli istituti, considerando le garanzie necessarie per le gare in programma",
      "Verificare l'effetto sul requisito di attrezzatura tecnica, se la qualificazione è un obiettivo",
      "Decidere e poi ribaltare il costo orario sulle commesse che impiegano il mezzo, qualunque sia la configurazione scelta",
    ] },
    { type: "p", text: "L'ultimo punto vale a prescindere dalla scelta ed è quello che più spesso manca. Un mezzo di proprietà il cui costo resta nelle spese generali fa sembrare più redditizi i cantieri che lo usano e meno redditizi tutti gli altri. Un mezzo a noleggio la cui fattura non viene attribuita alla commessa produce lo stesso effetto. La configurazione contrattuale cambia la fiscalità; l'attribuzione a commessa cambia la qualità delle decisioni." },

    { type: "figure", slot: "leasing-o-acquisto-mezzi-opera-2", alt: "Prospetto di confronto tra costo orario in acquisto, leasing e noleggio", caption: "Il denominatore è l'ora di impiego reale: su un mezzo usato poche settimane l'anno nessuna proprietà regge." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Escavatore cingolato, valore 180.000 euro. L'impresa stima 900 ore di impiego annue sulla base dello storico degli ultimi tre anni. Manutenzione ordinaria e straordinaria stimata in 9.000 euro l'anno, assicurazione e tasse in 2.400, fermo macchina medio di quindici giorni con impatto stimato in 4.000 euro." },
    { type: "p", text: "Nell'ipotesi di acquisto con finanziamento, il costo annuo somma la quota di ammortamento secondo il coefficiente applicabile, gli interessi sul finanziamento e le voci di manutenzione, assicurazione e fermo. Diviso per 900 ore, restituisce il costo orario di quella configurazione." },
    { type: "p", text: "Nell'ipotesi di leasing, al canone annuo di competenza si sommano le stesse voci di manutenzione, assicurazione e fermo, perché restano a carico dell'impresa. Il costo orario risulta simile a quello dell'acquisto, con differenze legate al costo del denaro e al valore di riscatto." },
    { type: "p", text: "Nell'ipotesi di noleggio a lungo termine con manutenzione e sostituzione incluse, il canone è più alto ma assorbe manutenzione, assicurazione e fermo. Su 900 ore il costo orario risulta superiore agli altri due, ma la differenza si riduce sensibilmente rispetto a quanto suggerirebbe il confronto tra le sole rate. E su un utilizzo di 400 ore annue anziché 900 il risultato si capovolge: il costo fisso di proprietà e leasing si spalma su meno ore, mentre il noleggio si può dimensionare sull'uso." },
    { type: "note", text: "L'errore da non fare: stimare le ore di impiego sulle intenzioni invece che sullo storico. È il denominatore di tutto il calcolo, e sovrastimarlo fa sembrare conveniente una proprietà che poi resta ferma in deposito. Lo scenario è illustrativo: coefficienti, durate minime e canoni vanno verificati sul caso concreto." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Conviene di più comprare o prendere in leasing?", a: "Dipende dalle ore di impiego previste e dal costo del denaro. Il confronto va fatto sul costo orario del mezzo nelle diverse configurazioni, includendo manutenzione, assicurazione e fermo macchina: confrontare la rata di leasing con l'esborso di acquisto non risponde alla domanda." },
      { q: "Quanto deve durare un leasing per dedurre i canoni?", a: "L'art. 102, comma 7, del TUIR ammette la deduzione per un periodo non inferiore ai due terzi del periodo di ammortamento corrispondente al coefficiente del bene, con regole specifiche per immobili e veicoli. Un contratto più breve non fa perdere la deduzione: la distribuisce sulla durata minima fiscale." },
      { q: "Il noleggio a lungo termine conviene mai?", a: "Sì, su mezzi con utilizzo discontinuo, alta incidenza di manutenzione o forte impatto del fermo macchina. Il canone è più alto ma assorbe rischi che nelle altre configurazioni restano all'impresa e non compaiono in nessuna rata." },
      { q: "Il leasing consuma il mio plafond bancario?", a: "È un impegno che concorre a formare l'esposizione complessiva verso il sistema. Per un'impresa che deve rilasciare garanzie negli appalti pubblici, la scelta tra le configurazioni incide sulla capacità residua: va valutata insieme alle gare in programma, non isolatamente." },
      { q: "I mezzi in leasing valgono per i requisiti SOA?", a: "La disciplina della qualificazione considera anche i beni in disponibilità a titolo di locazione finanziaria e di noleggio, secondo i criteri previsti. Se stai lavorando a un salto di classifica, l'effetto della configurazione scelta va verificato prima dell'acquisto." },
      { q: "Come si calcola il costo orario di un mezzo?", a: "Costo annuo complessivo della disponibilità — ammortamento o canone, oneri finanziari, manutenzione, assicurazione, tasse, fermo macchina — diviso per le ore di impiego annue realistiche, stimate sullo storico. È lo stesso numero che serve per ribaltare il costo sulle commesse." },
      { q: "Devo attribuire il costo del mezzo alle commesse?", a: "Sì, sempre, qualunque sia la configurazione. Un mezzo il cui costo resta nelle spese generali fa sembrare più redditizi i cantieri che lo impiegano e meno redditizi tutti gli altri, e le decisioni commerciali che ne derivano vanno nella direzione sbagliata." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se stai valutando un acquisto importante, il calcolo utile richiede tre dati che probabilmente hai già: le ore di impiego storiche di mezzi analoghi, il costo di manutenzione degli ultimi esercizi e le condizioni offerte dalle tre configurazioni. Mandaceli dalla pagina contatti: costruiamo il confronto sul costo orario e verifichiamo l'impatto su affidamenti e requisiti. Per il contesto leggi le guide su margine di commessa, garanzie negli appalti e attestazione SOA." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026: coefficienti di ammortamento e regole di deducibilità vanno verificati sulla disciplina vigente." },
  ],
};
