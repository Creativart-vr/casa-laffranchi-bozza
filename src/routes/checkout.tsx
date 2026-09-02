import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { ActionButton, ButtonLink } from "@/components/Ui";
import { PageHero } from "@/components/PageHero";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Casa Laffranchi" },
      {
        name: "description",
        content: "Checkout dimostrativo del prototipo Casa Laffranchi: nessun pagamento reale viene elaborato.",
      },
      { property: "og:title", content: "Checkout — Casa Laffranchi" },
      { property: "og:description", content: "Conferma il tuo ordine dimostrativo." },
      { property: "og:url", content: "/checkout" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/checkout" }],
  }),
  component: CheckoutPage,
});

function Field({
  label,
  name,
  type = "text",
  required = true,
  className,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  autoComplete?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-3 w-full border-0 border-b border-line bg-transparent py-3 text-base text-foreground focus:border-green focus:outline-none"
      />
    </div>
  );
}

function CheckoutPage() {
  const { items, subtotal, count, clear } = useCart();
  const [done, setDone] = useState<string | null>(null);
  const spedizione = subtotal === 0 ? 0 : subtotal >= 100 ? 0 : 9;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ordine = `CL-${Math.floor(100000 + Math.random() * 899999)}`;
    setDone(ordine);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (done) {
    return (
      <>
        <PageHero eyebrow="Grazie" title={<>Ordine confermato</>} />
        <section className="section-y">
          <Reveal className="container-editorial mx-auto max-w-2xl text-center">
            <p className="font-serif text-2xl italic text-muted-foreground">
              Il tuo ordine dimostrativo <span className="text-green">{done}</span> è stato registrato.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Questo è un prototipo: nessun pagamento è stato elaborato e nessuna bottiglia verrà spedita.
              Nella versione definitiva riceverai una email di conferma con i dettagli della spedizione.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <ButtonLink to="/shop">Torna allo shop</ButtonLink>
              <ButtonLink to="/" variant="light">
                Home
              </ButtonLink>
            </div>
          </Reveal>
        </section>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <PageHero eyebrow="Checkout" title={<>Nessun articolo</>} />
        <section className="section-y">
          <Reveal className="container-editorial text-center">
            <p className="font-serif text-2xl italic text-muted-foreground">
              Il carrello è vuoto: aggiungi qualche bottiglia per procedere.
            </p>
            <div className="mt-10 flex justify-center">
              <ButtonLink to="/shop">Vai allo shop</ButtonLink>
            </div>
          </Reveal>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Ultimo passo"
        title={<>Checkout</>}
        intro="Checkout dimostrativo: i dati inseriti non vengono inviati né conservati."
      />

      <section className="section-y">
        <div className="container-editorial grid gap-16 lg:grid-cols-[1.6fr_1fr] lg:gap-24">
          <Reveal>
            <form onSubmit={onSubmit} className="space-y-14">
              <fieldset>
                <legend className="text-[1.3rem] font-medium">Dati di fatturazione</legend>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <Field label="Nome" name="nome" autoComplete="given-name" />
                  <Field label="Cognome" name="cognome" autoComplete="family-name" />
                  <Field label="Email" name="email" type="email" autoComplete="email" />
                  <Field label="Telefono" name="telefono" type="tel" autoComplete="tel" />
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-[1.3rem] font-medium">Indirizzo di spedizione</legend>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <Field label="Indirizzo" name="indirizzo" className="sm:col-span-2" autoComplete="street-address" />
                  <Field label="Città" name="citta" autoComplete="address-level2" />
                  <Field label="CAP" name="cap" autoComplete="postal-code" />
                  <Field label="Provincia" name="provincia" autoComplete="address-level1" />
                  <Field label="Note per il corriere" name="note" required={false} />
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-[1.3rem] font-medium">Metodo di pagamento</legend>
                <div className="mt-8 divide-y divide-line border-y border-line">
                  {[
                    ["carta", "Carta di credito", "Demo — nessun addebito reale."],
                    ["bonifico", "Bonifico bancario", "Riceverai l'IBAN via email."],
                    ["contrassegno", "Ritiro in cantina", "Paghi al ritiro a Castenedolo."],
                  ].map(([id, label, hint], i) => (
                    <label key={id} className="flex cursor-pointer items-start gap-4 py-5">
                      <input
                        type="radio"
                        name="pagamento"
                        value={id}
                        defaultChecked={i === 0}
                        className="mt-1.5 accent-green"
                      />
                      <span>
                        <span className="block font-display text-[0.8rem] uppercase tracking-[0.22em] text-green">
                          {label}
                        </span>
                        <span className="mt-1 block text-sm text-muted-foreground">{hint}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="flex items-start gap-4 text-sm text-muted-foreground">
                <input type="checkbox" required className="mt-1 accent-green" />
                <span>
                  Dichiaro di essere maggiorenne e accetto i termini di vendita di questo prototipo.
                </span>
              </label>

              <ActionButton type="submit" variant="solid">
                Conferma ordine
              </ActionButton>
            </form>
          </Reveal>

          <Reveal delay={100}>
            <aside className="border border-line bg-cream p-10">
              <h2 className="text-[1.4rem]">Il tuo ordine</h2>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {items.map(({ product, qty }) => (
                  <li key={product.slug} className="flex justify-between gap-6 py-4">
                    <span className="text-base text-foreground">
                      {product.nome} <span className="text-muted-foreground">× {qty}</span>
                    </span>
                    <span className="font-display tracking-[0.1em] text-green">
                      {formatPrice(product.prezzo * qty)}
                    </span>
                  </li>
                ))}
              </ul>
              <dl className="mt-6 space-y-3 text-base">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Articoli</dt>
                  <dd>{count}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Spedizione</dt>
                  <dd>{spedizione === 0 ? "Omaggio" : formatPrice(spedizione)}</dd>
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
              <p className="mt-6 text-sm text-muted-foreground">
                Modifica le quantità dal{" "}
                <Link to="/carrello" className="link-underline text-green">
                  carrello
                </Link>
                .
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
