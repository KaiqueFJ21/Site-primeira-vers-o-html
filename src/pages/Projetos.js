import React from "react";
import { Link } from "react-router-dom";

export default function Projetos() {
  // grid e tamanhos iguais aos usados em "Serviços"
  const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" };
  const cardPad = { padding: "24px" };
  const icon32 = { fontSize: "32px", lineHeight: 1, display: "inline-block", marginBottom: "12px" };

  const subprojetos = [
    {
      icon: "💻",
      titulo: "App Web (SPA)",
      status: "Em desenvolvimento",
      desc: "Frontend em React (Vite) com rotas, tema neon/roxo e componentes reutilizáveis.",
      stack: ["React", "Vite", "React Router", "CSS Grid/Flex"],
    },
    {
      icon: "🔌",
      titulo: "API & Autenticação",
      status: "Em desenvolvimento",
      desc: "API REST em Node/Express, autenticação JWT e validações.",
      stack: ["Node", "Express", "JWT", "Zod/Joi"],
    },
    {
      icon: "📊",
      titulo: "Ranking Engine",
      status: "Planejado",
      desc: "Cálculo de elo/MMR, temporadas e regras transparentes por jogo.",
      stack: ["Elo/MMR", "Jobs", "Workers"],
    },
    {
      icon: "💎",
      titulo: "Economia Virtual",
      status: "Planejado",
      desc: "Créditos internos com limites, termos e histórico de transações.",
      stack: ["Wallet", "Ledger", "Policies"],
    },
    {
      icon: "🔗",
      titulo: "Integrações",
      status: "Em desenvolvimento",
      desc: "Base para conectar APIs (Steam, Riot) e bot de Discord para desafios.",
      stack: ["Steam Web API", "Riot API", "Discord Bot"],
    },
    {
      icon: "📱",
      titulo: "App Mobile",
      status: "Planejado",
      desc: "Aplicativo leve para acompanhar ranking, metas e notificações.",
      stack: ["React Native", "Expo"],
    },
  ];

  const endpoints = [
    { m: "GET", p: "/api/planos", d: "Lista de planos" },
    { m: "GET", p: "/api/clientes", d: "Logos de clientes" },
    { m: "POST", p: "/api/contato", d: "Envia mensagem" },
    { m: "POST", p: "/api/auth/register", d: "Cria usuário" },
    { m: "POST", p: "/api/auth/login", d: "Autentica e retorna JWT" },
  ];

  const roadmap = [
    { n: "1", t: "MVP do App Web", d: "Home, Sobre, Projetos, Planos e Contato", s: "Concluído/Em curso" },
    { n: "2", t: "API Básica + Auth", d: "Planos, clientes e contato; login JWT", s: "Em desenvolvimento" },
    { n: "3", t: "Ranking + Temporadas", d: "Regras por jogo, histórico e painéis", s: "Planejado" },
    { n: "4", t: "Integrações & Mobile", d: "Steam/Riot + app mobile", s: "Planejado" },
  ];

  const gallery = [
    "https://picsum.photos/seed/gl-projetos-1/960/540",
    "https://picsum.photos/seed/gl-projetos-2/960/540",
    "https://picsum.photos/seed/gl-projetos-3/960/540",
  ];

  const statusPill = (s) => {
    const color =
      s.startsWith("Conclu") ? "var(--ok, #22c55e)" :
      s.startsWith("Em")      ? "var(--primary)" :
                                "var(--muted)";
    return (
      <span
        className="badge"
        style={{ background: "transparent", border: "1px solid var(--border)", color: "var(--text)", gap: 8, display: "inline-flex", alignItems: "center" }}
      >
        <span style={{ width: 8, height: 8, borderRadius: 999, background: color, display: "inline-block" }} />
        {s}
      </span>
    );
  };

  return (
    <section className="section">
      <div className="container">
        {/* HERO */}
        <section className="section center" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div className="kicker">Roadmap & entregas</div>
          <h1><span className="gradient-text">Projetos</span> do Game Link</h1>
          <p className="muted">
            Aqui você acompanha o que já foi feito, o que está em desenvolvimento e o que vem por aí.
            Tudo pensado para transformar estatísticas em motivação — com comunidade, ranking e metas.
          </p>
        </section>

        <hr className="sep" />

        {/* SUBPROJETOS */}
        <section className="section">
          <h2 className="center">Pacotes de trabalho</h2>
          <div style={grid}>
            {subprojetos.map((p, i) => (
              <div key={i} className="card" style={cardPad}>
                <div className="icon" style={icon32} aria-hidden="true">{p.icon}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <h3 style={{ margin: 0 }}>{p.titulo}</h3>
                  {statusPill(p.status)}
                </div>
                <p className="muted" style={{ marginTop: 10 }}>{p.desc}</p>

                {/* chips de stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
                  {(p.stack || []).map((s, j) => (
                    <span key={j} className="badge" style={{ background: "rgba(255,255,255,.06)" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="sep" />

        {/* ROADMAP */}
        <section className="section">
          <h2 className="center">Linha do tempo</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
            {roadmap.map((r) => (
              <div key={r.n} className="card" style={{ padding: 16, display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div className="badge" style={{ minWidth: 36, height: 36, display: "grid", placeItems: "center", fontSize: 18 }}>{r.n}</div>
                <div>
                  <h4 style={{ margin: "0 0 6px" }}>{r.t}</h4>
                  <p className="muted" style={{ margin: 0 }}>{r.d}</p>
                  <p className="hint" style={{ margin: "6px 0 0" }}>{r.s}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="sep" />

        {/* ENDPOINTS */}
        <section className="section">
          <div className="card" style={cardPad}>
            <h3 style={{ marginTop: 0 }}>API (principais endpoints)</h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", minWidth: 560, borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: 12 }}>Método</th>
                    <th style={{ textAlign: "left", padding: 12 }}>Path</th>
                    <th style={{ textAlign: "left", padding: 12 }}>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {endpoints.map((e, i) => (
                    <tr key={i} style={{ borderTop: "1px solid var(--border)" }}>
                      <td style={{ padding: 10, fontWeight: 700 }}>{e.m}</td>
                      <td style={{ padding: 10 }}><code>{e.p}</code></td>
                      <td style={{ padding: 10 }}>{e.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="hint" style={{ marginTop: 10 }}>
              * Endpoints podem mudar conforme evoluímos o MVP.
            </p>
          </div>
        </section>

        <hr className="sep" />

        {/* GALERIA */}
        <section className="section">
          <h2 className="center">Prévias visuais</h2>
          <div style={grid}>
            {gallery.map((src, i) => (
              <div key={i} className="card media" style={{ aspectRatio: "16/9" }}>
                <img src={src} alt={`Preview ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section center">
          <h2>Quer acompanhar de perto?</h2>
          <p className="muted">Fale com a equipe ou veja os planos disponíveis.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contato" className="cta-btn">Entrar em contato</Link>
            <Link to="/planos" className="cta-btn" style={{ background: "rgba(255,255,255,.08)" }}>Ver planos</Link>
          </div>
        </section>
      </div>
    </section>
  );
}
