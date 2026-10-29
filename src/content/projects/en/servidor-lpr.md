---
title: LPR vehicle access-control server
summary: On-premise .NET server that connects license plate recognition cameras from several vendors to an access-control system and decides gate access in real time.
highlight: running at 20+ sites · 2,000+ tests · 112 releases
tags: [.NET 10, ASP.NET Core, Firebird, SQLite, MediatR, GitHub Actions]
links:
  - label: Releases
    href: https://github.com/DaviLuisSantos/AlphadigiServidorLPR-releases
order: 2
---

Built for Segmix, with me as the main author (619 of 623 commits), and running at 20+ residential sites. It receives plate reads from the cameras, decides whether the vehicle may enter, and answers the camera display and the front desk immediately.

The source code is private. Compiled builds are published to a public releases repository, which each installation's auto-update routine pulls new versions from.

## Integrations

- **Five vendors, each with its own protocol:** Alphadigi (HTTP, binary TCP and JSON-RPC), Hikvision (multipart ANPR events), Motorola (long polling and FTP), Intelbras (RPC2) and Control iD UHF antennas.
- The application core knows nothing about vendor protocols. An architecture test prevents that coupling.

## Access decision

- Checks registration, per-camera routes, per-unit parking limits and anti-passback, and drops duplicate reads.
- When in doubt, access is denied (fail-closed).
- **Two operating modes:** by default, the legacy system database (Firebird) is the source of truth, with an in-memory cache. In the new mode, the server runs without the legacy system and decides from access rights coming from the company's new platform, with every passage kept on disk until delivered. A local SQLite database speeds up lookups in both.
- **Shared contract between systems:** shared types and rules come from internal NuGet packages, never copied by hand, and an architecture test enforces it.
- Unregistered plates go through a character-position correction (I/1, O/0), and a read the camera resends never opens the gate.
- The list of authorized plates is also kept in sync on each camera, so the gate keeps working if the server goes down.

## Operations

- Watches whether each camera is still sending events and reconfigures the ones that stopped on its own.
- Runs as a Windows service with built-in web dashboards: access logs, vehicle routes, system health and recordings with a ffmpeg ring buffer.
- **Continuous delivery:** on every release, CI builds with zero warnings, runs the tests and produces the self-contained binary and the installer.
- **Auto-update:** an updater on each installation checks the public releases repository (mirrored in object storage) for new versions, installs them during a maintenance window and rolls back if the health check fails.

## Numbers

- 2,000+ automated tests, including contract tests against a real Firebird instance in Docker.
- 112 releases in 10 months, published with semantic versioning.
