// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

const secret = () => envField.string({ context: 'server', access: 'secret', optional: true });

// https://astro.build/config
export default defineConfig({
  site: 'https://portifolio-daviluissantos-projects.vercel.app',
  // Páginas continuam estáticas; só as rotas com `prerender = false` rodam no servidor.
  adapter: vercel(),
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  env: {
    schema: {
      // Upstash Redis: a integração da Vercel cria as variáveis KV_*.
      KV_REST_API_URL: secret(),
      KV_REST_API_TOKEN: secret(),
      // Resend: aviso por e-mail a cada download do currículo.
      RESEND_API_KEY: secret(),
      RESEND_FROM: secret(),
      NOTIFY_EMAIL: secret(),
      // Senha da página /admin (usuário: qualquer um).
      ADMIN_PASSWORD: secret(),
    },
  },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
