import { ImageIcon } from "lucide-react";
import { imageSlots, imageSlotLabels, type ImageSlotId } from "@/data/imageSlots";

interface EFImageSlotProps {
  id: ImageSlotId;
  /** Classi per il contenitore (aspect ratio, arrotondamenti…). */
  className?: string;
  /** Tema del segnaposto quando manca la foto. */
  tone?: "light" | "dark";
}

/**
 * Slot immagine sostituibile: se in imageSlots c'è un percorso renderizza la
 * foto (con hover zoom), altrimenti un segnaposto curato con l'etichetta di
 * cosa andrà lì. Sostituire le foto = toccare SOLO src/data/imageSlots.ts.
 */
const EFImageSlot = ({ id, className = "", tone = "light" }: EFImageSlotProps) => {
  const src = imageSlots[id];
  const label = imageSlotLabels[id];

  if (src) {
    return (
      <div className={`group overflow-hidden ${className}`}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    );
  }

  const dark = tone === "dark";
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${
        dark ? "bg-white/5 border border-white/15" : "bg-muted border border-border"
      } ${className}`}
      role="img"
      aria-label={`${label} (immagine in arrivo)`}
    >
      {/* trama diagonale leggera */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 14px)",
        }}
      />
      <div className="relative text-center px-6 py-10">
        <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${dark ? "bg-gold/15" : "bg-navy/5"}`}>
          <ImageIcon className={`w-6 h-6 ${dark ? "text-gold" : "text-navy/50"}`} />
        </div>
        <p className={`text-sm font-semibold ${dark ? "text-white/70" : "text-navy/60"}`}>{label}</p>
        <p className={`text-xs mt-1 ${dark ? "text-white/40" : "text-foreground/40"}`}>Foto in arrivo</p>
      </div>
    </div>
  );
};

export default EFImageSlot;
