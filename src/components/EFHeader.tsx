import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { PHONE_TEL, PHONE_DISPLAY } from "@/data/site";
import logoFull from "@/assets/logo-full.png";
import logoLight from "@/assets/logo-light.png";

interface EFHeaderProps {
  onOpenContact: () => void;
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/imprese", label: "Per l'impresa" },
  { to: "/patrimonio", label: "Per il patrimonio" },
  { to: "/guide", label: "Guide" },
  { to: "/domande-frequenti", label: "Domande" },
  { to: "/studio", label: "Lo studio" },
  { to: "/contatti", label: "Contatti" },
];

/**
 * Logo di brand. Due varianti reali fornite dal cliente: quella a colori pieni
 * per gli sfondi chiari (header) e quella con il lettering bianco per gli
 * sfondi scuri (footer). Il file contiene già il lockup completo
 * "EDILIZIA FISCALE": il payoff resta fuori, nella top bar.
 */
export const EFLogo = ({ light = false }: { light?: boolean }) => (
  <img
    src={light ? logoLight : logoFull}
    alt="Edilizia Fiscale"
    width={760}
    height={215}
    className="h-11 md:h-12 w-auto shrink-0"
    loading="eager"
    decoding="async"
  />
);

const EFHeader = ({ onOpenContact }: EFHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-ink text-white text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-6 text-white/80">
            <span>Commercialisti e CFO specializzati solo in edilizia</span>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-brand">
            <Phone className="w-3.5 h-3.5" />
            <span className="font-medium">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center shrink-0" aria-label="Edilizia Fiscale - Home">
              <EFLogo />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "text-ink bg-muted"
                        : "text-foreground/70 hover:text-ink hover:bg-muted/60"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={onOpenContact}
                className="bg-brand hover:bg-brand-dark text-ink font-semibold"
              >
                Analisi dei numeri
              </Button>
            </div>

            <button
              className="lg:hidden p-2 relative w-11 h-11 flex items-center justify-center text-ink touch-target"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Apri menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`absolute w-6 h-0.5 bg-current ${isMobileMenuOpen ? "rotate-45" : "-translate-y-2"}`} />
              <span className={`absolute w-6 h-0.5 bg-current ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute w-6 h-0.5 bg-current ${isMobileMenuOpen ? "-rotate-45" : "translate-y-2"}`} />
            </button>
          </div>

          {isMobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border bg-white">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block py-3 px-3 min-h-[48px] rounded-lg ${
                        isActive
                          ? "text-ink bg-muted font-semibold"
                          : "text-foreground/80 hover:text-ink hover:bg-muted/60"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-2 py-3 px-3 min-h-[48px] rounded-lg text-foreground/80 hover:bg-muted/60"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{PHONE_DISPLAY}</span>
                </a>
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="mt-3 min-h-[48px] w-full bg-brand hover:bg-brand-dark text-ink font-semibold"
                >
                  Richiedi l'analisi dei numeri
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default EFHeader;
