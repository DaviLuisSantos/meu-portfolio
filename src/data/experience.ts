import type { Lang } from '../i18n/ui';

export interface Role {
  company: string;
  title: Record<Lang, string>;
  period: Record<Lang, string>;
  /** Cargos anteriores na mesma empresa, numa linha só. */
  earlier?: Record<Lang, string>;
  summary: Record<Lang, string>;
  /** Slug de um projeto com página própria, para "ver o trabalho". */
  project?: string;
}

// Mais enxuto que o currículo de propósito: cargo, datas e contexto.
// A profundidade fica nas páginas dos projetos.
export const experience: Role[] = [
  {
    company: 'Segmix Tecnologia',
    title: { pt: 'Engenheiro de software pleno', en: 'Software Engineer (Mid-Level)' },
    period: { pt: 'jan. 2025 – hoje', en: 'Jan 2025 – present' },
    earlier: {
      pt: 'Júnior (jul. 2023 – jan. 2025) · Estágio (fev. – jun. 2023)',
      en: 'Junior (Jul 2023 – Jan 2025) · Intern (Feb – Jun 2023)',
    },
    summary: {
      pt: 'Plataforma de controle de acesso para condomínios que substitui um sistema Delphi/Firebird de mais de 20 anos. Autor principal do servidor LPR, em produção em mais de 20 condomínios, e líder do desenho de domínio da nova portaria.',
      en: 'Residential access-control platform replacing a 20-year-old Delphi/Firebird system. Main author of the LPR server, running at 20+ sites, and lead of the new concierge system’s domain design.',
    },
    project: 'plataforma-acesso',
  },
  {
    company: 'MLS Wireless',
    title: { pt: 'Estágio em suporte help desk', en: 'Help Desk Support Intern' },
    period: { pt: 'set. 2022 – fev. 2023', en: 'Sep 2022 – Feb 2023' },
    summary: {
      pt: 'Suporte técnico de primeiro nível em internet, e-mail, domínios e VoIP.',
      en: 'First-level technical support for internet, email, domains and VoIP.',
    },
  },
];
