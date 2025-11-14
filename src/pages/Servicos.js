import React from 'react';

function Servicos() {
  const servicos = [
    {
      icon: '🔗',
      titulo: 'Integração Multi-Plataforma',
      descricao: 'Conecte suas contas de diferentes jogos e plataformas em um único lugar.',
      recursos: ['Steam', 'Epic Games', 'Xbox Live', 'PlayStation Network', 'Riot Games']
    },
    {
      icon: '📊',
      titulo: 'Dashboard Analítico',
      descricao: 'Visualize suas estatísticas de desempenho em tempo real com gráficos interativos.',
      recursos: ['K/D Ratio', 'Win Rate', 'Tempo de Jogo', 'Conquistas', 'Progressão']
    },
    {
      icon: '🏆',
      titulo: 'Sistema de Rankings',
      descricao: 'Compete com outros jogadores em rankings globais e regionais.',
      recursos: ['Ranking Global', 'Ranking Regional', 'Ranking por Jogo', 'Ligas Competitivas']
    },
    {
      icon: '💰',
      titulo: 'Economia Virtual',
      descricao: 'Ganhe créditos ao atingir metas e aposte em partidas e desafios.',
      recursos: ['Créditos Virtuais', 'Sistema de Apostas', 'Recompensas Diárias', 'Missões Especiais']
    },
    {
      icon: '🎮',
      titulo: 'Torneios e Eventos',
      descricao: 'Participe de torneios organizados pela comunidade e ganhe prêmios exclusivos.',
      recursos: ['Torneios Semanais', 'Eventos Especiais', 'Premiações', 'Transmissões ao Vivo']
    },
    {
      icon: '👥',
      titulo: 'Comunidade Ativa',
      descricao: 'Conecte-se com outros gamers, forme times e participe de grupos temáticos.',
      recursos: ['Chat em Tempo Real', 'Formação de Times', 'Fóruns', 'Sistema de Amigos']
    }
  ];

  return (
    <div className="container">
      <section className="section">
        <div className="center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="kicker">O que oferecemos</p>
          <h1><span className="gradient-text">Serviços</span></h1>
          <p className="muted" style={{ fontSize: '18px' }}>
            Uma plataforma completa para gamers competitivos que desejam levar sua experiência 
            de jogo para o próximo nível com estatísticas, rankings e recompensas.
          </p>
        </div>
      </section>

      <hr className="sep" />

      <section className="section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {servicos.map((servico, idx) => (
            <div key={idx} className="card" style={{ padding: '24px' }}>
              <div className="icon" style={{ fontSize: '32px', marginBottom: '16px' }}>
                {servico.icon}
              </div>
              <h3 style={{ margin: '0 0 10px', color: 'var(--text)' }}>{servico.titulo}</h3>
              <p className="muted" style={{ marginBottom: '16px' }}>{servico.descricao}</p>
              
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>
                  Recursos inclusos:
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
                  {servico.recursos.map((recurso, i) => (
                    <li key={i} className="muted" style={{ marginBottom: '4px' }}>{recurso}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="sep" />

      <section className="section">
        <div className="split">
          <div>
            <h2>Como Funciona?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '20px' }}>
              <div className="card" style={{ padding: '16px', display: 'flex', gap: '14px' }}>
                <div className="badge" style={{ minWidth: '36px', height: '36px', display: 'grid', placeItems: 'center', fontSize: '18px' }}>1</div>
                <div>
                  <h4 style={{ margin: '0 0 6px' }}>Cadastre-se</h4>
                  <p className="muted" style={{ margin: 0 }}>Crie sua conta gratuita em menos de 2 minutos.</p>
                </div>
              </div>

              <div className="card" style={{ padding: '16px', display: 'flex', gap: '14px' }}>
                <div className="badge" style={{ minWidth: '36px', height: '36px', display: 'grid', placeItems: 'center', fontSize: '18px' }}>2</div>
                <div>
                  <h4 style={{ margin: '0 0 6px' }}>Conecte suas Contas</h4>
                  <p className="muted" style={{ margin: 0 }}>Integre suas plataformas de jogos favoritas.</p>
                </div>
              </div>

              <div className="card" style={{ padding: '16px', display: 'flex', gap: '14px' }}>
                <div className="badge" style={{ minWidth: '36px', height: '36px', display: 'grid', placeItems: 'center', fontSize: '18px' }}>3</div>
                <div>
                  <h4 style={{ margin: '0 0 6px' }}>Comece a Competir</h4>
                  <p className="muted" style={{ margin: 0 }}>Participe de rankings, ganhe créditos e suba de nível.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(90,215,255,.08), rgba(255,60,172,.08))' }}>
            <h3 style={{ margin: '0 0 12px' }}>🎯 Benefícios Exclusivos</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Análise detalhada de performance</li>
              <li>Comparação com outros jogadores</li>
              <li>Recomendações personalizadas</li>
              <li>Sistema de conquistas</li>
              <li>Suporte prioritário</li>
              <li>Acesso antecipado a novos recursos</li>
            </ul>
            <a href="/planos" className="cta-btn" style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>
              Ver Planos
            </a>
          </div>
        </div>
      </section>

      <hr className="sep" />

      <section className="section center">
        <h2>Pronto para começar?</h2>
        <p className="muted" style={{ maxWidth: '600px', margin: '12px auto 24px' }}>
          Junte-se a milhares de gamers que já estão utilizando o GameLink para melhorar 
          seu desempenho e competir em alto nível.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/planos" className="cta-btn">Escolher Plano</a>
          <a href="/contato" className="cta-btn" style={{ background: 'rgba(255,255,255,.08)' }}>
            Falar com Vendas
          </a>
        </div>
      </section>
    </div>
  );
}

export default Servicos;