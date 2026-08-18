import { ImageIcon } from "lucide-react";
import { getArticleImage } from "@/data/articleImages";

interface ArticleFigureProps {
  slot: string;
  /** Descrive la foto: è sia l'alt sia il brief mostrato nel segnaposto. */
  alt: string;
  caption?: string;
}

/**
 * Immagine dentro il corpo di una guida. Se lo slot non è ancora collegato a un
 * file, mostra un segnaposto che dice quale foto va prodotta — così la pagina
 * resta leggibile e la lavorazione mancante è visibile a colpo d'occhio.
 */
const ArticleFigure = ({ slot, alt, caption }: ArticleFigureProps) => {
  const src = getArticleImage(slot);

  return (
    <figure className="my-8">
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full rounded-2xl shadow-card border border-border aspect-[16/9] object-cover"
        />
      ) : (
        <div
          className="relative w-full rounded-2xl border border-border bg-muted aspect-[16/9] flex items-center justify-center overflow-hidden"
          role="img"
          aria-label={`${alt} (immagine in arrivo)`}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 14px)",
            }}
          />
          <div className="relative text-center px-8 max-w-lg">
            <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-3">
              <ImageIcon className="w-6 h-6 text-navy/50" />
            </div>
            <p className="text-sm font-semibold text-navy/70 leading-snug">{alt}</p>
            <p className="text-xs text-foreground/40 mt-1.5">Immagine in arrivo</p>
          </div>
        </div>
      )}
      {caption && (
        <figcaption className="text-sm text-foreground/60 mt-3 italic text-center leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ArticleFigure;
