---
title: Emplaca
summary: Lightweight .NET license plate reader (ALPR) for Brazilian plates, with my own ONNX detector and recognizer on CPU, a Mercosul/legacy decoder and multi-frame voting.
highlight: alpha · computer vision · −37% time per frame
tags: [.NET 10, C#, ONNX Runtime, Python, PyTorch, OpenCV]
order: 8
---

A .NET library to read Brazilian license plates on modest hardware, with no GPU. The models are my own, trained from scratch, with no YOLO and no pretrained weights. It is in alpha and the code is still private.

## Pipeline

- **From frame to plate:** detector, crop, recognizer, syntactic decoder and, finally, voting across frames of the same vehicle.
- **Anchor-free detector** in the CenterNet style, with no NMS step, plus tiling to find small plates and a region of interest per camera.
- **Compact recognizer** in grayscale, with one output per character position.
- **Model-independent decoder:** constrains letter or digit at each position and picks Mercosul or legacy format by joint probability. It also accepts the text output of another OCR.
- **Per-vehicle tracking** with voting and a list of known plates, tolerating one character of difference and the switch between legacy and Mercosul plates.

## Training and evaluation

- **Synthetic plate generator** (Mercosul, legacy and two-line motorcycle plates) with infrared, blur, dirt and perspective. Validation uses fonts held out of training.
- **Rigorous evaluation:** a locked split by vehicle, paired comparisons between models and blind label review. Negative results are recorded too.
- **Python ↔ .NET parity:** tests ensure the C# inference reproduces the model exported from PyTorch.
- **Performance:** restricting tiles to each camera's region cut the average time per frame by 37% (from 731 to 460 ms on one CPU core), with the same accuracy.
- About 330 tests across C# and Python.
