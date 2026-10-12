---
title: CYD PC Dashboard
summary: Touch desk dashboard on the ESP32 "Cheap Yellow Display" with PC stats, processes, network, market quotes and YouTube stats, fed by a Python agent on the local network.
highlight: ESP32 firmware · web installer · automated releases
tags: [ESP32, C++, PlatformIO, TFT_eSPI, Python, GitHub Actions]
cover: ../../../assets/projects/cyd-pc-dashboard.png
repo: https://github.com/DaviLuisSantos/cyd-pc-dashboard
demo: https://daviluissantos.github.io/cyd-pc-dashboard/
order: 5
---

A 2.8" panel (a board that costs about US$15) that sits next to the monitor and shows, at a glance, what would otherwise mean switching windows: clock, CPU and RAM, processes, network, market quotes and YouTube stats. The captures above were read straight from the display's framebuffer.

## Firmware

- **Six pluggable tabs:** each screen implements an interface for static drawing, incremental updates and touch. Navigation is by touch, with optional auto-rotation.
- **Flicker-free:** each dynamic value is drawn into an off-screen sprite and pushed to the display in a single transaction. The sprite is freed right after so it doesn't compete with WiFi for memory.
- **Zero-code setup:** on first boot the panel opens a WiFi portal to pick the network, agent IP, timezone and language. Everything is saved to the board's flash.
- Dracula theme with anti-aliased shapes and fonts, 100% vector icons, and a UI in English and Portuguese, switchable at runtime.

## Problems that took real work

- **Corrupted SPI reads:** the display and the touch controller shared the same ESP32 SPI peripheral. Writes worked, but display reads came back wrong. The fix was moving them to separate peripherals.
- **Shifted bits on readback:** reading the framebuffer at the write clock shifted every byte by one bit. Reads now run at 6 MHz, while writes stay at 55 MHz.

## PC agent and distribution

- **Python agent** (psutil and the standard library only): each metric is collected by its own thread and served from cache. The ESP32 only speaks plain HTTP on the LAN, with no API keys or TLS on the microcontroller.
- **Web installer:** the firmware is flashed straight from the browser, with no toolchain to install.
- **Automated releases:** GitHub Actions builds on every tag, produces a single merged binary and publishes the release and the installer.
