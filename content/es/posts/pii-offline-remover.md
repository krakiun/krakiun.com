---
title: "PII Offline Remover — anonimización de datos personales, 100 % en tu Mac"
date: 2026-07-24T17:07:07+03:00
image: '/images/krakiun-avatar.png'
tags: ['privacy', 'macos', 'ai']
---

He lanzado una nueva aplicación para macOS: **PII Offline Remover** — detecta y
censura datos personales en texto y documentos PDF. Nombres, números de
identificación, IBAN, direcciones, correos, teléfonos y 17 tipos más — en total
**23 tipos de entidades**.

La encuentras en el [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12).

## Por qué la hice

Enviamos cada vez más texto a asistentes de IA: contratos, solicitudes, cartas
oficiales, correos. Y ese texto está lleno de datos personales — tuyos o, peor,
de tus clientes. Una vez enviado a la nube, ya no lo controlas.

La mayoría de las herramientas de anonimización tienen justo el problema que
dicen resolver: suben tu documento a sus servidores para «protegerlo». Siempre
me pareció absurdo.

## La diferencia: todo funciona en local

**Nada sale nunca de tu ordenador.** El modelo de IA se ejecuta de forma nativa
en tu Mac — sin nube, sin cuenta, sin conexión a internet mientras trabajas.
Puedes desconectar la red por completo y la aplicación funciona igual.

Por dentro hay un modelo de lenguaje entrenado específicamente para documentos
rumanos (nombres, números de identificación, direcciones, empresas,
instituciones), ejecutado de forma nativa en Rust. Encima hay una capa
determinista de verificación: para campos con formato estricto — números de
identificación, códigos fiscales, IBAN — la aplicación valida matemáticamente la
suma de control en vez de solo «adivinar». Un identificador válido se detecta
aunque el modelo dude.

## Qué hace, en concreto

- **Anonimiza texto o PDF** — pega el texto o arrastra el PDF a la aplicación,
  y las entidades detectadas aparecen resaltadas por tipo en un editor visual.
  Confirmas, ajustas, exportas.
- **Eliges exactamente qué se censura** — ¿quieres ocultar solo los números de
  identificación y los IBAN, pero conservar las ciudades? Marcas lo que te
  interesa.
- **La anonimización es reversible** — cada documento genera un diccionario con
  el que puedes restaurar el texto original. Mi escenario favorito: anonimizar
  un contrato, enviarlo a un LLM para que lo analice y luego devolver los
  valores reales a la respuesta. La IA nunca vio los datos reales.

## Para quién es

Para cualquiera que trabaje con documentos de otras personas: abogados,
contables, RR. HH., médicos, funcionarios — o simplemente para ti, cuando
quieres la ayuda de una IA con un documento personal sin entregarle también tu
identidad.

## Pruébala

La aplicación está en el [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12),
con **3 días de prueba gratuita**. En el primer arranque descarga el modelo de
IA (una sola vez) y desde entonces estás completamente offline.

Tus datos son tuyos. Y así deberían seguir.
