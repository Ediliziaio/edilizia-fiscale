import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { ArrowRight, Hourglass } from "lucide-react";

/**
 * Grafico dei termini che decorrono quando arriva un atto del fisco.
 * Dati normativi, non promozionali: è il modo più onesto (e più efficace) di
 * creare urgenza — i giorni sono quelli di legge.
 *
 * Le barre sono CSS, non una libreria di grafici. Prima erano recharts: 366 kB
 * (101 kB gzip) sulla home per cinque barre, e per giunta invisibili nell'HTML
 * statico, perché ResponsiveContainer ha bisogno di misurare il contenitore e
 * lato server non renderizza niente. Così invece i giorni e la norma stanno nel
 * sorgente prerenderizzato: li leggono i crawler e i motori di risposta.
 */
const deadlines = [
  { label: "Avviso bonario: pagamento ridotto", giorni: 30, norma: "art. 2 D.lgs. 462/1997" },
  { label: "Osservazioni dopo il PVC", giorni: 60, norma: "art. 12 c. 7 L. 212/2000" },
  { label: "Ricorso contro l'avviso di accertamento", giorni: 60, norma: "art. 21 D.lgs. 546/1992" },
  { label: "Cartella: pagare o impugnare", giorni: 60, norma: "art. 25 D.P.R. 602/1973" },
  { label: "Sospensione da istanza di adesione", giorni: 90, norma: "art. 6 D.lgs. 218/1997" },
];

/** Scala fissa: 110 giorni di fondo scala, così il 90 non arriva a filo bordo. */
const SCALA = 110;

const EFDeadlinesChart = () => (
  <section className="py-16 lg:py-24 bg-muted/40">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
        <Reveal>
          <div>
            <p className="text-brand-dark uppercase tracking-widest text-sm font-semibold mb-3 flex items-center gap-2">
              <Hourglass className="w-4 h-4" /> I termini che corrono
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-5 leading-tight">
              Col fisco non si perde per torto. Si perde per termine scaduto.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Quando arriva un atto, i giorni per reagire sono già contati. Sono quelli qui sotto: non li
              decidiamo noi, li scrive la legge. Ed è per questo che la prima cosa che guardiamo, su ogni
              atto che ci mandi, è la data di notifica.
            </p>
            <Link
              to="/domande-frequenti"
              className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark"
            >
              Verifica il tuo termine nelle domande frequenti <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150} direction="right">
          <div className="bg-white rounded-2xl border border-border shadow-card p-5 lg:p-7">
            <ul className="space-y-4">
              {deadlines.map((d) => (
                <li key={d.label} className="grid sm:grid-cols-[minmax(0,13rem)_1fr] gap-1.5 sm:gap-4 sm:items-center">
                  <div className="min-w-0">
                    <p className="text-sm text-foreground/80 leading-snug">{d.label}</p>
                    <p className="text-[11px] text-foreground/45 mt-0.5">{d.norma}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-[22px] bg-muted rounded-r-md overflow-hidden">
                      <div
                        className={`h-full rounded-r-md ${d.giorni <= 60 ? "bg-brand" : "bg-ink-light"}`}
                        style={{ width: `${(d.giorni / SCALA) * 100}%` }}
                      />
                    </div>
                    <span className="text-[13px] font-bold text-ink tabular-nums shrink-0 w-[3.2rem] text-right">
                      {d.giorni} gg
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-foreground/50 mt-5 leading-relaxed">
              I termini decorrono da eventi diversi (notifica, consegna del processo verbale, presentazione
              dell'istanza) e possono essere sospesi nel periodo feriale: la decorrenza esatta va verificata
              sull'atto ricevuto.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default EFDeadlinesChart;
