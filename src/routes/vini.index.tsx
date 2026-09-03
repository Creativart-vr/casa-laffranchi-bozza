import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type ReactElement } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/Ui";
import { products, type Product } from "@/data/products";
import { media } from "@/data/media";

export const Route = createFileRoute("/vini/")({
  head: () => ({
    meta: [
      { title: "I nostri vini — Casa Laffranchi" },
      {
        name: "description",
        content:
          "La carta dei vini di Casa Laffranchi: bianchi, rosati, spumanti metodo classico, rossi, passito, magnum e distillati dai colli di Castenedolo.",
      },
      { property: "og:title", content: "I nostri vini — Casa Laffranchi" },
      {
        property: "og:description",
        content: "La carta completa delle etichette di Casa Laffranchi, dal Valens al passito San Bartolomeo.",
      },
      { property: "og:url", content: "/vini" },
    ],
    links: [{ rel: "canonical", href: "/vini" }],
  }),
  component: ViniPage,
});

const LinkAny = Link as unknown as (props: Record<string, unknown>) => ReactElement;

const euro = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(n);

function WineRow({ product }: { product: Product }) {
  return (
    <LinkAny
      to="/vini/$slug"
      params={{ slug: product.slug }}
      className="group flex items-baseline justify-between gap-6 border-b border-line py-6"
    >
      <span className="min-w-0">
        <span className="block font-display text-[1.05rem] uppercase tracking-[0.14em] text-green transition-opacity duration-500 group-hover:opacity-60 sm:text-[1.25rem]">
          {product.nome}
        </span>
        <span className="mt-1 block font-serif text-[0.98rem] italic text-muted-foreground">
          {product.tipologia}, {product.formato}
        </span>
      </span>
      <span className="shrink-0 font-serif text-[0.98rem] italic text-green">
        {euro(product.prezzo)}
      </span>
    </LinkAny>
  );
}

function WineList({ items }: { items: Product[] }) {
  return (
    <div className="border-t border-line">
      {items.map((p) => (
        <WineRow key={p.slug} product={p} />
      ))}
    </div>
  );
}

function ViniPage() {
  const carta = products.filter(
    (p) => p.categoria !== "Formati speciali" && p.categoria !== "Distillati",
  );
  const formati = products.filter((p) => p.categoria === "Formati speciali");
  const distillati = products.filter((p) => p.categoria === "Distillati");

  return (
    <>
      <PageHero
        eyebrow="La carta"
        title={<>I nostri vini</>}
        intro="Una sola collina, nove etichette. Dalla vigna di Castenedolo alla bottiglia, senza scorciatoie."
      />

      {/* Manifesto + carta dei vini, alla maniera di una wine list editoriale */}
      <section className="section-y">
        <div className="container-editorial grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-40">
              <h2 className="max-w-md text-[2rem] leading-[1.06] sm:text-[2.7rem]">
                Equilibrio in ogni bottiglia.
                <br />
                Il carattere di una collina.
              </h2>
              <div className="mt-6 flex items-center gap-5">
                <span className="h-px w-10 bg-line" />
                <p className="font-serif text-[1rem] italic text-muted-foreground">
                  Vini dei colli, Castenedolo
                </p>
              </div>
              <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
                Ogni etichetta nasce dalle stesse vigne, vendemmiate a mano e vinificate in cantina
                con tempi lunghi. La carta si legge come un percorso: si comincia dai bianchi e
                dalle bollicine, si prosegue con i rossi e si chiude con il passito.
              </p>
              <div className="mt-12 overflow-hidden">
                <img
                  src={media.vignetoFilari}
                  alt="Filari del vigneto di Casa Laffranchi a Castenedolo"
                  loading="lazy"
                  className="h-[360px] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <WineList items={carta} />
          </Reveal>
        </div>
      </section>

      {/* Formati speciali e distillati su due colonne */}
      <section className="pb-24 lg:pb-32">
        <div className="container-editorial grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div>
              <p className="eyebrow">Formati speciali</p>
              <div className="mt-8">
                <WineList items={formati} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className="eyebrow">Distillati</p>
              <div className="mt-8">
                <WineList items={distillati} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Striscia fotografica a tutta larghezza */}
      <section aria-label="La vigna e la cantina">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { src: media.uvaMano, alt: "Grappolo raccolto a mano durante la vendemmia" },
            { src: media.barrique, alt: "Barrique in cantina durante l'affinamento" },
            { src: media.vignetoAutunno, alt: "Il vigneto in autunno" },
            { src: media.casaCollina, alt: "La casa sulla collina di Castenedolo" },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="img-zoom h-[240px] w-full object-cover md:h-[320px]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Invito allo shop */}
      <section className="section-y bg-ivory">
        <div className="container-editorial text-center">
          <Reveal>
            <p className="eyebrow">Ordina le bottiglie</p>
            <h2 className="mx-auto mt-5 max-w-2xl text-[1.9rem] leading-[1.08] sm:text-[2.6rem]">
              Le stesse etichette, pronte per essere spedite
            </h2>
            <p className="mx-auto mt-7 max-w-xl leading-relaxed text-muted-foreground">
              Nello shop trovi ogni vino con fotografia, scheda tecnica e disponibilità.
            </p>
            <div className="mt-10">
              <ButtonLink to="/shop">Vai allo shop</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
