import type { Lang } from '../i18n/ui';

export interface Role {
  company: string;
  title: Record<Lang, string>;
  period: Record<Lang, string>;
  /** Cargos anteriores na mesma empresa, numa linha só. */
  earlier?: Record<Lang, string>;
  summary: Record<Lang, string>;
  /** Conquistas com impacto: o que fiz e o que mudou. */
  highlights?: Record<Lang, string[]>;
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
    highlights: {
      pt: [
        'Autor principal do servidor LPR (619 de 623 commits): integra câmeras de quatro fabricantes e antenas UHF, roda em mais de 20 condomínios e tem mais de 2.000 testes automatizados.',
        'Lidero o desenho de domínio da v2 da nova portaria: identidade, estrutura do condomínio, credenciais, visitas e veículos.',
        'Criei o contrato comum em pacotes NuGet que liga os três serviços da plataforma, com release por tag e um instalador único para os três.',
        'Conduzo a migração do servidor de acesso pessoal de Delphi e WPF para C# e ASP.NET Core.',
      ],
      en: [
        'Main author of the LPR server (619 of 623 commits): it integrates cameras from four vendors and UHF antennas, runs at 20+ residential sites and has 2,000+ automated tests.',
        'I lead the domain design of v2 of the new concierge system: identity, property structure, credentials, visits and vehicles.',
        'I built the shared contract, in NuGet packages, that ties the platform’s three services together, with tag-based releases and a single installer for all three.',
        'I am leading the migration of the personal access server from Delphi and WPF to C# and ASP.NET Core.',
      ],
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
