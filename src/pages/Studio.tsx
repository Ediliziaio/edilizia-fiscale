import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFHeroBackdrop from "@/components/EFHeroBackdrop";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import EFStickyCTA from "@/components/EFStickyCTA";
import EFProcessFlow from "@/components/EFProcessFlow";
import EFFinalCTA from "@/components/EFFinalCTA";
import Reveal from "@/components/Reveal";
import { Calculator, ShieldCheck, HardHat, ArrowRight, Landmark } from "lucide-react";
import { SITE_URL } from "@/data/site";
import EFImageSlot from "@/components/EFImageSlot";

const Studio = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Lo studio", "item": `${SITE_URL}/studio` },
    ],
  };

  return (
    <>
      <SEO
        title="Lo Studio | Edilizia Fiscale — Commercialisti per l'Edilizia"
        description="Edilizia Fiscale è uno studio verticale sul settore costruzioni: fiscalità, controllo di gestione, holding e patrimonio. Metodo, valori e regole sui compensi."
        canonical="https://www.ediliziafiscale.it/studio"
        jsonLd={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
            <EFHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-20 relative">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                  <Calculator className="w-4 h-4 text-gold" />
                  Lo studio
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Uno studio costruito <span className="text-gold">attorno a un solo settore.</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  La fiscalità dell'edilizia non è una specializzazione di facciata: è un intreccio di IVA, contratti
                  d'appalto, principi contabili sulle commesse, costo del lavoro edile e agevolazioni che cambiano
                  ogni anno. Presidiarla davvero richiede di non fare altro. È la scelta che abbiamo fatto.
                </p>
              </div>
              <EFImageSlot id="studio-team" tone="dark" className="hidden lg:flex rounded-2xl aspect-[4/3]" />
              </div>
            </div>
          </section>

          {/* Chi siamo / cosa facciamo */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                <Reveal>
                  <div className="bg-muted/40 rounded-2xl p-7 border border-border h-full">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                      <HardHat className="w-5 h-5 text-gold" />
                    </div>
                    <h2 className="text-lg font-bold text-navy mb-2">Dentro il cantiere, non sopra</h2>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Leggiamo computi metrici, SAL e listini prima ancora del bilancio. È l'unico modo per dire a
                      un'impresa dove sta perdendo margine: nel conto economico d'esercizio quell'informazione non
                      c'è più, è già stata mediata da dodici mesi di lavorazioni.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="bg-muted/40 rounded-2xl p-7 border border-border h-full">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                      <Landmark className="w-5 h-5 text-gold" />
                    </div>
                    <h2 className="text-lg font-bold text-navy mb-2">Impresa e patrimonio insieme</h2>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Reverse charge, crediti d'imposta e verifiche da un lato; holding, scissione immobiliare e
                      passaggio generazionale dall'altro. Sono lo stesso problema visto a due altezze: chi guarda
                      solo la prima lascia scoperta la seconda.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="bg-muted/40 rounded-2xl p-7 border border-border h-full">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                      <ShieldCheck className="w-5 h-5 text-gold" />
                    </div>
                    <h2 className="text-lg font-bold text-navy mb-2">Informazione conforme</h2>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Niente risparmi promessi, niente percentuali di successo, niente confronti con altri studi:
                      il Codice deontologico della professione non lo consente, e non ne abbiamo bisogno. Descriviamo
                      il metodo, le norme applicabili e gli effetti attesi.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={250}>
                <div className="max-w-5xl mx-auto mt-8 bg-gold/10 border border-gold/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                  <div>
                    <h3 className="font-bold text-navy mb-1">I professionisti dello studio</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Le schede dei professionisti — con Ordine di appartenenza, anno di iscrizione all'albo dei
                      dottori commercialisti ed eventuale iscrizione al registro dei revisori legali — sono in
                      preparazione e verranno pubblicate in questa pagina. [DA CONFERMARE]
                    </p>
                  </div>
                  <Link to="/studio/come-lavoriamo" className="shrink-0">
                    <span className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-dark">
                      Come lavoriamo e quanto costa <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          <EFProcessFlow />
          <EFFinalCTA onOpenContact={openContact} />
        </main>

        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <EFStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Studio;
