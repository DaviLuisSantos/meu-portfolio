---
title: LPR vehicle access-control server
summary: On-premise .NET server that connects license plate recognition cameras from several vendors to an access-control system and decides gate access in real time.
tags: [.NET 10, ASP.NET Core, Firebird, SQLite, MediatR, GitHub Actions]
links:
  - label: Releases
    href: https://github.com/DaviLuisSantos/AlphadigiServidorLPR-releases
order: 1
---

Built for Segmix and running in production at residential condominiums. It receives plate reads from the cameras, decides whether the vehicle may enter, and answers the camera display and the front desk immediately.

The source code is private. Compiled builds are published to a public releases repository, which each installation's auto-update routine pulls new versions from.

## Integrations

- **Five vendors, each with its own protocol:** Alphadigi (HTTP, binary TCP and JSON-RPC), Hikvision (multipart ANPR events), Motorola (long polling and FTP), Intelbras (RPC2) and Control iD UHF antennas.
- The application core knows nothing about vendor protocols. An architecture test prevents that coupling.

## Access decision

- Checks registration, per-camera routes, per-unit parking limits and anti-passback, and drops duplicate reads.
- When in doubt, access is denied (fail-closed).
- The legacy system database (Firebird) is the source of truth, with an in-memory cache. A local SQLite database speeds up lookups.
- The list of authorized plates is also kept in sync on each camera, so the gate keeps working if the server goes down.

## Operations

- Watches whether each camera is still sending events and reconfigures the ones that stopped on its own.
- Runs as a Windows service with built-in web dashboards: access logs, vehicle routes, system health and recordings with a ffmpeg ring buffer.
- **Continuous delivery:** CI builds with zero warnings and runs the tests; every tag produces a self-contained binary.
- **Auto-update:** an updater on each installation checks the public releases repository for new versions, installs them during a maintenance window and rolls back if the health check fails.

## Numbers

- 1,300+ automated tests, including contract tests against a real Firebird instance in Docker.
- 80+ releases published with semantic versioning.
