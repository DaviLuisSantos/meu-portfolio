---
title: Plataforma de controle de acesso para condomínios
summary: Três serviços .NET (portaria, servidor veicular LPR e servidor de acesso pessoal) que substituem um sistema Delphi/Firebird de mais de 20 anos, ligados por um contrato versionado em pacotes NuGet.
highlight: em produção · ~89% dos ~1.940 commits são meus · domínio da v2 sob minha liderança
tags: [.NET 10, ASP.NET Core, EF Core, React, Vite, PWA, Firebird, NuGet, GitHub Actions, Inno Setup]
order: 1
---

Meu trabalho na Segmix Tecnologia, onde sou engenheiro de software pleno. A empresa tem um sistema de portaria em Delphi e Firebird com mais de 20 anos, e a plataforma nova está substituindo esse legado aos poucos, sem parar a operação dos condomínios. O código é privado.

## Os três serviços

- **Portaria (papa-fila):** visitantes, encomendas, reservas, equipamentos e câmeras RTSP, em .NET e React com Vite (app desktop, instalável como PWA). A versão 1.0, feita em equipe, está em produção desde setembro de 2026; a v2 já tem mais de 3.500 casos de teste. Hoje eu lidero o desenho de domínio da v2: identidade, estrutura do condomínio, credenciais, visitas e veículos.
- **Servidor veicular LPR:** sou o autor principal. Integra câmeras de leitura de placas de quatro fabricantes e antenas UHF ao controle de acesso, em produção em mais de 20 condomínios (veja o projeto abaixo).
- **Servidor de acesso pessoal:** estou conduzindo a migração de Delphi e WPF para C# e ASP.NET Core, integrado à nova portaria.

## Como eles se encaixam

- **Contrato comum em pacotes NuGet:** tipos e regras compartilhados entre os três serviços vêm de pacotes versionados que eu criei, nunca copiados entre repositórios. Testes de arquitetura garantem isso.
- **Release por tag:** o GitHub Actions compila, testa e publica os três serviços, com jobs Windows num runner próprio.
- **Instalador único:** um instalador (Inno Setup) entrega os três serviços já ligados entre si e encontra o banco do sistema legado sozinho.
- **Desenvolvimento assistido por IA com controle:** contexto por área para o Claude Code, regras de projeto verificadas por teste e checklists de entrega, replicados nos três serviços.
