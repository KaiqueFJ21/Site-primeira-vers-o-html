import React, { useState } from "react";

/* <<< DECLARA AQUI, NO TOPO DO ARQUIVO >>> */
const iconStyle = {
  width: 38,
  height: 38,
  borderRadius: 10,
  display: "inline-grid",
  placeItems: "center",
  background: "linear-gradient(135deg, rgba(90,215,255,.18), rgba(255,60,172,.12))",
  border: "1px solid rgba(255,255,255,.12)",
  boxShadow: "inset 0 0 18px rgba(90,215,255,.12), 0 10px 20px rgba(0,0,0,.25)",
  fontWeight: 800,
};

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.nome.trim()) return "Informe seu nome.";
    if (!form.email.trim()) return "Informe seu e-mail.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "E-mail inválido.";
    if (!form.assunto.trim()) return "Informe o assunto.";
    if (!form.mensagem.trim()) return "Digite sua mensagem.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Enviando..." });

    const err = validate();
    if (err) {
      setStatus({ type: "error", msg: err });
      return;
    }

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("API indisponível");

      setStatus({ type: "success", msg: "Mensagem enviada com sucesso! Em breve entraremos em contato." });
      setForm({ nome: "", email: "", assunto: "", mensagem: "" });
    } catch {
      // modo demo para desenvolvimento local
      setTimeout(() => {
        setStatus({
          type: "success",
          msg: "Mensagem enviada (modo demonstração). Quando a API estiver ativa, o envio será real.",
        });
        setForm({ nome: "", email: "", assunto: "", mensagem: "" });
      }, 500);
    }
  };

  return (
    <section className="section">
      <div className="container">
        {/* HERO */}
        <div className="card" style={{ padding: 18, marginBottom: 18 }}>
          <div className="kicker">Fale com a equipe</div>
          <h1 style={{ marginTop: 6 }}>
            <span className="gradient-text">Contato</span>
          </h1>
          <p className="muted" style={{ maxWidth: 760 }}>
            Tem dúvidas sobre planos, integrações ou quer apresentar seu time/comunidade? Envie uma mensagem
            pelo formulário ou use um dos canais ao lado. Respondemos o quanto antes.
          </p>
        </div>

        {/* GRID: Formulário + Canais */}
        <div className="split">
          {/* Formulário */}
          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginTop: 0 }}>Envie uma mensagem</h3>

            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="voce@exemplo.com"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="assunto">Assunto</label>
                <input
                  id="assunto"
                  name="assunto"
                  type="text"
                  placeholder="Ex.: Parceria, Integrações, Planos..."
                  value={form.assunto}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  placeholder="Conte-nos mais sobre sua necessidade :)"
                  value={form.mensagem}
                  onChange={onChange}
                  required
                />
              </div>

              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                <button
                  type="submit"
                  className="cta-btn"
                  disabled={status.type === "loading"}
                  style={{ cursor: status.type === "loading" ? "wait" : "pointer" }}
                >
                  {status.type === "loading" ? "Enviando..." : "Enviar"}
                </button>

                <span
                  aria-live="polite"
                  className={status.type === "error" ? "hint" : "muted"}
                  style={{
                    color: status.type === "error" ? "#ffb4c7" : "var(--muted)",
                    fontWeight: status.type === "success" ? 700 : 500,
                  }}
                >
                  {status.msg}
                </span>
              </div>
            </form>
          </div>

          {/* Canais de contato / Info */}
          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginTop: 0 }}>Canais</h3>

            <ul className="muted" style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
              <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span className="icon" aria-hidden="true" style={iconStyle}>✉️</span>
                <a href="mailto:contato@gamelink.app" style={{ color: "var(--text)", textDecoration: "none" }}>
                  contato@gamelink.app
                </a>
              </li>
              <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span className="icon" aria-hidden="true" style={iconStyle}>💬</span>
                <a href="https://discord.gg/MtuxYcS2xK" target="_blank" rel="noreferrer" style={{ color: "var(--text)", textDecoration: "none" }}>
                  Discord da comunidade
                </a>
              </li>
              <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span className="icon" aria-hidden="true" style={iconStyle}>📸</span>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" style={{ color: "var(--text)", textDecoration: "none" }}>
                  Instagram
                </a>
              </li>
            </ul>

            <hr className="sep" />

            <h4 style={{ margin: "8px 0" }}>Atendimento</h4>
            <p className="muted" style={{ marginTop: 6 }}>
              Segunda a Sexta, 9h–18h (BRT). Respondemos em até 1 dia útil.
            </p>

            <h4 style={{ margin: "12px 0 6px" }}>Privacidade</h4>
            <p className="muted" style={{ marginTop: 6 }}>
              Seus dados são usados apenas para retorno do contato. Ao enviar, você concorda com nossa Política de Privacidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
