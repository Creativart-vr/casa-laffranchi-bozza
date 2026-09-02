import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { navigation, site } from "@/data/site";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[65] overflow-y-auto bg-ivory lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="container-editorial flex min-h-full flex-col py-8">
        <div className="flex justify-end">
          <button onClick={onClose} aria-label="Chiudi menu" className="p-2 text-green">
            <X strokeWidth={1} className="size-7" />
          </button>
        </div>
        <nav className="mt-10 flex-1">
          <ul className="space-y-6">
            {navigation.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={onClose}
                  className="block font-display text-[2rem] uppercase leading-none tracking-[0.06em] text-green"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-16 border-t border-line pt-8 font-serif text-lg italic text-muted-foreground">
          <p>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="mt-2">
            {site.address.street}
            <br />
            {site.address.city}
          </p>
        </div>
      </div>
    </div>
  );
}
