import { Calculator, Landmark, Gauge, Scale, HardHat, FileCheck, type LucideIcon } from "lucide-react";
import { getArticleImage } from "@/data/articleImages";
import type { ArticleMeta, Category } from "@/data/articles";

/** Identità visiva per silo: la copertina dice a colpo d'occhio di chi parla la guida. */
const CAT: Record<Category, { from: string; to: string; icon: LucideIcon }> = {
  Impresa: { from: "hsl(0 0% 6%)", to: "hsl(0 0% 26%)", icon: Calculator },
  Controllo: { from: "hsl(0 0% 10%)", to: "hsl(19 40% 34%)", icon: Gauge },
  Fisco: { from: "hsl(19 45% 24%)", to: "hsl(19 50% 42%)", icon: Scale },
  Lavoro: { from: "hsl(19 55% 30%)", to: "hsl(19 62% 48%)", icon: HardHat },
  Appalti: { from: "hsl(0 0% 8%)", to: "hsl(19 75% 44%)", icon: FileCheck },
  Patrimonio: { from: "hsl(19 80% 44%)", to: "hsl(19 89% 58%)", icon: Landmark },
};

interface ArticleCoverProps {
  article: ArticleMeta;
  /** Classi del contenitore: passa qui l'aspect ratio. */
  className?: string;
  /** La copertina in cima all'articolo va caricata subito (è l'LCP). */
  eager?: boolean;
}

/**
 * Copertina della guida. Se lo slot `<slug>-cover` è collegato mostra la foto,
 * altrimenti disegna una copertina grafica con i colori del silo: la griglia
 * resta piena e riconoscibile anche prima che le foto esistano.
 */
const ArticleCover = ({ article, className = "", eager = false }: ArticleCoverProps) => {
  const src = getArticleImage(`${article.slug}-cover`);
  const { from, to, icon: Icon } = CAT[article.category];

  if (src) {
    return (
      <div className={`relative overflow-hidden bg-muted ${className}`}>
        <img
          src={src}
          alt={article.title}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          {...(eager ? { fetchPriority: "high" as const } : {})}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
      role="img"
      aria-label={article.title}
    >
      {/* trama tecnica leggera */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(19 89% 53%) 1px, transparent 1px), linear-gradient(90deg, hsl(19 89% 53%) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* alone dorato */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 78% 22%, hsl(19 89% 53% / 0.35) 0%, transparent 55%)",
        }}
      />
      <Icon
        className="absolute right-4 bottom-3 w-16 h-16 text-white/15"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <span className="absolute left-4 bottom-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
        Edilizia Fiscale
      </span>
    </div>
  );
};

export default ArticleCover;
