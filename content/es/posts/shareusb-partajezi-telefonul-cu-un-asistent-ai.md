---
title: "ShareUSB: controla tu teléfono a distancia con ChatGPT y Claude"
date: 2026-07-23T14:00:00+02:00
image: '/images/shareusb-ai-telefon.png'
tags: ['shareusb', 'ai', 'automatizacion', 'adb']
---

ShareUSB no nació como una idea de negocio. Nació de un quebradero de cabeza que arrastraba desde hacía tiempo y que no había logrado resolver con nada.

## De dónde vino todo

En varios de mis proyectos necesitaba conseguir acceso, por internet, a los teléfonos de usuarios y clientes. El motivo es de lo más simple: **la mayoría de la gente no sabe hacer cosas en el teléfono.** Se lo explicas, le mandas los pasos, haces capturas — y aun así no sale. Me di cuenta de que sería diez veces más simple si pudiera entrar directamente en su teléfono, con su permiso, y resolverlo en el momento.

Luego vino la segunda necesidad: **las automatizaciones.** Quería que ciertas cosas pasaran solas, y la primera opción que se te ocurre es el navegador. Probé por esa vía y me di contra un muro: el navegador es una solución poco fiable. Se congela, se cae, las apps te detectan, los problemas se acumulan uno sobre otro. No puedes construir nada estable sobre él.

Así que cambié de enfoque. Si de todos modos necesito una conexión remota, ¿por qué no automatizar **directamente a través del teléfono**, mediante una conexión a internet, y dejar que la IA ejecute los comandos?

## Por qué a través del teléfono, y no del navegador

Aquí noté algo que me aclaró toda la dirección: **la IA es muy buena comunicándose con los teléfonos por ADB.** Mucho mejor que manejando un navegador. Le das acceso a ADB y se desenvuelve con naturalidad — abre apps, pulsa, lee la pantalla, ejecuta comandos. Ya no tropieza como lo hace en un navegador.

Así que decidí ir directo por ese camino: conectar la IA a ADB y darle acceso. Sin rodeos. El teléfono, como herramienta, en manos del asistente.

A través del teléfono todo es más simple para una IA. Se puede hacer **marketing automático**, se pueden **resolver problemas**, se puede ofrecer **asistencia remota** a alguien que está atascado, se pueden **publicar publicaciones**. Y para mí, lo más importante es esto:

> La forma más estable de hacer marketing automático y de publicar es darle a la IA acceso a tu teléfono. Por el navegador hay problemas serios. Por el teléfono, no.

## Lo que el navegador no puede hacer: la misma IP

Es un detalle que importa enormemente y que mucha gente pasa por alto. Algunas apps se ponen raras si publicas desde una IP extranjera, desde otro país, desde otro dispositivo. Te bloquean, te piden verificaciones, se comportan de forma extraña.

Con ShareUSB, aunque estés en Honolulu o en Dubái, **publicas desde tu propia IP** — la de casa, en tu propio teléfono. Para la app parece que estás tranquilamente en casa, como siempre. Eso te da una estabilidad que ninguna solución por navegador ni por servidor externo puede ofrecer.

## Cómo se ve en la práctica

La idea en sí es de lo más sencilla. Dejas el teléfono conectado a **un ordenador, una Raspberry Pi, cualquier cosa que consuma poca corriente** y quede encendida. Ya está. A partir de ese momento, funciona a distancia.

Estás fuera de casa, de viaje, en la playa, donde sea — y la IA trabaja para ti en el teléfono que quedó en casa. Le pides lo que quieres que haga, y lo hace. Para eso exactamente lo construí: **quiero que la IA trabaje en mi lugar mientras estoy fuera de casa.**

## Lo que quiero que quede

No construí ShareUSB para marcar la casilla de una moda con IA. Lo construí porque yo, personalmente, tenía esta necesidad — acceso remoto a teléfonos y automatizaciones que de verdad aguanten. Lo que salió es una herramienta que hace dos cosas a la vez:

- me da **acceso remoto** a los teléfonos de las personas que no se apañan solas, con su permiso;
- y deja que la **IA trabaje directamente en el teléfono**, de forma estable, desde mi propia IP, mientras estoy fuera.

Si alguna vez has sentido la frustración de explicarle algo a alguien por teléfono que habrías resuelto en dos segundos si hubieras podido intervenir tú mismo, o has querido que algo se publique solo sin tener que estar vigilándolo — de ahí, más o menos, salió ShareUSB.

Lo encuentras en [shareusb.app](https://shareusb.app)
