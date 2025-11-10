import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();
  const active = (p) => pathname === p ? { opacity: 1, fontWeight: 700 } : {};

  return (
    <nav className="navbar">
      <div className="container inner">
        <Link to="/" className="brand">
          <div className="logo"></div>
          <span>GameLink</span>
        </Link>
        <div className="navlinks">
          <Link style={active('/')} to="/">Home</Link>
          <Link style={active('/sobre')} to="/sobre">Sobre</Link>
          <Link style={active('/servicos')} to="/servicos">Serviços</Link>
          <Link style={active('/planos')} to="/planos">Planos</Link>
          <Link style={active('/projetos')} to="/projetos">Projetos</Link>
          <Link style={active('/contato')} to="/contato">Contato</Link>
        </div>
        <Link to="/login" className="cta-btn">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;