---
title: ShareUSB — Politica de confidențialitate
build:
  list: never
  render: always
---

**Data intrării în vigoare: 19 octombrie 2026**

## Despre aplicație

**ShareUSB** (bundle id `com.krakiun.shareusb`) este o aplicație desktop pentru Windows, macOS și Linux prin care un tehnician lucrează pe telefoane Android și dispozitive USB conectate la alt calculator, după ce proprietarul acelui calculator aprobă cererea. Este publicată de **krakiun-lab** (krakiun.com). Serverul aplicației rulează la **usb.krakiun.com**.

## Cum funcționează

Fiecare copie a aplicației primește un ID permanent de 9 cifre. Un tehnician se conectează la acel ID, iar proprietarul calculatorului acceptă sau respinge cererea și alege ce permite (telefoane, dispozitive USB sau amândouă). După aceea, datele dintre telefon sau dispozitivul USB și calculatorul tehnicianului trec prin serverul nostru, criptate cu TLS. **Serverul doar transmite acest trafic, nu îl stochează**, deci imaginile de ecran, fișierele și comenzile schimbate cu un telefon nu sunt salvate la noi.

Fișierele descărcate de pe un telefon se salvează doar pe calculatorul tău, iar cele încărcate ajung doar pe telefonul ales.

## Ce colectăm

**Identitatea dispozitivului:** ID-ul de 9 cifre și un secret generat de serverul nostru. Păstrăm doar un hash al secretului.

**Contul opțional:** dacă îți faci cont, adresa de email și parola. Parola e stocată ca hash (bcrypt), niciodată în clar.

**Date de conexiune:** adresa IP a calculatoarelor care se conectează la server. Apare în jurnalele serverului, iar IP-ul unui tehnician îi este arătat persoanei care trebuie să-l aprobe.

**Partajări și utilizare:** dacă partajezi un dispozitiv cu alți utilizatori, păstrăm ce e partajat, cu cine și până când. Păstrăm și un jurnal de utilizare (ce dispozitiv, de către ce ID, când și cât timp), ca proprietarul să vadă cine i-a folosit dispozitivele. Se păstrează și ID-urile blocate, grupurile și creditele din grupuri.

**Conexiuni AI (opțional):** dacă legi un asistent AI de contul tău, păstrăm tokenurile de acces pentru acea conexiune și lista de unelte permise. Le poți revoca din aplicație și sunt revocate automat când îți schimbi parola.

## Rapoarte de erori

Când aplicația se închide neașteptat, trimite un raport de eroare (versiunea, sistemul de operare, detalii tehnice ale erorii) către **Sentry**, un serviciu de raportare a erorilor. Rapoartele nu conțin emailul, parolele, fișierele sau conținutul telefoanelor.

## Emailuri

Trimitem doar emailuri tranzacționale: confirmarea contului, coduri și linkuri de resetare a parolei și notificări de securitate despre cont. Livrarea se face prin **Amazon SES**. Fără newslettere, fără marketing.

## Ce nu facem

Fără reclame, fără SDK-uri de analiză sau urmărire, fără vânzare de date și fără partajare cu terți, în afara furnizorilor necesari serviciului: furnizorul de găzduire, **Cloudflare** (protecția rețelei din fața serverului), **Amazon SES** (email) și **Sentry** (rapoarte de erori).

## Securitate

Traficul dintre aplicație și server e criptat cu TLS. Nimeni nu se poate conecta la dispozitivele tale fără aprobarea ta din aplicație, iar un tehnician poate fi deconectat sau blocat oricând. Parolele și secretele dispozitivelor sunt stocate ca hash.

## Păstrare și ștergere

Identitățile, conturile, partajările și jurnalele de utilizare se păstrează cât timp folosești serviciul. Pentru ștergerea contului și a datelor legate de ID-ul tău, trimite o cerere prin **https://krakiun.com/contact/**; le ștergem prompt din sistemele active și din copiile de siguranță într-un termen rezonabil, de regulă cel mult 30 de zile. Jurnalele serverului se păstrează doar cât e necesar pentru funcționarea și protecția serviciului.

## Drepturile tale

Ai dreptul de acces, rectificare, ștergere, portabilitate și opoziție privind prelucrarea datelor personale. Pentru orice cerere, scrie-ne prin **https://krakiun.com/contact/**.

## Copii

Aplicația este un instrument profesional și nu se adresează persoanelor sub 16 ani.

## Modificări

Dacă politica se schimbă, actualizăm această pagină și data intrării în vigoare.
