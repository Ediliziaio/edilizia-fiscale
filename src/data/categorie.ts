import type { Category } from "./articles";

/**
 * Le sei categorie come pagine vere, non come filtro in query string.
 *
 * Prima esistevano solo come `?c=Lavoro` su /guide: non prerenderizzate, non
 * indicizzabili, e il BreadcrumbList degli articoli le indicava comunque come
 * livello intermedio — un anello che puntava a una URL che per un crawler non
 * esiste. Ora ogni categoria ha la sua pagina, con un testo che risponde alla
 * query di categoria ("guide fiscali per l'edilizia sul lavoro") e l'elenco
 * completo delle guide del cluster.
 */
export type CategoriaInfo = {
  /** Ultimo segmento di /guide/categoria/<slug>. */
  slug: string;
  categoria: Category;
  /** Titolo H1 della pagina. */
  h1: string;
  /** Etichetta breve, per breadcrumb e navigazione. */
  label: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string;
  /** Risposta autonoma di 40-60 parole: è il blocco che i motori estraggono. */
  intro: string;
  /** Due paragrafi di contesto: a chi serve il cluster e come è organizzato. */
  corpo: string[];
  /** Slug della guida pilastro del cluster, se c'è. */
  pilastro?: string;
};

export const categorie: CategoriaInfo[] = [
  {
    slug: "fiscalita-impresa",
    categoria: "Impresa",
    label: "Fiscalità dell'impresa",
    h1: "Fiscalità dell'impresa edile",
    seoTitle: "Fiscalità dell'Impresa Edile: Tutte le Guide",
    metaDescription:
      "IVA dei lavori, reverse charge, costi deducibili, bonus, ritenute negli appalti, forfettario: le guide sulla fiscalità operativa di un'impresa di costruzioni.",
    keywords:
      "fiscalità impresa edile, iva lavori edili, reverse charge edilizia, costi deducibili impresa costruzioni, tasse impresa edile",
    intro:
      "La fiscalità di un'impresa edile si distingue da quella di qualunque altra attività per tre ragioni: l'IVA dei lavori segue regole proprie (reverse charge, aliquote ridotte, beni significativi), i costi si imputano per commessa e non per esercizio, e gli adempimenti sui subappalti hanno una disciplina dedicata. Queste guide coprono la materia operativa, caso per caso.",
    corpo: [
      "È il cluster più ampio del sito, e non per caso: sono le domande che arrivano ogni settimana da chi ha cantieri aperti. Quando si applica il reverse charge e quando no. Se l'aliquota ridotta vale su tutto o solo sulla posa. Quali costi di cantiere reggono in verifica e quali no. Cosa cambia per un artigiano in forfettario che lavora in subappalto.",
      "Ogni guida parte dalla risposta e poi la argomenta con la norma, un esempio numerico e le domande frequenti. Se cerchi il quadro d'insieme prima del dettaglio, la guida pilastro del cluster è il punto di partenza.",
    ],
    pilastro: "fiscalita-impresa-edile",
  },
  {
    slug: "numeri-e-controllo",
    categoria: "Controllo",
    label: "Numeri e controllo di gestione",
    h1: "Numeri e controllo di gestione per l'impresa edile",
    seoTitle: "Controllo di Gestione per l'Impresa Edile: le Guide",
    metaDescription:
      "Margine di commessa, lavori in corso, preventivi, flussi di cassa, rating bancario e assetti adeguati: come si leggono i numeri di un'impresa che lavora per commessa.",
    keywords:
      "controllo di gestione impresa edile, margine di commessa, lavori in corso su ordinazione, flussi di cassa cantiere, preventivo commessa edilizia",
    intro:
      "Un'impresa che lavora per commessa non può leggere i propri numeri una volta l'anno: il margine di un cantiere si decide mentre è aperto e a bilancio chiuso non è più correggibile. Queste guide spiegano come si costruiscono margine di commessa, valutazione dei lavori in corso, preventivi e cassa prospettica.",
    corpo: [
      "Il problema tipico non è la mancanza di dati: è che i dati arrivano dopo. Il consuntivo di un cantiere si conosce quando il cantiere è finito, il risultato d'esercizio quando l'esercizio è chiuso. Nel frattempo si sono presi impegni, firmati contratti e assunte persone su numeri che nessuno aveva verificato.",
      "Il cluster copre gli strumenti che spostano quell'informazione in avanti: il preventivo costruito sul costo orario pieno, il margine di commessa letto ogni mese, i lavori in corso valutati con criteri difendibili, la cassa prospettica a tredici settimane. E i due interlocutori che quei numeri li leggono comunque: la banca e, per obbligo di legge, il sistema di allerta interno.",
    ],
    pilastro: "controllo-di-gestione-impresa-edile",
  },
  {
    slug: "verifiche-e-contenzioso",
    categoria: "Fisco",
    label: "Verifiche e contenzioso",
    h1: "Verifiche fiscali e contenzioso tributario in edilizia",
    seoTitle: "Verifica Fiscale in Edilizia: Difesa e Contenzioso",
    metaDescription:
      "Accessi in cantiere, accertamento induttivo, atti di recupero sui bonus, ravvedimento e adesione, ISA: cosa fare quando il fisco entra in un'impresa edile.",
    keywords:
      "verifica fiscale impresa edile, accertamento induttivo edilizia, accertamento superbonus, ravvedimento operoso impresa, isa edilizia",
    intro:
      "Nelle verifiche a un'impresa edile i rilievi si concentrano sempre sugli stessi punti: rimanenze e lavori in corso, costi dei subappalti, uso dei mezzi, crediti da bonus edilizi. Queste guide spiegano cosa guardano i verificatori, quali termini decorrono da quale atto e quali strumenti deflativi hanno senso in ciascuna situazione.",
    corpo: [
      "Col fisco non si perde per torto: si perde per termine scaduto. Sessanta giorni per le osservazioni dopo il processo verbale, sessanta per il ricorso, trenta per il pagamento ridotto di un avviso bonario. Sono termini che decorrono da eventi diversi e che nessuno riapre.",
      "Per questo il cluster è organizzato in due tempi: cosa si prepara prima — la documentazione di cantiere che regge la difesa — e cosa si fa dopo, quando l'atto è già arrivato. La differenza fra le due situazioni, in termini di margini di manovra, è enorme.",
    ],
    pilastro: "verifica-fiscale-impresa-edile",
  },
  {
    slug: "lavoro-e-contributi",
    categoria: "Lavoro",
    label: "Lavoro e contributi",
    h1: "Lavoro, contributi e Cassa Edile",
    seoTitle: "Lavoro e Contributi in Edilizia: Tutte le Guide",
    metaDescription:
      "Cassa Edile, DURC, congruità della manodopera, costo orario pieno, subappalti e sicurezza: le regole del lavoro edile e come si presidiano mese per mese.",
    keywords:
      "cassa edile, durc irregolare, congruità manodopera, costo del lavoro impresa edile, appalto non genuino, riduzione contributiva edile",
    intro:
      "Il lavoro in edilizia ha istituti che non esistono in nessun altro settore: una cassa di categoria che gestisce parte della retribuzione, un documento di regolarità che condiziona gli incassi e una verifica di congruità sulla manodopera denunciata. Queste guide li spiegano uno per uno, con gli adempimenti mensili che li tengono sotto controllo.",
    corpo: [
      "La ragione di tanta specialità è la mobilità: gli operai edili seguono i cantieri e cambiano impresa spesso. Il sistema è stato costruito per rendere portabili i loro diritti — la Cassa Edile — e per rendere verificato, non dichiarato, il costo del lavoro: il DURC blocca gli incassi, la congruità misura la manodopera denunciata sul valore dell'opera.",
      "Chi non presidia questi adempimenti li scopre sempre nello stesso modo: un DURC sospeso che ferma un SAL in pagamento, o un invito a regolarizzare la congruità su un cantiere chiuso da mesi. Il cluster spiega come vederli arrivare con mesi di anticipo.",
    ],
    pilastro: "lavoro-e-contributi-in-edilizia",
  },
  {
    slug: "appalti-pubblici",
    categoria: "Appalti",
    label: "Appalti pubblici",
    h1: "Appalti pubblici: qualificazione, garanzie e cassa",
    seoTitle: "Appalti Pubblici per Imprese Edili: le Guide",
    metaDescription:
      "SOA, garanzie e plafond, anticipazione del 20%, revisione prezzi, riserve, consorzi e ATI: il ciclo economico di un appalto pubblico spiegato fase per fase.",
    keywords:
      "appalti pubblici impresa edile, attestazione soa requisiti, anticipazione prezzo appalto, riserve lavori pubblici, consorzio stabile ati",
    intro:
      "Un appalto pubblico si vince due volte: in gara e in cassa. La qualificazione SOA si costruisce sui bilanci depositati, le garanzie consumano plafond fideiussorio, l'incasso segue anticipazione e SAL, e il corrispettivo si difende con le riserve iscritte nei termini. Queste guide percorrono l'intero ciclo economico.",
    corpo: [
      "L'errore di prospettiva più comune è trattare i lavori pubblici come cantieri con un committente diverso. Sono un sistema a parte: la possibilità di partecipare dipende dai bilanci di tre anni fa, la firma del contratto immobilizza garanzie, l'IVA non la incassi e una riserva non iscritta al momento giusto vale zero per sempre.",
      "Il cluster segue l'ordine in cui l'impresa vive l'appalto — qualificarsi, garantire, avviare, incassare, contestare — e per ogni fase indica i numeri da tenere sotto controllo prima ancora di presentare l'offerta.",
    ],
    pilastro: "appalti-pubblici-impresa-edile",
  },
  {
    slug: "holding-e-patrimonio",
    categoria: "Patrimonio",
    label: "Holding e patrimonio",
    h1: "Holding, immobili e patrimonio dell'imprenditore edile",
    seoTitle: "Holding e Patrimonio dell'Imprenditore Edile: le Guide",
    metaDescription:
      "Holding, scissione immobiliare, protezione patrimoniale, passaggio generazionale, operazioni immobiliari e cessione d'azienda: le guide sul patrimonio di chi costruisce.",
    keywords:
      "holding immobiliare edilizia, protezione patrimoniale imprenditore edile, scissione immobiliare, passaggio generazionale impresa edile, società immobiliare",
    intro:
      "Chi costruisce ha un problema che altri imprenditori non hanno: l'impresa e il patrimonio stanno quasi sempre nello stesso posto, e quel posto apre cantieri. Queste guide coprono gli strumenti per separarli in modo lecito e documentato — holding, scissione, società immobiliari — e per trasferirli alla generazione successiva.",
    corpo: [
      "Il perimetro è dichiarato: solo pianificazione fiscale lecita, dentro i confini dell'art. 10-bis della L. 212/2000. Le operazioni descritte qui hanno ragioni economiche reali — separare rischi, organizzare un gruppo, preparare un passaggio — e il vantaggio fiscale è una conseguenza, non lo scopo che le giustifica.",
      "Il tempismo conta più della tecnica. La protezione patrimoniale si costruisce quando l'azienda è in salute: gli atti compiuti quando i creditori sono già alla porta si espongono all'azione revocatoria, e un'operazione fatta tardi è peggio di un'operazione non fatta.",
    ],
    pilastro: "holding-immobiliare-edilizia",
  },
];

export const getCategoria = (slug: string) => categorie.find((c) => c.slug === slug);

/** Categoria (valore della tassonomia) -> pagina di categoria. */
export const categoriaPath = (categoria: Category): string | undefined => {
  const c = categorie.find((x) => x.categoria === categoria);
  return c ? `/guide/categoria/${c.slug}` : undefined;
};
