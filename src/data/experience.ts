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
      pt: 'Back-end e arquitetura de uma plataforma .NET que está substituindo um sistema legado de mais de 20 anos, com a operação dos clientes no ar o tempo todo.',
      en: 'Back end and architecture of a .NET platform that is replacing a 20-year-old legacy system while customers keep running in production.',
    },
    highlights: {
      pt: [
        'Modernização de legado sem parar a operação: substituímos um sistema Delphi/Firebird de mais de 20 anos por serviços .NET 10, migrando aos poucos e com os dois mundos convivendo em produção.',
        'Dono de um serviço crítico do início ao fim (autor de 619 dos 623 commits): decisões em tempo real, integração com hardware de quatro fabricantes, mais de 2.000 testes e 112 versões entregues com atualização automática e rollback.',
        'Padrões de arquitetura entre serviços: criei um contrato compartilhado em pacotes NuGet versionados, garantido por testes de arquitetura, e o pipeline que compila, testa e publica os três serviços a cada versão.',
        'Liderança técnica e IA com processo: conduzo o desenho de domínio da nova versão do produto principal e padronizei o uso de assistentes de IA nos três serviços, com regras de projeto verificadas por teste.',
      ],
      en: [
        'Legacy modernization with zero downtime: we are replacing a 20-year-old Delphi/Firebird system with .NET 10 services, migrating step by step with both worlds running side by side in production.',
        'Owner of a critical service end to end (author of 619 of 623 commits): real-time decisions, hardware integration across four vendors, 2,000+ tests and 112 releases shipped with automatic updates and rollback.',
        'Architecture standards across services: I built a shared contract in versioned NuGet packages, enforced by architecture tests, and the pipeline that builds, tests and ships all three services on every release.',
        'Technical leadership and AI with process: I lead the domain design of the main product’s next version and standardized how AI assistants are used across the three services, with project rules verified by tests.',
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
