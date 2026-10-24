---
title: Servidor de Câmeras
summary: Hub de câmeras IP multimarca em .NET 10, com vídeo ao vivo em WebRTC/HLS, gravação contínua, retenção inteligente e API com webhooks para outros sistemas.
highlight: em desenvolvimento · WebRTC ao vivo · 384 testes
tags: [.NET 10, ASP.NET Core, React, TypeScript, SQLite, MediaMTX, WebRTC, ONVIF]
order: 7
---

Um VMS leve: conecta câmeras IP de várias marcas, mostra tudo ao vivo, grava continuamente e entrega vídeo para outros sistemas por API. Está em pré-produção, testado com câmeras reais de três marcas. O código é privado.

## Vídeo

- **O servidor nunca decodifica vídeo:** uma única conexão por câmera, com um motor de mídia (MediaMTX) supervisionado e reconciliado pela própria API. A escolha foi justificada com medições.
- **Ao vivo em menos de 1 segundo:** mosaico em WebRTC, com queda automática para HLS e suporte a H.265.
- **Gravação que envelhece:** nos trechos antigos, um processo mexe só na estrutura do arquivo fMP4 e mantém apenas os quadros-chave, sem recodificar e sem buracos na linha do tempo. Em laboratório, o trecho caiu para cerca de 4% do tamanho. A retenção é definida por câmera e pelo espaço em disco.

## Câmeras e integração

- **Drivers por capacidade:** ONVIF (descoberta e fluxos), Hikvision, Dahua, Intelbras e RTSP genérico. Marcas com padrão conhecido viram configuração, não código.
- **Hub de integração:** API versionada com OpenAPI, páginas para embutir vídeo em outros sistemas, links temporários assinados, chaves com permissões por câmera, webhooks assinados e métricas para Prometheus.

## Operação

- Monitores de gravação parada, motor de mídia fora do ar, relógio das câmeras e disco. A retenção pausa se o relógio parecer errado, para não apagar gravação por engano.
- Exportação de vídeo com manifesto assinado e trilha de auditoria encadeada, login por pessoa e backup cifrado.
- Roda como serviço do Windows, com instalador e atualização com volta automática. São 384 testes, incluindo testes de arquitetura e respostas reais de câmeras usadas como fixtures.
