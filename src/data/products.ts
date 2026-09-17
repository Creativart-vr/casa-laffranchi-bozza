/**
 * Fonte dati centralizzata dei prodotti Casa Laffranchi.
 * Prezzi, formati e "tre parole" dal documento ufficiale
 * "Prezzi e descrizione 3 parole"; dati tecnici trascritti esclusivamente
 * dalle schede tecniche ufficiali. Nessun dato inventato.
 * Alimenta: /shop, /vini, /vini/:slug, carrello, prodotti correlati.
 */

export type Category =
  | "Bianco"
  | "Rosato"
  | "Spumante"
  | "Rosso"
  | "Passito"
  | "Formati speciali"
  | "Distillati";

export type Disponibilita = "esaurito" | "limitata";

export type FormatoFiltro = "375 ml" | "500 ml" | "75 cl" | "1,5 L";

export type Product = {
  slug: string;
  nome: string;
  categoria: Category;
  tipologia: string;
  prezzo: number;
  formato: string;
  formatoFiltro: FormatoFiltro;
  descrizioneBreve: string;
  disponibilita?: Disponibilita;
  vitigno?: string;
  varieta?: string;
  metodo?: string;
  origine?: string;
  colore?: string;
  profumo?: string;
  gusto?: string;
  gradazione?: string;
  vendemmia?: string;
  gastronomia?: string;
  temperatura?: string;
  servizio?: string;
  /** Fotografia bottiglia */
  immagine?: string;
  /** Scheda tecnica PDF originale, solo se realmente disponibile */
  technicalSheetPdf?: string;
};

export const products: Product[] = [
  {
    slug: "andreas",
    nome: "Andreas",
    categoria: "Spumante",
    tipologia: "Spumante Extra Brut · Metodo Classico",
    prezzo: 24.0,
    formato: "0,75 L",
    formatoFiltro: "75 cl",
    vitigno: "Uve selezionate di Cabernet Sauvignon",
    metodo: "Metodo classico",
    colore: "Giallo paglierino con un perlage fine",
    profumo:
      "Elegante e fresco con aromi fruttati e floreali e sottofondo lievemente tostato",
    gusto: "Secco ed elegante dal perlage fine",
    gradazione: "12,5% vol.",
    gastronomia:
      "Adatto ad aperitivo, ideale a tutto pasto, in particolare con piatti di pesce, carni bianche e dessert",
    temperatura: "7–8 °C",
    descrizioneBreve: "Fresco, fruttato, perlage fine",
    immagine: "/images/andreas.png",
  },
  {
    slug: "petros",
    nome: "Petros",
    categoria: "Spumante",
    tipologia: "Spumante Extra Brut Rosé",
    prezzo: 24.0,
    formato: "0,75 L",
    formatoFiltro: "75 cl",
    descrizioneBreve: "Fresco, floreale, perlage fine",
    immagine: "/images/petros-preview.jpg",
  },
  {
    slug: "valens",
    nome: "Valens",
    categoria: "Bianco",
    tipologia: "Bianco",
    prezzo: 16.0,
    formato: "0,75 L",
    formatoFiltro: "75 cl",
    vitigno: "Uve selezionate di Cabernet Sauvignon",
    origine:
      "Il vigneto è coltivato in un terreno costituito da argilla stratificata. Le uve subiscono una pressatura soffice e la vinificazione avviene a temperature molto basse con un’immediata separazione delle bucce per garantire l’autenticità del vino.",
    colore: "Giallo paglierino con riflessi ramati",
    profumo:
      "Intenso di fragranze minerali cedute alle uve dal terreno morenico della collina",
    gusto: "Sapido, fresco ed importante",
    gradazione: "13% vol.",
    gastronomia:
      "Si accompagna agli antipasti, a pietanze a base di pesce, alle carni bianche, ai formaggi freschi e di media stagionatura",
    temperatura: "8 °C",
    descrizioneBreve: "Minerale, sapido, fresco",
    immagine: "/images/valens.png",
    disponibilita: "esaurito",
    technicalSheetPdf: "/download/schede-tecniche/valens.pdf",
  },
  {
    slug: "caelestis",
    nome: "Caelestis",
    categoria: "Rosato",
    tipologia: "Rosé",
    prezzo: 14.0,
    formato: "0,75 L",
    formatoFiltro: "75 cl",
    vitigno: "Uve selezionate di Merlot",
    origine:
      "Un vino unico di straordinaria bevibilità. L’affinamento avviene in botte inox per pochi mesi e poi imbottigliato.",
    colore: "Cerasuolo scarico",
    profumo: "Aromatico e di lieve corposità",
    gusto: "Fresco ed ampio. Prevalgono sensazioni di leggera acidità",
    gradazione: "13% vol.",
    gastronomia:
      "Si accompagna alla pizza e agli antipasti, salumi freschi, minestre, primi piatti con sughi delicati, carni bianche, pesce ed è ineguagliabile con i crostacei",
    temperatura: "8 °C",
    descrizioneBreve: "Aromatico, fresco, sapido",
    immagine: "/images/caelestis.png",
    technicalSheetPdf: "/download/schede-tecniche/caelestis.pdf",
  },
  {
    slug: "rocolet",
    nome: "Rocolet",
    categoria: "Rosso",
    tipologia: "Rosso",
    prezzo: 15.0,
    formato: "0,75 L",
    formatoFiltro: "75 cl",
    vitigno: "Uve selezionate di Cabernet Sauvignon",
    origine:
      "Un vino espressione autentica del territorio di appartenenza caratterizzato da terre argillose di andamento pedecollinare, con vigneti esposti al sole del mattino. Vendemmiato solitamente dopo la metà di ottobre.",
    colore: "Rosso rubino tendente al granato",
    profumo: "Odore vinoso con profumo caratteristico leggermente erbaceo",
    gusto: "Sapore sincero e secco, dal tono morbido e pieno",
    gradazione: "13,5% vol.",
    gastronomia:
      "Si abbina a primi piatti asciutti, carni rosse, cacciagione e formaggi stagionati",
    temperatura: "Temperatura ambiente",
    descrizioneBreve: "Erbaceo, secco, morbido",
    immagine: "/images/rocolet.png",
    disponibilita: "limitata",
    technicalSheetPdf: "/download/schede-tecniche/rocolet.pdf",
  },
  {
    slug: "burtuli",
    nome: "Burtulì",
    categoria: "Rosso",
    tipologia: "Rosso",
    prezzo: 15.0,
    formato: "0,75 L",
    formatoFiltro: "75 cl",
    vitigno: "Uve selezionate di Merlot",
    origine:
      "Un vino espressione verace del territorio di appartenenza caratterizzato da terre argillose di andamento pedecollinare",
    colore: "Rosso rubino intenso",
    profumo: "Naso fine con sentori di frutti di bosco maturi",
    gusto:
      "Vino tannico avvolgente dal gusto sapido, caldo appena in bocca per poi farsi carezzevole al palato",
    gradazione: "13% vol.",
    gastronomia:
      "Si abbina a primi piatti asciutti, a secondi piatti di carne, brasati, spiedo con polenta, formaggi di media stagionatura",
    temperatura: "Temperatura ambiente",
    descrizioneBreve: "Tannico, sapido, frutta matura",
    immagine: "/images/burtuli.jpg",
    technicalSheetPdf: "/download/schede-tecniche/burtuli.pdf",
  },
  {
    slug: "andreas-magnum",
    nome: "Andreas Magnum",
    categoria: "Formati speciali",
    tipologia: "Spumante Extra Brut · Magnum",
    prezzo: 59.0,
    formato: "1,5 L",
    formatoFiltro: "1,5 L",
    vitigno: "Uve selezionate di Cabernet Sauvignon",
    metodo: "Metodo classico",
    colore: "Giallo paglierino con un perlage fine",
    profumo:
      "Elegante e fresco con aromi fruttati e floreali e sottofondo lievemente tostato",
    gusto: "Secco ed elegante dal perlage fine",
    gradazione: "12,5% vol.",
    gastronomia:
      "Adatto ad aperitivo, ideale a tutto pasto, in particolare con piatti di pesce, carni bianche e dessert",
    temperatura: "7–8 °C",
    descrizioneBreve: "Secco, fruttato, perlage fine",
    immagine: "/images/andreas-magnum.png",
    disponibilita: "esaurito",
  },
  {
    slug: "petros-magnum",
    nome: "Petros Magnum",
    categoria: "Formati speciali",
    tipologia: "Spumante Extra Brut Rosé · Magnum",
    prezzo: 59.0,
    formato: "1,5 L",
    formatoFiltro: "1,5 L",
    descrizioneBreve: "Fresco, floreale, perlage fine",
  },
  {
    slug: "burtuli-magnum",
    nome: "Burtulì Magnum",
    categoria: "Formati speciali",
    tipologia: "Rosso · Magnum",
    prezzo: 43.0,
    formato: "1,5 L",
    formatoFiltro: "1,5 L",
    vitigno: "Uve selezionate di Merlot",
    origine:
      "Un vino espressione verace del territorio di appartenenza caratterizzato da terre argillose di andamento pedecollinare",
    colore: "Rosso rubino intenso",
    profumo: "Naso fine con sentori di frutti di bosco maturi",
    gusto:
      "Vino tannico avvolgente dal gusto sapido, caldo appena in bocca per poi farsi carezzevole al palato",
    gradazione: "13% vol.",
    gastronomia:
      "Si abbina a primi piatti asciutti, a secondi piatti di carne, brasati, spiedo con polenta, formaggi di media stagionatura",
    temperatura: "Temperatura ambiente",
    descrizioneBreve: "Tannico, sapido, frutta matura",
    immagine: "/images/burtuli-magnum.jpg",
    technicalSheetPdf: "/download/schede-tecniche/burtuli-magnum.pdf",
  },
  {
    slug: "san-bartolomeo",
    nome: "San Bartolomeo",
    categoria: "Passito",
    tipologia: "Passito Rosso",
    prezzo: 35.0,
    formato: "375 ml",
    formatoFiltro: "375 ml",
    vitigno: "Uve selezionate e appassite",
    colore: "Bacca nera",
    profumo:
      "Grande profumo varietale con sentori di piccoli frutti come mora, ribes e ciliegia",
    gusto: "Strutturato e di grande armonia",
    gradazione: "15% vol.",
    gastronomia:
      "Si abbina a formaggi, cioccolato fondente, dolci da forno a pasta lievitata ed a tutti i classici natalizi farciti con zabaione e crema",
    temperatura: "14–15 °C in piccoli calici",
    descrizioneBreve: "Varietale, strutturato, armonico",
    immagine: "/images/san-bartolomeo.png",
    technicalSheetPdf: "/download/schede-tecniche/san-bartolomeo.pdf",
  },
  {
    slug: "acquavite-bianca",
    nome: "Acquavite Bianca",
    categoria: "Distillati",
    tipologia: "Acquavite di vino Merlot",
    prezzo: 27.0,
    formato: "500 ml",
    formatoFiltro: "500 ml",
    vitigno: "Ottenuti dalla distillazione di vino Merlot",
    varieta: "La bianca",
    gradazione: "42% vol.",
    servizio: "Un ottimo digestivo da servire ghiacciato",
    descrizioneBreve: "Intenso, vellutato, avvolgente",
    immagine: "/images/acquavite-bianca.jpg",
    technicalSheetPdf: "/download/schede-tecniche/liquori-acquavite.pdf",
  },
  {
    slug: "liquore-caffe",
    nome: "Liquore al Caffè",
    categoria: "Distillati",
    tipologia: "Liquore di acquavite",
    prezzo: 25.0,
    formato: "500 ml",
    formatoFiltro: "500 ml",
    vitigno: "Ottenuti dalla distillazione di vino Merlot",
    varieta: "Al caffè",
    gradazione: "30% vol.",
    servizio: "Un ottimo digestivo da servire ghiacciato",
    descrizioneBreve: "Corposo, tostato, aromatico",
    immagine: "/images/liquore-caffe.jpg",
    technicalSheetPdf: "/download/schede-tecniche/liquori-acquavite.pdf",
  },
  {
    slug: "liquore-mirtillo",
    nome: "Liquore al Mirtillo",
    categoria: "Distillati",
    tipologia: "Liquore di acquavite",
    prezzo: 25.0,
    formato: "500 ml",
    formatoFiltro: "500 ml",
    vitigno: "Ottenuti dalla distillazione di vino Merlot",
    varieta: "Al mirtillo",
    gradazione: "30% vol.",
    servizio: "Un ottimo digestivo da servire ghiacciato",
    descrizioneBreve: "Fruttato, vellutato, persistente",
    immagine: "/images/liquore-mirtillo.jpg",
    technicalSheetPdf: "/download/schede-tecniche/liquori-acquavite.pdf",
  },
];

export const categories: (Category | "Tutti")[] = [
  "Tutti",
  "Bianco",
  "Rosato",
  "Spumante",
  "Rosso",
  "Passito",
  "Formati speciali",
  "Distillati",
];

export const categoryLabels: Record<string, string> = {
  Tutti: "Tutti",
  Bianco: "Bianchi",
  Rosato: "Rosati",
  Spumante: "Spumanti",
  Rosso: "Rossi",
  Passito: "Passito",
  "Formati speciali": "Formati speciali",
  Distillati: "Distillati",
};

export const formati = ["Tutti", "375 ml", "500 ml", "75 cl", "1,5 L"] as const;

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatPrice = (n: number) => `€ ${n.toFixed(2).replace(".", ",")}`;

export const relatedProducts = (slug: string) => {
  const current = getProduct(slug);
  if (!current) return products.slice(0, 4);
  const same = products.filter((p) => p.slug !== slug && p.categoria === current.categoria);
  const others = products.filter((p) => p.slug !== slug && p.categoria !== current.categoria);
  return [...same, ...others].slice(0, 4);
};
