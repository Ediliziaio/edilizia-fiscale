import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { areeImprese, areePatrimonio, type Area } from "@/data/aree";

/** Anteprima dei due silo in home: le prime aree di ciascuno + link agli hub. */

const AreaCard = ({ area }: { area: Area }) => {
  const inner = (
    <div className="group bg-white rounded-2xl p-6 border border-border shadow-card hover:border-brand hover:shadow-soft transition-all h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-brand/15 flex items-center justify-center">
          <area.icon className="w-5 h-5 text-ink" />
        </div>
        {area.badge && (
          <span className="text-[10px] uppercase tracking-wider font-bold text-brand-dark bg-brand/10 rounded-full px-2.5 py-1">
            {area.badge}
          </span>
        )}
      </div>
      <h3 className="text-base font-bold text-ink mb-2 leading-snug">{area.title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed flex-1">{area.desc}</p>
      {area.guida && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark group-hover:gap-2.5 transition-all">
          Leggi la guida <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </div>
  );
  return area.guida ? <Link to={`/guide/${area.guida}`}>{inner}</Link> : inner;
};

const EFServicesCards = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4">
      {/* Imprese */}
      <div className="mb-16">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-brand-dark uppercase tracking-widest text-sm font-semibold mb-3">Per l'impresa</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
                Il cantiere l'hai chiuso. <br className="hidden md:block" />Ora vediamo quanto ti è rimasto.
              </h2>
            </div>
            <Link
              to="/imprese"
              className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark shrink-0"
            >
              Tutte le aree impresa <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areeImprese.slice(0, 3).map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <AreaCard area={a} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Patrimonio */}
      <div>
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-brand-dark uppercase tracking-widest text-sm font-semibold mb-3">Per il patrimonio</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
                L'impresa rischia ogni giorno. <br className="hidden md:block" />La tua famiglia non dovrebbe.
              </h2>
            </div>
            <Link
              to="/patrimonio"
              className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark shrink-0"
            >
              Tutte le aree patrimonio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areePatrimonio.slice(0, 3).map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <AreaCard area={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EFServicesCards;
export { AreaCard };
