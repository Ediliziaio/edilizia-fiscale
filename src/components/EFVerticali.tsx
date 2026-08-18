import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { verticali } from "@/data/aree";

/** I verticali di settore: il problema come lo cerca davvero chi lo ha in casa. */
const EFVerticali = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="max-w-3xl mb-10">
          <p className="text-brand-dark uppercase tracking-widest text-sm font-semibold mb-3">I temi ricorrenti</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-5 leading-tight">
            Le otto domande che ci arrivano ogni settimana.
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Reverse charge, aliquote agevolate, lavori in corso, ritenute negli appalti, holding, scissione,
            passaggio ai figli: ogni tema ha la sua norma, la sua tabella e il suo errore tipico. Una guida per ciascuno.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {verticali.map((v, i) => (
          <Reveal key={v.guida} delay={(i % 4) * 80}>
            <Link
              to={`/guide/${v.guida}`}
              className="group block bg-muted/40 hover:bg-white rounded-xl p-5 border border-border hover:border-brand hover:shadow-card transition-all h-full"
            >
              <h3 className="font-bold text-ink mb-1.5 flex items-center justify-between gap-2">
                {v.title}
                <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-brand-dark shrink-0" />
              </h3>
              <p className="text-sm text-foreground/65 leading-snug">{v.kw}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default EFVerticali;
