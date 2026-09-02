export const site = {
  brand: "Casa Laffranchi",
  legal: "Azienda Agricola Contrini Pasquina",
  payoff: "Vino pregiato dei colli di Castenedolo",
  claim: "Una storia di famiglia,\nraccontata in ogni bottiglia",
  address: {
    street: "Via Giovanni Bettoni, 42",
    city: "25014 Castenedolo (BS)",
    lat: 45.4697,
    lng: 10.2926,
  },
  phone: "+39 338.8834457",
  email: "info@casalaffranchi.it",
  website: "www.casalaffranchi.it",
  orari: ["Lun–Ven 9:00–18:00", "Sab 9:00–13:00 (su appuntamento)"],
} as const;

export const citazioni = {
  galilei: {
    testo: "Il vino è la luce del sole tenuta insieme dall'acqua",
    autore: "Galileo Galilei",
  },
  terra: {
    testo: "Non facciamo vino: ascoltiamo la terra, e la terra ci risponde",
    autore: "Famiglia Laffranchi",
  },
  vigna: {
    testo: "La vigna non si possiede, si custodisce per chi viene dopo di noi",
    autore: "Famiglia Laffranchi",
  },
} as const;

export const navigation = [
  { label: "Home", to: "/" },
  { label: "Casa Laffranchi", to: "/casa-laffranchi" },
  { label: "Vigna & Cantina", to: "/vigna-cantina" },
  { label: "I nostri vini", to: "/vini" },
  { label: "Shop", to: "/shop" },
  { label: "Contatti", to: "/contatti" },
] as const;

/** I tre valori dichiarati nel brief ufficiale. */
export const valori = [
  {
    title: "Conduzione familiare",
    text: "Ogni fase è seguita personalmente dalla famiglia, dalla vendemmia all'imbottigliamento.",
  },
  {
    title: "Rispetto dei tempi naturali",
    text: "Non forziamo la vigna. Ogni annata si esprime secondo il proprio carattere.",
  },
  {
    title: "Territorio di Castenedolo",
    text: "Coltiviamo solo le nostre colline: il vino nasce prima di tutto da una buona terra.",
  },
] as const;

export const trustPoints = [
  {
    title: "Ordine online",
    text: "Scegli i vini, aggiungi al carrello e procedi al checkout in pochi click.",
  },
  {
    title: "Spedizione sicura",
    text: "Imballaggio specializzato. Consegna in 48–72h su tutto il territorio italiano.",
  },
  {
    title: "Pagamento sicuro",
    text: "Carta, PayPal, bonifico. Checkout protetto con crittografia SSL.",
  },
] as const;
