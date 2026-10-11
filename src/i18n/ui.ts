export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

export const ui = {
  pt: {
    'meta.description': 'Portfólio de Davi Luis, desenvolvedor full stack.',
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.switch': 'Read in English',
    'hero.role': 'Desenvolvedor Full Stack',
    'hero.tagline':
      'Construo APIs e aplicações web com .NET, Node.js e React, do banco de dados à interface.',
    'hero.resume': 'Baixar currículo',
    'hero.projects': 'Ver projetos',
    'stack.title': 'Tecnologias',
    'projects.title': 'Projetos',
    'projects.empty': 'Novos projetos em breve.',
    'projects.repo': 'Código',
    'projects.demo': 'Ver online',
    'projects.details': 'Detalhes',
    'projects.back': 'Voltar aos projetos',
    'about.title': 'Sobre mim',
    'about.p1':
      'Sou desenvolvedor full stack e gosto de transformar problemas reais em software simples de usar e de manter.',
    'about.p2':
      'Sou formado em Análise e Desenvolvimento de Sistemas e curso Ciência da Computação. Tenho experiência com integrações de hardware, sistemas legados e APIs em produção.',
    'contact.title': 'Vamos conversar',
    'contact.text':
      'Estou aberto a novas oportunidades e projetos. O jeito mais rápido de falar comigo é pelo LinkedIn.',
    'footer.built': 'Feito com Astro.',
    'notfound.title': 'Página não encontrada',
    'notfound.back': 'Voltar ao início',
  },
  en: {
    'meta.description': 'Portfolio of Davi Luis, full stack developer.',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.switch': 'Ler em português',
    'hero.role': 'Full Stack Developer',
    'hero.tagline':
      'I build APIs and web applications with .NET, Node.js and React, from the database to the interface.',
    'hero.resume': 'Download resume',
    'hero.projects': 'See projects',
    'stack.title': 'Tech stack',
    'projects.title': 'Projects',
    'projects.empty': 'New projects coming soon.',
    'projects.repo': 'Code',
    'projects.demo': 'Live',
    'projects.details': 'Details',
    'projects.back': 'Back to projects',
    'about.title': 'About me',
    'about.p1':
      'I am a full stack developer who enjoys turning real problems into software that is simple to use and to maintain.',
    'about.p2':
      'I hold a degree in Systems Analysis and Development and I am studying Computer Science. I have experience with hardware integrations, legacy systems and APIs in production.',
    'contact.title': "Let's talk",
    'contact.text':
      'I am open to new opportunities and projects. The fastest way to reach me is on LinkedIn.',
    'footer.built': 'Built with Astro.',
    'notfound.title': 'Page not found',
    'notfound.back': 'Back to home',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)['pt'];
