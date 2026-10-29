---
title: JobRadar
summary: Job-market radar in .NET that ranks listings with an explainable score, tracks applications and builds a monthly market snapshot. In production since October 2026.
highlight: .NET 10 · Clean Architecture · PostgreSQL · in production · 289 tests
tags: [.NET 10, Blazor, EF Core, PostgreSQL, Docker, xUnit, Testcontainers, GitHub Actions]
order: 5
---


It started as a Python prototype to follow job listings without running the same searches every day. Once the rules proved useful, I rewrote everything in .NET 10, using the prototype as the specification. JobRadar has been in production since October 2026, with a daily pass and the prototype switched off.

There are two products on the same core: **matching**, which ranks listings by profile and tracks applications, and the **market snapshot**, which only publishes aggregated numbers.

## Explainable score

- **Pure rules in a fixed order:** exclusions zero the listing out, points start from a base of 50, a compression above 80 keeps the best ones from tying at 100, and penalties come last. Every step produces an explanation, which the site shows rule by rule.
- **Parity with the prototype:** a test checks that the new score matches the old one on 5,388 real listings.
- **Calibration before changing rules:** a command measures the score against listings I marked as good or bad, to see the effect of a new rule before it ships.

## Collection and market

- **Polite collection:** a single request budget for the whole process, inside the resilience pipeline, so even retries respect the pace.
- **Monthly snapshot:** a daily picture per category and city. Each picture is checked before being saved, and only the good ones make it into the monthly report.
- Grouping of reposted listings and a bookmarklet that sends a listing straight from the browser.

## Engineering

- **Clean Architecture** with one project per layer, so the compiler enforces that dependencies point inward.
- **289 tests,** including contract tests against a real PostgreSQL with Testcontainers, running in CI.
- **Automatic deploy** when CI passes, with rollback, running as Windows services with PostgreSQL in Docker.
