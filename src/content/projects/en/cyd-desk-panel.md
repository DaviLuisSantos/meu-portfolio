---
title: CYD Desk Panel
summary: Firmware that turns the ESP32 "Cheap Yellow Display" into a desk dashboard with PC stats, processes, network and market quotes, fed by a Python agent on the local network.
tags: [ESP32, C++, PlatformIO, TFT_eSPI, Python]
order: 5
---

A 2.8" touch panel that sits next to the monitor and shows what is happening on the PC and in the market, without taking up space on the main screen.

## Firmware

- **Pluggable screens:** each screen implements an interface for static drawing, incremental updates and touch. A manager handles the tab bar and automatic screen rotation.
- **Flicker-free redraws:** each dynamic region is drawn into a sprite and pushed to the display in one go. The sprite is freed right after so it doesn't compete with WiFi for memory.
- **Two SPI buses:** display and touch sit on separate buses, and the whole driver configuration comes from build flags, without editing the library.
- A custom theme with vector icons and a smooth font embedded in flash.

## PC agent

- A Python HTTP server that keeps CPU, RAM, disk, network, processes and market quotes cached.
- That way the ESP32 only makes simple HTTP requests on the local network, with no HTTPS to external APIs.
