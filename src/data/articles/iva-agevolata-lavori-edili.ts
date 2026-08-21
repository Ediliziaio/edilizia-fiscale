import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "iva-agevolata-lavori-edili",
  title: "IVA agevolata sui lavori edili: 4%, 10% o 22%",
  excerpt:
    "L'aliquota dipende dalla qualificazione urbanistica dell'intervento e dal tipo di immobile, non dall'attività dell'impresa. La regola dei beni significativi, le dichiarazioni del committente e come si scrive la fattura.",
  category: "Impresa",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Fiscale",
  cover: "from-ink to-ink-light",
  keywords: [
    "iva agevolata lavori edili",
    "iva 10 ristrutturazione",
    "iva 4 prima casa costruzione",
    "beni significativi iva",
    "quale iva applicare ristrutturazione",
    "aliquota iva manutenzione straordinaria",
  ],
  intro:
    "Sui lavori edili l'aliquota IVA non è una scelta dell'impresa: dipende dalla qualificazione urbanistica dell'intervento e dalla natura dell'immobile. Il 10% copre manutenzione ordinaria e straordinaria su fabbricati a prevalente destinazione abitativa privata, con il limite dei beni significativi; restauro, risanamento e ristrutturazione hanno un'agevolazione autonoma; il 4% è riservato alla costruzione con requisiti prima casa.",
};

export const seo = {
  seoTitle: "IVA Agevolata sui Lavori Edili: 4%, 10% o 22%",
  metaDescription:
    "Quale aliquota si applica a manutenzione, ristrutturazione e nuova costruzione, come funziona la regola dei beni significativi e cosa scrivere in fattura.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il 10% sulla manutenzione: art. 7, c. 1, lett. b), L. 488/1999, solo su fabbricati a prevalente destinazione abitativa privata, con la regola dei beni significativi. Il 10% su restauro, risanamento e ristrutturazione: voce 127-quaterdecies della Tabella A, parte III, senza limite sui beni significativi e senza vincolo di destinazione abitativa. Il 4%: costruzione di fabbricati non di lusso con requisiti prima casa, previa dichiarazione del committente. Il documento decisivo: il titolo edilizio, che qualifica l'intervento anche ai fini IVA." },

    { type: "h2", text: "Il principio: l'aliquota segue l'intervento, non l'impresa", id: "principio" },
    { type: "p", text: "L'errore concettuale più diffuso è pensare che l'aliquota dipenda da chi esegue il lavoro. Non è così: dipende da cosa viene fatto e su cosa. Un'impresa edile può emettere nella stessa settimana fatture al 4%, al 10% e al 22%, e sarebbe sbagliato uniformarle." },
    { type: "p", text: "Le variabili sono due, e vanno incrociate. La prima è la qualificazione urbanistica dell'intervento — manutenzione ordinaria, manutenzione straordinaria, restauro e risanamento conservativo, ristrutturazione edilizia, nuova costruzione — che si legge nel titolo edilizio: CILA, SCIA, permesso di costruire. La seconda è la natura dell'immobile: abitativo privato, strumentale, di lusso, con o senza requisiti prima casa." },
    { type: "p", text: "Il corollario operativo è che il titolo edilizio va acquisito e conservato nel fascicolo di commessa. Non è un adempimento urbanistico che riguarda solo il tecnico: è il documento che giustifica l'aliquota applicata, e in verifica è il primo che viene chiesto." },

    { type: "h2", text: "Il 10% sulla manutenzione, e la trappola dei beni significativi", id: "beni-significativi" },
    { type: "p", text: "Per gli interventi di manutenzione ordinaria e straordinaria su fabbricati a prevalente destinazione abitativa privata si applica l'aliquota del 10%, in forza dell'art. 7, comma 1, lettera b), della legge 488/1999. L'agevolazione non riguarda i capannoni, gli uffici e gli immobili strumentali, dove l'IVA resta ordinaria salvo che l'intervento rientri in categorie diverse." },
    { type: "p", text: "Su questa agevolazione grava però un limite che vale solo per la manutenzione: la regola dei beni significativi. Per un elenco tassativo di beni — ascensori e montacarichi, infissi esterni e interni, caldaie, videocitofoni, apparecchiature di condizionamento e riciclo dell'aria, sanitari e rubinetteria da bagno, impianti di sicurezza — l'aliquota ridotta si applica al valore del bene solo fino a concorrenza del valore della prestazione di posa. Sull'eccedenza si applica il 22%." },
    { type: "p", text: "Il calcolo è meccanico ma va fatto. Se in un intervento di manutenzione straordinaria la fornitura di infissi vale 30.000 euro e la manodopera di posa 8.000, l'aliquota del 10% si applica agli 8.000 di posa e a 8.000 di beni; i restanti 22.000 euro di valore dei beni scontano il 22%. La differenza rispetto all'applicazione del 10% su tutto è di circa 2.640 euro su un solo intervento." },
    { type: "p", text: "La fattura deve rendere visibile il calcolo: vanno indicati distintamente il corrispettivo complessivo, il valore dei beni significativi e la quota di essi assoggettata ad aliquota ordinaria. Una fattura che non lo fa è formalmente irregolare anche quando l'imposta versata è corretta, ed è un rilievo facile da muovere in verifica." },

    { type: "figure", slot: "iva-agevolata-lavori-edili-1", alt: "Fattura di posa serramenti con evidenziato il calcolo dei beni significativi", caption: "Il calcolo dei beni significativi va esposto in fattura: non basta versare l'imposta corretta." },

    { type: "h2", text: "Il 10% su restauro, risanamento e ristrutturazione: un'agevolazione diversa", id: "ristrutturazione" },
    { type: "p", text: "Gli interventi di restauro, risanamento conservativo e ristrutturazione edilizia hanno una base normativa autonoma: la voce 127-quaterdecies della Tabella A, parte III, allegata al D.P.R. 633/1972. Le differenze rispetto all'agevolazione sulla manutenzione sono due, ed entrambe rilevanti." },
    { type: "p", text: "La prima: non si applica la regola dei beni significativi. Sull'intero corrispettivo, beni compresi, si applica il 10%. La seconda: non c'è il vincolo della destinazione abitativa privata. Una ristrutturazione edilizia su un immobile strumentale può accedere all'aliquota ridotta, cosa impossibile per la manutenzione straordinaria." },
    { type: "p", text: "Questo rende la qualificazione urbanistica dell'intervento una questione con effetti fiscali diretti, e non solo un adempimento amministrativo. Un intervento che il tecnico qualifica come manutenzione straordinaria e che invece integra una ristrutturazione edilizia comporta un trattamento IVA sensibilmente diverso — con la differenza, in un intervento con molti beni significativi, che può valere diverse migliaia di euro." },
    { type: "p", text: "Va aggiunto un punto pratico: la qualificazione non si sceglie, si accerta. Deve corrispondere al titolo edilizio depositato e al progetto realmente eseguito. Riqualificare a posteriori un intervento per ottenere un'aliquota migliore è una strada che non regge alla prima verifica." },

    { type: "table", headers: ["Intervento", "Immobile", "Aliquota", "Beni significativi"], rows: [
      ["Manutenzione ordinaria e straordinaria", "Abitativo privato", "10%", "Sì, si applica il limite"],
      ["Manutenzione ordinaria e straordinaria", "Strumentale, capannone, ufficio", "22%", "Non rilevante"],
      ["Restauro e risanamento conservativo", "Qualunque", "10%", "No"],
      ["Ristrutturazione edilizia", "Qualunque", "10%", "No"],
      ["Nuova costruzione", "Non di lusso, con requisiti prima casa del committente", "4%", "No"],
      ["Nuova costruzione", "Non di lusso, senza requisiti prima casa", "10%", "No"],
      ["Opere di urbanizzazione primaria e secondaria", "—", "10%", "No"],
    ] },

    { type: "caselaw", title: "Cosa dicono le fonti", items: [
      { court: "Legge 488/1999", ref: "Art. 7, comma 1, lett. b)", principle: "Si applica l'aliquota del 10% alle prestazioni aventi per oggetto interventi di manutenzione ordinaria e straordinaria su fabbricati a prevalente destinazione abitativa privata, con limitazione per i beni di valore significativo individuati con decreto.", impact: "È la norma che regge il 10% sulla manutenzione, e insieme il limite dei beni significativi: le due cose stanno o cadono insieme." },
      { court: "D.P.R. 633/1972", ref: "Tabella A, parte III, n. 127-quaterdecies", principle: "Sono soggette all'aliquota del 10% le prestazioni di servizi dipendenti da contratti di appalto relativi alla realizzazione degli interventi di recupero di cui all'art. 31 della legge 457/1978, ad esclusione della manutenzione ordinaria e straordinaria.", impact: "Restauro, risanamento e ristrutturazione seguono questa voce: nessun limite sui beni significativi e nessun vincolo di destinazione abitativa." },
      { court: "Agenzia delle Entrate", principle: "Il valore dei beni significativi va determinato secondo criteri oggettivi e indicato distintamente in fattura, insieme al corrispettivo complessivo dell'operazione.", impact: "L'omessa indicazione in fattura è una violazione autonoma, anche quando l'imposta complessivamente versata è corretta." },
    ] },

    { type: "h2", text: "Il 4%: la costruzione con requisiti prima casa", id: "quattro-per-cento" },
    { type: "p", text: "L'aliquota del 4% si applica alle prestazioni dipendenti da contratti di appalto per la costruzione di fabbricati non di lusso, quando il committente ha i requisiti per l'agevolazione prima casa. È l'aliquota più bassa del settore e ha un presupposto soggettivo, non solo oggettivo: dipende dalla situazione del committente." },
    { type: "p", text: "Il punto operativo che l'impresa non può ignorare è che questo presupposto non è verificabile dall'impresa stessa. L'unico modo per applicare correttamente il 4% è acquisire dal committente una dichiarazione scritta sulla sussistenza dei requisiti, da conservare nel fascicolo. Senza quella dichiarazione, l'impresa che applica il 4% risponde della differenza se in verifica emerge che i requisiti non c'erano." },
    { type: "p", text: "La dichiarazione va acquisita prima dell'emissione della prima fattura, non alla fine dei lavori. Nella pratica conviene inserirla direttamente nel contratto d'appalto, con l'impegno del committente a comunicare tempestivamente qualunque variazione della propria situazione." },

    { type: "figure", slot: "iva-agevolata-lavori-edili-2", alt: "Titolo edilizio e contratto d'appalto affiancati sulla scrivania", caption: "Il titolo edilizio qualifica l'intervento anche ai fini IVA: va nel fascicolo di commessa, non solo in cantiere." },

    { type: "h2", text: "Un esempio numerico", id: "esempio" },
    { type: "p", text: "Intervento su un appartamento residenziale, corrispettivo complessivo 96.000 euro. Il titolo edilizio qualifica l'opera come manutenzione straordinaria. All'interno dell'appalto rientrano la fornitura e posa di infissi per 34.000 euro, di cui 26.000 di valore dei beni e 8.000 di posa, e una caldaia a condensazione per 9.000 euro, di cui 7.200 di bene e 1.800 di posa." },
    { type: "p", text: "Sul resto dell'intervento, 53.000 euro, si applica il 10%. Sugli infissi, il 10% copre gli 8.000 di posa e 8.000 di valore dei beni; i restanti 18.000 scontano il 22%. Sulla caldaia, il 10% copre 1.800 di posa e 1.800 di bene; i restanti 5.400 scontano il 22%. L'IVA complessiva risulta di circa 12.400 euro." },
    { type: "p", text: "Se lo stesso intervento fosse stato qualificato nel titolo edilizio come ristrutturazione edilizia — e se il progetto ne avesse effettivamente i caratteri — l'intero corrispettivo di 96.000 euro sconterebbe il 10%, per un'IVA di 9.600 euro. La differenza, circa 2.800 euro, dipende interamente dalla qualificazione urbanistica: è la ragione per cui la scelta del titolo edilizio va discussa con il tecnico prima del deposito, non dopo." },
    { type: "note", text: "L'errore da non fare: applicare il 10% su tutto perché \"è una ristrutturazione\", quando il titolo edilizio dice manutenzione straordinaria. È il rilievo IVA più frequente nelle verifiche alle imprese edili, e si ripete su ogni cantiere dell'anno. Lo scenario è illustrativo: la qualificazione va verificata sul titolo e sul progetto concreti." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quale IVA si applica a una ristrutturazione di casa?", a: "Dipende dalla qualificazione urbanistica. Se è manutenzione ordinaria o straordinaria su fabbricato a prevalente destinazione abitativa privata si applica il 10%, con il limite dei beni significativi. Se è restauro, risanamento conservativo o ristrutturazione edilizia si applica il 10% sull'intero corrispettivo, senza quel limite." },
      { q: "Cosa sono i beni significativi?", a: "Sono beni individuati da un elenco tassativo — infissi, caldaie, ascensori, condizionatori, sanitari e rubinetteria, videocitofoni, impianti di sicurezza — per i quali, negli interventi di manutenzione, l'aliquota ridotta si applica solo fino a concorrenza del valore della prestazione di posa. L'eccedenza sconta il 22%." },
      { q: "L'IVA agevolata vale anche sui capannoni?", a: "Per la manutenzione no: l'agevolazione riguarda i fabbricati a prevalente destinazione abitativa privata. Per restauro, risanamento conservativo e ristrutturazione edilizia sì, perché quella voce non pone il vincolo di destinazione abitativa. È una differenza che vale molti punti di aliquota." },
      { q: "Chi decide se un intervento è manutenzione o ristrutturazione?", a: "La qualificazione risulta dal titolo edilizio depositato e dal progetto effettivamente realizzato. Non è una scelta dell'impresa né una valutazione fiscale autonoma: l'aliquota segue la qualificazione urbanistica, ed è per questo che il titolo va acquisito nel fascicolo di commessa." },
      { q: "Serve una dichiarazione del committente per applicare il 4%?", a: "Sì, ed è indispensabile. Il 4% dipende dai requisiti prima casa in capo al committente, che l'impresa non può verificare autonomamente. Va acquisita una dichiarazione scritta prima della prima fattura, meglio se inserita nel contratto d'appalto." },
      { q: "Come si indica il calcolo dei beni significativi in fattura?", a: "Vanno esposti distintamente il corrispettivo complessivo dell'operazione, il valore dei beni significativi e la quota di tale valore assoggettata ad aliquota ordinaria. L'omissione è una violazione formale autonoma, riscontrabile con facilità in sede di controllo documentale." },
      { q: "Se sbaglio aliquota posso rimediare?", a: "Sì, con la nota di variazione nei termini previsti e, dove necessario, con il ravvedimento operoso sulle sanzioni. Prima si interviene, minore è il costo. Su errori sistematici ripetuti su più cantieri conviene fare una ricognizione completa prima che lo faccia una verifica." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se emetti fatture con aliquote agevolate senza avere in fascicolo il titolo edilizio e, dove serve, la dichiarazione del committente, la posizione è più fragile di quanto sembri. Mandaci un estratto delle fatture attive dell'ultimo esercizio con i relativi contratti: verifichiamo la corrispondenza tra intervento, titolo e aliquota e, dove serve, impostiamo la regolarizzazione. Per il quadro d'insieme leggi la guida alla fiscalità dell'impresa edile e quella sul [reverse charge](/guide/reverse-charge-edilizia)." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti." },
  ],
};
