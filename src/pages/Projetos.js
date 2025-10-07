import React from "react";

const recursos = [
  {t:"Perfis sincronizados", d:"Conecte diversas contas de jogos para centralizar estatísticas."},
  {t:"Ranking global e por amigos", d:"Classificações diferentes para competitividade saudável."},
  {t:"Desafios semanais", d:"Missões e objetivos com recompensas de créditos."},
  {t:"Apostas responsáveis", d:"Créditos de plataforma com limites e ferramentas anti-abuso."},
  {t:"Aplicativo mobile e web", d:"Acesso em múltiplos dispositivos."},
];

export default function Projetos(){
  return (
    <section className="section">
      <div className="container">
        <h2>Projetos & Recursos</h2>
        <p className="hint">Um conjunto de funcionalidades para sua comunidade</p>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:18}}>
          {recursos.map((r,i)=>(
            <div className="card" key={i} style={{padding:18}}>
              <span className="badge">{r.t}</span>
              <p className="hint" style={{marginTop:10}}>{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}