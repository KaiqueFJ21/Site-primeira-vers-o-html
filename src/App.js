import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Sobre from "./pages/Sobre.js";
import Contato from "./pages/Contato.js";
import Projetos from "./pages/Projetos.js";
import Planos from "./pages/Planos.js";

export default function App() {
  return (
    <div className="app">
      <div className="bg-decor">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="rings" />
      </div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}