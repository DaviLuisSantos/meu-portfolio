import type { APIRoute } from 'astro';
import pdfEn from '../../../private/DAVI-LUIS-EN.pdf?inline';
import pdfPt from '../../../private/DAVI-LUIS-PT.pdf?inline';
import { paths } from '../../i18n/utils';
import { isRateLimited, leadSchema, notifyLead, saveLead } from '../../lib/leads';

export const prerender = false;

// Os PDFs ficam fora de /public e só são entregues depois do formulário.
const resumes = {
  pt: { data: pdfPt, filename: 'Davi-Luis-Curriculo.pdf' },
  en: { data: pdfEn, filename: 'Davi-Luis-Resume.pdf' },
};

const decodeDataUrl = (dataUrl: string) =>
  Uint8Array.from(atob(dataUrl.slice(dataUrl.indexOf(',') + 1)), (c) => c.charCodeAt(0));

export const POST: APIRoute = async ({ request, clientAddress, redirect }) => {
  // Requisições do modal pedem JSON nos erros; o formulário sem JS volta para a página com ?erro.
  const viaFetch = request.headers.get('x-resume-fetch') === '1';
  const form = await request.formData();
  const lang = form.get('lang') === 'en' ? 'en' : 'pt';
  const formPage = paths.resume(lang);

  const fail = (status: number, error: string) =>
    viaFetch ? Response.json({ error }, { status }) : redirect(`${formPage}?erro=${error}`, 303);

  // Honeypot: campo invisível que só robôs preenchem.
  if (form.get('website')) return fail(400, 'invalid');

  const parsed = leadSchema.safeParse(Object.fromEntries(form));
  if (!parsed.success) return fail(400, 'invalid');

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || clientAddress;
  if (await isRateLimited(ip)) return fail(429, 'rate');

  const lead = {
    ...parsed.data,
    at: new Date().toISOString(),
    country: request.headers.get('x-vercel-ip-country') ?? '',
    userAgent: request.headers.get('user-agent')?.slice(0, 200) ?? '',
  };

  // Falha ao salvar ou avisar não pode impedir o download.
  const results = await Promise.allSettled([saveLead(lead), notifyLead(lead)]);
  for (const r of results) if (r.status === 'rejected') console.error('[curriculo]', r.reason);

  const resume = resumes[lead.lang];
  return new Response(decodeDataUrl(resume.data), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${resume.filename}"`,
      'Cache-Control': 'no-store',
    },
  });
};
