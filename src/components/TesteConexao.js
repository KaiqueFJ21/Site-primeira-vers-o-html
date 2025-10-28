import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

export function TesteConexao() {
    const [status, setStatus] = useState('testando');
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const testarConexao = async () => {
            try {
                await fetch('http://localhost:5000/api/test');
                setStatus('conectado');
            } catch (error) {
                setStatus('erro');
                setErro(error.message);
            }
        };

        testarConexao();
    }, []);

    return (
        <div style={{ padding: '20px', margin: '20px', border: '1px solid #ccc' }}>
            <h3>Status da Conexão com o Banco</h3>
            <p>Status: {status}</p>
            {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}
        </div>
    );
}