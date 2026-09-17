import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";
import { Photo } from "./Photo";

export function ProductCard({ product, showAdd = true }: { product: Product; showAdd?: boolean }) {
  const { add } = useCart();
  const esaurito = product.disponibilita === "esaurito";
  const limitata = product.disponibilita === "limitata";

  return (
    <article className="group flex h-full flex-col">
      <Link to="/vini/$slug" params={{ slug: product.slug }} className="block" tabIndex={-1} aria-hidden="true">
        <Photo
          label={`Bottiglia ${product.nome} — Casa Laffranchi`}
          ratio="3/4"
          tone="cream"
          src={product.immagine}
          fit="contain"
        />
      </Link>
      <div className="mt-6 flex flex-1 flex-col text-center">
        <p className="font-display text-[0.62rem] uppercase tracking-[0.32em] text-muted-foreground">
          {product.categoria}
        </p>
        <h3 className="mt-3 text-[1.35rem]">
          <Link to="/vini/$slug" params={{ slug: product.slug }} className="link-underline">
            {product.nome}
          </Link>
        </h3>
        <p className="mt-2 font-serif text-lg italic text-muted-foreground">{product.descrizioneBreve}</p>
        <p className="mt-4 font-display text-base tracking-[0.16em] text-green">
          {formatPrice(product.prezzo)} <span className="text-muted-foreground">· {product.formatoFiltro}</span>
        </p>

        {(esaurito || limitata) && (
          <p
            className={[
              "mx-auto mt-5 border border-line px-4 py-2 font-display text-[0.62rem] uppercase tracking-[0.3em]",
              esaurito ? "text-muted-foreground" : "text-green",
            ].join(" ")}
          >
            {esaurito ? "Esaurito" : "Disponibilità limitata"}
          </p>
        )}

        {showAdd && (
          <div className="mt-5 flex justify-center">
            {esaurito ? (
              <span
                aria-disabled="true"
                className="border border-line px-6 py-3 font-display text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground/60"
              >
                Aggiungi al carrello
              </span>
            ) : (
              <button
                onClick={() => add(product.slug)}
                className="border border-line px-6 py-3 font-display text-[0.65rem] uppercase tracking-[0.3em] text-green transition-colors duration-500 hover:bg-green hover:text-white"
              >
                Aggiungi al carrello
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
