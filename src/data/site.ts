export const site = {
  brand: "Casa Laffranchi",
  legal: "Azienda Agricola Contrini Pasquina",
  payoff: "Vino pregiato dei Colli di Castenedolo",
  claim: "Una storia di famiglia,\nraccontata in ogni bottiglia.",
  address: {
    street: "Via Giovanni Bettoni, 42",
    city: "25014 Castenedolo (BS)",
    lat: 45.4697,
    lng: 10.2926,
  },
  phone: "+39 338 8834457",
  email: "info@casalaffranchi.it",
  website: "www.casalaffranchi.it",
} as const;

export const navigation = [
  { label: "Home", to: "/" },
  { label: "Casa Laffranchi", to: "/casa-laffranchi" },
  { label: "Vigna & Cantina", to: "/vigna-cantina" },
  { label: "I nostri vini", to: "/vini" },
  { label: "Shop", to: "/shop" },
  { label: "Contatti", to: "/contatti" },
] as const;

export const trustPoints = [
  {
    title: "Ordine online",
    text: "Scegli i vini e procedi al checkout in pochi click.",
  },
  {
    title: "Spedizione sicura",
    text: "Imballaggio specializzato e consegna indicativa in 48–72 ore sul territorio italiano.",
  },
  {
    title: "Pagamento sicuro",
    text: "Nella versione definitiva WordPress saranno previsti Carta, PayPal e bonifico.",
  },
] as const;
