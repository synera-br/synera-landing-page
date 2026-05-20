import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

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
    icon: "⎈",
    tag: "Infra",
    title: "Kubernetes & Platform Engineering",
    description:
      "Arquitetura cloud-native, operadores customizados, gestão multi-cluster e práticas de plataforma para times de alta performance."
  },
  {
    icon: "⚡",
    tag: "CI/CD",
    title: "Pipelines & Automação",
    description:
      "Implementação de pipelines com ArgoCD, GitHub Actions, Azure DevOps, Argo Workflows e Temporal.io para entregas contínuas e confiáveis."
  },
  {
    icon: "🏗️",
    tag: "IDP",
    title: "Internal Developer Platform",
    description:
      "Desenvolvimento de IDP com Backstage: portais de desenvolvedor, catálogos de serviços, templates e self-service para times de engenharia."
  },
  {
    icon: "🔧",
    tag: "IaC",
    title: "Infraestrutura como Código",
    description:
      "Automação de infraestrutura com Ansible, Terraform e Crossplane. Provisioning declarativo, drift-free e pronto para GitOps."
  },
  {
    icon: "🐹",
    tag: "Dev",
    title: "Desenvolvimento em Golang",
    description:
      "Engenharia de software em Go para ferramentas cloud-native, operadores Kubernetes, APIs de alta performance e integrações de plataforma."
  },
  {
    icon: "🤖",
    tag: "AI",
    title: "AI Enablement & DevOps",
    description:
      "Consultoria de DevOps com foco em maturidade de engenharia e criação de stacks de desenvolvimento assistidas por AI."
  }
];

const trainingCourses = [
  {
    level: "Fundamentos",
    title: "Kubernetes do básico ao avançado",
    topics: ["Arquitetura e componentes", "Workloads e networking", "Helm e GitOps", "Segurança e RBAC"]
  },
  {
    level: "Prático",
    title: "Platform Engineering com Backstage",
    topics: ["Conceitos de IDP", "Plugins e catálogos", "Templates Scaffolder", "Integração com CI/CD"]
  },
  {
    level: "Avançado",
    title: "GitOps & CI/CD Moderno",
    topics: ["ArgoCD e Flux", "GitHub Actions avançado", "Argo Workflows", "Estratégias de deploy"]
  },
  {
    level: "Prático",
    title: "IaC & Automação de Infraestrutura",
    topics: ["Terraform avançado", "Ansible para DevOps", "Crossplane e XR", "Cloud providers"]
  }
];

const techStack = [
  "Kubernetes", "ArgoCD", "Backstage", "Terraform", "Ansible",
  "Crossplane", "Golang", "GitHub Actions", "Temporal.io", "Helm"
];

export function App() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
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

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <nav className="top-nav">
          <a href="#" className="brand" aria-label="Synera — página inicial">
            <span className="brand-mark" aria-hidden="true">S</span>
            <span>Synera</span>
          </a>
          <ul className="nav-links" role="list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contato" className="nav-cta">Fale conosco</a>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="mobile-overlay" aria-hidden="true" onClick={closeMenu} />
      )}
      <div
        ref={menuRef}
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-label="Menu de navegação"
      >
        <ul role="list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>
            </li>
          ))}
          <li>
            <a href="#contato" className="mobile-menu-cta" onClick={closeMenu}>
              Fale conosco
            </a>
          </li>
        </ul>
      </div>

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Consultoria em Tecnologia</p>
          <h1>
            Engenharia de plataforma e<br />
            <span className="hero-highlight">DevOps em constante evolução</span>
          </h1>
          <p className="hero-sub">
            Ajudamos times e empresas a construir plataformas robustas, automatizar
            fluxos e evoluir com segurança rumo à maturidade cloud-native —
            com Kubernetes, Backstage, Golang e automação de ponta a ponta.
          </p>
          <div className="hero-actions">
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá, equipe Synera! Gostaria de saber mais sobre os serviços.")}`}
              className="btn-primary btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.428a.5.5 0 0 0 .623.599l5.737-1.506A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.181-1.351l-.371-.214-3.852 1.011 1.029-3.741-.232-.384A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Falar no WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost">Explorar serviços</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-blob" />
        </div>
      </section>

      <div className="trust-bar">
        <div className="container">
          <p className="trust-bar-label">Stack de tecnologia</p>
          <ul className="trust-tags" role="list">
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>

      <main>
        <section id="sobre" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Quem somos</span>
              <h2>Sobre a Synera</h2>
              <p className="section-lead">
                Uma consultoria brasileira com mais de uma década de experiência
                entregando valor real através de tecnologia — desde a KubeCon até o chão de fábrica.
              </p>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Fundada em novembro de 2010, a Synera nasceu da convicção de que tecnologia
                  bem aplicada transforma negócios. O nome une <em>synchronize</em> e <em>era</em>:
                  uma empresa em constante evolução para atender seus clientes com o que há de mais
                  moderno em engenharia de software e plataforma.
                </p>
                <p>
                  Atuamos de forma próxima, entendendo os desafios reais de cada cliente antes
                  de propor qualquer solução — com presença em eventos globais como a KubeCon
                  e atuação no mercado brasileiro.
                </p>
              </div>
              <ul className="about-highlights" role="list">
                <li>
                  <strong>+15 anos</strong>
                  <span>de atuação em tecnologia</span>
                </li>
                <li>
                  <strong>Cloud-native</strong>
                  <span>do conceito à produção</span>
                </li>
                <li>
                  <strong>Foco em resultado</strong>
                  <span>pragmatismo e entrega</span>
                </li>
                <li>
                  <strong>Parceria real</strong>
                  <span>presença contínua nos projetos</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="servicos" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">O que fazemos</span>
              <h2>Serviços</h2>
              <p className="section-lead">
                Soluções especializadas para acelerar sua jornada cloud-native e
                elevar a maturidade de engenharia do seu time.
              </p>
            </div>
            <div className="cards" role="list">
              {services.map((s) => (
                <article key={s.title} className="card" role="listitem">
                  <div className="card-header">
                    <span className="card-icon" aria-hidden="true">{s.icon}</span>
                    <span className="card-tag">{s.tag}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <a href="#contato" className="card-link" aria-label={`Saiba mais sobre ${s.title}`}>
                    Saiba mais →
                  </a>
                </article>
              ))}
            </div>
            <div className="section-cta">
              <a href="#contato" className="btn-primary">Falar sobre um projeto</a>
            </div>
          </div>
        </section>

        <section id="treinamento" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Capacitação</span>
              <h2>Treinamento In-Company</h2>
              <p className="section-lead">
                Capacitações customizadas para levar seu time ao próximo nível em
                engenharia de plataforma e DevOps — no contexto real da sua empresa.
              </p>
            </div>
            <div className="training-intro">
              <p>
                Nossos treinamentos in-company são desenhados sob medida para o
                contexto da sua empresa. Partimos da realidade do time, identificamos
                lacunas e entregamos um programa prático, com exercícios reais e
                mentoria contínua. Cada turma tem acompanhamento pós-treinamento
                para garantir absorção e aplicação do conhecimento.
              </p>
              <a href="#contato" className="btn-primary">Solicitar treinamento</a>
            </div>
            <div className="training-courses">
              {trainingCourses.map((course) => (
                <article key={course.title} className="training-card">
                  <span className="training-level">{course.level}</span>
                  <h3>{course.title}</h3>
                  <ul role="list">
                    {course.topics.map((topic) => (
                      <li key={topic}>
                        <span className="topic-check" aria-hidden="true">✓</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Vamos conversar</span>
              <h2>Contato</h2>
              <p className="section-lead">
                Pronto para transformar sua plataforma? Escolha a melhor forma de
                falar com a Synera.
              </p>
            </div>
            <div className="contact-layout">
              <div className="contact-form-wrap">
                <form onSubmit={onSubmit} noValidate>
                  <h3>Envie uma mensagem</h3>
                  <div className="form-row">
                    <label>
                      Nome*
                      <input
                        value={form.nome}
                        placeholder="Seu nome completo"
                        onChange={(e) => setForm((v) => ({ ...v, nome: e.target.value }))}
                        aria-required="true"
                        aria-describedby={errors.nome ? "error-nome" : undefined}
                      />
                      {errors.nome && <small id="error-nome" role="alert">{errors.nome}</small>}
                    </label>
                    <label>
                      Empresa
                      <input
                        value={form.empresa}
                        placeholder="Nome da empresa (opcional)"
                        onChange={(e) => setForm((v) => ({ ...v, empresa: e.target.value }))}
                      />
                    </label>
                  </div>
                  <label>
                    Email*
                    <input
                      type="email"
                      value={form.email}
                      placeholder="seu@email.com"
                      onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                      aria-required="true"
                      aria-describedby={errors.email ? "error-email" : undefined}
                    />
                    {errors.email && <small id="error-email" role="alert">{errors.email}</small>}
                  </label>
                  <label>
                    Mensagem*
                    <textarea
                      rows={4}
                      value={form.mensagem}
                      placeholder="Descreva seu projeto ou necessidade..."
                      onChange={(e) => setForm((v) => ({ ...v, mensagem: e.target.value }))}
                      aria-required="true"
                      aria-describedby={errors.mensagem ? "error-mensagem" : undefined}
                    />
                    {errors.mensagem && <small id="error-mensagem" role="alert">{errors.mensagem}</small>}
                  </label>
                  <button type="submit" className="btn-submit-whatsapp">
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.428a.5.5 0 0 0 .623.599l5.737-1.506A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.181-1.351l-.371-.214-3.852 1.011 1.029-3.741-.232-.384A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Enviar via WhatsApp
                  </button>
                </form>
              </div>

              <div className="contact-side">
                <div className="whatsapp-direct-card">
                  <div className="contact-card-icon whatsapp-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.428a.5.5 0 0 0 .623.599l5.737-1.506A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.181-1.351l-.371-.214-3.852 1.011 1.029-3.741-.232-.384A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  </div>
                  <h3>WhatsApp direto</h3>
                  <p>
                    Fale diretamente com nossa equipe pelo WhatsApp. Resposta
                    rápida para projetos, orçamentos e dúvidas.
                  </p>
                  <a
                    href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá, equipe Synera! Gostaria de saber mais sobre os serviços.")}`}
                    className="btn-whatsapp-card"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir WhatsApp"
                  >
                    Abrir WhatsApp
                  </a>
                </div>

                <div className="chat-card">
                  <div className="contact-card-icon ai-icon" aria-hidden="true">✦</div>
                  <h3>Fale com AI</h3>
                  <p>
                    Explore um atendimento assistido por AI para conversar sobre
                    desafios de plataforma, DevOps e modernização. Disponível a
                    qualquer hora.
                  </p>
                  <a href="#" aria-label="Abrir chat com AI" className="btn-ai-chat">
                    Iniciar conversa com AI →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand-wrap">
            <span className="footer-brand">
              <span className="brand-mark" aria-hidden="true">S</span>
              Synera
            </span>
            <p className="footer-tagline">Consultoria em Tecnologia</p>
          </div>
          <nav className="footer-nav" aria-label="Navegação do rodapé">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>{item.label}</a>
            ))}
          </nav>
          <p className="footer-copy">
            © {new Date().getFullYear()} Synera Consultoria em Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
