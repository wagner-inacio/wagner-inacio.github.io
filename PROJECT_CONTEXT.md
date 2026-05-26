# PROJECT CONTEXT - Portfólio Wagner Oliveira

## Visão Geral

Portfólio pessoal estático de Wagner Oliveira, focado em posicionamento profissional como Engenheiro de Dados & Analytics. O projeto é uma single page application em React + Vite + TypeScript, com conteúdo bilíngue PT/EN, deploy pensado para GitHub Pages e estética dark/tech inspirada em portfólios técnicos.

O objetivo do site é apresentar trajetória, posicionamento, stack técnica, experiências, projetos públicos, formação acadêmica e canais de contato de forma profissional, objetiva e responsiva.

## Estrutura Geral

- Aplicação React renderizada em `src/App.tsx`.
- Conteúdo estruturado em `src/content.ts`, com objetos `pt` e `en`.
- Estilos globais em `src/styles.css`.
- Navegação por seções implementada em `src/useSectionNavigation.ts`.
- Configuração Vite/TypeScript em `vite.config.ts`, `tsconfig*.json`.
- Workflow de GitHub Pages em `.github/workflows/deploy.yml`.

## Seções Existentes

Ordem principal das seções navegáveis:

1. `hero`
2. `about`
3. `impact`
4. `skills`
5. `experience`
6. `projects`
7. `education`
8. `contact`

A navegação superior exibe: Sobre, Impacto, Habilidades, Experiência, Projetos, Formação e Contato. O item Home não aparece no menu, mas a marca `<WO/>` aponta para o topo.

## Arquivos Principais

- `src/App.tsx`
  - Renderiza toda a página.
  - Controla idioma PT/EN.
  - Renderiza hero, seções, timeline, cards, contatos e rodapé.
  - Usa `TypingRole`, `CircuitBackground` e `useSectionNavigation`.

- `src/content.ts`
  - Fonte única de conteúdo textual do portfólio.
  - Mantém tipos `Language`, `Project` e `Content`.
  - Contém links públicos: email, GitHub e LinkedIn.
  - Qualquer ajuste textual deve ser feito preferencialmente aqui.

- `src/styles.css`
  - Define tokens visuais, layout, responsividade, hero, cards, timeline, stack, contato e rodapé.
  - Usa IBM Plex Serif como fonte principal e IBM Plex Mono em elementos técnicos.

- `src/useSectionNavigation.ts`
  - Hook de navegação por seções via wheel e teclado.
  - Suporta ArrowDown/PageDown, ArrowUp/PageUp, Home e End.
  - Usa `scrollIntoView({ behavior: "smooth", block: "start" })`.
  - Possui trava de navegação para evitar múltiplos pulos.
  - Preserva scroll natural em mobile/touch e não bloqueia elementos interativos ou containers com scroll interno.

## Decisões de UX/UI

- Site single-page com âncoras por seção.
- Hero ocupa a primeira dobra, com background autoral de circuito/neural à direita.
- Não usar foto pessoal.
- Nome visual na home: `Wagner Oliveira`.
- Sobrenome com gradiente azul/ciano.
- Cargo com efeito typing alternando papéis.
- Header fixo, full-width, transparente no topo e com blur ao rolar.
- Seções usam kicker técnico com prefixo `//`, sem ícones nos cabeçalhos.
- Cards usam estilo dark/glass, bordas sutis e hover com elevação.
- Experiência profissional e Formação usam timeline vertical:
  - período à esquerda
  - card à direita
  - detalhes expandidos no hover/foco
  - detalhes visíveis no mobile
- Formação possui indicador fixo `Estudante Destaque SBC` no Bacharelado, com ícone `Award`.
- Contato é um card compacto com botões para Email, LinkedIn e GitHub.
- Rodapé exibe `<WO/>` e texto de copyright simplificado: `© 2026 Wagner Inácio de Oliveira`.

## Conteúdo Principal Atual

### Hero

PT:
- Eyebrow: `Engenharia de Dados • Analytics & ML • Arquitetura & DataOps`
- Nome: `Wagner Oliveira`
- Título: `Engenheiro de Dados & Analytics`
- Summary: `Construo pipelines, aplicações e produtos analíticos de dados que conectam engenharia, negócio e tomada de decisão.`

EN:
- Eyebrow: `Data Engineering • Analytics & ML • Data Architecture & DataOps`
- Nome: `Wagner Oliveira`
- Título: `Data & Analytics Engineer`
- Summary: `I build pipelines, applications and analytical data products that connect engineering, business and decision-making.`

### Sobre Mim

Seção narrativa longa em quatro parágrafos, contando:
- origem em Espigão d’Oeste, Rondônia
- contato inicial com tecnologia em contexto rural
- curiosidade de infância e construção imaginativa de computadores
- tecnologia como caminho de mobilidade e transformação
- formação em Engenharia de Software
- atuação atual em Engenharia de Dados & Analytics
- visão de dados como conexão entre tecnologia, contexto, decisão e impacto

Highlights atuais:
- Curiosidade
- Resiliência
- Propósito

### Impacto

PT:
- Título: `Resultados e entregas.`
- Foco: automação, sustentação de pipelines, produtos analíticos e soluções de dados em ambientes corporativos.
- Itens:
  - `12h → 40min`
  - `Processos críticos`
  - `Produtos de dados`
  - `Software + Dados`

EN equivalente:
- `Results and deliveries.`
- `12h → 40min`
- `Critical processes`
- `Data products`
- `Software + Data`

### Tech Stack

Grupos principais:
- Linguagens / Languages
- Processamento de Dados / Data Processing
- Arquitetura de Dados / Data Architecture
- Azure & Plataformas / Azure & Platforms
- Cloud AWS
- DevOps & DataOps

Ferramentas incluem Python, SQL, PySpark, Java, C#, Apache Spark, Databricks, ETL/ELT, Kafka, Delta Lake, DBT, Data Lake, Data Warehouse, Data Lakehouse, Data Marts, Data Mesh, Contratos de Dados, Azure Data Factory, Azure Synapse, ADLS, Unity Catalog, Power BI, S3, Glue, Athena, Lambda, Step Functions, Kinesis, Lake Formation, RDS, EC2, EventBridge, SNS, Git, GitHub, Azure DevOps, Docker, Docker Compose, CI/CD, APIs REST e Postman.

### Experiência

Timeline com:
- Nestlé - Engenheiro de Dados & Analytics - Jan/2025 - Atual
- Nestlé - Cientista de Dados - Jan/2023 - Dez/2024
- Lydians - Engenheiro de Software - Fev/2022 - Dez/2022

### Projetos

Projetos curados do GitHub:
- `s3-spark-rds-etl-pipeline`
- `pipeline-indicadores-economicos`
- `dbt-spotify-analytics`
- `weather-data-glue-transformations`
- `apache-kafka`

### Formação

Timeline com:
- MBA em Ciência de Dados & Analytics - USP/ESALQ - Mai/2024 - Dez/2026
- Bacharelado em Engenharia de Software - Universidade Federal do Pampa - UNIPAMPA - 2018 - 2022
  - Note: `Reconhecimento como Estudante Destaque pela Sociedade Brasileira de Computação (SBC) durante a graduação em Engenharia de Software, concedido ao aluno com melhor desempenho acadêmico da turma e participação ativa em projetos acadêmicos, pesquisa e extensão.`
  - Indicador visível: `Estudante Destaque SBC`
- Curso Profissionalizante em Serviços de Vendas - Senac RS - 2018 - 2020

### Contato

Texto atual:
- PT: `Vamos conversar?`
- EN: `Let’s connect?`

Links:
- Email: `mailto:wagner.inacio.dev@gmail.com`
- GitHub: `https://github.com/wagnerinacio16`
- LinkedIn: `https://www.linkedin.com/in/wagner-inacio-de-oliveira/`

## Padrões Visuais

- Fonte principal: IBM Plex Serif.
- Fonte técnica: IBM Plex Mono.
- Tema: fundo preto/azul profundo.
- Acentos: azul elétrico, ciano e azul claro.
- Cards: glass/dark, borda azul sutil, hover com elevação.
- Hero: background técnico de circuitos/sinapses à direita, sem imagem pessoal.
- Seções: largura máxima base de 1180px.
- Kicker de seção com `//`.
- Chips de stack em estilo retangular arredondado escuro.
- Botões com ícones lucide-react.
- Responsividade com grids quebrando para 2 colunas/tablet e 1 coluna/mobile.

## Navegação por Seções

Implementada por `useSectionNavigation`:
- Wheel para baixo: próxima seção.
- Wheel para cima: seção anterior.
- ArrowDown/PageDown: próxima seção.
- ArrowUp/PageUp: seção anterior.
- Home: primeira seção.
- End: última seção.
- Trava de 850ms para evitar pulos múltiplos.
- Não captura agressivamente eventos touch/mobile.
- Não bloqueia links, botões, inputs ou elementos com scroll interno.

## Próximos Ajustes Pendentes

- Revisar visualmente a navegação por seções no navegador em desktop e mobile.
- Avaliar se todas as seções têm altura confortável para navegação por scroll de uma seção por vez.
- Verificar se o texto longo do Sobre fica equilibrado em telas menores.
- Revisar a section `education` após o indicador `Estudante Destaque SBC` para garantir que o hover/foco está intuitivo.
- Considerar, futuramente, indicador de seção ativa no menu, se fizer sentido.
- Antes de novas alterações, consultar este arquivo para preservar decisões já tomadas.
