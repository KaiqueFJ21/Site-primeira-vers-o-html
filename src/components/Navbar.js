import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
  const nav = [
    { to: "/", label: "Home" },
    { to: "/sobre", label: "Sobre" },
    { to: "/projetos", label: "Projetos" },
    { to: "/planos", label: "Planos" },
    { to: "/contato", label: "Contato" },
  ];
  return (
    <header className="navbar">
      <div className="container inner">
        <Link className="brand" to="/">
          <span className="logo" aria-hidden="true" />
          <span>Game Link</span>
        </Link>
        <nav className="navlinks">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end style={({isActive})=>({opacity:isActive?1:.8})}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <a href="#planos" className="cta-btn">Experimentar</a>
      </div>
    </header>
  );
}