import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";
import { categories, categoryLabels, products } from "@/data/products";
import { trustPoints } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop online — Casa Laffranchi" },
      {
        name: "description",
        content:
          "Acquista online i vini di Casa Laffranchi: filtra per tipologia, formato e prezzo e ricevi le bottiglie direttamente dalla cantina di Castenedolo.",
      },
      { property: "og:title", content: "Shop online — Casa Laffranchi" },
      {
        property: "og:description",
        content: "Vini, magnum e distillati acquistabili direttamente dalla cantina.",
      },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

const formati = ["Tutti", "50 cl", "75 cl", "1,5 L"] as const;
const ordinamenti = [
  { id: "default", label: "Ordine predefinito" },
  { id: "prezzo-asc", label: "Prezzo crescente" },
  { id: "prezzo-desc", label: "Prezzo decrescente" },
  { id: "nome", label: "Nome A–Z" },
] as const;

function ShopPage() {
  const [cat, setCat] = useState<string>("Tutti");
  const [formato, setFormato] = useState<string>("Tutti");
  const [sort, setSort] = useState<string>("default");

  const list = useMemo(() => {
    let l = products.filter(
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
      <PageHero
        eyebrow="Shop"
        title={<>Acquista online</>}
        intro="Le nostre bottiglie, spedite direttamente dalla cantina. Checkout dimostrativo di questo prototipo."
      />

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
              {formati.map((f) => (
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
