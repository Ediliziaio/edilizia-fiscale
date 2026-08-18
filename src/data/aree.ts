import {
  Calculator,
  Gauge,
  Briefcase,
  BookOpenCheck,
  Landmark,
  BadgePercent,
  FileSpreadsheet,
  HardHat,
  Wallet,
  Siren,
  Network,
  ShieldCheck,
  Split,
  Users,
  Building2,
  Coins,
  Layers,
  Home,
  Scale,
  LogOut,
  type LucideIcon,
} from "lucide-react";

export type Area = {
  icon: LucideIcon;
  title: string;
  desc: string;
  /** slug della guida correlata, se già pubblicata */
  guida?: string;
  badge?: string;
};

/**
 * Le dieci aree del silo Impresa, ordinate per urgenza percepita
 * dall'imprenditore edile: prima il fisco che morde, poi i numeri che decidono.
 */
export const areeImprese: Area[] = [
  {
    icon: Calculator,
    title: "Fiscalità dell'impresa edile",
    desc: "IVA e reverse charge applicati alla catena appalto-subappalto, aliquote agevolate 4% e 10% sui lavori, competenza dei ricavi di commessa, deducibilità dei costi di cantiere.",
    guida: "fiscalita-impresa-edile",
    badge: "Il presidio principale",
  },
  {
    icon: Gauge,
    title: "Controllo di gestione e marginalità",
    desc: "Margine per commessa e non solo a fine anno: budget di cantiere, avanzamento economico, scostamenti, costo orario reale della manodopera e dei mezzi.",
    guida: "controllo-di-gestione-impresa-edile",
    badge: "Dove si perdono i soldi",
  },
  {
    icon: Briefcase,
    title: "CFO esterno e direzione amministrativa",
    desc: "La funzione finanziaria che un'impresa da 3-15 milioni non ha in organico: reporting mensile, tesoreria, rapporti bancari, preparazione delle decisioni con i numeri in mano.",
    guida: "cfo-esterno-impresa-edile",
    badge: "Alto impatto",
  },
  {
    icon: BookOpenCheck,
    title: "Bilancio e lavori in corso su ordinazione",
    desc: "La voce che decide l'utile di un'impresa edile: valutazione delle commesse pluriennali, OIC 23, SAL contabili contro SAL contrattuali, riflessi fiscali della scelta.",
    guida: "bilancio-impresa-edile-lavori-in-corso",
  },
  {
    icon: Landmark,
    title: "Verifiche, accertamenti e contenzioso tributario",
    desc: "Accessi della Guardia di Finanza in cantiere, PVC, accertamento analitico-induttivo su ricavi presunti, adesione, ricorso e sospensione della riscossione.",
    guida: "verifica-fiscale-impresa-edile",
    badge: "Urgenza massima",
  },
  {
    icon: BadgePercent,
    title: "Bonus edilizi e crediti d'imposta",
    desc: "Come si fatturano oggi le detrazioni edilizie, bonifico parlante e ritenuta dell'8%, congruità dei prezzi. E la difesa dei crediti già maturati: credito inesistente o non spettante, cassetto bloccato.",
    guida: "bonus-edilizi-come-si-fatturano",
  },
  {
    icon: FileSpreadsheet,
    title: "Adempimenti fiscali negli appalti",
    desc: "Ritenute e compensazioni negli appalti ad alta intensità di manodopera (art. 17-bis D.lgs. 241/1997), certificazione dei requisiti, split payment, fatturazione dei SAL.",
    guida: "ritenute-appalti-17-bis",
  },
  {
    icon: HardHat,
    title: "Costo del lavoro edile e congruità",
    desc: "Cassa Edile, DURC e congruità della manodopera, inquadramento di operai e collaboratori, costo orario pieno da usare nei preventivi e non solo in busta paga.",
    guida: "cassa-edile-come-funziona",
  },
  {
    icon: Wallet,
    title: "Finanza d'impresa e rapporti con le banche",
    desc: "Flusso di cassa di cantiere, anticipazione del prezzo negli appalti pubblici, plafond fideiussorio, rating bancario e centrale rischi, dossier per l'affidamento costruito su numeri difendibili.",
    guida: "flussi-di-cassa-impresa-edile",
  },
  {
    icon: Siren,
    title: "Assetti adeguati e allerta della crisi",
    desc: "Assetti organizzativi, amministrativi e contabili adeguati (art. 2086 c.c.), indicatori di squilibrio, composizione negoziata con il vincolo del DURC: prevenire prima che sia tardi.",
    guida: "assetti-adeguati-impresa-edile",
  },
];

/**
 * Le dieci aree del silo Patrimonio: l'imprenditore edile, la sua famiglia
 * e gli immobili — separare il rischio del cantiere dal patrimonio personale.
 */
export const areePatrimonio: Area[] = [
  {
    icon: Network,
    title: "Holding di partecipazioni",
    desc: "Una cassaforte sopra l'operativa: dividendi che salgono quasi esenti, immobili e liquidità fuori dal rischio d'impresa, regia unica su più società di cantiere.",
    guida: "holding-immobiliare-edilizia",
    badge: "La struttura più richiesta",
  },
  {
    icon: ShieldCheck,
    title: "Protezione del patrimonio personale",
    desc: "Il cantiere è l'attività che espone di più: fideiussioni, garanzie personali, responsabilità solidale negli appalti. Separare l'operativo dal personale, in modo lecito e opponibile.",
    guida: "protezione-patrimoniale-imprenditore-edile",
    badge: "Prima che serva",
  },
  {
    icon: Split,
    title: "Scissione e riorganizzazione societaria",
    desc: "Scindere l'immobiliare dall'operativa senza pagare imposte sui plusvalori: scissione, conferimento, trasformazione. Con il presidio dell'abuso del diritto e l'interpello quando serve.",
    guida: "scissione-immobiliare-impresa-edile",
  },
  {
    icon: Users,
    title: "Passaggio generazionale",
    desc: "Trasferire l'impresa ai figli senza spaccare la famiglia né la società: donazione di quote, usufrutto e nuda proprietà, governance transitoria, esenzione per i trasferimenti d'azienda.",
    guida: "passaggio-generazionale-impresa-edile",
    badge: "Va preparato per tempo",
  },
  {
    icon: Building2,
    title: "Immobili: come e dove intestarli",
    desc: "Capannone, uffici, appartamenti e terreni: persona fisica, società semplice, immobiliare o holding. Confronto su IMU, imposte sui redditi, plusvalenze e successione.",
    guida: "societa-immobiliare-o-persona-fisica",
  },
  {
    icon: Coins,
    title: "Dividendi, PEX e prelievi dell'imprenditore",
    desc: "Portare a casa gli utili senza sorprese: dividendi a persona fisica o a holding, participation exemption sulle cessioni di partecipazioni, compensi amministratore e finanziamento soci.",
    guida: "dividendi-holding-pex",
  },
  {
    icon: Layers,
    title: "Gruppo societario e consolidato fiscale",
    desc: "Più società di cantiere, consorzi e SOA: compensare utili e perdite nel gruppo, IVA di gruppo, prezzi di trasferimento interni e contratti infragruppo che reggono a un controllo.",
    guida: "consolidato-fiscale-gruppo-edile",
  },
  {
    icon: Home,
    title: "Compravendite immobiliari e imposte",
    desc: "L'iniziativa di sviluppo dal terreno alla vendita: costi capitalizzabili, permuta con il proprietario dell'area, vendita su carta con fideiussione, IVA o registro sulla cessione.",
    guida: "operazione-immobiliare-dal-terreno-alla-vendita",
  },
  {
    icon: Scale,
    title: "Trust, patti di famiglia e vincoli",
    desc: "Strumenti di segregazione e di governo familiare: patto di famiglia, trust, fondo patrimoniale, polizze e vincoli di destinazione. Cosa protegge davvero e cosa è solo apparenza.",
    guida: "patto-di-famiglia-impresa-edile",
  },
  {
    icon: LogOut,
    title: "Cessione d'azienda e uscita dall'impresa",
    desc: "Vendere l'impresa, cederla in affitto, liquidarla: valutazione, cessione d'azienda contro cessione di quote, carico fiscale a confronto e cosa sopravvive alla chiusura.",
    guida: "cessione-azienda-impresa-edile",
  },
];

/**
 * Verticali: i temi che l'imprenditore edile cerca con il loro nome tecnico.
 * Ognuno punta alla guida dedicata — è la porta d'ingresso da ricerca long tail.
 */
export const verticali = [
  { title: "Reverse charge", kw: "Quando l'IVA la versa il committente e non tu", guida: "reverse-charge-edilizia" },
  { title: "IVA 10% e 4%", kw: "Aliquote agevolate su ristrutturazioni e nuove costruzioni", guida: "iva-agevolata-lavori-edili" },
  { title: "Lavori in corso", kw: "Come si valutano le commesse aperte a fine anno", guida: "bilancio-impresa-edile-lavori-in-corso" },
  { title: "Ritenute appalti", kw: "L'art. 17-bis su appalti ad alta manodopera", guida: "ritenute-appalti-17-bis" },
  { title: "Crediti Superbonus", kw: "Credito inesistente, non spettante, cassetto bloccato", guida: "accertamento-superbonus-imprese" },
  { title: "Holding edile", kw: "La cassaforte sopra le società di cantiere", guida: "holding-immobiliare-edilizia" },
  { title: "Scissione immobiliare", kw: "Separare il capannone dall'impresa che apre i cantieri", guida: "scissione-immobiliare-impresa-edile" },
  { title: "Passaggio ai figli", kw: "Trasferire quote e governance senza rompere nulla", guida: "passaggio-generazionale-impresa-edile" },
  { title: "DURC bloccato", kw: "Quindici giorni per sbloccarlo, poi si fermano gli incassi", guida: "durc-irregolare-impresa-edile" },
  { title: "Attestazione SOA", kw: "Come i bilanci decidono la classifica che puoi ottenere", guida: "attestazione-soa-requisiti-economici" },
  { title: "Consorzi e ATI", kw: "Chi fattura cosa, e quale dei due conviene", guida: "consorzi-ati-fiscalita" },
  { title: "Fotovoltaico", kw: "Reverse charge, ammortamento e comunità energetiche", guida: "fiscalita-fotovoltaico-impianti" },
  { title: "Congruità manodopera", kw: "Il 14,28% e come si giustifica lo scostamento", guida: "congruita-manodopera-durc" },
  { title: "Subappalto genuino", kw: "Dove passa il confine con la fornitura di manodopera", guida: "appalto-non-genuino-distacco-somministrazione" },
  { title: "Riserve negli appalti", kw: "Firmare senza riserva è accettare: quando diventano ricavo", guida: "riserve-e-contabilita-lavori-pubblici" },
  { title: "Permuta col terreno", kw: "Due cessioni distinte, non un baratto senza imposte", guida: "permuta-terreno-appartamenti" },
  { title: "Vendere su carta", kw: "Acconti, fideiussione obbligatoria e preliminare vincolato", guida: "vendita-su-carta-acconti-garanzie" },
  { title: "Leasing o acquisto", kw: "Il confronto si fa sul costo orario, non sulla rata", guida: "leasing-o-acquisto-mezzi-opera" },
  { title: "Rating e banche", kw: "Come il sistema legge un bilancio edile, e cosa si migliora", guida: "rating-bancario-centrale-rischi-edilizia" },
] as const;
