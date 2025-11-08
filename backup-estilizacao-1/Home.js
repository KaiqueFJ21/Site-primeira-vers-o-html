import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home(){
  const [clients, setClients] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(()=>{
    fetch("/api/clientes").then(r=>r.json()).then(setClients).catch(()=>setClients([]));
    fetch("/api/planos").then(r=>r.json()).then(setPlans).catch(()=>setPlans([]));
  },[]);

  return (
    <div>
      {/* HERO */}
      <section className="section">
        <div className="container hero">
          <div>
            <div className="kicker">Bem-vindo ao Game Link</div>
            <h1>
              <span className="gradient-text">Transformando Estatísticas</span><br/> em gamificação
            </h1>
            <p>
              Crie um hub competitivo onde jogadores podem sincronizar contas de jogos, 
              competir em rankings, ganhar recompensas e apostar créditos — tudo dentro de uma comunidade engajada.
            </p>
            <div style={{marginTop:16, display:"flex", gap:12, flexWrap:"wrap"}}>
              <Link to="/planos" className="cta-btn">Conheça os planos</Link>
              <Link to="/projetos" className="cta-btn" style={{background:"rgba(255,255,255,.04)"}}>Ver recursos</Link>
            </div>
          </div>
          <div className="media card" style={{aspectRatio:"16/10"}}>
            <img alt="Jogadores usando dispositivos" src="https://picsum.photos/seed/gamelink-hero/960/540"/>
          </div>
        </div>
      </section>

      {/* FEATURES INTRO */}
      <section className="section">
        <div className="container">
          <h3>A Competição que Torna Cada Jogo Ainda Mais Divertido</h3>
          <p className="hint" style={{maxWidth:780}}>
            O GameLink transforma a experiência gamer ao adicionar um elemento extra de emoção e disciplina. 
            Com rankings dinâmicos, apostas com créditos e desafios de comunidade, seu progresso ganha sentido, energia e recompensas.
          </p>

          <div className="features" style={{marginTop:16}}>
            <div className="feature card">
              <div className="icon">V</div>
              <h4>Sincronização de Contas</h4>
              <p className="hint">Os jogadores conectam suas contas em diferentes plataformas e jogos.</p>
            </div>
            <div className="feature card">
              <div className="icon">#</div>
              <h4>Ranking & Estatísticas</h4>
              <p className="hint">A plataforma gera um mapa de desempenho baseado em dados de jogo.</p>
            </div>
            <div className="feature card">
              <div className="icon">∞</div>
              <h4>Comunidade & Desafios</h4>
              <p className="hint">Ami gos podem competir por temporadas, criar desafios e festas.</p>
            </div>
            <div className="feature card">
              <div className="icon">₵</div>
              <h4>Apostas com Créditos</h4>
              <p className="hint">Apostem créditos com estatísticas e limites saudáveis para partidas justas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT SECTION 1 */}
      <section className="section">
        <div className="container split">
          <div className="card media" style={{aspectRatio:"16/9"}}>
            <img alt="Neon games" src="https://picsum.photos/seed/gamelink-neon/900/500"/>
          </div>
          <div>
            <h4>Uma Experiência Emocionalmente Equilibrada e Motivadora</h4>
            <p className="hint">
              O GameLink foi projetado para proporcionar um ambiente competitivo saudável, garantindo que os jogadores se 
              sintam motivados, engajados e respeitados dentro da comunidade. A plataforma combina competição e diversão sem gerar frustrações desnecessárias.
            </p>
          </div>
        </div>
      </section>

      {/* SPLIT SECTION 2 */}
      <section className="section">
        <div className="container split">
          <div>
            <h4>Uma Experiência de Jogo Interessante e Inovadora</h4>
            <p className="hint">
              O GameLink é interessante porque oferece uma proposta única e dinâmica que encanta jogadores e criadores. 
              Com funcionalidades inovadoras como apostas em créditos, rankings interativos e desafios personalizados, cada aspecto foi pensado para criar uma experiência rica e envolvente.
            </p>
          </div>
          <div className="card media" style={{aspectRatio:"9/16", maxWidth:380, marginLeft:"auto"}}>
            <img alt="App preview" src="https://picsum.photos/seed/gamelink-app/540/960"/>
          </div>
        </div>
      </section>

      {/* CTA Plans */}
      <section id="planos" className="section">
        <div className="container center">
          <h3>Conheça nosso alcance e tire suas conclusões</h3>
          <p className="hint">Nossos planos para seu negócio</p>
          <div className="plans">
            {(plans.length?plans:[
              { id:1, nome:"Starter", preco:"R$ 0", desc:"Para explorar recursos básicos."},
              { id:2, nome:"Pro", preco:"R$ 29/mês", desc:"Para comunidades ativas."},
              { id:3, nome:"Enterprise", preco:"Fale conosco", desc:"Soluções personalizadas."},
            ]).map(p=>(
              <div key={p.id} className="plan card">
                <span className="badge">{p.nome}</span>
                <div className="price">{p.preco}</div>
                <p className="hint">{p.desc}</p>
                <Link className="cta-btn" to="/contato">Começar</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section">
        <div className="container center">
          <h3>Nossos clientes</h3>
          <div className="clients" style={{marginTop:16}}>
            {(clients.length?clients:[
              { id:1, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+A"},
              { id:2, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+B"},
              { id:3, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+C"},
              { id:4, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+D"},
              { id:5, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+E"},
            ]).map(c => (
              <img key={c.id} alt="logo" className="client-logo" src={c.logo} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}