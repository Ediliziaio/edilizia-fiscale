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
import { AreaCard } from "@/components/EFServicesCards";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import { areeImprese } from "@/data/aree";
import EFImageSlot from "@/components/EFImageSlot";
import ArticleCover from "@/components/ArticleCover";
import { articlesMeta } from "@/data/articlesMeta";
import { SITE_URL } from "@/data/site";

const SEGMENTI = [
  "Imprese generali di costruzione",
  "Impiantisti, serramentisti e artigiani specializzati",
  "Costruttori-venditori e società di sviluppo",
  "Movimento terra, strutture e prefabbricati",
  "Imprese che lavorano con la pubblica amministrazione",
];

const Imprese = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const guideImprese = articlesMeta.filter(
    (a) => a.category === "Impresa" || a.category === "Controllo" || a.category === "Fisco",
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Consulenza fiscale e controllo di gestione per imprese edili",
    "provider": { "@id": `${SITE_URL}/#studio` },
    "areaServed": { "@type": "Country", "name": "Italia" },
    "audience": { "@type": "BusinessAudience", "audienceType": "Imprese edili, impiantisti, società immobiliari" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aree di assistenza per le imprese edili",
      "itemListElement": areeImprese.map((a) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": a.title },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Per l'impresa", "item": `${SITE_URL}/imprese` },
    ],
  };

  return (
    <>
      <SEO
        title="Commercialista per Imprese Edili: Fisco e Margini"
        description="Consulenza fiscale e controllo di gestione per imprese edili: IVA e reverse charge, lavori in corso, margine di commessa, CFO esterno, verifiche e accertamenti."
        keywords="commercialista imprese edili, commercialista edilizia, fiscalità impresa edile, controllo di gestione edilizia, reverse charge edilizia, margine commessa, cfo esterno edilizia"
        canonical="https://www.ediliziafiscale.it/imprese"
        jsonLd={[serviceSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-ink text-white overflow-hidden border-b border-white/10">
            <EFHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-20 relative">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                  <Building2 className="w-4 h-4 text-brand" />
                  Area impresa
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Il commercialista dell'impresa edile, <span className="text-brand">dal preventivo al bilancio.</span>
                </h1>
                <p className="text-lg text-white/80 mb-4 leading-relaxed">
                  Il problema non è "la contabilità". Il problema è che hai undici cantieri aperti e non sai quale
                  guadagna, che il reverse charge è stato applicato a occhio per due anni, o che è arrivato un
                  avviso da 380.000 euro sui crediti d'imposta. Le dieci aree qui sotto partono da lì: ordinate
                  per urgenza, non per eleganza contabile.
                </p>
                <p className="text-sm text-white/60 mb-8">
                  Lavoriamo con: {SEGMENTI.join(" · ").toLowerCase()}.
                </p>
                <Button
                  onClick={openContact}
                  size="lg"
                  className="bg-brand hover:bg-brand-dark text-ink font-semibold text-base h-12 px-6"
                >
                  Mandaci i tuoi numeri <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <EFImageSlot id="imprese-hero" tone="dark" className="hidden lg:flex rounded-2xl aspect-[4/3]" />
              </div>
            </div>
          </section>

          {/* Le 10 aree */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8 leading-tight">
                  Le dieci aree di assistenza all'impresa edile
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {areeImprese.map((a, i) => (
                  <Reveal key={a.title} delay={(i % 3) * 80}>
                    <AreaCard area={a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Guide per le imprese */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
                    Le guide per chi fa impresa in cantiere
                  </h2>
                  <Link to="/guide" className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark shrink-0">
                    Tutte le guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guideImprese.slice(0, 6).map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 80}>
                    <Link
                      to={`/guide/${a.slug}`}
                      className="group block bg-muted/40 hover:bg-white rounded-xl overflow-hidden border border-border hover:border-brand hover:shadow-card transition-all h-full"
                    >
                      <ArticleCover article={a} className="aspect-[16/9]" />
                      <div className="p-6">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-brand-dark">{a.category}</span>
                      <h3 className="font-bold text-ink mt-2 mb-2 leading-snug group-hover:text-brand-dark">{a.title}</h3>
                      <p className="text-sm text-foreground/65 leading-relaxed line-clamp-3">{a.excerpt}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-brand-dark">
                        Leggi la guida <ArrowRight className="w-4 h-4" />
                      </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <EFFinalCTA onOpenContact={openContact} />
        </main>

        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <EFStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Imprese;
