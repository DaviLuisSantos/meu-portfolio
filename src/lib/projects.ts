import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** O id gerado pelo glob loader é "<idioma>/<slug>". */
export const projectSlug = (project: Project) => project.id.split('/').slice(1).join('/');

export async function getProjects(lang: Lang) {
  const projects = await getCollection(
    'projects',
    (p) => p.id.startsWith(`${lang}/`) && (import.meta.env.DEV || !p.data.draft),
  );
  return projects.sort((a, b) => a.data.order - b.data.order);
}
