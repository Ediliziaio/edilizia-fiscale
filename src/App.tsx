import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "./pages/NotFound";
import type { Article } from "./data/articles";
import { faqEntries } from "./data/faq";
import { categorie } from "./data/categorie";

/**
 * Ogni pagina è un chunk a parte.
 *
 * vite-react-ssg risolve `lazy` prima di idratare (matchRoutes + await sul
 * modulo, in index.mjs), quindi lo split non introduce nessun disallineamento
 * con l'HTML prerenderizzato: la pagina resta completa nel sorgente statico e
 * il browser scarica solo il codice della rotta che sta aprendo.
 */
const page = (load: () => Promise<{ default: React.ComponentType }>) => async () => ({
  Component: (await load()).default,
});

/**
 * Una rotta per guida, non una rotta `/guide/:slug` sola.
 *
 * Le 56 guide sono circa un megabyte di testo. Con una rotta parametrica il
 * componente articolo deve poterle leggere tutte in modo sincrono — perché
 * l'HTML statico contiene già il corpo dell'articolo e l'idratazione deve
 * corrispondere — e finivano tutte nel bundle di ogni pagina, home compresa.
 * Generando una rotta per slug, il testo della guida diventa il chunk della sua
 * rotta: si scarica solo quando qualcuno apre quella guida.
 */
const articleModules = import.meta.glob<{ article: Article }>("./data/articles/*.ts");

const articleRoutes: RouteRecord[] = Object.entries(articleModules).map(([path, load]) => {
  const slug = path.slice("./data/articles/".length, -".ts".length);
  return {
    path: `guide/${slug}`,
    lazy: async () => {
      const [{ default: Articolo }, mod] = await Promise.all([import("./pages/Articolo"), load()]);
      return { Component: () => <Articolo article={mod.article} /> };
    },
  };
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * Porta in cima a ogni cambio pagina — tranne quando la URL indica un'ancora.
 * Le guide linkano i termini del glossario come /glossario#costi-a-finire:
 * azzerare lo scroll lì significa scaricare il lettore in cima a una pagina di
 * ventinove definizioni, cioè rompere il link che gli avevamo promesso.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Su una rotta lazy il bersaglio può non essere ancora nel DOM quando
      // l'effetto parte: si riprova per mezzo secondo e si smette appena lo si
      // trova. Con setTimeout e non requestAnimationFrame, perché in una scheda
      // in background i frame non vengono serviti e il link non arriverebbe mai
      // a destinazione.
      const id = decodeURIComponent(hash.slice(1));
      let attempts = 0;
      let timer = 0 as unknown as ReturnType<typeof setTimeout>;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ block: "start", behavior: "auto" });
          return;
        }
        if (attempts++ < 20) timer = setTimeout(tryScroll, 25);
      };
      tryScroll();
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
};

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, lazy: page(() => import("./pages/Index")) },
      { path: "imprese", lazy: page(() => import("./pages/Imprese")) },
      { path: "patrimonio", lazy: page(() => import("./pages/Patrimonio")) },
      { path: "studio", lazy: page(() => import("./pages/Studio")) },
      { path: "studio/come-lavoriamo", lazy: page(() => import("./pages/ComeLavoriamo")) },
      { path: "guide", lazy: page(() => import("./pages/Guide")) },
      {
        path: "guide/categoria/:slug",
        lazy: page(() => import("./pages/Categoria")),
        getStaticPaths: () => categorie.map((c) => `/guide/categoria/${c.slug}`),
      },
      ...articleRoutes,
      { path: "domande-frequenti", lazy: page(() => import("./pages/DomandeFrequenti")) },
      {
        path: "domande-frequenti/:slug",
        lazy: page(() => import("./pages/DomandaSingola")),
        getStaticPaths: () => faqEntries.map((f) => `/domande-frequenti/${f.slug}`),
      },
      { path: "glossario", lazy: page(() => import("./pages/Glossario")) },
      { path: "contatti", lazy: page(() => import("./pages/Contatti")) },
      { path: "privacy", lazy: page(() => import("./pages/Privacy")) },
      { path: "cookie", lazy: page(() => import("./pages/CookiePolicy")) },
      { path: "note-legali", lazy: page(() => import("./pages/NoteLegali")) },
      { path: "*", element: <NotFound /> },
    ],
  },
];
