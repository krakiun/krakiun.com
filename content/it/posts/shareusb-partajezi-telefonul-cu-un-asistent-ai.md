---
title: "ShareUSB: controlla il tuo telefono da remoto con ChatGPT e Claude"
date: 2026-07-23T14:00:00+02:00
image: '/images/shareusb-ai-telefon.png'
tags: ['shareusb', 'ai', 'automazione', 'adb']
---

ShareUSB non è nato come idea di business. È nato da un grattacapo che mi trascinavo da un po' e che non ero riuscito a risolvere con niente.

## Da dove è partito tutto

In diversi dei miei progetti avevo bisogno di ottenere l'accesso, via internet, ai telefoni di utenti e clienti. Il motivo è banale: **la maggior parte delle persone non sa fare le cose sul telefono.** Glielo spieghi, mandi i passaggi, fai gli screenshot — e comunque non viene fuori. Mi sono reso conto che sarebbe stato dieci volte più semplice se potessi entrare direttamente nel loro telefono, col loro permesso, e risolvere sul momento.

Poi è arrivata la seconda esigenza: **le automazioni.** Volevo che certe cose accadessero da sole, e la prima opzione che ti viene in mente è il browser. Ho provato per quella strada e ho sbattuto contro un muro: il browser è una soluzione poco affidabile. Si blocca, va in crash, le app ti individuano, i problemi si accumulano uno sull'altro. Non ci puoi costruire nulla di stabile sopra.

Così ho cambiato approccio. Se comunque mi serve una connessione da remoto, perché non automatizzare **direttamente tramite il telefono**, attraverso una connessione internet, e lasciare che l'IA esegua i comandi?

## Perché tramite il telefono, e non il browser

Qui ho notato una cosa che mi ha chiarito tutta la direzione: **l'IA è molto brava a comunicare con i telefoni via ADB.** Molto meglio che a guidare un browser. Le dai accesso ad ADB e se la cava in modo naturale — apre app, tocca, legge lo schermo, esegue comandi. Non inciampa più come fa in un browser.

Così ho deciso di andare dritto su quella strada: collegare l'IA ad ADB e darle l'accesso. Senza giri. Il telefono, come strumento, nelle mani dell'assistente.

Tramite il telefono, tutto è più semplice per un'IA. Si può fare **marketing automatico**, si possono **risolvere problemi**, si può offrire **assistenza da remoto** a chi è bloccato, si possono **pubblicare post**. E per me, la cosa più importante è questa:

> Il modo più stabile per fare marketing automatico e per pubblicare è dare all'IA accesso al tuo telefono. Con il browser ci sono problemi seri. Con il telefono, no.

## Ciò che il browser non può fare: lo stesso IP

È un dettaglio che conta enormemente e che molti trascurano. Alcune app fanno storie se pubblichi da un IP straniero, da un altro paese, da un altro dispositivo. Ti bloccano, ti chiedono verifiche, si comportano in modo strano.

Con ShareUSB, anche se sei a Honolulu o a Dubai, **pubblichi dal tuo IP** — quello di casa, sul tuo telefono. Per l'app sembra che tu sia tranquillamente a casa, come ogni volta. Questo ti dà una stabilità che nessuna soluzione via browser o via server esterno può offrire.

## Come appare in pratica

L'idea in sé è semplicissima. Lasci il telefono collegato a **un computer, un Raspberry Pi, qualsiasi cosa che consumi poca corrente** e resti acceso. Tutto qui. Da quel momento in poi, funziona da remoto.

Sei fuori casa, in viaggio, al mare, ovunque — e l'IA lavora per te sul telefono rimasto a casa. Le chiedi ciò che vuoi che faccia, e lo fa. È esattamente per questo che l'ho costruito: **voglio che l'IA lavori al posto mio mentre sono fuori casa.**

## Cosa voglio che rimanga

Non ho costruito ShareUSB per spuntare la casella di una moda con l'IA. L'ho costruito perché io, personalmente, avevo questa esigenza — accesso da remoto ai telefoni e automazioni che reggano davvero. Ne è uscito uno strumento che fa due cose insieme:

- mi dà **accesso da remoto** ai telefoni delle persone che non se la cavano da sole, col loro permesso;
- e lascia che l'**IA lavori direttamente sul telefono**, in modo stabile, dal mio IP, mentre sono via.

Se hai mai provato la frustrazione di spiegare qualcosa a qualcuno al telefono che avresti risolto in due secondi se avessi potuto intervenire tu stesso, o hai voluto che qualcosa si pubblicasse da solo senza doverlo sorvegliare — è più o meno da lì che è nato ShareUSB.

Lo trovi su [shareusb.app](https://shareusb.app)
