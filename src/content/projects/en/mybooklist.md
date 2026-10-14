---
title: MyBookList
summary: Personal reading list that searches books on Google Books and organizes the library by status (not started, reading, finished) with dates.
highlight: study project · 2025
tags: [.NET 9, Carter, EF Core, SQLite, Next.js, Google OAuth]
repo: https://github.com/DaviLuisSantos/MyBookList
links:
  - label: Front-end
    href: https://github.com/DaviLuisSantos/mybooklist-frontend
order: 9
---

A 2025 study project to practice .NET Minimal APIs with a Next.js front end.

## Highlights

- **Domain:** users, books (with ISBN, cover, genre and page count) and the relationship between them, with status and start and finish dates. Duplicate books are detected by ISBN.
- **API:** Minimal API organized into Carter modules, with a service layer and interfaces.
- **Authentication:** JWT and BCrypt passwords, plus Google sign-in on the front end.
- **Front end:** Google Books search, shelves grouped by status, a button that advances the status and fills in the dates on its own, and a light/dark theme.
