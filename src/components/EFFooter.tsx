import { Link } from "react-router-dom";
import { Mail, Phone, Shield, Linkedin } from "lucide-react";
import { EFLogo } from "@/components/EFHeader";
import { PHONE_TEL, PHONE_DISPLAY, EMAIL, PEC } from "@/data/site";

const EFFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-14 lg:py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <EFLogo light />
            <p className="text-white/70 text-sm leading-relaxed">
              Studio di commercialisti dedicato al settore costruzioni: fiscalità e controllo di gestione per
              le imprese edili, holding e protezione patrimoniale per gli imprenditori e le loro famiglie.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy text-white/80 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Per l'impresa</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/guide/fiscalita-impresa-edile" className="text-white/70 hover:text-gold">Fiscalità dell'impresa edile</Link></li>
              <li><Link to="/guide/controllo-di-gestione-impresa-edile" className="text-white/70 hover:text-gold">Controllo di gestione</Link></li>
              <li><Link to="/guide/reverse-charge-edilizia" className="text-white/70 hover:text-gold">Reverse charge in edilizia</Link></li>
              <li><Link to="/guide/bilancio-impresa-edile-lavori-in-corso" className="text-white/70 hover:text-gold">Lavori in corso su ordinazione</Link></li>
              <li><Link to="/guide/verifica-fiscale-impresa-edile" className="text-white/70 hover:text-gold">Verifica fiscale in cantiere</Link></li>
              <li><Link to="/imprese" className="text-gold hover:text-gold-light font-medium">Tutte le aree impresa →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Per il patrimonio</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/guide/holding-immobiliare-edilizia" className="text-white/70 hover:text-gold">Holding per l'impresa edile</Link></li>
              <li><Link to="/guide/protezione-patrimoniale-imprenditore-edile" className="text-white/70 hover:text-gold">Protezione patrimoniale</Link></li>
              <li><Link to="/guide/scissione-immobiliare-impresa-edile" className="text-white/70 hover:text-gold">Scissione immobiliare</Link></li>
              <li><Link to="/guide/passaggio-generazionale-impresa-edile" className="text-white/70 hover:text-gold">Passaggio generazionale</Link></li>
              <li><Link to="/guide/dividendi-holding-pex" className="text-white/70 hover:text-gold">Dividendi, PEX e prelievi</Link></li>
              <li><Link to="/patrimonio" className="text-gold hover:text-gold-light font-medium">Tutte le aree patrimonio →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contatti e studio</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href={`tel:${PHONE_TEL}`} className="text-white/70 hover:text-gold">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="text-white/70 hover:text-gold break-all">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div className="text-white/70 leading-snug break-all">
                  <span className="block text-[10px] uppercase tracking-wider text-white/50 font-semibold mb-0.5">PEC</span>
                  <a href={`mailto:${PEC}`} className="hover:text-gold">{PEC}</a>
                </div>
              </li>
              <li><Link to="/studio" className="text-white/70 hover:text-gold">Lo studio</Link></li>
              <li><Link to="/studio/come-lavoriamo" className="text-white/70 hover:text-gold">Come lavoriamo e quanto costa</Link></li>
              <li><Link to="/domande-frequenti" className="text-white/70 hover:text-gold">Domande frequenti</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {year} Edilizia Fiscale. Tutti i diritti riservati. P.IVA — in fase di registrazione.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/cookie" className="hover:text-gold">Cookie Policy</Link>
            <Link to="/note-legali" className="hover:text-gold">Note legali</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EFFooter;
