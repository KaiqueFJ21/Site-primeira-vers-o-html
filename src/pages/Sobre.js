import React from "react";

export default function Sobre(){
  return (
    <section className="section">
      <div className="container">
        <h2>Sobre</h2>
        <p className="hint" style={{maxWidth:800}}>
          O Game Link é um projeto acadêmico que simula uma plataforma de gamificação para jogadores,
          com foco em integração de dados, ranking, desafios e um sistema de créditos para apostas responsáveis.
          Este site é uma SPA feita em React com rotas via react-router, estilizada para lembrar a estética neon/roxa da proposta visual.
        </p>

        <hr className="sep" />
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:24}}>
          <div className="card" style={{padding:18}}>
            <h4>Missão</h4>
            <p className="hint">Tornar a evolução dos jogadores clara, divertida e segura.</p>
          </div>
          <div className="card" style={{padding:18}}>
            <h4>Visão</h4>
            <p className="hint">Ser a referência em comunidade competitiva saudável.</p>
          </div>
        </div>
      </div>
    </section>
  );
}