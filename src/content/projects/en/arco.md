---
title: Arco — habit tracker
summary: Web app (PWA) to track daily habits with weights and partial check-ins, producing a daily and weekly consistency score.
highlight: v1.0 · live · PWA · continuous deploy to Azure
tags: [.NET 9, EF Core, MediatR, Next.js 16, TanStack Query, Tailwind CSS 4]
repo: https://github.com/DaviLuisSantos/HabitSystem
demo: https://habit-system-front.vercel.app
links:
  - label: Front-end
    href: https://github.com/DaviLuisSantos/habit-system-front
order: 4
---

Each habit has a weight and a frequency: daily, specific weekdays or X times a week. A check-in can be done, partial or skipped, and the app computes how much of the day's possible score you earned. It is at version 1.0.

## Back end

- **Vertical slices:** each use case lives in a single file with its command, MediatR handler and Minimal API endpoint.
- **Weighted scoring,** cached per day. Only habits expected on that date count, respecting when each one was created or archived, and "today" follows each user's timezone.
- **Per-device sessions:** refresh tokens stored hashed and rotated on every use, with logout and revocation of every session when the password is changed or reset.
- **Real email** via Resend for account verification and password recovery.
- **Robustness:** input validation, standardized errors with codes, rate limiting on every authentication route, all dates in UTC and a database health check.
- Continuous deployment to Azure via GitHub Actions.

## Front end

- Next.js 16 with React 19, TanStack Query and forms built with React Hook Form + Zod.
- **Resilient session:** the token refreshes on its own, with a cross-tab lock so it never refreshes twice, login and logout synced across tabs, and the session survives temporary network failures.
- **PWA:** installable, with a versioned cache and an offline page.
- Progress charts, a calendar to edit past days, restoring archived habits and security headers (CSP).
