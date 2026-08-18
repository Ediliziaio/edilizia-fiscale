import EFLegalLayout from "@/components/EFLegalLayout";

const CookiePolicy = () => (
  <EFLegalLayout
    title="Cookie Policy"
    subtitle="Informativa sull'uso dei cookie da parte del sito ediliziafiscale.it, ai sensi della normativa italiana ed europea in materia di protezione dei dati personali."
    lastUpdate="Agosto 2026"
    icon="cookie"
    metaDescription="Cookie Policy di Edilizia Fiscale: tipologie di cookie utilizzati, finalità, durata e modalità di gestione delle preferenze."
    canonicalPath="/cookie"
  >
    <h2>1. Cosa sono i cookie</h2>
    <p>
      I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono
      memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. Si distinguono per titolare
      (di prima o terza parte), durata (di sessione o persistenti) e finalità (tecnici o di profilazione).
    </p>

    <h2>2. Cookie utilizzati da questo sito</h2>
    <p>Il sito <strong>ediliziafiscale.it</strong> utilizza esclusivamente:</p>
    <ul>
      <li><strong>Cookie tecnici di sessione</strong>, necessari al funzionamento del sito (es. gestione delle preferenze di navigazione). Non richiedono consenso.</li>
    </ul>
    <p>
      Il sito <strong>non utilizza cookie di profilazione</strong> né strumenti di tracciamento pubblicitario.
      Qualora in futuro venissero introdotti strumenti di analisi statistica o marketing, questa informativa sarà
      aggiornata e, dove richiesto, sarà attivato un banner di raccolta del consenso preventivo.
    </p>

    <h2>3. Cookie di terze parti</h2>
    <p>
      Le pagine possono incorporare risorse tecniche di terze parti (es. font). Tali fornitori possono
      trattare dati tecnici di navigazione in qualità di autonomi titolari: si rinvia alle rispettive informative.
    </p>

    <h2>4. Gestione dei cookie dal browser</h2>
    <p>
      L'utente può gestire o eliminare i cookie tramite le impostazioni del proprio browser. La disabilitazione dei
      cookie tecnici può compromettere il corretto funzionamento del sito.
    </p>

    <h2>5. Titolare</h2>
    <p>
      Per l'identità del titolare e i diritti dell'interessato si rinvia alla <a href="/privacy">Privacy Policy</a>.
    </p>
  </EFLegalLayout>
);

export default CookiePolicy;
