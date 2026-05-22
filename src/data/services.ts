export type ServiceLogo = {
  name: string;
  src: string;
  alt: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  problems: string[];
  approach: Array<{ title: string; description: string }>;
  results: string[];
  stack: string[];
  logos: ServiceLogo[];
  relatedSlugs: string[];
};

export type ServiceGroup = {
  category: string;
  description: string;
  cta: string;
  items: ServiceItem[];
};

export const services: ServiceItem[] = [
  {
    slug: "kubernetes-cloud-native",
    title: "Kubernetes e Cloud Native",
    subtitle: "Arquitetura, governança e operação de clusters prontos para produção",
    summary:
      "Problema: clusters frágeis e baixa previsibilidade. Abordagem: arquitetura, governança e operação com SRE. Resultado: plataforma resiliente, segura e pronta para escala.",
    tags: ["Kubernetes", "SRE", "Governança"],
    seoTitle: "Kubernetes e Cloud Native | Synera",
    seoDescription:
      "Consultoria em arquitetura, implantação e operação de Kubernetes com governança, SRE e segurança para ambientes de produção.",
    problems: [
      "Clusters instáveis com incidentes recorrentes e pouca visibilidade operacional",
      "Falta de padrões de deploy, quotas, RBAC e políticas de segurança consistentes",
      "Dificuldade para escalar workloads e operar múltiplos ambientes com previsibilidade",
      "Operadores e componentes customizados sem ciclo de vida definido"
    ],
    approach: [
      {
        title: "Diagnóstico e desenho",
        description:
          "Avaliamos topologia atual, SLIs/SLOs desejados, requisitos de compliance e restrições de rede para definir a arquitetura alvo."
      },
      {
        title: "Implementação e hardening",
        description:
          "Implantamos ou evoluímos clusters com boas práticas de segurança, observabilidade, backup, upgrades e automação de operação."
      },
      {
        title: "Transferência e SRE",
        description:
          "Documentamos runbooks, capacitamos o time e estabelecemos rituais de operação para reduzir dependência externa."
      }
    ],
    results: [
      "Maior estabilidade e tempo de recuperação previsível",
      "Governança clara de namespaces, quotas e políticas",
      "Base cloud-native preparada para crescimento e multi-cluster",
      "Operação alinhada a práticas SRE e observabilidade"
    ],
    stack: ["Kubernetes", "Prometheus", "Grafana", "Cert-Manager", "Operators"],
    logos: [
      { name: "Kubernetes", src: "/logos/kubernetes.svg", alt: "Logo Kubernetes" },
      { name: "Prometheus", src: "/logos/prometheus.svg", alt: "Logo Prometheus" },
      { name: "Grafana", src: "/logos/grafana.svg", alt: "Logo Grafana" }
    ],
    relatedSlugs: ["gitops-orquestracao", "consultoria-devops-platform", "automacao-iac"]
  },
  {
    slug: "pipelines-cicd",
    title: "Pipelines e CI/CD",
    subtitle: "Entrega contínua com qualidade embutida e lead time reduzido",
    summary:
      "Problema: deploy lento e sujeito a erro manual. Abordagem: padronização de pipelines e qualidade embutida. Resultado: lead time menor e releases mais confiáveis.",
    tags: ["GitHub Actions", "Azure DevOps", "Quality Gates"],
    seoTitle: "Pipelines e CI/CD | Synera",
    seoDescription:
      "Padronização de pipelines, testes automatizados e quality gates com GitHub Actions e Azure DevOps para releases confiáveis.",
    problems: [
      "Deploys manuais lentos e propensos a regressão em produção",
      "Pipelines inconsistentes entre squads, sem templates reutilizáveis",
      "Falta de quality gates, testes e validações antes do promote",
      "Baixa rastreabilidade entre commit, build e release"
    ],
    approach: [
      {
        title: "Mapeamento do fluxo atual",
        description:
          "Identificamos gargalos no ciclo de entrega, tipos de artefato e requisitos de compliance por ambiente."
      },
      {
        title: "Padronização de pipelines",
        description:
          "Criamos templates, bibliotecas compartilhadas e políticas de branch/release alinhadas ao contexto do cliente."
      },
      {
        title: "Qualidade e observabilidade",
        description:
          "Incorporamos testes, scans, approvals e métricas DORA para evolução contínua do processo."
      }
    ],
    results: [
      "Lead time menor com deploys previsíveis",
      "Menos retrabalho e falhas em produção",
      "Pipelines reutilizáveis entre times",
      "Visibilidade de métricas de entrega (DORA)"
    ],
    stack: ["GitHub Actions", "Azure DevOps", "SonarQube", "Container Registry", "Helm"],
    logos: [
      { name: "GitHub Actions", src: "/logos/github-actions.svg", alt: "Logo GitHub Actions" },
      { name: "Azure DevOps", src: "/logos/azure-devops.svg", alt: "Logo Azure DevOps" },
      { name: "Helm", src: "/logos/helm.svg", alt: "Logo Helm" }
    ],
    relatedSlugs: ["gitops-orquestracao", "platform-engineering-idp", "consultoria-devops-platform"]
  },
  {
    slug: "gitops-orquestracao",
    title: "GitOps e Orquestração",
    subtitle: "Entrega auditável com ArgoCD, workflows e orquestração confiável",
    summary:
      "Problema: mudanças sem rastreabilidade e rollback complexo. Abordagem: ArgoCD, Argo Workflows e Temporal.io. Resultado: entrega auditável e reversão segura.",
    tags: ["ArgoCD", "Argo Workflows", "Temporal.io"],
    seoTitle: "GitOps e Orquestração | Synera",
    seoDescription:
      "GitOps com ArgoCD, automação com Argo Workflows e orquestração resiliente com Temporal.io para entregas auditáveis.",
    problems: [
      "Mudanças em produção sem trilha clara de auditoria e aprovação",
      "Rollback demorado ou arriscado em incidentes",
      "Jobs e pipelines batch sem orquestração confiável",
      "Drift entre ambientes e configuração declarada"
    ],
    approach: [
      {
        title: "Modelo GitOps",
        description:
          "Definimos repositórios, estratégias de promote, políticas de sync e segregação por ambiente."
      },
      {
        title: "Automação de workflows",
        description:
          "Implementamos pipelines de dados e operação com Argo Workflows e Temporal para processos longos."
      },
      {
        title: "Operação e resiliência",
        description:
          "Configuramos health checks, alertas, retries e práticas de disaster recovery alinhadas ao negócio."
      }
    ],
    results: [
      "Histórico completo de mudanças via Git",
      "Rollback rápido e previsível",
      "Orquestração resiliente para workloads críticos",
      "Menos drift entre ambientes"
    ],
    stack: ["ArgoCD", "Argo Workflows", "Temporal.io", "Git", "Kubernetes"],
    logos: [
      { name: "Argo CD", src: "/logos/argocd.svg", alt: "Logo Argo CD" },
      { name: "Argo Workflows", src: "/logos/argo-workflows.svg", alt: "Logo Argo Workflows" },
      { name: "Temporal", src: "/logos/temporal.svg", alt: "Logo Temporal" }
    ],
    relatedSlugs: ["kubernetes-cloud-native", "pipelines-cicd", "automacao-iac"]
  },
  {
    slug: "automacao-iac",
    title: "Automação e IaC",
    subtitle: "Infraestrutura reprodutível com Ansible, Terraform e Crossplane",
    summary:
      "Problema: ambientes inconsistentes e retrabalho recorrente. Abordagem: Ansible, Terraform e Crossplane com versionamento. Resultado: infraestrutura reprodutível e governável.",
    tags: ["Ansible", "Terraform", "Crossplane"],
    seoTitle: "Automação e Infraestrutura como Código | Synera",
    seoDescription:
      "Automação com Ansible, Terraform e Crossplane para infraestrutura versionada, reprodutível e governável.",
    problems: [
      "Ambientes criados manualmente com configuração divergente",
      "Provisionamento lento e dependente de poucos especialistas",
      "Falta de políticas e validação antes de aplicar mudanças",
      "Dificuldade para provisionar recursos cloud via Kubernetes"
    ],
    approach: [
      {
        title: "Inventário e padrões",
        description:
          "Mapeamos recursos existentes e definimos módulos, naming e tags para padronização."
      },
      {
        title: "Automação versionada",
        description:
          "Implementamos pipelines de plan/apply, testes de módulos e revisão por pull request."
      },
      {
        title: "Governança contínua",
        description:
          "Estabelecemos políticas, drift detection e documentação para operação pelo time interno."
      }
    ],
    results: [
      "Ambientes reprodutíveis em minutos",
      "Menos erro humano e retrabalho",
      "Auditoria de mudanças via Git",
      "Provisionamento alinhado a políticas corporativas"
    ],
    stack: ["Terraform", "Ansible", "Crossplane", "Git", "Policy as Code"],
    logos: [
      { name: "Terraform", src: "/logos/terraform.svg", alt: "Logo Terraform" },
      { name: "Ansible", src: "/logos/ansible.svg", alt: "Logo Ansible" },
      { name: "Crossplane", src: "/logos/crossplane.svg", alt: "Logo Crossplane" }
    ],
    relatedSlugs: ["kubernetes-cloud-native", "gitops-orquestracao", "consultoria-devops-platform"]
  },
  {
    slug: "platform-engineering-idp",
    title: "Platform Engineering e IDP",
    subtitle: "Developer portal e self-service com padrões de engenharia",
    summary:
      "Problema: dependência de especialistas para tarefas simples. Abordagem: IDP com Backstage e fluxos self-service. Resultado: autonomia com padrões de engenharia.",
    tags: ["Backstage", "IDP", "Self-service"],
    seoTitle: "Platform Engineering e IDP | Synera",
    seoDescription:
      "Internal Developer Platform com Backstage, templates e self-service para acelerar times com governança.",
    problems: [
      "Desenvolvedores dependem de tickets para provisionar ambientes e serviços",
      "Documentação fragmentada e difícil de descobrir",
      "Padrões de arquitetura não replicados entre squads",
      "Baixa visibilidade de ownership e dependências entre sistemas"
    ],
    approach: [
      {
        title: "Jornada do desenvolvedor",
        description:
          "Mapeamos fluxos críticos (criar serviço, deploy, observar) e definimos o catálogo de capacidades da plataforma."
      },
      {
        title: "IDP com Backstage",
        description:
          "Implementamos software catalog, templates, scaffolder e integrações com ferramentas existentes."
      },
      {
        title: "Evolução da plataforma",
        description:
          "Estabelecemos métricas de adoção, feedback loop com times e roadmap de golden paths."
      }
    ],
    results: [
      "Self-service com guardrails de segurança e compliance",
      "Onboarding mais rápido de novos desenvolvedores",
      "Padrões replicáveis via templates",
      "Catálogo vivo de serviços e ownership"
    ],
    stack: ["Backstage", "Kubernetes", "ArgoCD", "GitHub Actions", "OpenAPI"],
    logos: [
      { name: "Backstage", src: "/logos/backstage.svg", alt: "Logo Backstage" },
      { name: "Kubernetes", src: "/logos/kubernetes.svg", alt: "Logo Kubernetes" },
      { name: "Argo CD", src: "/logos/argocd.svg", alt: "Logo Argo CD" }
    ],
    relatedSlugs: ["pipelines-cicd", "kubernetes-cloud-native", "consultoria-devops-platform"]
  },
  {
    slug: "desenvolvimento-golang",
    title: "Desenvolvimento Golang",
    subtitle: "APIs, CLIs e operadores cloud-native em Go",
    summary:
      "Problema: falta de ferramentas internas para escalar operação. Abordagem: APIs, CLIs e operadores em Go com boas práticas. Resultado: produtividade e robustez cloud-native.",
    tags: ["Go", "APIs", "CLIs", "Operators"],
    seoTitle: "Desenvolvimento Golang | Synera",
    seoDescription:
      "Desenvolvimento de APIs, CLIs e Kubernetes operators em Golang com foco em performance e operabilidade.",
    problems: [
      "Automações críticas em scripts difíceis de manter e testar",
      "Necessidade de operadores customizados para domínios específicos",
      "APIs internas sem padrão de observabilidade e versionamento",
      "Falta de expertise Go para acelerar entregas"
    ],
    approach: [
      {
        title: "Desenho e contratos",
        description:
          "Definimos APIs, eventos e interfaces com foco em simplicidade, testabilidade e observabilidade."
      },
      {
        title: "Implementação",
        description:
          "Desenvolvemos serviços, CLIs e operators com CI, testes, lint e documentação alinhados ao time."
      },
      {
        title: "Handoff",
        description:
          "Transferimos conhecimento, runbooks e padrões de evolução para o time interno sustentar o código."
      }
    ],
    results: [
      "Ferramentas internas confiáveis e testáveis",
      "Operators alinhados ao modelo Kubernetes",
      "Menor custo operacional de automações críticas",
      "Código preparado para evolução contínua"
    ],
    stack: ["Go", "Kubernetes Operator SDK", "gRPC", "OpenTelemetry", "PostgreSQL"],
    logos: [
      { name: "Go", src: "/logos/golang.svg", alt: "Logo Go" },
      { name: "Kubernetes", src: "/logos/kubernetes.svg", alt: "Logo Kubernetes" },
      { name: "OpenTelemetry", src: "/logos/opentelemetry.svg", alt: "Logo OpenTelemetry" }
    ],
    relatedSlugs: ["kubernetes-cloud-native", "platform-engineering-idp", "gitops-orquestracao"]
  },
  {
    slug: "consultoria-devops-platform",
    title: "Consultoria DevOps e Platform",
    subtitle: "Diagnóstico, roadmap e execução com impacto mensurável",
    summary:
      "Problema: iniciativas isoladas sem ganho sistêmico. Abordagem: diagnóstico, roadmap e execução junto ao time. Resultado: maturidade contínua e impacto mensurável.",
    tags: ["DevOps", "Roadmap", "Maturidade"],
    seoTitle: "Consultoria DevOps e Platform | Synera",
    seoDescription:
      "Consultoria DevOps e Platform Engineering com diagnóstico, roadmap priorizado e execução junto ao seu time.",
    problems: [
      "Iniciativas de DevOps sem priorização clara nem métricas de sucesso",
      "Silos entre desenvolvimento, infraestrutura e segurança",
      "Ferramentas adotadas sem mudança de processo e cultura",
      "Dificuldade para demonstrar ROI de investimentos em plataforma"
    ],
    approach: [
      {
        title: "Assessment",
        description:
          "Avaliamos pessoas, processos e tecnologia com frameworks práticos (DORA, capacidades de plataforma)."
      },
      {
        title: "Roadmap executável",
        description:
          "Priorizamos quick wins e iniciativas estruturantes com owners, métricas e critérios de done."
      },
      {
        title: "Co-criação",
        description:
          "Atuamos embedded com squads para implementar, medir e ajustar continuamente."
      }
    ],
    results: [
      "Visão compartilhada de maturidade e próximos passos",
      "Métricas de entrega e operação acompanhadas pelo negócio",
      "Menos iniciativas paralelas sem resultado",
      "Evolução sustentável da cultura de engenharia"
    ],
    stack: ["DORA Metrics", "Value Stream Mapping", "Platform Engineering", "SRE"],
    logos: [
      { name: "Kubernetes", src: "/logos/kubernetes.svg", alt: "Logo Kubernetes" },
      { name: "Argo CD", src: "/logos/argocd.svg", alt: "Logo Argo CD" },
      { name: "Backstage", src: "/logos/backstage.svg", alt: "Logo Backstage" }
    ],
    relatedSlugs: ["kubernetes-cloud-native", "platform-engineering-idp", "pipelines-cicd"]
  },
  {
    slug: "treinamentos-in-company",
    title: "Treinamentos in-company",
    subtitle: "Capacitação prática alinhada ao contexto real do seu time",
    summary:
      "Problema: lacunas técnicas travando evolução da plataforma. Abordagem: trilhas práticas alinhadas ao contexto real. Resultado: equipe preparada para operar e evoluir sem dependência.",
    tags: ["Hands-on", "Mentoria", "Capacitação"],
    seoTitle: "Treinamentos in-company | Synera",
    seoDescription:
      "Treinamentos in-company em Kubernetes, Platform Engineering, GitOps, CI/CD e Golang com laboratórios práticos.",
    problems: [
      "Times com conhecimento teórico mas sem prática em ambientes reais",
      "Treinamentos genéricos desconectados do stack do cliente",
      "Dificuldade para absorver novas ferramentas após consultoria",
      "Alta dependência de especialistas externos no dia a dia"
    ],
    approach: [
      {
        title: "Diagnóstico de lacunas",
        description:
          "Identificamos níveis por papel (dev, SRE, platform) e objetivos de negócio para cada trilha."
      },
      {
        title: "Programa customizado",
        description:
          "Montamos módulos hands-on com laboratório, exercícios no contexto do cliente e mentoria."
      },
      {
        title: "Acompanhamento",
        description:
          "Oferecemos office hours e materiais de referência para consolidar aprendizado pós-treinamento."
      }
    ],
    results: [
      "Time autônomo para operar e evoluir a plataforma",
      "Redução de dependência externa após projetos",
      "Alinhamento entre squads em práticas e ferramentas",
      "ROI visível em produtividade e qualidade"
    ],
    stack: ["Kubernetes", "ArgoCD", "Backstage", "Terraform", "Golang"],
    logos: [
      { name: "Kubernetes", src: "/logos/kubernetes.svg", alt: "Logo Kubernetes" },
      { name: "Argo CD", src: "/logos/argocd.svg", alt: "Logo Argo CD" },
      { name: "Backstage", src: "/logos/backstage.svg", alt: "Logo Backstage" }
    ],
    relatedSlugs: ["kubernetes-cloud-native", "platform-engineering-idp", "consultoria-stack-ai"]
  },
  {
    slug: "consultoria-stack-ai",
    title: "Consultoria para stack com AI",
    subtitle: "Adoção segura de AI no ciclo de desenvolvimento e operação",
    summary:
      "Problema: adoção de AI sem estratégia técnica. Abordagem: desenho de stack, integrações e governança de uso. Resultado: ganho real de produtividade com segurança.",
    tags: ["LLMs", "AI Stack", "Integração"],
    seoTitle: "Consultoria para stack com AI | Synera",
    seoDescription:
      "Consultoria para desenhar stack de AI, integrações, governança e treinamento para produtividade segura no desenvolvimento.",
    problems: [
      "Uso disperso de ferramentas de AI sem políticas nem integração ao fluxo",
      "Riscos de vazamento de dados e código sensível em prompts",
      "Expectativa de ganho de produtividade sem métricas nem processo",
      "Dificuldade para integrar AI a pipelines, IDP e documentação"
    ],
    approach: [
      {
        title: "Estratégia e governança",
        description:
          "Definimos casos de uso priorizados, políticas de dados, modelos permitidos e critérios de sucesso."
      },
      {
        title: "Stack e integrações",
        description:
          "Integramos assistentes ao IDE, CI/CD, catálogo de serviços e bases de conhecimento do cliente."
      },
      {
        title: "Capacitação",
        description:
          "Treinamos times em prompting, revisão de código assistido e operação responsável de AI."
      }
    ],
    results: [
      "Produtividade mensurável em tarefas selecionadas",
      "Governança clara de dados e ferramentas aprovadas",
      "Integração com fluxo existente de engenharia",
      "Redução de risco em adoção ad hoc de AI"
    ],
    stack: ["LLMs", "MCP", "RAG", "GitHub Copilot", "Backstage TechDocs"],
    logos: [
      { name: "OpenAI", src: "/logos/openai.svg", alt: "Logo OpenAI" },
      { name: "GitHub", src: "/logos/github.svg", alt: "Logo GitHub" },
      { name: "Backstage", src: "/logos/backstage.svg", alt: "Logo Backstage" }
    ],
    relatedSlugs: ["platform-engineering-idp", "pipelines-cicd", "treinamentos-in-company"]
  }
];

export const serviceBySlug = new Map(services.map((s) => [s.slug, s]));

export const serviceGroups: ServiceGroup[] = [
  {
    category: "Destaques estratégicos",
    description: "Frentes de alto impacto para reduzir risco operacional e acelerar entregas.",
    cta: "Quero priorizar essas frentes",
    items: services.slice(0, 3)
  },
  {
    category: "Portfólio completo",
    description: "Serviços complementares para evoluir arquitetura, times e velocidade de negócio.",
    cta: "Mapear serviço ideal",
    items: services.slice(3)
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return serviceBySlug.get(slug);
}

export function getRelatedServices(slugs: string[]): ServiceItem[] {
  return slugs.map((s) => serviceBySlug.get(s)).filter((s): s is ServiceItem => Boolean(s));
}
