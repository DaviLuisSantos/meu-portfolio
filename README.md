# Portfólio — Davi Luis

Site pessoal feito com [Astro](https://astro.build) e Tailwind CSS 4, bilíngue (PT/EN), com identidade visual Cyber-Stoicism. As páginas são estáticas; só o download do currículo e o painel `/admin` rodam no servidor (funções da Vercel).

## Rodando

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera ./dist
npm run check    # checagem de tipos
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos da interface (PT/EN) | `src/i18n/ui.ts` |
| Redes sociais e tecnologias | `src/data/profile.ts` |
| Projetos | `src/content/projects/{pt,en}/*.md` |
| Foto | `src/assets/profile.jpg` |
| Currículos | `private/DAVI-LUIS-PT.pdf`, `private/DAVI-LUIS-EN.pdf` (não são públicos) |
| Cores e fontes | `src/styles/global.css` |

### Adicionando um projeto

Crie um arquivo com o **mesmo nome** em `pt/` e em `en/` (use um dos existentes como modelo). Campos do frontmatter:

- `title`, `summary`: obrigatórios
- `tags`, `repo`, `demo`, `order`: opcionais
- `links`: links extras, como lista de `label` + `href` (NuGet, front-end, releases...)
- `cover`: imagem opcional (caminho relativo, ex.: `./capa.png`)
- `draft: true`: o projeto aparece só no `npm run dev`

Se o corpo do Markdown tiver conteúdo, o projeto ganha uma página própria em `/projetos/<nome>/` e `/en/projects/<nome>/`.

## Download do currículo

O botão abre um formulário (nome, e-mail, empresa e LinkedIn opcionais, consentimento). Depois do envio, `src/pages/api/curriculo.ts`:

1. valida os dados e aplica limite de 10 downloads por IP por hora;
2. salva o contato no Upstash Redis;
3. manda um e-mail de aviso pelo Resend;
4. devolve o PDF, que fica embutido na função e nunca em `/public`.

Se o Redis ou o Resend não estiverem configurados, o download continua funcionando; só o registro ou o aviso é pulado.

Os contatos ficam em **`/admin`** (protegido por senha), com exportação para CSV.

### Variáveis de ambiente (Vercel → Settings → Environment Variables)

| Variável | Para quê |
| --- | --- |
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` | Upstash Redis. Criadas sozinhas ao adicionar o Upstash pelo Marketplace da Vercel (Storage). |
| `RESEND_API_KEY` | Chave da API do [Resend](https://resend.com). |
| `NOTIFY_EMAIL` | E-mail que recebe os avisos. Sem domínio verificado no Resend, precisa ser o mesmo e-mail da conta do Resend. |
| `RESEND_FROM` | Opcional. Remetente, ex.: `Portfólio <cv@seudominio.com>` (exige domínio verificado). |
| `ADMIN_PASSWORD` | Senha do `/admin` (o usuário pode ser qualquer um). |

Para testar localmente com os serviços reais, rode `npx vercel env pull .env.local`.

## Deploy

O deploy é automático na Vercel a cada push na `master` (adaptador `@astrojs/vercel`). Se trocar de domínio, atualize `site` em `astro.config.mjs`.
