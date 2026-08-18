import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "accertamento-superbonus-imprese",
  title: "Accertamenti sui crediti Superbonus: la difesa dell'impresa",
  excerpt:
    "Credito inesistente o non spettante, responsabilità del cessionario, atti di recupero: come si distinguono le contestazioni, quali documenti reggono e perché il fascicolo di commessa vale più di qualunque argomento.",
  category: "Fisco",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-navy via-trust-dark to-trust",
  keywords: [
    "accertamento superbonus impresa",
    "credito inesistente o non spettante",
    "atto di recupero credito d'imposta",
    "responsabilità cessionario crediti edilizi",
    "difesa contestazione bonus edilizi",
    "sequestro crediti d'imposta",
  ],
  intro:
    "Le contestazioni sui crediti da bonus edilizi si dividono in due categorie con conseguenze molto diverse: credito non spettante, quando l'intervento c'è ma manca un requisito o un adempimento, e credito inesistente, quando manca il presupposto sostanziale. La distinzione incide su sanzioni, termini e rilevanza penale, e si decide sui documenti di cantiere.",
};

export const seo = {
  seoTitle: "Accertamenti sui Crediti Superbonus: la Difesa",
  metaDescription:
    "Credito inesistente o non spettante, responsabilità del cessionario e atti di recupero: come si distinguono le contestazioni e quali documenti reggono.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Le due categorie: credito non spettante (l'intervento esiste, manca un requisito o un adempimento) e credito inesistente (manca il presupposto sostanziale). La differenza: incide su misura delle sanzioni, termini di accertamento e rilevanza penale. Il riferimento: le nozioni sono state ridefinite dal D.lgs. 87/2024. La difesa: si costruisce sul fascicolo di commessa — contratto, computo, SAL, bonifici, asseverazioni, foto datate ante e post operam. Il cessionario: risponde in funzione della diligenza usata nella verifica documentale all'acquisto." },

    { type: "h2", text: "Perché la distinzione conta più di tutto il resto", id: "distinzione" },
    { type: "p", text: "Quando arriva un atto di recupero, la prima domanda non è quanto chiedono ma come qualificano il credito. Un credito non spettante e un credito inesistente possono riguardare lo stesso importo e produrre conseguenze radicalmente diverse: cambia la misura della sanzione, cambiano i termini entro cui l'amministrazione può agire, cambia l'eventuale rilevanza penale della vicenda." },
    { type: "p", text: "La riforma del sistema sanzionatorio operata dal D.lgs. 87/2024 ha ridefinito le due nozioni, chiarendo che il credito non spettante è quello fondato su fatti reali ma utilizzato in difetto di un requisito o di un adempimento previsto, mentre il credito inesistente è quello privo del presupposto costitutivo, perché mancano gli elementi oggettivi o soggettivi che lo generano." },
    { type: "p", text: "Tradotto in linguaggio di cantiere: se i lavori sono stati eseguiti e il problema riguarda una comunicazione tardiva, un'asseverazione con un vizio formale, un massimale superato o un requisito documentale mancante, si è nell'area del credito non spettante. Se i lavori non sono stati eseguiti, o sono stati eseguiti su un immobile privo dei requisiti, o le fatture non corrispondono a prestazioni reali, si è nell'area del credito inesistente." },

    { type: "h2", text: "Il fascicolo che regge la difesa", id: "fascicolo" },
    { type: "p", text: "Nella quasi totalità delle contestazioni la differenza tra le due qualificazioni non si argomenta: si dimostra. E si dimostra con la documentazione prodotta durante i lavori, che nessun ragionamento successivo può sostituire." },
    { type: "ul", items: [
      "Contratto d'appalto con computo metrico dettagliato e prezzi unitari",
      "Titolo edilizio e comunicazioni all'ente competente, con date coerenti con l'esecuzione",
      "SAL approvati e asseverazioni tecniche, con gli allegati richiesti dalla normativa applicabile",
      "Fatture e bonifici parlanti, con causale, codice fiscale del beneficiario e partita IVA del destinatario",
      "Documentazione fotografica datata dello stato ante operam, in corso d'opera e post operam",
      "Documenti di trasporto dei materiali, rapportini di cantiere e denunce del personale impiegato",
      "Attestazioni di prestazione energetica e collaudi, dove previsti dall'intervento",
    ] },
    { type: "p", text: "La documentazione fotografica datata è la voce più sottovalutata e spesso la più efficace. Dimostra che l'intervento è stato materialmente eseguito, che è quello descritto negli atti e che l'immobile si trovava nello stato dichiarato: sono esattamente i tre elementi che separano un credito non spettante da uno inesistente." },

    { type: "figure", slot: "accertamento-superbonus-imprese-1", alt: "Fascicolo di commessa con asseverazioni, fatture e documentazione fotografica", caption: "Il fascicolo di commessa vale più di qualunque argomento: dimostra che l'opera è stata eseguita." },

    { type: "h2", text: "La posizione del cessionario", id: "cessionario" },
    { type: "p", text: "Chi ha acquistato crediti da terzi ha una posizione ulteriore da presidiare. La responsabilità del cessionario dipende dal grado di diligenza usato nella verifica documentale al momento dell'acquisto: il quadro normativo distingue tra chi ha operato in assenza di colpa e chi ha acquistato senza le verifiche che la situazione imponeva." },
    { type: "p", text: "Nella pratica, la difesa del cessionario si costruisce sulla documentazione raccolta prima dell'acquisto: la richiesta e l'esame dell'intero fascicolo dell'intervento, la verifica della congruità dei prezzi, il controllo della coerenza tra asseverazioni, titoli edilizi e stato dei luoghi, la tracciabilità dei pagamenti. Un acquisto perfezionato sulla base della sola comunicazione di cessione presente nel cassetto fiscale è la posizione più esposta." },
    { type: "p", text: "Va segnalato che nella catena delle cessioni la posizione dei diversi cessionari non è omogenea: chi ha acquistato per primo dal beneficiario ha avuto accesso a informazioni che il cessionario successivo non aveva. È un elemento che rileva nella valutazione della diligenza esigibile." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "D.lgs. 87/2024", ref: "Riforma del sistema sanzionatorio tributario", principle: "Sono stati ridefiniti i concetti di credito non spettante e credito inesistente, con misure sanzionatorie differenziate: il credito inesistente è quello privo, in tutto o in parte, del presupposto costitutivo.", impact: "La qualificazione dell'atto va contestata subito: è la variabile che incide di più sull'esito complessivo." },
      { court: "D.P.R. 600/1973", ref: "Art. 43", principle: "I termini ordinari di accertamento decorrono dalla presentazione della dichiarazione; per il recupero dei crediti d'imposta operano termini propri, più ampi nel caso di crediti qualificati come inesistenti.", impact: "Le posizioni sui bonus edilizi restano aperte per un tempo sensibilmente superiore a quello ordinario." },
      { court: "Prassi", principle: "La responsabilità del cessionario è valutata in funzione della diligenza esigibile nella verifica documentale al momento dell'acquisto del credito.", impact: "La documentazione raccolta prima dell'acquisto è ciò che distingue il cessionario diligente da quello esposto." },
    ] },

    { type: "h2", text: "Cosa fare quando arriva l'atto", id: "cosa-fare" },
    { type: "ol", items: [
      "Verificare immediatamente la qualificazione: l'atto parla di credito non spettante o inesistente? È la prima variabile da contestare, e va fatto subito",
      "Ricostruire il fascicolo completo dell'intervento, ordinato cronologicamente e per tipologia di documento, prima di formulare qualunque difesa",
      "Verificare i termini di notifica dell'atto rispetto alla disciplina applicabile alla fattispecie contestata",
      "Valutare l'adesione quando parte dei rilievi è fondata: consente una riduzione delle sanzioni e sospende il termine per il ricorso di 90 giorni",
      "Valutare il ricorso con istanza di sospensione quando l'esecuzione dell'atto compromette la continuità aziendale",
      "Verificare i profili penali quando la contestazione è di credito inesistente per importi rilevanti, coordinando la difesa tributaria con quella penale",
    ] },
    { type: "p", text: "Il quinto punto ha un peso particolare in edilizia. Un atto di recupero di importo significativo, se posto in esecuzione, può bloccare la continuità di un'impresa che ha cantieri aperti e obblighi verso dipendenti e fornitori. La richiesta di sospensione, sostenuta da una documentazione che dimostri il danno grave e irreparabile, è spesso il primo obiettivo processuale." },

    { type: "h2", text: "I crediti bloccati nel cassetto fiscale", id: "cassetto" },
    { type: "p", text: "Una situazione diversa dall'accertamento, ma altrettanto pesante, è quella dei crediti acquisiti e non utilizzabili perché oggetto di provvedimenti di sospensione o di sequestro. Qui il problema non è una pretesa da difendere ma liquidità immobilizzata a fronte di lavori già eseguiti e pagati." },
    { type: "p", text: "Le strade percorribili dipendono dal titolo del blocco. Se si tratta di sospensione dell'utilizzo in attesa di controlli, il percorso è documentale e amministrativo. Se si tratta di sequestro disposto in sede penale, la strada è l'istanza di dissequestro, che richiede di dimostrare l'estraneità della propria posizione rispetto alla condotta contestata a monte della catena." },
    { type: "p", text: "In entrambi i casi il fattore decisivo è lo stesso: la qualità della documentazione dell'intervento a cui il credito si riferisce. Un'impresa che può ricostruire l'intero ciclo — dal titolo edilizio alle foto post operam — ha una posizione difendibile anche quando il blocco nasce da condotte di altri soggetti della catena." },

    { type: "figure", slot: "accertamento-superbonus-imprese-2", alt: "Cassetto fiscale con crediti d'imposta sospesi", caption: "Crediti bloccati: qui il problema non è una pretesa da difendere ma liquidità ferma su lavori già pagati." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impresa che ha realizzato interventi di efficientamento su tre condomini, per crediti complessivi di 1,9 milioni acquisiti tramite sconto in fattura. Riceve un atto di recupero per 480.000 euro riferito a uno dei tre interventi, con qualificazione di credito inesistente motivata dalla ritenuta incongruità dei prezzi applicati e da un'asseverazione ritenuta non adeguatamente supportata." },
    { type: "p", text: "L'esame del fascicolo mostra che i lavori sono stati integralmente eseguiti: esistono contratto, computo metrico, SAL approvati dal direttore dei lavori, fatture, bonifici tracciati, documentazione fotografica datata dello stato ante e post operam, documenti di trasporto dei materiali e denunce in Cassa Edile del personale impiegato nel periodo." },
    { type: "p", text: "La difesa si concentra quindi sulla qualificazione: la contestazione riguarda la congruità dei prezzi e un profilo dell'asseverazione, non l'esistenza dell'intervento. Un intervento realmente eseguito, con un vizio relativo a un requisito o alla documentazione tecnica, non integra la nozione di credito privo del presupposto costitutivo. La riqualificazione da inesistente a non spettante cambia la misura della sanzione, i termini applicabili e i profili ulteriori della vicenda." },
    { type: "note", text: "L'errore da non fare: rispondere all'atto entrando subito nel merito dei prezzi senza contestare prima la qualificazione del credito. È la qualificazione a determinare il perimetro dell'intera vicenda, e va affrontata come prima questione. Lo scenario è illustrativo: ogni atto va valutato sui rilievi concreti." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Che differenza c'è tra credito inesistente e non spettante?", a: "Il credito non spettante esiste nel presupposto ma è stato utilizzato in difetto di un requisito o di un adempimento. Il credito inesistente è privo del presupposto costitutivo: i lavori non ci sono, o l'immobile non aveva i requisiti. La differenza incide su sanzioni, termini e rilevanza penale." },
      { q: "Quali documenti servono per difendersi?", a: "L'intero fascicolo dell'intervento: contratto e computo, titolo edilizio e comunicazioni, SAL e asseverazioni, fatture e bonifici parlanti, documentazione fotografica datata ante e post operam, DDT dei materiali e denunce del personale. La fotografia datata è spesso l'elemento più efficace." },
      { q: "Quanto tempo ha l'Agenzia per recuperare un credito?", a: "Per gli atti di recupero dei crediti d'imposta operano termini propri, più ampi di quelli ordinari nel caso di crediti qualificati come inesistenti. È la ragione per cui le posizioni sui bonus edilizi restano aperte molto più a lungo delle annualità dichiarative ordinarie." },
      { q: "Ho comprato crediti da terzi: rispondo comunque?", a: "La responsabilità del cessionario è valutata in funzione della diligenza usata nella verifica documentale al momento dell'acquisto. Chi ha richiesto ed esaminato l'intero fascicolo dell'intervento ha una posizione molto diversa da chi ha acquistato sulla sola base della comunicazione presente nel cassetto fiscale." },
      { q: "I miei crediti sono bloccati: cosa posso fare?", a: "Dipende dal titolo del blocco. Se è una sospensione amministrativa in attesa di controlli, il percorso è documentale. Se è un sequestro penale, la strada è l'istanza di dissequestro, dimostrando l'estraneità della propria posizione rispetto alla condotta contestata a monte." },
      { q: "Conviene aderire o fare ricorso?", a: "Se parte dei rilievi è fondata, l'adesione consente una riduzione delle sanzioni e sospende per 90 giorni il termine di impugnazione. Se la contestazione è viziata nella qualificazione o smentita dal fascicolo, il ricorso è la strada, eventualmente con istanza di sospensione dell'atto." },
      { q: "L'atto di recupero blocca la mia attività?", a: "Può farlo, se posto in esecuzione su importi rilevanti. Per questo, quando la continuità aziendale è a rischio, la richiesta di sospensione dell'atto è spesso il primo obiettivo: va sostenuta con documentazione che dimostri il danno grave e irreparabile, non con affermazioni generiche." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai ricevuto un atto di recupero o hai crediti bloccati nel cassetto fiscale, il primo passo è ricostruire il fascicolo degli interventi interessati. Mandaci l'atto e la documentazione che hai: verifichiamo la qualificazione contestata, i termini di notifica e la tenuta del fascicolo, e ti diciamo su quale linea la posizione è più difendibile. Per il contesto leggi le guide su verifica fiscale e crediti incagliati." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
