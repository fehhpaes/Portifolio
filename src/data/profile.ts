export interface ProfileData {
  personal: {
    name: string;
    shortName: string;
    role: string;
    shortRole: string;
    location: string;
    languages: string;
    education: string;
    status: string;
    availability: string;
  };
  bio: {
    intro: string;
    experience: string;
    fullSynopsis: string;
    storyNarrative: string;
    techFocus: string;
    aiWorkflow: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsappLink: string;
    linkedin: string;
    linkedinDisplay: string;
    github: string;
    githubUsername: string;
    githubDisplay: string;
  };
}

export const profileData: ProfileData = {
  personal: {
    name: 'Felipe Paes da Silva',
    shortName: 'Felipe',
    role: 'Desenvolvedor Full Stack & Multiplataforma • Next.js, React, Node.js & TypeScript',
    shortRole: 'Desenvolvedor Multiplataforma',
    location: 'Sorocaba, SP',
    languages: 'Inglês',
    education: 'Uniso, Uninter, Fatec & Etec',
    status: 'Disponível para Contratação',
    availability: 'Contratação CLT, PJ, Projetos & Freelas',
  },
  bio: {
    intro:
      'Sou um desenvolvedor focado em entender o contexto e a regra de negócio antes de escrever qualquer linha de código. Minha base inicial em Ciências Humanas (História & Geografia) combinada com a graduação em Desenvolvimento de Software Multiplataforma (Fatec) me confere visão sistêmica, comunicação clara e precisão arquitetural.',
    experience:
      'Com experiência prévia na gestão de infraestrutura e laboratórios na Etec Armando Pannunzio, consolidei minha capacidade prática de resolução de problemas complexos e governança. Atualmente, foco integralmente na minha evolução no desenvolvimento de software e em novos desafios no mercado de tecnologia.',
    fullSynopsis:
      'Desenvolvedor focado no ecossistema JavaScript e TypeScript. A minha trajetória é um pouco diferente: formei-me em História e Geografia, o que me deu uma base analítica forte para entender os problemas de negócio a fundo. Atualmente, curso Desenvolvimento de Software Multiplataforma na Fatec, com experiência prévia na gestão de infraestrutura de TI da Etec Armando Pannunzio.',
    storyNarrative:
      "Sou o Felipe, um desenvolvedor que gosta de entender o 'porquê' antes de construir o 'como'. Minha jornada na tecnologia tem um background um pouco diferente: vim de uma base sólida em Ciências Humanas, com licenciaturas em História (Uniso) e Geografia (Uninter). Essa trajetória me deu uma capacidade investigativa forte para entender o contexto real e as regras de negócio antes de escrever qualquer linha de código.",
    techFocus:
      "No ecossistema de desenvolvimento, meu foco está em JavaScript e TypeScript, criando desde interfaces até APIs e automações. Utilizo inteligência artificial como uma ferramenta diária de 'pair-programming' para acelerar a codificação, o que me permite focar no que realmente importa: a arquitetura do software e a resolução do problema. Fora do código, mantenho o foco no aprimoramento do meu Inglês e, para descontrair, minha principal missão secundária é tirar novas músicas no violão e no cavaquinho.",
    aiWorkflow:
      'Utilizo Inteligência Artificial diariamente como ferramenta estratégica de pair programming — acelerando prototipagem, automação de testes, refatorações e documentação, sempre com rigor técnico e validação humana.',
  },
  contact: {
    email: 'ffesilva@hotmail.com',
    phone: '(15) 99707-4379',
    whatsappLink: 'https://wa.me/5515997074379',
    linkedin: 'https://www.linkedin.com/in/felipe-paes-da-silva-44b461318',
    linkedinDisplay: 'LinkedIn / in / felipe-paes-da-silva',
    github: 'https://github.com/fehhpaes',
    githubUsername: '@fehhpaes',
    githubDisplay: 'GitHub / fehhpaes',
  },
};

export interface SkillItem {
  name: string;
  level: 'Avançado' | 'Intermediário';
}

export interface SkillCategory {
  id: string;
  title: string;
  themeTitles: {
    modern: string;
    snes: string;
    desktop: string;
    console: string;
    atlas: string;
  };
  themeCodes: {
    snes: string;
    desktop: string;
    console: string;
    atlas: string;
  };
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Architecture & Mobile',
    themeTitles: {
      modern: 'Frontend Architecture',
      snes: 'Frontend & Mobile Magic',
      desktop: 'Frontend & Mobile Applets',
      console: 'Client Tier • Frontend & Mobile',
      atlas: 'Desenvolvimento Frontend & Mobile',
    },
    themeCodes: {
      snes: 'TREE.01 // CLIENT_TIER',
      desktop: 'MOD.01',
      console: 'MATERIA 01',
      atlas: 'TOMO I',
    },
    description: 'Interfaces interativas, navegação fluida, acessibilidade e controle ágil de componentes.',
    skills: [
      { name: 'React', level: 'Avançado' },
      { name: 'Next.js', level: 'Avançado' },
      { name: 'TypeScript', level: 'Avançado' },
      { name: 'Tailwind CSS', level: 'Avançado' },
      { name: 'React Native & Expo', level: 'Intermediário' },
      { name: 'HTML5 & CSS3', level: 'Avançado' },
      { name: 'NativeWind', level: 'Intermediário' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    themeTitles: {
      modern: 'Backend & APIs',
      snes: 'Backend & Core Engines',
      desktop: 'Serviços de Rede & Backend',
      console: 'Server Tier • Backend & APIs',
      atlas: 'Engenharia Backend & APIs',
    },
    themeCodes: {
      snes: 'TREE.02 // SERVER_TIER',
      desktop: 'MOD.02',
      console: 'MATERIA 02',
      atlas: 'TOMO II',
    },
    description: 'Microsserviços, lógica de negócios resiliente, endpoints estruturados e autenticação.',
    skills: [
      { name: 'Node.js', level: 'Avançado' },
      { name: 'Express', level: 'Avançado' },
      { name: 'RESTful APIs', level: 'Avançado' },
      { name: 'Autenticação JWT', level: 'Avançado' },
      { name: 'Webhooks & Automações', level: 'Avançado' },
      { name: 'Playwright & Scraping', level: 'Avançado' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Infrastructure',
    themeTitles: {
      modern: 'DevOps & Cloud',
      snes: 'DevOps & Cloud Runes',
      desktop: 'Infraestrutura & DevOps',
      console: 'Cloud Runes • DevOps & Infra',
      atlas: 'DevOps & Infraestrutura em Nuvem',
    },
    themeCodes: {
      snes: 'TREE.03 // CLOUD_TERRAIN',
      desktop: 'MOD.03',
      console: 'MATERIA 03',
      atlas: 'TOMO III',
    },
    description: 'Conteinerização, esteiras automatizadas de entrega, versionamento e servidores Linux.',
    skills: [
      { name: 'Docker & Containers', level: 'Intermediário' },
      { name: 'Linux (Ubuntu Server)', level: 'Intermediário' },
      { name: 'CI/CD & GitHub Actions', level: 'Intermediário' },
      { name: 'DigitalOcean Droplets', level: 'Intermediário' },
      { name: 'Git & Versionamento', level: 'Avançado' },
      { name: 'Electron (Desktop Apps)', level: 'Intermediário' },
    ],
  },
  {
    id: 'database',
    title: 'Database & Persistência',
    themeTitles: {
      modern: 'Database & Cloud',
      snes: 'Database & Grimoires',
      desktop: 'Gerenciador de Bancos de Dados',
      console: 'Data Archives • Bancos de Dados',
      atlas: 'Persistência & Bancos de Dados',
    },
    themeCodes: {
      snes: 'TREE.04 // ARCHIVE_DATA',
      desktop: 'MOD.04',
      console: 'MATERIA 04',
      atlas: 'TOMO IV',
    },
    description: 'Modelagem persistente NoSQL e relacional, integridade de dados e consultas estruturadas.',
    skills: [
      { name: 'Microsoft SQL Server', level: 'Intermediário' },
      { name: 'MongoDB & Mongoose', level: 'Avançado' },
      { name: 'Modelagem de Dados (SQL & NoSQL)', level: 'Avançado' },
      { name: 'AsyncStorage & Local Data', level: 'Avançado' },
    ],
  },
  {
    id: 'workflow',
    title: 'Workflow & Tools',
    themeTitles: {
      modern: 'Workflow & Tools',
      snes: 'Workflow & Ferramentas Ágeis',
      desktop: 'Utilitários & Governança',
      console: 'System Utilities & Workflow',
      atlas: 'Metodologia & Governança',
    },
    themeCodes: {
      snes: 'TREE.05 // TOOLS_TIER',
      desktop: 'MOD.05',
      console: 'MATERIA 05',
      atlas: 'TOMO V',
    },
    description: 'Práticas ágeis de engenharia, aceleração com IA e governança de software.',
    skills: [
      { name: 'Git & GitHub', level: 'Avançado' },
      { name: 'Pair Programming c/ IA', level: 'Avançado' },
      { name: 'Scrum / Kanban', level: 'Avançado' },
      { name: 'Clean Code & Arquitetura', level: 'Avançado' },
    ],
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Full-Stack' | 'Mobile' | 'Web App';
  status: 'Missão Concluída' | 'Missão em Andamento';
}

export const projectsData: ProjectItem[] = [
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
    liveUrl: 'https://onglink.vercel.app/',
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
      'Sistema corporativo interno para triagem, fluxo de aprovações e controle de requisições operacionais. Inclui disparo automatizado de notificações e rastreamento em tempo real de chamados.',
    technologies: ['React', 'Node.js', 'Express', 'JWT'],
    githubUrl: 'https://github.com/fehhpaes',
    liveUrl: 'https://solicitaapan.vercel.app/',
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

