---
title: Sirene WHV
summary: SaaS que avisa pelo Telegram, em segundos, quando abrem as vagas do visto Working Holiday (subclasse 462) para brasileiros. No ar, em lista de espera.
highlight: no ar · lista de espera · bot no Telegram · Pix
tags: [Python, asyncio, SQLite, Telegram Bot API, Cloudflare, Mercado Pago]
cover: ../../../assets/projects/sirene-whv.png
demo: https://sirenewhv.com.br
links:
  - label: Status ao vivo
    href: https://status.sirenewhv.com.br
  - label: Canal no Telegram
    href: https://t.me/sirenewhv
order: 3
---

Em 2025, as vagas do Working Holiday para brasileiros esgotaram em cerca de 3 minutos. A Sirene nasceu de um monitor que fiz para mim e virou produto: assim que as vagas abrem, assinantes recebem o alerta no Telegram. O serviço está no ar em lista de espera, e as assinaturas abrem em breve.

## Arquitetura

- **Separado do monitor:** um serviço à parte lê o estado do monitor a cada 2 segundos e transforma cada mudança em um evento (vaga abriu, vaga fechou, manutenção…). Nenhuma linha do monitor mudou, e o serviço não faz nenhuma requisição a mais ao site do governo.
- **Nada se perde:** cada evento é gravado num outbox em SQLite antes de ser entregue. Se o Telegram falhar, a entrega é retomada depois.
- **Lógica pura e testada:** a decisão de quais eventos gerar não depende de rede, relógio nem disco. São 46 testes, além de um simulacro de ponta a ponta com bot e canal de teste.
- **Sem confundir o assinante:** problemas de saúde do monitor vão só para mim. Quem assina nunca recebe "inalcançável" como se fosse "vaga fechada".
- **Nenhuma porta aberta:** roda numa VM gratuita na nuvem. A página de status pública sai por um Cloudflare Tunnel de saída, e a landing fica no Cloudflare Pages.

## Produto

- **Bot com menu de botões:** escolha do plano, aceite dos termos, e-mail e pagamento por Pix pelo Mercado Pago. A confirmação é por consulta de status, sem webhook, justamente para a VM continuar sem porta aberta.
- **Canais:** um canal público gratuito e um privado para assinantes. O plano Pro adiciona alerta crítico (Pushover) e ligação de voz (Twilio), para acordar quem está dormindo às 3h. Pagamento e plano Pro estão prontos, em testes antes do lançamento.
- **Operação:** página de status ao vivo, rastreio da origem dos visitantes e backup diário do banco, com restauração testada.
