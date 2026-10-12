---
title: CYD PC Dashboard
summary: Painel touch de mesa no ESP32 "Cheap Yellow Display" com dados do PC, processos, rede, cotações e YouTube, alimentado por um agente Python na rede local.
highlight: firmware ESP32 · instalador web · release automatizada
tags: [ESP32, C++, PlatformIO, TFT_eSPI, Python, GitHub Actions]
cover: ../../../assets/projects/cyd-pc-dashboard.png
repo: https://github.com/DaviLuisSantos/cyd-pc-dashboard
demo: https://daviluissantos.github.io/cyd-pc-dashboard/
order: 5
---

Um painel de 2,8" (uma placa de uns US$ 15) que fica ao lado do monitor e mostra, de relance, o que normalmente exigiria trocar de janela: relógio, CPU e RAM, processos, rede, cotações e estatísticas do YouTube. As capturas acima foram lidas direto do framebuffer do display.

## Firmware

- **Seis abas plugáveis:** cada tela implementa uma interface com desenho estático, atualização incremental e toque. A navegação é por toque, com rotação automática opcional.
- **Sem flicker:** cada valor dinâmico é desenhado num sprite fora da tela e enviado ao display numa única transação. O sprite é liberado logo depois para não disputar memória com o WiFi.
- **Configuração sem código:** no primeiro boot o painel abre um portal WiFi onde se escolhe a rede, o IP do agente, o fuso e o idioma. Tudo fica salvo na flash da placa.
- Tema Dracula com formas e fontes suavizadas, ícones 100% vetoriais e interface em português e inglês, trocável em tempo de execução.

## Problemas que deram trabalho

- **Leituras corrompidas no SPI:** display e touch usavam o mesmo periférico SPI do ESP32. As escritas funcionavam, mas as leituras do display voltavam erradas. A solução foi separar os dois em periféricos diferentes.
- **Bits deslocados na leitura:** ler o framebuffer na mesma frequência da escrita deslocava cada byte em um bit. As leituras passaram a rodar a 6 MHz, e as escritas continuam a 55 MHz.

## Agente no PC e distribuição

- **Agente em Python** (só psutil e biblioteca padrão): cada métrica é coletada por uma thread própria e servida a partir de cache. O ESP32 só faz HTTP simples na rede local, sem chaves de API nem TLS no microcontrolador.
- **Instalador web:** o firmware é gravado direto pelo navegador, sem instalar nenhuma ferramenta.
- **Releases automáticas:** o GitHub Actions compila a cada tag, gera um binário único e publica a release e o instalador.
