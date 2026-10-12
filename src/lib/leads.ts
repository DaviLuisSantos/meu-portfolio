import { Redis } from '@upstash/redis';
import {
  KV_REST_API_TOKEN,
  KV_REST_API_URL,
  NOTIFY_EMAIL,
  RESEND_API_KEY,
  RESEND_FROM,
} from 'astro:env/server';
import { z } from 'astro/zod';

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().trim().max(200),
  company: z.string().trim().max(120).optional().default(''),
  linkedin: z.string().trim().max(200).optional().default(''),
  lang: z.enum(['pt', 'en']).default('pt'),
  consent: z.literal('on'),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type Lead = LeadInput & { at: string; country: string; userAgent: string };

const LEADS_KEY = 'resume:leads';
const RATE_LIMIT = 10; // downloads por IP por hora

// O .env.local criado pela integração aponta para o banco de produção; em `astro dev` não grava nada.
const redis =
  !import.meta.env.DEV && KV_REST_API_URL && KV_REST_API_TOKEN
    ? new Redis({ url: KV_REST_API_URL, token: KV_REST_API_TOKEN })
    : null;

if (!redis) console.warn('[leads] Redis desligado (dev ou não configurado): os downloads não serão salvos.');

export async function isRateLimited(ip: string) {
  if (!redis) return false;
  const key = `resume:rl:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 3600);
  return count > RATE_LIMIT;
}

export async function saveLead(lead: Lead) {
  if (!redis) return;
  await redis.lpush(LEADS_KEY, JSON.stringify(lead));
}

export async function listLeads(limit = 1000): Promise<Lead[]> {
  if (!redis) return [];
  // O client do Upstash já devolve o JSON desserializado.
  const items = await redis.lrange<Lead | string>(LEADS_KEY, 0, limit - 1);
  return items.map((item) => (typeof item === 'string' ? (JSON.parse(item) as Lead) : item));
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function notifyLead(lead: Lead) {
  if (!RESEND_API_KEY || !NOTIFY_EMAIL) return;

  const rows = [
    ['Nome', lead.name],
    ['E-mail', lead.email],
    ['Empresa', lead.company || '—'],
    ['LinkedIn', lead.linkedin || '—'],
    ['Currículo', lead.lang.toUpperCase()],
    ['País', lead.country || '—'],
    ['Data', new Date(lead.at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })],
  ];

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: RESEND_FROM || 'Portfólio <onboarding@resend.dev>',
      to: [NOTIFY_EMAIL],
      reply_to: lead.email,
      subject: `Currículo baixado por ${lead.name}${lead.company ? ` (${lead.company})` : ''}`,
      html: `<table cellpadding="6">${rows
        .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
        .join('')}</table>`,
    }),
  });

  if (!res.ok) console.error('[leads] Falha ao enviar e-mail:', res.status, await res.text());
}
