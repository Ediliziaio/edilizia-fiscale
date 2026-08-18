import { useState, lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFHero from "@/components/EFHero";
import EFTrustStrip from "@/components/EFTrustStrip";
import EFStats from "@/components/EFStats";
import EFProblemSolution from "@/components/EFProblemSolution";
// Lazy: recharts (~500 kB) resta fuori dal bundle iniziale della home.
const EFDeadlinesChart = lazy(() => import("@/components/EFDeadlinesChart"));
import EFServicesCards from "@/components/EFServicesCards";
import EFGuideShowcase from "@/components/EFGuideShowcase";
import EFVerticali from "@/components/EFVerticali";
import EFProcessFlow from "@/components/EFProcessFlow";
import EFWhyUs from "@/components/EFWhyUs";
import EFFAQ from "@/components/EFFAQ";
import EFFinalCTA from "@/components/EFFinalCTA";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import EFStickyCTA from "@/components/EFStickyCTA";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <SEO
        title="Edilizia Fiscale — Commercialisti e CFO per l'Edilizia"
        description="Studio di commercialisti specializzato nel settore costruzioni: fiscalità e IVA dei lavori, controllo di gestione per commessa, holding e protezione del patrimonio."
        keywords="commercialista edilizia, commercialista imprese edili, fiscalità impresa edile, controllo di gestione edilizia, cfo esterno edilizia, holding impresa edile, protezione patrimoniale imprenditore edile, reverse charge edilizia"
        canonical="https://www.ediliziafiscale.it/"
        ogTitle="Edilizia Fiscale — Fatturi tanto. Ma quanto ti resta?"
        ogDescription="Fisco, margini e patrimonio per chi costruisce: IVA e reverse charge, controllo di gestione per commessa, holding e passaggio generazionale."
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={openContact} />

        <main className="flex-1">
          <EFHero />
          <EFTrustStrip />
          <EFStats />
          <EFProblemSolution />
          <EFServicesCards />
          <Suspense fallback={<div className="min-h-[400px]" aria-hidden="true" />}>
            <EFDeadlinesChart />
          </Suspense>
          <EFVerticali />
          <EFGuideShowcase />
          <EFProcessFlow />
          <EFWhyUs />
          <EFFAQ />
          <EFFinalCTA onOpenContact={openContact} />
        </main>

        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={closeContact} />
        <EFStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Index;
