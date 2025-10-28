import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
    const [contatos, setContatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }
        carregarContatos();
    }, [navigate]);

    const carregarContatos = async () => {
        try {
            const response = await fetch('/api/admin/contatos', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });

            if (!response.ok) {
                throw new Error('Não autorizado');
            }

            const data = await response.json();
            setContatos(data);
        } catch (error) {
            setErro('Erro ao carregar contatos');
            if (error.message === 'Não autorizado') {
                navigate('/admin/login');
            }
        } finally {
            setLoading(false);
        }
    };

    const marcarComoVisualizado = async (id) => {
        try {
            const response = await fetch(`/api/admin/contatos/${id}/visualizar`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });

            if (response.ok) {
                carregarContatos();
            }
        } catch (error) {
            setErro('Erro ao atualizar status');
        }
    };

    const formatarData = (data) => {
        return new Date(data).toLocaleString('pt-BR');
    };

    const logout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    if (loading) return <div className="loading">Carregando...</div>;
    if (erro) return <div className="erro">{erro}</div>;

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Dashboard Administrativo</h1>
                <button onClick={logout} className="logout-btn">Sair</button>
            </header>

            <div className="contatos-grid">
                {contatos.map(contato => (
                    <div key={contato.id} className={`contato-card ${contato.status_visualizacao}`}>
                        <div className="contato-header">
                            <h3>{contato.nome}</h3>
                            <span className="codigo">{contato.codigo_unico}</span>
                        </div>
                        <div className="contato-info">
                            <p><strong>Email:</strong> {contato.email}</p>
                            <p><strong>Telefone:</strong> {contato.telefone || 'Não informado'}</p>
                            <p><strong>Assunto:</strong> {contato.assunto}</p>
                            <p><strong>Data:</strong> {formatarData(contato.data_criacao)}</p>
                        </div>
                        <div className="contato-mensagem">
                            <p>{contato.mensagem}</p>
                        </div>
                        {contato.status_visualizacao === 'novo' && (
                            <button 
                                onClick={() => marcarComoVisualizado(contato.id)}
                                className="marcar-btn"
                            >
                                Marcar como visualizado
                            </button>
                        )}
                        <div className="status-badge">
                            {contato.status_visualizacao}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}