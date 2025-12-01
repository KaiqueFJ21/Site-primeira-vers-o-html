import React, { useState } from "react";
import { config } from '../config/index.js';

export default function Contato(){
  const [status, setStatus] = useState(null);
  const [codigoContato, setCodigoContato] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      telefone: formData.get('telefone') || null,
      assunto: formData.get('assunto') || 'Contato via site',
      mensagem: formData.get('mensagem'),
      status: 'novo',
      data_criacao: new Date().toISOString()
    };

    setStatus("enviando");
    try {
      // URL da API
      const API_URL = 'https://site-primeira-vers-o-html-6xwm.vercel.app/api';
      console.log('Enviando dados para:', `${API_URL}/contato`);
      console.log('Dados:', data);
      
      const response = await fetch(`${API_URL}/contato`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data)
      });
      
      const responseData = await response.json();
      console.log('Resposta do servidor:', responseData);
      
      if (!response.ok) {
        throw new Error(responseData.error || 'Erro ao enviar mensagem');
      }

      setStatus("ok");
      setCodigoContato(responseData.codigo);
      e.currentTarget.reset();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      console.error('Detalhes do erro:', error.message);
      setStatus("erro");
      // Mostrar erro mais específico para o usuário
      alert(`Erro ao enviar mensagem: ${error.message}. Por favor, tente novamente ou entre em contato por outro meio.`);
    }
  };
  return (
    <section className="section">
      <div className="container">
        <h2>Contato</h2>
        <p className="hint">Fale com a equipe Game Link</p>
        <form onSubmit={onSubmit} className="card" style={{padding:18, maxWidth:560}}>
          <div style={{display:"grid", gap:12}}>
            <label>Nome<input required name="nome" style={inputStyle} /></label>
            <label>Email<input required name="email" type="email" style={inputStyle} /></label>
            <label>Telefone<input name="telefone" type="tel" style={inputStyle} /></label>
            <label>Assunto<input name="assunto" style={inputStyle} /></label>
            <label>Mensagem<textarea required name="mensagem" rows="5" style={inputStyle} /></label>
            <button className="cta-btn" type="submit">Enviar</button>
            {status === "ok" && (
              <div className="hint" style={{textAlign: 'center'}}>
                <div style={{
                  background: 'rgba(76, 175, 80, 0.1)',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(76, 175, 80, 0.2)',
                  marginTop: '20px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px'
                  }}>
                    <span style={{
                      background: '#4CAF50',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '10px'
                    }}>✓</span>
                    <p style={{
                      color: '#4CAF50',
                      fontSize: '1.1em',
                      margin: 0
                    }}>Mensagem enviada com sucesso!</p>
                  </div>
                  
                  {codigoContato && (
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '15px',
                      borderRadius: '8px',
                      marginTop: '15px'
                    }}>
                      <p style={{
                        fontSize: '0.9em',
                        color: '#666',
                        margin: '0 0 8px 0'
                      }}>Seu código de acompanhamento:</p>
                      
                      <div style={{
                        background: '#f5f5f5',
                        padding: '12px',
                        borderRadius: '6px',
                        border: '1px dashed #4CAF50',
                        marginBottom: '10px'
                      }}>
                        <strong style={{
                          fontSize: '1.4em',
                          letterSpacing: '2px',
                          color: '#2E7D32',
                          fontFamily: 'monospace'
                        }}>{codigoContato}</strong>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        marginTop: '10px',
                        fontSize: '0.9em',
                        color: '#666'
                      }}>
                        <span>📋 Guarde este código para consultas futuras</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {status === "erro" && <span className="hint">Não foi possível enviar agora. ❌</span>}
          </div>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  width:"100%", marginTop:6, padding:"12px 14px",
  borderRadius:12, border:"1px solid rgba(255,255,255,.18)",
  background:"rgba(255,255,255,.06)", color:"#fff", outline:"none"
};