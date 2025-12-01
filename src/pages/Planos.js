import React, { useEffect, useState } from "react";

export default function Planos() {
  const [plans, setPlans] = useState([]);
  const [cycle, setCycle] = useState("mensal"); // 'mensal' | 'anual'

  // Normaliza preços vindos da API (string -> número) quando possível
  const parsePrice = (v) => {
    if (v == null) return null;
    if (typeof v === "number") return v;
    const m = String(v).match(/([\d.,]+)/);
    return m ? Number(m[1].replace(/\./g, "").replace(",", ".")) : null;
  };

  useEffect(() => {
    fetch("/api/planos")
      .then((r) => r.json())
      .then((serverPlans) => {
        const normalized = serverPlans.map((p) => ({
          id: p.id,
          nome: p.nome,
          // tenta encontrar preço mensal/anual; se só tiver uma string, vira mensal
          precoMensal: parsePrice(p.precoMensal ?? p.preco_mensal ?? p.preco),
          precoAnual: parsePrice(p.precoAnual ?? p.preco_anual ?? null),
          desc: p.desc || p.descricao || "",
        }));
        setPlans(normalized);
      })
      .catch(() => setPlans([]));
  }, []);

  // fallback local (com mais informações)
  const fallbackPlans = [
    {
      id: 1,
      nome: "Starter",
      badge: "Grátis",
      precoMensal: 0,
      precoAnual: 0,
      desc: "Para começar sem custo.",
      recursos: [
        "3 conta de jogo",
        "KPIs básicos (K/D, Winrate)",
        "Ranking entre amigos",
        "Desafios semanais",
        "Suporte comunitário",
      ],
    },
    {
      id: 2,
      nome: "Pro",
      badge: "Mais popular",
      precoMensal: 29,
      precoAnual: 290, // ~2 meses grátis
      desc: "Para comunidades ativas e criadores.",
      recursos: [
        "Contas ilimitadas",
        "Histórico e gráficos",
        "Rankings globais/regionais",
        "Temporadas e recompensas",
        "Suporte prioritário",
      ],
    },
    {
      id: 3,
      nome: "Enterprise",
      badge: "SLA & custom",
      precoMensal: null, // fale conosco
      precoAnual: null,
      desc: "Soluções sob medida, integrações e SLA.",
      recursos: [
        "SLA e suporte dedicado",
        "SSO / SAML (sob consulta)",
        "Relatórios avançados",
        "Integrações oficiais",
        "Onboarding assistido",
      ],
    },
  ];

  // junta dados do servidor (quando vierem) aos recursos do fallback
  const mergedPlans = (plans.length ? plans : fallbackPlans).map((p) => {
    const base = fallbackPlans.find((f) => f.nome === p.nome) || {};
    return { ...base, ...p, recursos: base.recursos || [] };
  });

  const fmt = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  const priceLabel = (p) => {
    const monthly = p.precoMensal;
    const yearly = p.precoAnual ?? (monthly != null ? monthly * 10 : null); // caso API não traga anual, estima 2 meses off
    if (monthly == null && yearly == null) return "Fale conosco";
    if (cycle === "mensal") return monthly === 0 ? "R$ 0" : `${fmt.format(monthly)}/mês`;
    const label = fmt.format(yearly);
    return `${label}/ano`;
  };

  const savingsChip = (p) => {
    if (p.precoMensal == null || p.precoAnual == null) return null;
    const econ = Math.max(0, p.precoMensal * 12 - p.precoAnual);
    if (econ <= 0) return null;
    return `Economize ${fmt.format(econ)} no anual`;
  };

  const commonBenefits = [
    "Conta e perfil do jogador",
    "Dashboard responsivo (web/mobile)",
    "Privacidade: você decide o que exibir",
    "Critérios de ranking transparentes",
  ];

  const compare = [
    { feat: "Contas conectadas", s: "3", p: "Ilimitadas", e: "Ilimitadas" },
    { feat: "KPIs básicos (K/D, Winrate)", s: "✔", p: "✔", e: "✔" },
    { feat: "Histórico e gráficos", s: "—", p: "✔", e: "✔" },
    { feat: "Rankings globais/regionais", s: "—", p: "✔", e: "✔" },
    { feat: "Temporadas / recompensas", s: "—", p: "✔", e: "✔" },
    { feat: "Integrações oficiais / SSO", s: "—", p: "—", e: "Sob consulta" },
    { feat: "SLA / suporte dedicado", s: "—", p: "—", e: "✔" },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="center" style={{ maxWidth: 820, margin: "0 auto" }}>
          <div className="kicker">Escolha seu plano</div>
          <h1>
            <span className="gradient-text">Planos</span> que evoluem com a sua comunidade
          </h1>
          <p className="muted">
            Pague mensalmente ou aproveite desconto no anual. Todos os planos podem ser
            atualizados a qualquer momento.
          </p>

          {/* toggle mensal/anual */}
          <div style={{ marginTop: 12, display: "inline-flex", border: "1px solid var(--border)", borderRadius: 999 }}>
            {["mensal", "anual"].map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className="cta-btn"
                style={{
                  borderRadius: 999,
                  padding: "8px 16px",
                  background: cycle === c ? "var(--primary)" : "transparent",
                  border: "none",
                }}
              >
                {c === "mensal" ? "Mensal" : "Anual"}
              </button>
            ))}
          </div>
        </div>

        {/* cards */}
        <div className="plans" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: 24, marginTop: 24 }}>
          {mergedPlans.map((p) => (
            <div key={p.id} className="plan card" style={{ padding: 22, position: "relative" }}>
              {p.badge && (
                <span className="badge" style={{ position: "absolute", top: 14, right: 14 }}>{p.badge}</span>
              )}
              <h3 style={{ marginTop: 6 }}>{p.nome}</h3>
              <div className="price" style={{ fontSize: 32, fontWeight: 800, marginTop: 6 }}>{priceLabel(p)}</div>
              {cycle === "anual" && savingsChip(p) && (
                <div className="hint" style={{ fontSize: 12, marginTop: 4 }}>{savingsChip(p)}</div>
              )}
              <p className="hint" style={{ marginTop: 8 }}>{p.desc}</p>

              <ul className="muted" style={{ marginTop: 12, paddingLeft: 18, lineHeight: 1.7 }}>
                {(p.recursos || []).map((r, i) => <li key={i}>{r}</li>)}
              </ul>

              <a className="cta-btn" href="/contato" style={{ marginTop: 16, display: "inline-block" }}>
                {p.precoMensal == null ? "Fale com vendas" : "Assinar"}
              </a>
            </div>
          ))}
        </div>

        {/* benefícios comuns */}
        <section className="section">
          <div className="card" style={{ padding: 22 }}>
            <h3 style={{ margin: "0 0 10px" }}>Tudo nos planos inclui:</h3>
            <ul className="muted" style={{ margin: 0, paddingLeft: 20, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 6 }}>
              {commonBenefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </section>

        {/* comparação */}
        <section className="section">
          <h2 className="center">Comparativo</h2>
          <div className="card" style={{ overflowX: "auto", padding: 0 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: 14 }}>Recurso</th>
                  <th style={{ textAlign: "center", padding: 14 }}>Starter</th>
                  <th style={{ textAlign: "center", padding: 14 }}>Pro</th>
                  <th style={{ textAlign: "center", padding: 14 }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--border)" }}>
                    <td style={{ padding: 12 }}>{row.feat}</td>
                    <td style={{ padding: 12, textAlign: "center" }}>{row.s}</td>
                    <td style={{ padding: 12, textAlign: "center" }}>{row.p}</td>
                    <td style={{ padding: 12, textAlign: "center" }}>{row.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <h2 className="center">Perguntas frequentes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: 16 }}>
            <div className="card" style={{ padding: 18 }}>
              <h4>Posso trocar de plano?</h4>
              <p className="muted">Sim. Você pode fazer upgrade/downgrade a qualquer momento; o ajuste é proporcional.</p>
            </div>
            <div className="card" style={{ padding: 18 }}>
              <h4>Há teste grátis?</h4>
              <p className="muted">O plano Starter é gratuito. Para o Pro, oferecemos período de testes em campanhas sazonais.</p>
            </div>
            <div className="card" style={{ padding: 18 }}>
              <h4>Como funciona o anual?</h4>
              <p className="muted">Cobrança em uma parcela anual com desconto. Cancelamentos seguem política da plataforma.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
