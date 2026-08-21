import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "appalto-non-genuino-distacco-somministrazione",
  title: "Appalto non genuino, distacco e somministrazione: dove passa il confine",
  excerpt:
    "Se la squadra che entra in cantiere riceve ordini dal tuo capocantiere, non è un subappalto: è manodopera. Le tre figure a confronto, la responsabilità solidale dell'art. 29, e cosa rischia chi utilizza lavoratori interposti.",
  category: "Lavoro",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust to-brand-dark",
  keywords: [
    "appalto non genuino edilizia",
    "interposizione illecita manodopera",
    "differenza appalto somministrazione distacco",
    "responsabilità solidale appalti art 29",
    "somministrazione fraudolenta sanzioni",
    "nolo a caldo o subappalto",
  ],
  intro:
    "L'appalto genuino richiede che l'appaltatore organizzi i mezzi e gestisca il lavoro a proprio rischio (art. 1655 c.c.). Quando invece mette a disposizione solo persone, dirette da altri, si esce dall'appalto ed entra la disciplina della somministrazione — riservata alle agenzie autorizzate. In cantiere il confine si vede da un dettaglio: chi dà gli ordini.",
};

export const seo = {
  seoTitle: "Appalto non Genuino, Distacco e Somministrazione",
  metaDescription:
    "Dove passa il confine tra subappalto e fornitura di manodopera, la responsabilità solidale dell'art. 29 e cosa rischia chi utilizza lavoratori interposti.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — L'appalto (art. 1655 c.c.): l'appaltatore organizza i mezzi necessari e assume la gestione a proprio rischio. È genuino quando dirige il proprio personale e risponde del risultato. Il distacco (art. 30 D.lgs. 276/2003): il datore mette temporaneamente un lavoratore a disposizione di un altro soggetto, ma deve esistere un proprio interesse. La somministrazione: fornitura di lavoratori, riservata alle agenzie autorizzate. Se l'appalto non è genuino: il lavoratore può chiedere la costituzione del rapporto in capo all'utilizzatore, e in presenza di intento elusivo scatta la somministrazione fraudolenta. La solidarietà (art. 29): committente e appaltatore rispondono in solido per retribuzioni e contributi entro due anni dalla cessazione." },

    { type: "h2", text: "Perché in edilizia il confine è così sottile", id: "perche" },
    { type: "p", text: "Nessun altro settore ha la stessa densità di rapporti tra imprese sullo stesso luogo di lavoro. Su un cantiere di media dimensione operano contemporaneamente l'affidataria, tre o quattro subappaltatori, un paio di noleggiatori con operatore, e squadre che arrivano per lavorazioni di pochi giorni. Tutti sotto un unico coordinamento della sicurezza, tutti nello stesso perimetro fisico." },
    { type: "p", text: "Quella prossimità rende naturale una cosa che giuridicamente non lo è: che il capocantiere dell'affidataria dica alle squadre altrui cosa fare. È efficiente, è quello che serve per far avanzare il lavoro, e nel novanta per cento dei casi nessuno ci pensa. Ma è anche il fatto da cui si ricostruisce l'interposizione." },
    { type: "p", text: "Il punto va detto con precisione, perché l'equivoco è diffuso. Il coordinamento in materia di sicurezza è obbligatorio e non genera interposizione: il coordinatore e l'affidataria devono coordinare le attività, ed è la legge a imporlo. Ciò che genera interposizione è la direzione del lavoro: decidere cosa fa quel lavoratore, come lo fa, in che ordine, con quali tempi." },

    { type: "figure", slot: "appalto-non-genuino-distacco-somministrazione-1", alt: "Cantiere con squadre di imprese diverse che lavorano nello stesso perimetro", caption: "Coordinare la sicurezza è obbligatorio. Dirigere il lavoro di altri è un'altra cosa." },

    { type: "h2", text: "Le tre figure a confronto", id: "confronto" },
    { type: "table", headers: ["Elemento", "Appalto genuino", "Distacco", "Somministrazione"], rows: [
      ["Cosa si fornisce", "Un risultato: un'opera o un servizio", "Un lavoratore, temporaneamente", "Lavoratori, come attività d'impresa"],
      ["Chi dirige il lavoratore", "L'appaltatore, con propri preposti", "L'utilizzatore, ma il datore resta il distaccante", "L'utilizzatore"],
      ["Chi organizza i mezzi", "L'appaltatore", "Non rilevante", "L'utilizzatore"],
      ["Chi assume il rischio", "L'appaltatore, sul risultato", "Il distaccante resta datore", "L'agenzia, sul rapporto di lavoro"],
      ["Chi può farlo", "Qualunque impresa", "Qualunque datore, con proprio interesse e temporaneità", "Solo agenzie autorizzate"],
      ["Se manca il presupposto", "Si riqualifica come somministrazione irregolare", "Distacco illegittimo: rapporto imputabile all'utilizzatore", "—"],
    ] },
    { type: "p", text: "La riga sui mezzi merita una precisazione, perché è quella che le imprese usano male in difesa. L'organizzazione dei mezzi non significa necessariamente possedere macchinari: nei servizi ad alta intensità di manodopera può consistere nell'esercizio del potere organizzativo e direttivo sui lavoratori impiegati. Un'impresa di posa che entra con propri preposti, propri utensili e propria organizzazione del lavoro fa un appalto genuino anche se il ponteggio è dell'affidataria." },
    { type: "p", text: "Il distacco è la figura meno conosciuta delle tre e in edilizia viene usata poco, spesso perché non si sa che esiste. Richiede due presupposti: un interesse del distaccante — che deve essere proprio, specifico e non ridursi al mero corrispettivo — e la temporaneità. È uno strumento legittimo tra imprese di un gruppo o tra imprese legate da rapporti stabili, purché quei due presupposti ci siano e siano documentati." },

    { type: "h2", text: "Gli indici che fanno riqualificare un subappalto", id: "indici" },
    { type: "p", text: "Nelle verifiche ispettive la riqualificazione non si fonda sul contratto ma su come le cose funzionavano in cantiere. Gli elementi che pesano sono sempre gli stessi, e conviene conoscerli per organizzarsi di conseguenza." },
    { type: "ul", items: [
      "Chi impartiva le direttive quotidiane ai lavoratori: se le riceveva dal capocantiere dell'affidataria, è l'indice più forte",
      "Assenza di un preposto del subappaltatore in cantiere, o presenza puramente formale",
      "Attrezzature e materiali interamente forniti dall'affidataria, senza alcun apporto organizzativo del subappaltatore",
      "Corrispettivo determinato sulle ore lavorate anziché sulla lavorazione eseguita: è il segnale contrattuale più evidente",
      "Assenza di un capitolato o di un computo delle lavorazioni affidate, con un oggetto contrattuale genericamente descritto",
      "Lavoratori del subappaltatore impiegati indifferentemente su lavorazioni diverse da quelle affidate",
      "Nessun rischio economico in capo al subappaltatore: nessuna penale, nessuna garanzia, nessuna responsabilità sul risultato",
    ] },
    { type: "p", text: "Il quarto punto è quello che vediamo più spesso nei contratti che ci passano davanti. Un subappalto pagato a ore è un subappalto che si presenta in verifica già indebolito: se il corrispettivo dipende dal tempo impiegato e non dall'opera realizzata, il rischio del risultato non è dell'appaltatore. È una scelta contrattuale che si può correggere in dieci minuti e che raramente qualcuno corregge." },
    { type: "p", text: "Il quinto è il rimedio più semplice a tutti gli altri. Un contratto di subappalto con il computo delle lavorazioni affidate, i prezzi unitari, i termini e le penali è un documento che descrive un appalto. Un contratto di tre righe che affida genericamente «lavorazioni edili varie» descrive una fornitura di manodopera, qualunque sia il titolo in intestazione." },

    { type: "caselaw", title: "Cosa dicono le norme", items: [
      { court: "Codice civile", ref: "Art. 1655", principle: "L'appalto è il contratto con il quale una parte assume, con organizzazione dei mezzi necessari e con gestione a proprio rischio, il compimento di un'opera o di un servizio verso un corrispettivo in denaro.", impact: "Organizzazione dei mezzi e rischio sono i due requisiti: se mancano, il contratto è un appalto solo nel nome." },
      { court: "D.lgs. 276/2003", ref: "Art. 29, comma 2", principle: "Il committente è obbligato in solido con l'appaltatore, entro il limite di due anni dalla cessazione dell'appalto, a corrispondere ai lavoratori i trattamenti retributivi e i contributi previdenziali dovuti.", impact: "La solidarietà non dipende dalla genuinità dell'appalto: c'è comunque. Verificare la regolarità dei subappaltatori è protezione, non cortesia." },
      { court: "D.lgs. 276/2003", ref: "Art. 30", principle: "Il distacco si configura quando un datore di lavoro, per soddisfare un proprio interesse, pone temporaneamente uno o più lavoratori a disposizione di altro soggetto per l'esecuzione di una determinata attività lavorativa.", impact: "Interesse proprio e temporaneità sono costitutivi: senza di essi il distacco è illegittimo e il rapporto è imputabile all'utilizzatore." },
      { court: "D.lgs. 81/2015", ref: "Art. 38 e art. 38-bis", principle: "In caso di somministrazione irregolare il lavoratore può chiedere la costituzione del rapporto di lavoro in capo all'utilizzatore; quando la somministrazione è posta in essere con la specifica finalità di eludere norme inderogabili di legge o di contratto collettivo si configura la somministrazione fraudolenta.", impact: "Il rischio non è solo sanzionatorio: è la costituzione del rapporto di lavoro in capo a chi ha utilizzato i lavoratori." },
    ] },

    { type: "h2", text: "Cosa si rischia, in concreto", id: "rischi" },
    { type: "p", text: "Il primo rischio è quello che pesa di più e viene considerato per ultimo: il lavoratore interposto può chiedere che il rapporto di lavoro sia costituito in capo all'utilizzatore. Significa che l'impresa che credeva di aver comprato una lavorazione si ritrova un dipendente, con tutta l'anzianità maturata e le relative conseguenze retributive e contributive." },
    { type: "p", text: "Il secondo è sanzionatorio, in capo sia all'utilizzatore sia al soggetto che ha fornito i lavoratori, con importi commisurati ai lavoratori coinvolti e alle giornate. Quando emerge l'intento elusivo si aggiunge la fattispecie della somministrazione fraudolenta, con un aggravamento del quadro." },
    { type: "p", text: "Il terzo è fiscale, e collega questa materia al resto del sito. Un costo per prestazioni riqualificate come manodopera interposta è un costo la cui inerenza e la cui documentazione vengono messe in discussione: si torna alle contestazioni descritte nella guida sui costi deducibili, dove il subappalto è la voce più esposta. E si aggiunge il tema dell'IVA, perché il regime applicabile a un appalto e quello applicabile a una somministrazione non sono i medesimi." },
    { type: "p", text: "Il quarto è la responsabilità solidale dell'art. 29, che però va tenuta distinta. Quella c'è comunque, anche nell'appalto perfettamente genuino: committente e appaltatore rispondono in solido per retribuzioni e contributi dei lavoratori impiegati, entro due anni dalla cessazione dell'appalto. Non è una sanzione per un comportamento scorretto: è una regola di sistema, e si gestisce con la verifica documentale dei subappaltatori." },

    { type: "h2", text: "Il nolo a caldo: la zona grigia più frequente", id: "nolo" },
    { type: "p", text: "È il caso che in edilizia produce più incertezza. Il nolo a freddo — la macchina senza operatore — è una locazione di bene mobile e non pone problemi. Il nolo a caldo, con l'operatore del noleggiante, sta esattamente sul confine di cui parliamo." },
    { type: "p", text: "La linea di orientamento è la solita: se l'operatore lavora sotto la direzione e a rischio del noleggiante per realizzare un risultato — sbancare un'area, movimentare materiale secondo un programma proprio — il rapporto tende all'appalto di servizi. Se invece il mezzo e l'operatore vengono messi a disposizione dell'impresa utilizzatrice, che decide di volta in volta cosa fargli fare, ci si avvicina alla fornitura di manodopera." },
    { type: "p", text: "L'indicazione operativa è di scriverlo nel contratto e comportarsi coerentemente in cantiere. Un contratto di nolo a caldo e un cantiere in cui l'operatore riceve ordini dal capocantiere dell'utilizzatore sono una combinazione che, in verifica, viene riqualificata — e il contratto, da difesa, diventa la prova che le parti sapevano quale fosse la qualificazione corretta e ne hanno scelta un'altra." },

    { type: "figure", slot: "appalto-non-genuino-distacco-somministrazione-2", alt: "Contratto di subappalto con computo delle lavorazioni affidate e prezzi unitari", caption: "Un contratto con computo, prezzi unitari e penali descrive un appalto. Tre righe generiche descrivono manodopera." },

    { type: "h2", text: "Come si organizza un subappalto che regge", id: "come-organizzare" },
    { type: "ol", items: [
      "Contratto scritto con l'oggetto descritto per lavorazioni, computo allegato e prezzi unitari: mai un affidamento generico",
      "Corrispettivo commisurato alla lavorazione eseguita, non alle ore impiegate",
      "Preposto del subappaltatore presente in cantiere, nominato per iscritto e realmente operativo",
      "Direttive quotidiane ai lavoratori impartite dal preposto del subappaltatore, non dal capocantiere dell'affidataria",
      "Penali, termini e responsabilità sul risultato previsti in contratto: è il rischio che qualifica l'appalto",
      "Verifica documentale della regolarità del subappaltatore prima dell'autorizzazione e prima di ogni pagamento, per la solidarietà dell'art. 29",
      "Evidenza delle denunce del subappaltatore riferite al cantiere, che serve anche per la congruità della manodopera",
    ] },
    { type: "p", text: "I punti tre e quattro sono organizzativi e sono i più difficili da tenere, perché vanno contro l'efficienza immediata del cantiere. Ma la loro assenza è precisamente ciò che si ricostruisce in verifica, sentendo i lavoratori. Una nomina scritta del preposto e una riunione di coordinamento verbalizzata valgono più di qualunque clausola contrattuale." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa affidataria di una ristrutturazione. Per accelerare le finiture affida a un'impresa terza «lavorazioni di finitura e assistenze murarie», con corrispettivo determinato in 32 euro per ora lavorata. La squadra entra in cantiere con i propri utensili manuali; ponteggi, materiali e attrezzature sono dell'affidataria. Il capocantiere dell'affidataria assegna ogni mattina le lavorazioni ai quattro operai." },
    { type: "p", text: "Nessuno in questa situazione sta agendo in malafede: l'affidataria ha un problema di tempi, l'impresa terza ha squadre disponibili, il prezzo a ora è il modo più semplice di regolare il rapporto. Ma tutti gli indici puntano nella stessa direzione. Corrispettivo a ore, oggetto generico, nessun preposto, mezzi dell'affidataria, direttive del capocantiere: in verifica questo è un appalto non genuino." },
    { type: "p", text: "Le conseguenze potenziali si sommano: richiesta di costituzione del rapporto in capo all'affidataria da parte dei quattro lavoratori, sanzioni per entrambe le imprese, contestazione dell'inerenza del costo e del regime IVA applicato." },
    { type: "p", text: "La correzione, fatta prima, sarebbe stata poco costosa. Affidare per lavorazioni con un computo — tanti metri quadri di intonaco, tante di cartongesso, prezzi unitari — invece che a ore. Chiedere la nomina scritta di un preposto e verbalizzare il coordinamento. Prevedere termini e una penale. Le stesse persone, lo stesso cantiere, lo stesso prezzo complessivo: cambia solo la struttura del rapporto, e con essa la sua qualificazione." },
    { type: "note", text: "L'errore da non fare: pensare che il titolo del contratto qualifichi il rapporto. In verifica si sentono i lavoratori e si guarda chi dava gli ordini: se il contratto dice una cosa e il cantiere ne dice un'altra, prevale il cantiere. Lo scenario è illustrativo: la qualificazione va valutata sul rapporto concreto." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quando un subappalto non è genuino?", a: "Quando manca l'organizzazione dei mezzi necessari o l'assunzione del rischio da parte dell'appaltatore, secondo l'art. 1655 c.c. Nella pratica lo si ricostruisce da chi impartiva le direttive ai lavoratori, dall'assenza di un preposto, dal corrispettivo determinato a ore e dall'oggetto contrattuale generico." },
      { q: "Il mio capocantiere può dare ordini alla squadra del subappaltatore?", a: "Deve coordinare le attività ai fini della sicurezza, ed è obbligato a farlo. Ma non deve dirigere il lavoro: cosa fa quel lavoratore, come e in che ordine lo decide il preposto del subappaltatore. È la distinzione da cui dipende la qualificazione del rapporto." },
      { q: "Pagare a ore rende il subappalto non genuino?", a: "Non automaticamente, ma è l'indice contrattuale più evidente: se il corrispettivo dipende dal tempo impiegato e non dalla lavorazione eseguita, il rischio del risultato non è dell'appaltatore. È una scelta correggibile facilmente e che raramente viene corretta." },
      { q: "Cosa rischio se un appalto viene riqualificato?", a: "Il lavoratore interposto può chiedere la costituzione del rapporto in capo all'utilizzatore, con l'anzianità maturata. Si aggiungono le sanzioni per entrambe le imprese, l'aggravamento in caso di intento elusivo, e sul piano fiscale la contestazione dell'inerenza del costo e del regime IVA applicato." },
      { q: "Che cos'è la responsabilità solidale dell'art. 29?", a: "L'obbligo del committente di rispondere in solido con l'appaltatore per retribuzioni e contributi dei lavoratori impiegati nell'appalto, entro due anni dalla cessazione. Esiste anche nell'appalto perfettamente genuino: non è una sanzione, è una regola di sistema che si gestisce con la verifica documentale." },
      { q: "Il nolo a caldo è un appalto o una fornitura di manodopera?", a: "Dipende da chi dirige l'operatore e da chi assume il rischio del risultato. Se il noleggiante organizza e risponde del risultato si va verso l'appalto di servizi; se mezzo e operatore sono messi a disposizione dell'utilizzatore che decide di volta in volta, si va verso la fornitura di manodopera." },
      { q: "Posso distaccare un lavoratore a un'altra mia società?", a: "Sì, se esistono i presupposti dell'art. 30 del D.lgs. 276/2003: un interesse proprio del distaccante, specifico e non riducibile al corrispettivo, e la temporaneità. Nei gruppi societari è uno strumento legittimo e utile, ma i due presupposti vanno documentati nell'accordo di distacco." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai contratti di subappalto pagati a ore o con oggetto genericamente descritto, la posizione è più fragile di quanto sembri e si corregge con poco. Mandaci due o tre contratti tipo dalla pagina contatti: verifichiamo la qualificazione, indichiamo cosa cambiare nella struttura del rapporto e nella prassi di cantiere. Per il contesto leggi le guide su costo del lavoro edile, [congruità della manodopera](/guide/congruita-manodopera-durc) e costi deducibili." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa vigente." },
  ],
};
