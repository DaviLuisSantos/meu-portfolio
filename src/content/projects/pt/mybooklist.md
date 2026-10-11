---
title: MyBookList
summary: Lista de leitura pessoal que busca livros no Google Books e organiza a biblioteca por status (não iniciado, lendo, concluído) com datas.
tags: [.NET 9, Carter, EF Core, SQLite, Next.js, Google OAuth]
repo: https://github.com/DaviLuisSantos/MyBookList
links:
  - label: Front-end
    href: https://github.com/DaviLuisSantos/mybooklist-frontend
order: 8
---

Projeto de estudo de 2025 para praticar Minimal APIs no .NET com um front em Next.js.

## Destaques

- **Domínio:** usuários, livros (com ISBN, capa, gênero e páginas) e a relação entre eles, com status e datas de início e fim. Livros repetidos são identificados pelo ISBN.
- **API:** Minimal API organizada em módulos Carter, com camada de serviços e interfaces.
- **Autenticação:** JWT e senhas com BCrypt, além de login com Google no front.
- **Front-end:** busca no Google Books, estantes agrupadas por status, botão que avança o status e preenche as datas sozinho, e tema claro/escuro.
