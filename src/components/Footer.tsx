import { Link } from "@tanstack/react-router";
import { navigation, site } from "@/data/site";
import { products } from "@/data/products";
import logoUfficiale from "@/assets/logo-ufficiale.jpg.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="container-editorial py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={logoUfficiale.url}
              alt="Casa Laffranchi"
              className="h-20 w-auto object-contain object-left"
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
