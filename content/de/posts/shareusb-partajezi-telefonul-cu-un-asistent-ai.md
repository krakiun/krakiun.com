---
title: "ShareUSB: Steuere dein Handy aus der Ferne mit ChatGPT und Claude"
date: 2026-07-23T18:40:00+02:00
image: '/images/shareusb-ai-telefon.png'
tags: ['shareusb', 'ai', 'automatisierung', 'adb']
---

ShareUSB begann nicht als Geschäftsidee. Es begann mit einem Problem, das ich schon länger hatte und mit nichts lösen konnte.

## Wo alles anfing

In mehreren meiner Projekte musste ich über das Internet Zugriff auf die Handys von Nutzern und Kunden bekommen. Der Grund ist banal: **Die meisten Menschen wissen nicht, wie man Dinge auf dem Handy macht.** Du erklärst es, du schickst Schritte, du machst Screenshots — und es klappt trotzdem nicht. Mir wurde klar, dass es zehnmal einfacher wäre, wenn ich einfach direkt auf ihr Handy gehen könnte, mit ihrer Erlaubnis, und es an Ort und Stelle löse.

Dann kam das zweite Bedürfnis: **Automatisierung.** Ich wollte, dass bestimmte Dinge von selbst passieren, und die erste Option, die einem einfällt, ist der Browser. Ich habe diesen Weg versucht und bin gegen eine Wand gelaufen: Der Browser ist eine unzuverlässige Lösung. Er friert ein, stürzt ab, Apps erkennen dich, Probleme türmen sich auf Probleme. Darauf lässt sich nichts Stabiles aufbauen.

Also habe ich meinen Ansatz geändert. Wenn ich ohnehin eine Fernverbindung brauche, warum dann nicht **direkt über das Handy** automatisieren, über eine Internetverbindung, und die KI die Befehle ausführen lassen?

## Warum über das Handy und nicht über den Browser

Hier ist mir etwas aufgefallen, das meine ganze Richtung klarmachte: **KI ist sehr gut darin, über ADB mit Handys zu kommunizieren.** Viel besser als beim Steuern eines Browsers. Du gibst ihr ADB-Zugriff und sie kommt natürlich zurecht — sie öffnet Apps, tippt, liest den Bildschirm, führt Befehle aus. Sie stolpert nicht mehr so wie im Browser.

Also habe ich beschlossen, diesen Weg direkt zu gehen: die KI mit ADB verbinden und ihr Zugriff geben. Ohne Umwege. Das Handy als Werkzeug in der Hand des Assistenten.

Über das Handy ist alles einfacher für eine KI. Man kann **automatisches Marketing** machen, man kann **Probleme lösen**, man kann jemandem, der nicht weiterkommt, **Fernunterstützung** bieten, man kann **Beiträge veröffentlichen**. Und für mich ist das Wichtigste dies:

> Der stabilste Weg, automatisches Marketing zu machen und zu veröffentlichen, ist, der KI Zugriff auf dein Handy zu geben. Über den Browser gibt es ernste Probleme. Über das Handy nicht.

## Was der Browser nicht kann: dieselbe IP

Es ist ein Detail, das enorm wichtig ist und das viele übersehen. Manche Apps spielen verrückt, wenn du von einer fremden IP veröffentlichst, aus einem anderen Land, von einem anderen Gerät. Sie sperren dich, verlangen Verifizierungen, verhalten sich seltsam.

Mit ShareUSB veröffentlichst du, selbst wenn du in Honolulu oder Dubai bist, **von deiner eigenen IP** — der von zu Hause, auf deinem eigenen Handy. Für die App sieht es so aus, als wärst du ganz ruhig zu Hause, wie jedes Mal. Das gibt dir eine Stabilität, die keine browserbasierte Lösung und kein externer Server bieten kann.

## Wie es in der Praxis aussieht

Die Idee selbst ist kinderleicht. Du lässt das Handy an **einem Computer, einem Raspberry Pi, irgendetwas, das wenig Strom zieht** und angeschaltet bleibt, angeschlossen. Das war's. Von diesem Moment an funktioniert es aus der Ferne.

Du bist weg von zu Hause, unterwegs, am Meer, wo auch immer — und die KI arbeitet für dich auf dem Handy, das zu Hause geblieben ist. Du sagst ihr, was sie tun soll, und sie tut es. Genau dafür habe ich es gebaut: **Ich will, dass die KI an meiner Stelle arbeitet, während ich nicht zu Hause bin.**

## Was bleiben soll

Ich habe ShareUSB nicht gebaut, um einen KI-Trend abzuhaken. Ich habe es gebaut, weil ich persönlich dieses Bedürfnis hatte — Fernzugriff auf Handys und Automatisierung, die wirklich hält. Herausgekommen ist ein Werkzeug, das zwei Dinge auf einmal tut:

- es gibt mir **Fernzugriff** auf die Handys von Menschen, die allein nicht klarkommen, mit ihrer Erlaubnis;
- und es lässt die **KI direkt auf dem Handy arbeiten**, stabil, von meiner eigenen IP, während ich weg bin.

Wenn du je die Frustration gespürt hast, jemandem am Telefon etwas zu erklären, das du in zwei Sekunden gelöst hättest, wenn du selbst hättest eingreifen können, oder wenn du wolltest, dass etwas von selbst veröffentlicht wird, ohne dass du danebensitzt — genau daher kommt ShareUSB.

Du findest es unter [shareusb.app](https://shareusb.app)
