import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();
  const isActive = (p) => pathname === p;

  return (
    <nav className="navbar">
      <div className="container inner">
        <Link to="/" className="brand">
          <div className="logo"></div>
          <span>GameLink</span>
        </Link>

        <div className="navlinks">
          <Link className={isActive('/') ? 'active' : ''} to="/">Home</Link>
          <Link className={isActive('/sobre') ? 'active' : ''} to="/sobre">Sobre</Link>
          <Link className={isActive('/servicos') ? 'active' : ''} to="/servicos">Serviços</Link>
          <Link className={isActive('/planos') ? 'active' : ''} to="/planos">Planos</Link>
          <Link className={isActive('/projetos') ? 'active' : ''} to="/projetos">Projetos</Link>
          <Link className={isActive('/contato') ? 'active' : ''} to="/contato">Contato</Link>
        </div>

        <Link to="/login" className="cta-btn">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;