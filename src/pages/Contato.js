import React, { useState } from 'react';

function Contato() {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault(); // evita tela branca (reload)
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    console.log('Contato:', payload);
    setStatus('ok'); // simula envio; troque por sua chamada de API
  }

  return (
    <div className="container">
      <section className="section split">
        <div>
          <p className="kicker">Fale com a gente</p>
          <h1><span className="gradient-text">Contato</span></h1>
          <p className="muted">Dúvidas, propostas ou parcerias. Retornamos em até 24h úteis.</p>

          <div style={{ marginTop: 16 }}>
            <div className="badge">suporte@gamelink.app</div>
          </div>
        </div>

        <div className="card" style={{ padding: 18 }}>
          {status === 'ok' ? (
            <div className="center">
              <h3>Mensagem enviada!</h3>
              <p className="muted">Obrigado pelo contato. Em breve retornaremos.</p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="nome" type="text" required placeholder="Seu nome completo" />
              </div>

              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" required placeholder="voce@exemplo.com" />
              </div>

              <div className="field">
                <label htmlFor="assunto">Assunto</label>
                <input id="assunto" name="assunto" type="text" placeholder="Assunto da mensagem" />
              </div>

              <div className="field">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows="5" required placeholder="Escreva aqui..."></textarea>
              </div>

              <button type="submit" className="cta-btn">Enviar</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contato;