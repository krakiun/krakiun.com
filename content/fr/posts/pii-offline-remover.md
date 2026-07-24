---
title: "PII Offline Remover — anonymisation des données personnelles, 100 % sur votre Mac"
date: 2026-07-24T17:07:07+03:00
image: '/images/krakiun-avatar.png'
tags: ['privacy', 'macos', 'ai']
---

Je viens de lancer une nouvelle application macOS : **PII Offline Remover** —
elle détecte et caviarde les données personnelles dans les textes et les PDF.
Noms, numéros d'identification, IBAN, adresses, e-mails, téléphones et 17 autres
types — **23 types d'entités** au total.

Vous la trouverez sur le [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12).

## Pourquoi je l'ai créée

Nous envoyons de plus en plus de texte aux assistants IA : contrats, demandes,
courriers officiels, e-mails. Et ce texte regorge de données personnelles — les
vôtres ou, pire, celles de vos clients. Une fois envoyé dans le cloud, vous n'en
avez plus le contrôle.

La plupart des outils d'anonymisation ont exactement le problème qu'ils
prétendent résoudre : ils téléversent votre document sur leurs serveurs pour le
« protéger ». Cela m'a toujours semblé absurde.

## La différence : tout fonctionne en local

**Rien ne quitte jamais votre ordinateur.** Le modèle d'IA s'exécute nativement
sur votre Mac — pas de cloud, pas de compte, pas de connexion internet pendant
le travail. Vous pouvez couper le réseau complètement, l'application fonctionne
exactement pareil.

Sous le capot, un modèle de langage entraîné spécifiquement pour les documents
roumains (noms, numéros d'identification, adresses, entreprises, institutions),
exécuté nativement en Rust. Par-dessus, une couche déterministe de
vérification : pour les champs au format strict — numéros d'identification,
identifiants fiscaux, IBAN — l'application valide mathématiquement la somme de
contrôle au lieu de simplement « deviner ». Un identifiant valide est repéré
même quand le modèle hésite.

## Ce qu'elle fait, concrètement

- **Anonymiser du texte ou des PDF** — collez le texte ou glissez le PDF dans
  l'application : les entités détectées apparaissent surlignées par type dans un
  éditeur visuel. Vous confirmez, ajustez, exportez.
- **Choisir exactement ce qui est caviardé** — masquer seulement les numéros
  d'identification et les IBAN, mais garder les villes ? Cochez ce qui vous
  intéresse.
- **L'anonymisation est réversible** — chaque document génère un dictionnaire
  permettant de restaurer le texte original. Mon scénario préféré : anonymiser
  un contrat, l'envoyer à un LLM pour analyse, puis remettre les vraies valeurs
  dans la réponse. L'IA n'a jamais vu les données réelles.

## Pour qui

Pour tous ceux qui travaillent avec les documents des autres : avocats,
comptables, RH, médecins, fonctionnaires — ou tout simplement pour vous, quand
vous voulez l'aide d'une IA sur un document personnel sans lui livrer votre
identité au passage.

## Essayez-la

L'application est sur le [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12),
avec **3 jours d'essai gratuit**. Au premier lancement, elle télécharge le
modèle d'IA (une seule fois), puis vous êtes entièrement hors ligne.

Vos données vous appartiennent. Elles devraient le rester.
