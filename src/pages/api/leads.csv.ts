import type { APIRoute } from 'astro';
import { requireAdmin } from '../../lib/admin';
import { listLeads } from '../../lib/leads';

export const prerender = false;

const csvCell = (value: string) => `"${value.replaceAll('"', '""')}"`;

export const GET: APIRoute = async ({ request }) => {
  const denied = requireAdmin(request);
  if (denied) return denied;

  const leads = await listLeads(10_000);
  const columns = ['at', 'name', 'email', 'company', 'linkedin', 'lang', 'country'] as const;
  const csv = [columns.join(','), ...leads.map((l) => columns.map((c) => csvCell(l[c] ?? '')).join(','))].join('\n');

  return new Response('﻿' + csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="downloads-curriculo.csv"',
      'Cache-Control': 'no-store',
    },
  });
};
