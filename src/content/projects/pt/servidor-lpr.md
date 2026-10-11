---
title: Servidor LPR para controle de acesso veicular
summary: Servidor .NET on-premise que integra câmeras de leitura de placas de vários fabricantes a um sistema de controle de acesso e decide a liberação em tempo real.
tags: [.NET 10, ASP.NET Core, Firebird, SQLite, MediatR, GitHub Actions]
links:
  - label: Releases
    href: https://github.com/DaviLuisSantos/AlphadigiServidorLPR-releases
order: 1
---

Sistema em produção em condomínios. Recebe as leituras de placa das câmeras, decide se o veículo pode entrar e responde ao display da câmera e à portaria na mesma hora. O código é privado; as versões compiladas são publicadas num repositório público de releases.

## Integrações

- **Cinco fabricantes, cada um com seu protocolo:** Alphadigi (HTTP, TCP binário e JSON-RPC), Hikvision (eventos ANPR multipart), Motorola (long polling e FTP), Intelbras (RPC2) e antenas UHF Control iD.
- O núcleo da aplicação não conhece nenhum protocolo de fabricante. Um teste de arquitetura impede esse acoplamento.

## Decisão de acesso

- Verifica cadastro, rota por câmera, limite de vagas por unidade e antipassback, e elimina leituras duplicadas.
- Na dúvida, nega o acesso (fail-closed).
- O banco do sistema legado (Firebird) é a fonte de verdade, com cache em memória. Um SQLite local acelera as consultas.
- A lista de placas autorizadas também fica sincronizada em cada câmera, então a portaria continua funcionando se o servidor cair.

## Operação

- Monitora se cada câmera continua enviando eventos e reconfigura sozinha as que pararam.
- Roda como serviço do Windows, com painéis web embutidos: registros, trajetos, saúde do sistema e gravações com buffer circular via ffmpeg.
- **Entrega contínua:** o CI compila sem warnings e roda os testes; cada tag gera um binário self-contained.
- Um atualizador em cada instalação baixa a versão nova numa janela de manutenção e faz rollback se a checagem de saúde falhar.

## Números

- Mais de 1.300 testes automatizados, incluindo testes de contrato contra um Firebird real em Docker.
- Mais de 80 releases publicadas com versionamento semântico.
