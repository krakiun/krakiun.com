---
title: "De ce am făcut Dialog Private Messenger (și ce câștig din asta)"
date: 2026-10-31T13:50:00+02:00
image: '/images/dialog-private-messenger-chat.png'
tags: ['dialog', 'securitate', 'ai']
---

În ultima vreme primesc des aceeași întrebare: **de ce am făcut o aplicație de conversații private, atât de orientată spre privacy, și ce urmăresc cu ea?** Așa că am zis să răspund o dată, aici, pentru toată lumea.

![Dialog Private Messenger - conversație în aplicație](/images/dialog-private-messenger-chat.png)

## Adevărul despre cum a apărut Dialog

Realitatea e mult mai puțin spectaculoasă decât și-ar imagina unii. **[Dialog](https://dialog.pm) nu a pornit cu un obiectiv anume.** A ieșit din vreo 2-3 ore de vibe coding și alte 2-3 ore de discuții cu AI-ul.

I-am dat lui Fable o idee simplă, ca pe o provocare: *„hai să facem un WhatsApp”*. L-am pus să-mi pună întrebări, i-am pus și eu întrebări, și din toată discuția a ieșit un plan. Planul ăla i l-am dat apoi AI-ului să-l implementeze.

Dacă nu mă înșel, totul s-a întâmplat într-o miercuri. Joi seara mi se resetau creditele de la Fable și m-am gândit să le folosesc la ceva util, că altfel le pierdeam oricum. **Așa a apărut Dialog.**

Normal că am corectat câteva erori din interfață, dar per total nu a fost foarte multă muncă.

## „Făcută repede” nu înseamnă „făcută prost”

Faptul că a fost un proiect de weekend nu înseamnă că aplicația nu e utilă sau că nu e sigură.

Lucrez în IT de vreo 20 de ani, fac development de tot atunci și mă pricep la cyber security cât să știu să protejez o aplicație. Iar partea cea mai importantă: **Dialog folosește librăria de criptare de la Signal**, deci criptarea se bazează pe aceeași fundație folosită de una dintre cele mai respectate aplicații de mesagerie privată.

Văd tot mai multă lume care are nevoie de o aplicație de chat sigură sau care cere o recomandare. Iar cea mai sigură aplicație pe care o pot recomanda cu mâna pe inimă e una pe care am făcut-o eu și știu exact ce e în ea.

Și ca să fie treaba treabă: **dacă cineva găsește în Dialog o vulnerabilitate de tip RCE** (Remote Code Execution), adică o breșă prin care poate executa cod pe dispozitivul altui utilizator, și mi-o raportează mie, **ofer un bonus de 1.000 USD în crypto.**

## De ce nu folosește număr de telefon

Mulți mă întreabă de ce Dialog nu cere număr de telefon. Nu e vorba doar de confidențialitate, deși e un bonus frumos. Sincer, cu număr de telefon ar fi fost **mult mai ușor** ca oamenii să-și găsească și să-și schimbe contactele.

Problema e alta: **SMS-urile costă bani.** Pentru verificarea numerelor ar fi trebuit să plătesc SMS-uri, iar la nivel mondial, cu o aplicație publică pentru tot globul, costurile cresc foarte repede. Din câte am înțeles, Signal a cheltuit o grămadă de bani ca să țină în picioare serviciul bazat pe numere de telefon. Eu nu-mi permit așa ceva.

M-am gândit și la adrese de e-mail, dar n-am văzut rostul. Așa că am ales cea mai simplă variantă: **un ID generat aleatoriu.** Fără număr, fără e-mail, fără date personale.

## Ce câștig eu din asta? Nimic.

Asta e întrebarea pe care o primesc cel mai des, așa că o să fiu cât se poate de clar:

- **Nu câștig nimic din Dialog.** Nu există niciun beneficiu financiar, sub nicio formă.
- **Nu urmăresc să fac business sau profit** din aplicație.
- **Totul e [open source](https://github.com/DialogPM), și aplicația, și backend-ul.** Oricine poate verifica codul, inclusiv partea de criptare, și oricine poate instala backend-ul pe propriul server.
- **Nu o să înființez o firmă** ca s-o administrez, decât poate în situații excepționale.
- **Nu o să investesc bani în marketing.** Dacă primește vreun fel de promovare, probabil o vor face alții, nu eu.

Logica e simplă: dacă nu câștig nimic din ea, nici nu pot să investesc în ea, pentru că nu-mi permit.

Sigur că m-aș bucura dacă ar avea succes. Dar nu cred că aș avea alt beneficiu în afară de satisfacția că am făcut ceva care funcționează.

## Un cadou, nimic mai mult

Dacă e să rezum totul într-o frază:

> **Dialog e pur și simplu un cadou pentru cei care au nevoie de un loc unde să vorbească în siguranță.**

Un proiect făcut în timpul liber, din credite care oricum expirau, pe care l-am pus la dispoziția oricui are nevoie de el.

Mulțumesc tuturor celor care au citit articolul și, mai ales, celor care folosesc deja aplicația.
