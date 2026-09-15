import { createFileRoute } from "@tanstack/react-router";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, SectionTitle } from "@/components/Ui";
import { PageHero } from "@/components/PageHero";
import { citazioni, site, valori } from "@/data/site";
import { media } from "@/data/media";

export const Route = createFileRoute("/casa-laffranchi-preview")({
  head: () => ({
    meta: [
      { title: "Anteprima — Casa Laffranchi" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CasaPreviewPage,
});

function CasaPreviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title={<>La nostra storia</>}
        intro="Tutto comincia da una famiglia e da una collina di Castenedolo."
        backgroundImage={media.casaHero}
      />

      <section className="editorial-vineyard-background vineyard-position-right section-y">
        <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionTitle
              align="left"
              title={<>A un passo<br />dal Lago di Garda</>}
              subtitle="Casa Laffranchi"
            />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Casa Laffranchi è il nome con cui l’Azienda Agricola Contrini Pasquina porta avanti una
              storia fatta di passione, dedizione e legame profondo con la propria terra.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Tutto nasce da Andrea Laffranchi e Pasquina Contrini che, insieme ai figli, hanno dato vita
              all’azienda agricola seguendo personalmente ogni processo di gestione e coltivazione dei
              terreni. Un progetto di famiglia vissuto in prima persona, giorno dopo giorno.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              È proprio questo clima famigliare, unito alla passione e all’amore per la terra, a garantire
              la genuinità e la qualità che contraddistinguono ogni prodotto Casa Laffranchi.
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

      <section className="editorial-vineyard-background vineyard-position-left section-y">
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
            <SectionTitle
              align="left"
              title={<>Dalla terra<br />alla bottiglia</>}
              subtitle="In vigna e in cantina"
            />
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
