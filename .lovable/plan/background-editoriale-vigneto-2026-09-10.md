# Background editoriale vigneto

## Obiettivo
Introdurre nelle sole sezioni istituzionali bianche un'incisione botanica originale e quasi impercettibile, senza alterare contenuti, fotografie o impaginazione.

## Intervento
- Creare `public/images/vineyard-background-casa-laffranchi.svg`: una composizione panoramica monocromatica originale con tralci, foglie, grappoli e accenni di filari, più densa ai margini e libera al centro.
- Aggiungere una classe CSS riutilizzabile con pseudo-elemento dietro al contenuto, opacità responsive e varianti di posizione sinistra, centro e destra.
- Applicare la classe alle principali sezioni narrative bianche di Home, Casa Laffranchi, Vigna & Cantina e Contatti.
- Escludere sezioni verdi, avorio/beige, pagine commerciali e blocchi fotografici a tutta larghezza.

## Dettagli tecnici
- Asset locale richiamato da `/images/vineyard-background-casa-laffranchi.svg`, senza URL esterni o temporanei.
- Layer grafico con `pointer-events: none`; tutti i contenuti rimangono sopra e le fotografie non ricevono overlay.
- Opacità indicativa: 0,06 desktop, 0,045 tablet, 0,035 mobile.
- Verifica finale visiva desktop/mobile e controllo della presenza fisica dell'SVG in `public/images`, `dist/images` e nell'output pubblico effettivo del build.
