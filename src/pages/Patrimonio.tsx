import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFHeroBackdrop from "@/components/EFHeroBackdrop";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import EFStickyCTA from "@/components/EFStickyCTA";
import EFFinalCTA from "@/components/EFFinalCTA";
import EFVerticali from "@/components/EFVerticali";
import Reveal from "@/components/Reveal";
import { AreaCard } from "@/components/EFServicesCards";
import { Button } from "@/components/ui/button";
import { ArrowRight, Landmark } from "lucide-react";
import { areePatrimonio } from "@/data/aree";
import EFImageSlot from "@/components/EFImageSlot";
import ArticleCover from "@/components/ArticleCover";
import { articlesMeta } from "@/data/articlesMeta";
import { SITE_URL } from "@/data/site";

const Patrimonio = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const guidePatrimonio = articlesMeta.filter((a) => a.category === "Patrimonio");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pianificazione patrimoniale e societaria per imprenditori edili",
    "provider": { "@id": `${SITE_URL}/#studio` },
    "areaServed": { "@type": "Country", "name": "Italia" },
    "audience": { "@type": "Audience", "audienceType": "Imprenditori edili, soci di società di costruzione, famiglie imprenditoriali" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aree di assistenza per il patrimonio",
      "itemListElement": areePatrimonio.map((a) => ({
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
      { "@type": "ListItem", "position": 2, "name": "Per il patrimonio", "item": `${SITE_URL}/patrimonio` },
    ],
  };

  return (
    <>
      <SEO
        title="Holding e Protezione Patrimoniale per Imprenditori Edili"
        description="Holding, scissione immobiliare, protezione del patrimonio e passaggio generazionale per chi ha un'impresa edile: struttura, imposte e presidio dell'abuso del diritto."
        keywords="holding impresa edile, protezione patrimoniale imprenditore edile, scissione immobiliare, passaggio generazionale impresa edile, società immobiliare, dividendi holding pex"
        canonical="https://www.ediliziafiscale.it/patrimonio"
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
                  <Landmark className="w-4 h-4 text-brand" />
                  Area patrimonio
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                  L'impresa costruisce. <span className="text-brand">Il patrimonio va costruito a parte.</span>
                </h1>
                <p className="text-lg text-white/80 mb-4 leading-relaxed">
                  Holding, scissione dell'immobiliare, patto di famiglia, passaggio ai figli: strumenti noti, che
                  però funzionano solo se hanno una ragione economica vera e se si fanno prima. Ogni area qui sotto
                  è collegata a una guida che spiega struttura, imposte e vincoli, con numeri di esempio.
                </p>
                <p className="text-sm text-white/60 mb-8">
                  Una cosa va detta subito: la protezione patrimoniale si costruisce quando l'azienda è in salute.
                  Gli atti fatti quando i creditori sono già alla porta sono attaccabili — con l'azione revocatoria,
                  e in edilizia con la responsabilità solidale negli appalti. Muoversi tardi non protegge: espone.
                </p>
                <Button
                  onClick={openContact}
                  size="lg"
                  className="bg-brand hover:bg-brand-dark text-ink font-semibold text-base h-12 px-6"
                >
                  Parliamo della tua struttura <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <EFImageSlot id="patrimonio-hero" tone="dark" className="hidden lg:flex rounded-2xl aspect-[4/3]" />
              </div>
            </div>
          </section>

          {/* Le 10 aree */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8 leading-tight">
                  Le dieci aree di assistenza al patrimonio
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {areePatrimonio.map((a, i) => (
                  <Reveal key={a.title} delay={(i % 3) * 80}>
                    <AreaCard area={a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <EFVerticali />

          {/* Guide sul patrimonio */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
                    Le guide su holding, immobili e famiglia
                  </h2>
                  <Link to="/guide" className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark shrink-0">
                    Tutte le guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guidePatrimonio.slice(0, 6).map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 80}>
                    <Link
                      to={`/guide/${a.slug}`}
                      className="group block bg-white hover:bg-white rounded-xl overflow-hidden border border-border hover:border-brand hover:shadow-card transition-all h-full"
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

export default Patrimonio;
