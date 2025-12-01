import React from "react";
import { Link } from "react-router-dom";

export default function Sobre() {
  // ====== ESTILOS COMPARTILHADOS (iguais à aba Serviços) ======
  const gridCards = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
  };
  const cardPad = { padding: "24px" };
  const iconLg = { fontSize: "32px", lineHeight: 1, display: "inline-block", marginBottom: "12px" };
  const iconMd = { fontSize: "28px", lineHeight: 1, display: "inline-block", marginBottom: "10px" };
  const stepsWrap = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "18px",
  };

  const pilares = [
    { icon: "🧩", titulo: "O problema", txt: "Estatísticas espalhadas em várias plataformas, difícil visualizar evolução e comparar com amigos." },
    { icon: "🎯", titulo: "Nossa proposta", txt: "Centralizar dados, transformar números em motivação diária e criar desafios saudáveis em comunidade." },
  ];

  const personas = [
    { icon: "🏆", titulo: "Jogador competitivo", txt: "Quer métricas, ranking justo e metas claras por temporada." },
    { icon: "🎮", titulo: "Jogador casual", txt: "Prefere ver progresso de forma simples e se divertir com amigos." },
    { icon: "👥", titulo: "Criadores/Times", txt: "Precisam organizar comunidade, eventos e leituras rápidas de performance." },
  ];

  const funcionalidades = [
    { icon: "🔗", titulo: "Sincronização de contas", txt: "Conecte jogos e plataformas; o Game Link consolida seus números." },
    { icon: "📈", titulo: "Painéis e histórico", txt: "Acompanhe K/D, winrate, MMR/elo e tendências ao longo do tempo." },
    { icon: "🥇", titulo: "Rankings", txt: "Leaderboard entre amigos e comunidade, com critérios transparentes." },
    { icon: "🔥", titulo: "Desafios e temporadas", txt: "Metas semanais/mensais com recompensas dentro da comunidade." },
    { icon: "💎", titulo: "Créditos responsáveis", txt: "Sistema interno com limites, verificação de idade e termos claros." },
    { icon: "🧩", titulo: "Integrações", txt: "Base para integrar APIs oficiais (Steam, Riot) e bots (Discord)." },
  ];

  const objetivos = [
    {
      icon: "⚡",
      titulo: "Curto prazo",
      itens: [
        "Lançar MVP com Home, Planos, Sobre e Contato",
        "Sincronização inicial + KPIs básicos (K/D, winrate)",
        "Ranking entre amigos e desafios semanais simples",
      ],
    },
    {
      icon: "🚀",
      titulo: "Médio prazo",
      itens: [
        "Perfil com histórico e metas por temporada",
        "App leve para acompanhar resultados",
        "Eventos da comunidade com premiações internas",
      ],
    },
    {
      icon: "🌍",
      titulo: "Longo prazo",
      itens: [
        "Integrações oficiais com mais APIs de jogos",
        "Ferramentas para criadores e times amadores",
        "Relatórios avançados e moderação colaborativa",
      ],
    },
  ];

  const principios = [
    { icon: "🛡️", titulo: "Segurança e bem-estar", txt: "Limites de uso, linguagem saudável e incentivo a jogo responsável." },
    { icon: "🔒", titulo: "Privacidade", txt: "Coletamos o mínimo necessário; você controla o que é público." },
    { icon: "🔎", titulo: "Transparência", txt: "Critérios de ranking esclarecidos e comunicação clara." },
  ];

  const metas = [
    "≥ 70% dos usuários conectando 1+ conta no primeiro acesso",
    "≥ 40% participando de pelo menos 1 desafio por mês",
    "Satisfação (NPS interno) ≥ 50 em 90 dias de uso",
  ];

  const kpis = [
    "MAU/DAU (usuários ativos)",
    "Taxa de conexão de contas (onboarding)",
    "Adesão a desafios (participação por temporada)",
    "Retenção 7/30 dias",
    "Tempo de resposta da API e estabilidade",
  ];

  return (
    <section className="section">
      <div className="container">

        {/* HERO */}
        <section className="section center">
          <div className="kicker">Nossa história</div>
          <h1>
            <span className="gradient-text">Por que criamos</span> o Game Link
          </h1>
          <p className="muted">
            O Game Link nasceu ao perceber que muitos jogadores não conseguiam ver sua evolução
            por ter dados espalhados em diferentes jogos e plataformas. Queremos juntar tudo em um
            só lugar, transformar estatísticas em objetivo e fazer da comunidade um espaço de
            motivação — sem complicação e com responsabilidade.
          </p>
        </section>

        <hr className="sep" />

        {/* PROBLEMA ⇢ PROPOSTA */}
        <section className="section">
          <div style={gridCards}>
            {pilares.map((p, i) => (
              <div key={i} className="card" style={cardPad}>
                <div className="icon" style={iconLg} aria-hidden="true">{p.icon}</div>
                <h3 style={{ margin: "0 0 10px" }}>{p.titulo}</h3>
                <p className="muted" style={{ margin: 0 }}>{p.txt}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="section">
          <h2 className="center">Para quem é</h2>
          <div style={gridCards}>
            {personas.map((p, i) => (
              <div key={i} className="card" style={cardPad}>
                <div className="icon" style={iconMd} aria-hidden="true">{p.icon}</div>
                <h4 style={{ margin: "0 0 8px" }}>{p.titulo}</h4>
                <p className="muted" style={{ margin: 0 }}>{p.txt}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="sep" />

        {/* FUNCIONALIDADES */}
        <section className="section">
          <h2 className="center">O que o Game Link faz</h2>
          <div style={gridCards}>
            {funcionalidades.map((f, i) => (
              <div key={i} className="card" style={cardPad}>
                <div className="icon" style={iconMd} aria-hidden="true">{f.icon}</div>
                <h4 style={{ margin: "0 0 8px" }}>{f.titulo}</h4>
                <p className="muted" style={{ margin: 0 }}>{f.txt}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="sep" />

        {/* OBJETIVOS + METAS */}
        <section className="section">
          <h2 className="center">Objetivos e metas</h2>
          <div style={gridCards}>
            {objetivos.map((obj, idx) => (
              <div key={idx} className="card" style={cardPad}>
                <div className="icon" style={iconMd} aria-hidden="true">{obj.icon}</div>
                <h3 style={{ margin: "0 0 10px" }}>{obj.titulo}</h3>
                <ul className="muted" style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
                  {obj.itens.map((it, i) => <li key={i}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="card" style={cardPad}>
            <h4>Metas mensuráveis (primeiros ciclos)</h4>
            <ul className="muted" style={{ margin: 0, paddingLeft: 20 }}>
              {metas.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        </section>

        <hr className="sep" />

        {/* COMO FUNCIONA (passos) */}
        <section className="section">
          <h2>Como funciona</h2>
          <div style={stepsWrap}>
            {[
              ["1", "Cadastrar e conectar", "Crie sua conta e conecte os jogos/plataformas que você usa."],
              ["2", "Explorar painéis", "Veja estatísticas, histórico e tendências da sua performance."],
              ["3", "Participar de desafios", "Entre em desafios semanais/mensais e suba no ranking."],
              ["4", "Metas e recompensas", "Defina objetivos, acompanhe o progresso e ganhe recompensas internas."],
            ].map(([n, t, d]) => (
              <div key={n} className="card" style={{ padding: 16, display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div className="badge" style={{ minWidth: 36, height: 36, display: "grid", placeItems: "center", fontSize: 18 }}>{n}</div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>{t}</h4>
                  <p className="muted" style={{ margin: 0 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="sep" />

        {/* ARQUITETURA SIMPLES */}
        <section className="section">
          <div className="card" style={cardPad}>
            <h2>Como o sistema é montado (sem jargão)</h2>
            <ul className="muted" style={{ margin: 0, paddingLeft: 20 }}>
              <li><strong>Front-end:</strong> um site do tipo SPA feito em React, com páginas como Home, Serviços, Planos, Sobre e Contato.</li>
              <li><strong>API:</strong> servidor em Node/Express que envia e recebe dados das telas (ex.: planos, mensagens de contato).</li>
              <li><strong>Banco de dados:</strong> Prisma ORM (SQLite em desenvolvimento; PostgreSQL em produção) para guardar usuários, planos e mensagens.</li>
              <li><strong>Segurança:</strong> login com e-mail/senha (hash) e token de sessão; termos de uso e política de privacidade.</li>
              <li><strong>Próximos passos técnicos:</strong> integrações oficiais com APIs de jogos, relatórios e moderação.</li>
            </ul>
          </div>
        </section>

        <hr className="sep" />

        {/* POLÍTICAS */}
        <section className="section">
          <div style={gridCards}>
            {principios.map((p, i) => (
              <div key={i} className="card" style={cardPad}>
                <div className="icon" style={iconMd} aria-hidden="true">{p.icon}</div>
                <h4 style={{ margin: "0 0 6px" }}>{p.titulo}</h4>
                <p className="muted" style={{ margin: 0 }}>{p.txt}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="sep" />

        {/* ACESSIBILIDADE */}
        <section className="section">
          <div className="card" style={cardPad}>
            <h2>Acessibilidade e experiência</h2>
            <ul className="muted" style={{ margin: 0, paddingLeft: 20 }}>
              <li>Contraste de cores adequado e navegação por teclado.</li>
              <li>Textos claros e objetivos; feedback visual em ações.</li>
              <li>Estrutura responsiva para desktop e mobile.</li>
            </ul>
          </div>
        </section>

        <hr className="sep" />

        {/* ROADMAP */}
        <section className="section">
          <div className="card" style={cardPad}>
            <h2>Roadmap (resumo)</h2>
            <ul className="muted" style={{ margin: 0, paddingLeft: 20 }}>
              <li><strong>Próximas entregas:</strong> desafios por temporada, perfil com histórico detalhado, página pública de ranking.</li>
              <li><strong>Próximo trimestre:</strong> integrações oficiais de jogos, relatório avançado e eventos de comunidade.</li>
              <li><strong>Depois:</strong> ferramentas para criadores/times e programas de comunidade.</li>
            </ul>
          </div>
        </section>

        <hr className="sep" />

        {/* MÉTRICAS */}
        <section className="section">
          <div className="card" style={cardPad}>
            <h2>Métricas que vamos acompanhar</h2>
            <ul className="muted" style={{ margin: 0, paddingLeft: 20 }}>
              {kpis.map((k, i) => <li key={i}>{k}</li>)}
            </ul>
          </div>
        </section>

        <hr className="sep" />

        {/* FAQ */}
        <section className="section">
          <h2 className="center">Perguntas frequentes</h2>
          <div style={gridCards}>
            <div className="card" style={cardPad}>
              <h4>O Game Link é pago?</h4>
              <p className="muted" style={{ margin: 0 }}>Há um plano gratuito e opções pagas com recursos avançados. Veja a página de Planos.</p>
            </div>
            <div className="card" style={cardPad}>
              <h4>Como funcionam os créditos?</h4>
              <p className="muted" style={{ margin: 0 }}>São créditos internos, com limites e regras claras para uso responsável, focados em desafios da comunidade.</p>
            </div>
            <div className="card" style={cardPad}>
              <h4>Minhas informações estão seguras?</h4>
              <p className="muted" style={{ margin: 0 }}>Usamos boas práticas de segurança; você escolhe o que compartilhar. Critérios de ranking são transparentes.</p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section center">
          <h2>Pronto para evoluir com a gente?</h2>
          <p className="muted" style={{ maxWidth: 600, margin: "12px auto 24px" }}>
            Conheça os planos ou fale com a equipe.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/planos" className="cta-btn">Escolher Plano</Link>
            <Link to="/contato" className="cta-btn" style={{ background: "rgba(255,255,255,.08)" }}>
              Entrar em contato
            </Link>
          </div>
        </section>

      </div>
    </section>
  );
}
