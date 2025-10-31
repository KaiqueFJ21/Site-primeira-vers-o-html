import React, { useState } from 'react';
import '../styles/Contato.css';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');
  const [codigoUnico, setCodigoUnico] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    // Mock local: sem servidor
    const codigo = 'CT-' + Date.now().toString(36).toUpperCase();
    setCodigoUnico(codigo);
    setEnviado(true);
    setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
  };

  return (
    <div className="contato-container">
      <h1>Entre em Contato</h1>

      {enviado && (
        <div className="mensagem-sucesso">
          <div className="sucesso-icone">✓</div>
          <h2>Mensagem registrada (offline)</h2>
          <p>Seu código de protocolo é:</p>
          <div className="codigo-container">
            <span className="codigo-unico">{codigoUnico}</span>
          </div>
          <p className="codigo-instrucao">📋 Guarde este código. Não há envio ao servidor.</p>
        </div>
      )}

      {erro && <div className="mensagem-erro">{erro}</div>}

      {!enviado && (
        <form onSubmit={handleSubmit} className="contato-form">
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="assunto">Assunto:</label>
            <input id="assunto" name="assunto" value={formData.assunto} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5" value={formData.mensagem} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn-enviar">Enviar</button>
        </form>
      )}
    </div>
  );
}

export default Contato;