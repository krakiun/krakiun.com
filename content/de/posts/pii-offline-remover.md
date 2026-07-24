---
title: "PII Offline Remover — Anonymisierung persönlicher Daten, 100 % auf deinem Mac"
date: 2026-07-24T17:07:07+03:00
image: '/images/krakiun-avatar.png'
tags: ['privacy', 'macos', 'ai']
---

Ich habe eine neue macOS-App veröffentlicht: **PII Offline Remover** — sie erkennt
und schwärzt personenbezogene Daten in Texten und PDF-Dokumenten. Namen, nationale
ID-Nummern, IBANs, Adressen, E-Mails, Telefonnummern und 17 weitere — insgesamt
**23 Entitätstypen**.

Du findest sie im [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12).

## Warum ich sie gebaut habe

Wir schicken immer mehr Text an KI-Assistenten: Verträge, Anträge, offizielle
Schreiben, E-Mails. Und dieser Text ist voller persönlicher Daten — deiner oder,
schlimmer noch, der deiner Kunden. Einmal in die Cloud geschickt, hast du keine
Kontrolle mehr darüber.

Die meisten Anonymisierungstools haben genau das Problem, das sie zu lösen
vorgeben: Sie laden dein Dokument auf ihre Server hoch, um es zu „schützen".
Das fand ich schon immer absurd.

## Der Unterschied: alles läuft lokal

**Nichts verlässt jemals deinen Rechner.** Das KI-Modell läuft nativ auf deinem
Mac — keine Cloud, kein Konto, keine Internetverbindung während der Arbeit nötig.
Du kannst das Netzwerk komplett abschalten, die App funktioniert genauso.

Unter der Haube arbeitet ein Sprachmodell, das speziell für rumänische Dokumente
trainiert wurde (Namen, ID-Nummern, Adressen, Firmen, Institutionen) und nativ
in Rust läuft. Darüber liegt eine deterministische Prüfschicht: Bei streng
formatierten Feldern — ID-Nummern, Steuernummern, IBANs — validiert die App die
Prüfsumme mathematisch, statt nur zu „raten". Eine gültige ID wird erkannt,
selbst wenn das Modell zögert.

## Was sie konkret kann

- **Text oder PDFs anonymisieren** — Text einfügen oder ein PDF in die App
  ziehen; die erkannten Entitäten erscheinen nach Typ hervorgehoben in einem
  visuellen Editor. Bestätigen, anpassen, exportieren.
- **Genau wählen, was geschwärzt wird** — nur ID-Nummern und IBANs verbergen,
  aber Städtenamen behalten? Einfach ankreuzen, was dich interessiert.
- **Die Anonymisierung ist umkehrbar** — jedes Dokument erzeugt ein Wörterbuch,
  mit dem du den Originaltext wiederherstellen kannst. Mein Lieblingsszenario:
  einen Vertrag anonymisieren, ihn von einem LLM analysieren lassen und danach
  die echten Werte wieder einsetzen. Die KI hat die echten Daten nie gesehen.

## Für wen sie ist

Für alle, die mit den Dokumenten anderer arbeiten: Anwälte, Buchhalter, HR,
Ärzte, Beamte — oder einfach für dich, wenn du die Hilfe einer KI bei einem
persönlichen Dokument willst, ohne gleich deine Identität mitzuliefern.

## Probier sie aus

Die App gibt es im [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12),
mit **3 Tagen kostenloser Testphase**. Beim ersten Start lädt sie das KI-Modell
herunter (einmalig), danach bist du vollständig offline.

Deine Daten gehören dir. Und so sollte es bleiben.
