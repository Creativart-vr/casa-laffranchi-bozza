import { createFileRoute } from "@tanstack/react-router";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, SectionTitle } from "@/components/Ui";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/casa-laffranchi")({
  head: () => ({
    meta: [
      { title: "Casa Laffranchi — La storia della famiglia" },
      {
        name: "description",
        content:
          "Tre generazioni sui colli di Castenedolo: la storia, i valori e le persone di Casa Laffranchi, azienda vitivinicola familiare bresciana.",
      },
      { property: "og:title", content: "Casa Laffranchi — La storia della famiglia" },
      {
        property: "og:description",
        content: "Tre generazioni sui colli di Castenedolo, tra vigna, cantina e tavola.",
      },
      { property: "og:url", content: "/casa-laffranchi" },
    ],
    links: [{ rel: "canonical", href: "/casa-laffranchi" }],
  }),
  component: CasaPage,
});

const tappe = [
  { anno: "1958", titolo: "Le prime viti", testo: "La famiglia impianta i primi filari sui terrazzamenti morenici di Castenedolo." },
  { anno: "1979", titolo: "La cantina", testo: "Nasce la cantina di famiglia: la vinificazione entra definitivamente in azienda." },
  { anno: "2004", titolo: "Le etichette", testo: "Prendono forma i vini che ancora oggi ci rappresentano: Burtulì, Rocolet, Valens." },
  { anno: "Oggi", titolo: "La terza generazione", testo: "Stessa collina, stessa cura: poche bottiglie, tutte seguite a mano." },
];

function CasaPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title={<>Casa Laffranchi</>}
        intro="Una famiglia, una collina, un modo di fare vino che non ha mai avuto fretta."
      />

      <section className="section-y">
        <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionTitle align="left" title={<>Radici<br />in collina</>} subtitle="Castenedolo" />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Castenedolo sorge su un rilievo isolato nella pianura bresciana: sabbie, ghiaie e fossili
              marini che regalano ai vini una mineralità inconfondibile. È qui che la nostra famiglia
              coltiva le proprie vigne da tre generazioni.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              L'azienda agricola Contrini Pasquina custodisce oggi lo stesso gesto di allora: potare,
              attendere, raccogliere. Il resto lo fa la collina.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Photo label="Foto ritratto di famiglia" ratio="4/5" tone="cream" />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-cream section-y">
        <div className="container-editorial">
          <Reveal>
            <SectionTitle title="Le nostre tappe" subtitle="Una linea del tempo" />
          </Reveal>
          <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {tappe.map((t, i) => (
              <Reveal key={t.anno} delay={i * 80} className="bg-cream px-8 py-12">
                <p className="font-display text-[2.4rem] leading-none text-green">{t.anno}</p>
                <h3 className="mt-6 text-[1.1rem]">{t.titolo}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t.testo}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Photo label="Foto mani e grappoli" ratio="1/1" tone="ivory" />
          </Reveal>
          <Reveal delay={100}>
            <SectionTitle align="left" title={<>Il nostro<br />modo di fare vino</>} subtitle="Valori" />
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {[
                ["Rese basse", "Poche uve per pianta, per avere concentrazione senza pesantezza."],
                ["Raccolta a mano", "Vendemmia in cassetta, selezione grappolo per grappolo."],
                ["Tempo", "Affinamenti lunghi, nessuna scorciatoia tecnologica."],
                ["Territorio", "Solo uve delle nostre vigne di Castenedolo."],
              ].map(([t, d]) => (
                <li key={t} className="py-6">
                  <p className="font-display text-[0.95rem] uppercase tracking-[0.22em] text-green">{t}</p>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ButtonLink to="/vigna-cantina">Vigna &amp; Cantina</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-green">
        <div className="container-editorial py-24 text-center lg:py-32">
          <Reveal>
            <p className="eyebrow text-white/70">Il nostro invito</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-[2rem] text-white sm:text-[2.8rem]">
              Il vino si capisce davvero solo dove nasce
            </h2>
            <div className="mt-10 flex justify-center">
              <ButtonLink to="/contatti" variant="onDark">
                Vieni a trovarci
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
