import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import EFHeader from "@/components/EFHeader";
import EFFooter from "@/components/EFFooter";
import EFContactModal from "@/components/EFContactModal";
import EFStickyCTA from "@/components/EFStickyCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Info,
  List,
  Share2,
  Linkedin,
  MessageCircle,
  Mail,
  Link as LinkIcon,
  Check,
  Tag,
  Phone,
  Sparkles,
  ChevronRight,
  FileText,
} from "lucide-react";
import { articlesMeta, getRelated, toISODate, type Block, type Article, type ArticleMeta } from "@/data/articles";
import { getArticleSeo } from "@/data/articleSeo";
import { categoriaPath } from "@/data/categorie";
import { getArticleImage } from "@/data/articleImages";
import { PHONE_TEL, PHONE_DISPLAY, abs, SITE_URL } from "@/data/site";
import ArticleFigure from "@/components/ArticleFigure";
import ArticleTimeline from "@/components/ArticleTimeline";
import ArticleCover from "@/components/ArticleCover";
import ArticleCaselaw from "@/components/ArticleCaselaw";

/**
 * Link inline nei testi dei blocchi: [ancora](/guide/slug), [termine](/glossario#slug),
 * o un URL esterno. Parsing esplicito, niente HTML iniettato: tutto ciò che non
 * combacia con la sintassi resta testo semplice.
 */
const LINK_RE = /\[([^\]]+)\]\((\/[^\s)]+|https?:\/\/[^\s)]+)\)/g;

const rich = (text: string): React.ReactNode => {
  if (!text.includes("](")) return text;
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK_RE)) {
    if (m.index! > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    out.push(
      href.startsWith("/") ? (
        <Link key={m.index} to={href} className="text-brand-dark font-medium underline decoration-brand/40 underline-offset-2 hover:decoration-brand">
          {label}
        </Link>
      ) : (
        <a key={m.index} href={href} target="_blank" rel="noopener noreferrer" className="text-brand-dark font-medium underline decoration-brand/40 underline-offset-2 hover:decoration-brand">
          {label}
        </a>
      ),
    );
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
};

/** Testo piatto per JSON-LD e meta: [ancora](url) -> ancora. */
const plain = (text: string): string => text.replace(LINK_RE, "$1");

const renderBlock = (block: Block, i: number) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} id={block.id} className="text-2xl md:text-3xl font-bold text-ink mt-12 mb-5 leading-tight scroll-mt-24">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-xl font-bold text-ink mt-8 mb-3 leading-tight">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-foreground/80 leading-relaxed mb-5 text-lg">
          {rich(block.text)}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mb-6 space-y-2.5">
          {block.items.map((it, j) => (
            <li key={j} className="flex items-start gap-3 text-foreground/80 text-lg">
              <span className="text-brand-dark mt-2 text-xs">●</span>
              <span>{rich(it)}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mb-6 space-y-2.5 list-decimal pl-6 marker:text-brand-dark marker:font-bold">
          {block.items.map((it, j) => (
            <li key={j} className="text-foreground/80 text-lg pl-2 leading-relaxed">
              {rich(it)}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="border-l-4 border-brand pl-5 my-7 italic text-foreground/80">
          <p className="text-lg leading-relaxed">"{block.text}"</p>
          {block.cite && <cite className="text-sm text-foreground/60 not-italic block mt-2">— {block.cite}</cite>}
        </blockquote>
      );
    case "note":
      return (
        <div key={i} className="ef-answer bg-brand/10 border-l-4 border-brand rounded-r-xl p-5 my-7 flex items-start gap-3">
          <Info className="w-5 h-5 text-brand-dark mt-0.5 shrink-0" />
          <p className="text-ink leading-relaxed">{rich(block.text)}</p>
        </div>
      );
    case "table":
      return (
        <div key={i} className="my-7 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left">
            <thead className="bg-ink text-white">
              <tr>
                {block.headers.map((h, j) => (
                  <th key={j} className="px-4 py-3 text-sm font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {block.rows.map((row, j) => (
                <tr key={j} className="border-t border-border">
                  {row.map((cell, k) => (
                    <td key={k} className="px-4 py-3 text-foreground/80">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "faq":
      return (
        <Accordion key={i} type="single" collapsible className="my-7 space-y-3">
          {block.items.map((f, j) => (
            <AccordionItem
              key={j}
              value={`faq-${i}-${j}`}
              className="bg-muted/40 rounded-xl border border-border px-5"
            >
              <AccordionTrigger className="text-left font-semibold text-ink hover:text-brand-dark py-4 text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75 leading-relaxed pb-4 text-base">
                {rich(f.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      );
    case "figure":
      return <ArticleFigure key={i} slot={block.slot} alt={block.alt} caption={block.caption} />;
    case "timeline":
      return <ArticleTimeline key={i} title={block.title} steps={block.steps} />;
    case "caselaw":
      return <ArticleCaselaw key={i} title={block.title} items={block.items} />;
    case "image":
      return (
        <figure key={i} className="my-8">
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl shadow-card border border-border aspect-[16/9] object-cover"
          />
          {block.caption && (
            <figcaption className="text-sm text-foreground/60 mt-3 italic text-center leading-relaxed">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
};

const wordCountOf = (blocks?: Block[]): number => {
  if (!blocks) return 0;
  const count = (t: string) => t.trim().split(/\s+/).filter(Boolean).length;
  let n = 0;
  for (const b of blocks) {
    if ("text" in b && typeof b.text === "string") n += count(b.text);
    if ("items" in b && Array.isArray(b.items)) {
      for (const it of b.items) {
        if (typeof it === "string") {
          n += count(it);
        } else if (it && typeof it === "object") {
          // FAQ ({q,a}) oppure giurisprudenza ({principle,impact})
          if ("q" in it) n += count(it.q) + count(it.a);
          else if ("principle" in it) n += count(it.principle) + count(it.impact ?? "");
        }
      }
    }
    if (b.type === "timeline") {
      for (const s of b.steps) n += count(s.label) + count(s.detail ?? "");
    }
  }
  return n;
};

/**
 * Immagine di anteprima della guida: la copertina collegata in
 * articleImages.ts, con l'OG di sito come ripiego. La copertina non sta in
 * `meta.coverImage` — quel campo non lo popola nessuno — quindi leggerlo da
 * solo dava a tutte e 56 le guide la stessa anteprima generica.
 */
const coverUrl = (article: ArticleMeta) => {
  const cover = getArticleImage(`${article.slug}-cover`) ?? article.coverImage;
  if (!cover) return "https://www.ediliziafiscale.it/og-image.png";
  return cover.startsWith("http") ? cover : `https://www.ediliziafiscale.it${cover}`;
};

/**
 * Le norme realmente citate nei blocchi `caselaw`, come `citation` dello schema.
 * Non è decorazione: dice a un motore di risposta su quali fonti poggia il
 * testo, che è esattamente il criterio con cui sceglie chi citare. Si prendono
 * dai riferimenti già scritti nell'articolo, quindi non possono divergere dal
 * contenuto della pagina.
 */
const citationsOf = (blocks?: Block[]) => {
  if (!blocks) return [];
  const seen = new Set<string>();
  const out: { "@type": string; name: string; description: string }[] = [];
  for (const b of blocks) {
    if (b.type !== "caselaw") continue;
    for (const it of b.items) {
      if (!it.ref || seen.has(it.ref)) continue;
      seen.add(it.ref);
      out.push({
        "@type": "CreativeWork",
        "name": `${it.court} — ${it.ref}`,
        "description": it.principle,
      });
    }
  }
  return out;
};

/** Il primo blocco `note` è la risposta in sintesi: è quello che va letto ad alta voce. */
const speakableOf = (blocks?: Block[]) =>
  blocks?.some((b) => b.type === "note")
    ? {
        "@type": "SpeakableSpecification",
        "cssSelector": [".ef-answer", "h1"],
      }
    : undefined;

const buildSchemas = (article: ArticleMeta, content?: Block[]) => {
  const url = `https://www.ediliziafiscale.it/guide/${article.slug}`;
  const image = coverUrl(article);
  const minutes = parseInt(article.readTime, 10);
  const citations = citationsOf(content);
  const speakable = speakableOf(content);
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": [image],
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": "https://www.ediliziafiscale.it/studio",
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.ediliziafiscale.it/#organization",
      "name": "Edilizia Fiscale",
      "url": "https://www.ediliziafiscale.it",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ediliziafiscale.it/favicon-512.png",
      },
    },
    "datePublished": toISODate(article.date) ?? article.date,
    "dateModified": toISODate(article.date) ?? article.date,
    "keywords": article.keywords?.join(", "),
    "articleSection": article.category,
    "inLanguage": "it-IT",
    "isAccessibleForFree": true,
    ...(Number.isFinite(minutes) ? { "timeRequired": `PT${minutes}M` } : {}),
    ...(content ? { "wordCount": wordCountOf(content) } : {}),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "about": {
      "@type": "Thing",
      "name": "Fiscalità e gestione delle imprese di costruzioni in Italia",
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Imprese di costruzioni e installazione, e i loro titolari",
    },
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    ...(citations.length ? { "citation": citations } : {}),
    ...(speakable ? { "speakable": speakable } : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ediliziafiscale.it/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guide",
        "item": "https://www.ediliziafiscale.it/guide",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.category,
        "item": `https://www.ediliziafiscale.it${categoriaPath(article.category) ?? "/guide"}`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": article.title,
        "item": url,
      },
    ],
  };

  const faqBlock = content?.find((b) => b.type === "faq");
  const faqSchema = faqBlock?.type === "faq"
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqBlock.items.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": plain(f.a) },
        })),
      }
    : null;

  return { articleSchema, breadcrumbSchema, faqSchema };
};

interface SidebarProps {
  article: Article;
  related: ArticleMeta[];
  onOpenContact: () => void;
}

const Sidebar = ({ article, related, onOpenContact }: SidebarProps) => {
  const [copied, setCopied] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const headings = article.content.filter(
    (b): b is { type: "h2"; text: string; id?: string } => b.type === "h2" && !!b.id
  );

  // URL canonico, non window.location: deve essere identico in SSR e in idratazione
  // (altrimenti React segnala un mismatch) ed è comunque l'URL che va condiviso.
  const articleUrl = abs(`/guide/${article.slug}`);

  // Scrollspy: track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id!);
      if (el) observer.observe(el);
    });
    observers.push(observer);
    return () => observers.forEach((o) => o.disconnect());
  }, [headings]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_e) {
      // ignore
    }
  };

  // Category counts across all articles
  const allCategories = Array.from(new Set(articlesMeta.map((a) => a.category)));

  return (
    <aside className="lg:sticky lg:top-24 space-y-5 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
      {/* Primary CTA card */}
      <div className="bg-gradient-to-br from-ink to-ink-light text-white rounded-2xl p-5 lg:p-6 shadow-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-brand/15 blur-2xl pointer-events-none" aria-hidden="true" />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-brand/15 text-brand rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 border border-brand/30">
            <Sparkles className="w-3 h-3" />
            Analisi dei numeri
          </div>
          <h3 className="text-lg font-bold mb-2 leading-tight">Vale anche per la tua impresa?</h3>
          <p className="text-white/75 text-sm leading-relaxed mb-4">
            Mandaci gli ultimi due bilanci e l'elenco delle commesse aperte: entro 2 giorni lavorativi ti
            diciamo cosa cambia nel tuo caso.
          </p>
          <Button
            onClick={onOpenContact}
            className="w-full bg-brand hover:bg-brand-dark text-ink font-bold mb-2"
          >
            Richiedi l'analisi <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-center gap-1.5 text-xs text-white/70 hover:text-brand mt-2">
            <Phone className="w-3.5 h-3.5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Author + meta card */}
      <div className="bg-white rounded-2xl p-5 border border-border">
        <div className="text-[10px] uppercase tracking-wider text-brand-dark font-bold mb-2">Autore</div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ink to-ink-light flex items-center justify-center text-brand font-bold text-sm">
            {article.author.split(" ").slice(-2).map((s) => s[0]).join("")}
          </div>
          <div className="min-w-0">
            <div className="font-bold text-ink text-sm leading-tight">{article.author}</div>
            <div className="text-xs text-foreground/60">Edilizia Fiscale</div>
          </div>
        </div>
        <div className="space-y-1.5 text-xs text-foreground/70 pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-brand-dark shrink-0" />
            <span>Pubblicato: {article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-brand-dark shrink-0" />
            <span>Lettura: {article.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-brand-dark shrink-0" />
            <span>Categoria: <strong className="text-ink">{article.category}</strong></span>
          </div>
        </div>
      </div>

      {/* Table of contents with scrollspy */}
      {headings.length >= 3 && (
        <div className="bg-muted/40 border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <List className="w-4 h-4 text-brand-dark" />
            <h3 className="font-bold text-ink text-sm">In questo articolo</h3>
          </div>
          <ol className="space-y-1.5 text-sm">
            {headings.map((h, i) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`flex items-start gap-2 py-1 px-2 rounded-md transition-colors border-l-2 ${
                    activeId === h.id
                      ? "bg-brand/10 text-ink font-semibold border-brand"
                      : "text-foreground/70 hover:text-ink hover:bg-white border-transparent"
                  }`}
                >
                  <span className={`tabular-nums shrink-0 text-xs mt-0.5 ${activeId === h.id ? "text-brand-dark font-bold" : "text-brand-dark/60"}`}>
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="leading-tight">{h.text}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Share buttons */}
      <div className="bg-white border border-border rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Share2 className="w-4 h-4 text-brand-dark" />
          <h3 className="font-bold text-ink text-sm">Condividi l'articolo</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-trust hover:text-white text-foreground/70 transition-colors"
            aria-label="Condividi su LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-[10px] font-semibold">LinkedIn</span>
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(article.title + " — " + articleUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-success hover:text-white text-foreground/70 transition-colors"
            aria-label="Condividi su WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-[10px] font-semibold">WhatsApp</span>
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent("Ti segnalo questo articolo: " + articleUrl)}`}
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-ink hover:text-white text-foreground/70 transition-colors"
            aria-label="Condividi via email"
          >
            <Mail className="w-4 h-4" />
            <span className="text-[10px] font-semibold">Email</span>
          </a>
          <button
            onClick={copyLink}
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-brand hover:text-ink text-foreground/70 transition-colors"
            aria-label="Copia link"
          >
            {copied ? <Check className="w-4 h-4 text-success" /> : <LinkIcon className="w-4 h-4" />}
            <span className="text-[10px] font-semibold">{copied ? "Copiato" : "Copia"}</span>
          </button>
        </div>
      </div>

      {/* Related articles compact */}
      {related.length > 0 && (
        <div className="bg-white border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-brand-dark" />
            <h3 className="font-bold text-ink text-sm">Articoli correlati</h3>
          </div>
          <ul className="space-y-3">
            {related.slice(0, 3).map((a) => (
              <li key={a.slug}>
                <Link
                  to={`/guide/${a.slug}`}
                  className="group flex items-start gap-3 hover:bg-muted/60 -mx-2 px-2 py-1.5 rounded-lg transition-colors"
                >
                  <ArticleCover article={a} className="shrink-0 w-12 h-12 rounded-lg" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-wider text-brand-dark font-bold leading-tight mb-0.5">
                      {a.category}
                    </div>
                    <div className="text-sm font-semibold text-ink leading-snug group-hover:text-brand-dark line-clamp-2">
                      {a.title}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/guide"
            className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-ink hover:text-brand-dark"
          >
            Tutte le guide <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Categories navigation */}
      <div className="bg-white border border-border rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4 text-brand-dark" />
          <h3 className="font-bold text-ink text-sm">Esplora per categoria</h3>
        </div>
        <ul className="space-y-1">
          {allCategories.map((cat) => {
            const count = articlesMeta.filter((a) => a.category === cat).length;
            return (
              <li key={cat}>
                <Link
                  to="/guide"
                  className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-muted text-sm transition-colors group"
                >
                  <span className={`font-medium ${article.category === cat ? "text-brand-dark" : "text-foreground/75 group-hover:text-ink"}`}>
                    {cat}
                  </span>
                  <span className="text-xs text-foreground/50 tabular-nums">{count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* FAQ mini-card */}
      <div className="bg-gradient-to-br from-brand/15 to-brand/5 border border-brand/40 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-brand-dark" />
          <h3 className="font-bold text-ink text-sm">Domande frequenti</h3>
        </div>
        <p className="text-xs text-foreground/75 leading-relaxed mb-3">
          Termini, garanzie, decreti ingiuntivi: risposte brevi con i riferimenti normativi.
        </p>
        <Link to="/domande-frequenti" className="text-xs font-bold text-ink hover:text-brand-dark inline-flex items-center gap-1">
          Vai alle domande frequenti <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </aside>
  );
};

/**
 * L'articolo arriva dalla rotta (una per slug, vedi App.tsx) già risolto: il
 * contenuto è disponibile in modo sincrono al primo render, quindi il corpo
 * finisce nell'HTML prerenderizzato e l'idratazione combacia, senza però che
 * tutte le guide finiscano nello stesso bundle.
 */
const Articolo = ({ article }: { article: Article }) => {
  const slug = article.slug;
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const related = getRelated(slug, 3);
  const { articleSchema, breadcrumbSchema, faqSchema } = buildSchemas(article, article.content);
  // SERP-length title/description (fallback to the long H1/excerpt if not tuned).
  const seo = getArticleSeo(slug);
  const seoTitle = seo?.seoTitle ?? `${article.title} | Edilizia Fiscale`;
  const seoDescription = seo?.metaDescription ?? article.excerpt;
  const ogImage = coverUrl(article);

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={article.keywords?.join(", ")}
        robots="index, follow, max-image-preview:large, max-snippet:-1"
        canonical={`https://www.ediliziafiscale.it/guide/${article.slug}`}
        ogType="article"
        ogTitle={article.title}
        ogDescription={article.excerpt}
        image={ogImage}
        extraMeta={[
          { name: "author", content: article.author },
          { property: "article:author", content: article.author },
          { property: "article:section", content: article.category },
          { property: "article:published_time", content: toISODate(article.date) ?? article.date },
          { property: "article:modified_time", content: toISODate(article.date) ?? article.date },
        ]}
        jsonLd={[articleSchema, breadcrumbSchema, faqSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <EFHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Article Hero — ink band; l'intro è il blocco di risposta diretta */}
          <section className="bg-ink text-white border-b border-white/10">
            <div className="container mx-auto px-4 py-10 lg:py-14">
              {/* Breadcrumb visibile: lo schema BreadcrumbList c'era già, la
                  navigazione corrispondente no. Google (e i motori di risposta)
                  si aspettano che i due coincidano. */}
              <nav aria-label="Percorso di navigazione" className="mb-6">
                <ol className="flex items-center gap-1.5 text-sm text-white/60 flex-wrap">
                  <li>
                    <Link to="/" className="hover:text-brand">Home</Link>
                  </li>
                  <li aria-hidden="true" className="text-white/30">/</li>
                  <li>
                    <Link to="/guide" className="hover:text-brand font-semibold text-white/80">Guide</Link>
                  </li>
                  <li aria-hidden="true" className="text-white/30">/</li>
                  <li>
                    <Link
                      to={categoriaPath(article.category) ?? "/guide"}
                      className="hover:text-brand"
                    >
                      {article.category}
                    </Link>
                  </li>
                </ol>
              </nav>
              <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12 items-center">
                <div className="max-w-4xl">
                <div className="flex items-center gap-3 flex-wrap mb-5">
                  <span className="px-3 py-1 rounded-full bg-brand/15 text-brand text-xs font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-sm text-white/60 flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Aggiornato: {article.date}</span>
                  <span className="text-sm text-white/60 flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
                  <span className="text-sm text-white/60 flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  {article.title}
                </h1>
                <div className="bg-white/5 border-l-4 border-brand rounded-r-xl p-5 lg:p-6">
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                    {article.intro}
                  </p>
                </div>
                </div>
                <ArticleCover
                  article={article}
                  eager
                  className="hidden lg:block rounded-2xl aspect-[4/3] shadow-soft"
                />
              </div>
            </div>
          </section>

          {/* Body with sidebar */}
          <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 max-w-7xl mx-auto">
                {/* Main content */}
                <div className="min-w-0">
                  <article>{article.content.map(renderBlock)}</article>

                  {/* CTA box */}
                  <div className="mt-12 bg-ink text-white rounded-2xl p-7 lg:p-9">
                    <h3 className="text-xl lg:text-2xl font-bold mb-3">Vuoi capire come si applica al tuo caso?</h3>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      Gli articoli del blog hanno carattere informativo. Per una valutazione concreta della tua posizione è sempre necessario un colloquio individuale con esame della documentazione.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={openContact}
                        className="bg-brand hover:bg-brand-dark text-ink font-semibold"
                      >
                        Richiedi l'analisi del caso <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-foreground/50 mt-10 leading-relaxed">
                    <strong>Disclaimer.</strong> Il presente articolo ha carattere meramente informativo. Non costituisce parere fiscale né sostituisce in alcun modo una consulenza personalizzata. La normativa tributaria e la prassi sono in costante evoluzione: per applicazioni concrete è necessario rivolgersi a un professionista abilitato, esaminando i numeri del caso specifico.
                  </p>
                </div>

                {/* Sidebar */}
                <Sidebar article={article} related={related} onOpenContact={openContact} />
              </div>
            </div>
          </section>

          {/* Related — full width grid below */}
          {related.length > 0 && (
            <section className="py-14 lg:py-20 bg-muted/40">
              <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8">Continua a leggere</h2>
                  <div className="grid md:grid-cols-3 gap-5">
                    {related.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/guide/${a.slug}`}
                        className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-brand hover:shadow-card flex flex-col"
                      >
                        <div className="relative">
                          <ArticleCover article={a} className="aspect-[16/9]" />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-ink text-xs font-semibold z-10">
                            {a.category}
                          </span>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="font-bold text-ink mb-2 leading-snug group-hover:text-brand-dark">{a.title}</h3>
                          <p className="text-sm text-foreground/70 leading-relaxed mb-3 flex-1">{a.excerpt}</p>
                          <span className="text-sm font-semibold text-ink group-hover:text-brand-dark flex items-center gap-1 mt-auto">
                            Leggi <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        <EFFooter />
        <EFContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <EFStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Articolo;
