import { ICurriculumData } from '@/models/Curriculum';

export const defaultCurriculums: Record<string, ICurriculumData> = {
  desenvolvedor: {
    slug: 'desenvolvedor',
    title: 'Felipe Paes da Silva',
    headline: 'Desenvolvedor Full Stack & Multiplataforma • Next.js, React, Node.js & TypeScript',
    customSummary:
      'Profissional focado em desenvolvimento de software Full-Stack, com experiência na construção de aplicações web e mobile utilizando o ecossistema JavaScript e TypeScript. Possuo vivência prática na arquitetura de APIs RESTful, modelagem de bancos de dados, consumo de APIs externas e implementação de fluxos de autenticação. Busco criar soluções escaláveis, aliando boas práticas de código, versionamento (Git) e metodologias ágeis.',
    email: 'ffesilva@hotmail.com',
    phone: '(15) 99707-4379',
    location: 'Sorocaba, SP',
    portfolioUrl: 'https://felipepaes.vercel.app',
    linkedinUrl: 'https://www.linkedin.com/in/felipe-paes-da-silva-44b461318',
    githubUrl: 'https://github.com/fehhpaes',
    experiences: [
      {
        role: 'Auxiliar de Docente em Informática (CBO 3172-10)',
        company: 'Etec Armando Pannunzio (Centro Paula Souza)',
        period: '07/2024 – 06/2026',
        location: 'Sorocaba, SP',
        order: 1,
        description: [
          'Fornecia suporte técnico e pedagógico em laboratórios de informática, auxiliando alunos e docentes na resolução de problemas de hardware e software.',
          'Diagnosticava e reparava falhas em sistemas operacionais (Windows) e aplicativos, instalava softwares e configurava redes locais.',
          'Monitorava o desempenho dos sistemas e executava rotinas de backup, garantindo a disponibilidade e a segurança dos recursos de TI.',
        ],
        skillsUsed: ['Windows', 'Redes de Computadores', 'Manutenção de Hardware', 'Governança de TI', 'Suporte Técnico'],
      },
      {
        role: 'Promotor de Vendas',
        company: 'Pandurata Alimentos LTDA.',
        period: '09/2020 – 06/2024',
        location: 'Sorocaba, SP',
        order: 2,
        description: [
          'Organização e otimização de processos corporativos, garantindo conformidade de estoque em ambiente de alto fluxo.',
          'Atuação estratégica com foco em metas, comunicação intersetorial eficiente e resolução rápida de problemas operacionais.',
        ],
        skillsUsed: ['Gestão de Processos', 'Comunicação Corporativa', 'Trabalho em Equipe'],
      },
    ],
    projects: [
      {
        title: 'ONGLink',
        subtitle: 'Plataforma Full-Stack',
        description:
          'Sistema desenvolvido em trabalho colaborativo para conectar empresas a ONGs, focando em captação de recursos. Arquitetura de ponta a ponta com deploy em contêineres e integração contínua (CI/CD).',
        technologies: ['Next.js', 'TypeScript', 'Express', 'MongoDB', 'Docker', 'GitHub Actions'],
        order: 1,
      },
      {
        title: 'Temperato',
        subtitle: 'Mobile & Web App',
        description:
          'Aplicativo assistente de culinária multiplataforma. Arquitetura desacoplada integrando aplicativo nativo de alta fidelidade visual com uma API RESTful e autenticação baseada em JWT.',
        technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
        order: 2,
      },
      {
        title: 'SolicitaApan',
        subtitle: 'Web App',
        description:
          'Sistema institucional para centralizar e gerenciar chamados de manutenção e suprimentos. Interface e API estruturadas com serviço de notificações automatizadas via Nodemailer.',
        technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
        order: 3,
      },
      {
        title: 'Cinechapéu',
        subtitle: 'Plataforma Web',
        description:
          'Gerenciamento de clube de cinema com integração à API do TMDB. Interfaces interativas complexas com drag and drop e deploy contínuo em arquitetura Serverless.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'API REST', 'Vercel'],
        order: 4,
      },
    ],
    education: [
      {
        institution: 'Fatec Votorantim - Benedicto Pagliato',
        course: 'Graduação em Desenvolvimento de Software Multiplataforma',
        statusOrYear: 'Em andamento (07/2024 - 07/2027)',
      },
      {
        institution: 'UNINTER',
        course: 'Licenciatura em Geografia',
        statusOrYear: 'Concluído (02/2023 - 02/2024)',
      },
      {
        institution: 'Universidade de Sorocaba',
        course: 'Licenciatura em História',
        statusOrYear: 'Concluído (02/2015 - 12/2017)',
      },
      {
        institution: 'Etec Fernando Prestes',
        course: 'Técnico em Informática',
        statusOrYear: 'Concluído (07/2013 - 12/2014)',
      },
    ],
    certifications: [
      { name: 'Design Patterns Básico e Front-End Básico', institution: 'Centro Paula Souza', year: '2025' },
      { name: 'Desenvolvedor Front-End', institution: 'Fatec Votorantim', year: '2025' },
      { name: 'Masterclass de Agilidade (Kanban/Scrum)', institution: 'Centro Paula Souza', year: '2024' },
      { name: 'Inglês B1 Intermediário', institution: 'EF SET', year: '2024' },
    ],
    coreSkills: [
      'Next.js',
      'React',
      'React Native',
      'TypeScript',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'MongoDB',
      'SQL',
      'Docker',
      'Git & CI/CD',
      'RESTful APIs',
    ],
    languages: ['Português (Nativo)', 'Inglês (B1 Intermediário)'],
  },
  suporte: {
    slug: 'suporte',
    title: 'Felipe Paes da Silva',
    headline: 'Analista de Suporte de TI & Infraestrutura • Helpdesk, Redes, Hardware & Governança',
    customSummary:
      'Profissional com sólida vivência na gestão de laboratórios educacionais e infraestrutura de TI na Etec Armando Pannunzio. Perfil investigativo e didático que alia formação técnica em Informática e superior em Sistemas ao suporte a estações de trabalho, conectividade de rede, rotinas de backup e atendimento direto ao usuário. Capacidade comprovada de integrar soluções operacionais e manutenção de hardware com desenvolvimento de ferramentas internas de suporte.',
    email: 'ffesilva@hotmail.com',
    phone: '(15) 99707-4379',
    location: 'Sorocaba, SP',
    portfolioUrl: 'https://felipepaes.vercel.app',
    linkedinUrl: 'https://www.linkedin.com/in/felipe-paes-da-silva-44b461318',
    githubUrl: 'https://github.com/fehhpaes',
    experiences: [
      {
        role: 'Auxiliar de Docente em Informática (CBO 3172-10)',
        company: 'Etec Armando Pannunzio (Centro Paula Souza)',
        period: '07/2024 – 06/2026',
        location: 'Sorocaba, SP',
        order: 1,
        description: [
          'Fornecia suporte técnico presencial e remoto nos laboratórios de informática, atendendo demandas de docentes e alunos na resolução de problemas.',
          'Diagnosticava e reparava falhas em sistemas operacionais (Windows), instalava softwares corporativos e configurava redes locais.',
          'Monitorava o desempenho da infraestrutura e executava rotinas de backup para garantir a disponibilidade e segurança dos recursos.',
        ],
        skillsUsed: ['Suporte N1 & N2', 'Manutenção de Hardware', 'Windows', 'Redes de Computadores', 'Governança de TI'],
      },
      {
        role: 'Promotor de Vendas',
        company: 'Pandurata Alimentos LTDA.',
        period: '09/2020 – 06/2024',
        location: 'Sorocaba, SP',
        order: 2,
        description: [
          'Operação em ambiente comercial com rígido controle de processos e cumprimento de prazos operacionais e logísticos.',
          'Comunicação interpessoal contínua, atendimento a demandas corporativas e resolução rápida de conflitos diários.',
        ],
        skillsUsed: ['Rotinas Operacionais', 'Comunicação Interpessoal', 'Organização de Processos'],
      },
    ],
    projects: [
      {
        title: 'SolicitaApan',
        subtitle: 'Sistema de Chamados (Helpdesk Interno)',
        description:
          'Ferramenta corporativa para fluxo de triagem, rastreamento de ordens de serviço e chamados técnicos, com disparo automatizado de notificações.',
        technologies: ['React', 'Node.js', 'Express', 'Nodemailer'],
        order: 1,
      },
      {
        title: 'ONGLink',
        subtitle: 'Plataforma Full-Stack',
        description:
          'Sistema desenvolvido para conectar ONGs a empresas parceiras, focando em captação de recursos e escalabilidade na nuvem.',
        technologies: ['Next.js', 'Express', 'MongoDB', 'Docker'],
        order: 2,
      },
      {
        title: 'Temperato',
        subtitle: 'Mobile & Web App',
        description:
          'Plataforma de gerenciamento de receitas com arquitetura voltada para separação de responsabilidades e criação de API dedicada.',
        technologies: ['React Native', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        order: 3,
      },
      {
        title: 'Cinechapéu',
        subtitle: 'Web App',
        description:
          'Aplicação interativa para exploração de catálogo de filmes com integração a API REST externa para busca de títulos em tempo real.',
        technologies: ['React', 'Tailwind CSS', 'API REST'],
        order: 4,
      },
    ],
    education: [
      {
        institution: 'Fatec Votorantim - Benedicto Pagliato',
        course: 'Graduação em Desenvolvimento de Software Multiplataforma',
        statusOrYear: 'Em andamento (07/2024 - 07/2027)',
      },
      {
        institution: 'UNINTER',
        course: 'Licenciatura em Geografia',
        statusOrYear: 'Concluído (02/2023 - 02/2024)',
      },
      {
        institution: 'Universidade de Sorocaba',
        course: 'Licenciatura em História',
        statusOrYear: 'Concluído (02/2015 - 12/2017)',
      },
      {
        institution: 'Etec Fernando Prestes',
        course: 'Técnico em Informática',
        statusOrYear: 'Concluído (07/2013 - 12/2014)',
      },
    ],
    certifications: [
      { name: 'Design Patterns Básico e Front-End Básico', institution: 'Centro Paula Souza', year: '2025' },
      { name: 'Desenvolvedor Front-End', institution: 'Fatec Votorantim', year: '2025' },
      { name: 'Masterclass de Agilidade (Kanban/Scrum)', institution: 'Centro Paula Souza', year: '2024' },
      { name: 'Inglês B1 Intermediário', institution: 'EF SET', year: '2024' },
    ],
    coreSkills: [
      'Helpdesk N1 & N2',
      'Manutenção de Hardware',
      'Windows',
      'Redes de Computadores',
      'Rotinas de Backup',
      'Governança e Inventário de TI',
    ],
    languages: ['Português (Nativo)', 'Inglês (B1 Intermediário)'],
  },
  administrativo: {
    slug: 'administrativo',
    title: 'Felipe Paes da Silva',
    headline: 'Assistente Administrativo & Operacional • Processos, Governança & Organização',
    customSummary:
      'Profissional com forte foco em organização, controle de fluxos e cumprimento rigoroso de processos, consolidado em quase quatro anos de atuação corporativa na Pandurata Alimentos. A dupla formação em Ciências Humanas (História e Geografia) e o background técnico garantem ampla facilidade na estruturação de relatórios, gestão de inventários e comunicação interpessoal qualificada para ambientes que demandam disciplina e clareza.',
    email: 'ffesilva@hotmail.com',
    phone: '(15) 99707-4379',
    location: 'Sorocaba, SP',
    portfolioUrl: 'https://felipepaes.vercel.app',
    linkedinUrl: 'https://www.linkedin.com/in/felipe-paes-da-silva-44b461318',
    githubUrl: 'https://github.com/fehhpaes',
    experiences: [
      {
        role: 'Auxiliar de Docente em Informática (CBO 3172-10)',
        company: 'Etec Armando Pannunzio (Centro Paula Souza)',
        period: '07/2024 – 06/2026',
        location: 'Sorocaba, SP',
        order: 1,
        description: [
          'Atendimento direto ao público (corpo docente e discente), com forte foco na triagem e resolução de solicitações operacionais.',
          'Organização de inventário e gestão de recursos e ativos físicos dos laboratórios da instituição.',
        ],
        skillsUsed: ['Atendimento ao Público', 'Organização de Inventário', 'Comunicação Interpessoal', 'Governança'],
      },
      {
        role: 'Promotor de Vendas',
        company: 'Pandurata Alimentos LTDA.',
        period: '09/2020 – 06/2024',
        location: 'Sorocaba, SP',
        order: 2,
        description: [
          'Organização e otimização do layout e fluxo de produtos, assegurando a visibilidade e atratividade em operação de grande porte.',
          'Desenvolvimento de relacionamento sólido com gestores dos pontos de venda para garantir alinhamento de processos e conformidade.',
          'Comunicação intersetorial, atendimento a demandas e foco constante no cumprimento de metas corporativas.',
        ],
        skillsUsed: ['Atenção aos Detalhes', 'Organização de Processos', 'Conformidade de Procedimentos', 'Trabalho em Equipe'],
      },
    ],
    projects: [
      {
        title: 'SolicitaApan',
        subtitle: 'Sistema de Chamados (Helpdesk Interno)',
        description:
          'Ferramenta corporativa para fluxo de triagem, rastreamento de ordens de serviço e chamados técnicos, com disparo automatizado de notificações.',
        technologies: ['React', 'Node.js', 'Express', 'Nodemailer'],
        order: 1,
      },
      {
        title: 'ONGLink',
        subtitle: 'Plataforma Full-Stack',
        description:
          'Sistema desenvolvido para conectar ONGs a empresas parceiras, focando em captação de recursos e escalabilidade na nuvem.',
        technologies: ['Next.js', 'Express', 'MongoDB', 'Docker'],
        order: 2,
      },
      {
        title: 'Temperato',
        subtitle: 'Mobile & Web App',
        description:
          'Plataforma de gerenciamento de receitas com arquitetura voltada para separação de responsabilidades e criação de API dedicada.',
        technologies: ['React Native', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        order: 3,
      },
      {
        title: 'Cinechapéu',
        subtitle: 'Web App',
        description:
          'Aplicação interativa para exploração de catálogo de filmes com integração a API REST externa para busca de títulos em tempo real.',
        technologies: ['React', 'Tailwind CSS', 'API REST'],
        order: 4,
      },
    ],
    education: [
      {
        institution: 'Fatec Votorantim - Benedicto Pagliato',
        course: 'Graduação em Desenvolvimento de Software Multiplataforma',
        statusOrYear: 'Em andamento (07/2024 - 07/2027)',
      },
      {
        institution: 'UNINTER',
        course: 'Licenciatura em Geografia',
        statusOrYear: 'Concluído (02/2023 - 02/2024)',
      },
      {
        institution: 'Universidade de Sorocaba',
        course: 'Licenciatura em História',
        statusOrYear: 'Concluído (02/2015 - 12/2017)',
      },
      {
        institution: 'Etec Fernando Prestes',
        course: 'Técnico em Informática',
        statusOrYear: 'Concluído (07/2013 - 12/2014)',
      },
    ],
    certifications: [
      { name: 'Design Patterns Básico e Front-End Básico', institution: 'Centro Paula Souza', year: '2025' },
      { name: 'Desenvolvedor Front-End', institution: 'Fatec Votorantim', year: '2025' },
      { name: 'Masterclass de Agilidade (Kanban/Scrum)', institution: 'Centro Paula Souza', year: '2024' },
      { name: 'Inglês B1 Intermediário', institution: 'EF SET', year: '2024' },
    ],
    coreSkills: [
      'Comunicação Escrita e Verbal',
      'Rotinas Administrativas e Operacionais',
      'Organização e Controle de Documentos',
      'Governança',
      'Capacidade Analítica e Resolução de Problemas',
    ],
    languages: ['Português (Nativo)', 'Inglês (B1 Intermediário)'],
  },
};
