---
title: "PII Offline Remover — personal data anonymization, 100% on your own Mac"
date: 2026-07-24T17:07:07+03:00
image: '/images/pii-offline-remover.png'
tags: ['privacy', 'macos', 'ai']
---

I've launched a new macOS app: **PII Offline Remover** — it detects and redacts
personal data in text and PDF documents. Names, national ID numbers, IBANs,
addresses, emails, phone numbers and 17 more — **23 entity types** in total.

You can find it on the [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12).

## Why I built it

We send more and more text to AI assistants: contracts, applications, official
letters, emails. And that text is full of personal data — yours or, worse, your
clients'. Once it's sent to the cloud, you no longer control it.

Most anonymization tools have the very problem they claim to solve: they upload
your document to their servers in order to "protect" it. That always struck me
as absurd.

## The difference: everything runs locally

**Nothing ever leaves your computer.** The AI model runs natively on your Mac —
no cloud, no account, no internet connection needed while you work. You can turn
off your network entirely and the app works exactly the same.

Under the hood there's a language model trained specifically for Romanian
documents (names, national IDs, addresses, companies, institutions), running
natively in Rust. On top of it sits a deterministic verification layer: for
strictly formatted fields — national ID numbers, tax IDs, IBANs — the app
mathematically validates the checksum instead of just "guessing". A valid ID
gets caught even when the model hesitates.

## What it does, concretely

- **Anonymize text or PDFs** — paste text or drop a PDF into the app, and the
  detected entities show up highlighted by type in a visual editor. You confirm,
  adjust, export.
- **Choose exactly what gets redacted** — want to hide only ID numbers and IBANs
  but keep city names? Just tick what you care about.
- **Anonymization is reversible** — every document generates a dictionary you can
  use to restore the original text. My favorite scenario: anonymize a contract,
  send it to an LLM for analysis, then put the real values back into the answer.
  The AI never saw the real data.

## Who it's for

Anyone who works with other people's documents: lawyers, accountants, HR,
doctors, public servants — or simply you, when you want an AI's help with a
personal document without handing over your identity along with it.

## Try it

The app is on the [Mac App Store](https://apps.apple.com/app/pii-offline-remover/id6790925363?mt=12),
with a **3-day free trial**. On first launch it downloads the AI model (once),
and from then on you're fully offline.

Your data is yours. It should stay that way.
