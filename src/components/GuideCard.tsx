import { Link } from "react-router-dom";
import { ArrowRight, Clock, Star } from "lucide-react";
import type { ArticleMeta, Category } from "@/data/articles";
import ArticleCover from "@/components/ArticleCover";

/** Accento cromatico per silo: il lettore capisce a colpo d'occhio se è roba sua. */
export const CAT_STYLE: Record<Category, { bar: string; badge: string }> = {
  Impresa: { bar: "from-ink to-ink-light", badge: "bg-ink/10 text-ink" },
  Controllo: { bar: "from-ink to-trust-dark", badge: "bg-ink/[0.07] text-trust-dark" },
  Fisco: { bar: "from-trust-dark to-trust", badge: "bg-trust/15 text-trust-dark" },
  Lavoro: { bar: "from-trust to-brand-dark", badge: "bg-trust/20 text-trust-dark" },
  Appalti: { bar: "from-ink to-brand-dark", badge: "bg-ink/[0.07] text-brand-dark" },
  Patrimonio: { bar: "from-brand-dark to-brand", badge: "bg-brand/20 text-brand-dark" },
};
const GuideCard = ({ a, featured = false }: { a: ArticleMeta; featured?: boolean }) => {
  const style = CAT_STYLE[a.category];
  return (
    <Link
      to={`/guide/${a.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-brand hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      <ArticleCover article={a} className={featured ? "aspect-[21/9]" : "aspect-[16/9]"} />
      <div className={`h-1.5 bg-gradient-to-r ${style.bar}`} />
      <div className={`flex-1 flex flex-col ${featured ? "p-7" : "p-6"}`}>
        <div className="flex items-center gap-2.5 mb-3 flex-wrap">
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${style.badge}`}>
            {a.category}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand text-ink text-[10px] font-bold uppercase tracking-wider">
              <Star className="w-3 h-3 fill-current" /> Guida pilastro
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-foreground/50">
            <Clock className="w-3.5 h-3.5" /> {a.readTime}
          </span>
        </div>

        <h3 className={`font-bold text-ink mb-2 leading-snug group-hover:text-brand-dark ${featured ? "text-xl" : "text-lg"}`}>
          {a.title}
        </h3>
        <p className={`text-foreground/70 leading-relaxed mb-4 flex-1 ${featured ? "text-[15px] line-clamp-4" : "text-sm line-clamp-3"}`}>
          {featured ? a.intro : a.excerpt}
        </p>

        <span className="text-sm font-semibold text-ink group-hover:text-brand-dark flex items-center gap-1.5 mt-auto group-hover:gap-2.5 transition-all">
          Leggi la guida <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};
export default GuideCard;
