import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Photo } from "@/components/Photo";
import { ProductCardPreview } from "@/components/ProductCardPreview";
import { Reveal } from "@/components/Reveal";
import { ActionButton, ButtonLink, SectionTitle } from "@/components/Ui";
import {
  getPreviewProduct,
  relatedPreviewProducts,
  type PreviewProduct,
} from "@/data/products-preview";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/vini-preview/$slug")({
  loader: ({ params }) => {
    const product = getPreviewProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.nome ?? "Prodotto"} — Anteprima Casa Laffranchi` },
      { name: "description", content: "Anteprima interna della scheda tecnica prodotto Casa Laffranchi." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: `${loaderData?.product.nome ?? "Prodotto"} — Anteprima Casa Laffranchi` },
      { property: "og:description", content: "Anteprima interna della scheda tecnica prodotto Casa Laffranchi." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProductPreviewPage,
});

function Spec({ label, value }: { label: string; value: string | undefined }) {
  if (!value) return null;
  return (
    <div className="grid grid-cols-[9rem_1fr] gap-6 border-b border-line py-4 max-sm:grid-cols-1 max-sm:gap-2">
      <dt className="font-display text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">{label}</dt>
      <dd className="text-base leading-relaxed text-foreground">{value}</dd>
    </div>
  );
}

function ProductPreviewPage() {
  const { product } = Route.useLoaderData() as { product: PreviewProduct };
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const esaurito = product.disponibilita === "esaurito";
  const limitata = product.disponibilita === "limitata";
  const correlati = relatedPreviewProducts(product.slug);

  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="container-editorial py-14 lg:py-20">
          <nav aria-label="Percorso" className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            <Link to="/" className="link-underline">Home</Link>
            <span className="px-3">/</span>
            <Link to="/shop-preview" className="link-underline">Shop — Anteprima</Link>
            <span className="px-3">/</span>
            <span className="text-green">{product.nome}</span>
          </nav>

          <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <Photo
                label={`Bottiglia ${product.nome} — Casa Laffranchi`}
                ratio="4/5"
                tone="ivory"
                src={product.immagine}
                fit="contain"
              />
            </Reveal>
            <Reveal delay={100} className="flex flex-col justify-center">
              <p className="eyebrow">{product.tipologia}</p>
              <h1 className="mt-4 text-[2.6rem] leading-none sm:text-[3.6rem]">{product.nome}</h1>
              <p className="mt-6 font-serif text-2xl italic text-muted-foreground">{product.descrizioneBreve}</p>
              <p className="mt-8 font-display text-2xl tracking-[0.14em] text-green">{formatPrice(product.prezzo)}</p>
              <p className="mt-2 font-display text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">Formato {product.formato}</p>

              {(esaurito || limitata) && (
                <p className={`mt-6 w-fit border border-line px-4 py-2 font-display text-[0.62rem] uppercase tracking-[0.3em] ${esaurito ? "text-muted-foreground" : "text-green"}`}>
                  {esaurito ? "Esaurito" : "Disponibilità limitata"}
                </p>
              )}

              <div className="mt-10 flex flex-wrap items-stretch gap-4">
                <div className={`flex items-center border border-line ${esaurito ? "opacity-45" : ""}`}>
                  <button onClick={() => setQty((value) => Math.max(1, value - 1))} disabled={esaurito} aria-label="Diminuisci quantità" className="px-5 py-4 font-display text-green">−</button>
                  <span aria-live="polite" className="min-w-10 text-center font-display text-green">{qty}</span>
                  <button onClick={() => setQty((value) => value + 1)} disabled={esaurito} aria-label="Aumenta quantità" className="px-5 py-4 font-display text-green">+</button>
                </div>
                {esaurito ? (
                  <span aria-disabled="true" className="inline-flex items-center border border-line px-8 font-display text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground/60">Aggiungi al carrello</span>
                ) : (
                  <ActionButton
                    variant="solid"
                    onClick={() => {
                      add(product.slug, qty);
                      setAdded(true);
                      setTimeout(() => setAdded(false), 2200);
                    }}
                  >
                    {added ? "Aggiunto ✓" : "Aggiungi al carrello"}
                  </ActionButton>
                )}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Spedizione in Italia in 48–72 ore. Ordine minimo consigliato: 6 bottiglie.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-editorial grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal><SectionTitle align="left" title="Scheda tecnica" subtitle="Il prodotto in dettaglio" /></Reveal>
          <Reveal delay={100}>
            <dl className="border-t border-line">
              <Spec label="Vitigni" value={product.vitigno} />
              <Spec label="Varietà" value={product.varieta} />
              <Spec label="Metodo" value={product.metodo} />
              <Spec label="Origine" value={product.origine} />
              <Spec label="Colore" value={product.colore} />
              <Spec label="Profumo" value={product.profumo} />
              <Spec label="Gusto" value={product.gusto} />
              <Spec label="Gastronomia" value={product.gastronomia} />
              <Spec label="Gradazione" value={product.gradazione} />
              <Spec label="Temperatura di servizio" value={product.temperatura} />
              <Spec label="Servizio" value={product.servizio} />
              <Spec label="Formato" value={product.formato} />
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-ivory section-y">
        <div className="container-editorial">
          <Reveal><SectionTitle title="Potrebbe interessarti" subtitle="Altre etichette" /></Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {correlati.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}><ProductCardPreview product={item} /></Reveal>
            ))}
          </div>
          <div className="mt-16 flex justify-center"><ButtonLink to="/shop-preview" variant="light">Vai allo shop</ButtonLink></div>
        </div>
      </section>
    </>
  );
}