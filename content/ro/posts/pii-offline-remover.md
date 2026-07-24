---
title: "PII Offline Remover — anonimizare de date personale, 100% pe calculatorul tău"
date: 2026-07-24T17:07:07+03:00
image: '/images/pii-offline-remover.png'
tags: ['privacy', 'macos', 'ai']
---

Am lansat o aplicație nouă pentru macOS: **PII Offline Remover** — detectează și
cenzurează datele cu caracter personal din text și PDF-uri. Nume, CNP, IBAN, adrese,
e-mail, telefon și încă 17 tipuri de date, în total **23 de tipuri de entități**.

O găsești pe [Mac App Store](https://apps.apple.com/ro/app/pii-offline-remover/id6790925363?l=ro&mt=12).

## De ce am făcut-o

Trimitem tot mai mult text către asistenți AI: contracte, cereri, adrese oficiale,
e-mailuri. Iar textul ăla e plin de date personale — ale tale sau, mai grav, ale
clienților tăi. Odată trimis în cloud, nu-l mai controlezi.

Uneltele de anonimizare existente au aceeași problemă pe care pretind că o rezolvă:
îți trimit documentul pe serverele lor ca să-l „protejeze". Mi s-a părut absurd.

## Diferența: totul rulează local

**Nimic nu părăsește calculatorul tău.** Modelul de inteligență artificială rulează
nativ pe Mac — fără cloud, fără cont, fără conexiune la internet în timpul lucrului.
Poți să tai netul complet și aplicația funcționează la fel.

Sub capotă e un model de limbaj antrenat special pentru documente românești
(nume, CNP-uri, adrese, firme, instituții), care rulează nativ în Rust. Peste el
am pus un strat determinist de verificare: pentru câmpuri cu formă strictă —
CNP, CUI, IBAN — aplicația validează matematic checksum-ul, nu doar „ghicește".
Un CNP valid e prins chiar dacă modelul ar ezita.

## Ce face, concret

- **Anonimizezi text sau PDF** — lipești textul sau tragi PDF-ul în aplicație,
  iar entitățile detectate apar evidențiate, pe tipuri, într-un editor vizual.
  Confirmi, ajustezi, exporți.
- **Alegi exact ce se cenzurează** — vrei să ascunzi doar CNP-urile și IBAN-urile,
  dar să păstrezi orașele? Bifezi ce te interesează.
- **Anonimizarea e reversibilă** — fiecare document generează un dicționar cu care
  poți reface textul original. Scenariul meu preferat: anonimizezi un contract,
  îl trimiți unui LLM să-l analizeze, iar la răspuns pui valorile reale înapoi.
  AI-ul nu a văzut niciodată datele reale.

## Pentru cine e

Pentru oricine lucrează cu documentele altora: avocați, contabili, HR, medici,
funcționari — sau pur și simplu pentru tine, când vrei să ceri ajutorul unui AI
pe un act personal fără să-i dai și buletinul.

## Încearcă

Aplicația e pe [Mac App Store](https://apps.apple.com/ro/app/pii-offline-remover/id6790925363?l=ro&mt=12),
cu **3 zile de probă gratuită**. La prima pornire descarcă modelul AI (o singură
dată), apoi ești complet offline.

Datele tale sunt ale tale. Așa ar trebui să rămână.
