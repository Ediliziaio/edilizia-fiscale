import Reveal from "@/components/Reveal";
import EFImageSlot from "@/components/EFImageSlot";
import { Split, ShieldCheck, HardHat } from "lucide-react";

/**
 * Il posizionamento del brand in chiaro: il commercialista generalista tiene
 * la contabilità, chi conosce il cantiere legge il margine. Più le tre regole
 * operative dello studio.
 */
const rules = [
  {
    icon: Split,
    title: "Due percorsi separati",
    desc: "L'impresa e il patrimonio hanno domande diverse e interlocutori diversi. Aree, guide e strumenti sono distinti: chi entra da un lato non riceve le risposte dell'altro, se non qui in home.",
  },
  {
    icon: ShieldCheck,
    title: "Solo pianificazione lecita",
    desc: "Holding, scissioni e riorganizzazioni si fanno con valide ragioni economiche e documentate. Niente strutture di comodo: reggono finché nessuno le guarda, e poi costano il triplo.",
  },
  {
    icon: HardHat,
    title: "Parliamo la lingua del cantiere",
    desc: "Computi metrici, SAL, listini, subappalti, Cassa Edile. I numeri li leggiamo dove nascono — in commessa — non solo a bilancio chiuso.",
  },
];

const EFProblemSolution = () => (
  <section className="py-16 lg:py-24 bg-muted/40">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center max-w-6xl mx-auto mb-14">
        <Reveal>
          <div>
            <p className="text-brand-dark uppercase tracking-widest text-sm font-semibold mb-3">Perché un verticale</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-6 leading-tight">
              Il tuo commercialista registra le fatture. Il problema è che il margine si decide prima.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              In edilizia il risultato non si vede nel conto economico: si vede nella singola commessa, quando la
              variante non è stata contabilizzata, quando il costo orario usato nel preventivo era del 2019, quando
              il reverse charge è stato applicato a una lavorazione che non lo prevedeva. Chi tiene i conti di
              chi costruisce sa dove guardare — e sa che a fine anno è già troppo tardi per intervenire.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150} direction="right">
          <EFImageSlot id="home-due-fronti" className="rounded-2xl aspect-[4/3] shadow-card" />
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {rules.map((r, i) => (
          <Reveal key={r.title} delay={i * 120}>
            <div className="bg-white rounded-2xl p-7 border border-border shadow-card h-full">
              <div className="w-11 h-11 rounded-xl bg-ink flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-brand" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{r.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{r.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default EFProblemSolution;
