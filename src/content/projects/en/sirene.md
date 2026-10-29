---
title: Sirene — real-time alerts
summary: 24/7 monitor that detects slot openings on a government portal within seconds and alerts subscribers on Telegram. Live, with a waitlist.
highlight: live · waitlist · Telegram bot · Pix payments
tags: [Python, asyncio, Playwright, SQLite, Telegram Bot API, Cloudflare, Mercado Pago]
order: 6
---


On a government portal where slots sell out within minutes, whoever gets there first wins. Sirene started as a monitor I built for myself and became a product: as soon as slots open, subscribers get the alert on Telegram. The service is live with a waitlist, and subscriptions open soon.

## Architecture

- **Separate from the monitor:** a standalone service reads the monitor's state every 2 seconds and turns each change into an event (slots opened, slots closed, maintenance…). Not a line of the monitor changed, and the service makes no extra requests to the government website.
- **Nothing gets lost:** each event is written to a SQLite outbox before delivery. If Telegram fails, delivery resumes later.
- **Pure, tested logic:** deciding which events to emit doesn't touch the network, the clock or the disk. There are 49 tests, plus an end-to-end drill with a test bot and channel.
- **Never confuses subscribers:** monitor health problems go only to me. Subscribers never get "unreachable" disguised as "closed".
- **No open ports:** it runs on a free cloud VM. The public status page goes out through an outbound Cloudflare Tunnel, and the landing page is on Cloudflare Pages.

## Product

- **Bot with button menus:** plan selection, terms acceptance, email and Pix payment through Mercado Pago. Confirmation works by polling the payment status, with no webhook, precisely so the VM keeps zero open ports.
- **Channels:** a free public channel and a private one for subscribers. The Pro plan adds critical alerts (Pushover) and a voice call (Twilio) to wake people up at 3 a.m. Payments and the Pro plan are ready and being tested before launch.
- **Operations:** a daily automatic post on the free channel confirms monitoring is running, plus a live status page, visitor source tracking and a daily database backup with a tested restore.
