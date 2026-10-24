// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

const secret = () => envField.string({ context: 'server', access: 'secret', optional: true });

/**
 * O entrypoint do @astrojs/vercel (11.0.13) importa o módulo da integração, que traz um
 * `import "rolldown"` usado só no build. Na função da Vercel o rolldown fica sem o binário
 * nativo e toda rota de servidor quebra. Como a função nunca usa o rolldown, troca por um
 * módulo vazio no build do servidor. Dá para remover quando o adaptador corrigir isso.
 */
const stubRolldownInServer = {
  name: 'stub-rolldown-in-server',
  enforce: /** @type {const} */ ('pre'),
  apply: /** @type {const} */ ('build'),
  /** @param {string} id @param {string | undefined} _importer @param {{ ssr?: boolean }} [options] */
  resolveId(id, _importer, options) {
    if (id === 'rolldown' && options?.ssr) return '\0empty-rolldown';
  },
  /** @param {string} id */
  load(id) {
    if (id === '\0empty-rolldown') {
      return 'export function rolldown() { throw new Error("rolldown indisponível na função"); }';
    }
  },
};

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
  integrations: [
    icon({
      // Sem esta lista, páginas renderizadas no servidor carregam o pacote inteiro de ícones (~5 MB).
      // Ao usar um ícone novo (ex.: em src/data/profile.ts), adicione-o aqui.
      include: {
        'simple-icons': [
          'blazor', 'docker', 'dotnet', 'github', 'githubactions', 'instagram', 'linkedin', 'microsoftazure',
          'nextdotjs', 'nodedotjs', 'onnx', 'opencv', 'postgresql', 'python', 'react', 'sqlite', 'typescript',
          'youtube',
        ],
        lucide: ['arrow-left', 'arrow-up-right', 'file-text', 'x'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss(), stubRolldownInServer],
  },
});
