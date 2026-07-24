---
title: "PII Offline Remover — anonimizzazione dei dati personali, 100 % sul tuo Mac"
date: 2026-07-24T17:07:07+03:00
image: '/images/krakiun-avatar.png'
tags: ['privacy', 'macos', 'ai']
---

Ho lanciato una nuova app per macOS: **PII Offline Remover** — rileva e oscura i
dati personali in testi e documenti PDF. Nomi, numeri di identificazione, IBAN,
indirizzi, e-mail, telefoni e altri 17 tipi — **23 tipi di entità** in totale.

La trovi sul [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12).

## Perché l'ho creata

Inviamo sempre più testo agli assistenti IA: contratti, domande, lettere
ufficiali, e-mail. E quel testo è pieno di dati personali — tuoi o, peggio, dei
tuoi clienti. Una volta inviato nel cloud, non lo controlli più.

La maggior parte degli strumenti di anonimizzazione ha esattamente il problema
che dichiara di risolvere: carica il tuo documento sui propri server per
« proteggerlo ». Mi è sempre sembrato assurdo.

## La differenza: tutto funziona in locale

**Niente lascia mai il tuo computer.** Il modello di IA gira nativamente sul tuo
Mac — niente cloud, niente account, nessuna connessione internet mentre lavori.
Puoi staccare la rete del tutto e l'app funziona esattamente allo stesso modo.

Sotto il cofano c'è un modello linguistico addestrato specificamente per i
documenti rumeni (nomi, numeri di identificazione, indirizzi, aziende,
istituzioni), eseguito nativamente in Rust. Sopra c'è uno strato deterministico
di verifica: per i campi dal formato rigido — numeri di identificazione, codici
fiscali, IBAN — l'app convalida matematicamente il checksum invece di limitarsi
a « indovinare ». Un identificativo valido viene individuato anche quando il
modello esita.

## Cosa fa, concretamente

- **Anonimizza testo o PDF** — incolla il testo o trascina il PDF nell'app: le
  entità rilevate compaiono evidenziate per tipo in un editor visuale. Confermi,
  regoli, esporti.
- **Scegli esattamente cosa viene oscurato** — vuoi nascondere solo i numeri di
  identificazione e gli IBAN, ma mantenere le città? Spunti ciò che ti
  interessa.
- **L'anonimizzazione è reversibile** — ogni documento genera un dizionario con
  cui puoi ripristinare il testo originale. Il mio scenario preferito:
  anonimizzare un contratto, inviarlo a un LLM per l'analisi e poi rimettere i
  valori reali nella risposta. L'IA non ha mai visto i dati reali.

## Per chi è

Per chiunque lavori con i documenti degli altri: avvocati, commercialisti, HR,
medici, funzionari — o semplicemente per te, quando vuoi l'aiuto di un'IA su un
documento personale senza consegnarle anche la tua identità.

## Provala

L'app è sul [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12),
con **3 giorni di prova gratuita**. Al primo avvio scarica il modello di IA (una
sola volta), poi sei completamente offline.

I tuoi dati sono tuoi. E così dovrebbero restare.
