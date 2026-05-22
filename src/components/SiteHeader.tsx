import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { whatsappQuickHref } from "../utils/whatsapp";

const navItems = [
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "treinamento", label: "Treinamento" },
  { id: "contato", label: "Contato" }
];

function navHref(id: string, isHome: boolean): string {
  return isHome ? `#${id}` : `/#${id}`;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav className="top-nav">
        <Link to="/" className="brand" aria-label="Synera — página inicial">
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <span>Synera</span>
        </Link>
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
              <a href={navHref(item.id, isHome)}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a href={whatsappQuickHref} className="nav-cta" target="_blank" rel="noopener noreferrer">
          Chamar no WhatsApp
        </a>
      </nav>
      <div id="mobile-nav" className={`mobile-nav${menuOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.id} href={navHref(item.id, isHome)} onClick={() => setMenuOpen(false)}>
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
  );
}
