export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Full-Stack' | 'Mobile' | 'Web App';
  status?: 'Missão Concluída' | 'Missão em Andamento';
}

export const projects: Project[] = [
  {
    id: 'onglink',
    title: 'ONGLink',
    subtitle: 'Plataforma de Impacto Social',
    description:
      'Plataforma full-stack robusta desenhada para conectar organizações não governamentais (ONGs) e empresas parceiras, viabilizando captação de recursos, gestão de doações e parcerias estratégicas com alta escalabilidade.',
    technologies: [
      'Next.js',
      'Express',
      'MongoDB',
      'Docker',
      'GitHub Actions',
      'DigitalOcean',
    ],
    githubUrl: 'https://github.com/fehhpaes',
    category: 'Full-Stack',
    status: 'Missão em Andamento',
  },
  {
    id: 'temperato',
    title: 'Temperato',
    subtitle: 'Dashboard Web & App (Em Dev)',
    description:
      'Plataforma culinária para gerenciamento e exploração de receitas. O foco atual do ecossistema é o dashboard web administrativo, enquanto o aplicativo mobile integrado encontra-se em fase de desenvolvimento ativo.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/fehhpaes',
    liveUrl: 'https://www.temperatoapp.com.br/',
    category: 'Web App',
    status: 'Missão Concluída',
  },
  {
    id: 'prjsolicitacoes',
    title: 'SolicitaApan',
    subtitle: 'Gestão Interna de Requisições',
    description:
      'Sistema corporativo interno para triagem, fluxo de aprovações e controle de requisições operacionais. Inclui disparo automatizado de notificações por e-mail e rastreamento em tempo real de chamados.',
    technologies: ['React', 'Node.js', 'Express', 'Nodemailer'],
    githubUrl: 'https://github.com/fehhpaes',
    category: 'Web App',
    status: 'Missão Concluída',
  },
  {
    id: 'cinechapeu',
    title: 'Cinechapéu',
    subtitle: 'Catálogo e Busca de Filmes',
    description:
      'Aplicação web interativa para exploração de catálogo de filmes, com integração a API externa para busca em tempo real de títulos, sinopses e avaliações.',
    technologies: ['React', 'Tailwind CSS', 'API REST'],
    githubUrl: 'https://github.com/fehhpaes',
    liveUrl: 'https://cinechapeu.vercel.app/',
    category: 'Web App',
    status: 'Missão Concluída',
  },
];
