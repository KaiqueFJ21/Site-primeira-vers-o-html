import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Planos from './pages/Planos';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './styles/global.css';

function App() {
  console.log('App montado, rota atual:', window.location.pathname);
  return (
    <div className="app">
      <div className="bg-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="rings"></div>
      </div>

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<div className="container"><h2>404</h2><p className="muted">Página não encontrada.</p></div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;