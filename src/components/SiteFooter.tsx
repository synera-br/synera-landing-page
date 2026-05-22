import { Link, useLocation } from "react-router-dom";

const navItems = [
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "treinamento", label: "Treinamento" },
  { id: "contato", label: "Contato" }
];

export function SiteFooter() {
  const isHome = useLocation().pathname === "/";

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand-block">
          <Link to="/" className="footer-brand">
            <span className="brand-mark" aria-hidden="true">
              S
            </span>
            Synera
          </Link>
          <p className="footer-tagline">Consultoria em Tecnologia</p>
        </div>
        <nav className="footer-nav" aria-label="Links do rodapé">
          {navItems.map((item) => (
            <a key={item.id} href={isHome ? `#${item.id}` : `/#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} Synera Consultoria em Tecnologia.
          <br />
          CNPJ 2.810.862/0001-69
        </p>
      </div>
    </footer>
  );
}
