import { bottleImages } from "./media";

export type Category =
  | "Bianco"
  | "Rosato"
  | "Spumante"
  | "Rosso"
  | "Passito"
  | "Formati speciali"
  | "Distillati";

export type Product = {
  slug: string;
  nome: string;
  categoria: Category;
  tipologia: string;
  prezzo: number;
  formato: string;
  formatoFiltro: "50 cl" | "75 cl" | "1,5 L";
  descrizioneBreve: string;
  vitigno?: string;
  metodo?: string;
  origine?: string;
  colore?: string;
  profumo?: string;
  gusto?: string;
  gradazione?: string;
  vendemmia?: string;
  gastronomia?: string;
  temperatura?: string;
  base?: string;
  varianti?: string[];
  servizio?: string;
  occasione?: string;
  /** Fotografia bottiglia dal brief ufficiale */
  immagine?: string;
};

const catalogo: Product[] = [
  {
    slug: "valens",
    nome: "Valens",
    categoria: "Bianco",
    tipologia: "Bianco · Cabernet Sauvignon",
    prezzo: 13.0,
    formato: "75 cl",
    formatoFiltro: "75 cl",
    vitigno: "Cabernet Sauvignon",
    colore: "Giallo paglierino con riflessi ramati",
    profumo: "Fragranze minerali del terreno morenico",
    gusto: "Sapido, fresco ed importante",
    gradazione: "13% vol.",
    gastronomia: "Antipasti, pesce, carni bianche",
    temperatura: "8 °C",
    descrizioneBreve: "Giallo paglierino, minerale.",
  },
  {
    slug: "caelestis",
    nome: "Caelestis",
    categoria: "Rosato",
    tipologia: "Rosato · Merlot",
    prezzo: 11.0,
    formato: "75 cl",
    formatoFiltro: "75 cl",
    vitigno: "Merlot",
    colore: "Cerasuolo scarico",
    profumo: "Aromatico, lieve corposità",
    gusto: "Fresco, ampio, leggera acidità",
    gradazione: "13% vol.",
    gastronomia: "Pizza, antipasti, pesce, crostacei",
    temperatura: "8 °C",
    descrizioneBreve: "Aromatico, fresco, ampio.",
  },
  {
    slug: "andreas",
    nome: "Andreas",
    categoria: "Spumante",
    tipologia: "Spumante Extra Brut · Metodo Classico",
    prezzo: 19.0,
    formato: "75 cl",
    formatoFiltro: "75 cl",
    vitigno: "Cabernet Sauvignon",
    metodo: "Classico (Champenoise)",
    colore: "Giallo paglierino, perlage fine",
    gusto: "Secco ed elegante",
    gradazione: "12,5% vol.",
    gastronomia: "Aperitivo, pesce, carni bianche, dessert",
    temperatura: "7–8 °C",
    descrizioneBreve: "Perlage fine, elegante.",
  },
  {
    slug: "burtuli",
    nome: "Burtulì",
    categoria: "Rosso",
    tipologia: "Rosso · Merlot",
    prezzo: 12.0,
    formato: "75 cl",
    formatoFiltro: "75 cl",
    vitigno: "Merlot",
    origine: "Terre argillose pedecollinari",
    colore: "Rosso rubino intenso",
    profumo: "Frutti di bosco maturi",
    gusto: "Tannico avvolgente, caldo, carezzevole",
    gradazione: "13% vol.",
    gastronomia: "Carni, polenta, formaggi stagionati",
    descrizioneBreve: "Rubino intenso, frutti di bosco.",
  },
  {
    slug: "rocolet",
    nome: "Rocolet",
    categoria: "Rosso",
    tipologia: "Rosso · Cabernet Sauvignon",
    prezzo: 12.0,
    formato: "75 cl",
    formatoFiltro: "75 cl",
    vitigno: "Cabernet Sauvignon",
    colore: "Rosso rubino tendente al granato",
    profumo: "Vinoso, caratteristico, erbaceo",
    gusto: "Sincero e secco, morbido e pieno",
    gradazione: "13,5% vol.",
    vendemmia: "Dopo metà ottobre",
    gastronomia: "Selvaggina, carni rosse, formaggi",
    descrizioneBreve: "Granato, morbido e pieno.",
  },
  {
    slug: "san-bartolomeo",
    nome: "San Bartolomeo",
    categoria: "Passito",
    tipologia: "Passito dolce · Uve appassite",
    prezzo: 28.0,
    formato: "50 cl",
    formatoFiltro: "50 cl",
    vitigno: "Uve selezionate e appassite",
    colore: "Bacca nera",
    profumo: "Mora, ribes, ciliegia",
    gusto: "Strutturato, grande armonia",
    gradazione: "15% vol.",
    gastronomia: "Formaggi, cioccolato, dolci natalizi",
    temperatura: "14–15 °C in piccoli calici",
    descrizioneBreve: "Mora, ribes, grande armonia.",
  },
  {
    slug: "burtuli-magnum",
    nome: "Burtulì Magnum",
    categoria: "Formati speciali",
    tipologia: "Rosso · Burtulì Merlot 1,5 L",
    prezzo: 35.0,
    formato: "1,5 L in cassetta di legno incisa",
    formatoFiltro: "1,5 L",
    vitigno: "Merlot",
    colore: "Rosso rubino intenso",
    gradazione: "13% vol.",
    gastronomia: "Carni, brasati, polenta",
    temperatura: "Temperatura ambiente",
    descrizioneBreve: "Cassetta legno, da regalo.",
  },
  {
    slug: "andreas-magnum",
    nome: "Andreas Magnum",
    categoria: "Formati speciali",
    tipologia: "Spumante Extra Brut · Magnum",
    prezzo: 48.0,
    formato: "1,5 L",
    formatoFiltro: "1,5 L",
    vitigno: "Cabernet Sauvignon",
    metodo: "Classico (Champenoise)",
    colore: "Giallo paglierino, perlage fine",
    gradazione: "12,5% vol.",
    temperatura: "7–8 °C",
    descrizioneBreve: "Per grandi occasioni.",
  },
  {
    slug: "acquavite",
    nome: "Acquavite",
    categoria: "Distillati",
    tipologia: "Distillato di vino Merlot",
    prezzo: 22.0,
    formato: "50 cl",
    formatoFiltro: "50 cl",
    base: "Distillato di vino Merlot",
    varianti: ["Bianca", "Mirtillo", "Caffè"],
    gradazione: "Bianca 42% vol. · Mirtillo 30% vol. · Caffè 30% vol.",
    servizio: "Ghiacciato",
    occasione: "Digestivo dopo pasto",
    descrizioneBreve: "Bianca, Mirtillo, Caffè.",
  },
];

/** Fonte dati unica: catalogo + fotografie bottiglia del brief. */
export const products: Product[] = catalogo.map((p) => {
  const img = bottleImages[p.slug];
  return img ? { ...p, immagine: img } : p;
});



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

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatPrice = (n: number) =>
  `€ ${n.toFixed(2).replace(".", ",")}`;

export const relatedProducts = (slug: string) => {
  const current = getProduct(slug);
  if (!current) return products.slice(0, 4);
  const same = products.filter((p) => p.slug !== slug && p.categoria === current.categoria);
  const others = products.filter((p) => p.slug !== slug && p.categoria !== current.categoria);
  return [...same, ...others].slice(0, 4);
};
