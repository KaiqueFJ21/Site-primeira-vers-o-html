import React from "react";

export default function Sobre(){
  return (
    <section className="section">
      <div className="container">
        <h2>Sobre</h2>

        <p className="hint" style={{maxWidth:900}}>
          O Game Link é um projeto acadêmico/experimental que simula uma plataforma de gamificação
          para jogadores. O objetivo é demonstrar integração entre frontend em React e um backend em Node.js,
          com persistência em MySQL, além de implementações simples de rotas, formulários e autenticação futura.
        </p>

        <hr className="sep" />

        <div style={{display:"grid", gap:20}}>
          <div className="card" style={{padding:18}}>
            <h4>Resumo do Projeto</h4>
            <p className="hint">O site reúne funcionalidades como:</p>
            <ul>
              <li>Cadastro e listagem de projetos e contatos</li>
              <li>Sistema de ranking e métricas (protótipo)</li>
              <li>Formulários integrados ao backend e armazenamento em MySQL</li>
              <li>Deploy contínuo através do Vercel</li>
            </ul>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16}}>
            <div className="card" style={{padding:18}}>
              <h4>Tecnologias</h4>
              <p className="hint">Principais tecnologias usadas:</p>
              <ul>
                <li>React (SPA)</li>
                <li>Webpack / Babel</li>
                <li>Node.js + Express (API)</li>
                <li>MySQL (mysql2)</li>
                <li>Vercel (deploy contínuo)</li>
              </ul>
            </div>

            <div className="card" style={{padding:18}}>
              <h4>Arquitetura & Deploy</h4>
              <p className="hint">Arquitetura resumida:</p>
              <p className="hint">Frontend: SPA em React empacotada com Webpack.<br />Backend: API em Express que expõe rotas em `/api`.<br />Banco: MySQL (hospedado no provedor configurado).</p>
              <p className="hint">Deploy automático: commits no repositório vinculados ao Vercel atualizam o domínio <strong>site-primeira-vers-o-html-6xwm.vercel.app</strong>.</p>
            </div>
          </div>

          <div className="card" style={{padding:18}}>
            <h4>Banco de dados</h4>
            <p className="hint">O projeto usa MySQL. No deploy atual o banco configurado é hospedado em <code>sql303.infinityfree.com</code>
              e o nome do banco é <code>if0_40270616_gamelink</code>. As credenciais ficam em variáveis de ambiente e não devem
              ser versionadas.</p>
          </div>

          <div className="card" style={{padding:18}}>
            <h4>Como executar localmente</h4>
            <p className="hint">Passos rápidos:</p>
            <ol>
              <li>Clonar o repositório</li>
              <li>Criar um arquivo `.env` com as variáveis de banco e servidor</li>
              <li>Instalar dependências: <code>npm install</code></li>
              <li>Rodar em desenvolvimento: <code>npm run dev</code> (inicia backend + frontend)</li>
              <li>Testar a rota de conexão: <code>/api/db-test</code></li>
            </ol>
          </div>

          <div className="card" style={{padding:18}}>
            <h4>Como contribuir</h4>
            <p className="hint">Contribuições podem ser feitas via PR ou enviando issues. Sugestões úteis:</p>
            <ul>
              <li>Adicionar testes unitários para as rotas</li>
              <li>Implementar autenticação segura (JWT / sessions)</li>
              <li>Melhorar validação dos formulários e tratamento de erros</li>
            </ul>
          </div>

          <div className="card" style={{padding:18}}>
            <h4>Contato</h4>
            <p className="hint">Para dúvidas ou suporte, abra uma issue no repositório ou entre em contato pelo formulário de contato do site.</p>
          </div>
        </div>
      </div>
    </section>
  );
}