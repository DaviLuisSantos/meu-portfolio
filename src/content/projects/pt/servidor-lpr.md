---
title: Servidor LPR para controle de acesso veicular
summary: Servidor .NET on-premise que integra câmeras de leitura de placas de vários fabricantes a um sistema de controle de acesso e decide a liberação em tempo real.
tags: [.NET 10, ASP.NET Core, Firebird, SQLite, MediatR, GitHub Actions]
links:
  - label: Releases
    href: https://github.com/DaviLuisSantos/AlphadigiServidorLPR-releases
order: 1
---

Desenvolvido para a Segmix e em produção em condomínios. Recebe as leituras de placa das câmeras, decide se o veículo pode entrar e responde ao display da câmera e à portaria na mesma hora.

O código é privado. As versões compiladas ficam num repositório público de releases, de onde a rotina de atualização automática de cada instalação baixa as novas versões.

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
- **Atualização automática:** um atualizador em cada instalação busca novas versões no repositório público de releases, instala numa janela de manutenção e faz rollback se a checagem de saúde falhar.

## Números

- Mais de 1.300 testes automatizados, incluindo testes de contrato contra um Firebird real em Docker.
- Mais de 80 releases publicadas com versionamento semântico.
