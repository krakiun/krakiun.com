---
title: "What happens if you train a Romanian LLM on raw public data — an honest experiment"
date: 2026-09-22T14:30:00+03:00
image: '/images/llm-romana.png'
tags: ['ai', 'llm', 'romanian']
---

I had some GPUs sitting idle. We're currently organizing the data for an internal
model — slow, careful curation work that doesn't keep the hardware busy. So I
thought: in the meantime, let's run a test.

Not a serious model. An experiment. I wanted to answer a question I'd been asking
myself for a while:

> What comes out if you train a Romanian language model **from scratch**, using
> **only public data**, collected from the internet exactly as it is — no careful
> filtering, no curation, no synthetic data, no human annotation?

The result is called **Beatrice v0.1**. You can test it right now.

## What it actually is

A model with **896 million parameters**, trained from scratch, almost entirely in
Romanian (the rest being a bit of English and code, for reasoning structure).

And to be clear from the start: **Beatrice doesn't claim to be intelligent.** It's
not a production model, it competes with nothing. It's a test of our training
process — the pipeline from raw data to a model that speaks. I wanted to see it
work end to end before we invest in the real model.

I built the whole chain: filtering, deduplication, a tokenizer trained from scratch
on Romanian (twice as efficient as GPT-2's on Romanian text), the data mix, the
training, the conversational fine-tuning. Every piece worked. That was the real goal.

## What I learned, and it's the interesting part

I evaluated the model on over a thousand questions. What emerged is a profile that
says everything about what a model this size is:

- **It writes correct, natural Romanian.** Grammar, diacritics, natural word order,
  idiomatic expressions. This is where the filtered corpus proved its worth.
- **It excels at reading comprehension.** Give it a context and a question about it,
  and it extracts the right answer. In my tests: **100%**.
- **It makes up facts.** Asked "from memory" about populations, years, names — it
  confidently answers false things. On general-knowledge quizzes it scores at chance.

In other words: **a very good reader, not an encyclopedia.**

And that's not a bug to fix — it **is** the profile of an 896M-parameter model. It
has nowhere to store knowledge about the world. What it can do, and does well, is
read a text and rephrase it in clean Romanian. Hence the practical takeaway: a small
model like this works best coupled with a source of information — you give it the
text, it does the wording. Left on its own, it hallucinates.

It's a lesson I knew in theory. Now I have it measured, in Romanian.

## Honesty matters more than hype

I could have written "I trained a Romanian LLM" and stopped there. But Beatrice has
real limits, and I'm stating all of them: it invents things, it doesn't admit when
it doesn't know, it has no safety filters. I wrote them into the model card too, in
plain text.

Not out of modesty. Because a model presented as more than it is ages badly —
people discover its limits anyway, on their own. Better to know them from the start
and focus on what it actually does well.

And what Beatrice does well — read and write Romanian — is no small thing for an
experiment that came out of GPUs that would otherwise have sat idle.

## What's next

Beatrice v0.1 is step zero. In **1–2 months** we'll train the real model, on
**filtered, quality data** — synthetic plus human-written, not raw public text.
It'll be more coherent, less prone to hallucination, and probably easier to run.

The difference between the two won't be the model's size. It'll be **data quality.**
Beatrice is the proof, by counterexample: raw data → a competent reader that
confabulates. I want to see how much the bar rises when the data is carefully
organized.

## Test it yourself

The model is public. Anyone curious can try it:

🔗 [huggingface.co/krakiun/ro-nanochat-d20-chat](https://huggingface.co/krakiun/ro-nanochat-d20-chat)

It runs locally, with a single command — the instructions are on the model page. No
account, no cloud, nothing leaves your computer.

Say "hi," ask it a question, give it a text and ask it to answer based on it. You'll
quickly see both what it can do and where it stumbles. Both are interesting.

**Feedback and criticism welcome.** Beatrice wasn't built to impress — it was built
to learn from. And honest criticism is part of that.
