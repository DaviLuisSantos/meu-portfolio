---
title: Job Tracker
summary: Coleta vagas do Seek (Austrália), pontua cada uma de 0 a 100 conforme um perfil configurável e mostra tudo num painel web local.
highlight: asyncio · fit score de 0 a 100
tags: [Python, asyncio, httpx, Playwright, SQLite, Flask]
repo: https://github.com/DaviLuisSantos/job-tracker
order: 4
---

Ferramenta pessoal para acompanhar o mercado de vagas na Austrália sem precisar fazer as mesmas buscas todos os dias.

## Coleta

- Combinações de palavra-chave × cidade rodam em paralelo com `asyncio`, limitadas por semáforo, com jitter e retentativas com espera crescente em 429 e 5xx.
- **Execução incremental:** busca só o período desde a última coleta de cada perfil e para de paginar quando encontra vagas que já estão no banco.
- O Playwright entra só para abrir os detalhes de cada vaga; as listagens vêm por HTTP direto.

## Pontuação

- **Fit score de 0 a 100 baseado em regras:** pesos para sinais positivos e negativos (no título valem mais que no corpo), modalidade remota ou híbrida e exigências que eliminam a vaga.
- **Entende negação:** ignora um termo quando ele vem logo depois de "no", "not", "without" etc., e usa regex que funcionam com termos como C# e .NET.
- **Revisão em duas etapas:** vagas com pontuação alta são reavaliadas com a descrição completa, e uma etapa opcional com o Gemini classifica requisitos que as regras não pegam.

## Painel

- Painel em Flask com status e anotações por vaga, explicação de cada pontuação, exportação para Excel e coletas em background com o log transmitido ao vivo.
