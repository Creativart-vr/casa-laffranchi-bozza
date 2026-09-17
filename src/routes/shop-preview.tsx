import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProductCardPreview } from "@/components/ProductCardPreview";
import { categories, categoryLabels } from "@/data/products";
import { previewFormati, previewProducts } from "@/data/products-preview";
import { trustPoints } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop-preview")({
  head: () => ({
    meta: [
      { title: "Anteprima Shop — Casa Laffranchi" },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content: "Anteprima interna dell'aggiornamento catalogo Casa Laffranchi.",
      },
      { property: "og:title", content: "Anteprima Shop — Casa Laffranchi" },
      { property: "og:description", content: "Anteprima interna dell'aggiornamento catalogo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ShopPreviewPage,
});

const ordinamenti = [
  { id: "default", label: "Ordine predefinito" },
  { id: "prezzo-asc", label: "Prezzo crescente" },
  { id: "prezzo-desc", label: "Prezzo decrescente" },
  { id: "nome", label: "Nome A–Z" },
] as const;

function ShopPreviewPage() {
  const [cat, setCat] = useState<string>("Tutti");
  const [formato, setFormato] = useState<string>("Tutti");
  const [sort, setSort] = useState<string>("default");

  const list = useMemo(() => {
    let l = previewProducts.filter(
      (p) =>
        (cat === "Tutti" || p.categoria === cat) &&
        (formato === "Tutti" || p.formatoFiltro === formato),
    );
    if (sort === "prezzo-asc") l = [...l].sort((a, b) => a.prezzo - b.prezzo);
    if (sort === "prezzo-desc") l = [...l].sort((a, b) => b.prezzo - a.prezzo);
    if (sort === "nome") l = [...l].sort((a, b) => a.nome.localeCompare(b.nome, "it"));
    return l;
  }, [cat, formato, sort]);

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line bg-ivory">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img
            src="/images/header-shop-casa-laffranchi.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="container-editorial py-20 text-center lg:py-28">
          <Reveal>
            <p className="eyebrow text-white">Shop</p>
            <h1 className="mx-auto mt-5 max-w-4xl text-[2.4rem] leading-[1.02] text-white sm:text-[3.4rem] lg:text-[4.4rem]">
              Acquista online
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white">
              Le nostre bottiglie, spedite direttamente dalla cantina.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-editorial">
          <Reveal className="border-y border-line py-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  data-active={cat === c}
                  className={cn(
                    "link-underline font-display text-[0.68rem] uppercase tracking-[0.3em]",
                    cat === c ? "text-green" : "text-muted-foreground hover:text-green",
                  )}
                >
                  {categoryLabels[c]}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-6">
              <span className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                Formato
              </span>
              {previewFormati.map((f) => (
                <button
                  key={f}
                  onClick={() => setFormato(f)}
                  data-active={formato === f}
                  className={cn(
                    "link-underline font-display text-[0.68rem] uppercase tracking-[0.24em]",
                    formato === f ? "text-green" : "text-muted-foreground hover:text-green",
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-4">
              <span className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                Ordina
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-line bg-transparent px-4 py-2 font-display text-[0.68rem] uppercase tracking-[0.2em] text-green focus:border-green focus:outline-none"
              >
                {ordinamenti.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="mt-6 font-serif text-lg italic text-muted-foreground">
            {list.length} {list.length === 1 ? "prodotto" : "prodotti"}
          </p>

          {list.length === 0 ? (
            <p className="py-24 text-center font-serif text-2xl italic text-muted-foreground">
              Nessun prodotto corrisponde ai filtri selezionati.
            </p>
          ) : (
            <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 80}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-line bg-ivory">
        <div className="container-editorial grid gap-px bg-line sm:grid-cols-3">
          {trustPoints.map((t, i) => (
            <Reveal key={t.title} delay={i * 80} className="bg-ivory px-8 py-14 text-center">
              <h2 className="text-[1.1rem]">{t.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
