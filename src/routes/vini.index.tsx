import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type ReactElement } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
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
      <span className="shrink-0 text-right">
        <span className="block font-serif text-[0.98rem] italic text-green">
          {euro(product.prezzo)}
        </span>
        <span className="block font-display text-[0.52rem] uppercase tracking-[0.28em] text-muted-foreground">
          IVA inclusa
        </span>
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

/* ——— Carosello delle etichette, subito sotto l'intro ——— */

function slideText(p: Product) {
  const parti = [
    p.profumo ? `Al naso: ${p.profumo.toLowerCase()}.` : null,
    p.gusto ? `In bocca è ${p.gusto.toLowerCase()}.` : null,
    p.gastronomia ? `A tavola accompagna ${p.gastronomia.toLowerCase()}.` : null,
  ].filter(Boolean);
  return parti.join(" ");
}

function WineSlider({ items }: { items: Product[] }) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const go = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => window.clearInterval(id);
  }, [total]);

  const p = items[index] ?? items[0];
  if (!p) return null;

  return (
    <section aria-label="Le etichette in evidenza" className="relative overflow-hidden bg-cream">
      <div className="container-editorial relative grid items-center gap-10 py-16 md:px-24 lg:grid-cols-2 lg:gap-20 lg:px-28 lg:py-24 xl:px-32">
        {/* Testo */}
        <div key={p.slug} className="slide-in max-w-xl">
          <p className="eyebrow">{p.categoria}</p>
          <h2 className="mt-4 text-[2.6rem] leading-[1.02] sm:text-[3.4rem]">{p.nome}</h2>
          <p className="mt-3 font-display text-[0.95rem] uppercase tracking-[0.28em] text-foreground">
            {p.tipologia}
          </p>
          <p className="mt-7 leading-relaxed text-muted-foreground">{slideText(p)}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-5">
            <LinkAny
              to="/vini/$slug"
              params={{ slug: p.slug }}
              className="link-underline font-display text-[0.95rem] uppercase tracking-[0.22em] text-green"
            >
              Scopri di più
            </LinkAny>
            <span className="flex flex-col items-end">
              <span className="font-serif text-[1.05rem] italic text-green">{euro(p.prezzo)}</span>
              <span className="font-display text-[0.52rem] uppercase tracking-[0.28em] text-muted-foreground">IVA inclusa</span>
            </span>
          </div>
        </div>

        {/* Bottiglia */}
        <div className="relative flex items-center justify-center">
          <img
            key={p.slug}
            src={p.immagine}
            alt={`Bottiglia di ${p.nome}, ${p.tipologia}`}
            className="slide-in max-h-[420px] w-auto object-contain lg:max-h-[520px]"
          />
        </div>

        {/* Frecce laterali, fuori dalle aree di testo e immagine */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Vino precedente"
          className="absolute left-8 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ivory text-green transition-opacity duration-500 hover:opacity-60 md:flex lg:left-10"
        >
          <ArrowLeft className="h-5 w-5" strokeWidth={1.25} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Vino successivo"
          className="absolute right-8 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ivory text-green transition-opacity duration-500 hover:opacity-60 md:flex lg:right-10"
        >
          <ArrowRight className="h-5 w-5" strokeWidth={1.25} />
        </button>
      </div>

      {/* Navigazione mobile su una riga dedicata */}
      <div className="flex items-center justify-center gap-3 pb-6 md:hidden">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Vino precedente"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ivory text-green transition-opacity duration-500 hover:opacity-60"
        >
          <ArrowLeft className="h-5 w-5" strokeWidth={1.25} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Vino successivo"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ivory text-green transition-opacity duration-500 hover:opacity-60"
        >
          <ArrowRight className="h-5 w-5" strokeWidth={1.25} />
        </button>
      </div>

      {/* Indicatori */}
      <div className="relative flex items-center justify-center gap-3 pb-10">
        {items.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Vai a ${item.nome}`}
            className={`h-px transition-all duration-500 ${
              i === index ? "w-10 bg-green" : "w-6 bg-line hover:bg-green-soft"
            }`}
          />
        ))}
      </div>
    </section>
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
      <section className="relative isolate flex min-h-[360px] items-center overflow-hidden border-b border-line bg-foreground lg:min-h-[440px]">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img
            src="/images/header-vini-casa-laffranchi.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="container-editorial py-20 text-center lg:py-28">
          <Reveal>
            <p className="eyebrow text-white">La carta</p>
            <h1 className="mx-auto mt-5 max-w-4xl text-[2.4rem] leading-[1.02] text-white sm:text-[3.4rem] lg:text-[4.4rem]">
              I nostri vini
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Carosello delle etichette */}
      <WineSlider items={carta.filter((p) => p.immagine)} />

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
                Ogni etichetta nasce dalle stesse vigne di famiglia, le cui uve vengono raccolte al
                momento giusto e vinificate in cantina con tempi lunghi. Produciamo in quantità
                contenute, dedicando cura a ogni fase della lavorazione.
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
              Nello shop trovi ogni vino con fotografia, scheda tecnica e disponibilità — finché
              l'annata lo permette.
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
