import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { faqEntries } from "@/data/faq";

/**
 * FAQ in home: domande VISIBILI (niente accordion chiusi — i motori di risposta
 * estraggono solo ciò che è nel testo visibile), ognuna linkata alla sua pagina.
 */
const EFFAQ = () => {
  const featured = faqEntries.slice(0, 6);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="text-brand-dark uppercase tracking-widest text-sm font-semibold mb-3">Domande frequenti</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-5 leading-tight">
              Le domande che riceviamo più spesso.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Risposte di carattere generale, con i riferimenti normativi. Per il tuo caso specifico serve sempre
              l'esame dei documenti.
            </p>
          </div>

          <div className="space-y-4">
            {featured.map((f) => (
              <div key={f.slug} className="bg-muted/40 rounded-xl border border-border p-5 lg:p-6">
                <h3 className="font-bold text-ink text-base mb-2">{f.question}</h3>
                <p className="text-foreground/75 leading-relaxed mb-3">{f.answer}</p>
                <Link
                  to={`/domande-frequenti/${f.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:gap-2.5 transition-all"
                >
                  Leggi l'approfondimento <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/domande-frequenti"
              className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark"
            >
              Tutte le domande frequenti <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EFFAQ;
