---
title: "ShareUSB: controlează-ți telefonul de la distanță cu ChatGPT și Claude"
date: 2026-07-23T18:40:00+02:00
image: '/images/shareusb-ai-telefon.png'
tags: ['shareusb', 'ai', 'automatizare', 'adb']
---

ShareUSB nu a pornit dintr-o idee de business. A pornit dintr-o bătaie de cap pe care o aveam de ceva vreme și pe care n-o rezolvasem cu nimic.

## De unde a plecat totul

În mai multe din proiectele mele aveam nevoie să primesc acces, prin internet, la telefoanele unor utilizatori și clienți. Motivul e banal: **majoritatea oamenilor nu știu să facă lucruri pe telefon.** Le explici, le trimiți pași, faci capturi de ecran — și tot nu iese. Mi-am dat seama că ar fi de zece ori mai simplu dacă aș putea intra eu direct pe telefonul lor, cu acordul lor, și aș rezolva pe loc.

Apoi a venit a doua nevoie: **automatizările.** Voiam ca anumite lucruri să se facă singure, iar prima variantă la care te gândești e browserul. Am încercat pe ruta asta și m-am lovit de un zid: browserul e o soluție nesigură. Se blochează, cade, aplicațiile te detectează, apar probleme peste probleme. Nu poți construi ceva stabil pe el.

Așa că am schimbat abordarea. Dacă tot am nevoie de conexiune la distanță, de ce să nu automatizez **direct prin telefon**, printr-o conexiune la internet, și să las AI-ul să execute comenzile?

## De ce prin telefon, și nu prin browser

Aici am observat ceva ce mi-a limpezit toată direcția: **AI-ul e foarte bun la comunicarea cu telefoanele prin ADB.** Mult mai bun decât la învârtit un browser. Îi dai acces la ADB și se descurcă natural — deschide aplicații, apasă, citește ecranul, rulează comenzi. Nu se mai poticnește ca în browser.

Atunci am decis să merg direct pe firul ăsta: să conectez AI-ul la ADB și să-i dau acces. Fără ocolișuri. Telefonul, ca unealtă, în mâna asistentului.

Prin telefon totul e mai simplu pentru un AI. Se poate face **marketing automat**, se pot **rezolva probleme**, se poate oferi **asistență la distanță** cuiva care nu se descurcă, se pot **publica postări**. Iar pentru mine, cel mai important lucru e ăsta:

> Cel mai stabil mod de a face marketing automat și de a publica e să-i dai AI-ului acces la telefonul tău. Prin browser sunt probleme serioase. Prin telefon, nu.

## Partea pe care browserul n-o poate face: același IP

E un detaliu care contează enorm și pe care mulți îl trec cu vederea. Unele aplicații fac probleme dacă publici de pe un IP străin, dintr-o altă țară, de pe alt dispozitiv. Te blochează, îți cer verificări, se poartă ciudat.

Cu ShareUSB, chiar dacă tu ești în Honolulu sau în Dubai, **publici de pe propriul tău IP** — cel de acasă, de pe telefonul tău. Pentru aplicație pare că ești liniștit acasă, ca de fiecare dată. Asta îți dă o stabilitate pe care nicio soluție prin browser sau prin server extern nu ți-o dă.

## Cum arată, practic

Ideea în sine e simplă de tot. Lași telefonul conectat la **un calculator, un Raspberry Pi, orice consumă puțin curent** și stă pornit. Atât. Din momentul ăla, funcționează de la distanță.

Tu ești plecat de acasă, în deplasare, la mare, oriunde — iar AI-ul muncește pentru tine pe telefonul rămas acasă. Îi ceri ce vrei să facă, și face. Exact pentru asta am construit-o: **vreau ca atunci când plec de acasă, AI-ul să lucreze în locul meu.**

## Ce vreau să rămână

N-am construit ShareUSB ca să bifez un trend cu AI. Am construit-o pentru că aveam eu, personal, nevoia asta — acces la distanță pe telefoane și automatizări care chiar țin. A ieșit un instrument care face două lucruri deodată:

- îmi dă **acces la distanță** pe telefoanele oamenilor care nu se descurcă, cu acordul lor;
- și lasă **AI-ul să lucreze direct pe telefon**, stabil, de pe IP-ul meu, cât eu sunt plecat.

Dacă și tu ai simțit vreodată frustrarea de a explica cuiva la telefon ceva ce ai fi rezolvat în două secunde dacă intrai tu direct, sau ai vrut ca ceva să se publice singur fără să stai tu cu ochii pe el — cam de acolo a pornit și ShareUSB.

O găsești la [shareusb.app](https://shareusb.app)
