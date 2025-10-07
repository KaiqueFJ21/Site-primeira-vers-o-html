import React, { useEffect, useState } from "react";

export default function Planos(){
  const [plans, setPlans] = useState([]);
  useEffect(()=>{ fetch("/api/planos").then(r=>r.json()).then(setPlans).catch(()=>{}); },[]);

  return (
    <section className="section">
      <div className="container">
        <h2>Planos</h2>
        <p className="hint">Escolha um plano que evolui com a sua comunidade</p>
        <div className="plans">
          {(plans.length?plans:[
            { id:1, nome:"Starter", preco:"R$ 0", desc:"Recursos básicos para testar."},
            { id:2, nome:"Pro", preco:"R$ 29/mês", desc:"Para comunidades com eventos."},
            { id:3, nome:"Enterprise", preco:"Fale conosco", desc:"Soluções customizadas e SLA."},
          ]).map(p=>(
            <div key={p.id} className="plan card">
              <span className="badge">{p.nome}</span>
              <div className="price">{p.preco}</div>
              <p className="hint">{p.desc}</p>
              <a className="cta-btn" href="/contato">Assinar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}