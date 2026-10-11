---
title: Arco — rastreador de hábitos
summary: App web (PWA) para registrar hábitos diários com pesos e check-ins parciais, gerando uma pontuação diária e semanal de consistência.
highlight: no ar · PWA · deploy contínuo no Azure
tags: [.NET 9, EF Core, MediatR, Next.js 16, TanStack Query, Tailwind CSS 4]
repo: https://github.com/DaviLuisSantos/HabitSystem
demo: https://habit-system-front.vercel.app
links:
  - label: Front-end
    href: https://github.com/DaviLuisSantos/habit-system-front
order: 3
---

Cada hábito tem um peso e uma frequência: diário, em dias específicos ou X vezes por semana. O check-in pode ser completo, parcial ou pulado, e o app calcula quanto da pontuação possível do dia você conseguiu.

## Back-end

- **Vertical slices:** cada caso de uso fica num único arquivo, com comando, handler do MediatR e endpoint Minimal API.
- **Pontuação ponderada,** com cache por dia. Hábitos "X vezes por semana" não penalizam os dias sem check-in.
- **Autenticação JWT** com refresh token e senha com BCrypt, mais fluxos de cadastro, recuperação de senha e exclusão de conta.
- **Rate limiting** global e mais restrito nas rotas de autenticação.
- Deploy contínuo no Azure via GitHub Actions.

## Front-end

- Next.js 16 com React 19, TanStack Query e formulários com React Hook Form + Zod.
- Interceptor que renova o token sozinho e reenvia as requisições que falharam com 401.
- Gráficos de evolução, calendário para editar dias passados e PWA instalável.
