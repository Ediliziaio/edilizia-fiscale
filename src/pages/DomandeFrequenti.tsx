import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFHeroBackdrop from "@/components/EFHeroBackdrop";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import EFStickyCTA from "@/components/EFStickyCTA";
import EFFinalCTA from "@/components/EFFinalCTA";
import Reveal from "@/components/Reveal";
import { HelpCircle, ArrowRight } from "lucide-react";
import { faqEntries } from "@/data/faq";
import { SITE_URL } from "@/data/site";

const DomandeFrequenti = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [filter, setFilter] = useState<"tutte" | "imprese" | "patrimonio">("tutte");

  const filtered = filter === "tutte" ? faqEntries : faqEntries.filter((f) => f.silo === filter);

  // Tutte le domande e risposte sono VISIBILI in pagina: il markup FAQPage
  // corrisponde esattamente al contenuto renderizzato.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqEntries.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Domande frequenti", "item": `${SITE_URL}/domande-frequenti` },
    ],
  };

  return (
    <>
      <SEO
        title="Domande Frequenti su Fisco e Numeri in Edilizia"
        description="Risposte brevi e verificabili: quando si applica il reverse charge, come si valutano i lavori in corso, quando conviene una holding, cosa fare dopo una verifica."
        keywords="domande frequenti fiscalità edilizia, quando si applica il reverse charge, iva 10 ristrutturazione, lavori in corso su ordinazione, quando conviene una holding"
        canonical="https://www.ediliziafiscale.it/domande-frequenti"
        jsonLd={[faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1">
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
            <EFHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-16 relative">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                  <HelpCircle className="w-4 h-4 text-gold" />
                  Domande frequenti
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
                  Risposte brevi, <span className="text-gold">norme precise.</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Ogni domanda ha una risposta diretta e una pagina di approfondimento con i riferimenti normativi.
                  Sono risposte generali: il tuo caso va sempre verificato sui documenti e sui numeri.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 lg:py-16 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {([
                    ["tutte", "Tutte"],
                    ["imprese", "Per l'impresa"],
                    ["patrimonio", "Per il patrimonio"],
                  ] as const).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setFilter(key)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                        filter === key
                          ? "bg-navy text-white border-navy"
                          : "bg-white text-foreground/70 border-border hover:border-navy hover:text-navy"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  {filtered.map((f, i) => (
                    <Reveal key={f.slug} delay={(i % 4) * 50}>
                      <div className="bg-white rounded-xl border border-border p-5 lg:p-6">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-gold-dark">
                          {f.silo === "imprese" ? "Impresa" : "Patrimonio"}
                        </span>
                        <h2 className="font-bold text-navy text-lg mt-1.5 mb-2 leading-snug">{f.question}</h2>
                        <p className="text-foreground/75 leading-relaxed mb-3">{f.answer}</p>
                        <Link
                          to={`/domande-frequenti/${f.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:gap-2.5 transition-all"
                        >
                          Leggi l'approfondimento <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <EFFinalCTA onOpenContact={() => setIsContactOpen(true)} />
        </main>

        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <EFStickyCTA onOpenContact={() => setIsContactOpen(true)} />
      </div>
    </>
  );
};

export default DomandeFrequenti;
