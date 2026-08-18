import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import handshakeImg from "@/assets/handshake-trust.jpg";
import EFHeroBackdrop from "./EFHeroBackdrop";
import { PHONE_TEL, PHONE_DISPLAY } from "@/data/site";

interface EFFinalCTAProps {
  onOpenContact: () => void;
}

const EFFinalCTA = ({ onOpenContact }: EFFinalCTAProps) => {
  return (
    <section className="relative py-16 lg:py-20 bg-navy text-white overflow-hidden">
      <EFHeroBackdrop />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Iniziamo dai tuoi numeri</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Prima di cambiare commercialista, scopri cosa dicono davvero i tuoi bilanci.
            </h2>
            <p className="text-lg text-white/80 mb-4 leading-relaxed">
              Mandaci gli ultimi due bilanci, la situazione contabile aggiornata e l'elenco delle commesse aperte.
              Entro 5 giorni lavorativi ricevi una lettura scritta con tre risposte:
            </p>
            <ul className="text-white/85 mb-8 space-y-2">
              <li className="flex items-start gap-2.5"><span className="text-gold mt-1.5 text-xs">●</span> dove si sta perdendo margine, commessa per commessa;</li>
              <li className="flex items-start gap-2.5"><span className="text-gold mt-1.5 text-xs">●</span> quali rischi fiscali sono aperti e quali termini stanno per scadere;</li>
              <li className="flex items-start gap-2.5"><span className="text-gold mt-1.5 text-xs">●</span> se una riorganizzazione societaria ha senso — o se, nel tuo caso, non serve.</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                onClick={onOpenContact}
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold text-base h-12 px-7 w-full sm:w-auto animate-glow-pulse"
              >
                Richiedi l'analisi dei numeri
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-navy font-semibold text-base h-12 px-7 w-full"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  {PHONE_DISPLAY}
                </Button>
              </a>
            </div>

            <p className="text-sm text-white/60">
              La lettura descrive la situazione e i percorsi possibili, non promette risparmi d'imposta: gli
              effetti dipendono dai volumi, dalla struttura societaria e dalle scelte già fatte negli anni precedenti.
            </p>
          </div>

          <div className="hidden lg:block">
            <img
              src={handshakeImg}
              alt="Confronto riservato con lo studio su bilanci e commesse"
              loading="lazy"
              decoding="async"
              className="rounded-2xl w-full aspect-[4/3] object-cover shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EFFinalCTA;
