import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "congruita-manodopera-durc",
  title: "Congruità della manodopera: come si calcola e come si giustifica lo scostamento",
  excerpt:
    "Il D.M. 143/2021 confronta il costo del lavoro denunciato con percentuali minime riferite al valore dell'opera. Sopra i 70.000 euro nei lavori privati e su qualunque importo nel pubblico. Come si verifica in corso d'opera e cosa fare quando non torna.",
  category: "Lavoro",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-trust to-brand-dark",
  keywords: [
    "congruità manodopera come si calcola",
    "dm 143 2021 congruità",
    "attestazione congruità cassa edile",
    "incidenza manodopera 14,28%",
    "scostamento congruità giustificazione",
    "congruità lavori privati 70.000 euro",
  ],
  intro:
    "La verifica di congruità confronta il costo del lavoro denunciato in Cassa Edile con percentuali minime riferite al valore dell'opera, differenziate per categoria di lavori. Non guarda se hai versato: guarda se hai dichiarato abbastanza manodopera per aver realizzato quell'opera. È una verifica che esiste solo in edilizia e che si vince durante il cantiere, non alla fine.",
};

export const seo = {
  seoTitle: "Congruità della Manodopera: Calcolo e Scostamenti",
  metaDescription:
    "Il D.M. 143/2021, le percentuali minime per categoria, la soglia dei 70.000 euro nei lavori privati e come si giustifica uno scostamento.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — La norma: D.M. n. 143 del 25 giugno 2021, attuativo della disciplina introdotta con il D.L. 76/2020. Quando si applica: lavori pubblici di qualunque importo; lavori privati di valore complessivo pari o superiore a 70.000 euro. Il calcolo: costo del lavoro denunciato alle Casse Edili confrontato con una percentuale minima di incidenza riferita al valore dell'opera, differenziata per categoria. Il riferimento più citato: 14,28% per la nuova edilizia civile. Se non torna: invito a regolarizzare, con possibilità di giustificare documentalmente uno scostamento contenuto o di versare la differenza. L'esito negativo incide sul DURC." },

    { type: "h2", text: "Cosa verifica davvero la congruità", id: "cosa-verifica" },
    { type: "p", text: "È la domanda da cui partire, perché la congruità viene confusa di continuo con il [DURC](/guide/durc-irregolare-impresa-edile) ordinario. Il DURC guarda i versamenti: hai pagato quello che hai denunciato? La congruità guarda le denunce: hai denunciato abbastanza manodopera per aver realizzato quell'opera?" },
    { type: "p", text: "Sono due controlli indipendenti e un'impresa può superare uno e non l'altro. Chi versa puntualmente ma denuncia poche ore su un cantiere impegnativo è in regola con i contributi e non congruo. Chi denuncia correttamente tutte le ore ma è in arretrato con i pagamenti è congruo e non in regola. Gli effetti però convergono: entrambi finiscono per bloccare il DURC." },
    { type: "p", text: "La logica della norma è antielusiva. Se un'opera da un milione di euro risulta realizzata con quarantamila euro di costo del lavoro dichiarato, il conto non torna: o l'opera non è quella dichiarata, o una parte della manodopera è irregolare, oppure è stata impiegata manodopera denunciata da altri soggetti che non risultano collegati al cantiere. La congruità serve a far emergere questa terza ipotesi, che nel settore è la più frequente." },

    { type: "figure", slot: "congruita-manodopera-durc-1", alt: "Prospetto di congruità con costo del lavoro denunciato a confronto con il valore dell'opera", caption: "Il DURC guarda se hai versato. La congruità guarda se hai denunciato abbastanza." },

    { type: "h2", text: "Quando si applica, e a chi", id: "quando" },
    { type: "table", headers: ["Tipo di lavori", "Soglia", "Chi richiede l'attestazione"], rows: [
      ["Lavori pubblici", "Qualunque importo", "La stazione appaltante, prima del saldo finale"],
      ["Lavori privati", "Valore complessivo pari o superiore a 70.000 €", "Il committente o il responsabile dei lavori"],
      ["Lavori privati sotto soglia", "Nessun obbligo di verifica", "—"],
    ] },
    { type: "p", text: "La soglia dei lavori privati si riferisce al valore complessivo dell'opera, non al singolo affidamento. È un dettaglio che genera errori: un intervento da 90.000 euro suddiviso in tre affidamenti da 30.000 euro resta sopra soglia, perché il parametro è l'opera." },
    { type: "p", text: "Il soggetto verificato è l'impresa affidataria, ma il calcolo considera la manodopera denunciata da tutte le imprese che hanno operato sul cantiere, comprese le subaffidatarie. È il punto che sposta il problema dall'amministrazione alla gestione del cantiere: se un subappaltatore non denuncia correttamente le proprie ore riferendole a quel cantiere, lo scostamento ricade sull'affidataria." },

    { type: "h2", text: "Come si calcola: le percentuali per categoria", id: "calcolo" },
    { type: "p", text: "Il decreto individua percentuali minime di incidenza della manodopera differenziate per categoria di opera. La logica è intuitiva: un'opera ad alta intensità di manodopera come una ristrutturazione richiede un'incidenza maggiore di un'opera dove pesano i materiali o i macchinari, come la posa di prefabbricati o il movimento terra." },
    { type: "p", text: "La percentuale più citata è quella della nuova edilizia civile, fissata al 14,28% del valore dell'opera. Non va però applicata a tutto: le altre categorie hanno percentuali proprie, in alcuni casi sensibilmente diverse, e usare un valore unico è uno degli errori tipici. La tabella completa è allegata al decreto e va consultata per la categoria effettiva dei lavori eseguiti." },
    { type: "p", text: "Il calcolo si fa così: si prende il valore dell'opera, si applica la percentuale minima della categoria e si ottiene il costo del lavoro minimo atteso. Quel valore si confronta con il costo del lavoro effettivamente denunciato alle Casse Edili per quel cantiere. Se il denunciato è pari o superiore, la congruità è raggiunta." },
    { type: "p", text: "Il valore dell'opera da usare al denominatore merita attenzione: si considera l'importo complessivo dei lavori, con le esclusioni previste dal decreto. Non è quindi automaticamente il corrispettivo contrattuale, e la verifica va fatta sulla disciplina applicabile prima di dare per scontato lo scostamento." },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Decreto ministeriale", ref: "D.M. n. 143 del 25 giugno 2021", principle: "La congruità dell'incidenza della manodopera si verifica confrontando il costo del lavoro denunciato alle Casse Edili con le percentuali minime di incidenza riferite al valore dell'opera, differenziate per categoria di lavori.", impact: "Il parametro non è discrezionale: o si raggiunge, o si giustifica documentalmente, o si versa la differenza." },
      { court: "Riferimento di settore", ref: "Nuova edilizia civile: 14,28%", principle: "Per le opere di nuova edilizia civile la percentuale minima di incidenza della manodopera sul valore dell'opera è fissata al 14,28%.", impact: "È il valore più citato ma non è universale: le altre categorie hanno percentuali proprie, da leggere nell'allegato al decreto." },
      { court: "Ambito di applicazione", principle: "La verifica riguarda i lavori pubblici di qualunque importo e i lavori privati il cui valore complessivo risulti pari o superiore a 70.000 euro.", impact: "Nei privati la soglia è sull'opera, non sull'affidamento: frazionare i contratti non fa scendere sotto soglia." },
    ] },

    { type: "h2", text: "Quando lo scostamento non torna: le tre strade", id: "scostamento" },
    { type: "p", text: "Se la verifica evidenzia uno scostamento, l'impresa non è automaticamente irregolare. Viene invitata a regolarizzare entro un termine, e le strade sono tre — in ordine di preferibilità." },
    { type: "ol", items: [
      "Correggere le denunce: è la strada più frequente e la meno costosa. Lo scostamento nasce spesso da ore denunciate senza attribuzione al cantiere, o attribuite al cantiere sbagliato, o da denunce di subaffidatari non collegate. Si tratta di sistemare dati, non di versare denaro",
      "Giustificare documentalmente: il decreto prevede la possibilità di dimostrare le ragioni dello scostamento entro una tolleranza limitata, con attestazione del direttore dei lavori o del committente. Serve dove l'opera ha caratteristiche che rendono fisiologica una minore incidenza di manodopera",
      "Versare la differenza contributiva: è l'ultima strada, quella che si percorre quando le prime due non sono praticabili. Estingue il problema ma è un costo puro",
    ] },
    { type: "p", text: "La prima strada è quella su cui insistiamo di più, perché è quella che l'impresa può ancora percorrere solo se ha i dati. Ore denunciate senza il riferimento al cantiere non si recuperano a distanza di mesi: nessuno ricorda quale squadra fosse dove nel marzo dell'anno prima. È il motivo per cui il presidio va messo nella denuncia mensile e non nella regolarizzazione." },
    { type: "p", text: "Sulla seconda: la giustificazione documentale non è una formula magica, è una dimostrazione. Le ragioni che reggono sono quelle strutturali — un'opera con altissima incidenza di forniture, lavorazioni eseguite con macchinari in luogo di manodopera, categorie di lavoro con incidenza diversa da quella applicata — e vanno attestate da chi ha visto il cantiere. Una dichiarazione generica non serve." },
    { type: "p", text: "Se la regolarizzazione non avviene, l'esito negativo viene registrato e segnalato, con effetti sul rilascio del DURC. Da lì in avanti si ricade nella catena descritta nella guida sul DURC irregolare: blocco degli incassi pubblici, esclusione dalle gare, problemi sulle attestazioni." },

    { type: "h2", text: "Il presidio che funziona: in corso d'opera", id: "presidio" },
    { type: "p", text: "La frase che ripetiamo in ogni guida di questo sito vale qui più che altrove: la congruità si governa mentre il cantiere è aperto. A fine lavori lo scostamento è maturato per intero, le ore non denunciate non si recuperano e resta solo il versamento." },
    { type: "ul", items: [
      "Calcolare all'apertura del cantiere il costo del lavoro minimo atteso: valore dell'opera per la percentuale della categoria. È un numero, e va scritto nel fascicolo di commessa",
      "Verificare mensilmente il denunciato progressivo contro quel numero, insieme al margine di commessa: si fa nella stessa riunione",
      "Attribuire correttamente il cantiere in ogni denuncia mensile, per l'impresa e per i subaffidatari",
      "Raccogliere dai subappaltatori l'evidenza delle denunce riferite al cantiere, prima di pagare l'ultimo SAL e non dopo",
      "Se lo scostamento si profila, documentarne le ragioni mentre il cantiere è visibile: foto, rapportini, evidenza delle forniture",
      "Chiedere l'attestazione di congruità prima della richiesta di saldo, non quando il committente la chiede",
    ] },
    { type: "p", text: "Il secondo punto è quello che cambia la gestione: la congruità è un indicatore di commessa, non un adempimento amministrativo. Sta accanto al margine e all'avanzamento, si controlla nella stessa riunione mensile e con gli stessi dati. Chi la tiene in un altro ufficio la scopre in ritardo." },

    { type: "figure", slot: "congruita-manodopera-durc-2", alt: "Riunione mensile di cantiere con prospetto della congruità accanto al margine di commessa", caption: "La congruità è un indicatore di commessa: si controlla con il margine, nella stessa riunione." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Cantiere di nuova edilizia civile, valore dell'opera 1.200.000 euro. La percentuale minima di incidenza della categoria è il 14,28%: il costo del lavoro minimo atteso è quindi di circa 171.400 euro." },
    { type: "p", text: "A fine lavori l'impresa affidataria ha denunciato per quel cantiere 118.000 euro di costo del lavoro. Il subappaltatore delle strutture ha impiegato squadre proprie per circa 62.000 euro di costo del lavoro, ma le ha denunciate senza collegarle al cantiere: risultano nella sua posizione generale, non su quell'opera." },
    { type: "p", text: "La verifica restituisce uno scostamento di circa 53.400 euro. Se le denunce del subappaltatore fossero state correttamente riferite al cantiere, il totale sarebbe stato di 180.000 euro e la congruità raggiunta con margine. Il lavoro è stato fatto, le persone c'erano, i contributi sono stati versati: manca solo l'attribuzione." },
    { type: "p", text: "A cantiere chiuso, sistemare quelle denunce è possibile ma laborioso e dipende dalla collaborazione del subappaltatore, che nel frattempo può aver chiuso il rapporto o essere passato ad altri lavori. Se non collabora, all'affidataria resta il versamento della differenza contributiva su un costo del lavoro che ha già pagato una volta nel corrispettivo del subappalto." },
    { type: "note", text: "L'errore da non fare: dare per scontato che il subappaltatore denunci correttamente riferendo le ore al tuo cantiere. Va chiesta l'evidenza durante i lavori e va condizionato il pagamento dell'ultimo SAL alla sua consegna. È una clausola contrattuale, non una cortesia. Lo scenario è illustrativo: percentuali e valori vanno verificati sulla categoria e sull'opera concrete." },

    { type: "timeline", title: "Il ciclo della congruità su un cantiere", steps: [
      { when: "Apertura del cantiere", label: "Calcolo del costo del lavoro minimo atteso", detail: "Valore dell'opera per la percentuale della categoria: un numero nel fascicolo di commessa." },
      { when: "Ogni mese", label: "Verifica del denunciato progressivo", detail: "Nella stessa riunione in cui si legge il margine, con gli stessi dati." },
      { when: "All'ingresso di ogni subappaltatore", label: "Obbligo contrattuale di denuncia riferita al cantiere", detail: "Con l'evidenza da consegnare periodicamente, non a fine lavori." },
      { when: "Prima dell'ultimo SAL al subappaltatore", label: "Controllo delle sue denunce sul cantiere", detail: "È l'ultimo momento in cui hai una leva per farle sistemare." },
      { when: "Prima della richiesta di saldo", label: "Richiesta dell'attestazione di congruità", detail: "Se manca qualcosa, si scopre adesso e non quando la chiede il committente." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Che differenza c'è tra DURC e congruità?", a: "Il DURC verifica che l'impresa abbia versato quanto denunciato. La congruità verifica che abbia denunciato abbastanza manodopera rispetto al valore dell'opera. Sono controlli indipendenti: si può superare uno e non l'altro. Ma entrambi gli esiti negativi finiscono per incidere sul rilascio del DURC." },
      { q: "Da quale importo si applica nei lavori privati?", a: "Da un valore complessivo dell'opera pari o superiore a 70.000 euro. La soglia guarda l'opera, non il singolo affidamento: suddividere l'intervento in più contratti sotto soglia non esclude la verifica, perché il parametro resta il valore complessivo dei lavori." },
      { q: "La percentuale è sempre il 14,28%?", a: "No. Il 14,28% è la percentuale della nuova edilizia civile, la più citata ma non l'unica. Il decreto differenzia le percentuali per categoria di opera e vanno lette nell'allegato: applicare un valore unico a lavorazioni diverse è uno degli errori più frequenti." },
      { q: "La manodopera dei subappaltatori conta?", a: "Sì, ed è il punto critico. Il calcolo considera la manodopera denunciata da tutte le imprese che hanno operato sul cantiere, ma solo se le denunce sono riferite a quel cantiere. Ore regolarmente denunciate e non attribuite producono uno scostamento a carico dell'affidataria." },
      { q: "Posso giustificare uno scostamento senza versare?", a: "Entro una tolleranza limitata sì, con attestazione documentale delle ragioni da parte del direttore dei lavori o del committente. Le ragioni che reggono sono strutturali — alta incidenza di forniture, lavorazioni meccanizzate, categoria diversa — e vanno documentate mentre il cantiere è ancora visibile." },
      { q: "Cosa succede se non regolarizzo?", a: "L'esito negativo viene registrato e segnalato, con effetti sul rilascio del DURC. Da lì si innesca la catena consueta: blocco degli incassi da committenti pubblici, esclusione dalle gare, difficoltà sulle attestazioni. Il costo indiretto supera quasi sempre l'importo dello scostamento." },
      { q: "Chi chiede l'attestazione di congruità?", a: "Nei lavori pubblici la stazione appaltante, prima del saldo finale. Nei privati sopra soglia il committente o il responsabile dei lavori. Conviene però chiederla per primi, prima della richiesta di saldo: se manca qualcosa c'è ancora tempo per sistemarlo." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai cantieri aperti sopra i 70.000 euro e non hai calcolato il costo del lavoro minimo atteso, la congruità la scoprirai alla richiesta di saldo. Mandaci l'elenco delle commesse in corso con importo, categoria e subappalti affidati: calcoliamo il valore atteso per ciascuna e lo confrontiamo con il denunciato progressivo. Per il contesto leggi le guide su [Cassa Edile](/guide/cassa-edile-come-funziona), DURC irregolare e costo del lavoro edile." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza professionale sul caso concreto. Aggiornato ad agosto 2026: percentuali, soglie e tolleranze vanno verificate sul decreto vigente e sui suoi allegati." },
  ],
};
