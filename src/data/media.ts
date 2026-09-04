/**
 * Fotografie ufficiali Casa Laffranchi.
 * Tutti i file risiedono in public/images e sono referenziati con URL
 * root-relative sotto /images, stabili in qualsiasi hosting e su ogni route.
 */
export const media = {
  heroVigneto: "/images/hero-vigneto.jpg",
  logo: "/images/logo-casa-laffranchi.jpg",
  casaAerea: "/images/casa-aerea.jpg",
  casaCollina: "/images/casa-collina.jpg",
  vignetoFilari: "/images/vigneto-filari.jpg",
  trattoreVigna: "/images/trattore-vigna.jpg",
  uvaMano: "/images/uva-mano.jpg",
  barrique: "/images/barrique.jpg",
  bottiCantina: "/images/botti-cantina.jpg",
  vendemmiaMano: "/images/vendemmia-mano.jpg",
  vignetoEstate: "/images/vigneto-estate.jpg",
  vignetoAutunno: "/images/vigneto-autunno.jpg",
  stradaCollina: "/images/strada-collina.jpg",
} as const;

/** Galleria orizzontale “Vigna & Cantina”. */
export const galleriaVigna = [
  { src: "/images/gallery-grappolo.jpg", label: "Grappolo al tramonto", didascalia: "Il frutto, pronto per la vendemmia" },
  { src: "/images/gallery-grappoli-mano.jpg", label: "Grappoli tra le mani", didascalia: "La raccolta, grappolo per grappolo" },
  { src: "/images/gallery-filari.jpg", label: "Filari visti dall'alto", didascalia: "La collina di Castenedolo" },
  { src: "/images/gallery-uva-bianca.jpg", label: "Uva bianca appena raccolta", didascalia: "Le uve bianche di Valens" },
  { src: "/images/gallery-botti.jpg", label: "Botti di legno in cantina", didascalia: "Il riposo in legno" },
  { src: "/images/gallery-cantina.jpg", label: "La cantina storica", didascalia: "L'affinamento sotto la volta" },
] as const;

/** Fotografie prodotto (bottiglie), per slug. */
export const bottleImages: Record<string, string> = {
  valens: "/images/valens.png",
  caelestis: "/images/caelestis.png",
  andreas: "/images/andreas.png",
  burtuli: "/images/burtuli.jpg",
  rocolet: "/images/rocolet.png",
  "san-bartolomeo": "/images/san-bartolomeo.png",
  "burtuli-magnum": "/images/burtuli-magnum.jpg",
  "andreas-magnum": "/images/andreas-magnum.png",
  acquavite: "/images/acquavite.png",
};

/** Logo ufficiale (header, footer, favicon). */
export const logoUfficiale = "/images/logo-casa-laffranchi-ufficiale.png";
