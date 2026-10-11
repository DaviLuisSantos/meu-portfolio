---
title: CYD Desk Panel
summary: Firmware para o ESP32 "Cheap Yellow Display" que vira um painel de mesa com dados do PC, processos, rede e cotações, alimentado por um agente Python na rede local.
highlight: firmware ESP32 · agente Python
tags: [ESP32, C++, PlatformIO, TFT_eSPI, Python]
order: 5
---

Um painel touch de 2,8" que fica ao lado do monitor mostrando o que está acontecendo no PC e no mercado, sem ocupar espaço na tela principal.

## Firmware

- **Telas plugáveis:** cada tela implementa uma interface com desenho estático, atualização incremental e toque. Um gerenciador cuida da barra de abas e da troca automática entre telas.
- **Redesenho sem flicker:** cada região dinâmica é desenhada num sprite e enviada ao display de uma vez. O sprite é liberado logo depois para não competir por memória com o WiFi.
- **Dois barramentos SPI:** display e touch ficam em barramentos separados, e toda a configuração do driver vem dos build flags, sem editar a biblioteca.
- Tema próprio com ícones vetoriais e fonte suavizada embutida na flash.

## Agente no PC

- Servidor HTTP em Python que mantém em cache CPU, RAM, disco, rede, processos e cotações.
- Assim o ESP32 só faz requisições HTTP simples na rede local, sem precisar de HTTPS com APIs externas.
