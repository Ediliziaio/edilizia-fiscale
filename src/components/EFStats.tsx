import { useEffect, useRef, useState } from "react";

/**
 * Striscia numeri con count-up all'ingresso in viewport.
 * Solo dati fattuali del sito e del metodo — niente risparmi promessi né
 * percentuali di successo (Codice deontologico dei dottori commercialisti).
 */
const stats = [
  { value: 2, suffix: "", label: "fronti presidiati: l'impresa e il patrimonio" },
  { value: 20, suffix: "", label: "aree di assistenza tra fisco, numeri e patrimonio" },
  { value: 30, suffix: "", label: "guide con norme, tabelle ed esempi numerici" },
  { value: 12, suffix: "", label: "report mensili l'anno: il margine non aspetta il bilancio" },
];

const useCountUp = (target: number, run: boolean, durationMs = 1200) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / durationMs, 1);
      // ease-out cubico
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, durationMs]);
  return value;
};

const StatItem = ({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) => {
  const n = useCountUp(value, run);
  return (
    <div className="text-center px-4">
      <div className="text-4xl lg:text-5xl font-extrabold text-brand tabular-nums">
        {n}
        {suffix}
      </div>
      <p className="text-sm text-white/70 mt-2 leading-snug max-w-[220px] mx-auto">{label}</p>
    </div>
  );
};

const EFStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-ink border-b border-white/10 py-10 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-white/10">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EFStats;
