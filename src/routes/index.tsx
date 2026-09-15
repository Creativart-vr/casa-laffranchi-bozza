import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, SectionTitle } from "@/components/Ui";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { site, trustPoints, valori } from "@/data/site";
import { logoUfficiale, media } from "@/data/media";

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

const heroNavigation = [
  { label: "Casa Laffranchi", to: "/casa-laffranchi" as const },
  { label: "Vigna & Cantina", to: "/vigna-cantina" as const },
  { label: "I nostri vini", to: "/vini" as const },
  { label: "Contatti", to: "/contatti" as const },
];

function Home() {
  const selezione = products.filter((p) =>
    ["valens", "caelestis", "andreas", "burtuli"].includes(p.slug),
  );

  return (
    <>
      {/* HERO VIDEO */}
      <section className="relative isolate h-[100svh] min-h-screen w-full overflow-hidden bg-foreground">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/video/home-casa-laffranchi.webm" type="video/webm" />
          <source src="/video/home-casa-laffranchi.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-foreground/40" aria-hidden="true" />
        <h1 className="sr-only">Casa Laffranchi — Vino pregiato dei colli di Castenedolo</h1>

        <div className="absolute inset-0 flex items-center justify-center px-8 pb-24 sm:pb-20">
          <img
            src={logoUfficiale}
            alt="Casa Laffranchi"
            className="h-auto w-[min(72vw,340px)] object-contain sm:w-[min(48vw,420px)]"
          />
        </div>

        <nav
          aria-label="Navigazione principale della homepage"
          className="absolute inset-x-5 bottom-[calc(env(safe-area-inset-bottom)+7.5rem)] sm:inset-x-8 sm:bottom-[calc(env(safe-area-inset-bottom)+3rem)]"
        >
          <ul className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6 lg:gap-12">
            {heroNavigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="link-underline font-display text-[0.95rem] uppercase tracking-[0.24em] text-white focus-visible:outline-white lg:tracking-[0.3em]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute right-5 top-[calc(env(safe-area-inset-top)+1.5rem)] sm:right-8 lg:right-12">
          <Link
            to="/shop"
            className="link-underline font-display text-[0.95rem] uppercase tracking-[0.3em] text-white focus-visible:outline-white"
          >
            Shop
          </Link>
        </div>

        <div className="absolute bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] right-5 flex flex-col items-end gap-1 font-display text-[0.8rem] uppercase tracking-[0.24em] text-white sm:bottom-[calc(env(safe-area-inset-bottom)+2rem)] sm:right-8 lg:right-12" aria-label="Selezione lingua">
          <span aria-current="true">ITA</span>
          <span className="cursor-not-allowed opacity-55" aria-disabled="true">ENG</span>
          <span className="cursor-not-allowed opacity-55" aria-disabled="true">DEU</span>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="editorial-vineyard-background vineyard-position-left section-y">
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
