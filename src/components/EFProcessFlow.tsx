import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Lettura dei numeri veri",
    desc: "Bilanci degli ultimi tre esercizi, situazione contabile, elenco commesse aperte, scadenzario e centrale rischi. Prima di proporre qualcosa vogliamo sapere da dove parti davvero.",
  },
  {
    n: "02",
    title: "Diagnosi fiscale e di margine",
    desc: "Dove si perde denaro commessa per commessa, quali rischi fiscali sono aperti, quali adempimenti sono trattati male. Ti restituiamo un documento scritto, non un'impressione.",
  },
  {
    n: "03",
    title: "Piano con impatti quantificati",
    desc: "Interventi ordinati per impatto e per rischio: cosa si fa subito, cosa richiede una riorganizzazione societaria, cosa costa e in quanto tempo rientra. Compenso concordato prima.",
  },
  {
    n: "04",
    title: "Esecuzione e reporting mensile",
    desc: "Adempimenti, atti societari e contenzioso li gestiamo noi. Ogni mese un report con margine per commessa, cassa prospettica e scostamenti: i numeri non aspettano il bilancio.",
  },
];

const EFProcessFlow = () => (
  <section className="py-16 lg:py-24 bg-muted/40">
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="max-w-3xl mb-12">
          <p className="text-brand-dark uppercase tracking-widest text-sm font-semibold mb-3">Come lavoriamo</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-5 leading-tight">
            Prima i numeri, poi le proposte. Sempre in quest'ordine.
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Descriviamo il metodo, non promettiamo risparmi: il carico fiscale dipende dalla struttura, dai volumi
            e dalle scelte già fatte negli anni precedenti. Quello su cui possiamo impegnarci è il processo con cui
            ci arriviamo e la trasparenza sugli impatti.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 120}>
            <div className="bg-white rounded-2xl p-7 border border-border shadow-card h-full relative overflow-hidden">
              <span className="absolute -top-3 -right-2 text-7xl font-extrabold text-ink/5 select-none">{s.n}</span>
              <span className="inline-block text-xs font-bold text-brand-dark bg-brand/10 rounded-full px-3 py-1 mb-4">
                Fase {s.n}
              </span>
              <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default EFProcessFlow;
