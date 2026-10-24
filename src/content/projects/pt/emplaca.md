---
title: Emplaca
summary: Leitura de placas brasileiras (ALPR) leve em .NET, com detector e reconhecedor próprios em ONNX rodando em CPU, decodificador Mercosul/antiga e votação entre quadros.
highlight: alfa · visão computacional · −37% de tempo por quadro
tags: [.NET 10, C#, ONNX Runtime, Python, PyTorch, OpenCV]
order: 8
---

Uma biblioteca .NET para ler placas brasileiras em hardware simples, sem GPU. Os modelos são meus, treinados do zero, sem YOLO nem pesos pré-treinados. Está em alfa e o código ainda é privado.

## Pipeline

- **Do quadro à placa:** detector, recorte, reconhecedor, decodificador sintático e, por fim, votação entre os quadros do mesmo veículo.
- **Detector sem âncoras** no estilo CenterNet, sem etapa de NMS, com recorte em tiles para achar placas pequenas e uma região de interesse por câmera.
- **Reconhecedor compacto** em tons de cinza, com saída por posição de caractere.
- **Decodificador independente do modelo:** restringe letra ou dígito em cada posição e escolhe entre Mercosul e antiga pela probabilidade conjunta. Também aceita a saída em texto de outro OCR.
- **Rastreio por veículo** com votação e lista de placas conhecidas, tolerando um caractere de diferença e a troca entre placa antiga e Mercosul.

## Treino e avaliação

- **Gerador sintético de placas** (Mercosul, antiga e moto em duas linhas) com infravermelho, desfoque, sujeira e perspectiva. A validação usa fontes que ficaram fora do treino.
- **Avaliação com rigor:** divisão por veículo travada, comparações pareadas entre modelos e revisão de rótulos às cegas. Os resultados negativos também ficam registrados.
- **Paridade Python ↔ .NET:** testes garantem que a inferência em C# reproduz a do modelo exportado do PyTorch.
- **Desempenho:** restringir os tiles à região de cada câmera reduziu o tempo médio por quadro em 37% (de 731 para 460 ms num núcleo de CPU), com a mesma precisão.
- Cerca de 330 testes, entre C# e Python.
