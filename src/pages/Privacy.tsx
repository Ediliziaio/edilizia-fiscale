import EFLegalLayout from "@/components/EFLegalLayout";
import { EMAIL, PEC } from "@/data/site";

const Privacy = () => (
  <EFLegalLayout
    title="Privacy Policy"
    subtitle="Informativa sul trattamento dei dati personali ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR)."
    lastUpdate="Agosto 2026"
    icon="shield"
    metaDescription="Informativa privacy di Edilizia Fiscale: titolare del trattamento, finalità, base giuridica, conservazione dei dati e diritti dell'interessato."
    canonicalPath="/privacy"
  >
    <h2>1. Titolare del trattamento</h2>
    <p>
      Il titolare del trattamento dei dati personali è lo <strong>Studio Edilizia Fiscale</strong> [dati identificativi
      completi, P.IVA e sede in fase di pubblicazione]. Per ogni comunicazione relativa alla protezione dei dati è
      possibile scrivere a <strong>{EMAIL}</strong> o via PEC a <strong>{PEC}</strong>.
    </p>

    <h2>2. Dati trattati</h2>
    <ul>
      <li><strong>Dati di contatto</strong>: nome, cognome, telefono, email, forniti tramite il modulo di contatto o nelle comunicazioni con lo studio.</li>
      <li><strong>Dati relativi alla richiesta</strong>: descrizione della vicenda, documenti trasmessi (contratti, preventivi, SAL, fotografie, corrispondenza).</li>
      <li><strong>Dati di navigazione</strong>: dati tecnici raccolti in forma aggregata per il funzionamento e la sicurezza del sito (si veda la Cookie Policy).</li>
    </ul>

    <h2>3. Finalità e base giuridica</h2>
    <ul>
      <li><strong>Riscontro alle richieste di contatto e prima valutazione del caso</strong> — base giuridica: misure precontrattuali su richiesta dell'interessato (art. 6, par. 1, lett. b GDPR).</li>
      <li><strong>Esecuzione dell'incarico professionale</strong>, se conferito — base giuridica: contratto e obblighi di legge connessi alla professione di dottore commercialista.</li>
      <li><strong>Adempimenti di legge</strong> (fiscali, antiriciclaggio, deontologici) — base giuridica: obbligo legale (art. 6, par. 1, lett. c GDPR).</li>
    </ul>
    <p>Il conferimento dei dati contrassegnati come obbligatori è necessario per dare seguito alla richiesta; il mancato conferimento impedisce di fornirvi riscontro.</p>

    <h2>4. Modalità del trattamento e conservazione</h2>
    <p>
      I dati sono trattati con strumenti elettronici e cartacei, con misure di sicurezza adeguate al rischio e nel
      rispetto del segreto professionale. I dati relativi alle richieste di contatto non seguite da incarico sono
      conservati per il tempo necessario al riscontro e comunque non oltre 24 mesi; i dati relativi agli incarichi
      professionali sono conservati per i termini di legge (di regola 10 anni dalla conclusione).
    </p>

    <h2>5. Comunicazione dei dati</h2>
    <p>
      I dati non sono diffusi. Possono essere comunicati, nei limiti delle finalità indicate, a: collaboratori dello
      studio vincolati al segreto, consulenti tecnici, domiciliatari, controparti e uffici giudiziari nell'ambito
      dell'eventuale incarico, fornitori di servizi tecnici del sito nominati responsabili del trattamento.
    </p>

    <h2>6. Diritti dell'interessato</h2>
    <p>
      Ai sensi degli artt. 15-22 GDPR l'interessato può esercitare i diritti di accesso, rettifica, cancellazione,
      limitazione, portabilità e opposizione scrivendo a {EMAIL}. È inoltre possibile proporre reclamo al Garante per
      la protezione dei dati personali (www.garanteprivacy.it).
    </p>

    <h2>7. Aggiornamenti</h2>
    <p>
      La presente informativa può essere aggiornata: la versione vigente è sempre quella pubblicata su questa pagina,
      con la data di ultimo aggiornamento indicata in alto.
    </p>
  </EFLegalLayout>
);

export default Privacy;
