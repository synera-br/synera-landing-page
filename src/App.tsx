import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { ChatBot } from "./components/ChatBot";

type ContactForm = {
  nome: string;
  empresa: string;
  email: string;
  mensagem: string;
};

const initialForm: ContactForm = {
  nome: "",
  empresa: "",
  email: "",
  mensagem: ""
};

const navItems = [
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "treinamento", label: "Treinamento" },
  { id: "contato", label: "Contato" }
];

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "Kubernetes & Platform Engineering",
    description:
      "Arquitetura e operação de clusters, desenvolvimento de operadores Kubernetes e IDP com Backstage. Do bare-metal à produção multi-cloud com práticas de Platform Engineering.",
    tags: ["Kubernetes", "Operators", "Backstage", "IDP"]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Pipelines & GitOps",
    description:
      "CD com ArgoCD, CI com GitHub Actions e Azure DevOps, orquestração com Argo Workflows e Temporal.io. Entregas contínuas com rastreabilidade e reversão segura.",
    tags: ["ArgoCD", "GitHub Actions", "Azure DevOps", "Temporal.io"]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3-3 3M13 14h4" />
      </svg>
    ),
    title: "Infraestrutura como Código",
    description:
      "Provisionamento e gestão de infraestrutura com Ansible, Terraform e Crossplane. Consistência entre ambientes, rastreabilidade e evolução controlada.",
    tags: ["Ansible", "Terraform", "Crossplane"]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Desenvolvimento Golang",
    description:
      "Desenvolvimento de ferramentas, APIs, CLIs e operadores Kubernetes em Go. Código idiomático, testável e pensado para a cultura cloud-native.",
    tags: ["Go", "CLIs", "APIs REST", "Operators"]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 2a7 7 0 0 1 7 7c0 4.17-3.5 7.5-7 10-3.5-2.5-7-5.83-7-10a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "AI Enablement",
    description:
      "Apoio para criar e evoluir stacks de desenvolvimento com AI: treinamentos, integrações e acompanhamento contínuo para adoção de LLMs no ciclo de engenharia.",
    tags: ["LLMs", "AI Stack", "Integração", "Tooling"]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Consultoria DevOps",
    description:
      "Diagnóstico, estratégia e evolução de maturidade DevOps. Acompanhamento próximo para transformar cultura, processos e ferramentas com foco em resultado tangível.",
    tags: ["DevOps", "Cultura", "Maturidade", "Estratégia"]
  }
];

const approachSteps = [
  {
    number: "01",
    title: "Diagnóstico técnico",
    description:
      "Mapeamos seu stack atual, os desafios reais e onde há maior oportunidade de ganho com menor custo de mudança."
  },
  {
    number: "02",
    title: "Planejamento colaborativo",
    description:
      "Definimos um roadmap junto ao seu time, respeitando o contexto atual e priorizando entregas com impacto imediato."
  },
  {
    number: "03",
    title: "Execução e evolução",
    description:
      "Implementamos, documentamos e acompanhamos. Seu time cresce junto com a plataforma — sem dependência permanente de consultoria."
  }
];

const trainingTopics = [
  "Kubernetes — do básico ao avançado",
  "Platform Engineering com Backstage",
  "GitOps com ArgoCD",
  "Pipelines e CI/CD moderno",
  "Infraestrutura como Código",
  "Desenvolvimento em Golang",
  "DevOps e cultura de engenharia",
  "AI aplicada ao ciclo de desenvolvimento"
];

const techStack = [
  "Kubernetes",
  "Golang",
  "ArgoCD",
  "Backstage",
  "Temporal.io",
  "Terraform",
  "Ansible",
  "Crossplane",
  "GitHub Actions",
  "Azure DevOps"
];

export function App() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const handleChatClose = useCallback(() => setChatOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const whatsappHref = useMemo(() => {
    const phone = "5511999999999";
    const text = [
      "Olá, equipe Synera!",
      `Nome: ${form.nome}`,
      `Empresa: ${form.empresa || "Não informada"}`,
      `Email: ${form.email}`,
      `Mensagem: ${form.mensagem}`
    ].join("\n");
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, [form]);

  const whatsappQuickHref = useMemo(() => {
    const phone = "5511999999999";
    const text = "Olá, equipe Synera! Quero falar sobre consultoria em plataforma e DevOps.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, []);

  function validate() {
    const nextErrors: Partial<ContactForm> = {};
    if (!form.nome.trim()) nextErrors.nome = "Informe seu nome";
    if (!form.email.trim()) nextErrors.email = "Informe seu email";
    if (!form.mensagem.trim()) nextErrors.mensagem = "Informe sua mensagem";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      {/* ── Header ── */}
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <nav className="top-nav">
          <a href="#" className="brand" aria-label="Synera — página inicial">
            <span className="brand-mark" aria-hidden="true">S</span>
            <span>Synera</span>
          </a>
          <button
            className={`menu-toggle${menuOpen ? " open" : ""}`}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a href={whatsappQuickHref} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Chamar no WhatsApp
          </a>
        </nav>
        <div id="mobile-nav" className={`mobile-nav${menuOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href={whatsappQuickHref}
            className="mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Consultoria em Tecnologia</p>
          <h1>
            Plataformas cloud-native construídas por quem vive a tecnologia
          </h1>
          <p className="hero-sub">
            Consultoria especializada em Kubernetes, Platform Engineering e automação. Trabalhamos
            junto ao seu time — do diagnóstico à execução, sem enrolação.
          </p>
          <div className="hero-tech-tags" aria-label="Tecnologias principais">
            {["Kubernetes", "Golang", "ArgoCD", "Backstage", "Temporal.io"].map((t) => (
              <span key={t} className="hero-tech-tag">{t}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a href={whatsappQuickHref} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Chamar no WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost">Ver serviços</a>
          </div>
        </div>
        <div className="hero-terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span /><span /><span />
          </div>
          <div className="terminal-body">
            <span className="t-prompt">$</span>
            <span className="t-cmd"> kubectl get pods -n platform</span>
            <br />
            <span className="t-out">NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;READY</span>
            <br />
            <span className="t-out">backstage-7d4f9b-xk2lp&nbsp;&nbsp;Running&nbsp;&nbsp;1/1</span>
            <br />
            <span className="t-out">argocd-server-85c9d-nqr8&nbsp;Running&nbsp;&nbsp;1/1</span>
            <br />
            <span className="t-out">temporal-frontend-zp4ms&nbsp;&nbsp;Running&nbsp;&nbsp;1/1</span>
            <br />
            <span className="t-prompt">$</span>
            <span className="t-cmd"> argocd app sync platform-stack</span>
            <br />
            <span className="t-success">✔ platform-stack synced successfully</span>
            <br />
            <span className="t-cursor">▌</span>
          </div>
        </div>
      </section>

      {/* ── Tech strip ── */}
      <div className="tech-strip">
        <div className="container">
          <p className="tech-strip-label">Especialistas em</p>
          <ul className="tech-strip-list" aria-label="Stack de tecnologias">
            {techStack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <main>
        {/* ── Sobre ── */}
        <section id="sobre" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Sobre a Synera</h2>
              <p className="section-lead">
                Uma consultoria brasileira fundada em 2010, com mais de uma década de entrega
                real em tecnologia — e participações em eventos internacionais como a KubeCon.
              </p>
            </div>
            <div className="about-stats" aria-label="Destaques">
              <div className="about-stat">
                <strong>+15</strong>
                <span>anos de atuação em TI</span>
              </div>
              <div className="about-stat">
                <strong>KubeCon</strong>
                <span>presença em eventos internacionais</span>
              </div>
              <div className="about-stat">
                <strong>Cloud-native</strong>
                <span>do conceito à produção</span>
              </div>
              <div className="about-stat">
                <strong>Execução</strong>
                <span>pragmatismo e resultado real</span>
              </div>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Fundada em 2010, a Synera nasceu da convicção de que tecnologia bem aplicada
                  transforma negócios. Ao longo dos anos, construímos expertise sólida em
                  engenharia de plataforma, automação e DevOps — áreas que evoluem rápido e
                  exigem parceiros que pensam junto com os times.
                </p>
                <p>
                  Atuamos de forma próxima: entendemos os desafios reais antes de propor qualquer
                  solução. Nosso modelo é consultivo e orientado à execução, não à dependência
                  permanente.
                </p>
                <p>
                  O nome Synera une <em>synchronize</em> e <em>era</em> — uma empresa que se
                  atualiza com o tempo, em constante evolução para atender clientes que também
                  estão crescendo.
                </p>
              </div>
              <ul className="about-highlights">
                <li>
                  <strong>Kubernetes & Operators</strong>
                  <span>arquitetura, implantação e operação em produção</span>
                </li>
                <li>
                  <strong>Platform Engineering</strong>
                  <span>IDP com Backstage e cultura de plataforma interna</span>
                </li>
                <li>
                  <strong>GitOps & CI/CD</strong>
                  <span>entregas contínuas com ArgoCD e Temporal.io</span>
                </li>
                <li>
                  <strong>Golang & IaC</strong>
                  <span>código e infraestrutura prontos para escala</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Serviços ── */}
        <section id="servicos" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>Serviços</h2>
              <p className="section-lead">
                Soluções especializadas para acelerar sua jornada cloud-native e elevar a
                maturidade de engenharia do seu time.
              </p>
            </div>
            <div className="cards">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <span className="card-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <ul className="card-tags" aria-label={`Tecnologias de ${s.title}`}>
                    {s.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Nossa Abordagem ── */}
        <section id="abordagem" className="section approach-section">
          <div className="container">
            <div className="section-header">
              <h2>Como trabalhamos</h2>
              <p className="section-lead">
                Uma abordagem consultiva e orientada à execução — sem promessas vagas, sem
                dependência permanente.
              </p>
            </div>
            <div className="approach-steps">
              {approachSteps.map((step) => (
                <div key={step.number} className="approach-step">
                  <span className="step-number" aria-hidden="true">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
            <div className="approach-cta-row">
              <a href="#contato" className="btn-primary">
                Fale com a Synera
              </a>
              <p className="approach-cta-note">
                Atendimento para times de engenharia, DevOps e Platform Engineering
              </p>
            </div>
          </div>
        </section>

        {/* ── Treinamento ── */}
        <section id="treinamento" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>Treinamento</h2>
              <p className="section-lead">
                Capacitações in-company customizadas para levar seu time ao próximo nível em
                engenharia de plataforma e DevOps.
              </p>
            </div>
            <div className="training-layout">
              <div className="training-text">
                <p>
                  Nossos treinamentos in-company são desenhados sob medida para o contexto da
                  sua empresa. Partimos da realidade do time, identificamos lacunas e entregamos
                  um programa prático — com exercícios reais, ambientes de laboratório e
                  mentoria contínua durante e após o treinamento.
                </p>
                <p>
                  Não entregamos slides genéricos. Cada programa é co-construído com o cliente,
                  adaptado às ferramentas e desafios do dia a dia do time.
                </p>
                <a href="#contato" className="btn-primary">Solicitar treinamento</a>
              </div>
              <ul className="training-topics">
                {trainingTopics.map((topic) => (
                  <li key={topic}>
                    <span className="topic-check" aria-hidden="true">✓</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Contato ── */}
        <section id="contato" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Contato</h2>
              <p className="section-lead">
                Pronto para transformar sua plataforma? Fale com a Synera e descubra como
                podemos acelerar sua jornada cloud-native.
              </p>
            </div>
            <div className="contact-layout">
              <form onSubmit={onSubmit} noValidate>
                <h3>Envie uma mensagem</h3>
                <label>
                  Nome*
                  <input
                    value={form.nome}
                    onChange={(e) => setForm((v) => ({ ...v, nome: e.target.value }))}
                  />
                  {errors.nome && <small>{errors.nome}</small>}
                </label>
                <label>
                  Empresa
                  <input
                    value={form.empresa}
                    onChange={(e) => setForm((v) => ({ ...v, empresa: e.target.value }))}
                  />
                </label>
                <label>
                  Email*
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                  />
                  {errors.email && <small>{errors.email}</small>}
                </label>
                <label>
                  Mensagem*
                  <textarea
                    rows={5}
                    value={form.mensagem}
                    onChange={(e) => setForm((v) => ({ ...v, mensagem: e.target.value }))}
                  />
                  {errors.mensagem && <small>{errors.mensagem}</small>}
                </label>
                <button type="submit">Enviar via WhatsApp</button>
              </form>

              <div className="contact-sidecards">
                <div className="whatsapp-card">
                  <div className="whatsapp-card-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <h3>WhatsApp direto</h3>
                  <p>
                    Quer resposta rápida? Fale agora com a Synera no WhatsApp e acelere a conversa
                    sobre seu desafio.
                  </p>
                  <a href={whatsappQuickHref} target="_blank" rel="noopener noreferrer">
                    Abrir WhatsApp agora
                  </a>
                </div>
                <div className="chat-card">
                  <div className="chat-card-icon" aria-hidden="true">✦</div>
                  <h3>Fale com AI</h3>
                  <p>
                    Converse com nosso assistente AI sobre desafios de plataforma, Kubernetes,
                    DevOps e modernização. Atendimento imediato, 24 horas.
                  </p>
                  <a
                    href="#"
                    className="chat-card-btn"
                    onClick={(e) => { e.preventDefault(); setChatOpen(true); }}
                    aria-label="Abrir chat com AI"
                  >
                    Abrir chat com AI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand-block">
            <span className="footer-brand">
              <span className="brand-mark" aria-hidden="true">S</span>
              Synera
            </span>
            <p className="footer-tagline">Consultoria em Tecnologia</p>
          </div>
          <nav className="footer-nav" aria-label="Links do rodapé">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>{item.label}</a>
            ))}
          </nav>
          <p className="footer-copy">
            © {new Date().getFullYear()} Synera Consultoria em Tecnologia.<br />
            CNPJ 2.810.862/0001-69
          </p>
        </div>
      </footer>

      {/* ── Floating WhatsApp ── */}
      <a
        href={whatsappQuickHref}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <ChatBot isOpen={chatOpen} onClose={handleChatClose} />
    </div>
  );
}
