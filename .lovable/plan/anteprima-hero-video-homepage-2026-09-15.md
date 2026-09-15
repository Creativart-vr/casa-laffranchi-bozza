# Anteprima hero video homepage

## Obiettivo
Creare una pagina di anteprima separata della homepage con una prima schermata video a tutto schermo, ispirata alla struttura Antinori ma coerente con Casa Laffranchi. La homepage ufficiale `/` e la versione pubblicata resteranno invariate.

## Interventi
- Salvare il video allegato come asset locale stabile e includerlo anche nell’output destinato a Hostinger.
- Creare una route di anteprima non indicizzata, mantenendo identiche tutte le sezioni che seguono l’attuale hero.
- Sostituire, solo nell’anteprima, la prima hero con video fullscreen, velo nero leggero, logo ufficiale centrale, tre link principali in basso, Shop e selettore ITA/ENG/DEU.
- Non mostrare la testata bianca nella prima schermata; far comparire l’attuale testata completa con transizione fluida quando la hero esce dalla vista e nasconderla al ritorno in alto.
- Non introdurre hamburger nella hero, neppure su tablet o mobile.

## Verifica
- Controllare autoplay, loop, modalità silenziosa, assenza di controlli e copertura completa del video.
- Verificare navigazione da tastiera, focus e lingue future non cliccabili.
- Controllare desktop, tablet e mobile, inclusi safe-area, overflow e ritorno dell’header durante lo scroll.
- Verificare che video e immagini rispondano senza errori e siano inclusi nel build Hostinger.
- Mostrare il collegamento alla preview e attendere “PROCEDI CON LE MODIFICHE”.

## Dettagli tecnici
La preview userà una route dedicata e metadati `noindex`. La visibilità della testata condivisa sarà limitata esclusivamente a questa route, così tutte le pagine ufficiali resteranno inalterate.
