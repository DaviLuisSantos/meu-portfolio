---
title: ControlId.Net
summary: Biblioteca .NET open source (não oficial) para integrar equipamentos de controle de acesso e relógios de ponto REP da Control iD, publicada no NuGet.
highlight: publicado no NuGet · validado num iDFace real · 222 testes
tags: [.NET 8, .NET 10, .NET Standard 2.0, ASP.NET Core, xUnit, GitHub Actions]
repo: https://github.com/DaviLuisSantos/ControlId.Net
links:
  - label: NuGet
    href: https://www.nuget.org/packages/ControlId.Net
order: 2
---

Cliente .NET para a linha de acesso da Control iD (iDAccess, iDFlex, iDFace, iDBox, iDUHF) e para os relógios de ponto REP iDClass. Gera para `net8.0` e `netstandard2.0`, então também funciona em projetos .NET Framework 4.6.1+.

São três pacotes: `ControlId.Net`, `ControlId.Net.DependencyInjection` e `ControlId.Net.AspNetCore`. A versão atual é a 0.4.2-alpha.1.

## Destaques

- **Cobertura completa da API documentada:** os 85 endpoints públicos da linha de acesso têm método na biblioteca, e um teste chama cada um e confere a rota e o método HTTP.
- **Testado em equipamento real:** as versões 0.4 corrigem comportamentos encontrados num iDFace (firmware 6.9.12), com uma pessoa fazendo cadastro e identificação de verdade. O que o firmware faz diferente da documentação ficou registrado.
- **Bases grandes e vários equipamentos:** leitura paginada com `IAsyncEnumerable`, limite de requisições simultâneas por equipamento e a mesma operação em vários equipamentos em paralelo, com um resultado por equipamento.
- **Tudo tipado:** CRUD genérico para os objetos da API, 34 seções de configuração (cerca de 245 parâmetros), cadastro facial, mídia do iDFace (vídeo de propaganda, mensagens sonoras, interfonia SIP, RTSP), rede, VPN e licenças.
- **Sessão gerenciada:** login sob demanda, sessão em cache e um novo login automático ao receber 401. Um `SemaphoreSlim` impede logins simultâneos.
- **Parser de AFD:** lê os arquivos das Portarias 671/2021 e 1510/2009 em streaming. Detecta o encoding, valida o CRC-16 e trata linhas corrompidas sem interromper a leitura.
- **Modo Push** para equipamentos atrás de NAT: fila de comandos por equipamento, envio em lote e cancelamento.
- **Integração com ASP.NET Core:** `MapControlIdPush`, `MapControlIdMonitor` e `MapControlIdOnline` para receber eventos e autorizar acessos em tempo real.
- **Vários equipamentos configurados** no `appsettings.json`, criados via `IHttpClientFactory`.

## Qualidade

- 222 testes, rodando em .NET 8 e .NET 10 (Linux) e em .NET Framework 4.8 (Windows).
- Publicação no NuGet via Trusted Publishing (OIDC): não há chave guardada no repositório, e o pacote só sai se todos os testes passarem.

> Projeto independente, sem vínculo com a Control iD. Os nomes citados são marcas da Control iD.
