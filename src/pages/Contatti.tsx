import { useState } from "react";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFHeroBackdrop from "@/components/EFHeroBackdrop";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import EFStickyCTA from "@/components/EFStickyCTA";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Shield, Clock, FileText, ArrowRight } from "lucide-react";
import { PHONE_TEL, PHONE_DISPLAY, EMAIL, PEC, SITE_URL } from "@/data/site";
import EFImageSlot from "@/components/EFImageSlot";

const Contatti = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Contatti", "item": `${SITE_URL}/contatti` },
    ],
  };

  const docs = [
    "Bilanci degli ultimi due esercizi depositati",
    "Situazione contabile aggiornata e bilancio di verifica",
    "Elenco delle commesse aperte con importo e avanzamento",
    "Visura camerale e struttura societaria (soci, partecipazioni)",
    "Scadenzario fornitori, situazione bancaria e centrale rischi",
    "Eventuali atti ricevuti dall'Agenzia delle Entrate",
  ];

  return (
    <>
      <SEO
        title="Contatti | Edilizia Fiscale — Commercialisti per l'Edilizia"
        description="Mandaci bilanci e commesse aperte: entro 2 giorni lavorativi ricevi una prima lettura riservata dei tuoi numeri. Telefono, email e PEC dello studio. In tutta Italia."
        canonical="https://www.ediliziafiscale.it/contatti"
        jsonLd={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1">
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
            <EFHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-16 relative">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
                  Parliamo dei tuoi numeri. <span className="text-gold">Con i bilanci davanti.</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Entro 2 giorni lavorativi dalla richiesta ricevi una prima lettura riservata: dove si sta perdendo
                  margine, quali rischi fiscali sono aperti, da dove ha senso iniziare. Senza impegno.
                </p>
              </div>
            </div>
          </section>

          <section className="py-14 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_380px] gap-8 max-w-5xl mx-auto items-start">
                <Reveal>
                  <div className="bg-white rounded-2xl border border-border p-7 lg:p-9">
                    <h2 className="text-2xl font-bold text-navy mb-3">Scrivici</h2>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      Il modo più rapido è il modulo: ci arriva già organizzato per tipo di attività e tipo di
                      esigenza, e ci permette di risponderti con qualcosa di utile, non con un "ci sentiamo".
                    </p>
                    <Button
                      onClick={() => setIsContactOpen(true)}
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-navy font-semibold h-12 px-6 mb-8"
                    >
                      Apri il modulo di contatto <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>

                    <div className="space-y-4 border-t border-border pt-6">
                      <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 text-foreground/80 hover:text-navy">
                        <span className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-navy" />
                        </span>
                        <span><strong className="text-navy">{PHONE_DISPLAY}</strong><br /><span className="text-sm text-foreground/60">lun-ven, 9:00-18:30</span></span>
                      </a>
                      <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-foreground/80 hover:text-navy">
                        <span className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4 text-navy" />
                        </span>
                        <span><strong className="text-navy">{EMAIL}</strong><br /><span className="text-sm text-foreground/60">per richieste e documenti</span></span>
                      </a>
                      <div className="flex items-center gap-3 text-foreground/80">
                        <span className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                          <Shield className="w-4 h-4 text-navy" />
                        </span>
                        <span><strong className="text-navy">{PEC}</strong><br /><span className="text-sm text-foreground/60">PEC per comunicazioni formali</span></span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/80">
                        <span className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                          <Clock className="w-4 h-4 text-navy" />
                        </span>
                        <span><strong className="text-navy">In tutta Italia</strong><br /><span className="text-sm text-foreground/60">colloqui in studio o da remoto</span></span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <div className="bg-navy text-white rounded-2xl p-7">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-5 h-5 text-gold" />
                      <h2 className="text-lg font-bold">Cosa preparare</h2>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed mb-5">
                      La lettura è tanto più utile quanto più completa è la documentazione. Se li hai, tieni pronti:
                    </p>
                    <ul className="space-y-2.5">
                      {docs.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-white/85">
                          <span className="text-gold mt-1 text-xs">●</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <p className="text-white/60 text-xs leading-relaxed mt-5">
                      Non hai tutto? Va bene lo stesso: parti da quello che c'è. Ti diremo noi cosa manca e come
                      recuperarlo dal tuo attuale consulente.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={200} className="lg:col-span-2">
                  <EFImageSlot id="contatti-studio" className="rounded-2xl aspect-[21/8]" />
                </Reveal>
              </div>
            </div>
          </section>
        </main>

        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <EFStickyCTA onOpenContact={() => setIsContactOpen(true)} />
      </div>
    </>
  );
};

export default Contatti;
