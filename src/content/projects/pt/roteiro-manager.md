---
title: Roteiro Manager
summary: App web local para organizar, editar e gravar roteiros de vídeo em Markdown, com visualizador formatado e teleprompter.
highlight: sem framework · teleprompter
tags: [Node.js, Express, JavaScript, HTML, CSS]
repo: https://github.com/DaviLuisSantos/RoteiroManager
order: 9
---

Feito para o meu fluxo de gravação de vídeos: os roteiros ficam em arquivos Markdown, e o app transforma cada um em algo fácil de ler durante a gravação.

## Destaques

- **API REST sobre arquivos:** listar, ler, salvar, renomear, duplicar e excluir roteiros, com busca no nome e no conteúdo e proteção contra acesso fora da pasta.
- **Parser de Markdown próprio:** seções como Hook, Blocos e CTA viram selos coloridos, e as citações viram caixas de fala.
- **Teleprompter:** rolagem com `requestAnimationFrame` calculada pelo tempo entre quadros, contagem regressiva, tela cheia, modo espelho e atalhos de teclado.
- **Editor:** barra de ferramentas de Markdown, salvamento automático, contagem de palavras com tempo estimado de fala, importação por arrastar e soltar e exportação para PDF.
- Sem framework e sem build: só HTML, CSS e JavaScript, com o Express servindo a API.
