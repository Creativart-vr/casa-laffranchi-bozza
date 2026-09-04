import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Facebook, Instagram } from "lucide-react";
import { navigation, site } from "@/data/site";
import { products } from "@/data/products";
import { logoUfficiale } from "@/data/media";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return done ? (
    <p className="flex items-center gap-3 font-serif text-lg italic text-green">
      <Check className="h-4 w-4 shrink-0" strokeWidth={1.5} />
      Grazie. Ti scriveremo quando ci sarà qualcosa da raccontare.
    </p>
  ) : (
    <form
      className="flex items-stretch border-b border-green/40 focus-within:border-green"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Indirizzo email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Il tuo indirizzo email"
        className="w-full bg-transparent py-3 font-serif text-lg italic text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Iscriviti alla newsletter"
        className="group flex items-center gap-2 pl-4 font-display text-[0.65rem] uppercase tracking-[0.3em] text-green"
      >
        Iscriviti
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="container-editorial py-20 lg:py-24">
        <div className="grid gap-10 border-b border-line pb-16 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
              Lettera dalla collina
            </p>
            <p className="mt-4 max-w-md font-serif text-2xl italic leading-snug text-foreground">
              Annate, piccole disponibilità e notizie dalla cantina. Poche volte l’anno, solo quando conta.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={logoUfficiale}
              alt="Casa Laffranchi"
              className="h-[140px] w-auto object-contain object-left"
            />
            <p className="mt-4 max-w-sm font-serif text-xl italic leading-relaxed text-muted-foreground">
              {site.payoff}. Una famiglia, una collina, poche bottiglie fatte bene.
            </p>
          </div>

          <nav aria-label="Navigazione footer">
            <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">Sito</p>
            <ul className="mt-5 space-y-3">
              {navigation.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-underline font-display text-[0.75rem] uppercase tracking-[0.2em] text-green">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Vini">
            <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">Vini</p>
            <ul className="mt-5 space-y-3">
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/vini/$slug"
                    params={{ slug: p.slug }}
                    className="link-underline font-display text-[0.75rem] uppercase tracking-[0.2em] text-green"
                  >
                    {p.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">Contatti</p>
            <address className="mt-5 space-y-2 font-serif text-lg not-italic leading-relaxed text-foreground">
              <p className="italic">
                {site.address.street}
                <br />
                {site.address.city}
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline italic">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="link-underline italic">
                  {site.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 font-display text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legal} — P.IVA 03050530170</p>
          <p>Bevi responsabilmente — vietata la vendita ai minori di 18 anni</p>
        </div>
      </div>
    </footer>
  );
}
