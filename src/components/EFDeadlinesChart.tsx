import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";
import Reveal from "@/components/Reveal";
import { ArrowRight, Hourglass } from "lucide-react";

/**
 * Grafico dei termini che decorrono quando arriva un atto del fisco.
 * Dati normativi, non promozionali: è il modo più onesto (e più efficace) di
 * creare urgenza — i giorni sono quelli di legge. Caricato in lazy (recharts).
 */
const deadlines = [
  { label: "Avviso bonario: pagamento ridotto", giorni: 30, norma: "art. 2 D.lgs. 462/1997", scala: 30 },
  { label: "Osservazioni dopo il PVC", giorni: 60, norma: "art. 12 c. 7 L. 212/2000", scala: 60 },
  { label: "Ricorso contro l'avviso di accertamento", giorni: 60, norma: "art. 21 D.lgs. 546/1992", scala: 60 },
  { label: "Cartella: pagare o impugnare", giorni: 60, norma: "art. 25 D.P.R. 602/1973", scala: 60 },
  { label: "Sospensione da istanza di adesione", giorni: 90, norma: "art. 6 D.lgs. 218/1997", scala: 90 },
];

const GOLD = "hsl(45 90% 61%)";
const NAVY_LIGHT = "hsl(217 38% 40%)";

type TooltipPayload = { payload?: { label: string; giorni: number; norma: string } };

const ChartTooltip = ({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) => {
  if (!active || !payload?.length || !payload[0].payload) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-navy text-white rounded-lg px-4 py-3 shadow-soft text-sm">
      <p className="font-bold">{d.label}</p>
      <p className="text-gold font-semibold">{d.giorni} giorni · {d.norma}</p>
    </div>
  );
};

const EFDeadlinesChart = () => (
  <section className="py-16 lg:py-24 bg-muted/40">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
        <Reveal>
          <div>
            <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3 flex items-center gap-2">
              <Hourglass className="w-4 h-4" /> I termini che corrono
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
              Col fisco non si perde per torto. Si perde per termine scaduto.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Quando arriva un atto, i giorni per reagire sono già contati. Sono quelli qui sotto: non li
              decidiamo noi, li scrive la legge. Ed è per questo che la prima cosa che guardiamo, su ogni
              atto che ci mandi, è la data di notifica.
            </p>
            <Link
              to="/domande-frequenti"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-dark"
            >
              Verifica il tuo termine nelle domande frequenti <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150} direction="right">
          <div className="bg-white rounded-2xl border border-border shadow-card p-5 lg:p-7">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={deadlines} layout="vertical" margin={{ left: 8, right: 48, top: 8, bottom: 8 }}>
                <CartesianGrid horizontal={false} stroke="hsl(214 32% 91%)" />
                <XAxis type="number" domain={[0, 110]} hide />
                <YAxis
                  type="category"
                  dataKey="label"
                  width={210}
                  tick={{ fill: "hsl(220 20% 15% / 0.75)", fontSize: 12.5 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<ChartTooltip />} cursor={{ fill: "hsl(45 90% 61% / 0.08)" }} />
                <Bar dataKey="scala" radius={[0, 6, 6, 0]} barSize={22}>
                  {deadlines.map((d) => (
                    <Cell key={d.label} fill={d.giorni <= 60 ? GOLD : NAVY_LIGHT} />
                  ))}
                  <LabelList
                    dataKey="giorni"
                    position="right"
                    formatter={(v: number) => `${v} gg`}
                    style={{ fill: "hsl(217 38% 27%)", fontWeight: 700, fontSize: 13 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-foreground/50 mt-3 leading-relaxed">
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
