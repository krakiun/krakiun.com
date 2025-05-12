---
title: "Rabla pentru tractoare, doar pentru privilegiați? Suspiciuni grave privind manipularea sesiunii AFM"
date: 2025-05-12T11:02:59+03:00
image: "/images/rabla la tractoare - site blocat.png"
tags: []
---

Astăzi, în doar câteva secunde de la deschiderea sesiunii de înscriere în programul **RABLA pentru tractoare**, fondurile s-au epuizat. Deși părea imposibil, a fost „prea rapid ca să fie adevărat”. Însă, pentru cei care au o minimă experiență în infrastructură IT, semnele arată clar că această sesiune ar putea fi compromisă tehnic – dacă nu chiar intenționat fraudată.

## Ce s-a întâmplat?

Din primele secunde după ora anunțată, majoritatea utilizatorilor (inclusiv eu) nu am mai putut accesa serverul AFM. Site-ul a devenit complet nefuncțional, afișând erori sau blocându-se complet. Însă, la câteva minute după, când traficul părea să se fi „calmat”, toate fondurile erau deja epuizate.

**Întrebarea logică:** _Cine a reușit să depună dosare în timp ce serverul era căzut pentru toată lumea?_

## Două scenarii probabile – ambele grave

### 1. Exploatarea unui sistem de *load balancing* în defavoarea publicului

În mod normal, un sistem informatic bine conceput distribuie traficul către mai multe servere (*load balancing*), pentru a suporta un număr mare de utilizatori. Să presupunem că AFM avea 10 servere. Dacă 9 dintre acestea sunt accesate de publicul larg și sunt intenționat blocate prin suprasolicitare (*flooding*), iar un singur server este lăsat „curat”, **acel server poate procesa în liniște dosarele „cuiva”**.

Faptul că sistemul a picat pentru toți, dar totuși s-au înregistrat depuneri, este un semnal de alarmă major.

### 2. Existența unui server „de test” identic cu cel real, cunoscut doar de o minoritate

Cu o zi înainte de lansarea oficială a sesiunii, a apărut online un **PDF de test**, care conținea date reale despre formularul de înscriere. Acest document:
- nu a fost publicat pe site-ul oficial AFM;
- nu era cunoscut de publicul larg;
- a fost foarte util pentru cei care au vrut să creeze **automatizări**.

Ce înseamnă asta?

Este foarte probabil că a existat un **server de test identic cu cel real**, dar cunoscut și accesibil doar unei minorități privilegiate. Cei care l-au folosit au avut:
- timp să testeze procedura;
- acces la formularul real înaintea tuturor;
- capacitatea de a pregăti scripturi automate care au depus dosarele **instant**, fără greșeli, fără întârzieri.

## De ce spun că e o problemă gravă

1. **Suprasolicitarea serverelor pare artificială.** Un simplu formular PDF sau un fișier nu ar trebui să blocheze complet un server – decât dacă cineva a orchestrat asta.
2. **Accesul la un server „paralel” este o portiță neoficială**, care oferă un avantaj incorect.
3. **Automatizările bazate pe datele din acel PDF test** arată că procesul putea fi manipulat dinaintea startului oficial.

## Ce solicit public

- **Publicarea unui raport tehnic complet** privind infrastructura folosită: câte servere au fost, ce trafic au avut, ce IP-uri au depus cu succes.
- **Investigarea accesului la serverul de test**: cine l-a folosit, când și cu ce scop.
- **Resetarea sesiunii** și relansarea acesteia într-un mod echitabil pentru toți participanții.
- **Audit extern și independent al infrastructurii IT AFM**, pentru a preveni viitoare nereguli.

## Concluzie

Dacă aceste suspiciuni se confirmă – fie prin intenție, fie prin neglijență – întreaga sesiune de înscrieri a fost compromisă. Fermierii din România, care sperau la un sprijin real, au fost trași pe sfoară de un sistem netransparent și nedrept.

Nu cerem imposibilul – doar **șanse egale pentru toți**. Iar acest principiu trebuie apărat, mai ales când vorbim despre fonduri publice.

---

**Ai fost afectat de această situație?**  
Lasă un comentariu sau scrie-mi un mesaj direct. Cu cât suntem mai mulți care cerem răspunsuri, cu atât mai greu va fi să fim ignorați.