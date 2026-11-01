export const EMAIL = "nkalampulan@outlook.com";
export const CALENDAR_URL = "https://cal.com/nkalampulan";
export const GITHUB_URL = "https://github.com/nisamdev";
export const LINKEDIN_URL = "https://linkedin.com/in/nisamudheen-kalampulan";

export const services = [
  {
    title: "APIs and integrations",
    description:
      "Versioned REST and GraphQL APIs with OpenAPI documentation, queue-based webhooks and partner integrations. I migrate legacy APIs without breaking the clients that depend on them.",
    tools: "Node.js, NestJS, Express, Laravel, Rails, GraphQL",
  },
  {
    title: "Identity and access",
    description:
      "OAuth2, OpenID Connect, SAML, JWT and MFA, with scopes, policies and tenant isolation designed in from the start.",
    tools: "OAuth2, OIDC, SAML, JWT, MFA",
  },
  {
    title: "Front ends",
    description: "Customer-facing applications and internal tools, with TypeScript throughout.",
    tools: "Angular, Vue 3, React, Next.js",
  },
  {
    title: "Delivery and operations",
    description:
      "CI/CD on GitHub Actions and OpenShift, containers on Docker and Kubernetes, monitoring and automatic rollback.",
    tools: "GitHub Actions, OpenShift, Docker, Kubernetes, AWS",
  },
  {
    title: "Quality",
    description: "Unit tests in the release path, peer reviews, pairing, and small reversible changes.",
    tools: "PHPUnit, RSpec, code review",
  },
  {
    title: "Technical direction",
    description:
      "I set the architecture, review the code, and guide other developers, in teams from four to fifteen engineers.",
    tools: "Design, review, mentoring",
  },
];

export const identityPoints = [
  {
    title: "OAuth2 with scopes.",
    description:
      "I migrated a legacy API to OAuth2 scopes without breaking existing clients, then designed the next version around the same model for partner platforms.",
  },
  {
    title: "OpenID Connect SSO.",
    description: "Implemented single sign-on for a multi-tenant SaaS platform.",
  },
  {
    title: "Secure REST APIs.",
    description: "Built an OAuth2 API with rate-limit handling and API key rotation for long-running integration tasks.",
  },
  {
    title: "Regulated and EU data.",
    description:
      "Worked on a patient data portal where no data left the client's network, and extensively on GDPR compliance for a Danish client.",
  },
];

export const deliverySteps = [
  "Peer review",
  "Unit tests",
  "Tagged build",
  "Deploy",
  "Status check",
  "Auto rollback if it fails",
  "Monitoring",
];

export const aiTopics = [
  {
    title: "Retrieval and RAG",
    description:
      "Grounding answers in a customer's own documents with pgvector and PostgreSQL, when the product needs a knowledge-base answer.",
  },
  {
    title: "Document extraction",
    description: "OCR plus LLMs to turn PDFs and slide decks into structured data.",
  },
  {
    title: "Content generation",
    description:
      "Courses created from uploaded manuals or prompts, with instructions that keep output to the supplied material.",
  },
  {
    title: "Reports and forecasting",
    description: "Generated reports that use only the requesting tenant's data.",
  },
  {
    title: "Prompts and instructions",
    description: "System prompts and repository instructions that I tune when output is weak.",
  },
  {
    title: "Guardrails and cost",
    description: "Hallucination controls, per-tenant quotas, tenant isolation and logging.",
  },
  {
    title: "Several providers",
    description: "OpenAI, Anthropic Claude, Google Gemini, Groq and local models behind one application layer.",
  },
  {
    title: "Assisted onboarding",
    description: "Importing records from other systems, spreadsheets and scans into a new platform.",
  },
  {
    title: "Agentic coding",
    description:
      "Claude Code and Cursor every day for planning, scaffolding, refactoring and debugging. I read, test and verify every change before it ships.",
  },
];

export const workFilters = [
  { id: "all", label: "All" },
  { id: "api", label: "APIs" },
  { id: "identity", label: "Identity" },
  { id: "node", label: "Node.js" },
  { id: "front", label: "Front end" },
  { id: "rails", label: "Rails" },
  { id: "devops", label: "DevOps" },
  { id: "ai", label: "AI" },
];

export const projects = [
  {
    title: "Integrator API for an e-training platform",
    when: "Jan 2023 to Oct 2026",
    description: "Technical lead for the API used by partner systems and the product's own front ends.",
    areas: ["api", "identity", "devops"],
    tags: "Laravel, OAuth2, OpenID Connect, OpenAPI, PostgreSQL, Redis, GitHub Actions",
    highlights: [
      "Migrated the legacy v4 API with OAuth2 scopes while existing clients kept working.",
      "Designed v5 with OpenAPI documentation, consistent response formats and queue-based webhooks.",
      "Cut average API response time by about 75% through query optimization and Redis-backed queues.",
      "Built the CI/CD pipeline with unit tests, tagged Docker images, deployment and automatic rollback.",
      "Designed the server infrastructure and built a Grafana and Loki dashboard plus a Vue 3 auditing tool with Slack alerts.",
      "Integrated partner platforms such as AirMaestro and FL3XX, working directly with their developers.",
    ],
  },
  {
    title: "AI features for the same platform",
    when: "Production",
    description: "LLM features with cost, privacy and quality controls.",
    areas: ["ai", "api"],
    tags: "LLM APIs, prompt design, guardrails, quotas, multi-tenant",
    highlights: [
      "Course creation from manuals or prompts, with instructions that keep the model to the supplied material.",
      "Forecast reports from the requesting tenant's data only.",
      "A defined AI quota per tenant, and tenant-isolated data.",
      "Several providers: OpenAI, Anthropic Claude, Google Gemini, Groq and local models.",
    ],
  },
  {
    title: "GraphQL backend-for-frontend",
    when: "TELUS, Aug to Dec 2022",
    description: "Node.js services giving a React front end one API across several microservices.",
    areas: ["node", "front", "devops"],
    tags: "Node.js, Express, TypeScript, GraphQL, Kong, React, Redux, OpenShift",
    highlights: [
      "Built the BFF layer behind a Kong API gateway.",
      "Built React and Redux components from Figma designs for the Koodo and public activation portal.",
      "Delivered on OpenShift, with code reviews, pair programming and on-call during deployments.",
    ],
  },
  {
    title: "Rails application with a Vue 3 front end",
    when: "2022 to Present, confidential",
    description: "Contract work on a live application.",
    areas: ["rails", "front", "devops"],
    tags: "Ruby on Rails, Sidekiq, RSpec, Vue 3, Vuex, Docker",
    highlights: [
      "Led two large Rails version migrations on a production application.",
      "Sidekiq background jobs, RSpec tests, and Docker with CI/CD pipelines for deployment.",
      "Vue 3 front end using the Composition API with Vuex.",
    ],
  },
  {
    title: "Redis operator for Cloud Pak for Data",
    when: "IBM, Feb to Aug 2022",
    description: "A Kubernetes operator that runs Redis inside IBM's data platform.",
    areas: ["devops"],
    tags: "Go, Kubernetes, OpenShift, Redis",
    highlights: [
      "Designed and implemented the operator in Go.",
      "Delivered on OpenShift through a CI/CD-driven process.",
    ],
  },
  {
    title: "Patient data portal",
    when: "ValueLabs, Jan 2021 to Feb 2022",
    description: "Modules for a genetic testing client, with regulated healthcare data.",
    areas: ["api", "identity"],
    tags: "Symfony, React, Elasticsearch, PHPUnit",
    highlights: [
      "Led new modules on a Symfony and React stack.",
      "Development ran on the client's network, and no patient data moved to local machines.",
      "Improved dashboard performance by about 50% with Elasticsearch.",
    ],
  },
  {
    title: "Integration services and APIs",
    when: "Phases Innovations, 2016 to 2021",
    description: "Technical lead for a team of 10 to 15 developers.",
    areas: ["api", "identity", "devops"],
    tags: "OAuth2, Laravel, Python, Flask, MySQL, PHPUnit",
    highlights: [
      "Planning, estimation, code reviews, mentoring and delivery.",
      "Built a secure OAuth2 REST API and Python Flask services for Podio integrations, with rate-limit handling and API key rotation.",
      "Cut post-release defects by about 20% with unit testing and deployment time by about 25%.",
      "Worked extensively on GDPR compliance for a Danish client in the EU.",
    ],
  },
  {
    title: "Vector LMS",
    when: "Personal project",
    description: "A multi-tenant training platform.",
    areas: ["front"],
    tags: "Vue 3, Pinia, TypeScript, Laravel, PostgreSQL",
    highlights: ["Vue 3 with the Composition API and Pinia on a Laravel and PostgreSQL back end."],
  },
  {
    title: "Document extraction product",
    when: "Personal, confidential",
    description: "A SaaS product that pulls structured data out of documents.",
    areas: ["ai"],
    tags: "Python, OCR, LLMs",
    highlights: ["Extracts data from PDF and PowerPoint files using OCR and LLMs."],
  },
];

export const sideProjects = [
  {
    title: "LocalSign",
    description:
      "A self-hosted app for filling and signing PDFs. Teams place fields on a document, sign it, and send signing requests to outside recipients by email link.",
    tools: "Node.js, Express, MongoDB, PDF.js, pdf-lib, JWT, Docker Compose",
  },
  {
    title: "CloudVault",
    repo: "https://github.com/nisamdev/cloudvault",
    description: "Secure cloud storage for a family's files and photos.",
    tools: "Ruby on Rails, Vue 3, Pinia, PostgreSQL, Redis, MinIO, Docker Compose",
  },
  {
    title: "pptx-to-html",
    repo: "https://github.com/nisamdev/pptx-to-html",
    description:
      "Converts PowerPoint decks into self-contained HTML, one page per slide. It rebuilds each slide from the geometry PowerPoint stores, so text stays real text.",
    tools: "Python, FastAPI, Docker",
  },
  {
    title: "Swing trade bot",
    repo: "https://github.com/nisamdev/swing-trade-bot",
    description:
      "A swing-trading bot with a plain-English interface. It tests a strategy on past prices, runs it on an Alpaca paper trading account, and journals every decision.",
    tools: "Python, FastAPI, React, Vite, Alpaca API, Docker Compose",
  },
];

export const stackGroups = [
  {
    title: "Every day",
    tools: "Node.js, TypeScript, Vue 3, Angular, Ruby on Rails, Laravel, PostgreSQL, MySQL, Redis, Docker, GitHub Actions, Claude Code, Cursor",
    secondary: false,
  },
  {
    title: "In production",
    tools: "React, Next.js, NestJS, Express, GraphQL, OpenAPI, OAuth2, OpenID Connect, SAML, JWT, Kubernetes, OpenShift, AWS, Elasticsearch, Sidekiq, RSpec, PHPUnit, Symfony, pgvector, Traefik, Grafana, Loki",
    secondary: false,
  },
  {
    title: "Working knowledge",
    tools: "Python (Flask), Go, Twig, Silex, Kong, Storybook, Expo, Azure AD, Bash",
    secondary: true,
  },
];

export const experience = [
  {
    when: "Jan 2023 to Oct 2026",
    role: "Technical Lead and Full Stack Developer",
    company: "Aerostudies, Edmonton",
    summary: "Owned the API, architecture, infrastructure and delivery for a four-developer product team.",
    meta: "Laravel, Angular, Vue 3, PostgreSQL, Redis. GitHub Actions. Unit tests gate releases.",
  },
  {
    when: "2022 to Present",
    role: "Ruby on Rails Engineer",
    company: "Confidential client, remote",
    summary: "Contract engagement alongside full-time roles.",
    meta: "Rails, Sidekiq, Vue 3. Docker CI/CD. RSpec.",
  },
  {
    when: "Aug to Dec 2022",
    role: "Full Stack Developer",
    company: "TELUS Communications",
    summary: "Node.js and GraphQL services and React interfaces.",
    meta: "Node.js, Express, React. OpenShift.",
  },
  {
    when: "Feb to Aug 2022",
    role: "Full Stack Cloud Developer",
    company: "IBM",
    summary: "Redis operator for Cloud Pak for Data.",
    meta: "Go, Kubernetes. OpenShift.",
  },
  {
    when: "Jan 2021 to Feb 2022",
    role: "Senior System Analyst",
    company: "ValueLabs",
    summary: "Patient data portal for a regulated healthcare client.",
    meta: "Symfony, React, Elasticsearch. PHPUnit.",
  },
  {
    when: "May 2016 to Jan 2021",
    role: "Technical Lead",
    company: "Phases Innovations",
    summary: "Led 10 to 15 developers on APIs, integrations and GDPR work.",
    meta: "Laravel, Python, MySQL, OAuth2. Unit testing and continuous deployment.",
  },
];
