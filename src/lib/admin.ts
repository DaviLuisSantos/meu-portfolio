import { ADMIN_PASSWORD } from 'astro:env/server';

/** Basic Auth: o navegador pede usuário e senha; só a senha é conferida. */
export function requireAdmin(request: Request): Response | null {
  const header = request.headers.get('authorization') ?? '';
  const password = header.startsWith('Basic ') ? atob(header.slice(6)).split(':').slice(1).join(':') : '';
  if (ADMIN_PASSWORD && password === ADMIN_PASSWORD) return null;
  return new Response('Acesso restrito', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="admin", charset="UTF-8"' },
  });
}
