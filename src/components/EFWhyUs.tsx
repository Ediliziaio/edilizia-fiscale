import Reveal from "@/components/Reveal";
import { HardHat, LineChart, Landmark, MessageSquareText } from "lucide-react";

const points = [
  {
    icon: HardHat,
    title: "Un solo settore",
    desc: "Costruzioni, impianti, serramenti, movimento terra, immobiliare di sviluppo. Non facciamo altro: la profondità su un settore vale più dell'ampiezza su dieci.",
  },
  {
    icon: LineChart,
    title: "Numeri prima del bilancio",
    desc: "Il margine si legge a commessa aperta, non a esercizio chiuso. Reporting mensile, costo orario reale, avanzamento economico: così le decisioni si prendono in tempo.",
  },
  {
    icon: Landmark,
    title: "Fisco e patrimonio insieme",
    desc: "Reverse charge e crediti d'imposta da un lato, holding e protezione patrimoniale dall'altro. Sono lo stesso problema visto a due altezze diverse.",
  },
  {
    icon: MessageSquareText,
    title: "Linguaggio chiaro",
    desc: "Le guide di questo sito dicono le stesse cose che diciamo in riunione: norme, tabelle, esempi numerici e l'errore tipico da evitare. Senza gergo inutile.",
  },
];

const EFWhyUs = () => (
  <section className="py-16 lg:py-24 bg-navy text-white">
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="max-w-3xl mb-12">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Perché Edilizia Fiscale</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
            Uno studio verticale, non il reparto edilizia di uno studio generalista.
          </h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full">
              <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default EFWhyUs;
