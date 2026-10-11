---
title: ControlId.Net
summary: Biblioteca .NET open source (não oficial) para integrar equipamentos de controle de acesso e relógios de ponto REP da Control iD, publicada no NuGet.
tags: [.NET 8, .NET Standard 2.0, ASP.NET Core, xUnit, GitHub Actions]
repo: https://github.com/DaviLuisSantos/ControlId.Net
links:
  - label: NuGet
    href: https://www.nuget.org/packages/ControlId.Net
order: 2
---

Cliente .NET para a linha de acesso da Control iD (iDAccess, iDFlex, iDFace, iDBox, iDUHF) e para os relógios de ponto REP iDClass. Gera para `net8.0` e `netstandard2.0`, então também funciona em projetos .NET Framework 4.6.1+.

São três pacotes: `ControlId.Net`, `ControlId.Net.DependencyInjection` e `ControlId.Net.AspNetCore`.

## Destaques

- **Sessão gerenciada:** login sob demanda, sessão em cache e um novo login automático ao receber 401. Um `SemaphoreSlim` impede logins simultâneos.
- **Parser de AFD:** lê os arquivos das Portarias 671/2021 e 1510/2009 em streaming. Detecta o encoding, valida o CRC-16 e trata linhas corrompidas sem interromper a leitura.
- **Modo Push** para equipamentos atrás de NAT: fila de comandos por equipamento, envio em lote e cancelamento.
- **Integração com ASP.NET Core:** `MapControlIdPush`, `MapControlIdMonitor` e `MapControlIdOnline` para receber eventos e autorizar acessos em tempo real.
- **Vários equipamentos configurados** no `appsettings.json`, criados via `IHttpClientFactory`.

## Qualidade

- 144 testes, rodando em .NET 8 (Linux) e em .NET Framework 4.8 (Windows).
- Publicação no NuGet via Trusted Publishing (OIDC): não há chave guardada no repositório, e o pacote só sai se todos os testes passarem.

> Projeto independente, sem vínculo com a Control iD. Os nomes citados são marcas da Control iD.
