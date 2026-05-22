import { Link, Navigate, useParams } from "react-router-dom";
import { getRelatedServices, getServiceBySlug } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";
import { buildServiceWhatsAppHref, whatsappQuickHref } from "../utils/whatsapp";

type ServiceDetailPageProps = {
  onOpenChat: () => void;
};

const tocItems = [
  { id: "problemas", label: "Problemas" },
  { id: "abordagem", label: "Abordagem" },
  { id: "resultados", label: "Resultados" },
  { id: "stack", label: "Stack e ferramentas" },
  { id: "contato", label: "Contato" }
];

export function ServiceDetailPage({ onOpenChat }: ServiceDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  usePageMeta({
    title: service?.seoTitle ?? "Serviço | Synera",
    description: service?.seoDescription ?? "Consultoria Synera em tecnologia e plataforma cloud-native."
  });

  if (!service) {
    return <Navigate to="/#servicos" replace />;
  }

  const related = getRelatedServices(service.relatedSlugs);
  const serviceWhatsApp = buildServiceWhatsAppHref(service.title);

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Caminho de navegação">
            <Link to="/">Início</Link>
            <span aria-hidden="true">/</span>
            <Link to="/#servicos">Serviços</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </nav>
          <h1>{service.title}</h1>
          <p className="service-hero-sub">{service.subtitle}</p>
          <ul className="card-tags service-hero-tags" aria-label="Focos do serviço">
            {service.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container service-layout">
        <aside className="service-toc" aria-label="Sumário da página">
          <p className="service-toc-title">Nesta página</p>
          <ul>
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
          <Link to="/#servicos" className="service-back-link">
            ← Voltar para serviços
          </Link>
        </aside>

        <div className="service-content">
          <section id="problemas" className="service-block">
            <h2>Problemas que resolvemos</h2>
            <ul className="service-list">
              {service.problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </section>

          <section id="abordagem" className="service-block">
            <h2>Como a Synera atua</h2>
            <div className="service-approach-grid">
              {service.approach.map((step) => (
                <article key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="resultados" className="service-block">
            <h2>Resultados esperados</h2>
            <ul className="service-list service-results">
              {service.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </section>

          <section id="stack" className="service-block">
            <h2>Stack e ferramentas</h2>
            <ul className="service-stack-tags">
              {service.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="service-logos" aria-label="Ferramentas e produtos utilizados">
              {service.logos.map((logo) => (
                <figure key={logo.name} className="service-logo-card">
                  <img src={logo.src} alt={logo.alt} width={160} height={40} loading="lazy" />
                  <figcaption>{logo.name}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <section className="service-block service-related">
              <h2>Serviços relacionados</h2>
              <ul className="service-related-list">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/servicos/${item.slug}`}>{item.title}</Link>
                    <p>{item.subtitle}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section id="contato" className="service-block service-cta-block">
            <h2>Fale com a Synera</h2>
            <p>
              Quer avançar com {service.title}? Escolha o canal mais conveniente — respondemos com foco
              técnico e alinhamento de escopo.
            </p>
            <div className="service-cta-actions">
              <a href={serviceWhatsApp} className="btn-primary" target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
              <button type="button" className="btn-ghost service-chat-btn" onClick={onOpenChat}>
                Abrir chat com AI
              </button>
              <a href={whatsappQuickHref} className="service-cta-secondary" target="_blank" rel="noopener noreferrer">
                Mensagem geral no WhatsApp
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
