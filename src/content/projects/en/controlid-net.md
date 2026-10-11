---
title: ControlId.Net
summary: Open source (unofficial) .NET library for integrating Control iD access-control devices and REP time clocks, published on NuGet.
highlight: published on NuGet · 144 tests
tags: [.NET 8, .NET Standard 2.0, ASP.NET Core, xUnit, GitHub Actions]
repo: https://github.com/DaviLuisSantos/ControlId.Net
links:
  - label: NuGet
    href: https://www.nuget.org/packages/ControlId.Net
order: 2
---

A .NET client for Control iD access-control devices (iDAccess, iDFlex, iDFace, iDBox, iDUHF) and iDClass REP time clocks. Targets `net8.0` and `netstandard2.0`, so it also works in .NET Framework 4.6.1+ projects.

Three packages: `ControlId.Net`, `ControlId.Net.DependencyInjection` and `ControlId.Net.AspNetCore`.

## Highlights

- **Managed session:** on-demand login, cached session and an automatic re-login on 401. A `SemaphoreSlim` prevents concurrent logins.
- **AFD parser:** streams Brazilian time-clock files (Portaria 671/2021 and 1510/2009). Detects encoding, validates CRC-16 and handles corrupted lines without aborting the read.
- **Push mode** for devices behind NAT: per-device command queue, batched delivery and cancellation.
- **ASP.NET Core integration:** `MapControlIdPush`, `MapControlIdMonitor` and `MapControlIdOnline` to receive events and authorize access in real time.
- **Multiple devices configured** in `appsettings.json`, created via `IHttpClientFactory`.

## Quality

- 144 tests, running on .NET 8 (Linux) and .NET Framework 4.8 (Windows).
- Published to NuGet with Trusted Publishing (OIDC): no key is stored in the repository, and a package only ships if every test passes.

> Independent project, not affiliated with Control iD. The names mentioned are Control iD trademarks.
