import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { navigation, site } from "@/data/site";
import { useCart } from "@/lib/cart";
import { SearchOverlay } from "./SearchOverlay";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";
import logoUfficiale from "@/assets/logo-ufficiale.jpg.asset.json";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = searchOpen || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-500",
          scrolled ? "border-line bg-background/95 backdrop-blur-sm" : "border-transparent bg-background",
        )}
      >
        <div className="container-editorial">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "h-[88px]" : "h-[124px]",
            )}
          >
            <div className="flex flex-1 items-center gap-4">
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Apri menu"
                className="p-1 text-green lg:hidden"
              >
                <Menu strokeWidth={1} className="size-6" />
              </button>
              <nav className="hidden lg:block">
                <ul className="flex items-center gap-9">
                  {navigation.slice(0, 3).map((n) => (
                    <li key={n.to}>
                      <Link
                        to={n.to}
                        data-active={pathname === n.to}
                        className="link-underline font-display text-[0.72rem] uppercase tracking-[0.3em] text-green"
                      >
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <Link to="/" className="shrink-0 text-center" aria-label={`${site.brand} — home`}>
              <img
                src={logoUfficiale.url}
                alt="Casa Laffranchi"
                className={cn(
                  "mx-auto w-auto object-contain transition-all duration-500",
                  scrolled ? "h-14" : "h-20 sm:h-24",
                )}
              />
              <span className="sr-only">{site.brand}</span>
            </Link>

            <div className="flex flex-1 items-center justify-end gap-6">
              <nav className="hidden lg:block">
                <ul className="flex items-center gap-9">
                  {navigation.slice(3).map((n) => (
                    <li key={n.to}>
                      <Link
                        to={n.to}
                        data-active={pathname === n.to}
                        className="link-underline font-display text-[0.72rem] uppercase tracking-[0.3em] text-green"
                      >
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                <button onClick={() => setSearchOpen(true)} aria-label="Cerca" className="p-1 text-green">
                  <Search strokeWidth={1} className="size-5" />
                </button>
                <Link to="/carrello" aria-label={`Carrello, ${count} articoli`} className="relative p-1 text-green">
                  <ShoppingBag strokeWidth={1} className="size-5" />
                  {count > 0 && (
                    <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center bg-green font-display text-[0.6rem] text-white">
                      {count}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
