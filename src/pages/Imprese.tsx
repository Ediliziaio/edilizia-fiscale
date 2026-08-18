import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFHeroBackdrop from "@/components/EFHeroBackdrop";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import EFStickyCTA from "@/components/EFStickyCTA";
import EFFinalCTA from "@/components/EFFinalCTA";
import Reveal from "@/components/Reveal";
import { AreaCard } from "@/components/EFServicesCards";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import { areeImprese } from "@/data/aree";
import EFImageSlot from "@/components/EFImageSlot";
import ArticleCover from "@/components/ArticleCover";
import { articlesMeta } from "@/data/articlesMeta";
import { SITE_URL } from "@/data/site";


/**
 * I quattro problemi con cui l'imprenditore edile arriva davvero da noi.
 * Stanno nell'hero, subito sotto l'H1: servono a far dire "questo sono io"
 * prima di qualunque descrizione di servizio. Ognuno linka alla sua guida.
 */
const PROBLEMI: { title: string; desc: string; guida: string }[] = [
  {
    title: "Chiudi in utile e non hai i soldi per le tasse",
    desc: "L'utile è nei cantieri aperti e nei crediti da incassare. Il versamento arriva lo stesso.",
    guida: "flussi-di-cassa-impresa-edile",
  },
  {
    title: "Non sai quale cantiere ti ha fatto guadagnare",
    desc: "Il margine lo vedi a bilancio chiuso. Quei cantieri sono finiti da mesi.",
    guida: "controllo-di-gestione-impresa-edile",
  },
  {
    title: "L'IVA sui lavori la fai come si è sempre fatta",
    desc: "Reverse charge, 4, 10 o 22%, beni significativi. Se sbagli, sbagli su ogni cantiere.",
    guida: "reverse-charge-edilizia",
  },
  {
    title: "Il capannone è nella società che apre i cantieri",
    desc: "Risponde di infortuni, vizi dell'opera e debiti dei subappaltatori. Come tutto il resto che hai.",
    guida: "protezione-patrimoniale-imprenditore-edile",
  },
];

/** Il confronto è sul metodo, non sulla qualità: descrive cosa cambia, non chi è più bravo. */
const CONFRONTO: { voce: string; generalista: string; noi: string }[] = [
  { voce: "Quando arriva il dato", generalista: "Con il bilancio d'esercizio", noi: "Report di commessa entro il 15 di ogni mese" },
  { voce: "Unità di misura", generalista: "L'azienda nel suo complesso", noi: "La singola commessa, con lo scostamento dal preventivo" },
  { voce: "IVA sui lavori", generalista: "Aliquota scelta al momento della fattura", noi: "Regime qualificato nel computo metrico, prima di iniziare" },
  { voce: "Costo del lavoro", generalista: "Paga oraria da contratto", noi: "Costo orario pieno diviso per le ore realmente produttive" },
  { voce: "Lavori in corso", generalista: "Un valore complessivo a fine anno", noi: "Avanzamento e costi a finire rideterminati per cantiere" },
  { voce: "Se arriva una verifica", generalista: "Si risponde con la contabilità", noi: "Si risponde con il fascicolo di commessa, costruito prima" },
  { voce: "Il patrimonio dei soci", generalista: "Argomento separato", noi: "Stesso disegno: operativa, immobiliare, holding" },
];

const FAQ_HUB = [
  {
    q: "Cosa fa un commercialista specializzato in edilizia che il mio non fa?",
    a: "Legge i numeri dove nascono, cioè in commessa: margine per cantiere, costi a finire, avanzamento economico. E applica regole che valgono solo qui — reverse charge, aliquote agevolate, lavori in corso su ordinazione, congruità della manodopera — senza doverle studiare caso per caso.",
  },
  {
    q: "Da quanti cantieri serve il controllo di gestione?",
    a: "Il criterio non è il fatturato ma il numero di commesse contemporanee. Con un cantiere alla volta l'imprenditore ha il controllo in testa; da tre o quattro in parallelo quel controllo si perde, e il risultato d'esercizio diventa la somma di margini che nessuno ha misurato singolarmente.",
  },
  {
    q: "Posso tenere il mio commercialista e affiancarvi solo sul controllo di gestione?",
    a: "Sì, ed è una richiesta frequente quando il rapporto con lo studio storico funziona. In quel caso lavoriamo sui dati che la contabilità produce e, dove serve, chiediamo di modificare il modo in cui i costi vengono attribuiti alle commesse. È la condizione perché il reporting sia attendibile.",
  },
  {
    q: "Quanto costa?",
    a: "Il compenso si concorda per iscritto prima di iniziare: a canone annuo per la parte ricorrente, a corpo per le operazioni straordinarie. Non applichiamo percentuali sul risparmio d'imposta ottenuto. Le regole complete sono pubblicate nella pagina «Come lavoriamo».",
  },
  {
    q: "Lavorate solo in una zona?",
    a: "No, operiamo in tutta Italia. La contabilità e il reporting si gestiscono da remoto; per il sopralluogo iniziale sui cantieri e per gli incontri di revisione dei numeri concordiamo la presenza quando serve.",
  },
];

const Imprese = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const guideImprese = articlesMeta.filter(
    (a) => a.category === "Impresa" || a.category === "Controllo" || a.category === "Fisco",
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Consulenza fiscale e controllo di gestione per imprese edili",
    "provider": { "@id": `${SITE_URL}/#studio` },
    "areaServed": { "@type": "Country", "name": "Italia" },
    "audience": { "@type": "BusinessAudience", "audienceType": "Imprese edili, impiantisti, società immobiliari" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aree di assistenza per le imprese edili",
      "itemListElement": areeImprese.map((a) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": a.title },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_HUB.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Per l'impresa", "item": `${SITE_URL}/imprese` },
    ],
  };

  return (
    <>
      <SEO
        title="Commercialista per Imprese Edili: Fisco e Margini"
        description="Consulenza fiscale e controllo di gestione per imprese edili: IVA e reverse charge, lavori in corso, margine di commessa, CFO esterno, verifiche e accertamenti."
        keywords="commercialista imprese edili, commercialista edilizia, fiscalità impresa edile, controllo di gestione edilizia, reverse charge edilizia, margine commessa, cfo esterno edilizia"
        canonical="https://www.ediliziafiscale.it/imprese"
        jsonLd={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-ink text-white overflow-hidden border-b border-white/10">
            <EFHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-20 relative">
              {/* Fascia 1: identificazione e chiamata all'azione */}
              <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-start">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                    <Building2 className="w-4 h-4 text-brand" />
                    Area impresa
                  </div>

                  {/* Le lavorazioni restano dentro l'H1 (contano per la ricerca) ma come
                      occhiello: a dimensione piena occupavano sette righe su mobile. */}
                  <h1 className="mb-6">
                    <span className="block text-sm md:text-base font-semibold text-white/60 tracking-wide mb-3">
                      Ristrutturazioni · Infissi e serramenti · Impianti · Fotovoltaico · Movimento terra ·
                      Nuove costruzioni · Consorzi e ATI · Appalti pubblici
                    </span>
                    <span className="block text-[1.65rem] sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                      Quale cantiere guadagna. Quanto pagherai di tasse. Quanta cassa avrai.
                    </span>
                    <span className="block text-[1.65rem] sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-brand mt-3">
                      Tre numeri che hai ogni mese, non a bilancio chiuso.
                    </span>
                  </h1>

                  <p className="text-lg text-white/80 mb-5 leading-relaxed">
                    Il tuo commercialista chiude il bilancio, e fa il suo lavoro. Ma il margine di un cantiere
                    si legge mentre è aperto. L'IVA si decide nel computo metrico. Le tasse si pianificano a
                    settembre.
                  </p>
                  <p className="text-lg text-white/80 mb-8 leading-relaxed">
                    A giugno non si decide più niente. Si versa.
                  </p>

                  <p className="text-base text-white/75 mb-8 leading-relaxed border-l-2 border-brand/50 pl-4">
                    Contabilità, controllo di gestione e fisco solo per imprese edili. E la stessa mano che
                    guarda i cantieri guarda anche{" "}
                    <Link to="/patrimonio" className="text-brand hover:underline">il patrimonio dei soci</Link>.
                  </p>

                  <Button
                    onClick={openContact}
                    size="lg"
                    className="bg-brand hover:bg-brand-dark text-ink font-semibold text-base h-12 px-6"
                  >
                    Mandaci gli ultimi due bilanci <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-sm text-white/50 mt-3">
                    Entro 2 giorni lavorativi ti diciamo cosa si poteva fare e cosa si può ancora fare.
                  </p>
                </div>

                <EFImageSlot id="imprese-hero" tone="dark" className="hidden lg:flex rounded-2xl aspect-[4/3]" />
              </div>

              {/* Fascia 2: i quattro problemi, a tutta larghezza */}
              <div className="mt-14 lg:mt-16 pt-10 border-t border-white/10">
                <p className="text-brand uppercase tracking-widest text-sm font-semibold mb-7">
                  In pratica, suona così
                </p>
                <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                  {PROBLEMI.map((p, i) => (
                    <li
                      key={p.title}
                      className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col h-full"
                    >
                      <span className="w-9 h-9 rounded-lg bg-brand/15 border border-brand/30 text-brand font-bold flex items-center justify-center mb-4">
                        {i + 1}
                      </span>
                      <p className="font-bold text-white leading-snug mb-2">{p.title}</p>
                      <p className="text-sm text-white/65 leading-relaxed flex-1">{p.desc}</p>
                      <Link
                        to={`/guide/${p.guida}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all mt-4"
                      >
                        La guida <ArrowRight className="w-4 h-4" />
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>


          {/* Le 10 aree */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8 leading-tight">
                  Le dieci aree di assistenza all'impresa edile
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {areeImprese.map((a, i) => (
                  <Reveal key={a.title} delay={(i % 3) * 80}>
                    <AreaCard area={a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>


          {/* Confronto sul metodo */}
          <section className="py-16 lg:py-20 bg-ink text-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mb-10">
                  <p className="text-brand uppercase tracking-widest text-sm font-semibold mb-3">
                    Cosa cambia in concreto
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
                    Non è una questione di bravura. È che si guardano cose diverse.
                  </h2>
                  <p className="text-white/75 text-lg leading-relaxed">
                    Un buon studio generalista fa bene il suo mestiere. Ma il suo mestiere è un altro: qui sotto
                    c'è la differenza di metodo, senza giudizi su chi lavora meglio.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="overflow-x-auto rounded-2xl border border-white/15">
                  <table className="w-full min-w-[640px] text-sm border-collapse">
                    <thead>
                      <tr className="bg-white/[0.06]">
                        <th className="text-left font-semibold text-white/60 px-5 py-4 w-[26%]">&nbsp;</th>
                        <th className="text-left font-semibold text-white/70 px-5 py-4">Studio generalista</th>
                        <th className="text-left font-semibold text-brand px-5 py-4">Studio verticale sull'edilizia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CONFRONTO.map((r) => (
                        <tr key={r.voce} className="border-t border-white/10 align-top">
                          <td className="px-5 py-4 font-semibold text-white">{r.voce}</td>
                          <td className="px-5 py-4 text-white/60 leading-relaxed">{r.generalista}</td>
                          <td className="px-5 py-4 text-white/90 leading-relaxed">{r.noi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-sm text-white/50 mt-5 max-w-3xl leading-relaxed">
                  Molte imprese tengono lo studio storico per contabilità e dichiarativi e ci affiancano solo sul
                  controllo di gestione. È una richiesta legittima e la gestiamo così com'è.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Guide per le imprese */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
                    Le guide per chi fa impresa in cantiere
                  </h2>
                  <Link to="/guide" className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark shrink-0">
                    Tutte le guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guideImprese.slice(0, 6).map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 80}>
                    <Link
                      to={`/guide/${a.slug}`}
                      className="group block bg-muted/40 hover:bg-white rounded-xl overflow-hidden border border-border hover:border-brand hover:shadow-card transition-all h-full"
                    >
                      <ArticleCover article={a} className="aspect-[16/9]" />
                      <div className="p-6">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-brand-dark">{a.category}</span>
                      <h3 className="font-bold text-ink mt-2 mb-2 leading-snug group-hover:text-brand-dark">{a.title}</h3>
                      <p className="text-sm text-foreground/65 leading-relaxed line-clamp-3">{a.excerpt}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-brand-dark">
                        Leggi la guida <ArrowRight className="w-4 h-4" />
                      </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>


          {/* Domande frequenti dell'area impresa */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Reveal>
                  <div className="mb-10">
                    <p className="text-brand-dark uppercase tracking-widest text-sm font-semibold mb-3">
                      Prima di scriverci
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-5 leading-tight">
                      Le domande che ci fanno tutti al primo incontro.
                    </h2>
                  </div>
                </Reveal>

                <div className="space-y-4">
                  {FAQ_HUB.map((f, i) => (
                    <Reveal key={f.q} delay={i * 70}>
                      <div className="bg-muted/40 rounded-xl border border-border p-5 lg:p-6">
                        <h3 className="font-bold text-ink text-base mb-2">{f.q}</h3>
                        <p className="text-foreground/75 leading-relaxed">{f.a}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={200}>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                    <Link to="/domande-frequenti" className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark">
                      Tutte le domande frequenti <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/studio/come-lavoriamo" className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark">
                      Come lavoriamo e quanto costa <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <EFFinalCTA onOpenContact={openContact} />
        </main>

        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <EFStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Imprese;
