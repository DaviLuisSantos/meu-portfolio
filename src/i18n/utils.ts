import { defaultLang, ui, type Lang, type UiKey } from './ui';

export function toLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key];
}

export const otherLang = (lang: Lang): Lang => (lang === 'pt' ? 'en' : 'pt');

/** Rotas com nome diferente em cada idioma. */
export const paths = {
  home: (lang: Lang) => (lang === 'pt' ? '/' : '/en/'),
  project: (lang: Lang, slug: string) =>
    lang === 'pt' ? `/projetos/${slug}/` : `/en/projects/${slug}/`,
};

export const resumeUrl = (lang: Lang) => (lang === 'pt' ? '/DAVI-LUIS-PT.pdf' : '/DAVI-LUIS-EN.pdf');
