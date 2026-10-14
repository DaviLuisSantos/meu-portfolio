---
title: Arco — rastreador de hábitos
summary: App web (PWA) para registrar hábitos diários com pesos e check-ins parciais, gerando uma pontuação diária e semanal de consistência.
highlight: v1.0 · no ar · PWA · deploy contínuo no Azure
tags: [.NET 9, EF Core, MediatR, Next.js 16, TanStack Query, Tailwind CSS 4]
repo: https://github.com/DaviLuisSantos/HabitSystem
demo: https://habit-system-front.vercel.app
links:
  - label: Front-end
    href: https://github.com/DaviLuisSantos/habit-system-front
order: 3
---

Cada hábito tem um peso e uma frequência: diário, em dias específicos ou X vezes por semana. O check-in pode ser completo, parcial ou pulado, e o app calcula quanto da pontuação possível do dia você conseguiu. Está na versão 1.0.

## Back-end

- **Vertical slices:** cada caso de uso fica num único arquivo, com comando, handler do MediatR e endpoint Minimal API.
- **Pontuação ponderada,** com cache por dia. Só contam os hábitos previstos para a data, respeitando quando cada um foi criado ou arquivado, e o "hoje" segue o fuso de cada usuário.
- **Sessões por dispositivo:** refresh tokens guardados com hash e rotacionados a cada uso, com logout e revogação de todas as sessões ao trocar ou redefinir a senha.
- **E-mail de verdade** via Resend para verificação de conta e recuperação de senha.
- **Robustez:** validação de entrada, erros padronizados com código, rate limiting em todas as rotas de autenticação, datas sempre em UTC e health check do banco.
- Deploy contínuo no Azure via GitHub Actions.

## Front-end

- Next.js 16 com React 19, TanStack Query e formulários com React Hook Form + Zod.
- **Sessão resiliente:** o token é renovado sozinho, com trava entre abas para não renovar duas vezes, login e logout sincronizados entre abas, e a sessão não cai em falhas temporárias de rede.
- **PWA:** instalável, com cache versionado e página offline.
- Gráficos de evolução, calendário para editar dias passados, restauração de hábitos arquivados e cabeçalhos de segurança (CSP).
