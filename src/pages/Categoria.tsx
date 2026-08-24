import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFHeroBackdrop from "@/components/EFHeroBackdrop";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import EFStickyCTA from "@/components/EFStickyCTA";
import EFFinalCTA from "@/components/EFFinalCTA";
import Reveal from "@/components/Reveal";
import GuideCard from "@/components/GuideCard";
import { BookOpen, ArrowRight, ChevronRight } from "lucide-react";
import { articlesMeta } from "@/data/articles";
import { categorie, getCategoria } from "@/data/categorie";
import { SITE_URL, abs } from "@/data/site";

/**
 * Pagina di categoria: /guide/categoria/<slug>.
 *
 * Non è un filtro con una URL: è una pagina con un testo proprio che risponde
 * alla query di categoria e con l'elenco completo del cluster. Serve anche a
 * chiudere il BreadcrumbList degli articoli, che indicava la categoria come
 * livello intermedio puntando a una query string mai prerenderizzata.
 */
const Categoria = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const info = slug ? getCategoria(slug) : undefined;
  if (!info) return <Navigate to="/guide" replace />;

  const guide = articlesMeta.filter((a) => a.category === info.categoria);
  const pilastro = info.pilastro ? guide.find((a) => a.slug === info.pilastro) : undefined;
  const altre = pilastro ? guide.filter((a) => a.slug !== pilastro.slug) : guide;
  const url = abs(`/guide/categoria/${info.slug}`);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Guide", "item": `${SITE_URL}/guide` },
      { "@type": "ListItem", "position": 3, "name": info.label, "item": url },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": url,
    "name": info.h1,
    "description": info.intro,
    "url": url,
    "inLanguage": "it-IT",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "publisher": { "@id": `${SITE_URL}/#studio` },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": guide.length,
      "itemListElement": guide.map((a, i) => ({
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
        title={`${info.seoTitle} | Edilizia Fiscale`}
        description={info.metaDescription}
        keywords={info.keywords}
        canonical={url}
        jsonLd={[breadcrumbSchema, collectionSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1">
          <section className="relative bg-ink text-white overflow-hidden border-b border-white/10">
            <EFHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-16 relative">
              <nav aria-label="Percorso di navigazione" className="mb-6">
                <ol className="flex items-center gap-1.5 text-sm text-white/50 flex-wrap">
                  <li><Link to="/" className="hover:text-brand">Home</Link></li>
                  <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
                  <li><Link to="/guide" className="hover:text-brand">Guide</Link></li>
                  <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
                  <li className="text-white/80">{info.label}</li>
                </ol>
              </nav>

              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                  <BookOpen className="w-4 h-4 text-brand" />
                  {guide.length} guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">{info.h1}</h1>
                <p className="text-lg text-white/80 leading-relaxed">{info.intro}</p>
              </div>
            </div>
          </section>

          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-10 space-y-4">
                {info.corpo.map((p, i) => (
                  <p key={i} className="text-foreground/75 text-lg leading-relaxed">{p}</p>
                ))}
              </div>

              {pilastro && (
                <Reveal>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-ink mb-5">Se parti da zero, parti da qui</h2>
                    <div className="max-w-2xl">
                      <GuideCard a={pilastro} featured />
                    </div>
                  </div>
                </Reveal>
              )}

              <h2 className="text-2xl font-bold text-ink mb-5">
                {pilastro ? `Gli approfondimenti del cluster` : `Le guide di quest'area`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {altre.map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 60}>
                    <GuideCard a={a} />
                  </Reveal>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="text-lg font-bold text-ink mb-4">Le altre aree</h2>
                <div className="flex flex-wrap gap-2.5">
                  {categorie
                    .filter((c) => c.slug !== info.slug)
                    .map((c) => (
                      <Link
                        key={c.slug}
                        to={`/guide/categoria/${c.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-white border border-border text-foreground/70 hover:border-ink hover:text-ink transition-colors"
                      >
                        {c.label}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                </div>
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

export default Categoria;
