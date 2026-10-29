---
title: Ocelo — IP camera hub
summary: Multi-brand IP camera hub in .NET 10, with WebRTC/HLS live view, continuous recording, smart retention and an API with webhooks for other systems.
highlight: in testing with real cameras · 203 commits and 399 tests in 16 days · −68% disk
tags: [.NET 10, ASP.NET Core, React, TypeScript, SQLite, MediaMTX, WebRTC, ONVIF]
order: 6
---

A lightweight VMS: it connects IP cameras from several brands, shows everything live, records continuously and serves video to other systems through an API. It is in pre-production, tested with real cameras from three brands. The code is private.

## Video

- **The server never decodes video:** a single connection per camera, with a media engine (MediaMTX) supervised and reconciled by the API itself. The choice was backed by measurements.
- **Live in under a second:** a WebRTC mosaic, with automatic fallback to HLS and H.265 support.
- **Recordings that age:** for older footage, a process touches only the structure of the fMP4 file and keeps just the keyframes, with no re-encoding and no gaps in the timeline. In the lab, footage shrank to about 4% of its size. Retention is set per camera and by disk space.

## Cameras and integration

- **Capability-based drivers:** ONVIF (discovery and streams), Hikvision, Dahua, Intelbras and generic RTSP. Brands with a known pattern become configuration, not code.
- **Integration hub:** a versioned API with OpenAPI, pages to embed video in other systems, signed temporary links, keys scoped per camera, signed webhooks and Prometheus metrics.

## Operations

- Monitors for stalled recording, the media engine going down, camera clocks and disk. Retention pauses if a clock looks wrong, so footage is never deleted by mistake.
- Video export with a signed manifest and a chained audit trail, per-person login and encrypted backups.
- Runs as a Windows service, with an installer and updates that roll back automatically. 399 tests, including architecture tests and real camera responses used as fixtures.
