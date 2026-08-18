import { useState } from "react";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import { SITE_URL } from "@/data/site";

const ComeLavoriamo = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Lo studio", "item": `${SITE_URL}/studio` },
      { "@type": "ListItem", "position": 3, "name": "Come lavoriamo", "item": `${SITE_URL}/studio/come-lavoriamo` },
    ],
  };

  return (
    <>
      <SEO
        title="Come Lavoriamo e Quanto Costa | Edilizia Fiscale"
        description="Compensi concordati prima, nessuna provvigione da terzi, solo pianificazione fiscale lecita: le regole con cui lo studio accetta e gestisce gli incarichi."
        canonical="https://www.ediliziafiscale.it/studio/come-lavoriamo"
        jsonLd={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1 py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto legal-content">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
                Come lavoriamo, cosa non facciamo e quanto costa
              </h1>
              <p className="text-xl text-foreground/75 leading-relaxed mb-8">
                In materia fiscale la fiducia si costruisce prima dell'incarico, non dopo. Questa pagina mette per
                iscritto le regole con cui accettiamo un mandato, come determiniamo il compenso e dove ci fermiamo:
                sono le stesse cose che diciamo al primo incontro.
              </p>

              <h2>Il compenso si concorda prima, per iscritto</h2>
              <p>
                Prima di iniziare consegniamo un preventivo scritto che indica le attività comprese, quelle escluse
                e il criterio di calcolo — a canone annuo per la parte ricorrente, a corpo per le operazioni
                straordinarie (riorganizzazioni, operazioni societarie, contenzioso). Le attività non previste si
                concordano prima di essere svolte, mai a consuntivo.
              </p>
              <p>
                Non applichiamo compensi calcolati come percentuale del risparmio d'imposta ottenuto. È una formula
                che sembra allineare gli interessi e in realtà spinge il consulente verso soluzioni aggressive: il
                rischio, però, resta tutto sul contribuente.
              </p>

              <h2>Solo pianificazione fiscale lecita</h2>
              <p>
                Holding, scissioni, conferimenti e riorganizzazioni si fanno quando esiste una ragione economica
                reale e documentabile. Il perimetro è quello dell'art. 10-bis dello Statuto del contribuente
                (L. 212/2000): il risparmio d'imposta che nasce da operazioni prive di sostanza economica è abuso
                del diritto, e viene disconosciuto.
              </p>
              <p>
                Concretamente: se un'operazione ha senso solo per l'effetto fiscale, non la proponiamo. Se il
                cliente la chiede lo stesso, lo mettiamo per iscritto e non assumiamo l'incarico. Dove la
                questione è dubbia ma la sostanza c'è, valutiamo l'interpello preventivo all'Agenzia delle Entrate.
              </p>

              <h2>Indipendenza: nessuna provvigione da terzi</h2>
              <p>
                Non riceviamo provvigioni, retrocessioni o compensi da banche, società di leasing, assicurazioni,
                intermediari finanziari o fornitori di software. Quando indichiamo uno strumento o un interlocutore,
                lo facciamo perché serve al cliente, non perché qualcuno ci remunera. Se un rapporto di
                collaborazione esiste, lo dichiariamo prima.
              </p>

              <h2>Cosa non facciamo</h2>
              <ul>
                <li>Non promettiamo un risparmio d'imposta prima di aver letto bilanci, contratti e struttura societaria.</li>
                <li>Non costruiamo società o strutture prive di operatività reale per spostare redditi o beni.</li>
                <li>Non assistiamo operazioni destinate a sottrarre garanzie a creditori già esistenti.</li>
                <li>Non accettiamo incarichi su materie fuori dal settore costruzioni e dal patrimonio dei suoi imprenditori.</li>
                <li>Non firmiamo attestazioni o visti su documenti che non abbiamo potuto verificare.</li>
              </ul>

              <h2>Conflitti di interesse tra clienti</h2>
              <p>
                Capita di assistere più società che lavorano insieme — un'impresa generale e un suo subappaltatore,
                due soci di una stessa compagine. Quando gli interessi divergono (una divisione societaria, una lite
                tra soci, una posizione debitoria reciproca) non assistiamo entrambe le parti: lo dichiariamo, e
                indichiamo a una di esse di rivolgersi a un altro professionista.
              </p>

              <h2>Riservatezza e trattamento dei dati</h2>
              <p>
                I documenti che ci invii sono coperti dal segreto professionale e trattati secondo l'informativa
                pubblicata nella pagina privacy. La documentazione contabile e societaria resta di proprietà del
                cliente ed è consegnata integralmente in caso di cessazione dell'incarico.
              </p>

              <h2>Perché pubblichiamo questa pagina</h2>
              <p>
                Chi cerca un commercialista per la propria impresa ha il diritto di sapere prima come si lavora,
                cosa entra nel compenso e dove sta il limite. Preferiamo scriverlo qui, pubblicamente, piuttosto
                che spiegarlo dopo, caso per caso.
              </p>

              <p className="text-sm text-foreground/60 mt-10">
                Ultimo aggiornamento: agosto 2026. Per qualsiasi domanda su queste regole puoi scriverci dalla
                pagina contatti.
              </p>
            </div>
          </div>
        </main>

        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </>
  );
};

export default ComeLavoriamo;
