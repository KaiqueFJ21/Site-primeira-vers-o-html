import React, { useState } from "react";

export default function Contato(){
  const [status, setStatus] = useState(null);
  const onSubmit = async (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("enviando");
    try{
      const r = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const ok = r.ok;
      setStatus(ok ? "ok" : "erro");
      e.currentTarget.reset();
    }catch{
      setStatus("erro");
    }
  };
  return (
    <section className="section">
      <div className="container">
        <h2>Contato</h2>
        <p className="hint">Fale com a equipe Game Link</p>
        <form onSubmit={onSubmit} className="card" style={{padding:18, maxWidth:560}}>
          <div style={{display:"grid", gap:12}}>
            <label>Nome<input required name="nome" style={inputStyle} /></label>
            <label>Email<input required name="email" type="email" style={inputStyle} /></label>
            <label>Mensagem<textarea required name="mensagem" rows="5" style={inputStyle} /></label>
            <button className="cta-btn" type="submit">Enviar</button>
            {status==="ok" && <span className="hint">Mensagem enviada! ✅</span>}
            {status==="erro" && <span className="hint">Não foi possível enviar agora. ❌</span>}
          </div>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  width:"100%", marginTop:6, padding:"12px 14px",
  borderRadius:12, border:"1px solid rgba(255,255,255,.18)",
  background:"rgba(255,255,255,.06)", color:"#fff", outline:"none"
};