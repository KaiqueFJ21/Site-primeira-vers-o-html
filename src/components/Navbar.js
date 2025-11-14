import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = (p) => (pathname === p ? 'active' : '');

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="container inner">
        <Link to="/" className="brand" onClick={handleLinkClick}>
          <div className="logo" />
          <span>GameLink</span>
        </Link>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navlinks ${open ? 'show' : ''}`}>
          <Link className={isActive('/')} to="/" onClick={handleLinkClick}>Home</Link>
          <Link className={isActive('/sobre')} to="/sobre" onClick={handleLinkClick}>Sobre</Link>
          <Link className={isActive('/servicos')} to="/servicos" onClick={handleLinkClick}>Serviços</Link>
          <Link className={isActive('/planos')} to="/planos" onClick={handleLinkClick}>Planos</Link>
          <Link className={isActive('/projetos')} to="/projetos" onClick={handleLinkClick}>Projetos</Link>
          <Link className={isActive('/contato')} to="/contato" onClick={handleLinkClick}>Contato</Link>
        </div>

        <Link to="/login" className="cta-btn" onClick={handleLinkClick}>Login</Link>
      </div>
    </nav>
  );
}
