# Laffranchi Legacy

PROGETTO
Realizza il nuovo sito web completo di CASA LAFFRANCHI, azienda vitivinicola familiare di Castenedolo, in provincia di Brescia.

Il sito deve essere progettato prima in Lovable come prototipo completo frontend e successivamente dovrà poter essere ricostruito fedelmente in WordPress + WooCommerce.

LINGUA
Solo italiano.

OBIETTIVO
Creare un sito premium, elegante, editoriale e fortemente fotografico che racconti:

- la famiglia;
- il territorio;
- la vigna;
- il processo produttivo;
- i vini;
- la vendita online.

Il sito NON deve sembrare:
- una startup;
- un template SaaS;
- un ecommerce generico;
- un sito corporate standard;
- un sito luxury eccessivamente patinato.

Deve comunicare autenticità, territorio, famiglia, tempo, qualità e cura artigianale.

==================================================
RIFERIMENTO GRAFICO PRINCIPALE
==================================================

Usare come riferimento visuale e UX/UI:

https://chateau.qodeinteractive.com/

Il progetto deve essere fortemente ispirato al tema Château di Qode Interactive per:

- impostazione editoriale;
- proporzioni;
- grande uso del bianco;
- griglie;
- composizione delle pagine;
- alternanza immagini/testo;
- header;
- shop;
- pagina prodotto;
- tipografia;
- filigrane;
- spaziature;
- immagini molto grandi;
- layout delle bottiglie;
- footer;
- animazioni;
- micro-interazioni.

NON copiare codice, loghi, fotografie o testi del sito originale.

Riprodurne invece con grande fedeltà:
- il linguaggio visuale;
- la gerarchia tipografica;
- il ritmo;
- la quantità di spazio bianco;
- l'equilibrio tra serif e sans-serif;
- i filetti decorativi;
- il layout editoriale;
- la sensazione premium.

==================================================
PRINCIPIO FONDAMENTALE DI DESIGN
==================================================

LESS UI, MORE EDITORIAL DESIGN.

Il sito deve sembrare una pubblicazione dedicata al vino e al territorio, non una sequenza di componenti web.

EVITARE ASSOLUTAMENTE:
- card con bordi arrotondati;
- border-radius importanti;
- box stile SaaS;
- glassmorphism;
- gradienti;
- ombre pesanti;
- bottoni pill;
- icone colorate;
- sezioni troppo compatte;
- fondi multicolore;
- animazioni spettacolari;
- componenti standard da dashboard;
- elementi futuristici.

Usare:
- linee sottili;
- molto spazio bianco;
- fotografia;
- testi editoriali;
- composizioni asimmetriche;
- microanimazioni molto eleganti.

==================================================
BRAND TEMPORANEO
==================================================

Al momento non è disponibile un logo definitivo.

Usare quindi un WORDMARK tipografico:

CASA LAFFRANCHI

Il wordmark deve essere elegante, minimale e facilmente sostituibile successivamente con il logo definitivo.

Non creare un simbolo o un logo grafico inventato.

==================================================
PALETTE TEMPORANEA
==================================================

Ispirarsi al sito Château.

Colori:

VERDE PROFONDO
#29410D

VERDE SECONDARIO
#506130

AVORIO
#F5F3ED

BEIGE CHIARISSIMO
#FAF9F5

LINEE / BORDI
#DDD7C7

TESTO PRINCIPALE
#171914

BIANCO
#FFFFFF

Utilizzare il verde soprattutto:
- nei titoli;
- nei dettagli;
- nei link;
- nei bottoni;
- nelle linee decorative.

La maggior parte del sito deve comunque rimanere bianca / avorio.

==================================================
TIPOGRAFIA
==================================================

Usare Google Fonts facilmente replicabili successivamente in WordPress.

TITOLI PRINCIPALI
Barlow Condensed

- uppercase
- medium / semibold
- forte tracking
- grandi dimensioni
- impostazione simile al riferimento Château

TESTI EDITORIALI / CORSIVI
Cormorant Garamond

- italic
- elegante
- utilizzato per sottotitoli, citazioni, denominazioni, categorie

TESTO CORRENTE
DM Sans

- regular
- leggibile
- molto pulito

==================================================
SPAZIATURE
==================================================

Desktop:
max-width principale circa 1500–1600px.

Molto spazio verticale:
120–180px tra grandi sezioni.

Evitare container troppo stretti.

Le immagini devono spesso arrivare quasi ai margini.

==================================================
FOTOGRAFIE
==================================================

IMPORTANTE:

Per questa prima versione usare ESCLUSIVAMENTE le fotografie fornite nel brief/progetto Casa Laffranchi.

NON utilizzare immagini stock esterne.

NON utilizzare fotografie generiche prese da internet.

Se per una determinata sezione manca un'immagine reale:

creare un placeholder fotografico neutro, elegante, con rapporto corretto e una piccola etichetta interna tipo:

"FOTO VIGNETO"
"FOTO FAMIGLIA"
"FOTO CANTINA"
"FOTO VINO"

in modo che l'immagine possa essere sostituita successivamente.

Non compromettere il layout se mancano fotografie.

==================================================
ARCHITETTURA DEL SITO
==================================================

Creare le seguenti route:

/
Home

/casa-laffranchi
Casa Laffranchi

/vigna-cantina
Vigna & Cantina

/vini
I nostri vini

/vini/:slug
Pagina singolo vino

/shop
Shop

/contatti
Contatti

/carrello
Carrello

/checkout
Checkout demo

==================================================
HEADER DESKTOP
==================================================

Header molto simile a Château.

Altezza circa 100–110px.

Sfondo bianco.

Linea orizzontale sottilissima inferiore.

A SINISTRA:
icona lente minimale +
"Ricerca..."

AL CENTRO:
menu distribuito intorno al wordmark.

HOME

CASA LAFFRANCHI

VIGNA & CANTINA

[CASA LAFFRANCHI]

I NOSTRI VINI

SHOP

CONTATTI

A DESTRA:
Carrello (0)

+

hamburger minimale a due linee.

Se lo spazio disponibile diventa insufficiente, comprimere progressivamente il menu mantenendo l'eleganza.

Header sticky dopo il primo scroll.

Transizione molto delicata.

==================================================
HEADER MOBILE
==================================================

Wordmark CASA LAFFRANCHI centrato.

A sinistra:
ricerca.

A destra:
carrello + hamburger.

Il menu mobile deve aprirsi fullscreen.

Sfondo avorio.

Voci molto grandi:

Home
Casa Laffranchi
Vigna & Cantina
I nostri vini
Shop
Contatti

In fondo:
telefono
email
indirizzo

==================================================
RICERCA
==================================================

Al click sull'icona ricerca aprire un overlay fullscreen molto minimale.

Titolo:
CERCA NEL SITO

Campo:
"Cerca vini, pagine o contenuti..."

Mostrare eventualmente suggerimenti:
Valens
Andreas
Burtulì
Rocolet

==================================================
HOME PAGE
==================================================

-----------------------------------
01 HERO
-----------------------------------

Hero quasi fullscreen.

Usare una fotografia reale di vigneto disponibile nel materiale Casa Laffranchi.

Se non disponibile:
placeholder FOTO VIGNETO CASA LAFFRANCHI.

Desktop:
altezza circa 85–90vh.

Header inizialmente può essere sovrapposto alla foto, se la leggibilità lo permette.

Overlay fotografico molto leggero.

Centro:

CASA LAFFRANCHI

VINO PREGIATO
DEI COLLI DI CASTENEDOLO

sotto, serif corsivo:

Una storia di famiglia,
raccontata in ogni bottiglia.

CTA:

SCOPRI I NOSTRI VINI

Secondaria:
LA NOSTRA STORIA

Inserire indicatore scroll molto discreto.

-----------------------------------
02 INTRODUZIONE
-----------------------------------

Grande sezione bianca.

Layout asimmetrico.

Colonna sinistra:

LA TERRA.
LA FAMIGLIA.
IL TEMPO.

Sottotitolo corsivo:

Vino dei Colli di Castenedolo

Colonna destra:

"L'Azienda Agricola Contrini Pasquina nasce a Castenedolo, nel cuore del bresciano.

Una conduzione interamente familiare che cura la vigna e la cantina con le proprie mani, in ogni fase — senza intermediari e senza compromessi.

Su terreni argillosi morenici coltiviamo vigne esposte al sole del mattino, che danno vita a vini di carattere autentico.

Espressione vera del territorio dei Colli di Castenedolo."

CTA:
SCOPRI CASA LAFFRANCHI

-----------------------------------
03 COMPOSIZIONE FOTOGRAFICA
-----------------------------------

Creare una sezione visuale simile alle composizioni del sito Château.

2 fotografie affiancate:

- territorio / vigneto;
- vino / famiglia / lavorazione.

Una fotografia più stretta, una più larga.

No card.

-----------------------------------
04 I NOSTRI VINI
-----------------------------------

Fondo avorio.

Titolo centrato:

I NOSTRI VINI

sotto:

Una storia diversa in ogni bottiglia

Mostrare inizialmente 4 prodotti in grandi colonne:

VALENS
Bianco · Cabernet Sauvignon
€ 13,00

CAELESTIS
Rosato · Merlot
€ 11,00

ANDREAS
Spumante Extra Brut · Metodo Classico
€ 19,00

BURTULÌ
Rosso · Merlot
€ 12,00

Per ora NON abbiamo fotografie scontornate delle bottiglie.

Creare quindi placeholder verticali estremamente eleganti mantenendo le proporzioni di una bottiglia.

NON inventare etichette.

NON utilizzare bottiglie stock.

Placeholder con scritta discreta:
FOTO BOTTIGLIA

Hover:
leggerissimo zoom
+
SCOPRI IL VINO

CTA generale:

SCOPRI TUTTI I VINI

-----------------------------------
05 TERRITORIO
-----------------------------------

Grande fotografia full-width.

Titolo:

I COLLI DI CASTENEDOLO

Corsivo:

Dove nasce Casa Laffranchi

Testo:

"Radici che affondano in terre argillose moreniche, esposte al primo sole del mattino.

Ogni filare racconta anni di cura, di mani che conoscono la vite come si conosce un vecchio amico fidato."

CTA:
SCOPRI LA VIGNA

-----------------------------------
06 VIGNA & CANTINA
-----------------------------------

Sezione molto editoriale.

Titolo:

DALLA VIGNA
ALLA BOTTIGLIA

Sottotitolo:
Il nostro modo di fare vino

Creare una timeline elegante simile alle sezioni storiche del tema Château.

01
IL VIGNETO

"Radici che affondano in terre argillose moreniche, esposte al primo sole del mattino. Ogni filare racconta anni di cura."

02
LA VENDEMMIA

"Il momento più atteso dell'anno. Si raccoglie grappolo per grappolo, a mano, con la stessa attenzione di sempre. Per i rossi si aspetta oltre metà ottobre: la pazienza è il primo ingrediente."

03
LA VINIFICAZIONE

"Pressatura soffice, temperature bassissime, separazione immediata delle bucce. Non interveniamo: accompagniamo. Ogni uva deve poter raccontare la propria storia."

04
L'AFFINAMENTO

"Il tempo è il nostro ingrediente segreto. Barrique di rovere per i rossi, inox per il rosato, Metodo Classico per gli spumanti."

-----------------------------------
07 CITAZIONE
-----------------------------------

Grande spazio bianco.

Al centro:

“Non facciamo vino:
ascoltiamo la terra,
e la terra ci risponde.”

Famiglia Laffranchi

Tipografia molto grande e raffinata.

-----------------------------------
08 I NOSTRI VALORI
-----------------------------------

Layout 3 colonne senza card.

01
CONDUZIONE FAMILIARE

"Ogni fase è seguita personalmente dalla famiglia, dalla vendemmia all'imbottigliamento."

02
RISPETTO DEI TEMPI NATURALI

"Non forziamo la vigna. Ogni annata si esprime secondo il proprio carattere."

03
TERRITORIO DI CASTENEDOLO

"Coltiviamo solo le nostre colline: il vino nasce prima di tutto da una buona terra."

Usare numeri molto grandi e sottili come elementi grafici.

-----------------------------------
09 GALLERY
-----------------------------------

Realizzare una fascia fotografica orizzontale simile a Château.

5 fotografie allineate.

Utilizzare solo immagini disponibili.

Le immagini devono avere altezze uguali ma larghezze variabili.

Hover:
zoom 1.03 molto lento.

-----------------------------------
10 FORMATI SPECIALI
-----------------------------------

Titolo:

FORMATI SPECIALI
& DISTILLATI

3 prodotti:

BURTULÌ MAGNUM
Merlot · 1,5 L
Cassetta in legno
€ 35,00

ANDREAS MAGNUM
Metodo Classico · 1,5 L
€ 48,00

ACQUAVITE
Distillato di vino Merlot
3 varianti
€ 22,00

CTA:
SCOPRI I FORMATI SPECIALI

-----------------------------------
11 ECOMMERCE CTA
-----------------------------------

Grande immagine editoriale.

Titolo:

PORTA CASA LAFFRANCHI
SULLA TUA TAVOLA.

Testo:

"Ordina i nostri vini direttamente online.
Bottiglie singole e confezioni regalo, con spedizione specializzata in tutta Italia."

CTA:
ACQUISTA ONLINE

-----------------------------------
12 FOOTER
-----------------------------------

Footer molto grande e arioso nello stile Château.

Centro:

CASA LAFFRANCHI

sotto serif:

Una storia di famiglia,
raccontata in ogni bottiglia.

Poi tre colonne.

COLONNA 1

Casa Laffranchi
Azienda Agricola Contrini Pasquina

COLONNA 2

Via Giovanni Bettoni, 42
25014 Castenedolo (BS)

+39 338 8834457
info@casalaffranchi.it

COLONNA 3

Home
Casa Laffranchi
Vigna & Cantina
I nostri vini
Shop
Contatti

In basso:

Privacy Policy
Cookie Policy
Condizioni di vendita

© Casa Laffranchi

==================================================
PAGINA CASA LAFFRANCHI
==================================================

URL:
/casa-laffranchi

-----------------------------------
HERO
-----------------------------------

Titolo:

UNA STORIA
DI FAMIGLIA

Corsivo:

Casa Laffranchi

Due fotografie editoriali affiancate.

-----------------------------------
STORIA
-----------------------------------

Titolo:

LA NOSTRA STORIA

Testo:

"L'Azienda Agricola Contrini Pasquina nasce a Castenedolo, nel cuore del bresciano.

Casa Laffranchi è prima di tutto una storia familiare.

La famiglia segue direttamente la vigna e la cantina, accompagnando ogni fase della produzione con le proprie mani.

Una scelta che significa controllo, responsabilità e rispetto della terra.

Nessun intermediario tra la vigna, la cantina e la bottiglia.

Solo il tempo necessario perché ogni annata possa raccontare il proprio carattere."

-----------------------------------
TERRITORIO
-----------------------------------

Grande immagine.

Titolo:

CASTENEDOLO

Testo:

"Su terreni argillosi morenici coltiviamo vigne esposte al sole del mattino.

È da queste colline che nasce l'identità dei nostri vini.

Una terra che non è soltanto il luogo in cui lavoriamo, ma parte integrante di ciò che mettiamo in bottiglia."

-----------------------------------
VALORI
-----------------------------------

Riprendere:

Conduzione familiare
Rispetto dei tempi naturali
Territorio di Castenedolo

-----------------------------------
CITAZIONE
-----------------------------------

“Il vino è la luce del sole
tenuta insieme dall'acqua.”

Galileo Galilei

-----------------------------------
CHIUSURA
-----------------------------------

Grande fotografia vigneto.

Titolo:

UNA STORIA DI FAMIGLIA,
RACCONTATA IN OGNI BOTTIGLIA.

CTA:
SCOPRI I NOSTRI VINI

==================================================
PAGINA VIGNA & CANTINA
==================================================

URL:
/vigna-cantina

Hero:

VIGNA
& CANTINA

Corsivo:
Dalla terra alla bottiglia

-----------------------------------
01 LA TERRA
-----------------------------------

Titolo:

TUTTO COMINCIA
DALLA TERRA.

Testo:

"Terre argillose moreniche, colline e sole del mattino.

Qui le radici trovano il terreno su cui costruire il carattere dei nostri vini."

Grande fotografia.

-----------------------------------
02 IL VIGNETO
-----------------------------------

"Radici che affondano in terre argillose moreniche, esposte al primo sole del mattino.

Ogni filare racconta anni di cura, di mani che conoscono la vite come si conosce un vecchio amico fidato."

-----------------------------------
03 LA VENDEMMIA
-----------------------------------

"Il momento più atteso dell'anno.

Si raccoglie grappolo per grappolo, a mano, con la stessa attenzione di sempre.

Per i rossi si aspetta oltre metà ottobre: la pazienza è il primo ingrediente."

-----------------------------------
04 LA VINIFICAZIONE
-----------------------------------

"Pressatura soffice, temperature bassissime, separazione immediata delle bucce.

Non interveniamo: accompagniamo.

Ogni uva deve poter raccontare la propria storia, senza forzature e senza fretta."

-----------------------------------
05 L'AFFINAMENTO
-----------------------------------

"Il tempo è il nostro ingrediente segreto.

Barrique di rovere per i rossi, inox per il rosato, Metodo Classico per gli spumanti.

Aspettiamo che ogni vino trovi la propria voce, la propria identità."

-----------------------------------
CLOSING
-----------------------------------

“Non facciamo vino:
ascoltiamo la terra,
e la terra ci risponde.”

Famiglia Laffranchi

CTA:
SCOPRI I NOSTRI VINI

==================================================
PAGINA I NOSTRI VINI
==================================================

URL:
/vini

Pagina più editoriale rispetto allo Shop.

Titolo:

I NOSTRI VINI

Corsivo:

Espressione dei Colli di Castenedolo

Introduzione:

"Ogni vino Casa Laffranchi nasce dalla stessa terra e racconta un carattere differente.

Bianchi, rosati, Metodo Classico, rossi e vini da meditazione: una produzione familiare che segue il ritmo della vigna e delle stagioni."

FILTRI:

TUTTI
BIANCHI
ROSATI
SPUMANTI
ROSSI
PASSITO
FORMATI SPECIALI
DISTILLATI

Griglia desktop:
3 colonne.

Tablet:
2 colonne.

Mobile:
1 colonna.

==================================================
DATABASE PRODOTTI
==================================================

Creare un array strutturato di prodotti.

-----------------------------------
VALENS
-----------------------------------

slug:
valens

categoria:
Bianco

tipologia:
Bianco · Cabernet Sauvignon

nome:
Valens

prezzo:
13.00

formato:
75 cl

vitigno:
Cabernet Sauvignon

colore:
Giallo paglierino con riflessi ramati

profumo:
Fragranze minerali del terreno morenico

gusto:
Sapido, fresco ed importante

gradazione:
13% vol.

gastronomia:
Antipasti, pesce, carni bianche

temperatura:
8 °C

descrizione breve:
"Giallo paglierino, minerale."

-----------------------------------
CAELESTIS
-----------------------------------

slug:
caelestis

categoria:
Rosato

tipologia:
Rosato · Merlot

nome:
Caelestis

prezzo:
11.00

formato:
75 cl

vitigno:
Merlot

colore:
Cerasuolo scarico

profumo:
Aromatico, lieve corposità

gusto:
Fresco, ampio, leggera acidità

gradazione:
13% vol.

gastronomia:
Pizza, antipasti, pesce, crostacei

temperatura:
8 °C

descrizione breve:
"Aromatico, fresco, ampio."

-----------------------------------
ANDREAS
-----------------------------------

slug:
andreas

categoria:
Spumante

tipologia:
Spumante Extra Brut · Metodo Classico

nome:
Andreas

prezzo:
19.00

formato:
75 cl

vitigno:
Cabernet Sauvignon

metodo:
Classico (Champenoise)

colore:
Giallo paglierino, perlage fine

gusto:
Secco ed elegante

gradazione:
12,5% vol.

gastronomia:
Aperitivo, pesce, carni bianche, dessert

temperatura:
7–8 °C

descrizione breve:
"Perlage fine, elegante."

-----------------------------------
BURTULÌ
-----------------------------------

slug:
burtuli

categoria:
Rosso

tipologia:
Rosso · Merlot

nome:
Burtulì

prezzo:
12.00

formato:
75 cl

vitigno:
Merlot

origine:
Terre argillose pedecollinari

colore:
Rosso rubino intenso

profumo:
Frutti di bosco maturi

gusto:
Tannico avvolgente, caldo, carezzevole

gradazione:
13% vol.

gastronomia:
Carni, polenta, formaggi stagionati

descrizione breve:
"Rubino intenso, frutti di bosco."

-----------------------------------
ROCOLET
-----------------------------------

slug:
rocolet

categoria:
Rosso

tipologia:
Rosso · Cabernet Sauvignon

nome:
Rocolet

prezzo:
12.00

formato:
75 cl

vitigno:
Cabernet Sauvignon

colore:
Rosso rubino tendente al granato

profumo:
Vinoso, caratteristico, erbaceo

gusto:
Sincero e secco, morbido e pieno

gradazione:
13,5% vol.

vendemmia:
Dopo metà ottobre

gastronomia:
Selvaggina, carni rosse, formaggi

descrizione breve:
"Granato, morbido e pieno."

-----------------------------------
SAN BARTOLOMEO
-----------------------------------

slug:
san-bartolomeo

categoria:
Passito

tipologia:
Passito dolce · Uve appassite

nome:
San Bartolomeo

prezzo:
28.00

formato:
50 cl

vitigno:
Uve selezionate e appassite

colore:
Bacca nera

profumo:
Mora, ribes, ciliegia

gusto:
Strutturato, grande armonia

gradazione:
15% vol.

gastronomia:
Formaggi, cioccolato, dolci natalizi

temperatura:
14–15 °C in piccoli calici

descrizione breve:
"Mora, ribes, grande armonia."

-----------------------------------
BURTULÌ MAGNUM
-----------------------------------

slug:
burtuli-magnum

categoria:
Formati speciali

tipologia:
Rosso · Burtulì Merlot 1,5 L

nome:
Burtulì Magnum

prezzo:
35.00

formato:
1,5 L in cassetta di legno incisa

vitigno:
Merlot

colore:
Rosso rubino intenso

gradazione:
13% vol.

gastronomia:
Carni, brasati, polenta

temperatura:
Temperatura ambiente

descrizione breve:
"Cassetta legno, da regalo."

-----------------------------------
ANDREAS MAGNUM
-----------------------------------

slug:
andreas-magnum

categoria:
Formati speciali

tipologia:
Spumante Extra Brut · Magnum

nome:
Andreas Magnum

prezzo:
48.00

formato:
1,5 L

vitigno:
Cabernet Sauvignon

metodo:
Classico (Champenoise)

colore:
Giallo paglierino, perlage fine

gradazione:
12,5% vol.

temperatura:
7–8 °C

descrizione breve:
"Per grandi occasioni."

-----------------------------------
ACQUAVITE
-----------------------------------

slug:
acquavite

categoria:
Distillati

tipologia:
Distillato di vino Merlot

nome:
Acquavite

prezzo:
22.00

formato:
50 cl

base:
Distillato di vino Merlot

varianti:
Bianca
Mirtillo
Caffè

gradazioni:
Bianca 42% vol.
Mirtillo 30% vol.
Caffè 30% vol.

servizio:
Ghiacciato

occasione:
Digestivo dopo pasto

descrizione breve:
"Bianca, Mirtillo, Caffè."

==================================================
PAGINA SINGOLO VINO
==================================================

URL:
/vini/:slug

Questa pagina deve essere particolarmente simile alla pagina prodotto Château.

DESKTOP:

grande layout 50/50.

SINISTRA:
gallery.

Una grande immagine verticale del prodotto.

Dato che non abbiamo le foto bottiglia:
utilizzare placeholder FOTO BOTTIGLIA.

A fianco o sotto:
2 fotografie editoriali del brief, se pertinenti.

DESTRA:

categoria in serif italic.

H1 molto grande.

Esempio:

VALENS

Prezzo:
€ 13,00

Descrizione breve.

Linea.

Quantità:

−  1  +

CTA:
AGGIUNGI AL CARRELLO

Sotto:

FORMATO
75 cl

GRADAZIONE
13% vol.

VITIGNO
Cabernet Sauvignon

Creare dinamicamente solo i campi presenti nel database.

NON mostrare righe vuote.

-----------------------------------
SCHEDA DEL VINO
-----------------------------------

Sotto il blocco principale creare tabs desktop:

IL VINO

CARATTERISTICHE

ABBINAMENTI

Su mobile:
accordion.

Mostrare i campi disponibili:

Vitigno
Metodo
Origine
Colore
Profumo
Gusto
Gradazione
Vendemmia
Gastronomia
Temperatura di servizio

-----------------------------------
PRODOTTI CORRELATI
-----------------------------------

Titolo grande centrato:

POTREBBERO PIACERTI ANCHE

4 prodotti.

Utilizzare prodotti della stessa categoria o complementari.

==================================================
SHOP
==================================================

URL:
/shop

Impostazione molto simile allo shop Château.

In alto:

SHOP

breadcrumb:
Home / Shop

Desktop:

area prodotti 75%
sidebar 25%.

Barra sopra prodotti:

"9 prodotti"

+

ordinamento:

Ordina per
Predefinito
Prezzo crescente
Prezzo decrescente
Nome

SIDEBAR:

FILTRA PER CATEGORIA

Tutti
Bianchi
Rosati
Spumanti
Rossi
Passito
Formati speciali
Distillati

FILTRA PER PREZZO

slider € 0 – € 50

FORMATO

50 cl
75 cl
1,5 L

Griglia prodotti desktop:
3 colonne.

Cards completamente piatte.

Immagine grande.

Categoria.

Nome.

Prezzo.

Hover:

AGGIUNGI AL CARRELLO

oppure

SCOPRI

==================================================
CARRELLO
==================================================

Creare un carrello frontend realmente funzionante.

Salvare temporaneamente i prodotti nel localStorage.

Il carrello deve permettere:

- aggiunta prodotto;
- eliminazione;
- modifica quantità;
- calcolo subtotale;
- totale;
- persistenza durante la sessione.

Layout molto minimale.

Titolo:

IL TUO CARRELLO

Colonne:

Prodotto
Prezzo
Quantità
Totale

Box riepilogo:

SUBTOTALE

SPEDIZIONE
Calcolata al checkout

TOTALE

CTA:

PROCEDI AL CHECKOUT

==================================================
CHECKOUT LOVABLE
==================================================

ATTENZIONE:

questa è SOLO una DEMO FRONTEND.

NON implementare gateway di pagamento reali.

NON implementare Stripe.

NON implementare PayPal.

La versione WordPress sarà successivamente sviluppata con WooCommerce.

Creare comunque UX completa.

Titolo:
CHECKOUT

Campi:

Nome
Cognome
Azienda (facoltativo)
Indirizzo
CAP
Città
Provincia
Telefono
Email

Metodo di spedizione:

Spedizione standard
48–72 ore

Metodi pagamento visualizzati ma non attivi:

Carta
PayPal
Bonifico bancario

CTA:

CONFERMA ORDINE

Al click mostrare pagina / modal:

GRAZIE PER IL TUO ORDINE

"Questa funzione verrà collegata al sistema di pagamento nella versione e-commerce definitiva."

==================================================
E-COMMERCE TRUST
==================================================

Nelle pagine Shop / Carrello / Checkout inserire discretamente:

ORDINE ONLINE
Scegli i vini e procedi al checkout in pochi click.

SPEDIZIONE SICURA
Imballaggio specializzato e consegna indicativa in 48–72 ore sul territorio italiano.

PAGAMENTO SICURO
Nella versione definitiva WordPress saranno previsti Carta, PayPal e bonifico.

==================================================
PAGINA CONTATTI
==================================================

URL:
/contatti

Layout simile alla pagina contatti Château.

Grande spazio bianco.

SINISTRA:

VIENI
A TROVARCI

Corsivo:

Casa Laffranchi

Testo:

"Siamo a Castenedolo,
in provincia di Brescia."

INDIRIZZO

Via Giovanni Bettoni, 42
25014 Castenedolo (BS)

CELLULARE

+39 338 8834457

EMAIL

info@casalaffranchi.it

ORARI

Lun–Ven
9:00–18:00

Sab
9:00–13:00
su appuntamento

DESTRA:

form.

Nome
Email
Telefono
Messaggio

checkbox:

"Ho letto e accetto l'informativa privacy."

CTA:

INVIA MESSAGGIO

Per ora il form può essere frontend demo con validazione.

Successivamente sarà collegato in WordPress.

-----------------------------------
MAPPA
-----------------------------------

Grande mappa full width.

Centro:

Via Giovanni Bettoni 42,
25014 Castenedolo (BS)

Coordinate disponibili:
45.4697 N
10.2926 E

Se non è possibile integrare una mappa senza API key:

creare un placeholder elegante della stessa altezza con:

CASA LAFFRANCHI
CASTENEDOLO (BS)

e pulsante:

APRI IN GOOGLE MAPS

==================================================
ANIMAZIONI
==================================================

Le animazioni devono essere estremamente raffinate.

Utilizzare:

- fade-up;
- opacity reveal;
- clip reveal immagini;
- piccoli translate Y;
- parallax immagini molto leggero;
- underline animato;
- text reveal sui grandi titoli;
- stagger delicato dei prodotti.

Durata:
600–1000ms.

Easing:
cubic-bezier elegante.

Non utilizzare:
bounce;
zoom aggressivi;
rotazioni;
effetti 3D;
animazioni continue.

Rispetto prefers-reduced-motion.

==================================================
HOVER
==================================================

LINK:
underline sottile che entra lateralmente.

BOTTONI:
background verde oppure inversione colore molto delicata.

IMMAGINI:
scale massimo 1.03.

PRODOTTI:
immagine leggermente ingrandita + comparsa CTA.

==================================================
BUTTON DESIGN
==================================================

Riprodurre la logica Château.

Bottoni rettangolari.

Nessun border radius.

Bordo 1px verde/beige.

Testo uppercase condensato.

Molto tracking.

Esempio:

┌              ┐
   SCOPRI
└              ┘

Si possono utilizzare dettagli grafici aperti negli angoli, come nel riferimento.

==================================================
RESPONSIVE
==================================================

Prestare grandissima attenzione alla versione mobile.

BREAKPOINT indicativi:

Desktop:
>= 1200

Tablet:
768–1199

Mobile:
< 768

Su mobile:

- titoli ridimensionati;
- hero almeno 80svh;
- immagini full width;
- padding laterale 22–24px;
- griglie trasformate in colonna;
- shop in una colonna;
- sidebar filtri trasformata in drawer;
- tabs prodotto trasformate in accordion;
- niente overflow orizzontale;
- CTA touch-friendly;
- header mobile semplificato.

==================================================
ACCESSIBILITÀ
==================================================

Implementare:

- semantic HTML;
- H1 unico per pagina;
- gerarchia H2/H3 corretta;
- alt text immagini;
- aria-label;
- focus state;
- contrasto WCAG;
- label form;
- keyboard navigation.

==================================================
SEO / STRUTTURA
==================================================

Anche se è un prototipo Lovable, costruire il sito con struttura facilmente migrabile in WordPress.

Ogni pagina deve avere:

title;
meta description;
canonical placeholder;
OpenGraph.

H1 suggeriti:

HOME
Casa Laffranchi — Vini dei Colli di Castenedolo

CASA LAFFRANCHI
Una storia di famiglia

VIGNA & CANTINA
Vigna e Cantina Casa Laffranchi

VINI
I nostri vini

SHOP
Acquista i vini Casa Laffranchi

CONTATTI
Contatti Casa Laffranchi

PRODOTTO
[nome vino] — Casa Laffranchi

==================================================
COMPONENTI RIUTILIZZABILI
==================================================

Creare componenti ordinati e facilmente convertibili successivamente in blocchi WordPress.

Esempio:

Header
MobileMenu
SearchOverlay
Hero
SectionTitle
EditorialSplit
ImagePair
QuoteSection
ValuesGrid
ProcessTimeline
WineCard
WineGrid
WineFilters
ProductGallery
ProductInfo
ProductSpecs
RelatedProducts
CartDrawer
Footer
ContactForm

Evitare componenti giganteschi monolitici.

==================================================
STRUTTURA DATI
==================================================

Separare:

content
products
navigation
contact information

dal layout.

Tutti i vini devono provenire da un unico array / file dati.

Non duplicare manualmente le informazioni dei prodotti nelle varie pagine.

La stessa fonte dati deve alimentare:

/vini
/shop
/vini/:slug
carrello
prodotti correlati

Questo è fondamentale perché successivamente verrà replicato in WooCommerce.

==================================================
DATI AZIENDALI
==================================================

BRAND

Casa Laffranchi

RAGIONE SOCIALE

Azienda Agricola Contrini Pasquina

PAYOFF

Vino pregiato dei Colli di Castenedolo

CLAIM PRINCIPALE

Una storia di famiglia,
raccontata in ogni bottiglia.

INDIRIZZO

Via Giovanni Bettoni, 42
25014 Castenedolo (BS)

TELEFONO

+39 338 8834457

EMAIL

info@casalaffranchi.it

SITO

www.casalaffranchi.it

==================================================
REGOLE FONDAMENTALI
==================================================

1.
Non inventare contenuti aziendali non presenti nel materiale.

2.
Non inventare premi, certificazioni o riconoscimenti.

3.
Non inventare anno di fondazione.

4.
Non utilizzare "est. 1970" o date del template Château.

5.
Non inventare degustazioni o visite guidate.

6.
Non creare prenotazione visite.

7.
Non inserire newsletter per ora.

8.
Non utilizzare stock photos.

9.
Non creare false bottiglie o etichette.

10.
Non modificare nomi, vitigni, gradazioni o prezzi forniti.

11.
Acquavite deve costare €22,00.

12.
Tutto il sito deve essere esclusivamente in italiano.

13.
Il checkout Lovable è solamente dimostrativo.

14.
La futura versione WordPress utilizzerà WooCommerce per ordini e pagamenti reali.

15.
Il design deve rimanere tecnicamente semplice da replicare con WordPress.

==================================================
RISULTATO FINALE ATTESO
==================================================

Il risultato deve apparire come un vero sito premium di una cantina italiana già pronto per essere presentato al cliente.

La percezione deve essere:

autentica
familiare
raffinata
territoriale
contemporanea
editoriale
premium

La sensazione visiva deve essere molto vicina a Château Qode, ma completamente personalizzata sui contenuti Casa Laffranchi.

La fotografia e il vino devono essere protagonisti.

L'interfaccia deve quasi scomparire.

Molto bianco.
Molto spazio.
Tipografia forte.
Immagini grandi.
Dettagli sottili.
Animazioni raffinate.

Non trasformare il progetto in un normale ecommerce.

Prima viene Casa Laffranchi.
Poi il territorio.
Poi il vino.
Infine la vendita.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://casa-laffranchi-bozza.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/33f6c412-00ea-4aac-92e4-fe48375045c0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
