import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Um arquivo por projeto e por idioma, com o mesmo nome nas duas pastas:
 *   src/content/projects/pt/meu-projeto.md
 *   src/content/projects/en/meu-projeto.md
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      /** Linha curta em destaque no card, ex.: "em produção · 1.300+ testes". */
      highlight: z.string().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      repo: z.url().optional(),
      demo: z.url().optional(),
      /** Links extras: pacote, repositório do front, releases... */
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
      /** Menor aparece primeiro. */
      order: z.number().default(100),
      /** Rascunhos aparecem só em `npm run dev`. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
