import type { Lang } from '../i18n/ui';

type Text = Record<Lang, string>;

export interface StackGroup {
  label: Text;
  /** Itens sem ícone aparecem com um marcador. Ícones: https://icon-sets.iconify.design/simple-icons/ */
  items: { label: string; icon?: string }[];
}

export const profile = {
  name: 'Davi Luis',
  socials: [
    { label: 'GitHub', href: 'https://github.com/DaviLuisSantos', icon: 'simple-icons:github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davi-luis/', icon: 'simple-icons:linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/davi.luissc/', icon: 'simple-icons:instagram' },
  ],
  youtube: 'https://www.youtube.com/channel/UCryhrvnlMcEfvisWyQurlyA',

  /** Números logo abaixo do topo. Manter coerentes com as páginas dos projetos. */
  facts: [
    {
      value: { pt: '3+', en: '3+' },
      label: { pt: 'anos como desenvolvedor, de estágio a pleno', en: 'years as a developer, from intern to mid-level' },
    },
    {
      value: { pt: '20+', en: '20+' },
      label: { pt: 'instalações em produção com um serviço que eu criei', en: 'production sites running a service I built' },
    },
    {
      value: { pt: '2.000+', en: '2,000+' },
      label: { pt: 'testes automatizados nesse serviço', en: 'automated tests on that service' },
    },
    {
      value: { pt: '3', en: '3' },
      label: { pt: 'pacotes .NET open source no NuGet', en: 'open source .NET packages on NuGet' },
    },
  ] satisfies { value: Text; label: Text }[],

  stack: [
    {
      label: { pt: 'back-end', en: 'back end' },
      items: [
        { label: '.NET / C#', icon: 'simple-icons:dotnet' },
        { label: 'ASP.NET Core', icon: 'simple-icons:dotnet' },
        { label: 'Node.js', icon: 'simple-icons:nodedotjs' },
        { label: 'Python', icon: 'simple-icons:python' },
      ],
    },
    {
      label: { pt: 'front-end', en: 'front end' },
      items: [
        { label: 'TypeScript', icon: 'simple-icons:typescript' },
        { label: 'React', icon: 'simple-icons:react' },
        { label: 'Next.js', icon: 'simple-icons:nextdotjs' },
        { label: 'Blazor', icon: 'simple-icons:blazor' },
        { label: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      ],
    },
    {
      label: { pt: 'dados', en: 'data' },
      items: [
        { label: 'PostgreSQL', icon: 'simple-icons:postgresql' },
        { label: 'SQLite', icon: 'simple-icons:sqlite' },
        { label: 'Firebird' },
      ],
    },
    {
      label: { pt: 'cloud e devops', en: 'cloud & devops' },
      items: [
        { label: 'Azure', icon: 'simple-icons:microsoftazure' },
        { label: 'Docker', icon: 'simple-icons:docker' },
        { label: 'GitHub Actions', icon: 'simple-icons:githubactions' },
        { label: 'Cloudflare', icon: 'simple-icons:cloudflare' },
        { label: 'Vercel', icon: 'simple-icons:vercel' },
      ],
    },
    {
      label: { pt: 'visão computacional', en: 'computer vision' },
      items: [
        { label: 'ONNX Runtime', icon: 'simple-icons:onnx' },
        { label: 'OpenCV', icon: 'simple-icons:opencv' },
        { label: 'PyTorch', icon: 'simple-icons:pytorch' },
      ],
    },
    {
      label: { pt: 'hardware e integrações', en: 'hardware & integrations' },
      items: [
        { label: 'LPR / ONVIF' },
        { label: 'Control iD' },
        { label: 'ESP32', icon: 'simple-icons:espressif' },
      ],
    },
  ] satisfies StackGroup[],

  education: [
    { pt: 'Ciência da Computação (concluindo)', en: 'Computer Science (finishing)' },
    { pt: 'Pós-graduação em Engenharia de Software', en: 'Postgraduate diploma in Software Engineering' },
    { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development' },
  ] satisfies Text[],
  certifications: [{ pt: 'Microsoft Azure Fundamentals (AZ-900)', en: 'Microsoft Azure Fundamentals (AZ-900)' }] satisfies Text[],
  languages: [
    { pt: 'Português (nativo)', en: 'Portuguese (native)' },
    { pt: 'Inglês (intermediário)', en: 'English (intermediate)' },
  ] satisfies Text[],
};
