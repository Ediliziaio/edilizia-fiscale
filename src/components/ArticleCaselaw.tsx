import { BookMarked } from "lucide-react";

interface CaselawItem {
  court: string;
  ref?: string;
  principle: string;
  impact?: string;
}

interface ArticleCaselawProps {
  title?: string;
  items: CaselawItem[];
}

/**
 * Blocco fonti: norma o documento di prassi + estremi + effetto pratico.
 * È uno dei formati più estratti dai motori di risposta, ed è anche il segnale
 * E-E-A-T più forte del sito — a condizione che gli estremi siano verificati
 * sulla fonte ufficiale (vedi README, sezione punti normativi mobili).
 */
const ArticleCaselaw = ({ title = "Cosa dice la norma", items }: ArticleCaselawProps) => (
  <div className="my-8 rounded-2xl border border-ink/15 bg-ink/[0.03] overflow-hidden">
    <div className="flex items-center gap-2.5 bg-ink text-white px-6 py-3.5">
      <BookMarked className="w-5 h-5 text-brand" aria-hidden="true" />
      <h3 className="font-bold text-base">{title}</h3>
    </div>

    <ul className="divide-y divide-border">
      {items.map((it, i) => (
        <li key={i} className="px-6 py-5">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">{it.court}</span>
            {it.ref && (
              <span className="text-xs font-semibold text-ink bg-brand/15 rounded-full px-2.5 py-0.5">
                {it.ref}
              </span>
            )}
          </div>
          <p className="text-foreground/85 leading-relaxed">{it.principle}</p>
          {it.impact && (
            <p className="text-sm text-foreground/65 leading-relaxed mt-2 pl-3 border-l-2 border-brand/40">
              <span className="font-semibold text-ink">Cosa significa per te: </span>
              {it.impact}
            </p>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default ArticleCaselaw;
