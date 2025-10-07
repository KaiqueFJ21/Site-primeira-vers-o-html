import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div style={{display:"flex", gap:24, justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
          <div className="brand">
            <span className="logo" aria-hidden="true" />
            <strong>Game Link</strong>
          </div>
          <nav className="hint" style={{display:"flex", gap:16}}>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/planos">Planos</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </div>
        <hr className="sep" />
        <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8}}>
          <small>© {new Date().getFullYear()} Game Link. Todos os direitos reservados.</small>
          <small>Feito com ❤️ em React + Node.</small>
        </div>
      </div>
    </footer>
  );
}