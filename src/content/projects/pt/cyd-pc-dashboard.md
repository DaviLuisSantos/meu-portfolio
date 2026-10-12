---
title: CYD PC Dashboard
summary: Painel touch de mesa no ESP32 "Cheap Yellow Display" com dados do PC, processos, rede, cotações, serviços e notificações, alimentado por um agente na rede local.
highlight: v1.11 · 16 releases · atualização OTA · instalador web
tags: [ESP32, C++, PlatformIO, TFT_eSPI, Python, pytest, GitHub Actions]
cover: ../../../assets/projects/cyd-pc-dashboard.png
repo: https://github.com/DaviLuisSantos/cyd-pc-dashboard
demo: https://daviluissantos.github.io/cyd-pc-dashboard/
order: 5
---

Um painel de 2,8" (uma placa de uns US$ 15) que fica ao lado do monitor e mostra, de relance, o que normalmente exigiria trocar de janela. As capturas acima foram lidas direto do framebuffer do display.

## O que ele mostra

- **Sete abas:** relógio, PC (CPU, RAM, temperatura, discos e rede), processos, rede, cotações (moedas, cripto, ações, ETFs e índices, com gráfico de 24h), YouTube e serviços (se hosts e sites escolhidos estão no ar, com a latência).
- **Notificações do PC:** um comando ou um `curl` faz aparecer um card no painel, útil para avisar quando um build, um teste ou um download termina.
- **Alertas:** limites de CPU, RAM e disco colorem os indicadores e fazem a aba do PC piscar de qualquer outra aba.
- **Usa o que a placa tem:** o LED RGB pisca em alertas e notificações, e o sensor de luz ajusta o brilho conforme o ambiente. À noite, a tela escurece ou apaga.

## Firmware

- **Interface web no próprio painel:** captura da tela ao vivo (dá para clicar e "tocar" nela), todas as configurações editáveis na hora e **atualização de firmware pelo WiFi (OTA)** com rollback automático.
- **Configuração sem código:** o instalador web grava o firmware pelo navegador e já configura o WiFi. Também há um portal WiFi e descoberta automática do agente na rede.
- **Sem flicker:** cada valor dinâmico é desenhado num sprite fora da tela e enviado ao display numa única transação.
- Seis temas de cor (Dracula, Nord, Gruvbox, Catppuccin e outros), ícones 100% vetoriais e interface em português e inglês.

## Problemas que deram trabalho

- **Leituras corrompidas no SPI:** display e touch usavam o mesmo periférico SPI do ESP32. As escritas funcionavam, mas as leituras do display voltavam zeradas. A solução foi separar os dois em periféricos diferentes.
- **Bits deslocados na leitura:** ler o framebuffer na mesma frequência da escrita deslocava cada byte em um bit. As leituras passaram a rodar a 6 MHz, e as escritas continuam a 55 MHz.

## Agente e distribuição

- **Agente em Python** (só psutil e biblioteca padrão): cada métrica é coletada por uma thread própria e servida a partir de cache. O ESP32 só faz HTTP simples na rede local, sem chaves de API nem TLS no microcontrolador.
- O agente roda como executável no Windows, sem precisar de Python, e tem inicialização automática no Windows, no Linux e no macOS, além de token de autenticação opcional.
- **68 testes** com pytest rodando no CI em Windows, Linux e macOS.
- **Releases automáticas:** o GitHub Actions compila a cada tag, gera um binário único e publica a release e o instalador.
