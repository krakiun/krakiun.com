---
title: "ShareUSB: controla o teu telefone à distância com o ChatGPT e o Claude"
date: 2026-07-23T18:40:00+02:00
image: '/images/shareusb-ai-telefon.png'
tags: ['shareusb', 'ai', 'automacao', 'adb']
---

O ShareUSB não começou como uma ideia de negócio. Começou de uma dor de cabeça que eu arrastava havia algum tempo e que não tinha conseguido resolver com nada.

## De onde veio tudo

Em vários dos meus projetos precisava de obter acesso, pela internet, aos telefones de utilizadores e clientes. O motivo é banal: **a maioria das pessoas não sabe fazer coisas no telefone.** Explicas, mandas os passos, tiras capturas de ecrã — e mesmo assim não sai. Percebi que seria dez vezes mais simples se pudesse entrar diretamente no telefone deles, com a autorização deles, e resolver na hora.

Depois veio a segunda necessidade: **as automações.** Queria que certas coisas acontecessem sozinhas, e a primeira opção que te vem à cabeça é o navegador. Tentei por essa via e bati numa parede: o navegador é uma solução pouco fiável. Congela, cai, as apps detetam-te, os problemas acumulam-se uns sobre os outros. Não consegues construir nada estável em cima disso.

Por isso mudei de abordagem. Se de qualquer forma preciso de uma ligação à distância, porque não automatizar **diretamente através do telefone**, por uma ligação à internet, e deixar a IA executar os comandos?

## Porquê através do telefone, e não do navegador

Foi aqui que reparei numa coisa que clarificou toda a minha direção: **a IA é muito boa a comunicar com os telefones por ADB.** Muito melhor do que a conduzir um navegador. Dás-lhe acesso ao ADB e desenrasca-se com naturalidade — abre apps, toca, lê o ecrã, executa comandos. Já não tropeça como tropeça num navegador.

Então decidi ir direto por esse caminho: ligar a IA ao ADB e dar-lhe acesso. Sem desvios. O telefone, como ferramenta, nas mãos do assistente.

Através do telefone, tudo é mais simples para uma IA. Pode fazer-se **marketing automático**, podem **resolver-se problemas**, pode oferecer-se **assistência à distância** a alguém que está encravado, podem **publicar-se publicações**. E para mim, o mais importante é isto:

> A forma mais estável de fazer marketing automático e de publicar é dar à IA acesso ao teu telefone. Pelo navegador há problemas sérios. Pelo telefone, não.

## O que o navegador não consegue fazer: o mesmo IP

É um detalhe que importa enormemente e que muita gente ignora. Algumas apps ficam estranhas se publicares a partir de um IP estrangeiro, de outro país, de outro dispositivo. Bloqueiam-te, pedem-te verificações, comportam-se de forma esquisita.

Com o ShareUSB, mesmo que estejas em Honolulu ou no Dubai, **publicas a partir do teu próprio IP** — o de casa, no teu próprio telefone. Para a app parece que estás tranquilamente em casa, como sempre. Isso dá-te uma estabilidade que nenhuma solução por navegador ou por servidor externo consegue oferecer.

## Como é na prática

A ideia em si é simplíssima. Deixas o telefone ligado a **um computador, um Raspberry Pi, qualquer coisa que consuma pouca corrente** e fique ligada. É só isto. A partir desse momento, funciona à distância.

Estás longe de casa, em viagem, na praia, onde quer que seja — e a IA trabalha por ti no telefone que ficou em casa. Pedes-lhe o que queres que faça, e ela fá-lo. Foi exatamente para isso que o construí: **quero que a IA trabalhe no meu lugar enquanto estou fora de casa.**

## O que quero que fique

Não construí o ShareUSB para assinalar a casinha de uma moda com IA. Construí-o porque eu, pessoalmente, tinha esta necessidade — acesso à distância a telefones e automações que aguentem mesmo. O que saiu foi uma ferramenta que faz duas coisas ao mesmo tempo:

- dá-me **acesso à distância** aos telefones das pessoas que não se safam sozinhas, com a autorização delas;
- e deixa a **IA trabalhar diretamente no telefone**, de forma estável, a partir do meu próprio IP, enquanto estou fora.

Se alguma vez sentiste a frustração de explicar algo a alguém ao telefone que terias resolvido em dois segundos se pudesses intervir tu próprio, ou quiseste que algo se publicasse sozinho sem teres de estar a vigiar — foi mais ou menos daí que nasceu o ShareUSB.

Encontra-lo em [shareusb.app](https://shareusb.app)
