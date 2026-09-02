import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { ActionButton, SectionTitle } from "@/components/Ui";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { site } from "@/data/site";
import { media } from "@/data/media";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti e visite — Casa Laffranchi" },
      {
        name: "description",
        content:
          "Dove siamo, come raggiungerci e come prenotare una degustazione in cantina a Castenedolo (BS). Scrivici o chiamaci.",
      },
      { property: "og:title", content: "Contatti e visite — Casa Laffranchi" },
      { property: "og:description", content: "Via Giovanni Bettoni 42, Castenedolo (BS). Visite su appuntamento." },
      { property: "og:url", content: "/contatti" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: ContattiPage,
});

function ContattiPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title={<>Vieni a trovarci</>}
        intro="La cantina è aperta su appuntamento: degustazioni guidate, visita ai filari e vendita diretta."
      />

      <section className="section-y">
        <div className="container-editorial grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <SectionTitle align="left" title={<>Dove siamo</>} subtitle="Castenedolo, Brescia" />
            <dl className="mt-10 border-t border-line">
              <div className="border-b border-line py-6">
                <dt className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Indirizzo
                </dt>
                <dd className="mt-2 text-lg text-foreground">
                  {site.address.street}
                  <br />
                  {site.address.city}
                </dd>
              </div>
              <div className="border-b border-line py-6">
                <dt className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Telefono
                </dt>
                <dd className="mt-2 text-lg">
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline text-green">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-6">
                <dt className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-2 text-lg">
                  <a href={`mailto:${site.email}`} className="link-underline text-green">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-6">
                <dt className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Orari
                </dt>
                <dd className="mt-2 text-lg text-foreground">
                  {site.orari.map((o) => (
                    <span key={o} className="block">
                      {o}
                    </span>
                  ))}
                  <span className="mt-2 block font-serif italic text-muted-foreground">
                    Visite e degustazioni su appuntamento
                  </span>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={100}>
            {sent ? (
              <div className="border border-line bg-cream p-12 text-center">
                <h2 className="text-[1.6rem]">Grazie</h2>
                <p className="mt-5 font-serif text-xl italic text-muted-foreground">
                  Il messaggio è stato registrato in questo prototipo. Ti risponderemo al più presto.
                </p>
                <div className="mt-8">
                  <ActionButton onClick={() => setSent(false)}>Invia un altro messaggio</ActionButton>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="border border-line bg-cream p-8 sm:p-12">
                <h2 className="text-[1.6rem]">Scrivici</h2>
                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {[
                    ["nome", "Nome e cognome", "text", true],
                    ["email", "Email", "email", true],
                    ["telefono", "Telefono", "tel", false],
                    ["persone", "Numero di persone", "number", false],
                  ].map(([name, label, type, req]) => (
                    <div key={name as string}>
                      <label
                        htmlFor={name as string}
                        className="block font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground"
                      >
                        {label as string}
                      </label>
                      <input
                        id={name as string}
                        name={name as string}
                        type={type as string}
                        required={req as boolean}
                        className="mt-3 w-full border-0 border-b border-line bg-transparent py-3 text-base text-foreground focus:border-green focus:outline-none"
                      />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="messaggio"
                      className="block font-display text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground"
                    >
                      Messaggio
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      rows={5}
                      required
                      className="mt-3 w-full resize-none border-0 border-b border-line bg-transparent py-3 text-base text-foreground focus:border-green focus:outline-none"
                    />
                  </div>
                </div>
                <label className="mt-8 flex items-start gap-4 text-sm text-muted-foreground">
                  <input type="checkbox" required className="mt-1 accent-green" />
                  <span>Acconsento al trattamento dei dati per rispondere alla richiesta.</span>
                </label>
                <div className="mt-10">
                  <ActionButton type="submit" variant="solid">
                    Invia messaggio
                  </ActionButton>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <Photo
          label="La strada che sale ai vigneti di Castenedolo"
          ratio="21/9"
          tone="ivory"
          zoom={false}
          src={media.stradaCollina}
        />
      </section>
    </>
  );
}
