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
      {/* HERO — AGORA É O PRIMEIRO BLOCO */}
      <section className="section">
        <div className="container hero">
          <div>
            <div className="kicker">Bem-vindo ao Game Link</div>
            <h1>
              <span className="gradient-text">A Competição que Torna o</span><br/> Jogo Ainda Mais Divertido
            </h1>
            <p>
              Crie um hub competitivo onde jogadores podem sincronizar contas de jogos, 
              competir em rankings, ganhar recompensas e apostar créditos — tudo dentro de uma comunidade engajada.
            </p>
            <div style={{marginTop:16, display:"flex", gap:12, flexWrap:"wrap"}}>
              <Link to="/planos" className="cta-btn">Conheça os planos</Link>
              <Link to="/projetos" className="cta-btn" style={{background:"rgba(255,255,255,.08)"}}>Ver recursos</Link>
            </div>
          </div>
          <div className="media card" style={{aspectRatio:"16/10"}}>
            <img
              alt="Controle de videogame iluminado em cenário gamer"
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
              loading="lazy"
              decoding="async"
              style={{width:"100%",height:"100%",objectFit:"cover"}}
            />
          </div>
        </div>
      </section>

      {/* FEATURES INTRO — DEPOIS DO HERO */}
      <section className="section">
        <div className="container">
          <h3>Transformando Estatísticas em gamificação</h3>
          <p className="hint" style={{maxWidth:780}}>
            O GameLink transforma a experiência gamer ao adicionar um elemento extra de emoção e disciplina. 
            Com rankings dinâmicos, apostas com créditos e desafios de comunidade, seu progresso ganha sentido, energia e recompensas.
          </p>

          <div className="features" style={{
            marginTop:16,
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",
            gap:16
          }}>
            <div className="feature card">
              <div className="icon" aria-hidden="true">V</div>
              <h4>Sincronização de Contas</h4>
              <p className="hint">
                Os jogadores conectam suas contas em diferentes plataformas e jogos. <br/>
                <span className="muted">Ex.: Steam, Riot (Valorant/LoL), PlayStation, Xbox.</span>
              </p>
            </div>
            <div className="feature card">
              <div className="icon" aria-hidden="true">#</div>
              <h4>Ranking & Estatísticas</h4>
              <p className="hint">
                A plataforma gera um mapa de desempenho baseado em dados de jogo. <br/>
                <span className="muted">K/D, winrate, MMR/elo e histórico por temporada.</span>
              </p>
            </div>
            <div className="feature card">
              <div className="icon" aria-hidden="true">∞</div>
              <h4>Comunidade & Desafios</h4>
              <p className="hint">
                Amigos podem competir por temporadas, criar desafios e eventos. <br/>
                <span className="muted">Regras claras, moderação e jogo responsável.</span>
              </p>
            </div>
            <div className="feature card">
              <div className="icon" aria-hidden="true">₵</div>
              <h4>Apostas com Créditos</h4>
              <p className="hint">
                Apostem créditos com estatísticas e limites saudáveis para partidas justas. <br/>
                <span className="muted">Sistema interno com limites e verificação de idade.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT SECTION 1 */}
      <section className="section">
        <div className="container split">
          <div className="card media" style={{aspectRatio:"16/9"}}>
            <img
              alt="Setup gamer com teclado RGB e iluminação em ambiente escuro"
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
              loading="lazy"
              decoding="async"
              style={{width:"100%",height:"100%",objectFit:"cover"}}
            />
          </div>
          <div>
            <h4>Uma Experiência Emocionalmente Equilibrada e Motivadora</h4>
            <p className="hint">
              O GameLink foi projetado para proporcionar um ambiente competitivo saudável, garantindo que os jogadores se 
              sintam motivados, engajados e respeitados dentro da comunidade. A plataforma combina competição e diversão
              sem gerar frustrações desnecessárias.
            </p>
            <ul className="muted" style={{marginTop:8, paddingLeft:18, lineHeight:1.7}}>
              <li>Critérios de ranking transparentes e comunicados.</li>
              <li>Privacidade por padrão: você escolhe o que exibir.</li>
              <li>Desafios semanais/mensais com foco em evolução real.</li>
            </ul>
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
              Com funcionalidades como apostas em créditos, rankings interativos e desafios personalizados,
              cada aspecto foi pensado para criar uma experiência rica e envolvente.
            </p>
            <ul className="muted" style={{marginTop:8, paddingLeft:18, lineHeight:1.7}}>
              <li>Integrações com APIs oficiais (quando disponíveis).</li>
              <li>Relatórios simples de entender, sem jargões técnicos.</li>
              <li>Base preparada para apps mobile e bots de comunidade.</li>
            </ul>
          </div>

          {/* imagem vertical com fallback e overlay */}
          <div className="card media right-narrow">
            <img
              alt="Controle iluminado com neon roxo e azul"
              src="https://images.unsplash.com/photo-1603484477859-abe6a73f9365?auto=format&fit=crop&w=900&h=1600&q=80"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&h=1600&q=80";
              }}
            />
            <span className="overlay" />
          </div>
        </div>
      </section>

      {/* CTA Plans */}
      <section id="planos" className="section">
        <div className="container center">
          <h3>Conheça nosso alcance e tire suas conclusões</h3>
          <p className="hint">Nossos planos para seu negócio</p>
          <div className="plans" style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:16}}>
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
          <div className="clients" style={{
            marginTop:16,
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",
            gap:12,
            alignItems:"center"
          }}>
            {(clients.length?clients:[
              { id:1, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+A"},
              { id:2, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+B"},
              { id:3, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+C"},
              { id:4, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+D"},
              { id:5, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+E"},
            ]).map(c => (
              <img key={c.id} alt="logo" className="client-logo" src={c.logo} loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
