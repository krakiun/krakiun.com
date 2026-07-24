---
title: "PII Offline Remover — anonimização de dados pessoais, 100 % no teu Mac"
date: 2026-07-24T17:07:07+03:00
image: '/images/pii-offline-remover.png'
tags: ['privacy', 'macos', 'ai']
---

Lancei uma nova aplicação para macOS: **PII Offline Remover** — deteta e censura
dados pessoais em texto e documentos PDF. Nomes, números de identificação, IBAN,
moradas, e-mails, telefones e mais 17 tipos — **23 tipos de entidades** no
total.

Encontras a app na [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12).

## Porque a criei

Enviamos cada vez mais texto para assistentes de IA: contratos, requerimentos,
cartas oficiais, e-mails. E esse texto está cheio de dados pessoais — teus ou,
pior, dos teus clientes. Uma vez enviado para a nuvem, deixas de o controlar.

A maioria das ferramentas de anonimização tem exatamente o problema que afirma
resolver: envia o teu documento para os servidores delas para o «proteger».
Sempre me pareceu absurdo.

## A diferença: tudo funciona localmente

**Nada sai nunca do teu computador.** O modelo de IA corre nativamente no teu
Mac — sem nuvem, sem conta, sem ligação à internet enquanto trabalhas. Podes
desligar a rede por completo e a aplicação funciona exatamente da mesma forma.

Por dentro há um modelo de linguagem treinado especificamente para documentos
romenos (nomes, números de identificação, moradas, empresas, instituições), a
correr nativamente em Rust. Por cima existe uma camada determinística de
verificação: para campos de formato rígido — números de identificação, números
fiscais, IBAN — a aplicação valida matematicamente o dígito de controlo em vez
de apenas «adivinhar». Um identificador válido é detetado mesmo quando o modelo
hesita.

## O que faz, em concreto

- **Anonimiza texto ou PDF** — cola o texto ou arrasta o PDF para a aplicação, e
  as entidades detetadas aparecem realçadas por tipo num editor visual.
  Confirmas, ajustas, exportas.
- **Escolhes exatamente o que é censurado** — queres esconder apenas os números
  de identificação e os IBAN, mas manter as cidades? Marcas o que te interessa.
- **A anonimização é reversível** — cada documento gera um dicionário com o qual
  podes repor o texto original. O meu cenário preferido: anonimizar um contrato,
  enviá-lo a um LLM para análise e depois devolver os valores reais à resposta.
  A IA nunca viu os dados reais.

## Para quem é

Para qualquer pessoa que trabalhe com documentos de terceiros: advogados,
contabilistas, RH, médicos, funcionários públicos — ou simplesmente para ti,
quando queres a ajuda de uma IA num documento pessoal sem lhe entregar também a
tua identidade.

## Experimenta

A aplicação está na [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12),
com **3 dias de teste gratuito**. No primeiro arranque descarrega o modelo de IA
(uma única vez) e, a partir daí, ficas completamente offline.

Os teus dados são teus. E assim devem continuar.
