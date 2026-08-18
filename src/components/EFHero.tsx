import { Link } from "react-router-dom";
import { ArrowRight, Building2, Landmark, ShieldCheck, Calculator, FileCheck } from "lucide-react";
import EFHeroBackdrop from "@/components/EFHeroBackdrop";

/**
 * Home a bivio: due porte grandi sopra la piega, "Ho un'impresa edile" /
 * "Ho un patrimonio da proteggere". È la scelta architetturale centrale del
 * sito (doppio intent, due silo separati: l'azienda e la famiglia).
 */

const doors = [
  {
    icon: Building2,
    title: "Ho un'impresa edile",
    subtitle: "Costruzioni, impianti, serramenti, subappalti",
    desc: "Il cantiere ha chiuso in utile o in perdita? Lo scopri a giugno dell'anno dopo, quando il bilancio è già scritto e non puoi più farci niente.",
    href: "/imprese",
    bullets: [
      "Fatturato in crescita e conto corrente sempre in tensione",
      "Reverse charge e aliquote IVA applicati a sentimento",
      "Una verifica fiscale in cantiere, e nessuno che risponda",
    ],
    cta: "Vedi come mettiamo ordine",
  },
  {
    icon: Landmark,
    title: "Ho un patrimonio da proteggere",
    subtitle: "Soci, famiglia, immobili, gruppi societari",
    desc: "L'impresa edile è l'attività che espone di più: fideiussioni, solidarietà negli appalti, garanzie personali. E il capannone è ancora intestato a te.",
    href: "/patrimonio",
    bullets: [
      "Immobili e liquidità dentro la società che apre i cantieri",
      "Nessuna holding sopra: ogni rischio arriva diretto ai soci",
      "Passaggio ai figli rimandato da anni, senza un piano scritto",
    ],
    cta: "Vedi come si separa il rischio",
  },
];

const EFHero = () => {
  return (
    <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
      <EFHeroBackdrop />

      <div className="container mx-auto px-4 py-14 lg:py-20 relative">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/15 backdrop-blur text-gold rounded-full text-sm font-bold mb-6 uppercase tracking-wider border border-gold/30">
            <Calculator className="w-4 h-4 text-gold" />
            Commercialisti e CFO solo per l'edilizia
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.12]">
            Fatturi tanto. <br className="hidden md:block" />Ma quanto ti resta davvero?
            <span className="block text-gold mt-3">Il fisco e i numeri dell'impresa edile.</span>
          </h1>

          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Teniamo la contabilità di chi costruisce e leggiamo il margine commessa per commessa:
            per questo sappiamo dove si perde il denaro in un cantiere, quale IVA si applica a quale
            lavorazione e quando conviene mettere una holding sopra l'operativa.
          </p>
        </div>

        {/* Il bivio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {doors.map((door) => (
            <Link
              key={door.title}
              to={door.href}
              className="group bg-white/5 hover:bg-white backdrop-blur rounded-2xl p-7 lg:p-8 border border-white/15 hover:border-gold text-white hover:text-navy transition-all duration-300 hover:-translate-y-1.5 hover:shadow-gold"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 group-hover:bg-gold/20 flex items-center justify-center">
                  <door.icon className="w-6 h-6 text-gold group-hover:text-gold-dark" />
                </div>
                <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-gold-dark group-hover:translate-x-1 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold mb-1">{door.title}</h2>
              <p className="text-xs uppercase tracking-wider font-semibold text-gold group-hover:text-gold-dark mb-3">{door.subtitle}</p>
              <p className="text-sm text-white/70 group-hover:text-foreground/70 mb-5 leading-relaxed">{door.desc}</p>
              <ul className="space-y-1.5 mb-6">
                {door.bullets.map((b) => (
                  <li key={b} className="text-sm text-white/80 group-hover:text-foreground/80 flex items-start gap-2">
                    <span className="text-gold mt-1 text-xs">●</span>
                    {b}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-gold group-hover:text-gold-dark">
                {door.cta}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70 mt-10">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold" /> Solo imprese e patrimoni del settore costruzioni</span>
          <span className="flex items-center gap-2"><FileCheck className="w-4 h-4 text-gold" /> Prima la lettura dei numeri, poi qualunque proposta</span>
          <span className="flex items-center gap-2"><Calculator className="w-4 h-4 text-gold" /> Operiamo in tutta Italia</span>
        </div>
      </div>
    </section>
  );
};

export default EFHero;
