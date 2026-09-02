import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, SectionTitle } from "@/components/Ui";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { site, trustPoints } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Laffranchi — Vini dei Colli di Castenedolo" },
      {
        name: "description",
        content:
          "Azienda vitivinicola familiare a Castenedolo: Valens, Andreas, Burtulì, Rocolet e San Bartolomeo. Acquista online i vini dei colli bresciani.",
      },
      { property: "og:title", content: "Casa Laffranchi — Vini dei Colli di Castenedolo" },
      {
        property: "og:description",
        content: "Vino pregiato dei Colli di Castenedolo. Una famiglia, una collina, poche bottiglie fatte bene.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const selezione = products.filter((p) =>
    ["valens", "andreas", "burtuli", "san-bartolomeo"].includes(p.slug),
  );

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="container-editorial pt-10 lg:pt-16">
          <div className="relative">
            <Photo label="Foto vigneto — colli di Castenedolo" ratio="16/9" tone="ivory" zoom={false} className="hidden md:block" />
            <Photo label="Foto vigneto" ratio="4/5" tone="ivory" zoom={false} className="md:hidden" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
              <div className="max-w-3xl text-center">
                <Reveal>
                  <p className="eyebrow">Dal 1958, a Castenedolo</p>
                  <h1 className="mt-5 text-[2.4rem] leading-[1.02] sm:text-[3.6rem] lg:text-[5rem]">
                    Vino pregiato
                    <br />
                    dei Colli di Castenedolo
                  </h1>
                </Reveal>
              </div>
            </div>
          </div>
          <Reveal delay={120} className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <ButtonLink to="/vini">Scopri i vini</ButtonLink>
            <ButtonLink to="/shop" variant="light">
              Acquista online
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="section-y">
        <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Photo label="Foto famiglia in cantina" ratio="4/5" tone="cream" />
          </Reveal>
          <Reveal delay={100}>
            <SectionTitle
              align="left"
              title={<>Una storia di famiglia,<br />raccontata in ogni bottiglia</>}
              subtitle="Casa Laffranchi"
            />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Coltiviamo poche pertiche sui colli morenici di Castenedolo, dove il terreno ghiaioso e la
              brezza del lago disegnano vini sapidi e sinceri. Ogni vendemmia è raccolta a mano dalla
              famiglia e vinificata in azienda, senza fretta.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Non cerchiamo grandi numeri: cerchiamo bottiglie che raccontino esattamente da dove vengono.
            </p>
            <div className="mt-10">
              <ButtonLink to="/casa-laffranchi">La nostra storia</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CIFRE */}
      <section className="border-y border-line bg-cream">
        <div className="container-editorial grid divide-line py-16 sm:grid-cols-3 sm:divide-x">
          {[
            { n: "1958", l: "Prima vendemmia di famiglia" },
            { n: "9", l: "Etichette in produzione" },
            { n: "100%", l: "Vinificazione in azienda" },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="px-6 py-8 text-center sm:py-4">
              <p className="font-display text-[3rem] leading-none text-green">{s.n}</p>
              <p className="mt-4 font-serif text-lg italic text-muted-foreground">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SELEZIONE */}
      <section className="section-y">
        <div className="container-editorial">
          <Reveal>
            <SectionTitle title="La selezione" subtitle="Le nostre etichette" />
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {selezione.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <ButtonLink to="/vini" variant="light">
              Tutti i vini
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* VIGNA & CANTINA */}
      <section className="bg-green">
        <div className="container-editorial grid items-center gap-14 py-24 lg:grid-cols-2 lg:gap-24 lg:py-32">
          <Reveal>
            <p className="eyebrow text-white/70">Vigna &amp; Cantina</p>
            <h2 className="mt-5 text-[2.2rem] text-white sm:text-[3rem]">
              Il tempo è
              <br />
              il nostro unico additivo
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
              Potatura corta, rese basse, raccolta manuale in cassetta. In cantina lavoriamo con
              fermentazioni lente e lunghi affinamenti, perché il vino trovi da sé il proprio equilibrio.
            </p>
            <div className="mt-10">
              <ButtonLink to="/vigna-cantina" variant="onDark">
                Scopri il metodo
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Photo label="Foto filari all'alba" ratio="4/3" tone="green" />
          </Reveal>
        </div>
      </section>

      {/* SHOP / TRUST */}
      <section className="section-y">
        <div className="container-editorial">
          <Reveal>
            <SectionTitle title="Acquista online" subtitle="Direttamente dalla cantina" />
          </Reveal>
          <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-3">
            {trustPoints.map((t, i) => (
              <Reveal key={t.title} delay={i * 90} className="bg-background px-8 py-12 text-center">
                <h3 className="text-[1.15rem]">{t.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <ButtonLink to="/shop" variant="solid">
              Vai allo shop
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* VISITA */}
      <section className="border-t border-line bg-ivory">
        <div className="container-editorial py-24 text-center lg:py-32">
          <Reveal>
            <p className="eyebrow">Vieni a trovarci</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-[2rem] sm:text-[2.8rem]">
              Degustazioni in cantina su appuntamento
            </h2>
            <p className="mx-auto mt-8 max-w-xl font-serif text-xl italic text-muted-foreground">
              {site.address.street} — {site.address.city}
            </p>
            <div className="mt-10 flex justify-center">
              <ButtonLink to="/contatti">Prenota una visita</ButtonLink>
            </div>
            <p className="mt-10 font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
              oppure scrivici a{" "}
              <Link to="/contatti" className="link-underline text-green">
                {site.email}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
