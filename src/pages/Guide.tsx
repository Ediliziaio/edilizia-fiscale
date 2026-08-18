import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFHeroBackdrop from "@/components/EFHeroBackdrop";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import EFStickyCTA from "@/components/EFStickyCTA";
import EFFinalCTA from "@/components/EFFinalCTA";
import Reveal from "@/components/Reveal";
import { BookOpen, ArrowRight, Clock, Search, X, Star, HelpCircle } from "lucide-react";
import { articlesMeta, isPillar, type ArticleMeta, type Category } from "@/data/articles";
import { SITE_URL } from "@/data/site";
import EFImageSlot from "@/components/EFImageSlot";
import ArticleCover from "@/components/ArticleCover";

type FilterKey = "Tutte" | Category;

const FILTERS: { key: FilterKey; label: string; short: string }[] = [
  { key: "Tutte", label: "Tutte le guide", short: "Tutte" },
  { key: "Impresa", label: "Fiscalità dell'impresa", short: "Impresa" },
  { key: "Controllo", label: "Numeri e controllo di gestione", short: "Controllo" },
  { key: "Fisco", label: "Verifiche e contenzioso", short: "Fisco" },
  { key: "Patrimonio", label: "Holding e patrimonio", short: "Patrimonio" },
];

/** Accento cromatico per silo: il lettore capisce a colpo d'occhio se è roba sua. */
const CAT_STYLE: Record<Category, { bar: string; badge: string }> = {
  Impresa: { bar: "from-ink to-ink-light", badge: "bg-ink/10 text-ink" },
  Controllo: { bar: "from-ink to-trust", badge: "bg-ink/[0.07] text-trust-dark" },
  Fisco: { bar: "from-trust-dark to-trust-light", badge: "bg-trust/15 text-trust-dark" },
  Patrimonio: { bar: "from-brand-dark to-brand", badge: "bg-brand/20 text-brand-dark" },
};

/** minuscole + accenti rimossi: "perizià" e "perizia" devono trovarsi a vicenda. */
const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const matches = (a: ArticleMeta, q: string) => {
  const hay = norm(`${a.title} ${a.excerpt} ${a.intro} ${(a.keywords ?? []).join(" ")}`);
  return norm(q)
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => hay.includes(term));
};

const GuideCard = ({ a, featured = false }: { a: ArticleMeta; featured?: boolean }) => {
  const style = CAT_STYLE[a.category];
  return (
    <Link
      to={`/guide/${a.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-brand hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      <ArticleCover article={a} className={featured ? "aspect-[21/9]" : "aspect-[16/9]"} />
      <div className={`h-1.5 bg-gradient-to-r ${style.bar}`} />
      <div className={`flex-1 flex flex-col ${featured ? "p-7" : "p-6"}`}>
        <div className="flex items-center gap-2.5 mb-3 flex-wrap">
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${style.badge}`}>
            {a.category}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand text-ink text-[10px] font-bold uppercase tracking-wider">
              <Star className="w-3 h-3 fill-current" /> Guida pilastro
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-foreground/50">
            <Clock className="w-3.5 h-3.5" /> {a.readTime}
          </span>
        </div>

        <h3 className={`font-bold text-ink mb-2 leading-snug group-hover:text-brand-dark ${featured ? "text-xl" : "text-lg"}`}>
          {a.title}
        </h3>
        <p className={`text-foreground/70 leading-relaxed mb-4 flex-1 ${featured ? "text-[15px] line-clamp-4" : "text-sm line-clamp-3"}`}>
          {featured ? a.intro : a.excerpt}
        </p>

        <span className="text-sm font-semibold text-ink group-hover:text-brand-dark flex items-center gap-1.5 mt-auto group-hover:gap-2.5 transition-all">
          Leggi la guida <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

const Guide = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");

  // Il filtro vive nell'URL (?c=Imprese): condivisibile, e il tasto Indietro funziona.
  const raw = params.get("c");
  const filter: FilterKey = FILTERS.some((f) => f.key === raw) ? (raw as FilterKey) : "Tutte";

  const setFilter = (key: FilterKey) => {
    const next = new URLSearchParams(params);
    if (key === "Tutte") next.delete("c");
    else next.set("c", key);
    setParams(next, { replace: true });
  };

  const counts = useMemo(() => {
    const map: Record<string, number> = { Tutte: articlesMeta.length };
    for (const a of articlesMeta) map[a.category] = (map[a.category] ?? 0) + 1;
    return map;
  }, []);

  const byCategory = useMemo(
    () => (filter === "Tutte" ? articlesMeta : articlesMeta.filter((a) => a.category === filter)),
    [filter],
  );

  const results = useMemo(
    () => (query.trim() ? byCategory.filter((a) => matches(a, query)) : byCategory),
    [byCategory, query],
  );

  // I pilastri si mostrano in evidenza solo nella vista completa e senza ricerca attiva.
  const searching = query.trim().length > 0;
  const showPillars = filter === "Tutte" && !searching;
  const pillars = useMemo(() => articlesMeta.filter((a) => isPillar(a.slug)), []);
  const rest = showPillars ? results.filter((a) => !isPillar(a.slug)) : results;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Guide", "item": `${SITE_URL}/guide` },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/guide`,
    "name": "Guide di fiscalità e gestione per l'edilizia",
    "description":
      "Guide operative su IVA e reverse charge, lavori in corso, margine di commessa, verifiche fiscali, holding e protezione del patrimonio nel settore costruzioni.",
    "inLanguage": "it-IT",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "publisher": { "@id": `${SITE_URL}/#studio` },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": articlesMeta.length,
      "itemListElement": articlesMeta.map((a, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `${SITE_URL}/guide/${a.slug}`,
        "name": a.title,
      })),
    },
  };

  return (
    <>
      <SEO
        title="Guide di Fiscalità per l'Edilizia: IVA, Margini, Holding"
        description="Guide pratiche su reverse charge, IVA agevolata, lavori in corso, margine di commessa, verifiche fiscali, holding e passaggio generazionale. Con esempi numerici."
        keywords="guide fiscalità edilizia, reverse charge edilizia, iva 10 ristrutturazioni, lavori in corso su ordinazione, margine commessa edilizia, holding impresa edile"
        canonical="https://www.ediliziafiscale.it/guide"
        jsonLd={[breadcrumbSchema, collectionSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-ink text-white overflow-hidden border-b border-white/10">
            <EFHeroBackdrop />
            <div className="container mx-auto px-4 py-12 lg:py-16 relative">
              <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 items-center">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                    <BookOpen className="w-4 h-4 text-brand" />
                    Guide
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
                    Le guide di <span className="text-brand">fiscalità per l'edilizia</span>
                  </h1>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    Ogni guida risponde a una domanda precisa: quale regola si applica, come si calcola, quale
                    errore costa caro. Con i riferimenti normativi e un esempio numerico, sempre.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
                    <span><strong className="text-brand">{articlesMeta.length}</strong> guide pubblicate</span>
                    <span><strong className="text-brand">{pillars.length}</strong> guide pilastro</span>
                    <span>Aggiornate ad <strong className="text-white/80">agosto 2026</strong></span>
                  </div>
                </div>
                <EFImageSlot id="guide-hero" tone="dark" className="hidden lg:flex rounded-2xl aspect-[4/3]" />
              </div>
            </div>
          </section>

          {/* Ricerca + filtri */}
          {/* Sticky solo da lg in su: su mobile la barra occuperebbe mezzo schermo. */}
          <section className="lg:sticky lg:top-20 z-30 bg-white/95 backdrop-blur border-b border-border py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                <div className="relative lg:w-80 shrink-0">
                  <label htmlFor="guide-search" className="sr-only">Cerca nelle guide</label>
                  <Search className="w-4 h-4 text-foreground/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="guide-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cerca: reverse charge, holding, commessa…"
                    className="w-full h-11 pl-10 pr-9 rounded-full border border-border bg-muted/40 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand focus:bg-white transition-colors"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      aria-label="Cancella la ricerca"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-ink"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {FILTERS.map((f) => (
                    <button
                      key={f.key}
                      onClick={() => setFilter(f.key)}
                      aria-pressed={filter === f.key}
                      className={`px-4 h-11 lg:h-10 rounded-full text-sm font-semibold border transition-colors ${
                        filter === f.key
                          ? "bg-ink text-white border-ink"
                          : "bg-white text-foreground/70 border-border hover:border-ink hover:text-ink"
                      }`}
                    >
                      <span className="lg:hidden">{f.short}</span>
                      <span className="hidden lg:inline">{f.label}</span>
                      <span className={`ml-1.5 tabular-nums ${filter === f.key ? "text-white/60" : "text-foreground/40"}`}>
                        {counts[f.key] ?? 0}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pilastri */}
          {showPillars && (
            <section className="py-12 lg:py-16 bg-muted/40">
              <div className="container mx-auto px-4">
                <Reveal>
                  <div className="mb-8 max-w-2xl">
                    <p className="text-brand-dark uppercase tracking-widest text-sm font-semibold mb-3">Da dove iniziare</p>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink leading-tight">
                      Le quattro guide che coprono i casi più frequenti
                    </h2>
                    <p className="text-foreground/70 mt-3 leading-relaxed">
                      Se non sai da dove partire, parti da qui: sono le guide più complete, e da ciascuna si arriva
                      agli approfondimenti del suo cluster.
                    </p>
                  </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {pillars.map((a, i) => (
                    <Reveal key={a.slug} delay={(i % 2) * 80}>
                      <GuideCard a={a} featured />
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Griglia guide */}
          <section className={`py-12 lg:py-16 ${showPillars ? "bg-white" : "bg-muted/40"}`}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink leading-tight">
                  {searching
                    ? "Risultati della ricerca"
                    : showPillars
                      ? "Tutte le altre guide"
                      : FILTERS.find((f) => f.key === filter)?.label}
                </h2>
                <p className="text-sm text-foreground/60 tabular-nums">
                  {rest.length} {rest.length === 1 ? "guida" : "guide"}
                  {searching && ` per "${query.trim()}"`}
                </p>
              </div>

              {rest.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((a, i) =>
                    // Anima solo la prima riga: sotto, il contenuto è già lì mentre scorri.
                    i < 3 ? (
                      <Reveal key={a.slug} delay={i * 60} duration={500}>
                        <GuideCard a={a} />
                      </Reveal>
                    ) : (
                      <GuideCard key={a.slug} a={a} />
                    ),
                  )}
                </div>
              ) : (
                <div className="bg-white border border-border rounded-2xl p-10 text-center">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-foreground/40" />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">Nessuna guida per questa ricerca</h3>
                  <p className="text-foreground/70 max-w-md mx-auto mb-5">
                    Prova con una parola più generica — "IVA", "commessa", "holding" — oppure scrivici
                    direttamente: se la guida non c'è, la risposta esiste comunque.
                  </p>
                  <button
                    onClick={() => {
                      setQuery("");
                      setFilter("Tutte");
                    }}
                    className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark"
                  >
                    Azzera i filtri <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Ponte verso le domande frequenti */}
              <Reveal>
                <Link
                  to="/domande-frequenti"
                  className="group mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-between bg-ink text-white rounded-2xl p-7 hover:bg-ink-light transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand/15 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Cerchi una risposta secca, non una guida?</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Nelle domande frequenti trovi i termini e le risposte brevi, una pagina per domanda.
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-brand font-semibold shrink-0 group-hover:gap-3 transition-all">
                    Vai alle domande <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            </div>
          </section>

          <EFFinalCTA onOpenContact={() => setIsContactOpen(true)} />
        </main>

        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <EFStickyCTA onOpenContact={() => setIsContactOpen(true)} />
      </div>
    </>
  );
};

export default Guide;
