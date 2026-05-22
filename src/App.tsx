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
    icon: "⎈",
    title: "Kubernetes e Platform Engineering",
    description:
      "Arquitetura cloud-native, operadores Kubernetes, IDP com Backstage e práticas de plataforma para times de alta performance."
  },
  {
    icon: "⚡",
    title: "Pipelines e Automação",
    description:
      "Implementação de pipelines com ArgoCD, GitHub Actions, Azure DevOps, Argo Workflows e Temporal para entregas contínuas."
  },
  {
    icon: "🤖",
    title: "IaC e AI Enablement",
    description:
      "Automação com Ansible, Terraform e Crossplane, além de apoio para evolução de stacks de desenvolvimento com AI."
  }
];

const trainingTopics = [
  "Kubernetes — do básico ao avançado",
  "Platform Engineering com Backstage",
  "GitOps com ArgoCD",
  "Pipelines e CI/CD moderno",
  "Infraestrutura como Código",
  "DevOps e cultura de engenharia"
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
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <nav className="top-nav">
          <a href="#" className="brand" aria-label="Synera — página inicial">
            <span className="brand-mark" aria-hidden="true">S</span>
            <span>Synera</span>
          </a>
          <button
            className={`menu-toggle${menuOpen ? " open" : ""}`}
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
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

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Consultoria em Tecnologia</p>
          <h1>Engenharia de plataforma e DevOps em constante evolução</h1>
          <p className="hero-sub">
            Ajudamos times e empresas a construir plataformas robustas, automatizar
            fluxos e evoluir com segurança rumo à maturidade cloud-native.
          </p>
          <div className="hero-actions">
            <a href={whatsappQuickHref} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Chamar no WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost">Ver serviços</a>
          </div>
        </div>
      </section>

      <main>
        <section id="sobre" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Sobre a Synera</h2>
              <p className="section-lead">
                Uma consultoria brasileira com mais de uma década de experiência
                entregando valor real através de tecnologia.
              </p>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Fundada em 2010, a Synera nasceu da convicção de que tecnologia
                  bem aplicada transforma negócios. Ao longo dos anos, construímos
                  expertise sólida em engenharia de plataforma, automação e DevOps
                  — áreas que continuam evoluindo e que exigem parceiros que pensam
                  junto com os times.
                </p>
                <p>
                  Atuamos de forma próxima, entendendo os desafios reais de cada
                  cliente antes de propor qualquer solução.
                </p>
              </div>
              <ul className="about-highlights">
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
              <h2>Serviços</h2>
              <p className="section-lead">
                Soluções especializadas para acelerar sua jornada cloud-native
                e elevar a maturidade de engenharia do seu time.
              </p>
            </div>
            <div className="cards">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <span className="card-icon" aria-hidden="true">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="treinamento" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Treinamento</h2>
              <p className="section-lead">
                Capacitações in-company customizadas para levar seu time ao próximo
                nível em engenharia de plataforma e DevOps.
              </p>
            </div>
            <div className="training-layout">
              <div className="training-text">
                <p>
                  Nossos treinamentos in-company são desenhados sob medida para o
                  contexto da sua empresa. Partimos da realidade do time, identificamos
                  lacunas e entregamos um programa prático, com exercícios reais e
                  mentoria contínua.
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

        <section id="contato" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>Contato</h2>
              <p className="section-lead">
                Pronto para transformar sua plataforma? Escolha a melhor forma de
                falar com a gente.
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
                <button type="submit">Enviar mensagem no WhatsApp</button>
              </form>

              <div className="contact-sidecards">
                <div className="whatsapp-card">
                  <div className="whatsapp-card-icon" aria-hidden="true">💬</div>
                  <h3>WhatsApp direto</h3>
                  <p>
                    Quer resposta rápida? Fale agora com a Synera no WhatsApp e acelere
                    a conversa sobre seu desafio.
                  </p>
                  <a href={whatsappQuickHref} target="_blank" rel="noopener noreferrer">
                    Abrir WhatsApp agora
                  </a>
                </div>
                <div className="chat-card">
                  <div className="chat-card-icon" aria-hidden="true">✦</div>
                  <h3>Fale com AI</h3>
                  <p>
                    Converse agora com nosso assistente AI sobre desafios de
                    plataforma, Kubernetes, DevOps e modernização. Atendimento
                    imediato, 24 horas.
                  </p>
                  <button
                    type="button"
                    className="chat-card-btn"
                    onClick={() => setChatOpen(true)}
                    aria-label="Abrir chat com assistente AI da Synera"
                  >
                    ✦ Iniciar conversa com AI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-brand">Synera</span>
          <p>
            © {new Date().getFullYear()} Synera Consultoria em Tecnologia.
            Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <ChatBot isOpen={chatOpen} onClose={handleChatClose} />
    </div>
  );
}
