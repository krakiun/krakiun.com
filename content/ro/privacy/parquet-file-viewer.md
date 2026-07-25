---
title: Parquet File Viewer — Privacy Policy
---

**Effective date: July 25, 2026**

## Summary

**Parquet File Viewer processes your data entirely on your Mac. Your files are never uploaded, transmitted, or seen by us.** There are no user accounts, no analytics, no tracking, and no advertising. The app works fully offline; it only makes network connections when you explicitly ask it to open a remote file, connect to your own database, or use the optional AI assistant.

## Your files stay on your Mac

Everything the app does — opening files, running queries, profiling columns, drawing charts, exporting — runs locally, powered by a database engine embedded inside the app. The files you open are read directly from your disk and are **never sent anywhere**. We never see your files, their contents, or your query results.

## What the app sends over the network

The app makes network connections only in these situations, all triggered explicitly by you:

- **Opening a file from a URL or S3.** When you paste a link or S3 address, the app downloads that file directly from the location you specified. The request goes to that server, not to us.
- **Connecting to your own database.** When you attach a PostgreSQL or MySQL database, the app connects directly to the server you configured. Data flows only between your Mac and your database.
- **The optional AI assistant.** If you use "Ask AI" to generate SQL, your question and the **schema of your dataset (column names and types — never the data itself)** are sent to the AI provider you chose, using **your own API key**. If you never configure an AI key, nothing is ever sent to any AI provider.
- **Crash reports.** If the app crashes, an anonymous technical report (stack trace, macOS version) is sent so we can fix the bug. These reports are scrubbed before sending and contain **no file contents, no file paths, and no personal data**.

We do **not** receive your name, email, Apple ID, or payment details through the app.

## Credentials are stored in your Keychain

If you save an AI API key or S3 access keys in Settings, they are stored in the **macOS Keychain** on your device — encrypted by the operating system and never sent to us. Database passwords are used only to establish the connection you requested.

## File access

The app runs in the macOS App Sandbox. It can only read files you explicitly open, drop into the window, or select in a dialog — nothing else on your disk. Recently opened files are remembered using Apple's security-scoped bookmarks, which only restore access to those exact files. Temporary working files are encrypted at rest with a random per-session key and stored in an app-private folder.

## Third parties

The app uses no third-party analytics, advertising, or tracking SDKs. The only third-party service involved is the crash-reporting service described above, and any AI provider or storage service you choose to configure yourself.

## Children

The app is not directed at children and collects no data from anyone.

## Changes

If this policy changes, the updated version will be posted on this page with a new effective date.

## Contact

Questions about privacy? Email **krakiun@gmail.com**.
