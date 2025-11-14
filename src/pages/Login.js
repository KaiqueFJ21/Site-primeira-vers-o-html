import React, { useState } from 'react';

function Login() {
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      // TODO: chame sua API de autenticação aqui
      console.log('login:', data);
      // await api.login(data)
    } catch (err) {
      setError('Erro ao conectar com o servidor');
    }
  }

  return (
    <div className="container">
      <section className="section auth">
        <div className="card" style={{ padding: 22, width: 'min(520px, 92vw)', margin: '0 auto' }}>
          <h2 className="center" style={{ margin: 0 }}>
            <span className="gradient-text">Área Administrativa</span>
          </h2>

          <form className="form" onSubmit={handleSubmit} style={{ marginTop: 18 }} noValidate>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="voce@exemplo.com" />
            </div>

            <div className="field">
              <label htmlFor="senha">Senha</label>
              <input id="senha" name="senha" type="password" required placeholder="••••••••" />
            </div>

            {error && <div className="alert alert-error">{error}</div>}

            <button type="submit" className="cta-btn" style={{ width: '100%', marginTop: 10 }}>
              Entrar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;