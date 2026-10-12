import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-[5rem] leading-none">404</h1>
        <p className="mt-6 font-serif text-2xl italic text-muted-foreground">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex border border-green px-8 py-4 font-display text-[0.72rem] uppercase tracking-[0.32em] text-green transition-colors duration-500 hover:bg-green hover:text-white"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: import("@tanstack/react-router").ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-[2rem]">Questa pagina non si è caricata</h1>
        <p className="mt-4 font-serif text-xl italic text-muted-foreground">
          Si è verificato un problema. Puoi riprovare o tornare alla home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-green px-8 py-4 font-display text-[0.7rem] uppercase tracking-[0.3em] text-green transition-colors duration-500 hover:bg-green hover:text-white"
          >
            Riprova
          </button>
          <a
            href="/"
            className="border border-line px-8 py-4 font-display text-[0.7rem] uppercase tracking-[0.3em] text-green transition-colors duration-500 hover:bg-green hover:text-white"
          >
            Torna alla home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Casa Laffranchi — Vini dei Colli di Castenedolo" },
      {
        name: "description",
        content:
          "Casa Laffranchi, azienda vitivinicola familiare di Castenedolo: vini pregiati dei colli bresciani.",
      },
      { name: "author", content: "Casa Laffranchi" },
      { property: "og:site_name", content: "Casa Laffranchi" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Winery",
          name: "Casa Laffranchi",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Giovanni Bettoni, 42",
            addressLocality: "Castenedolo",
            postalCode: "25014",
            addressCountry: "IT",
          },
          telephone: "+39 338 8834457",
          email: "info@casalaffranchi.it",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {/* Required: nested routes render here. */}
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}
