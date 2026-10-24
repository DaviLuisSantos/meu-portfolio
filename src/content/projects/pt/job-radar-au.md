---
title: JobRadar AU
summary: Radar do mercado de trabalho australiano para quem chega com Working Holiday, com vagas ranqueadas por um score explicado e um raio-x mensal do mercado.
highlight: .NET 10 · Clean Architecture · PostgreSQL · 239 testes
tags: [.NET 10, Blazor, EF Core, PostgreSQL, Docker, xUnit, Testcontainers, GitHub Actions]
repo: https://github.com/DaviLuisSantos/job-radar-au
links:
  - label: Protótipo em Python
    href: https://github.com/DaviLuisSantos/job-tracker
order: 6
---

Começou como um protótipo em Python para acompanhar vagas na Austrália sem repetir as mesmas buscas todo dia. Quando as regras se provaram úteis, reescrevi tudo em .NET 10, usando o protótipo como especificação. O JobRadar está em uso diário desde outubro de 2026.

São dois produtos sobre o mesmo núcleo: o **matching**, que ranqueia as vagas por perfil e acompanha as candidaturas, e o **raio-x**, que publica só números agregados do mercado.

## Score explicado

- **Regras puras em ordem fixa:** exclusões zeram a vaga, os pontos partem de uma base de 50, uma compressão acima de 80 evita que os melhores empatem em 100, e as penalidades vêm por último. Cada passo gera uma explicação, que o site mostra regra a regra.
- **Paridade com o protótipo:** um teste confere que o score novo bate com o antigo em 5.388 vagas reais.
- **Calibração antes de mudar regras:** um comando mede o score contra as vagas que marquei como boas ou ruins, para ver o efeito de uma regra nova antes de ela ir para produção.

## Coleta e mercado

- **Coleta educada:** um único orçamento de requisições para o processo inteiro, dentro do pipeline de resiliência, então até as novas tentativas respeitam o ritmo.
- **Raio-x mensal:** um retrato diário por categoria e cidade. Cada retrato é avaliado antes de ser gravado, e só os bons entram no relatório do mês.
- Agrupamento de vagas repostadas e um bookmarklet que envia o anúncio direto do navegador.

## Engenharia

- **Clean Architecture** com um projeto por camada, para o compilador garantir que as dependências apontem para dentro.
- **239 testes,** incluindo testes de contrato contra um PostgreSQL real com Testcontainers, rodando no CI.
- **Deploy automático** quando o CI passa, com rollback, rodando como serviços do Windows com o PostgreSQL em Docker.
