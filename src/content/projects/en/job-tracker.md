---
title: Job Tracker
summary: Collects job listings from Seek (Australia), scores each one from 0 to 100 against a configurable profile and shows everything on a local web dashboard.
highlight: asyncio · 0–100 fit score
tags: [Python, asyncio, httpx, Playwright, SQLite, Flask]
repo: https://github.com/DaviLuisSantos/job-tracker
order: 6
---

A personal tool to follow the Australian job market without running the same searches every day.

## Collection

- Keyword × city combinations run concurrently with `asyncio`, bounded by a semaphore, with jitter and exponential backoff on 429 and 5xx.
- **Incremental runs:** only searches the period since each profile's last run and stops paginating once it reaches listings already in the database.
- Playwright is only used to open each job's details; listings come over plain HTTP.

## Scoring

- **Rule-based fit score from 0 to 100:** weights for positive and negative signals (the title counts more than the body), remote or hybrid work, and requirements that rule a job out.
- **Negation-aware:** ignores a term when it comes right after "no", "not", "without" and similar, using regexes that work with terms like C# and .NET.
- **Two-stage review:** high-scoring jobs are re-scored with the full description, and an optional Gemini step classifies requirements the rules miss.

## Market snapshot

- A daily run records, for each Seek job area, how many listings are open and how many mention visa sponsorship or require citizenship, with the dates each listing appeared and disappeared.
- At the end of the month, a Markdown report aggregates those counts and shows how the market moved.

## Dashboard

- **Unattended daily routine:** runs from the system scheduler, logs every run and signals through the exit code when something needs attention. Profile collection and the market snapshot run in isolation, so an error in one doesn't take down the other.
- A Flask dashboard with per-job status and notes, an explanation of each score, Excel export and background runs with a live log.
