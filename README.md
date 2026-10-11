# Portfólio — Davi Luis

Site pessoal feito com [Astro](https://astro.build) e Tailwind CSS 4. É totalmente estático, bilíngue (PT/EN) e não usa nenhum JavaScript no cliente.

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
| Currículos | `public/DAVI-LUIS-PT.pdf`, `public/DAVI-LUIS-EN.pdf` |

### Adicionando um projeto

Crie um arquivo com o **mesmo nome** em `pt/` e em `en/` (use um dos existentes como modelo). Campos do frontmatter:

- `title`, `summary`: obrigatórios
- `tags`, `repo`, `demo`, `order`: opcionais
- `links`: links extras, como lista de `label` + `href` (NuGet, front-end, releases...)
- `cover`: imagem opcional (caminho relativo, ex.: `./capa.png`)
- `draft: true`: o projeto aparece só no `npm run dev`

Se o corpo do Markdown tiver conteúdo, o projeto ganha uma página própria em `/projetos/<nome>/` e `/en/projects/<nome>/`.

## Deploy

A saída é estática (`dist/`), então funciona em Vercel, Netlify, Cloudflare Pages ou GitHub Pages. Antes de publicar, defina `site` em `astro.config.mjs` com o domínio final.
