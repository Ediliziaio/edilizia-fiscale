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
import { BookMarked, ArrowRight, Scale } from "lucide-react";
import { termini, GRUPPI } from "@/data/glossario";
import { SITE_URL, abs } from "@/data/site";

/**
 * Glossario: una pagina sola, non una pagina per termine.
 * Trenta definizioni da settanta parole diventerebbero trenta pagine sottili,
 * che è esattamente il pattern che Google tratta come doorway. Qui ogni termine
 * ha un'ancora stabile (/glossario#reverse-charge) citabile da sola, e la
 * profondità sta nella guida collegata.
 */
const Glossario = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [gruppo, setGruppo] = useState<"tutti" | (typeof GRUPPI)[number]>("tutti");

  const visibili = gruppo === "tutti" ? termini : termini.filter((t) => t.gruppo === gruppo);

  const glossarioSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${SITE_URL}/glossario#set`,
    "name": "Glossario fiscale e contabile dell'edilizia",
    "description":
      "Definizioni dei termini fiscali, contabili, contributuali e societari ricorrenti nelle imprese di costruzioni: reverse charge, SAL, DURC, congruità, lavori in corso, holding, PEX.",
    "url": `${SITE_URL}/glossario`,
    "inLanguage": "it-IT",
    "hasDefinedTerm": termini.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/glossario#${t.slug}`,
      "name": t.termine,
      ...(t.altro ? { "alternateName": t.altro } : {}),
      "description": t.definizione,
      "url": `${SITE_URL}/glossario#${t.slug}`,
      "inDefinedTermSet": { "@id": `${SITE_URL}/glossario#set` },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Glossario", "item": `${SITE_URL}/glossario` },
    ],
  };

  return (
    <>
      <SEO
        title="Glossario Fiscale e Contabile dell'Edilizia | Edilizia Fiscale"
        description="Cosa significano reverse charge, SAL, DURC, congruità, lavori in corso, SOA, holding e PEX in un'impresa edile. Definizioni brevi con il riferimento normativo."
        keywords="glossario edilizia fiscale, cos'è il reverse charge, cos'è il DURC, cos'è il SAL, congruità manodopera, lavori in corso su ordinazione, attestazione SOA, PEX"
        canonical={abs("/glossario")}
        jsonLd={[glossarioSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1">
          <section className="relative bg-ink text-white overflow-hidden border-b border-white/10">
            <EFHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-16 relative">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                  <BookMarked className="w-4 h-4 text-brand" />
                  Glossario
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
                  {termini.length} parole che compaiono nei tuoi documenti.{" "}
                  <span className="text-brand">Cosa vogliono dire davvero.</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Reverse charge, congruità, costi a finire, classifica SOA. Sono termini che trovi in
                  fattura, nel DURC e nei bandi, e che decidono quanto incassi e quando. Qui ognuno ha una
                  definizione breve, la norma che lo regola e la guida che lo spiega per esteso.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 lg:py-16 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <nav aria-label="Filtra per area" className="flex flex-wrap gap-2 mb-8">
                  {(["tutti", ...GRUPPI] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGruppo(g)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                        gruppo === g
                          ? "bg-ink text-white border-ink"
                          : "bg-white text-foreground/70 border-border hover:border-ink hover:text-ink"
                      }`}
                    >
                      {g === "tutti" ? "Tutti" : g}
                    </button>
                  ))}
                </nav>

                <dl className="space-y-4">
                  {visibili.map((t, i) => (
                    <Reveal key={t.slug} delay={(i % 4) * 40}>
                      <div
                        id={t.slug}
                        className="bg-white rounded-xl border border-border p-5 lg:p-6 scroll-mt-24"
                      >
                        <span className="text-[10px] uppercase tracking-wider font-bold text-brand-dark">
                          {t.gruppo}
                        </span>
                        <dt className="font-bold text-ink text-lg mt-1.5 leading-snug">
                          {t.termine}
                          {t.altro && (
                            <span className="block text-sm font-medium text-foreground/50 mt-0.5">
                              {t.altro}
                            </span>
                          )}
                        </dt>
                        <dd className="text-foreground/75 leading-relaxed mt-2">
                          {t.definizione}
                          {t.norma && (
                            <span className="flex items-start gap-2 mt-3 text-sm text-foreground/60">
                              <Scale className="w-4 h-4 shrink-0 mt-0.5 text-brand-dark" />
                              <span>{t.norma}</span>
                            </span>
                          )}
                          {t.guida && (
                            <Link
                              to={`/guide/${t.guida}`}
                              className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-brand-dark hover:gap-2.5 transition-all"
                            >
                              Guida completa <ArrowRight className="w-4 h-4" />
                            </Link>
                          )}
                        </dd>
                      </div>
                    </Reveal>
                  ))}
                </dl>

                <p className="text-sm text-foreground/60 leading-relaxed mt-8">
                  Le definizioni sono generali e valgono alla data indicata in fondo alla pagina. Il modo in
                  cui una norma si applica al tuo cantiere dipende dal contratto, dalla categoria dei lavori
                  e dal committente: va verificato sui documenti.{" "}
                  <Link to="/domande-frequenti" className="font-semibold text-brand-dark hover:underline">
                    Le domande frequenti
                  </Link>{" "}
                  partono da qui e arrivano ai casi concreti.
                </p>
              </div>
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

export default Glossario;
