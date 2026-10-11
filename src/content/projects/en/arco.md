---
title: Arco — habit tracker
summary: Web app (PWA) to track daily habits with weights and partial check-ins, producing a daily and weekly consistency score.
highlight: live · PWA · continuous deploy to Azure
tags: [.NET 9, EF Core, MediatR, Next.js 16, TanStack Query, Tailwind CSS 4]
repo: https://github.com/DaviLuisSantos/HabitSystem
demo: https://habit-system-front.vercel.app
links:
  - label: Front-end
    href: https://github.com/DaviLuisSantos/habit-system-front
order: 3
---

Each habit has a weight and a frequency: daily, specific weekdays or X times a week. A check-in can be done, partial or skipped, and the app computes how much of the day's possible score you earned.

## Back end

- **Vertical slices:** each use case lives in a single file with its command, MediatR handler and Minimal API endpoint.
- **Weighted scoring,** cached per day. "X times a week" habits don't penalize days without a check-in.
- **JWT authentication** with refresh tokens and BCrypt passwords, plus sign-up, password recovery and account deletion flows.
- **Rate limiting** globally and stricter on authentication routes.
- Continuous deployment to Azure via GitHub Actions.

## Front end

- Next.js 16 with React 19, TanStack Query and forms built with React Hook Form + Zod.
- An interceptor that refreshes the token on its own and retries requests that failed with 401.
- Progress charts, a calendar to edit past days and an installable PWA.
