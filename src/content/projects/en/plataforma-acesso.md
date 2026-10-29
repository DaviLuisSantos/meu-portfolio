---
title: Residential access-control platform
summary: Three .NET services (concierge, vehicle LPR server and personal access server) replacing a 20-year-old Delphi/Firebird system, connected through a versioned contract in NuGet packages.
highlight: in production · ~89% of ~1,940 commits are mine · leading the v2 domain design
tags: [.NET 10, ASP.NET Core, EF Core, React, Vite, PWA, Firebird, NuGet, GitHub Actions, Inno Setup]
order: 1
---

My work at Segmix Tecnologia, where I am a mid-level software engineer. The company runs a 20-year-old Delphi and Firebird concierge system, and the new platform is replacing that legacy step by step, without stopping the residential sites that depend on it. The code is private.

## The three services

- **Concierge (papa-fila):** visitors, deliveries, bookings, devices and RTSP cameras, in .NET and React with Vite (desktop app, installable as a PWA). Version 1.0, built with the team, has been in production since September 2026; v2 already has 3,500+ test cases. I now lead the v2 domain design: identity, property structure, credentials, visits and vehicles.
- **Vehicle LPR server:** I am the main author. It integrates license-plate cameras from four vendors and UHF readers with access control, running at 20+ residential sites (see the project below).
- **Personal access server:** I am leading its migration from Delphi and WPF to C# and ASP.NET Core, integrated with the new concierge system.

## How they fit together

- **Shared contract in NuGet packages:** types and rules shared by the three services come from versioned packages I created, never copied between repositories. Architecture tests enforce it.
- **Tag-driven releases:** GitHub Actions builds, tests and publishes the three services, with Windows jobs on a self-hosted runner.
- **Single installer:** one installer (Inno Setup) deploys the three services pre-wired and finds the legacy database on its own.
- **AI-assisted development with guardrails:** per-area context for Claude Code, project rules enforced by tests and delivery checklists, replicated across the three services.
