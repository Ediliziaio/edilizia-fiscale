import EFLegalLayout from "@/components/EFLegalLayout";
import { EMAIL, PEC } from "@/data/site";

const NoteLegali = () => (
  <EFLegalLayout
    title="Note legali"
    subtitle="Informazioni legali sul sito ediliziafiscale.it e condizioni di utilizzo dei contenuti pubblicati."
    lastUpdate="Agosto 2026"
    icon="file"
    metaDescription="Note legali di Edilizia Fiscale: identificazione del titolare, natura informativa dei contenuti, limitazioni di responsabilità, copyright e foro competente."
    canonicalPath="/note-legali"
  >
    <h2>1. Titolarità del sito</h2>
    <p>
      Il sito <strong>ediliziafiscale.it</strong> è di proprietà dello <strong>Studio Edilizia Fiscale</strong>
      [dati identificativi completi, P.IVA, sede, Ordine dei Dottori Commercialisti e degli Esperti Contabili di
      appartenenza ed eventuale iscrizione al Registro dei revisori legali in fase di pubblicazione].
      Contatti: {EMAIL} — PEC: {PEC}.
    </p>

    <h2>2. Informazione professionale</h2>
    <p>
      I contenuti del sito costituiscono informazione sull'attività professionale ai sensi del Codice deontologico
      della professione di dottore commercialista ed esperto contabile: sono redatti secondo criteri di verità,
      correttezza e non ingannevolezza, senza promesse di risparmio d'imposta, indicazioni comparative con altri
      professionisti o percentuali di successo.
    </p>

    <h2>3. Natura informativa dei contenuti</h2>
    <p>
      Le guide, le domande frequenti e ogni altro contenuto pubblicato hanno <strong>finalità esclusivamente
      informative</strong> e non costituiscono parere fiscale né sostituiscono una consulenza sul caso concreto.
      La normativa tributaria e la prassi dell'Agenzia delle Entrate sono in costante evoluzione: prima di assumere
      decisioni basate sui contenuti del sito è necessario rivolgersi a un professionista abilitato, esaminando i
      documenti e i numeri del caso specifico.
    </p>
    <p>
      Gli esempi riportati nelle guide sono <strong>scenari illustrativi</strong>, costruiti su dinamiche ricorrenti:
      non descrivono clienti reali identificabili e gli importi indicati non costituiscono garanzia di risultati
      analoghi: dipendono da volumi, struttura societaria e scelte pregresse di ciascuna impresa.
    </p>

    <h2>4. Limitazione di responsabilità</h2>
    <p>
      Lo studio non risponde dei danni derivanti dall'uso dei contenuti del sito in assenza di incarico
      professionale, né dei contenuti di siti terzi raggiungibili tramite link, dei quali non controlla
      l'aggiornamento o la correttezza.
    </p>

    <h2>5. Proprietà intellettuale</h2>
    <p>
      Testi, struttura e grafica del sito sono protetti dalla normativa sul diritto d'autore. È consentita la
      citazione di brevi estratti con indicazione della fonte e link alla pagina originale; sono vietate la
      riproduzione integrale e la ripubblicazione dei contenuti a fini commerciali senza autorizzazione scritta.
    </p>

    <h2>6. Legge applicabile e foro</h2>
    <p>
      Ai contenuti del sito e alle presenti condizioni si applica la legge italiana. Per ogni controversia è
      competente il foro previsto dalla legge, fatta salva la competenza inderogabile del foro del consumatore.
    </p>
  </EFLegalLayout>
);

export default NoteLegali;
