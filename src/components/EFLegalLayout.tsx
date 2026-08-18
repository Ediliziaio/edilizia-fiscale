import { useState, type ReactNode } from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import EFHeader from "./EFHeader";
import EFFooter from "./EFFooter";
import EFContactModal from "./EFContactModal";
import EFHeroBackdrop from "./EFHeroBackdrop";
import { FileText, Shield, Cookie, ArrowLeft } from "lucide-react";

interface EFLegalLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdate: string;
  icon: "file" | "shield" | "cookie";
  metaDescription: string;
  canonicalPath: string;
  children: ReactNode;
}

const iconMap = { file: FileText, shield: Shield, cookie: Cookie };

const EFLegalLayout = ({ title, subtitle, lastUpdate, icon, metaDescription, canonicalPath, children }: EFLegalLayoutProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const Icon = iconMap[icon];

  return (
    <>
      <SEO
        title={`${title} | Edilizia Fiscale`}
        description={metaDescription}
        robots="index, follow"
        canonical={`https://www.ediliziafiscale.it${canonicalPath}`}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-ink text-white overflow-hidden border-b border-white/10 py-14 lg:py-20">
            <EFHeroBackdrop />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl">
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-brand mb-6"
                >
                  <ArrowLeft className="w-4 h-4" /> Torna alla home
                </Link>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/15 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <p className="text-brand uppercase tracking-widest text-xs font-bold mb-2">Informativa</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                      {title}
                    </h1>
                  </div>
                </div>
                {subtitle && (
                  <p className="text-lg text-white/80 leading-relaxed mt-4 ml-16">
                    {subtitle}
                  </p>
                )}
                <p className="text-sm text-white/60 mt-4 ml-16">
                  Ultimo aggiornamento: <strong className="text-white/80">{lastUpdate}</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto legal-content">
                {children}
              </div>
            </div>
          </section>
        </main>

        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </>
  );
};

export default EFLegalLayout;
