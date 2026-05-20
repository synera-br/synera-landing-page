import { FormEvent, useMemo, useState } from "react";

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
  { id: "servicos", label: "Servicos" },
  { id: "treinamento", label: "Treinamento" },
  { id: "contato", label: "Contato" }
];

export function App() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

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

  return (
    <div>
      <header className="hero">
        <nav className="top-nav">
          <div className="brand">Synera</div>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hero-content">
          <p>Consultoria em Tecnologia</p>
          <h1>Engenharia de plataforma e DevOps em constante evolucao</h1>
        </div>
      </header>

      <main>
        <section id="sobre" className="section">
          <h2>Sobre</h2>
          <p>
            A Synera e uma consultoria brasileira fundada em 2010, com foco em
            tecnologia, automacao e evolucao continua para gerar valor real para
            os clientes.
          </p>
        </section>

        <section id="servicos" className="section alt">
          <h2>Servicos</h2>
          <div className="cards">
            <article>
              <h3>Kubernetes e Platform Engineering</h3>
              <p>
                Consultoria em arquitetura cloud-native, operadores Kubernetes,
                IDP com Backstage e praticas de plataforma.
              </p>
            </article>
            <article>
              <h3>Pipelines e Automacao</h3>
              <p>
                Implementacao de pipelines com ArgoCD, GitHub Actions, Azure
                DevOps, Argo Workflows e Temporal.
              </p>
            </article>
            <article>
              <h3>Infraestrutura como Codigo e AI Enablement</h3>
              <p>
                Automacao com Ansible, Terraform e Crossplane, alem de apoio
                para evolucao de stacks de desenvolvimento com AI.
              </p>
            </article>
          </div>
        </section>

        <section id="treinamento" className="section">
          <h2>Treinamento</h2>
          <p>
            Treinamentos in-company personalizados para Kubernetes, pipelines,
            DevOps e engenharia de plataforma, com foco em ganho pratico.
          </p>
        </section>

        <section id="contato" className="section alt">
          <h2>Contato</h2>
          <div className="contact-layout">
            <form onSubmit={onSubmit} noValidate>
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

            <div className="chat-card">
              <h3>Fale com AI</h3>
              <p>
                Explore um atendimento assistido por AI para conversar sobre
                desafios de plataforma, DevOps e modernizacao.
              </p>
              <a href="#" aria-label="Abrir chat com AI">
                Iniciar conversa com AI
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
