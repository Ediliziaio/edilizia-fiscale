# Immagini da produrre — Edilizia Fiscale

Documento generato da `scripts/generate-image-brief.mjs`. Non modificarlo a mano:
i brief vivono negli articoli (campo `alt` dei blocchi `figure`) e in
`src/data/imageSlots.ts`. Dopo ogni nuova guida rilancia:

```bash
node scripts/generate-image-brief.mjs
```

## Totali

| Tipo | Quantità | Dimensione | Dove appare |
|---|---|---|---|
| Copertine guide | 43 | **1920 × 1080** (16:9) | card nelle liste, hero della guida |
| Figure dentro le guide | 82 | **1600 × 900** (16:9) | nel corpo dell'articolo |
| Immagini di sito | 6 | vedi sotto | home, hub, studio, contatti |
| **Totale** | **131** | | |

## Regole tecniche

- **Formato**: WebP preferito, JPG accettato. Sotto i **250 kB** per immagine.
- **Ritaglio**: tutte le immagini sono `object-cover`, quindi vengono tagliate.
  Le **copertine** vengono usate in tre proporzioni diverse — 16:9 nelle card,
  21:9 nelle card in evidenza dei pilastri, 4:3 nell'hero della guida.
  Tieni il soggetto nella **zona sicura centrale**: su un file 1920 × 1080,
  il rettangolo centrale **1440 × 820**. Fuori da lì può essere tagliato.
- **Niente testo dentro l'immagine**: non è tradotto, non è leggibile da
  screen reader e si rompe al ritaglio.
- **Registro visivo**: cantieri e uffici italiani reali. Niente stock
  americano con caschetti bianchi e sorrisi. Luce naturale, colori sobri:
  la palette del sito è nero e arancione, le foto non devono competerci.
- **Alt text**: già scritto nel codice, non serve fornirlo.

## Come si collega un'immagine

1. Metti il file in `public/images/guide/` (guide) o `public/images/` (sito).
2. Apri `src/data/articleImages.ts` (o `src/data/imageSlots.ts`) e sostituisci
   `null` con il percorso:

```ts
"fiscalita-impresa-edile-cover": "/images/guide/fiscalita-impresa-edile-cover.webp",
```

Finché il valore è `null` la pagina mostra un segnaposto con il brief scritto
dentro: il sito resta pubblicabile anche a immagini mancanti.

---

## 1. Immagini di sito (6)

Priorità alta: stanno sopra la piega su cinque pagine diverse.

| Slot | Nome file suggerito | Dimensione | Contenuto |
|---|---|---|---|
| `home-due-fronti` | `home-due-fronti.webp` | 1600 × 1200 (4:3) | Il cantiere e i numeri: i due fronti su cui si gioca il margine — Home, sezione «Perché un verticale» |
| `imprese-hero` | `imprese-hero.webp` | 1600 × 1200 (4:3) | Cantiere di un'impresa edile — Hero di /imprese, colonna destra |
| `patrimonio-hero` | `patrimonio-hero.webp` | 1600 × 1200 (4:3) | Il patrimonio dell'imprenditore edile — Hero di /patrimonio, colonna destra |
| `studio-team` | `studio-team.webp` | 1600 × 1200 (4:3) | Il team dello studio — Hero di /studio, colonna destra |
| `guide-hero` | `guide-hero.webp` | 1600 × 1200 (4:3) | Bilanci, computi metrici e calcolatrice — Hero di /guide, colonna destra |
| `contatti-studio` | `contatti-studio.webp` | 2100 × 800 (21:8) | Lo studio — Fondo di /contatti, banda larga |

---

## 2. Copertine delle guide (43)

**1920 × 1080**, soggetto nella zona sicura centrale 1440 × 820.
File in `public/images/guide/`.

I quattro **pilastri** sono segnati con ★: sono le guide in evidenza nel
listing, le uniche che vengono ritagliate anche a 21:9. Se parti da poche
immagini, parti da queste.

| # | Slot | Guida | Contenuto dell'immagine |
|---|---|---|---|
| 1 | `fiscalita-impresa-edile-cover` | ★ Fiscalità dell'impresa edile: la guida completa <br><sub>Impresa</sub> | Scrivania di cantiere con computo metrico, fatture e calcolatrice |
| 2 | `controllo-di-gestione-impresa-edile-cover` | ★ Controllo di gestione per l'impresa edile: leggere il margine commessa per commessa <br><sub>Controllo</sub> | Tabellone di cantiere con avanzamento lavori e costi a confronto |
| 3 | `holding-immobiliare-edilizia-cover` | ★ Holding per l'impresa edile: quando serve davvero e come si costruisce <br><sub>Patrimonio</sub> | Schema di gruppo con holding, immobiliare e società operativa di costruzioni |
| 4 | `protezione-patrimoniale-imprenditore-edile-cover` | ★ Protezione patrimoniale per l'imprenditore edile: cosa funziona e cosa no <br><sub>Patrimonio</sub> | Cantiere in attività visto dall'alto con gru e ponteggi |
| 5 | `reverse-charge-edilizia-cover` | Reverse charge in edilizia: quando si applica davvero <br><sub>Impresa</sub> | Catena appaltatore-subappaltatore in cantiere con documenti contrattuali |
| 6 | `iva-agevolata-lavori-edili-cover` | IVA agevolata sui lavori edili: 4%, 10% o 22% <br><sub>Impresa</sub> | Fattura di posa serramenti con evidenziato il calcolo dei beni significativi |
| 7 | `ritenute-appalti-17-bis-cover` | Ritenute negli appalti: quando scatta l'art. 17-bis e come ottenere l'esonero <br><sub>Impresa</sub> | Cantiere con gru e attrezzature, contratto d'appalto in primo piano |
| 8 | `costo-del-lavoro-impresa-edile-cover` | Costo del lavoro edile: calcolare il costo orario pieno e reggere la congruità <br><sub>Impresa</sub> | Squadra di operai al lavoro in cantiere con attrezzature |
| 9 | `costi-deducibili-impresa-edile-cover` | Costi deducibili dell'impresa edile: mezzi, attrezzature, trasferte e magazzino <br><sub>Impresa</sub> | Deposito di cantiere con materiali accatastati e inventario |
| 10 | `split-payment-e-fatturazione-pa-cover` | Split payment e appalti pubblici: fatturazione, crediti IVA e tempi di incasso <br><sub>Impresa</sub> | Cantiere di opera pubblica con cartello di lavori |
| 11 | `bonus-edilizi-come-si-fatturano-cover` | Bonus edilizi: cosa resta e come si fatturano oggi <br><sub>Impresa</sub> | Fattura di lavori edili accanto alla ricevuta di un bonifico parlante |
| 12 | `fiscalita-fotovoltaico-impianti-cover` | Fotovoltaico e impianti: IVA, ammortamenti e comunità energetiche <br><sub>Impresa</sub> | Installazione di pannelli fotovoltaici sulla copertura di un capannone industriale |
| 13 | `bilancio-impresa-edile-lavori-in-corso-cover` | Lavori in corso su ordinazione: la voce che decide l'utile di un'impresa edile <br><sub>Controllo</sub> | Prospetto di avanzamento commessa con costi sostenuti e costi a finire |
| 14 | `margine-di-commessa-edilizia-cover` | Margine di commessa: come si calcola davvero in un'impresa edile <br><sub>Controllo</sub> | Prospetto di margine di commessa con voci di costo dettagliate |
| 15 | `preventivo-di-commessa-edilizia-cover` | Preventivo di commessa: costruire un prezzo che regge fino alla consegna <br><sub>Controllo</sub> | Computo metrico e analisi prezzi su scrivania con calcolatrice |
| 16 | `flussi-di-cassa-impresa-edile-cover` | Flussi di cassa in edilizia: perché il fatturato cresce e il conto no <br><sub>Controllo</sub> | Prospetto di cassa prospettica settimanale con incassi e pagamenti |
| 17 | `cfo-esterno-impresa-edile-cover` | CFO esterno per l'impresa edile: cosa fa, quando serve, cosa costa <br><sub>Controllo</sub> | Riunione di direzione con report mensile e prospetti di commessa |
| 18 | `assetti-adeguati-impresa-edile-cover` | Assetti adeguati e allerta della crisi nell'impresa edile <br><sub>Controllo</sub> | Documenti di monitoraggio aziendale con proiezione dei flussi a dodici mesi |
| 19 | `durc-irregolare-impresa-edile-cover` | DURC irregolare: cosa blocca e come si sblocca <br><sub>Lavoro</sub> | Schermata del portale Durc On Line con esito di irregolarità |
| 20 | `cassa-edile-come-funziona-cover` | Cassa Edile: come funziona e quanto pesa sul costo del lavoro <br><sub>Lavoro</sub> | Squadra di operai edili in cantiere con attrezzature e ponteggi |
| 21 | `congruita-manodopera-durc-cover` | Congruità della manodopera: come si calcola e come si giustifica lo scostamento <br><sub>Lavoro</sub> | Prospetto di congruità con costo del lavoro denunciato a confronto con il valore dell'opera |
| 22 | `appalto-non-genuino-distacco-somministrazione-cover` | Appalto non genuino, distacco e somministrazione: dove passa il confine <br><sub>Lavoro</sub> | Cantiere con squadre di imprese diverse che lavorano nello stesso perimetro |
| 23 | `assunzioni-agevolazioni-contributive-edilizia-cover` | Assumere in edilizia: riduzione contributiva, apprendistato e CIG maltempo <br><sub>Lavoro</sub> | Ufficio amministrativo di un'impresa edile con prospetti contributivi e libro unico |
| 24 | `oneri-della-sicurezza-trattamento-cover` | Costi della sicurezza: non ribassabili, e vanno tenuti separati <br><sub>Lavoro</sub> | Cantiere con ponteggi di servizio comune, parapetti e segnaletica di sicurezza |
| 25 | `attestazione-soa-requisiti-economici-cover` | Attestazione SOA: come il bilancio decide la classifica che puoi ottenere <br><sub>Appalti</sub> | Attestazione SOA con categorie e classifiche affiancata ai bilanci d'esercizio |
| 26 | `consorzi-ati-fiscalita-cover` | Consorzi e ATI: come funzionano fiscalmente e quando conviene ciascuno <br><sub>Appalti</sub> | Schema del flusso di fatturazione in un consorzio e in un raggruppamento temporaneo |
| 27 | `anticipazione-e-revisione-prezzi-cover` | Anticipazione del prezzo e revisione: le due leve di cassa negli appalti pubblici <br><sub>Appalti</sub> | Cantiere di opera pubblica in fase di allestimento, con ponteggi e area di cantiere |
| 28 | `garanzie-e-polizze-appalto-cover` | Garanzie e polizze negli appalti: quanto costano e quanto plafond consumano <br><sub>Appalti</sub> | Documenti di garanzia fideiussoria e polizza assicurativa di cantiere |
| 29 | `riserve-e-contabilita-lavori-pubblici-cover` | Riserve e contabilità dei lavori: quando diventano ricavo e come si valutano <br><sub>Appalti</sub> | Registro di contabilità dei lavori con firma e iscrizione di riserva |
| 30 | `verifica-fiscale-impresa-edile-cover` | Verifica fiscale all'impresa edile: cosa succede e cosa fare <br><sub>Fisco</sub> | Fascicoli di cantiere e documentazione contabile su un tavolo riunioni |
| 31 | `accertamento-superbonus-imprese-cover` | Accertamenti sui crediti Superbonus: la difesa dell'impresa <br><sub>Fisco</sub> | Fascicolo di commessa con asseverazioni, fatture e documentazione fotografica |
| 32 | `crediti-fiscali-incagliati-edilizia-cover` | Crediti fiscali incagliati: cosa fare quando il cassetto è bloccato <br><sub>Fisco</sub> | Prospetto di piano di utilizzo dei crediti fiscali per anno |
| 33 | `accertamento-induttivo-impresa-edile-cover` | Accertamento induttivo in edilizia: ricavi presunti da metri quadri e ore di cantiere <br><sub>Fisco</sub> | Confronto tra commesse di tipologia diversa con marginalità differenti |
| 34 | `ravvedimento-e-adesione-impresa-edile-cover` | Ravvedimento, adesione e ricorso: come si sceglie la strada <br><sub>Fisco</sub> | Calendario con i termini di adesione e ricorso evidenziati |
| 35 | `isa-indici-affidabilita-edilizia-cover` | ISA in edilizia: come funziona il punteggio e cosa comporta davvero <br><sub>Fisco</sub> | Grafico con andamento dei ricavi per esercizio in un'impresa a commessa |
| 36 | `scissione-immobiliare-impresa-edile-cover` | Scissione immobiliare: separare il capannone dall'impresa che apre i cantieri <br><sub>Patrimonio</sub> | Capannone industriale con uffici di un'impresa di costruzioni |
| 37 | `dividendi-holding-pex-cover` | Dividendi, PEX e prelievi: come si portano a casa gli utili <br><sub>Patrimonio</sub> | Schema del flusso dei dividendi da operativa a holding a socio |
| 38 | `societa-immobiliare-o-persona-fisica-cover` | Immobili: meglio intestarli alla società o a te personalmente? <br><sub>Patrimonio</sub> | Capannone e appartamenti: immobili con destinazioni diverse |
| 39 | `consolidato-fiscale-gruppo-edile-cover` | Gruppo edile e consolidato fiscale: compensare utili e perdite tra società <br><sub>Patrimonio</sub> | Organigramma di gruppo con holding, immobiliare e due società operative |
| 40 | `tassazione-vendita-immobili-impresa-cover` | Vendita di immobili costruiti o ristrutturati: IVA, registro e plusvalenze <br><sub>Patrimonio</sub> | Atto di compravendita immobiliare con documentazione dei lavori eseguiti |
| 41 | `passaggio-generazionale-impresa-edile-cover` | Passaggio generazionale dell'impresa edile: come si prepara <br><sub>Patrimonio</sub> | Padre e figlio in cantiere che esaminano insieme un progetto |
| 42 | `patto-di-famiglia-impresa-edile-cover` | Patto di famiglia, trust e strumenti di governo familiare in edilizia <br><sub>Patrimonio</sub> | Famiglia imprenditoriale attorno a un tavolo con documenti societari |
| 43 | `cessione-azienda-impresa-edile-cover` | Vendere l'impresa edile: cessione d'azienda o cessione di quote? <br><sub>Patrimonio</sub> | Documenti societari e attestazione SOA su una scrivania durante una trattativa |

---

## 3. Figure dentro le guide (82)

**1600 × 900**. File in `public/images/guide/`.
Sono le immagini che spezzano il testo a metà lettura: devono mostrare un
oggetto o una scena concreta, non un concetto astratto.


### Fiscalità dell'impresa edile: la guida completa

| Slot | Contenuto dell'immagine |
|---|---|
| `fiscalita-impresa-edile-1` | Scrivania di cantiere con computo metrico, fatture e calcolatrice |
| `fiscalita-impresa-edile-2` | Registro delle fatture di cantiere con evidenziate le righe in reverse charge |

### Controllo di gestione per l'impresa edile: leggere il margine commessa per commessa

| Slot | Contenuto dell'immagine |
|---|---|
| `controllo-di-gestione-impresa-edile-1` | Tabellone di cantiere con avanzamento lavori e costi a confronto |
| `controllo-di-gestione-impresa-edile-2` | Report mensile con margine per commessa e scostamenti evidenziati |

### Holding per l'impresa edile: quando serve davvero e come si costruisce

| Slot | Contenuto dell'immagine |
|---|---|
| `holding-immobiliare-edilizia-1` | Schema di gruppo con holding, immobiliare e società operativa di costruzioni |
| `holding-immobiliare-edilizia-2` | Verbale assembleare e perizia di stima su una scrivania |

### Protezione patrimoniale per l'imprenditore edile: cosa funziona e cosa no

| Slot | Contenuto dell'immagine |
|---|---|
| `protezione-patrimoniale-imprenditore-edile-1` | Cantiere in attività visto dall'alto con gru e ponteggi |
| `protezione-patrimoniale-imprenditore-edile-2` | Elenco di fideiussioni e garanzie bancarie con importi |

### Reverse charge in edilizia: quando si applica davvero

| Slot | Contenuto dell'immagine |
|---|---|
| `reverse-charge-edilizia-1` | Catena appaltatore-subappaltatore in cantiere con documenti contrattuali |
| `reverse-charge-edilizia-2` | Fattura elettronica con codice natura per inversione contabile |

### IVA agevolata sui lavori edili: 4%, 10% o 22%

| Slot | Contenuto dell'immagine |
|---|---|
| `iva-agevolata-lavori-edili-1` | Fattura di posa serramenti con evidenziato il calcolo dei beni significativi |
| `iva-agevolata-lavori-edili-2` | Titolo edilizio e contratto d'appalto affiancati sulla scrivania |

### Ritenute negli appalti: quando scatta l'art. 17-bis e come ottenere l'esonero

| Slot | Contenuto dell'immagine |
|---|---|
| `ritenute-appalti-17-bis-1` | Cantiere con gru e attrezzature, contratto d'appalto in primo piano |
| `ritenute-appalti-17-bis-2` | Deleghe F24 e elenco nominativo dei lavoratori impiegati nell'appalto |

### Costo del lavoro edile: calcolare il costo orario pieno e reggere la congruità

| Slot | Contenuto dell'immagine |
|---|---|
| `costo-del-lavoro-impresa-edile-1` | Squadra di operai al lavoro in cantiere con attrezzature |
| `costo-del-lavoro-impresa-edile-2` | Denuncia Cassa Edile e prospetto di congruità della manodopera |

### Costi deducibili dell'impresa edile: mezzi, attrezzature, trasferte e magazzino

| Slot | Contenuto dell'immagine |
|---|---|
| `costi-deducibili-impresa-edile-1` | Deposito di cantiere con materiali accatastati e inventario |

### Split payment e appalti pubblici: fatturazione, crediti IVA e tempi di incasso

| Slot | Contenuto dell'immagine |
|---|---|
| `split-payment-e-fatturazione-pa-1` | Cantiere di opera pubblica con cartello di lavori |
| `split-payment-e-fatturazione-pa-2` | Certificato di pagamento SAL e fattura elettronica verso la PA |

### Bonus edilizi: cosa resta e come si fatturano oggi

| Slot | Contenuto dell'immagine |
|---|---|
| `bonus-edilizi-come-si-fatturano-1` | Fattura di lavori edili accanto alla ricevuta di un bonifico parlante |
| `bonus-edilizi-come-si-fatturano-2` | Archivio digitale di commessa con foto datate, computi e asseverazioni |

### Fotovoltaico e impianti: IVA, ammortamenti e comunità energetiche

| Slot | Contenuto dell'immagine |
|---|---|
| `fiscalita-fotovoltaico-impianti-1` | Installazione di pannelli fotovoltaici sulla copertura di un capannone industriale |
| `fiscalita-fotovoltaico-impianti-2` | Contatore di produzione fotovoltaica e documentazione dell'impianto |

### Lavori in corso su ordinazione: la voce che decide l'utile di un'impresa edile

| Slot | Contenuto dell'immagine |
|---|---|
| `bilancio-impresa-edile-lavori-in-corso-1` | Prospetto di avanzamento commessa con costi sostenuti e costi a finire |

### Margine di commessa: come si calcola davvero in un'impresa edile

| Slot | Contenuto dell'immagine |
|---|---|
| `margine-di-commessa-edilizia-1` | Prospetto di margine di commessa con voci di costo dettagliate |
| `margine-di-commessa-edilizia-2` | Grafico a barre con margine per commessa e scostamenti rispetto al preventivo |

### Preventivo di commessa: costruire un prezzo che regge fino alla consegna

| Slot | Contenuto dell'immagine |
|---|---|
| `preventivo-di-commessa-edilizia-1` | Computo metrico e analisi prezzi su scrivania con calcolatrice |
| `preventivo-di-commessa-edilizia-2` | Contratto d'appalto con clausola di revisione prezzi evidenziata |

### Flussi di cassa in edilizia: perché il fatturato cresce e il conto no

| Slot | Contenuto dell'immagine |
|---|---|
| `flussi-di-cassa-impresa-edile-1` | Prospetto di cassa prospettica settimanale con incassi e pagamenti |
| `flussi-di-cassa-impresa-edile-2` | Grafico dell'andamento del capitale circolante rispetto al fatturato |

### CFO esterno per l'impresa edile: cosa fa, quando serve, cosa costa

| Slot | Contenuto dell'immagine |
|---|---|
| `cfo-esterno-impresa-edile-1` | Riunione di direzione con report mensile e prospetti di commessa |

### Assetti adeguati e allerta della crisi nell'impresa edile

| Slot | Contenuto dell'immagine |
|---|---|
| `assetti-adeguati-impresa-edile-1` | Documenti di monitoraggio aziendale con proiezione dei flussi a dodici mesi |

### DURC irregolare: cosa blocca e come si sblocca

| Slot | Contenuto dell'immagine |
|---|---|
| `durc-irregolare-impresa-edile-1` | Schermata del portale Durc On Line con esito di irregolarità |
| `durc-irregolare-impresa-edile-2` | Prospetto di congruità della manodopera confrontato con il valore dell'opera |

### Cassa Edile: come funziona e quanto pesa sul costo del lavoro

| Slot | Contenuto dell'immagine |
|---|---|
| `cassa-edile-come-funziona-1` | Squadra di operai edili in cantiere con attrezzature e ponteggi |
| `cassa-edile-come-funziona-2` | Denuncia mensile telematica con ore per operaio e attribuzione ai cantieri |

### Congruità della manodopera: come si calcola e come si giustifica lo scostamento

| Slot | Contenuto dell'immagine |
|---|---|
| `congruita-manodopera-durc-1` | Prospetto di congruità con costo del lavoro denunciato a confronto con il valore dell'opera |
| `congruita-manodopera-durc-2` | Riunione mensile di cantiere con prospetto della congruità accanto al margine di commessa |

### Appalto non genuino, distacco e somministrazione: dove passa il confine

| Slot | Contenuto dell'immagine |
|---|---|
| `appalto-non-genuino-distacco-somministrazione-1` | Cantiere con squadre di imprese diverse che lavorano nello stesso perimetro |
| `appalto-non-genuino-distacco-somministrazione-2` | Contratto di subappalto con computo delle lavorazioni affidate e prezzi unitari |

### Assumere in edilizia: riduzione contributiva, apprendistato e CIG maltempo

| Slot | Contenuto dell'immagine |
|---|---|
| `assunzioni-agevolazioni-contributive-edilizia-1` | Ufficio amministrativo di un'impresa edile con prospetti contributivi e libro unico |
| `assunzioni-agevolazioni-contributive-edilizia-2` | Giovane apprendista in cantiere affiancato da un operaio specializzato |

### Costi della sicurezza: non ribassabili, e vanno tenuti separati

| Slot | Contenuto dell'immagine |
|---|---|
| `oneri-della-sicurezza-trattamento-1` | Cantiere con ponteggi di servizio comune, parapetti e segnaletica di sicurezza |
| `oneri-della-sicurezza-trattamento-2` | Computo dei costi della sicurezza allegato al piano di sicurezza e coordinamento |

### Attestazione SOA: come il bilancio decide la classifica che puoi ottenere

| Slot | Contenuto dell'immagine |
|---|---|
| `attestazione-soa-requisiti-economici-1` | Attestazione SOA con categorie e classifiche affiancata ai bilanci d'esercizio |
| `attestazione-soa-requisiti-economici-2` | Riunione con bilanci, certificati di esecuzione lavori e progetto di scissione sul tavolo |

### Consorzi e ATI: come funzionano fiscalmente e quando conviene ciascuno

| Slot | Contenuto dell'immagine |
|---|---|
| `consorzi-ati-fiscalita-1` | Schema del flusso di fatturazione in un consorzio e in un raggruppamento temporaneo |
| `consorzi-ati-fiscalita-2` | Atto costitutivo di consorzio stabile con statuto e regolamento interno |

### Anticipazione del prezzo e revisione: le due leve di cassa negli appalti pubblici

| Slot | Contenuto dell'immagine |
|---|---|
| `anticipazione-e-revisione-prezzi-1` | Cantiere di opera pubblica in fase di allestimento, con ponteggi e area di cantiere |
| `anticipazione-e-revisione-prezzi-2` | Prospetto di cassa di commessa con anticipazione, SAL e recuperi progressivi |

### Garanzie e polizze negli appalti: quanto costano e quanto plafond consumano

| Slot | Contenuto dell'immagine |
|---|---|
| `garanzie-e-polizze-appalto-1` | Documenti di garanzia fideiussoria e polizza assicurativa di cantiere |
| `garanzie-e-polizze-appalto-2` | Prospetto di monitoraggio dei plafond fideiussori per istituto e per commessa |

### Riserve e contabilità dei lavori: quando diventano ricavo e come si valutano

| Slot | Contenuto dell'immagine |
|---|---|
| `riserve-e-contabilita-lavori-pubblici-1` | Registro di contabilità dei lavori con firma e iscrizione di riserva |
| `riserve-e-contabilita-lavori-pubblici-2` | Report mensile di commessa con registro delle riserve accanto al margine |

### Verifica fiscale all'impresa edile: cosa succede e cosa fare

| Slot | Contenuto dell'immagine |
|---|---|
| `verifica-fiscale-impresa-edile-1` | Fascicoli di cantiere e documentazione contabile su un tavolo riunioni |
| `verifica-fiscale-impresa-edile-2` | Calendario con evidenziato il termine di sessanta giorni dal PVC |

### Accertamenti sui crediti Superbonus: la difesa dell'impresa

| Slot | Contenuto dell'immagine |
|---|---|
| `accertamento-superbonus-imprese-1` | Fascicolo di commessa con asseverazioni, fatture e documentazione fotografica |
| `accertamento-superbonus-imprese-2` | Cassetto fiscale con crediti d'imposta sospesi |

### Crediti fiscali incagliati: cosa fare quando il cassetto è bloccato

| Slot | Contenuto dell'immagine |
|---|---|
| `crediti-fiscali-incagliati-edilizia-1` | Prospetto di piano di utilizzo dei crediti fiscali per anno |
| `crediti-fiscali-incagliati-edilizia-2` | Documentazione di intervento ordinata cronologicamente in faldoni |

### Accertamento induttivo in edilizia: ricavi presunti da metri quadri e ore di cantiere

| Slot | Contenuto dell'immagine |
|---|---|
| `accertamento-induttivo-impresa-edile-1` | Confronto tra commesse di tipologia diversa con marginalità differenti |
| `accertamento-induttivo-impresa-edile-2` | Contratti e computi metrici usati per ricalcolare la ricostruzione per gruppi omogenei |

### Ravvedimento, adesione e ricorso: come si sceglie la strada

| Slot | Contenuto dell'immagine |
|---|---|
| `ravvedimento-e-adesione-impresa-edile-1` | Calendario con i termini di adesione e ricorso evidenziati |
| `ravvedimento-e-adesione-impresa-edile-2` | Documenti di tesoreria e portafoglio ordini a supporto di un'istanza di sospensione |

### ISA in edilizia: come funziona il punteggio e cosa comporta davvero

| Slot | Contenuto dell'immagine |
|---|---|
| `isa-indici-affidabilita-edilizia-1` | Grafico con andamento dei ricavi per esercizio in un'impresa a commessa |
| `isa-indici-affidabilita-edilizia-2` | Fascicolo esplicativo dello scostamento con prospetti di commessa |

### Scissione immobiliare: separare il capannone dall'impresa che apre i cantieri

| Slot | Contenuto dell'immagine |
|---|---|
| `scissione-immobiliare-impresa-edile-1` | Capannone industriale con uffici di un'impresa di costruzioni |
| `scissione-immobiliare-impresa-edile-2` | Contratto di locazione infragruppo con perizia di stima allegata |

### Dividendi, PEX e prelievi: come si portano a casa gli utili

| Slot | Contenuto dell'immagine |
|---|---|
| `dividendi-holding-pex-1` | Schema del flusso dei dividendi da operativa a holding a socio |
| `dividendi-holding-pex-2` | Verbale di assemblea per la delibera di distribuzione utili |

### Immobili: meglio intestarli alla società o a te personalmente?

| Slot | Contenuto dell'immagine |
|---|---|
| `societa-immobiliare-o-persona-fisica-1` | Capannone e appartamenti: immobili con destinazioni diverse |
| `societa-immobiliare-o-persona-fisica-2` | Contratto di locazione con perizia di congruità del canone |

### Gruppo edile e consolidato fiscale: compensare utili e perdite tra società

| Slot | Contenuto dell'immagine |
|---|---|
| `consolidato-fiscale-gruppo-edile-1` | Organigramma di gruppo con holding, immobiliare e due società operative |
| `consolidato-fiscale-gruppo-edile-2` | Contratti infragruppo con relazioni e report a supporto |

### Vendita di immobili costruiti o ristrutturati: IVA, registro e plusvalenze

| Slot | Contenuto dell'immagine |
|---|---|
| `tassazione-vendita-immobili-impresa-1` | Atto di compravendita immobiliare con documentazione dei lavori eseguiti |
| `tassazione-vendita-immobili-impresa-2` | Prospetto di calcolo della rettifica della detrazione IVA |

### Passaggio generazionale dell'impresa edile: come si prepara

| Slot | Contenuto dell'immagine |
|---|---|
| `passaggio-generazionale-impresa-edile-1` | Padre e figlio in cantiere che esaminano insieme un progetto |
| `passaggio-generazionale-impresa-edile-2` | Statuto societario con clausole di governance familiare evidenziate |

### Patto di famiglia, trust e strumenti di governo familiare in edilizia

| Slot | Contenuto dell'immagine |
|---|---|
| `patto-di-famiglia-impresa-edile-1` | Famiglia imprenditoriale attorno a un tavolo con documenti societari |
| `patto-di-famiglia-impresa-edile-2` | Atto pubblico di patto di famiglia con perizia di valutazione allegata |

### Vendere l'impresa edile: cessione d'azienda o cessione di quote?

| Slot | Contenuto dell'immagine |
|---|---|
| `cessione-azienda-impresa-edile-1` | Documenti societari e attestazione SOA su una scrivania durante una trattativa |
| `cessione-azienda-impresa-edile-2` | Contratto di cessione con clausole di garanzia e indennizzo evidenziate |

---

## Ordine di produzione consigliato

1. **6 immagini di sito** — stanno sopra la piega, si vedono subito.
2. **4 copertine dei pilastri** (★) — sono in evidenza nel listing delle guide.
3. **26 copertine restanti** — completano la griglia di `/guide`.
4. **82 figure interne** — si possono aggiungere una guida alla volta,
   senza toccare il codice oltre alla riga in `articleImages.ts`.

Con i primi due gruppi (10 immagini) il sito è già presentabile ovunque.

