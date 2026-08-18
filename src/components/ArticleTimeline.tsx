interface Step {
  /** Il termine: "Giorno 0", "Entro 15 giorni", "40 giorni dalla notifica". */
  when: string;
  label: string;
  detail?: string;
}

interface ArticleTimelineProps {
  title?: string;
  steps: Step[];
}

/**
 * Sequenza visiva dei termini di una procedura. CSS puro (niente librerie di
 * grafici nel chunk dell'articolo) e testo sempre leggibile: è uno dei blocchi
 * che i motori di risposta estraggono più volentieri.
 */
const ArticleTimeline = ({ title, steps }: ArticleTimelineProps) => (
  <div className="my-8 bg-muted/50 border border-border rounded-2xl p-6 lg:p-7">
    {title && (
      <h3 className="text-base font-bold text-navy mb-5 uppercase tracking-wide">{title}</h3>
    )}
    <ol className="relative space-y-5">
      {/* filo verticale che unisce i pallini */}
      <span
        className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent"
        aria-hidden="true"
      />
      {steps.map((s, i) => (
        <li key={i} className="relative pl-8">
          <span
            className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-gold ring-4 ring-muted/50"
            aria-hidden="true"
          />
          <span className="block text-xs font-bold uppercase tracking-wider text-gold-dark mb-0.5">
            {s.when}
          </span>
          <span className="block font-semibold text-navy leading-snug">{s.label}</span>
          {s.detail && (
            <span className="block text-sm text-foreground/70 leading-relaxed mt-1">{s.detail}</span>
          )}
        </li>
      ))}
    </ol>
  </div>
);

export default ArticleTimeline;
