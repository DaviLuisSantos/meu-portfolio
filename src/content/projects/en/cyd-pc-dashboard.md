---
title: CYD PC Dashboard
summary: Touch desk dashboard on the ESP32 "Cheap Yellow Display" with PC stats, processes, network, market quotes, services and notifications, fed by an agent on the local network.
highlight: v1.11 · 16 releases · OTA updates · web installer
tags: [ESP32, C++, PlatformIO, TFT_eSPI, Python, pytest, GitHub Actions]
cover: ../../../assets/projects/cyd-pc-dashboard.png
repo: https://github.com/DaviLuisSantos/cyd-pc-dashboard
demo: https://daviluissantos.github.io/cyd-pc-dashboard/
order: 5
---

A 2.8" panel (a board that costs about US$15) that sits next to the monitor and shows, at a glance, what would otherwise mean switching windows. The captures above were read straight from the display's framebuffer.

## What it shows

- **Seven tabs:** clock, PC (CPU, RAM, temperature, disks and network), processes, network, quotes (currencies, crypto, stocks, ETFs and indexes, with a 24h chart), YouTube and services (whether chosen hosts and sites are up, with latency).
- **Notifications from the PC:** a command or a `curl` pops a card on the panel, handy for knowing when a build, a test run or a download finishes.
- **Alerts:** CPU, RAM and disk thresholds color the gauges and make the PC tab blink from any other tab.
- **Uses what the board has:** the RGB LED blinks on alerts and notifications, and the light sensor drives the brightness from the room light. At night the screen dims or turns off.

## Firmware

- **Web interface on the panel itself:** a live screenshot you can click to "tap", every setting editable on the spot, and **firmware updates over WiFi (OTA)** with automatic rollback.
- **Zero-code setup:** the web installer flashes the firmware from the browser and sets up WiFi right away. There is also a WiFi portal and automatic discovery of the agent on the network.
- **Flicker-free:** each dynamic value is drawn into an off-screen sprite and pushed to the display in a single transaction.
- Six color themes (Dracula, Nord, Gruvbox, Catppuccin and more), 100% vector icons and a UI in English and Portuguese.

## Problems that took real work

- **Corrupted SPI reads:** the display and the touch controller shared the same ESP32 SPI peripheral. Writes worked, but display reads came back as zeros. The fix was moving them to separate peripherals.
- **Shifted bits on readback:** reading the framebuffer at the write clock shifted every byte by one bit. Reads now run at 6 MHz, while writes stay at 55 MHz.

## Agent and distribution

- **Python agent** (psutil and the standard library only): each metric is collected by its own thread and served from cache. The ESP32 only speaks plain HTTP on the LAN, with no API keys or TLS on the microcontroller.
- The agent runs as a Windows executable with no Python required, starts automatically on Windows, Linux and macOS, and supports an optional authentication token.
- **68 tests** with pytest running in CI on Windows, Linux and macOS.
- **Automated releases:** GitHub Actions builds on every tag, produces a single merged binary and publishes the release and the installer.
