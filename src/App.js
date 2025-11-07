import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;