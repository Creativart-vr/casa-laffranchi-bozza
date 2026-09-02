import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { products } from "@/data/products";
import { navigation } from "@/data/site";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!open) setQ("");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return { vini: [], pagine: [] };
    return {
      vini: products.filter(
        (p) =>
          p.nome.toLowerCase().includes(term) ||
          p.tipologia.toLowerCase().includes(term) ||
          p.categoria.toLowerCase().includes(term),
      ),
      pagine: navigation.filter((n) => n.label.toLowerCase().includes(term)),
    };
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-cream" role="dialog" aria-modal="true" aria-label="Cerca nel sito">
      <div className="container-editorial flex h-full flex-col pt-10 pb-16">
        <div className="flex justify-end">
          <button onClick={onClose} aria-label="Chiudi ricerca" className="p-2 text-green">
            <X strokeWidth={1} className="size-7" />
          </button>
        </div>
        <div className="mx-auto mt-16 w-full max-w-3xl">
          <h2 className="text-center text-[1.8rem] sm:text-[2.4rem]">Cerca nel sito</h2>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Cerca vini, pagine o contenuti"
            placeholder="Cerca vini, pagine o contenuti..."
            className="mt-12 w-full border-0 border-b border-line bg-transparent pb-5 text-center font-serif text-2xl italic text-foreground placeholder:text-muted-foreground focus:border-green focus:outline-none sm:text-3xl"
          />

          {!q && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <span className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
                Suggerimenti
              </span>
              {["Valens", "Andreas", "Burtulì", "Rocolet"].map((s) => (
                <button
                  key={s}
                  onClick={() => setQ(s)}
                  className="link-underline font-serif text-xl italic text-green"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {q && (
            <div className="mt-12 space-y-10">
              {results.vini.length > 0 && (
                <div>
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
                    Vini
                  </p>
                  <ul className="mt-4 divide-y divide-line border-t border-line">
                    {results.vini.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to="/vini/$slug"
                          params={{ slug: p.slug }}
                          onClick={onClose}
                          className="flex items-baseline justify-between py-4"
                        >
                          <span className="font-display text-lg uppercase tracking-[0.14em] text-green">
                            {p.nome}
                          </span>
                          <span className="font-serif italic text-muted-foreground">{p.tipologia}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {results.pagine.length > 0 && (
                <div>
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
                    Pagine
                  </p>
                  <ul className="mt-4 divide-y divide-line border-t border-line">
                    {results.pagine.map((n) => (
                      <li key={n.to}>
                        <Link to={n.to} onClick={onClose} className="block py-4 font-display text-lg uppercase tracking-[0.14em] text-green">
                          {n.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {results.vini.length === 0 && results.pagine.length === 0 && (
                <p className="text-center font-serif text-xl italic text-muted-foreground">
                  Nessun risultato per «{q}».
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
