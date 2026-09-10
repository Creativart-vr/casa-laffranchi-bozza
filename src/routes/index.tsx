import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, SectionTitle } from "@/components/Ui";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { citazioni, site, trustPoints, valori } from "@/data/site";
import { media } from "@/data/media";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Laffranchi — Vino pregiato dei colli di Castenedolo" },
      {
        name: "description",
        content:
          "Azienda Agricola Contrini Pasquina, Castenedolo (BS): Valens, Caelestis, Andreas, Burtulì, Rocolet, San Bartolomeo. Vini a conduzione familiare, acquistabili online.",
      },
      { property: "og:title", content: "Casa Laffranchi — Vino pregiato dei colli di Castenedolo" },
      {
        property: "og:description",
        content: "Una storia di famiglia, raccontata in ogni bottiglia. Vini dei colli di Castenedolo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const selezione = products.filter((p) =>
    ["valens", "caelestis", "andreas", "burtuli"].includes(p.slug),
  );

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="container-editorial pt-10 lg:pt-16">
          <div className="relative">
            <Photo
              label="Vigneto Casa Laffranchi sui colli di Castenedolo"
              ratio="16/9"
              tone="ivory"
              zoom={false}
              src={media.heroVigneto}
              position="center center"
              className="hidden md:block"
            />
            <Photo
              label="Vigneto Casa Laffranchi"
              ratio="4/5"
              tone="ivory"
              zoom={false}
              src={media.heroVigneto}
              position="55% center"
              className="md:hidden"
            />
            <div className="pointer-events-none absolute inset-0 bg-green/25" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
              <div className="max-w-3xl text-center">
                <Reveal>
                  <p className="eyebrow text-white/80">Castenedolo (BS)</p>
                  <h1 className="mt-5 text-[2.4rem] leading-[1.02] text-white sm:text-[3.6rem] lg:text-[5rem]">
                    Vino pregiato
                    <br />
                    dei colli di Castenedolo
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
          <Reveal delay={180}>
            <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-xl italic leading-relaxed text-muted-foreground">
              “{citazioni.galilei.testo}”
              <span className="mt-3 block font-display text-[0.62rem] uppercase not-italic tracking-[0.3em]">
                — {citazioni.galilei.autore}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="section-y">
        <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Photo
              label="La casa e i filari di Casa Laffranchi a Castenedolo"
              ratio="4/5"
              tone="cream"
              src={media.casaAerea}
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionTitle
              align="left"
              title={<>Una famiglia, una collina,<br />poche bottiglie fatte bene</>}
              subtitle="Casa Laffranchi"
            />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              L'Azienda Agricola Contrini Pasquina nasce a Castenedolo, nel cuore del bresciano. Una
              conduzione interamente famigliare che cura la vigna e la cantina con le proprie mani, in ogni
              fase — senza intermediari e senza compromessi.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Su terreni argillosi morenici coltiviamo vigne esposte al sole del mattino. Le quantità restano
              quelle che la collina concede: poche bottiglie per annata, seguite una a una, dalla vigna
              all'etichetta.
            </p>
            <div className="mt-10">
              <ButtonLink to="/casa-laffranchi">La nostra storia</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALORI */}
      <section className="border-y border-line bg-cream">
        <div className="container-editorial grid divide-line py-16 sm:grid-cols-3 sm:divide-x">
          {valori.map((v, i) => (
            <Reveal key={v.title} delay={i * 90} className="px-6 py-8 text-center sm:py-4">
              <p className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                Il nostro valore
              </p>
              <h2 className="mt-5 text-[1.35rem] text-green">{v.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SELEZIONE */}
      <section className="section-y">
        <div className="container-editorial">
          <Reveal>
            <SectionTitle title="Le nostre etichette" subtitle="La selezione" />
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
              il nostro ingrediente segreto
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
              Barrique di rovere per i rossi, inox per il rosato, metodo classico per gli spumanti.
              Aspettiamo che ogni vino trovi la propria voce, la propria identità.
            </p>
            <div className="mt-10">
              <ButtonLink to="/vigna-cantina" variant="onDark">
                Scopri il metodo
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Photo
              label="Barrique di rovere nella cantina di Casa Laffranchi"
              ratio="4/3"
              tone="green"
              src={media.bottiCantina}
            />
          </Reveal>
        </div>
      </section>

      {/* SHOP / TRUST */}
      <section className="section-y">
        <div className="container-editorial">
          <Reveal>
            <SectionTitle title="Shop online" subtitle="Acquisto diretto" />
          </Reveal>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            Ordina i vini della nostra collina direttamente dal sito — consegna in tutta Italia, finché
            l'annata è disponibile. Bottiglie singole o confezioni regalo.
          </p>
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
              Siamo a Castenedolo, in provincia di Brescia
            </h2>
            <p className="mx-auto mt-8 max-w-xl font-serif text-xl italic text-muted-foreground">
              {site.address.street} — {site.address.city}
            </p>
            <div className="mt-10 flex justify-center">
              <ButtonLink to="/contatti">Contattaci</ButtonLink>
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
