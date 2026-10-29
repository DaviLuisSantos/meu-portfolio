---
title: Sirene — alertas em tempo real
summary: Monitor 24/7 que detecta em segundos a abertura de vagas num portal governamental e avisa assinantes pelo Telegram. No ar, em lista de espera.
highlight: no ar · lista de espera · bot no Telegram · Pix
tags: [Python, asyncio, Playwright, SQLite, Telegram Bot API, Cloudflare, Mercado Pago]
order: 6
---


Num portal governamental em que as vagas esgotam em poucos minutos, quem chega primeiro leva. A Sirene nasceu de um monitor que fiz para mim e virou produto: assim que as vagas abrem, assinantes recebem o alerta no Telegram. O serviço está no ar em lista de espera, e as assinaturas abrem em breve.

## Arquitetura

- **Separado do monitor:** um serviço à parte lê o estado do monitor a cada 2 segundos e transforma cada mudança em um evento (vaga abriu, vaga fechou, manutenção…). Nenhuma linha do monitor mudou, e o serviço não faz nenhuma requisição a mais ao site do governo.
- **Nada se perde:** cada evento é gravado num outbox em SQLite antes de ser entregue. Se o Telegram falhar, a entrega é retomada depois.
- **Lógica pura e testada:** a decisão de quais eventos gerar não depende de rede, relógio nem disco. São 49 testes, além de um simulacro de ponta a ponta com bot e canal de teste.
- **Sem confundir o assinante:** problemas de saúde do monitor vão só para mim. Quem assina nunca recebe "inalcançável" como se fosse "vaga fechada".
- **Nenhuma porta aberta:** roda numa VM gratuita na nuvem. A página de status pública sai por um Cloudflare Tunnel de saída, e a landing fica no Cloudflare Pages.

## Produto

- **Bot com menu de botões:** escolha do plano, aceite dos termos, e-mail e pagamento por Pix pelo Mercado Pago. A confirmação é por consulta de status, sem webhook, justamente para a VM continuar sem porta aberta.
- **Canais:** um canal público gratuito e um privado para assinantes. O plano Pro adiciona alerta crítico (Pushover) e ligação de voz (Twilio), para acordar quem está dormindo às 3h. Pagamento e plano Pro estão prontos, em testes antes do lançamento.
- **Operação:** um post diário automático no canal gratuito confirma que o monitoramento segue ativo, além de página de status ao vivo, rastreio da origem dos visitantes e backup diário do banco, com restauração testada.
