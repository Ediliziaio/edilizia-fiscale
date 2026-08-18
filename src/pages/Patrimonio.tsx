import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFHeroBackdrop from "@/components/EFHeroBackdrop";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import EFStickyCTA from "@/components/EFStickyCTA";
import EFFinalCTA from "@/components/EFFinalCTA";
import EFVerticali from "@/components/EFVerticali";
import Reveal from "@/components/Reveal";
import { AreaCard } from "@/components/EFServicesCards";
import { Button } from "@/components/ui/button";
import { ArrowRight, Landmark } from "lucide-react";
import { areePatrimonio } from "@/data/aree";
import EFImageSlot from "@/components/EFImageSlot";
import ArticleCover from "@/components/ArticleCover";
import { articlesMeta } from "@/data/articlesMeta";
import { SITE_URL } from "@/data/site";

/**
 * I quattro problemi con cui l'imprenditore edile arriva sul fronte patrimonio.
 * Stanno nell'hero, come su /imprese: prima il riconoscimento, poi i servizi.
 */
const PROBLEMI: { title: string; desc: string; guida: string }[] = [
  {
    title: "Il capannone è nella società che apre i cantieri",
    desc: "Risponde di infortuni, vizi dell'opera e debiti dei subappaltatori. Come gli appartamenti invenduti e la liquidità.",
    guida: "scissione-immobiliare-impresa-edile",
  },
  {
    title: "Hai firmato fideiussioni e non sai per quanto",
    desc: "Le garanzie personali passano sopra qualunque struttura societaria: il creditore agisce su quelle, non sulla S.r.l.",
    guida: "protezione-patrimoniale-imprenditore-edile",
  },
  {
    title: "Gli utili escono e rientrano tassati due volte",
    desc: "Senza una società sopra l'operativa, ogni euro che vuoi reinvestire passa prima dal 26% sul dividendo.",
    guida: "holding-immobiliare-edilizia",
  },
  {
    title: "Il passaggio ai figli è rimandato da anni",
    desc: "Qualificazioni, rapporti bancari e fiducia dei committenti sono legati a te. Trasferirli richiede anni, non mesi.",
    guida: "passaggio-generazionale-impresa-edile",
  },
];

/** Il confronto è sull'assetto, non sulle persone: descrive dove stanno le cose. */
const CONFRONTO: { voce: string; senza: string; con: string }[] = [
  { voce: "Dove stanno gli immobili", senza: "Nella società che apre i cantieri", con: "In un'immobiliare separata, locati all'operativa a canone di mercato" },
  { voce: "Se un cantiere va male", senza: "È aggredibile tutto ciò che l'impresa possiede", con: "Il perimetro si ferma all'operativa e al suo patrimonio netto" },
  { voce: "Utili da reinvestire", senza: "Passano dal 26% prima di poter essere reimpiegati", con: "Salgono alla holding con un prelievo dell'1,2% (art. 89 TUIR)" },
  { voce: "Ingresso dei figli", senza: "Si trasferiscono quote dell'operativa, con il rischio in dote", con: "Si trasferiscono quote della holding, separando proprietà e gestione" },
  { voce: "Ingresso di un socio", senza: "Entra in tutto, patrimonio compreso", con: "Entra solo dove serve, sul veicolo giusto" },
  { voce: "Vendita futura", senza: "L'acquirente compra anche immobili che non voleva", con: "Si cede l'operativa e si tiene il patrimonio" },
];

const FAQ_HUB = [
  {
    q: "Da che dimensione conviene una holding?",
    a: "Il criterio non è il fatturato ma cosa c'è da separare e quanto utile resta in azienda. Con immobili, liquidità accumulata o più società la struttura si ripaga; con una sola operativa piccola, senza immobili e con l'utile prelevato per intero ogni anno, è un costo senza contropartita e lo diciamo.",
  },
  {
    q: "È tardi se ho già dei debiti?",
    a: "Tecnicamente si può fare, ma non ottiene lo scopo: gli atti pregiudizievoli compiuti in prossimità dell'insolvenza sono aggredibili con l'azione revocatoria. La protezione patrimoniale si costruisce quando l'azienda è in salute — è l'unico momento in cui non è contestabile per definizione.",
  },
  {
    q: "Separare gli immobili mi fa perdere la SOA?",
    a: "Può farlo, perché la scissione riduce il patrimonio netto dell'operativa e il patrimonio netto è un requisito della qualificazione. Non è un motivo per rinunciare: è un motivo per dimensionare l'operazione, verificando prima l'impatto e lasciando un margine. È una verifica che facciamo sempre.",
  },
  {
    q: "Il fondo patrimoniale sulla casa non basta?",
    a: "Raramente. L'art. 170 c.c. esclude l'esecuzione solo per i debiti che il creditore sapeva estranei ai bisogni della famiglia, e i debiti dell'impresa familiare vengono di norma ricondotti a quei bisogni. Se poi esistono fideiussioni personali, il fondo è irrilevante: il creditore agisce su quelle.",
  },
  {
    q: "Quanto tempo serve per mettere tutto a posto?",
    a: "Gli atti societari richiedono settimane. Quello che richiede anni è il resto: liberare le fideiussioni personali negoziando con le banche, e nel passaggio generazionale trasferire qualificazioni, rapporti bancari e relazioni con i committenti. Per questo si comincia prima di averne bisogno.",
  },
];

const Patrimonio = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const guidePatrimonio = articlesMeta.filter((a) => a.category === "Patrimonio");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pianificazione patrimoniale e societaria per imprenditori edili",
    "provider": { "@id": `${SITE_URL}/#studio` },
    "areaServed": { "@type": "Country", "name": "Italia" },
    "audience": { "@type": "Audience", "audienceType": "Imprenditori edili, soci di società di costruzione, famiglie imprenditoriali" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aree di assistenza per il patrimonio",
      "itemListElement": areePatrimonio.map((a) => ({
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
      { "@type": "ListItem", "position": 2, "name": "Per il patrimonio", "item": `${SITE_URL}/patrimonio` },
    ],
  };

  return (
    <>
      <SEO
        title="Holding e Protezione Patrimoniale per Imprenditori Edili"
        description="Holding, scissione immobiliare, protezione del patrimonio e passaggio generazionale per chi ha un'impresa edile: struttura, imposte e presidio dell'abuso del diritto."
        keywords="holding impresa edile, protezione patrimoniale imprenditore edile, scissione immobiliare, passaggio generazionale impresa edile, società immobiliare, dividendi holding pex"
        canonical="https://www.ediliziafiscale.it/patrimonio"
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
                    <Landmark className="w-4 h-4 text-brand" />
                    Area patrimonio
                  </div>

                  <h1 className="mb-6">
                    <span className="block text-sm md:text-base font-semibold text-white/60 tracking-wide mb-3">
                      Soci e famiglia · Immobili · Holding · Gruppi societari · Passaggio generazionale
                    </span>
                    <span className="block text-[1.65rem] sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                      Hai costruito un'impresa e un patrimonio.
                    </span>
                    <span className="block text-[1.65rem] sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-brand mt-3">
                      Stanno nello stesso posto, e quel posto apre cantieri.
                    </span>
                  </h1>

                  <p className="text-lg text-white/80 mb-5 leading-relaxed">
                    Il capannone, gli appartamenti invenduti, la liquidità di vent'anni: se sono dentro la società
                    che esegue i lavori, rispondono di infortuni, vizi dell'opera e debiti dei subappaltatori.
                  </p>
                  <p className="text-xl md:text-2xl font-semibold text-white mb-8 leading-snug">
                    Si separa quando l'azienda è in salute. Dopo non è più protezione: è un atto revocabile.
                  </p>

                  <p className="text-base text-white/75 mb-8 leading-relaxed border-l-2 border-brand/50 pl-4">
                    Holding, scissione dell'immobiliare, patto di famiglia: strumenti noti, che reggono solo con
                    ragioni economiche vere e documentate.{" "}
                    <strong className="text-white">Niente strutture di comodo</strong> — reggono finché nessuno
                    le guarda, e poi costano il triplo.
                  </p>

                  <Button
                    onClick={openContact}
                    size="lg"
                    className="bg-brand hover:bg-brand-dark text-ink font-semibold text-base h-12 px-6"
                  >
                    Mandaci visura e garanzie in essere <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-sm text-white/50 mt-3">
                    Entro 2 giorni lavorativi ti diciamo quanto sei esposto e in che ordine intervenire.
                  </p>
                </div>

                <EFImageSlot id="patrimonio-hero" tone="dark" className="hidden lg:flex rounded-2xl aspect-[4/3]" />
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
                  Le dieci aree di assistenza al patrimonio
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {areePatrimonio.map((a, i) => (
                  <Reveal key={a.title} delay={(i % 3) * 80}>
                    <AreaCard area={a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>


          {/* Confronto sull'assetto */}
          <section className="py-16 lg:py-20 bg-ink text-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mb-10">
                  <p className="text-brand uppercase tracking-widest text-sm font-semibold mb-3">
                    Cosa cambia in concreto
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
                    Stesso lavoro, stessi utili. Cambia solo dove stanno le cose.
                  </h2>
                  <p className="text-white/75 text-lg leading-relaxed">
                    Riorganizzare non fa guadagnare di più: mette quello che hai guadagnato al riparo da un
                    rischio che in edilizia è quotidiano, e rende possibili operazioni che oggi non lo sono.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="overflow-x-auto rounded-2xl border border-white/15">
                  <table className="w-full min-w-[640px] text-sm border-collapse">
                    <thead>
                      <tr className="bg-white/[0.06]">
                        <th className="text-left font-semibold text-white/60 px-5 py-4 w-[24%]">&nbsp;</th>
                        <th className="text-left font-semibold text-white/70 px-5 py-4">Tutto nella società operativa</th>
                        <th className="text-left font-semibold text-brand px-5 py-4">Con l'assetto separato</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CONFRONTO.map((r) => (
                        <tr key={r.voce} className="border-t border-white/10 align-top">
                          <td className="px-5 py-4 font-semibold text-white">{r.voce}</td>
                          <td className="px-5 py-4 text-white/60 leading-relaxed">{r.senza}</td>
                          <td className="px-5 py-4 text-white/90 leading-relaxed">{r.con}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-sm text-white/50 mt-5 max-w-3xl leading-relaxed">
                  Sotto una certa dimensione la colonna di destra costa più di quello che protegge. Quando è
                  così lo diciamo, e non se ne fa niente.
                </p>
              </Reveal>
            </div>
          </section>

          <EFVerticali />

          {/* Guide sul patrimonio */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
                    Le guide su holding, immobili e famiglia
                  </h2>
                  <Link to="/guide" className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-dark shrink-0">
                    Tutte le guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guidePatrimonio.slice(0, 6).map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 80}>
                    <Link
                      to={`/guide/${a.slug}`}
                      className="group block bg-white hover:bg-white rounded-xl overflow-hidden border border-border hover:border-brand hover:shadow-card transition-all h-full"
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


          {/* Domande frequenti dell'area patrimonio */}
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

export default Patrimonio;
