import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import Imprese from "./pages/Imprese";
import Patrimonio from "./pages/Patrimonio";
import Studio from "./pages/Studio";
import ComeLavoriamo from "./pages/ComeLavoriamo";
import Guide from "./pages/Guide";
import Articolo from "./pages/Articolo";
import DomandeFrequenti from "./pages/DomandeFrequenti";
import DomandaSingola from "./pages/DomandaSingola";
import Contatti from "./pages/Contatti";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import NoteLegali from "./pages/NoteLegali";
import NotFound from "./pages/NotFound";
import { articlesMeta } from "./data/articlesMeta";
import { faqEntries } from "./data/faq";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
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
      { index: true, element: <Index /> },
      { path: "imprese", element: <Imprese /> },
      { path: "patrimonio", element: <Patrimonio /> },
      { path: "studio", element: <Studio /> },
      { path: "studio/come-lavoriamo", element: <ComeLavoriamo /> },
      { path: "guide", element: <Guide /> },
      {
        path: "guide/:slug",
        element: <Articolo />,
        getStaticPaths: () => articlesMeta.map((a) => `/guide/${a.slug}`),
      },
      { path: "domande-frequenti", element: <DomandeFrequenti /> },
      {
        path: "domande-frequenti/:slug",
        element: <DomandaSingola />,
        getStaticPaths: () => faqEntries.map((f) => `/domande-frequenti/${f.slug}`),
      },
      { path: "contatti", element: <Contatti /> },
      { path: "privacy", element: <Privacy /> },
      { path: "cookie", element: <CookiePolicy /> },
      { path: "note-legali", element: <NoteLegali /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
