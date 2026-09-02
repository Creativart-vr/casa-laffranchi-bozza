import { createFileRoute } from "@tanstack/react-router";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, SectionTitle } from "@/components/Ui";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/vigna-cantina")({
  head: () => ({
    meta: [
      { title: "Vigna & Cantina — Casa Laffranchi" },
      {
        name: "description",
        content:
          "Terreno morenico, rese basse, vendemmia manuale e affinamenti lenti: il metodo di vigna e cantina di Casa Laffranchi a Castenedolo.",
      },
      { property: "og:title", content: "Vigna & Cantina — Casa Laffranchi" },
      {
        property: "og:description",
        content: "Il metodo di lavoro tra i filari e in cantina, dalla potatura all'affinamento.",
      },
      { property: "og:url", content: "/vigna-cantina" },
    ],
    links: [{ rel: "canonical", href: "/vigna-cantina" }],
  }),
  component: VignaPage,
});

const fasi = [
  ["01", "Potatura", "Potatura corta invernale per contenere la produzione e concentrare i grappoli."],
  ["02", "Gestione verde", "Sfogliatura e diradamento manuale: luce e aria arrivano fino al grappolo."],
  ["03", "Vendemmia", "Raccolta a mano in cassetta, scaglionata secondo la maturazione di ogni parcella."],
  ["04", "Vinificazione", "Fermentazioni lente e macerazioni calibrate sul carattere di ogni vitigno."],
  ["05", "Affinamento", "Acciaio, legno e bottiglia: il tempo necessario, mai quello comodo."],
  ["06", "Imbottigliamento", "Poche migliaia di bottiglie all'anno, tutte seguite in azienda."],
];

function VignaPage() {
  return (
    <>
      <PageHero
        eyebrow="Il metodo"
        title={<>Vigna &amp; Cantina</>}
        intro="Dal terreno morenico alla bottiglia: ogni passaggio è manuale, lento e verificato in azienda."
      />

      <section className="section-y">
        <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionTitle align="left" title={<>Un terreno<br />che si sente nel calice</>} subtitle="La vigna" />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              I nostri filari crescono su suoli ghiaiosi e argillosi di origine morenica, ricchi di scheletro
              e ben drenati. È un terreno severo, che costringe la vite a scendere in profondità: da lì
              arrivano la sapidità e la mineralità che riconoscete in Valens e Andreas.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Le vigne più argillose, verso il piede della collina, danno invece struttura e frutto scuro:
              sono la casa di Burtulì.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Photo label="Foto terreno morenico" ratio="4/5" tone="cream" />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-cream section-y">
        <div className="container-editorial">
          <Reveal>
            <SectionTitle title="Dalla vite alla bottiglia" subtitle="Sei gesti, ogni anno" />
          </Reveal>
          <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {fasi.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 70} className="bg-cream px-8 py-12">
                <p className="font-display text-[0.7rem] tracking-[0.4em] text-muted-foreground">{n}</p>
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
            <Photo label="Foto botti in cantina" ratio="3/4" tone="ivory" />
          </Reveal>
          <Reveal delay={90}>
            <Photo label="Foto vendemmia manuale" ratio="3/4" tone="cream" />
          </Reveal>
          <Reveal delay={180}>
            <Photo label="Foto affinamento in bottiglia" ratio="3/4" tone="ivory" />
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
              Da uve Cabernet Sauvignon vinificate in bianco nasce il nostro Extra Brut: presa di spuma in
              bottiglia, lunga sosta sui lieviti, perlage fine e persistente.
            </p>
            <div className="mt-10">
              <ButtonLink to="/vini/$slug" params={{ slug: "andreas" }} variant="onDark">
                Scopri Andreas
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Photo label="Foto pupitre e bottiglie" ratio="4/3" tone="green" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
