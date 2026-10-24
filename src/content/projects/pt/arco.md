---
title: Arco — hábitos com progresso
summary: PWA de hábitos com níveis, objetivos em ciclos de 6 semanas, XP e conquistas. Funciona offline e expõe API REST e servidor MCP.
highlight: .NET 10 · React 19 PWA · servidor MCP · 83 testes
tags: [.NET 10, EF Core, SQLite, React 19, TypeScript, TanStack Query, Tailwind CSS 4, Azure]
links:
  - label: Versão anterior (código)
    href: https://github.com/DaviLuisSantos/HabitSystem
order: 4
---

A segunda geração do Arco. A primeira (um app de check-ins com pontuação, em .NET 9 e Next.js, de código aberto) virou a base de uma ideia maior: hábitos que evoluem. O código da nova versão é privado e ela está em uso pessoal, rumo a virar multiusuário.

## O que ele faz

- **Hábitos com níveis:** cada nível tem uma dose e uma versão mínima, e a escada pode ser planejada com antecedência. O app sugere subir ou descer um degrau conforme a consistência, mas a decisão é sempre de quem usa.
- **Ciclos e objetivos:** ciclos de 6 semanas (configuráveis de 1 a 12), com objetivos numéricos ou por marcos e encerramento com revisão guiada.
- **Progresso:** check-in feito, mínimo ou não fiz, sequência que perdoa uma falha isolada por semana, XP, 16 conquistas e estatísticas das últimas 12 semanas.

## Engenharia

- **Uma API, um processo:** .NET 10 com Minimal APIs organizadas por funcionalidade. A API serve o front em React 19 + Vite do mesmo processo.
- **XP como livro-razão:** cada ganho de XP é gravado na mesma transação da ação que o gerou. Desfazer um ciclo ou objetivo desfaz também o XP e as conquistas.
- **Servidor MCP** com 17 ferramentas, para assistentes de IA lerem e registrarem hábitos. As ferramentas passam pela própria API REST, nunca direto no banco.
- **Offline de verdade:** o cache fica no IndexedDB, e os check-ins feitos sem conexão entram numa fila e são reenviados na ordem quando a rede volta.
- **Web Push implementado do zero** (VAPID e criptografia aes128gcm, sem biblioteca), com lembretes disparados por um serviço em segundo plano.
- **Chaves de API** de 256 bits guardadas só como hash, e backup diário do SQLite mantido por 14 dias.
- **Deploy no Azure** pelo GitHub Actions com login OIDC, sem segredo de longa duração no repositório. 83 testes de domínio e integração.
