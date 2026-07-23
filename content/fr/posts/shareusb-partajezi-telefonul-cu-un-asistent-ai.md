---
title: "ShareUSB : contrôle ton téléphone à distance avec ChatGPT et Claude"
date: 2026-07-23T18:40:00+02:00
image: '/images/shareusb-ai-telefon.png'
tags: ['shareusb', 'ai', 'automatisation', 'adb']
---

ShareUSB n'est pas parti d'une idée d'entreprise. C'est parti d'un casse-tête que je traînais depuis un moment et que je n'avais réussi à résoudre avec rien.

## D'où tout est parti

Dans plusieurs de mes projets, j'avais besoin d'obtenir un accès, par internet, aux téléphones d'utilisateurs et de clients. La raison est banale : **la plupart des gens ne savent pas faire les choses sur un téléphone.** Tu expliques, tu envoies les étapes, tu fais des captures d'écran — et ça ne marche toujours pas. Je me suis rendu compte que ce serait dix fois plus simple si je pouvais entrer directement sur leur téléphone, avec leur accord, et régler ça sur-le-champ.

Puis est venu le deuxième besoin : **les automatisations.** Je voulais que certaines choses se fassent toutes seules, et la première option qui vient à l'esprit, c'est le navigateur. J'ai essayé par cette voie et je me suis heurté à un mur : le navigateur est une solution peu fiable. Il se fige, il plante, les applis te détectent, les problèmes s'empilent les uns sur les autres. On ne peut rien construire de stable dessus.

Alors j'ai changé d'approche. Si j'ai de toute façon besoin d'une connexion à distance, pourquoi ne pas automatiser **directement via le téléphone**, par une connexion internet, et laisser l'IA exécuter les commandes ?

## Pourquoi via le téléphone, et pas le navigateur

C'est là que j'ai remarqué quelque chose qui a clarifié toute ma direction : **l'IA est très douée pour communiquer avec les téléphones via ADB.** Bien plus qu'à piloter un navigateur. Tu lui donnes un accès ADB et elle se débrouille naturellement — elle ouvre des applis, appuie, lit l'écran, exécute des commandes. Elle ne trébuche plus comme dans un navigateur.

J'ai donc décidé d'aller droit dans cette direction : connecter l'IA à ADB et lui donner l'accès. Sans détours. Le téléphone, comme outil, entre les mains de l'assistant.

Via le téléphone, tout est plus simple pour une IA. On peut faire du **marketing automatique**, on peut **résoudre des problèmes**, on peut offrir une **assistance à distance** à quelqu'un qui est bloqué, on peut **publier des posts**. Et pour moi, le plus important, c'est ceci :

> La façon la plus stable de faire du marketing automatique et de publier, c'est de donner à l'IA l'accès à ton téléphone. Par le navigateur, il y a de sérieux problèmes. Par le téléphone, non.

## Ce que le navigateur ne peut pas faire : la même IP

C'est un détail qui compte énormément et que beaucoup négligent. Certaines applis font des histoires si tu publies depuis une IP étrangère, depuis un autre pays, depuis un autre appareil. Elles te bloquent, te demandent des vérifications, se comportent bizarrement.

Avec ShareUSB, même si tu es à Honolulu ou à Dubaï, tu **publies depuis ta propre IP** — celle de chez toi, sur ton propre téléphone. Pour l'appli, on dirait que tu es tranquillement chez toi, comme à chaque fois. Ça te donne une stabilité qu'aucune solution par navigateur ou par serveur externe ne peut offrir.

## À quoi ça ressemble en pratique

L'idée en elle-même est toute simple. Tu laisses le téléphone connecté à **un ordinateur, un Raspberry Pi, n'importe quoi qui consomme peu de courant** et reste allumé. C'est tout. À partir de ce moment-là, ça fonctionne à distance.

Tu es loin de chez toi, en déplacement, au bord de la mer, n'importe où — et l'IA travaille pour toi sur le téléphone resté à la maison. Tu lui demandes ce que tu veux qu'elle fasse, et elle le fait. C'est exactement pour ça que je l'ai construit : **je veux que l'IA travaille à ma place pendant que je suis loin de chez moi.**

## Ce que je veux qu'il reste

Je n'ai pas construit ShareUSB pour cocher la case d'une tendance IA. Je l'ai construit parce que moi, personnellement, j'avais ce besoin — un accès à distance aux téléphones et des automatisations qui tiennent vraiment la route. Ce qui en est sorti, c'est un outil qui fait deux choses à la fois :

- il me donne un **accès à distance** aux téléphones des gens qui ne s'en sortent pas seuls, avec leur accord ;
- et il laisse l'**IA travailler directement sur le téléphone**, de façon stable, depuis ma propre IP, pendant que je suis absent.

Si tu as déjà ressenti la frustration d'expliquer quelque chose à quelqu'un au téléphone que tu aurais réglé en deux secondes si tu avais pu intervenir toi-même, ou si tu as voulu que quelque chose se publie tout seul sans que tu aies à le surveiller — c'est à peu près de là qu'est venu ShareUSB.

Tu le trouves sur [shareusb.app](https://shareusb.app)
