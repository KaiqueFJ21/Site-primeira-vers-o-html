const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
    async getProjetos() {
        try {
            const response = await fetch(`${API_BASE_URL}/projetos`);
            if (!response.ok) throw new Error('Erro ao buscar projetos');
            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    async getPlanos() {
        try {
            const response = await fetch(`${API_BASE_URL}/planos`);
            if (!response.ok) throw new Error('Erro ao buscar planos');
            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    async enviarContato(dados) {
        try {
            const response = await fetch(`${API_BASE_URL}/contato`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });
            if (!response.ok) throw new Error('Erro ao enviar mensagem');
            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    }
};