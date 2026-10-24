---
title: Arco — habits with progression
summary: Habit PWA with leveled habits, goals in 6-week cycles, XP and achievements. Works offline and exposes a REST API and an MCP server.
highlight: .NET 10 · React 19 PWA · MCP server · 83 tests
tags: [.NET 10, EF Core, SQLite, React 19, TypeScript, TanStack Query, Tailwind CSS 4, Azure]
links:
  - label: Previous version (code)
    href: https://github.com/DaviLuisSantos/HabitSystem
order: 4
---

The second generation of Arco. The first one (an open source check-in app with scoring, built with .NET 9 and Next.js) became the base for a bigger idea: habits that grow. The new version's code is private and it is in personal use, on its way to becoming multi-user.

## What it does

- **Leveled habits:** each level has a dose and a minimum version, and the ladder can be planned ahead. The app suggests moving up or down a step based on consistency, but the user always decides.
- **Cycles and goals:** 6-week cycles (configurable from 1 to 12), with numeric or milestone goals and a guided review at the end.
- **Progress:** done, minimum or skipped check-ins, a streak that forgives one isolated miss per week, XP, 16 achievements and stats for the last 12 weeks.

## Engineering

- **One API, one process:** .NET 10 with Minimal APIs organized by feature. The API serves the React 19 + Vite front end from the same process.
- **XP as a ledger:** every XP gain is written in the same transaction as the action that earned it. Undoing a cycle or goal also undoes its XP and achievements.
- **MCP server** with 17 tools, so AI assistants can read and log habits. The tools go through the app's own REST API, never straight to the database.
- **Real offline support:** the cache lives in IndexedDB, and check-ins made offline go into a queue and are replayed in order when the network comes back.
- **Web Push built from scratch** (VAPID and aes128gcm encryption, no library), with reminders sent by a background service.
- **API keys** of 256 bits stored only as hashes, and a daily SQLite backup kept for 14 days.
- **Azure deploy** through GitHub Actions with OIDC login, no long-lived secret in the repository. 83 domain and integration tests.
