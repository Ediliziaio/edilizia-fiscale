import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import ArticleCover from "@/components/ArticleCover";
import { articlesMeta, PILLAR_SLUGS } from "@/data/articles";

/**
 * Le guide in home. Prima di questa sezione l'intero corpo editoriale del sito
 * — decine di guide — non era raggiungibile dalla home se non dal menu: la
 * pagina si chiudeva sulla CTA senza mai mostrare il lavoro fatto.
 * Mostra i quattro pilastri, uno per silo, con il conteggio reale.
 */
const EFGuideShowcase = () => {
  const pillars = PILLAR_SLUGS.map((slug) => articlesMeta.find((a) => a.slug === slug)).filter(
    (a): a is (typeof articlesMeta)[number] => Boolean(a),
  );

  return (
    <section className="py-16 lg:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
            <div className="max-w-2xl">
              <p className="text-brand-dark uppercase tracking-widest text-sm font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Quello che sappiamo, scritto
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-5 leading-tight">
                {articlesMeta.length} guide che spiegano come lo facciamo.
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Non articoli di richiamo: norme, tabelle ed esempi numerici, con l'errore tipico da evitare.
                Sono le stesse cose che diciamo in riunione, scritte per intero. Se dopo averle lette
                risolvi da solo, abbiamo fatto comunque il nostro lavoro.
              </p>
            </div>
            <Link
              to="/guide"
              className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark shrink-0"
            >
              Tutte le {articlesMeta.length} guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 4) * 90}>
              <Link
                to={`/guide/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:border-brand hover:shadow-card"
              >
                <ArticleCover article={a} className="aspect-[16/9]" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-wider">
                    <span className="text-brand-dark">{a.category}</span>
                    <span className="flex items-center gap-1 text-foreground/40">
                      <Clock className="h-3 w-3" /> {a.readTime}
                    </span>
                  </div>
                  <h3 className="mb-2 font-bold leading-snug text-ink group-hover:text-brand-dark">
                    {a.title}
                  </h3>
                  <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-foreground/65">
                    {a.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark transition-all group-hover:gap-2.5">
                    Leggi la guida <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-foreground/60">
            <Link to="/guide?c=Impresa" className="hover:text-brand-dark">Fiscalità dell'impresa</Link>
            <Link to="/guide?c=Controllo" className="hover:text-brand-dark">Numeri e controllo di gestione</Link>
            <Link to="/guide?c=Lavoro" className="hover:text-brand-dark">Lavoro e contributi</Link>
            <Link to="/guide?c=Appalti" className="hover:text-brand-dark">Appalti pubblici</Link>
            <Link to="/guide?c=Fisco" className="hover:text-brand-dark">Verifiche e contenzioso</Link>
            <Link to="/guide?c=Patrimonio" className="hover:text-brand-dark">Holding e patrimonio</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EFGuideShowcase;
