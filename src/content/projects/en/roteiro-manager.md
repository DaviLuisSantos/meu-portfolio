---
title: Roteiro Manager
summary: Local web app to organize, edit and record Markdown video scripts, with a styled viewer and a built-in teleprompter.
highlight: no framework · teleprompter
tags: [Node.js, Express, JavaScript, HTML, CSS]
repo: https://github.com/DaviLuisSantos/RoteiroManager
order: 8
---

Built for my own video recording workflow: scripts live in Markdown files, and the app turns each one into something easy to read while recording.

## Highlights

- **File-backed REST API:** list, read, save, rename, duplicate and delete scripts, with search over names and content and protection against access outside the folder.
- **Custom Markdown parser:** sections like Hook, Blocks and CTA become colored badges, and quotes become speech boxes.
- **Teleprompter:** `requestAnimationFrame` scrolling based on frame timing, countdown, fullscreen, mirror mode and keyboard shortcuts.
- **Editor:** Markdown toolbar, autosave, word count with estimated speaking time, drag-and-drop import and PDF export.
- No framework and no build step: plain HTML, CSS and JavaScript, with Express serving the API.
