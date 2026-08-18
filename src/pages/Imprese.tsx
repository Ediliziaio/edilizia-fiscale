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

const SEGMENTI = [
  "Imprese generali di costruzione",
  "Impiantisti e serramentisti",
  "Movimento terra e strutture",
  "Costruttori-venditori e sviluppo",
  "Consorzi, ATI e gruppi",
  "Imprese che lavorano con la PA",
];

/**
 * Autodiagnosi: sono i sintomi con cui l'imprenditore edile arriva da noi,
 * scritti come li racconta lui. Ognuno rimanda alla guida che lo affronta.
 */
const SINTOMI: { title: string; desc: string; guida: string }[] = [
  {
    title: "Il margine lo scopri a giugno",
    desc: "Il bilancio arriva quando i cantieri che l'hanno generato sono chiusi da mesi. Sai di aver guadagnato meno, non sai dove.",
    guida: "controllo-di-gestione-impresa-edile",
  },
  {
    title: "Fatturi di più e hai meno cassa",
    desc: "Ogni cantiere nuovo assorbe materiali, manodopera e noli prima di produrre un incasso. Il portafoglio ordini cresce, il conto peggiora.",
    guida: "flussi-di-cassa-impresa-edile",
  },
  {
    title: "L'IVA la decidi in fatturazione",
    desc: "Reverse charge e aliquote agevolate scelti a lavoro finito. La qualificazione andava fatta nel computo metrico, mesi prima.",
    guida: "reverse-charge-edilizia",
  },
  {
    title: "Il costo orario è quello di tre anni fa",
    desc: "I preventivi girano su un numero che non comprende contributi, Cassa Edile, ore non produttive e fermi di cantiere.",
    guida: "costo-del-lavoro-impresa-edile",
  },
  {
    title: "Le varianti si fanno e poi si vedrà",
    desc: "Lavorazioni eseguite su richiesta verbale del direttore dei lavori: costi certi, ricavi da negoziare a fine opera.",
    guida: "margine-di-commessa-edilizia",
  },
  {
    title: "Il capannone è nella società dei cantieri",
    desc: "L'immobile che hai impiegato vent'anni a costruire risponde di ogni infortunio, vizio dell'opera e solidarietà negli appalti.",
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
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                  <Building2 className="w-4 h-4 text-brand" />
                  Area impresa
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Il bilancio te lo chiude chiunque.
                  <span className="block text-brand mt-2">Dirti quale cantiere perde, no.</span>
                </h1>
                <p className="text-lg text-white/80 mb-5 leading-relaxed">
                  La contabilità la tiene qualsiasi studio. Il punto è che hai nove cantieri aperti e il margine
                  di ognuno lo vedi a bilancio chiuso, che il reverse charge va per abitudine da due anni, e che
                  se arriva una verifica la risposta sta nel fascicolo di commessa — quello che nessuno ha
                  costruito mentre si lavorava.
                </p>
                <p className="text-lg text-white/80 mb-7 leading-relaxed">
                  Le dieci aree qui sotto sono ordinate per urgenza: prima quello che ti sta costando adesso.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {SEGMENTI.map((seg) => (
                    <span
                      key={seg}
                      className="text-xs font-medium text-white/75 bg-white/[0.07] border border-white/15 rounded-full px-3 py-1.5"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
                <Button
                  onClick={openContact}
                  size="lg"
                  className="bg-brand hover:bg-brand-dark text-ink font-semibold text-base h-12 px-6"
                >
                  Mandaci i tuoi numeri <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <EFImageSlot id="imprese-hero" tone="dark" className="hidden lg:flex rounded-2xl aspect-[4/3]" />
              </div>
            </div>
          </section>


          {/* Autodiagnosi */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mb-10">
                  <p className="text-brand-dark uppercase tracking-widest text-sm font-semibold mb-3">
                    Riconosci qualcuna di queste?
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-5 leading-tight">
                    Se tre di queste sei frasi le hai già dette, non è colpa del commercialista.
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    È che sono problemi di un settore che lavora per commessa, e uno studio generalista non ha
                    ragione di conoscerli. Ogni voce rimanda alla guida che la affronta per esteso.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SINTOMI.map((s, i) => (
                  <Reveal key={s.title} delay={(i % 3) * 80}>
                    <Link
                      to={`/guide/${s.guida}`}
                      className="group block h-full bg-muted/40 hover:bg-white rounded-2xl p-6 border border-border hover:border-brand hover:shadow-card transition-all"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-7 h-7 rounded-lg bg-brand/15 text-brand-dark font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <h3 className="font-bold text-ink leading-snug group-hover:text-brand-dark">
                          «{s.title}»
                        </h3>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark group-hover:gap-2.5 transition-all">
                        La guida <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Le 10 aree */}
          <section className="py-16 lg:py-20 bg-muted/40">
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
