import React, { useState } from 'react';
import '../styles/Contato.css';
import config from '../config.js';  // Adiciona .js aqui

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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    
    console.log('Tentando enviar para:', `${config.API_URL}/contato`);
    console.log('Dados:', formData);
    
    try {
      const response = await fetch(`${config.API_URL}/contato`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Status da resposta:', response.status);
      const data = await response.json();
      console.log('Resposta da API:', data);

      if (response.ok) {
        setEnviado(true);
        setCodigoUnico(data.codigo || data.codigo_unico);
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        });
      } else {
        setErro(data.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setErro('Erro ao conectar com o servidor');
    }
  };

  return (
    <div className="contato-container">
      <h1>Entre em Contato</h1>
      
      {enviado && (
        <div className="mensagem-sucesso">
          <div className="sucesso-icone">✓</div>
          <h2>Mensagem enviada com sucesso!</h2>
          <p>Seu código de protocolo é:</p>
          <div className="codigo-container">
            <span className="codigo-unico">{codigoUnico}</span>
          </div>
          <p className="codigo-instrucao">
            📋 Guarde este código para acompanhar sua solicitação
          </p>
        </div>
      )}

      {erro && (
        <div className="mensagem-erro">
          {erro}
        </div>
      )}

      {!enviado && (
        <form onSubmit={handleSubmit} className="contato-form">
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="assunto">Assunto:</label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="btn-enviar">Enviar</button>
        </form>
      )}
    </div>
  );
}

export default Contato;