import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";
import { categories, categoryLabels, products } from "@/data/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/vini/")({
  head: () => ({
    meta: [
      { title: "I nostri vini — Casa Laffranchi" },
      {
        name: "description",
        content:
          "Bianchi, rosati, spumanti metodo classico, rossi, passito e distillati: tutte le etichette di Casa Laffranchi, Castenedolo.",
      },
      { property: "og:title", content: "I nostri vini — Casa Laffranchi" },
      {
        property: "og:description",
        content: "Nove etichette dai colli di Castenedolo, dal Valens al passito San Bartolomeo.",
      },
      { property: "og:url", content: "/vini" },
    ],
    links: [{ rel: "canonical", href: "/vini" }],
  }),
  component: ViniPage,
});

function ViniPage() {
  const [cat, setCat] = useState<string>("Tutti");
  const list = cat === "Tutti" ? products : products.filter((p) => p.categoria === cat);

  return (
    <>
      <PageHero
        eyebrow="Il catalogo"
        title={<>I nostri vini</>}
        intro="Nove etichette che raccontano una sola collina, dalle bollicine metodo classico al passito."
      />

      <section className="section-y">
        <div className="container-editorial">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 border-y border-line py-6">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  data-active={cat === c}
                  className={cn(
                    "link-underline font-display text-[0.68rem] uppercase tracking-[0.3em] transition-colors",
                    cat === c ? "text-green" : "text-muted-foreground hover:text-green",
                  )}
                >
                  {categoryLabels[c]}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
