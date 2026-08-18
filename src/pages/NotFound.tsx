import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO title="Pagina non trovata | Edilizia Fiscale" robots="noindex, follow" />
      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={() => setIsContactOpen(true)} />
        <main className="flex-1 flex items-center justify-center py-24">
          <div className="text-center px-4">
            <p className="text-7xl font-extrabold text-ink/10 mb-4">404</p>
            <h1 className="text-3xl font-bold text-ink mb-3">Questa pagina non esiste.</h1>
            <p className="text-foreground/70 mb-8 max-w-md mx-auto">
              Forse il link è cambiato. Riparti dalla home, oppure cerca la risposta nelle guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button className="bg-ink hover:bg-ink-light text-white font-semibold">Torna alla home</Button>
              </Link>
              <Link to="/guide">
                <Button variant="outline" className="font-semibold">
                  Vai alle guide <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </>
  );
};

export default NotFound;
