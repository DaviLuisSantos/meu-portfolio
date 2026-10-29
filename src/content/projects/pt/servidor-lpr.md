---
title: Servidor LPR para controle de acesso veicular
summary: Servidor .NET on-premise que integra câmeras de leitura de placas de vários fabricantes a um sistema de controle de acesso e decide a liberação em tempo real.
highlight: em produção em 20+ condomínios · 2.000+ testes · 103 versões
tags: [.NET 10, ASP.NET Core, Firebird, SQLite, MediatR, GitHub Actions]
links:
  - label: Releases
    href: https://github.com/DaviLuisSantos/AlphadigiServidorLPR-releases
order: 2
---

Desenvolvido para a Segmix, com autoria principal minha, e em produção em mais de 20 condomínios. Recebe as leituras de placa das câmeras, decide se o veículo pode entrar e responde ao display da câmera e à portaria na mesma hora.

O código é privado. As versões compiladas ficam num repositório público de releases, de onde a rotina de atualização automática de cada instalação baixa as novas versões.

## Integrações

- **Cinco fabricantes, cada um com seu protocolo:** Alphadigi (HTTP, TCP binário e JSON-RPC), Hikvision (eventos ANPR multipart), Motorola (long polling e FTP), Intelbras (RPC2) e antenas UHF Control iD.
- O núcleo da aplicação não conhece nenhum protocolo de fabricante. Um teste de arquitetura impede esse acoplamento.

## Decisão de acesso

- Verifica cadastro, rota por câmera, limite de vagas por unidade e antipassback, e elimina leituras duplicadas.
- Na dúvida, nega o acesso (fail-closed).
- **Dois modos de operação:** no padrão, o banco do sistema legado (Firebird) é a fonte de verdade, com cache em memória. No modo novo, o servidor funciona sem o sistema legado e decide pelos direitos de acesso vindos da nova plataforma da empresa, com cada passagem guardada em disco até ser entregue. Um SQLite local acelera as consultas nos dois.
- **Contrato comum entre sistemas:** tipos e regras compartilhados vêm de pacotes NuGet internos, nunca copiados à mão, e um teste de arquitetura garante isso.
- Placas não cadastradas passam por uma correção pela posição dos caracteres (I/1, O/0), e uma leitura reenviada pela câmera nunca abre a cancela.
- A lista de placas autorizadas também fica sincronizada em cada câmera, então a portaria continua funcionando se o servidor cair.

## Operação

- Monitora se cada câmera continua enviando eventos e reconfigura sozinha as que pararam.
- Roda como serviço do Windows, com painéis web embutidos: registros, trajetos, saúde do sistema e gravações com buffer circular via ffmpeg.
- **Entrega contínua:** a cada versão, o CI compila sem warnings, roda os testes e gera o binário self-contained e o instalador.
- **Atualização automática:** um atualizador em cada instalação busca novas versões no repositório público de releases (com espelho em storage de objetos), instala numa janela de manutenção e faz rollback se a checagem de saúde falhar.

## Números

- Mais de 2.000 testes automatizados, incluindo testes de contrato contra um Firebird real em Docker.
- 103 versões em 10 meses, publicadas com versionamento semântico.
