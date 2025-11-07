import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/services';
import Planos from './pages/Planos';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">GameLink</Link>
            <div className="nav-menu">
              <Link to="/">Home</Link>
              <Link to="/sobre">Sobre</Link>
              <Link to="/servicos">Serviços</Link>
              <Link to="/planos">Planos</Link>
              <Link to="/projetos">Projetos</Link>
              <Link to="/contato">Contato</Link>
              <Link to="/login" className="nav-login">Login</Link>
            </div>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={
              <div style={{ padding: '50px', textAlign: 'center' }}>
                <h1>404 - Página não encontrada</h1>
                <Link to="/">Voltar para Home</Link>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;