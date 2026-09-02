import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Ui";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/carrello")({
  head: () => ({
    meta: [
      { title: "Carrello — Casa Laffranchi" },
      {
        name: "description",
        content: "Rivedi le bottiglie selezionate e procedi al checkout dimostrativo di Casa Laffranchi.",
      },
      { property: "og:title", content: "Carrello — Casa Laffranchi" },
      { property: "og:description", content: "Le bottiglie che hai selezionato dalla cantina." },
      { property: "og:url", content: "/carrello" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/carrello" }],
  }),
  component: CarrelloPage,
});

function CarrelloPage() {
  const { items, subtotal, setQty, remove, count } = useCart();
  const spedizione = subtotal === 0 ? 0 : subtotal >= 100 ? 0 : 9;

  return (
    <>
      <PageHero eyebrow="Il tuo ordine" title={<>Carrello</>} />

      <section className="section-y">
        <div className="container-editorial">
          {items.length === 0 ? (
            <Reveal className="mx-auto max-w-xl text-center">
              <p className="font-serif text-2xl italic text-muted-foreground">
                Il tuo carrello è vuoto.
              </p>
              <div className="mt-10 flex justify-center">
                <ButtonLink to="/shop">Scopri i vini</ButtonLink>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-16 lg:grid-cols-[1.7fr_1fr] lg:gap-24">
              <Reveal>
                <ul className="border-t border-line">
                  {items.map(({ product, qty }) => (
                    <li key={product.slug} className="grid grid-cols-[80px_1fr] gap-6 border-b border-line py-8 sm:grid-cols-[110px_1fr]">
                      <Photo
                        label={`Bottiglia ${product.nome}`}
                        ratio="3/4"
                        tone="cream"
                        zoom={false}
                        src={product.immagine}
                        fit="contain"
                      />
                      <div className="flex flex-col justify-between gap-5">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h2 className="text-[1.25rem]">
                              <Link to="/vini/$slug" params={{ slug: product.slug }} className="link-underline">
                                {product.nome}
                              </Link>
                            </h2>
                            <p className="mt-1 font-serif text-lg italic text-muted-foreground">
                              {product.tipologia} · {product.formatoFiltro}
                            </p>
                          </div>
                          <p className="font-display text-lg tracking-[0.14em] text-green">
                            {formatPrice(product.prezzo * qty)}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-6">
                          <div className="flex items-center border border-line">
                            <button
                              onClick={() => setQty(product.slug, qty - 1)}
                              aria-label={`Diminuisci quantità di ${product.nome}`}
                              className="px-4 py-3 font-display text-green"
                            >
                              −
                            </button>
                            <span className="min-w-8 text-center font-display text-green">{qty}</span>
                            <button
                              onClick={() => setQty(product.slug, qty + 1)}
                              aria-label={`Aumenta quantità di ${product.nome}`}
                              className="px-4 py-3 font-display text-green"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => remove(product.slug)}
                            className="link-underline font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground"
                          >
                            Rimuovi
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/shop" className="link-underline font-display text-[0.68rem] uppercase tracking-[0.3em] text-green">
                    ← Continua lo shopping
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="border border-line bg-cream p-10">
                  <h2 className="text-[1.4rem]">Riepilogo</h2>
                  <dl className="mt-8 space-y-4 border-t border-line pt-6 text-base">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Articoli</dt>
                      <dd className="text-foreground">{count}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Subtotale</dt>
                      <dd className="text-foreground">{formatPrice(subtotal)}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Spedizione</dt>
                      <dd className="text-foreground">
                        {spedizione === 0 ? "Omaggio" : formatPrice(spedizione)}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex items-baseline justify-between border-t border-line pt-6">
                    <span className="font-display text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                      Totale
                    </span>
                    <span className="font-display text-2xl tracking-[0.12em] text-green">
                      {formatPrice(subtotal + spedizione)}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Spedizione omaggio per ordini superiori a € 100,00.
                  </p>
                  <div className="mt-10">
                    <ButtonLink to="/checkout" variant="solid" className="w-full">
                      Procedi al checkout
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
