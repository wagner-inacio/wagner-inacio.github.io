export type Language = 'pt' | 'en';

export type Project = {
  name: string;
  description: string;
  impact: string;
  stack: string[];
  url: string;
};

export type Content = {
  nav: {
    about: string;
    impact: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    title: string;
    roles: string[];
    summary: string;
    location: string;
    primaryCta: string;
    secondaryCta: string;
    githubCta: string;
    scrollHint: string;
  };
  about: {
    title: string;
    eyebrow: string;
    paragraphs: string[];
    highlights: Array<{ label: string; value: string }>;
  };
  impact: {
    title: string;
    subtitle: string;
    items: Array<{ value: string; label: string }>;
  };
  skills: {
    title: string;
    subtitle: string;
    subtitleByGroup?: Record<string, string>;
    groups: Array<{ title: string; items: string[] }>;
  };
  experience: {
    title: string;
    subtitle: string;
    roles: Array<{
      company: string;
      role: string;
      period: string;
      bullets: string[];
    }>;
  };
  projects: {
    title: string;
    subtitle: string;
    repositoryLabel: string;
    items: Project[];
  };
  education: {
    title: string;
    subtitle?: string;
    items: Array<{ degree: string; institution: string; period: string; note?: string; highlight?: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
};

const links = {
  email: 'mailto:wagner.inacio.dev@gmail.com',
  github: 'https://github.com/wagnerinacio16',
  linkedin: 'https://www.linkedin.com/in/wagner-inacio-de-oliveira/',
};

export const profileLinks = links;

export const content: Record<Language, Content> = {
  pt: {
    nav: {
      about: 'Sobre',
      impact: 'Impacto',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      education: 'Formação',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'Engenharia de Dados • Analytics & ML • Arquitetura & DataOps',
      name: 'Wagner Oliveira',
      title: 'Engenheiro de Dados & Analytics',
      roles: ['Engenheiro de Dados & Analytics', 'Data Engineer', 'Analytics Engineer'],
      summary:
        'Construo pipelines, aplicações e produtos analíticos de dados que conectam engenharia, negócio e tomada de decisão.',
      location: 'São Paulo, Brasil',
      primaryCta: 'LinkedIn',
      secondaryCta: 'Email',
      githubCta: 'GitHub',
      scrollHint: 'Role para conhecer a trajetória',
    },
    about: {
      eyebrow: 'Sobre mim',
      title: 'Sobre mim.',
      paragraphs: [
        'Minha relação com tecnologia começou muito antes de eu entender exatamente o que ela era. Cresci em Espigão d’Oeste, Rondônia, em uma realidade muito ligada à zona rural, onde o contato com tecnologia era limitado, mas sempre marcante. Lembro do impacto que foi ver a energia elétrica, a televisão e, mais tarde, os computadores chegando perto da minha realidade. Antes mesmo de ter acesso a um computador de verdade, eu já tentava construir os meus com restos de materiais que sobravam das construções do meu pai. Na época, era imaginação e curiosidade; hoje, vejo que já existia ali uma vontade de entender como as coisas funcionavam, conectar peças e criar algo a partir do que eu tinha disponível.',
        'Com o tempo, essa curiosidade deixou de ser apenas fascínio e se tornou caminho. Foi por meio da tecnologia que eu consegui ampliar possibilidades, sair de um contexto distante dos grandes centros, estudar Engenharia de Software na Universidade Federal do Pampa e construir uma trajetória profissional na área. Talvez tenha sido aí que eu entendi, de forma muito concreta, o impacto que a tecnologia pode ter: não apenas como ferramenta técnica, mas como algo capaz de abrir caminhos, mudar realidades e levar pessoas, ideias e organizações a lugares que antes pareciam distantes.',
        'Hoje, atuo como Engenheiro de Dados & Analytics, combinando uma base em engenharia de software com experiência em ciência de dados, analytics, produtos de dados e soluções para áreas de negócio. Gosto especialmente da área de dados porque ela conecta tecnologia com contexto, decisão e impacto. Dados bem estruturados não servem apenas para alimentar sistemas; eles ajudam pessoas e organizações a enxergar melhor, agir com mais clareza e resolver problemas com mais inteligência.',
        'O que mais me move é a possibilidade de aprender continuamente, entender o que existe por trás dos sistemas e transformar conhecimento técnico em soluções úteis, escaláveis e confiáveis. Este portfólio é uma extensão dessa trajetória: um espaço para compartilhar projetos, estudos e experimentos que refletem minha evolução, minha curiosidade e minha forma de enxergar tecnologia como uma ponte entre realidade, oportunidade e transformação.',
      ],
      highlights: [
        {
          label: 'Curiosidade',
          value: 'Interesse genuíno por entender como as coisas funcionam e transformar aprendizado em construção.',
        },
        {
          label: 'Resiliência',
          value: 'Uma trajetória construída a partir de adaptação, movimento e busca contínua por evolução.',
        },
        {
          label: 'Propósito',
          value: 'Uso tecnologia como ferramenta para criar soluções úteis, confiáveis e conectadas a problemas reais.',
        },
      ],
    },
    impact: {
      title: 'Resultados e entregas.',
      subtitle:
        'Alguns exemplos de atuação prática em automação, sustentação de pipelines, produtos analíticos e soluções de dados em ambientes corporativos.',
      items: [
        {
          value: '12h → 40min',
          label: 'redução do tempo de processamento de uma rotina preditiva semanal por meio de automação em Databricks',
        },
        {
          value: 'Processos críticos',
          label: 'sustentação de pipelines e indicadores utilizados em rotinas executivas e ciclos de negócio',
        },
        {
          value: 'Produtos de dados',
          label: 'estruturação de bases analíticas, Data Marts, contratos de dados e camadas de consumo para áreas de negócio',
        },
        {
          value: 'Software + Dados',
          label: 'trajetória combinando engenharia de software, ciência de dados e engenharia de dados aplicada a problemas reais',
        },
      ],
    },
    skills: {
      title: 'Tech stack.',
      subtitle:
        'Principais tecnologias e ferramentas que utilizo para construir, operar e evoluir pipelines, plataformas e produtos de dados.',
      subtitleByGroup: {
        LINGUAGENS: 'Linguagens de uso diário em engenharia e análise',
        'PROCESSAMENTO DE DADOS': 'Pipelines, transformação e processamento distribuído',
        'ARQUITETURA DE DADOS': 'Modelagem e organização de plataformas analíticas',
        'AZURE & PLATAFORMAS': 'Serviços de dados e analytics em ecossistema Azure',
        'CLOUD AWS': 'Serviços para ingestão, processamento e operação em cloud',
        'DEVOPS & DATAOPS': 'Versionamento, automação, APIs e entrega contínua',
      },
      groups: [
        {
          title: 'LINGUAGENS',
          items: ['Python', 'SQL', 'PySpark', 'Java', 'C#'],
        },
        {
          title: 'PROCESSAMENTO DE DADOS',
          items: ['Apache Spark', 'Databricks', 'ETL/ELT', 'Pipelines batch e streaming', 'Apache Kafka', 'Delta Lake', 'DBT'],
        },
        {
          title: 'ARQUITETURA DE DADOS',
          items: ['Data Lake', 'Data Warehouse', 'Data Lakehouse', 'Data Marts', 'Data Mesh', 'Contratos de Dados'],
        },
        {
          title: 'AZURE & PLATAFORMAS',
          items: ['Azure Data Factory', 'Azure Synapse', 'Azure Data Lake Storage', 'Unity Catalog', 'Power BI'],
        },
        {
          title: 'CLOUD AWS',
          items: ['S3', 'Glue', 'Athena', 'Lambda', 'Step Functions', 'Kinesis', 'Lake Formation', 'RDS', 'EC2', 'EventBridge', 'SNS'],
        },
        {
          title: 'DEVOPS & DATAOPS',
          items: ['Git', 'GitHub', 'Azure DevOps', 'Docker', 'Docker Compose', 'CI/CD', 'APIs REST', 'Postman'],
        },
      ],
    },
    experience: {
      title: 'Experiência profissional.',
      subtitle: 'Da engenharia de software ao desenho e sustentação de plataformas analíticas modernas.',
      roles: [
        {
          company: 'Nestlé',
          role: 'Engenheiro de Dados & Analytics',
          period: 'Jan/2025 - Atual',
          bullets: [
            'Responsável técnico por esteiras de dados que sustentam produtos analíticos, indicadores executivos e modelos de machine learning.',
            'Construção e evolução de pipelines batch em Databricks e Azure, da ingestão à disponibilização em catálogos de dados.',
            'Arquitetura de Data Lake e Data Lakehouse com foco em governança, rastreabilidade, performance e qualidade.',
            'Implementação de data marts, contratos de dados, validações e releases alinhando engenharia, ciência de dados e negócio.',
          ],
        },
        {
          company: 'Nestlé',
          role: 'Cientista de Dados',
          period: 'Jan/2023 - Dez/2024',
          bullets: [
            'Automatização do processo preditivo semanal de vendas Sell Out em Databricks, reduzindo processamento de cerca de 12 horas para 40 minutos.',
            'Desenvolvimento de modelos preditivos, classificação de mix de produtos, análises estatísticas e testes de hipótese.',
            'Produtização e sustentação de modelos com práticas de MLOps, MLflow, versionamento de experimentos e monitoramento.',
          ],
        },
        {
          company: 'Lydians',
          role: 'Engenheiro de Software',
          period: 'Fev/2022 - Dez/2022',
          bullets: [
            'Desenvolvimento de soluções para backoffice bancário, atuando em front-end, back-end, APIs e camada de dados.',
            'Manutenção e evolução de aplicações com C#, ASP.NET, .NET, JavaScript, SQL Server e Entity Framework.',
            'Modernização de produtos financeiros, refatoração, correção de bugs, testes de APIs e code reviews.',
          ],
        },
      ],
    },
    projects: {
      title: 'Projetos selecionados.',
      subtitle:
        'Projetos públicos escolhidos para demonstrar arquitetura, processamento distribuído, modelagem analítica e integração com serviços cloud.',
      repositoryLabel: 'Abrir repositório',
      items: [
        {
          name: 's3-spark-rds-etl-pipeline',
          description:
            'Pipeline de estudo que integra Amazon S3, Apache Spark e AWS RDS PostgreSQL, consumindo arquivos Parquet de uma camada Bronze e persistindo dados via Spark JDBC.',
          impact: 'Mostra domínio de integração cloud, Spark local, variáveis de ambiente e persistência relacional.',
          stack: ['AWS S3', 'RDS', 'PySpark', 'Spark JDBC', 'boto3', 'Parquet'],
          url: 'https://github.com/wagnerinacio16/s3-spark-rds-etl-pipeline',
        },
        {
          name: 'pipeline-indicadores-economicos',
          description:
            'Pipeline em arquitetura medalhão para ingestão, transformação, padronização e validação de indicadores públicos do BACEN e IBGE.',
          impact: 'Evidencia organização Bronze/Silver/Gold, validação com Pandera e geração de catálogo em YAML.',
          stack: ['Python', 'Pandas', 'Pandera', 'Requests', 'YAML', 'Loguru'],
          url: 'https://github.com/wagnerinacio16/pipeline-indicadores-economicos',
        },
        {
          name: 'dbt-spotify-analytics',
          description:
            'Data warehouse analítico para dados da Spotify API, com foco em transformação, organização de modelos e aprendizado aplicado de dbt.',
          impact: 'Conecta engenharia analítica, modelagem de dados e consumo orientado a análise.',
          stack: ['Python', 'dbt', 'Analytics Engineering', 'Spotify API', 'Data Warehouse'],
          url: 'https://github.com/wagnerinacio16/dbt-spotify-analytics',
        },
        {
          name: 'weather-data-glue-transformations',
          description:
            'Projeto dedicado à camada Silver de transformações de dados meteorológicos, enquanto ingestão e orquestração ficam em serviços AWS externos.',
          impact: 'Destaca separação de responsabilidades em pipeline cloud e foco em transformação governada.',
          stack: ['AWS Glue', 'Silver Layer', 'Python', 'ETL', 'Data Lake'],
          url: 'https://github.com/wagnerinacio16/weather-data-glue-transformations',
        },
        {
          name: 'apache-kafka',
          description:
            'Repositório de estudos sobre Apache Kafka, cobrindo fundamentos de mensageria, streaming e arquiteturas orientadas a eventos.',
          impact: 'Reforça familiaridade com streaming e desenho de pipelines orientados a eventos.',
          stack: ['Apache Kafka', 'Python', 'Streaming', 'Event-Driven Architecture'],
          url: 'https://github.com/wagnerinacio16/apache-kafka',
        },
      ],
    },
    education: {
      title: 'Formação.',
      subtitle: 'Base acadêmica e formações que sustentam minha trajetória em tecnologia, dados e negócio.',
      items: [
        {
          degree: 'MBA em Ciência de Dados & Analytics',
          institution: 'USP/ESALQ',
          period: 'Mai/2024 - Dez/2026',
        },
        {
          degree: 'Bacharelado em Engenharia de Software',
          institution: 'Universidade Federal do Pampa - UNIPAMPA',
          period: '2018 - 2022',
          note:
            'Reconhecimento como Estudante Destaque pela Sociedade Brasileira de Computação (SBC) durante a graduação em Engenharia de Software, concedido ao aluno com melhor desempenho acadêmico da turma e participação ativa em projetos acadêmicos, pesquisa e extensão.',
          highlight: 'Estudante Destaque SBC',
        },
        {
          degree: 'Curso Profissionalizante em Serviços de Vendas',
          institution: 'Senac RS',
          period: '2018 - 2020',
        },
      ],
    },
    contact: {
      title: 'Vamos conversar?',
      subtitle:
        'Aberto a oportunidades e conversas sobre Engenharia de Dados, Analytics Engineering, plataformas de dados e soluções que conectam tecnologia, dados e negócio.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
  },
  en: {
    nav: {
      about: 'About',
      impact: 'Impact',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Data Engineering • Analytics & ML • Data Architecture & DataOps',
      name: 'Wagner Oliveira',
      title: 'Data & Analytics Engineer',
      roles: ['Data & Analytics Engineer', 'Data Engineer', 'Analytics Engineer'],
      summary:
        'I build pipelines, applications and analytical data products that connect engineering, business and decision-making.',
      location: 'Sao Paulo, Brazil',
      primaryCta: 'LinkedIn',
      secondaryCta: 'Email',
      githubCta: 'GitHub',
      scrollHint: 'Scroll to explore the trajectory',
    },
    about: {
      eyebrow: 'About me',
      title: 'About me.',
      paragraphs: [
        'My relationship with technology started long before I fully understood what it was. I grew up in Espigão d’Oeste, Rondônia, in a reality closely connected to rural life, where access to technology was limited but always meaningful. I remember the impact of seeing electricity, television and later computers getting closer to my world. Even before I had access to a real computer, I tried to build my own using leftover materials from my father’s construction work. At the time it was imagination and curiosity; today I see that there was already a desire to understand how things worked, connect pieces and create something from what I had available.',
        'Over time, that curiosity became more than fascination; it became a path. Technology helped me expand possibilities, move from a context far from large technology centers, study Software Engineering at the Federal University of Pampa and build a professional career in the field. That was when I understood, in a very concrete way, the impact technology can have: not only as a technical tool, but as something capable of opening paths, changing realities and taking people, ideas and organizations to places that once felt distant.',
        'Today, I work as a Data & Analytics Engineer, combining a software engineering foundation with experience in data science, analytics, data products and business-oriented solutions. I am especially drawn to data because it connects technology with context, decision-making and impact. Well-structured data does more than feed systems; it helps people and organizations see more clearly, act with more confidence and solve problems with more intelligence.',
        'What drives me most is the possibility of continuously learning, understanding what exists behind systems and turning technical knowledge into useful, scalable and reliable solutions. This portfolio is an extension of that path: a space to share projects, studies and experiments that reflect my evolution, curiosity and way of seeing technology as a bridge between reality, opportunity and transformation.',
      ],
      highlights: [
        {
          label: 'Curiosity',
          value: 'A genuine interest in understanding how things work and turning learning into building.',
        },
        {
          label: 'Resilience',
          value: 'A journey shaped by adaptation, movement and continuous growth.',
        },
        {
          label: 'Purpose',
          value: 'Using technology as a tool to create useful, reliable solutions connected to real problems.',
        },
      ],
    },
    impact: {
      title: 'Results and deliveries.',
      subtitle:
        'Examples of practical work in automation, pipeline operation, analytics products and data solutions in enterprise environments.',
      items: [
        {
          value: '12h → 40min',
          label: 'reduction in weekly predictive processing time through automation in Databricks',
        },
        {
          value: 'Critical processes',
          label: 'operation of pipelines and indicators used in executive routines and business cycles',
        },
        {
          value: 'Data products',
          label: 'development of analytical datasets, Data Marts, data contracts and consumption layers for business areas',
        },
        {
          value: 'Software + Data',
          label: 'a background combining software engineering, data science and data engineering applied to real problems',
        },
      ],
    },
    skills: {
      title: 'Tech stack.',
      subtitle:
        'Core technologies and tools I use to build, operate and evolve data pipelines, platforms and products.',
      subtitleByGroup: {
        LANGUAGES: 'Daily languages for engineering and analysis',
        'DATA PROCESSING': 'Pipelines, transformation and distributed processing',
        'DATA ARCHITECTURE': 'Modeling and organization of analytical platforms',
        'AZURE & PLATFORMS': 'Data and analytics services in the Azure ecosystem',
        'CLOUD AWS': 'Services for ingestion, processing and cloud operations',
        'DEVOPS & DATAOPS': 'Versioning, automation, APIs and continuous delivery',
      },
      groups: [
        {
          title: 'LANGUAGES',
          items: ['Python', 'SQL', 'PySpark', 'Java', 'C#'],
        },
        {
          title: 'DATA PROCESSING',
          items: ['Apache Spark', 'Databricks', 'ETL/ELT', 'Batch and streaming pipelines', 'Apache Kafka', 'Delta Lake', 'DBT'],
        },
        {
          title: 'DATA ARCHITECTURE',
          items: ['Data Lake', 'Data Warehouse', 'Data Lakehouse', 'Data Marts', 'Data Mesh', 'Data Contracts'],
        },
        {
          title: 'AZURE & PLATFORMS',
          items: ['Azure Data Factory', 'Azure Synapse', 'Azure Data Lake Storage', 'Unity Catalog', 'Power BI'],
        },
        {
          title: 'CLOUD AWS',
          items: ['S3', 'Glue', 'Athena', 'Lambda', 'Step Functions', 'Kinesis', 'Lake Formation', 'RDS', 'EC2', 'EventBridge', 'SNS'],
        },
        {
          title: 'DEVOPS & DATAOPS',
          items: ['Git', 'GitHub', 'Azure DevOps', 'Docker', 'Docker Compose', 'CI/CD', 'REST APIs', 'Postman'],
        },
      ],
    },
    experience: {
      title: 'Professional experience.',
      subtitle: 'From software engineering to the design and operation of modern analytics platforms.',
      roles: [
        {
          company: 'Nestle',
          role: 'Data & Analytics Engineer',
          period: 'Jan/2025 - Present',
          bullets: [
            'Technical owner of data workflows supporting analytics products, executive indicators and machine learning models.',
            'Built and evolved batch pipelines in Databricks and Azure, from ingestion to data catalog delivery.',
            'Designed Data Lake and Data Lakehouse models focused on governance, traceability, performance and quality.',
            'Implemented data marts, data contracts, validations and releases across engineering, data science and business teams.',
          ],
        },
        {
          company: 'Nestle',
          role: 'Data Scientist',
          period: 'Jan/2023 - Dec/2024',
          bullets: [
            'Automated the weekly Sell Out sales predictive process in Databricks, reducing processing time from around 12 hours to 40 minutes.',
            'Developed predictive models, product mix classification, statistical analyses and hypothesis testing.',
            'Productionized and maintained models with MLOps practices, MLflow, experiment versioning and monitoring.',
          ],
        },
        {
          company: 'Lydians',
          role: 'Software Engineer',
          period: 'Feb/2022 - Dec/2022',
          bullets: [
            'Built solutions for banking backoffice products across front-end, back-end, APIs and data layers.',
            'Maintained and evolved applications with C#, ASP.NET, .NET, JavaScript, SQL Server and Entity Framework.',
            'Modernized financial products through refactoring, bug fixing, API testing and code reviews.',
          ],
        },
      ],
    },
    projects: {
      title: 'Selected projects.',
      subtitle:
        'Public projects selected to demonstrate architecture, distributed processing, analytical modeling and cloud service integration.',
      repositoryLabel: 'Open repository',
      items: [
        {
          name: 's3-spark-rds-etl-pipeline',
          description:
            'Study pipeline integrating Amazon S3, Apache Spark and AWS RDS PostgreSQL, consuming Parquet files from a Bronze layer and persisting data through Spark JDBC.',
          impact: 'Shows cloud integration, local Spark processing, environment configuration and relational persistence.',
          stack: ['AWS S3', 'RDS', 'PySpark', 'Spark JDBC', 'boto3', 'Parquet'],
          url: 'https://github.com/wagnerinacio16/s3-spark-rds-etl-pipeline',
        },
        {
          name: 'pipeline-indicadores-economicos',
          description:
            'Medallion architecture pipeline for ingestion, transformation, standardization and validation of public economic indicators from BACEN and IBGE.',
          impact: 'Highlights Bronze/Silver/Gold organization, Pandera validation and YAML data catalog generation.',
          stack: ['Python', 'Pandas', 'Pandera', 'Requests', 'YAML', 'Loguru'],
          url: 'https://github.com/wagnerinacio16/pipeline-indicadores-economicos',
        },
        {
          name: 'dbt-spotify-analytics',
          description:
            'Analytical data warehouse for Spotify API data, focused on transformations, model organization and applied dbt learning.',
          impact: 'Connects analytics engineering, data modeling and analysis-ready consumption.',
          stack: ['Python', 'dbt', 'Analytics Engineering', 'Spotify API', 'Data Warehouse'],
          url: 'https://github.com/wagnerinacio16/dbt-spotify-analytics',
        },
        {
          name: 'weather-data-glue-transformations',
          description:
            'Project focused on the Silver transformation layer for weather data while ingestion and orchestration live in external AWS services.',
          impact: 'Emphasizes clear pipeline responsibilities and governed transformation logic.',
          stack: ['AWS Glue', 'Silver Layer', 'Python', 'ETL', 'Data Lake'],
          url: 'https://github.com/wagnerinacio16/weather-data-glue-transformations',
        },
        {
          name: 'apache-kafka',
          description:
            'Study repository for Apache Kafka covering messaging fundamentals, streaming and event-driven architectures.',
          impact: 'Reinforces familiarity with streaming pipelines and event-driven design.',
          stack: ['Apache Kafka', 'Python', 'Streaming', 'Event-Driven Architecture'],
          url: 'https://github.com/wagnerinacio16/apache-kafka',
        },
      ],
    },
    education: {
      title: 'Education.',
      subtitle: 'Academic background and programs supporting my journey across technology, data and business.',

      items: [
        {
          degree: 'MBA in Data Science & Analytics',
          institution: 'USP/ESALQ',
          period: 'May/2024 - Dec/2026',
        },
        {
          degree: 'Bachelor in Software Engineering',
          institution: 'Federal University of Pampa - UNIPAMPA',
          period: '2018 - 2022',
          note:
            'Recognized as a Distinguished Student by the Brazilian Computer Society (SBC) during the Software Engineering degree, awarded to the student with the best academic performance in the class and active participation in academic projects, research and extension activities.',
          highlight: 'Distinguished Student SBC',
        },
        {
          degree: 'Professional Course in Sales Services',
          institution: 'Senac RS',
          period: '2018 - 2020',
        },
      ],
    },
    contact: {
      title: 'Let’s connect?',
      subtitle:
        'Open to opportunities and conversations about Data Engineering, Analytics Engineering, data platforms and solutions that connect technology, data and business.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
  },
};
