import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, SectionTitle } from "@/components/Ui";
import { PageHero } from "@/components/PageHero";
import { citazioni } from "@/data/site";
import { galleriaVigna, media } from "@/data/media";

export const Route = createFileRoute("/vigna-cantina")({
  head: () => ({
    meta: [
      { title: "Vigna & Cantina — Il processo | Casa Laffranchi" },
      {
        name: "description",
        content:
          "Il vigneto, la vendemmia manuale, la vinificazione con pressatura soffice e l'affinamento in barrique: il processo di Casa Laffranchi a Castenedolo.",
      },
      { property: "og:title", content: "Vigna & Cantina — Casa Laffranchi" },
      {
        property: "og:description",
        content: "Il tempo è il nostro ingrediente segreto: dal filare alla bottiglia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/vigna-cantina" },
    ],
    links: [{ rel: "canonical", href: "/vigna-cantina" }],
  }),
  component: VignaPage,
});

const fasi = [
  [
    "I",
    "Il vigneto",
    "Radici che affondano in terre argillose moreniche, esposte al primo sole del mattino. Ogni filare racconta anni di cura, di mani che conoscono la vite come si conosce un vecchio amico fidato.",
  ],
  [
    "II",
    "La vendemmia",
    "Il momento più atteso dell'anno. Si raccoglie grappolo per grappolo, a mano, con la stessa attenzione di sempre. Per i rossi si aspetta oltre metà ottobre: la pazienza è il primo ingrediente.",
  ],
  [
    "III",
    "La vinificazione",
    "Pressatura soffice, temperature bassissime, separazione immediata delle bucce. Non interveniamo: accompagniamo. Ogni uva deve poter raccontare la propria storia, senza forzature e senza fretta.",
  ],
  [
    "IV",
    "L'affinamento",
    "Il tempo è il nostro ingrediente segreto. Barrique di rovere per i rossi, inox per il rosato, metodo classico per gli spumanti. Aspettiamo che ogni vino trovi la propria voce.",
  ],
] as const;

function VignaPage() {
  return (
    <>
      <PageHero
        eyebrow="Il processo"
        title={<>Vigna &amp; Cantina</>}
        intro="Dal terreno argilloso morenico alla bottiglia: ogni passaggio è seguito a mano, in azienda."
      />

      <section className="section-y">
        <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionTitle align="left" title={<>Un terreno<br />che si sente nel calice</>} subtitle="Il vigneto" />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              I nostri filari crescono su terre argillose moreniche, esposte al primo sole del mattino. Ogni
              filare racconta anni di cura, di mani che conoscono la vite come si conosce un vecchio amico
              fidato.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              È da qui che nascono la mineralità di Valens e Andreas e la struttura piena di Burtulì e
              Rocolet.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Photo label="Filari del vigneto Casa Laffranchi" ratio="4/5" tone="cream" src={media.vignetoFilari} />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-cream section-y">
        <div className="container-editorial">
          <Reveal>
            <SectionTitle title="Dalla vite alla bottiglia" subtitle="Quattro tempi, ogni anno" />
          </Reveal>
          <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {fasi.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 70} className="bg-cream px-8 py-12">
                <p className="font-display text-[0.8rem] tracking-[0.4em] text-muted-foreground">{n}</p>
                <h3 className="mt-6 text-[1.2rem]">{t}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-editorial grid gap-10 lg:grid-cols-3">
          <Reveal>
            <Photo label="Lavorazione tra i filari con il trattore" ratio="3/4" tone="ivory" src={media.trattoreVigna} />
          </Reveal>
          <Reveal delay={90}>
            <Photo label="Vendemmia manuale a Casa Laffranchi" ratio="3/4" tone="cream" src={media.vendemmiaMano} />
          </Reveal>
          <Reveal delay={180}>
            <Photo label="Il vigneto in autunno" ratio="3/4" tone="ivory" src={media.vignetoAutunno} />
          </Reveal>
        </div>
        <div className="container-editorial mt-16">
          <Reveal>
            <p className="mx-auto max-w-2xl text-center font-serif text-2xl italic leading-relaxed text-muted-foreground">
              “{citazioni.terra.testo}”
              <span className="mt-3 block font-display text-[0.62rem] uppercase not-italic tracking-[0.3em]">
                — {citazioni.terra.autore}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-green">
        <div className="container-editorial grid items-center gap-14 py-24 lg:grid-cols-2 lg:gap-24 lg:py-32">
          <Reveal>
            <p className="eyebrow text-white/70">Metodo Classico</p>
            <h2 className="mt-5 text-[2rem] text-white sm:text-[2.8rem]">
              Andreas, la nostra
              <br />
              rifermentazione in bottiglia
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
              Da uve Cabernet Sauvignon nasce il nostro Extra Brut metodo classico: presa di spuma in
              bottiglia, perlage fine, gusto secco ed elegante.
            </p>
            <div className="mt-10">
              <ButtonLink to="/vini/$slug" params={{ slug: "andreas" }} variant="onDark">
                Scopri Andreas
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Photo label="Barrique di rovere in cantina" ratio="4/3" tone="green" src={media.barrique} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
