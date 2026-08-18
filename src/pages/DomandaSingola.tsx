import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import EFStickyCTA from "@/components/EFStickyCTA";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { getFaq, faqEntries } from "@/data/faq";
import { getArticleMeta } from "@/data/articles";
import { SITE_URL } from "@/data/site";

/**
 * Pagina dedicata a UNA sola domanda (/domande-frequenti/[slug]):
 * H1 = domanda esatta, risposta diretta 40-60 parole, approfondimento con
 * riferimento normativo, link contestuale alla guida. Schema QAPage.
 */
const DomandaSingola = () => {
  const { slug } = useParams();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const faq = slug ? getFaq(slug) : undefined;

  if (!faq) return <Navigate to="/domande-frequenti" replace />;

  const url = `${SITE_URL}/domande-frequenti/${faq.slug}`;
  const guida = faq.guida ? getArticleMeta(faq.guida) : undefined;
  const related = faqEntries.filter((f) => f.slug !== faq.slug && f.silo === faq.silo).slice(0, 3);

  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": faq.question,
      "text": faq.question,
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "url": url,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Domande frequenti", "item": `${SITE_URL}/domande-frequenti` },
      { "@type": "ListItem", "position": 3, "name": faq.question, "item": url },
    ],
  };

  const seoTitle = faq.question.length <= 52 ? `${faq.question} | Edilizia Fiscale` : faq.question;

  return (
    <>
      <SEO
        title={seoTitle}
        description={faq.answer.length <= 155 ? faq.answer : `${faq.answer.slice(0, 152)}…`}
        canonical={url}
        ogType="article"
        jsonLd={[qaSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1">
          <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Link
                  to="/domande-frequenti"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-ink mb-6"
                >
                  <ArrowLeft className="w-4 h-4" /> Tutte le domande frequenti
                </Link>

                <span className="block text-xs uppercase tracking-wider font-bold text-brand-dark mb-3">
                  {faq.silo === "imprese" ? "Per l'impresa" : "Per il patrimonio"}
                </span>

                <h1 className="text-3xl md:text-4xl font-bold text-ink leading-tight mb-6">{faq.question}</h1>

                {/* Risposta diretta */}
                <div className="bg-brand/10 border-l-4 border-brand rounded-r-xl p-6 mb-8">
                  <p className="text-lg text-ink leading-relaxed font-medium">{faq.answer}</p>
                </div>

                {/* Approfondimento */}
                <div className="space-y-5">
                  {faq.detail.map((p, i) => (
                    <p key={i} className="text-foreground/80 leading-relaxed text-lg">{p}</p>
                  ))}
                </div>

                {/* Link alla guida */}
                {guida && (
                  <Link
                    to={`/guide/${guida.slug}`}
                    className="mt-9 group flex items-start gap-4 bg-muted/40 hover:bg-white border border-border hover:border-brand rounded-2xl p-6 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-ink flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-brand-dark">La guida completa</span>
                      <h2 className="font-bold text-ink leading-snug mt-1 group-hover:text-brand-dark">{guida.title}</h2>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-brand-dark">
                        Leggi la guida <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                )}

                {/* CTA */}
                <div className="mt-10 bg-ink text-white rounded-2xl p-7">
                  <h2 className="text-xl font-bold mb-2">La tua situazione è diversa? Probabilmente sì.</h2>
                  <p className="text-white/80 mb-5 leading-relaxed">
                    Le risposte generali servono a orientarsi, ma i numeri si calcolano sui tuoi documenti.
                    Mandaci bilanci e commesse aperte: entro 2 giorni lavorativi ti diciamo cosa cambia nel tuo caso.
                  </p>
                  <Button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-brand hover:bg-brand-dark text-ink font-semibold"
                  >
                    Richiedi l'analisi dei numeri <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Correlate */}
                {related.length > 0 && (
                  <div className="mt-12">
                    <h2 className="text-xl font-bold text-ink mb-4">Altre domande frequenti</h2>
                    <ul className="space-y-3">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link
                            to={`/domande-frequenti/${r.slug}`}
                            className="group flex items-center justify-between gap-3 bg-muted/40 hover:bg-white border border-border hover:border-brand rounded-xl px-5 py-4 transition-all"
                          >
                            <span className="font-semibold text-ink group-hover:text-brand-dark leading-snug">{r.question}</span>
                            <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-brand-dark shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-xs text-foreground/50 mt-10 leading-relaxed">
                  Questo contenuto ha finalità informative e non sostituisce una consulenza fiscale sul caso
                  concreto. Aggiornato ad agosto 2026 sulla base della normativa e della prassi vigenti.
                </p>
              </div>
            </div>
          </section>
        </main>

        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <EFStickyCTA onOpenContact={() => setIsContactOpen(true)} />
      </div>
    </>
  );
};

export default DomandaSingola;
