
import type { LucideIcon } from 'lucide-react';
import { Briefcase, BoxIcon, Blocks, Layers, GitFork, ShieldCheck, GitMerge, Workflow, MessageCircle, Rocket, Settings, BarChart3, ServerCog, TerminalSquare, Brain } from 'lucide-react';

export const WHATSAPP_NUMBER = "5551984104084";
export const WHATSAPP_BASE_URL = "https://wa.me/";
export const DEFAULT_WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os serviços da Synera.";

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  image: string; // Placeholder for individual service page
  dataAiHint: string;
  details: { title: string, content: string }[];
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'consultancy',
    slug: 'consultoria',
    name: 'Consultoria Estratégica',
    shortDescription: 'Alinhamos tecnologia aos seus objetivos de negócio com consultoria especializada.',
    longDescription: 'Nossa consultoria estratégica foca em entender profundamente seus desafios e metas para propor soluções tecnológicas que tragam resultados reais. Ajudamos sua empresa a navegar no complexo cenário tecnológico, otimizando processos e impulsionando a inovação.',
    icon: Briefcase,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'business meeting',
    details: [
      { title: "Diagnóstico Tecnológico", content: "Análise completa do seu ambiente tecnológico atual para identificar GAPs e oportunidades de melhoria."},
      { title: "Roadmap de Transformação Digital", content: "Desenvolvimento de um plano estratégico para a adoção de novas tecnologias e modernização de sistemas."},
      { title: "Otimização de Processos de TI", content: "Consultoria para otimizar fluxos de trabalho e processos de TI, aumentando a eficiência e reduzindo custos."}
    ]
  },
  {
    id: 'kubernetes',
    slug: 'kubernetes',
    name: 'Kubernetes',
    shortDescription: 'Orquestração de contêineres robusta e escalável para suas aplicações.',
    longDescription: 'Implementamos e gerenciamos Kubernetes para automatizar o deployment, escalonamento e operações de aplicações em contêineres. Transforme sua infraestrutura com a flexibilidade e resiliência do K8s.',
    icon: BoxIcon, // Changed from Box to BoxIcon as Box is an HTML element
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'server cluster',
    details: [
        { title: "Implementação e Configuração", content: "Setup de clusters Kubernetes on-premise ou em nuvem, configurados para suas necessidades específicas."},
        { title: "Gerenciamento e Monitoramento", content: "Serviços de gerenciamento contínuo, monitoramento e otimização de clusters Kubernetes."},
        { title: "Migração para Kubernetes", content: "Planejamento e execução da migração de suas aplicações para um ambiente Kubernetes."}
    ]
  },
  {
    id: 'microservices',
    slug: 'microservicos',
    name: 'Microserviços',
    shortDescription: 'Desenvolvimento de arquiteturas de microserviços ágeis e resilientes.',
    longDescription: 'Projetamos e desenvolvemos aplicações baseadas em microserviços, permitindo maior agilidade, escalabilidade e facilidade de manutenção. Modernize sua arquitetura de software conosco.',
    icon: Blocks,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'network diagram',
    details: [
        { title: "Design de Arquitetura", content: "Desenho de arquiteturas de microserviços otimizadas para performance, escalabilidade e resiliência."},
        { title: "Desenvolvimento de Microserviços", content: "Criação de microserviços independentes e coesos utilizando as melhores práticas e tecnologias."},
        { title: "Governança e Comunicação", content: "Implementação de padrões de comunicação entre serviços e estratégias de governança."}
    ]
  },
  {
    id: 'platform-engineering',
    slug: 'platform-engineering',
    name: 'Platform Engineering',
    shortDescription: 'Construímos plataformas internas para acelerar o desenvolvimento.',
    longDescription: 'Criamos plataformas de desenvolvedor internas (IDPs) que fornecem as ferramentas e os processos necessários para que suas equipes de engenharia construam e entreguem software de forma rápida e confiável.',
    icon: Layers,
    image: '/platform.png',
    dataAiHint: 'developer platform',
    details: [
        { title: "Design de Plataformas Internas (IDP)", content: "Desenvolvimento de Internal Developer Platforms customizadas para as necessidades da sua equipe."},
        { title: "Automação de Infraestrutura (IaC)", content: "Automação de provisionamento e gerenciamento de infraestrutura como código."},
        { title: "Ferramentas de Self-Service para Devs", content: "Criação de portais e ferramentas de self-service para desenvolvedores."}
    ]
  },
  {
    id: 'devops',
    slug: 'devops',
    name: 'DevOps',
    shortDescription: 'Cultura e práticas DevOps para otimizar seu ciclo de desenvolvimento.',
    longDescription: 'Adote a cultura DevOps para integrar suas equipes de desenvolvimento e operações, automatizar processos e acelerar a entrega de software com qualidade e segurança.',
    icon: GitFork,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'automation process',
    details: [
        { title: "Implementação de CI/CD", content: "Criação e otimização de pipelines de Integração Contínua e Entrega Contínua."},
        { title: "Automação de Testes e Deployments", content: "Automatização de todos os estágios do ciclo de vida do software."},
        { title: "Monitoramento e Feedback Contínuo", content: "Implementação de ferramentas de monitoramento para um ciclo de feedback rápido."}
    ]
  },
  {
    id: 'sre',
    slug: 'sre',
    name: 'SRE',
    shortDescription: 'Engenharia de confiabilidade para sistemas altamente disponíveis.',
    longDescription: 'Aplicamos os princípios de SRE para construir e operar sistemas distribuídos em larga escala, garantindo alta disponibilidade, performance e resiliência para suas aplicações críticas.',
    icon: ShieldCheck,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'system reliability',
    details: [
        { title: "Definição de SLOs e SLIs", content: "Estabelecimento de Objetivos de Nível de Serviço (SLOs) e Indicadores de Nível de Serviço (SLIs)."},
        { title: "Automação de Operações (Toil Reduction)", content: "Redução de toil operacional através da automação de tarefas manuais."},
        { title: "Gerenciamento de Incidentes e Post-mortems", content: "Práticas robustas para resposta a incidentes e aprendizado contínuo."}
    ]
  },
  {
    id: 'argocd',
    slug: 'argocd',
    name: 'ArgoCD',
    shortDescription: 'GitOps contínuo para Kubernetes com ArgoCD.',
    longDescription: 'Implemente GitOps com ArgoCD para gerenciar a configuração de suas aplicações e infraestrutura Kubernetes de forma declarativa, versionada e automatizada.',
    icon: GitMerge,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'gitops workflow',
    details: [
        { title: "Setup e Configuração de ArgoCD", content: "Instalação e configuração do ArgoCD para gerenciar seus clusters Kubernetes."},
        { title: "Integração com Repositórios Git", content: "Sincronização de manifestos Kubernetes a partir de repositórios Git."},
        { title: "Automação de Deployments Seguros", content: "Deployments automatizados e seguros baseados em Git."}
    ]
  },
  {
    id: 'pipelines',
    slug: 'pipelines',
    name: 'Pipelines CI/CD',
    shortDescription: 'Desenvolvimento e otimização de pipelines de CI/CD.',
    longDescription: 'Construímos pipelines de CI/CD eficientes e customizados para automatizar o build, teste e deploy de suas aplicações, acelerando o time-to-market e melhorando a qualidade do software.',
    icon: Workflow,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'software pipeline',
    details: [
        { title: "Design de Pipelines Customizados", content: "Desenvolvimento de pipelines CI/CD adaptados às suas ferramentas e processos."},
        { title: "Otimização de Performance de Pipelines", content: "Análise e otimização de pipelines existentes para maior velocidade e eficiência."},
        { title: "Segurança em Pipelines (DevSecOps)", content: "Incorporação de práticas de segurança em todas as etapas do pipeline."}
    ]
  },
  {
    id: 'iac',
    slug: 'infraestrutura-como-codigo',
    name: 'Infraestrutura como Código (IaC)',
    shortDescription: 'Automatize e gerencie sua infraestrutura com Terraform e Ansible.',
    longDescription: 'Adote a Infraestrutura como Código para provisionar e configurar seus ambientes de forma programática, garantindo consistência, velocidade e confiabilidade. Utilizamos Terraform para provisionamento declarativo e Ansible para gerenciamento de configuração robusto.',
    icon: ServerCog, 
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'infrastructure code',
    details: [
      { title: "Provisionamento Declarativo com Terraform", content: "Utilizamos Terraform para definir e provisionar sua infraestrutura de forma declarativa, garantindo consistência e reprodutibilidade em ambientes de nuvem ou on-premise."},
      { title: "Gerenciamento de Configuração com Ansible", content: "Empregamos Ansible para automatizar o gerenciamento de configuração, orquestração de aplicações e provisionamento de software, simplificando a administração de sistemas complexos."},
      { title: "Automação de Ambientes Completos", content: "Combinamos Terraform e Ansible para criar soluções completas de automação de infraestrutura, desde o provisionamento de recursos até a configuração final de aplicações."},
      { title: "Templates Reutilizáveis e Boas Práticas", content: "Desenvolvemos módulos e playbooks reutilizáveis, seguindo as melhores práticas de IaC para otimizar seus processos."}
    ]
  },
  {
    id: 'ai-agents-gemini',
    slug: 'agentes-ia-gemini',
    name: 'Agentes de IA com Gemini',
    shortDescription: 'Desenvolvemos agentes de IA personalizados utilizando o poder do Google Gemini.',
    longDescription: 'Criamos soluções de Inteligência Artificial sob medida, desde chatbots inteligentes e assistentes virtuais até sistemas complexos de análise de dados e automação de processos, utilizando os modelos avançados do Google Gemini. Potencialize seu negócio com IA de última geração.',
    icon: Brain, 
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'artificial intelligence brain',
    details: [
      { title: "Desenvolvimento de Chatbots e Assistentes Virtuais", content: "Criação de interfaces conversacionais inteligentes com Gemini para atendimento ao cliente, suporte técnico e engajamento de usuários."},
      { title: "Automação Inteligente de Processos (IPA)", content: "Utilização de Gemini para automatizar tarefas repetitivas e complexas, otimizando fluxos de trabalho e aumentando a eficiência operacional."},
      { title: "Análise Avançada de Dados e Insights", content: "Aplicação de modelos Gemini para extrair informações valiosas de grandes volumes de dados, gerando insights para tomada de decisão estratégica."},
      { title: "Integração de IA em Aplicações Existentes", content: "Incorporamos capacidades de IA baseadas em Gemini em seus sistemas e plataformas atuais, agregando inteligência e novas funcionalidades."}
    ]
  }
];

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  dataAiHint: string;
}

export const PROJECTS_DATA: Project[] = [
  // {
  //   id: 'project1',
  //   name: 'Modernização de Plataforma E-commerce',
  //   description: 'Migração de um monolito para arquitetura de microserviços em Kubernetes, resultando em maior escalabilidade e agilidade nos deploys.',
  //   technologies: ['Kubernetes', 'Microserviços', 'DevOps'],
  //   image: 'https://placehold.co/600x400.png',
  //   dataAiHint: 'ecommerce platform'
  // },
  {
    id: 'project2',
    name: 'Automação de Infraestrutura',
    description: 'Implementação de Platform Engineering e CI/CD completo com ArgoCD, reduzindo o tempo de deploy em 80% e aumentando a confiabilidade.',
    technologies: ['Platform Engineering', 'ArgoCD', 'Pipelines', 'DevOps', 'Terraform', 'Ansible'],
    image: '/last.jpg',
    dataAiHint: 'fintech infrastructure'
  },
  {
    id: 'project3',
    name: 'Consultoria SRE',
    description: 'Aumento da disponibilidade do sistema para 99.99% e otimização de custos através da implementação de práticas SRE e monitoramento avançado.',
    technologies: ['SRE', 'Kubernetes', 'Monitoramento'],
    image: '/sre-platform.drawio.png',
    dataAiHint: 'saas reliability'
  },
   {
    id: 'project4',
    name: 'Implementação de Kubernetes em Cloud com IA',
    description: 'Criação de um cluster Kubernetes robusto para suportar cargas de trabalho de Machine Learning, otimizando o uso de GPUs.',
    technologies: ['Kubernetes', 'IA/ML', 'Platform Engineering'],
    image: '/What-is-Kubernetes.png',
    dataAiHint: 'ai startup'
  },
  {
    id: 'project5',
    name: 'Desenvolvimento de Agente AI para Atendimento com Gemini',
    description: 'Criação de um chatbot avançado utilizando Google Gemini para automatizar o atendimento ao cliente de uma varejista, melhorando o tempo de resposta e a satisfação.',
    technologies: ['IA', 'Google Gemini', 'Chatbot', 'Genkit'],
    image: '/ai-agents3.png',
    dataAiHint: 'ai chatbot'
  },
  {
    id: 'project6',
    name: 'Plataforma de Engenharia com Backstage',
    description: 'Desenvolvimento de uma plataforma de engenharia centralizada com Backstage, integrando Kubernetes, ArgoCD, Vault, pipelines CI/CD e outras ferramentas para otimizar o fluxo de desenvolvimento e operações.',
    technologies: ['Platform Engineering', 'Backstage', 'Kubernetes', 'ArgoCD', 'Vault', 'Pipelines CI/CD', 'DevOps'],
    image: '/platform.png',
    dataAiHint: 'developer portal'
  }
];

// Using specific icons for better thematic representation
export const SERVICE_ICONS = {
  consultoria: Briefcase,
  kubernetes: Rocket, // Represents deployment, power
  microservicos: Blocks,
  'platform-engineering': Layers,
  devops: Settings, // Represents configuration, automation
  sre: ShieldCheck,
  argocd: GitMerge,
  pipelines: Workflow,
  iac: ServerCog, // Icon for Infrastructure as Code
  'ai-agents-gemini': Brain, // Icon for AI Agents
  default: BarChart3 // A generic icon if needed
};


export const CONTACT_BUTTON_ICON = MessageCircle;

export const COMPANY_NAME = "Synera";
export const COMPANY_FULL_NAME = "Synera Solutions";
export const COMPANY_MISSION = "Transformando desafios tecnológicos em soluções inovadoras e eficientes.";
export const COMPANY_VALUES = [
  "Inovação Contínua",
  "Expertise Técnica",
  "Parceria com Clientes",
  "Transparência e Confiança",
  "Resultados Comprovados"
];
export const ABOUT_US_TEXT_PARAGRAPH_1 = "Na Synera, somos apaixonados por tecnologia e por como ela pode transformar negócios. Nossa equipe de especialistas combina conhecimento profundo com uma abordagem prática para entregar soluções que não apenas resolvem problemas, mas também abrem novas oportunidades de crescimento e eficiência.";
export const ABOUT_US_TEXT_PARAGRAPH_2 = "Com foco em tecnologias de ponta como Kubernetes, Microserviços, Platform Engineering e práticas DevOps/SRE, ajudamos empresas de todos os tamanhos a modernizar suas operações, acelerar a inovação e construir um futuro digital resiliente e escalável.";
export const ABOUT_US_IMAGE_URL = "/about.jpg";
export const ABOUT_US_IMAGE_HINT = "team collaboration";

export const HERO_TITLE = "Inovação e Expertise em Soluções Tecnológicas";
export const HERO_SUBTITLE = "Na Synera, capacitamos seu negócio com consultoria e implementação de tecnologias de ponta, desde Kubernetes e Microserviços até Platform Engineering e SRE.";
export const HERO_IMAGE_URL = "/slider-bg2.jpg";
export const HERO_IMAGE_HINT = "modern cityscape";

export const SERVICES_SECTION_TITLE = "Nossos Serviços";
export const SERVICES_SECTION_DESCRIPTION = "Oferecemos um portfólio completo de serviços para impulsionar a transformação digital da sua empresa.";

export const PROJECTS_SECTION_TITLE = "Projetos de Sucesso";
export const PROJECTS_SECTION_DESCRIPTION = "Conheça alguns dos projetos onde aplicamos nossa expertise para gerar resultados impactantes.";

export const AI_ADVISOR_SECTION_TITLE = "Consultor de IA Synera";
export const AI_ADVISOR_SECTION_DESCRIPTION = "Descreva suas necessidades e nossa IA fornecerá sugestões de tecnologias e abordagens para o seu projeto.";

export const ABOUT_US_SECTION_TITLE = "Sobre a Synera";

export const FOOTER_TEXT = `© ${new Date().getFullYear()} Synera Solutions. Todos os direitos reservados.`;


    

