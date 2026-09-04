import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, SectionTitle } from "@/components/Ui";
import { PageHero } from "@/components/PageHero";
import { citazioni, numeri, site, valori } from "@/data/site";
import { media } from "@/data/media";

export const Route = createFileRoute("/casa-laffranchi")({
  head: () => ({
    meta: [
      { title: "Casa Laffranchi — La nostra storia di famiglia" },
      {
        name: "description",
        content:
          "Azienda Agricola Contrini Pasquina, Castenedolo (BS): conduzione interamente famigliare, terreni argillosi morenici e vigne esposte al sole del mattino.",
      },
      { property: "og:title", content: "Casa Laffranchi — La nostra storia di famiglia" },
      {
        property: "og:description",
        content: "Una storia di famiglia, raccontata in ogni bottiglia. Castenedolo, nel cuore del bresciano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/casa-laffranchi" },
    ],
    links: [{ rel: "canonical", href: "/casa-laffranchi" }],
  }),
  component: CasaPage,
});

function CasaPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title={<>La nostra storia</>}
        intro="Tutto comincia da una famiglia e da una collina di Castenedolo."
      />

      <section className="section-y">
        <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionTitle
              align="left"
              title={<>Nel cuore<br />del bresciano</>}
              subtitle="Azienda Agricola Contrini Pasquina"
            />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              L'Azienda Agricola Contrini Pasquina nasce a Castenedolo, nel cuore del bresciano. Una
              conduzione interamente famigliare che cura la vigna e la cantina con le proprie mani, in ogni
              fase — senza intermediari e senza compromessi.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Su terreni argillosi morenici coltiviamo vigne esposte al sole del mattino, che danno vita a
              vini di carattere autentico: espressione vera del territorio dei colli di Castenedolo.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Photo
              label="La casa e la collina di Casa Laffranchi a Castenedolo"
              ratio="4/5"
              tone="cream"
              src={media.casaCollina}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-cream section-y">
        <div className="container-editorial">
          <Reveal>
            <SectionTitle title="I nostri valori" subtitle="Come lavoriamo" />
          </Reveal>
          <div className="mt-16 grid gap-px bg-line sm:grid-cols-3">
            {valori.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="bg-cream px-8 py-12">
                <p className="font-display text-[0.62rem] uppercase tracking-[0.32em] text-muted-foreground">
                  Il nostro valore — {["uno", "due", "tre"][i]}
                </p>
                <h3 className="mt-6 text-[1.3rem]">{v.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-editorial">
          <Reveal>
            <SectionTitle title={<>Casa Laffranchi<br />in numeri</>} subtitle="Una misura concreta" />
          </Reveal>
          <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {numeri.map((n, i) => (
              <Reveal key={n.label} delay={i * 80} className="bg-background px-8 py-14 text-center">
                <span aria-hidden className="mx-auto mb-8 block h-px w-10 bg-green" />
                <p
                  className={cn(
                    "font-display leading-none text-green",
                    n.valore.length > 4
                      ? "text-[1.15rem] tracking-[0.18em] sm:text-[1.25rem]"
                      : "text-[3.4rem] sm:text-[3.8rem]",
                  )}
                >
                  {n.valore}
                </p>
                <p className="mt-4 font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                  {n.label}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mx-auto mt-12 max-w-xl text-center font-serif text-lg italic text-muted-foreground">
              Dati reali, misurati sulla nostra terra. Le cifre mancanti saranno aggiornate appena
              disponibili.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Photo
              label="Grappoli raccolti a mano durante la vendemmia"
              ratio="1/1"
              tone="ivory"
              src={media.uvaMano}
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionTitle align="left" title={<>Il nostro<br />modo di fare vino</>} subtitle="In vigna e in cantina" />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Si raccoglie grappolo per grappolo, a mano, con la stessa attenzione di sempre. Per i rossi si
              aspetta oltre metà ottobre: la pazienza è il primo ingrediente.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              La produzione resta volutamente piccola: ogni bottiglia passa dalle nostre mani, dal filare
              alla cantina.
            </p>
            <p className="mt-5 font-serif text-2xl italic leading-relaxed text-muted-foreground">
              “{citazioni.terra.testo}”
            </p>
            <p className="mt-3 font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
              — {citazioni.terra.autore}
            </p>
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
            <p className="mt-8 font-serif text-xl italic text-white/70">
              {site.address.street} — {site.address.city}
            </p>
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
