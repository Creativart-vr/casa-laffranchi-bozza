import heroVigneto from "@/assets/hero-vigneto.jpg.asset.json";
import logoCasa from "@/assets/logo-casa-laffranchi.jpg.asset.json";
import casaAerea from "@/assets/casa-aerea.jpg.asset.json";
import casaCollina from "@/assets/casa-collina.jpg.asset.json";
import vignetoFilari from "@/assets/vigneto-filari.jpg.asset.json";
import trattoreVigna from "@/assets/trattore-vigna.jpg.asset.json";
import uvaMano from "@/assets/uva-mano.jpg.asset.json";
import barrique from "@/assets/barrique.jpg.asset.json";
import bottiCantina from "@/assets/botti-cantina.jpg.asset.json";
import vendemmiaMano from "@/assets/vendemmia-mano.jpg.asset.json";
import vignetoEstate from "@/assets/vigneto-estate.jpg.asset.json";
import vignetoAutunno from "@/assets/vigneto-autunno.jpg.asset.json";
import stradaCollina from "@/assets/strada-collina.jpg.asset.json";

import valens from "@/assets/valens.jpg.asset.json";
import caelestis from "@/assets/caelestis.jpg.asset.json";
import andreas from "@/assets/andreas.jpg.asset.json";
import burtuli from "@/assets/burtuli.jpg.asset.json";
import rocolet from "@/assets/rocolet.jpg.asset.json";
import sanBartolomeo from "@/assets/san-bartolomeo.jpg.asset.json";
import burtuliMagnum from "@/assets/burtuli-magnum.jpg.asset.json";
import andreasMagnum from "@/assets/andreas-magnum.jpg.asset.json";
import acquavite from "@/assets/acquavite.jpg.asset.json";

/** Fotografie ufficiali fornite nel brief Casa Laffranchi. */
export const media = {
  heroVigneto: heroVigneto.url,
  logo: logoCasa.url,
  casaAerea: casaAerea.url,
  casaCollina: casaCollina.url,
  vignetoFilari: vignetoFilari.url,
  trattoreVigna: trattoreVigna.url,
  uvaMano: uvaMano.url,
  barrique: barrique.url,
  vendemmiaMano: vendemmiaMano.url,
  vignetoEstate: vignetoEstate.url,
  vignetoAutunno: vignetoAutunno.url,
  stradaCollina: stradaCollina.url,
} as const;

/** Fotografie prodotto (bottiglie) del brief, per slug. */
export const bottleImages: Record<string, string> = {
  valens: valens.url,
  caelestis: caelestis.url,
  andreas: andreas.url,
  burtuli: burtuli.url,
  rocolet: rocolet.url,
  "san-bartolomeo": sanBartolomeo.url,
  "burtuli-magnum": burtuliMagnum.url,
  "andreas-magnum": andreasMagnum.url,
  acquavite: acquavite.url,
};
