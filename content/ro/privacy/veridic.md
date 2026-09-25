---
title: Veridic — Privacy Policy
---

**Effective date: September 26, 2026**

## Summary

**Veridic processes your text entirely on your Mac when you use a local model. Your texts, documents and images are never uploaded, transmitted, or seen by us.** There are no user accounts, no analytics, no tracking, and no advertising. The app works fully offline; it only makes network connections when you explicitly ask it to download a model or to use an online AI provider with your own API key.

## Your data stays on your Mac

Veridic answers typed questions about a text (yes/no, category, scale) by running an AI model **inside the app**, on your own computer. The text you paste, the files you open and the answers you get are read and written only on your disk and are **never sent anywhere**. We never see your texts, your questions, or your results.

## What the app sends over the network

The app makes network connections only in these situations, all triggered explicitly by you:

- **Downloading a model.** When you press "Download" in the model panel, the app fetches the model file directly from Hugging Face, the site that hosts it. The request goes to that server, not to us, and contains nothing about you.
- **Online AI providers.** If you choose an online provider — DeepSeek, OpenAI, Anthropic, TypeSafe (Jev), Ollama, or an endpoint you configure yourself — your text and questions are sent **directly to that provider**, only when you press "Run", using **your own API key**. That provider's privacy policy applies to those requests. If you never configure a provider, nothing is ever sent to any AI service.
- **The optional local server.** "Serve on localhost" exposes the loaded model over HTTP to other programs on **your own computer only** (127.0.0.1). It is off until you turn it on and stops when the app quits.

We do **not** receive your name, email, Apple ID, or payment details through the app. The app sends no crash reports and no usage data.

## What is stored on your Mac

- The API keys you enter, in a file inside the app's private folder that only your user account can read. Each key is sent only to the provider it belongs to.
- Your settings, saved question sets, and the results and calibrations you choose to save.
- The location of the model file you picked, and the models you downloaded from the app.

All of this lives in the app's own folder and is removed when you delete the app. Nothing is synced or backed up by us.

## File access

The app runs in the macOS App Sandbox. It can only read files you explicitly pick in a dialog or download through the app — nothing else on your disk. The model file you picked is remembered using Apple's security-scoped bookmarks, which only restore access to that exact file.

## Third parties

The app uses no third-party analytics, advertising, or tracking SDKs. The only third-party services involved are Hugging Face, when you download a model, and any AI provider you choose to configure yourself.

## Children

The app is not directed at children and collects no data from anyone.

## Changes

If this policy changes, the updated version will be posted on this page with a new effective date.

## Contact

Questions about privacy? Use the [contact page](/contact/).
