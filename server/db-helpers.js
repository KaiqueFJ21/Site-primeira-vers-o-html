const db = require('../server/database');

// Funções auxiliares para operações no banco de dados
const dbHelpers = {
    // Usuários
    async createUser({ nome, email, senha }) {
        const [result] = await db.execute(
            'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
            [nome, email, senha]
        );
        return result.insertId;
    },

    async getUserByEmail(email) {
        const [rows] = await db.execute(
            'SELECT * FROM usuarios WHERE email = ?',
            [email]
        );
        return rows[0];
    },

    // Contatos
    async saveContact({ nome, email, mensagem }) {
        const [result] = await db.execute(
            'INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)',
            [nome, email, mensagem]
        );
        return result.insertId;
    },

    async getContacts() {
        const [rows] = await db.execute('SELECT * FROM contatos ORDER BY created_at DESC');
        return rows;
    },

    // Projetos
    async createProject({ titulo, descricao, imagem_url }) {
        const [result] = await db.execute(
            'INSERT INTO projetos (titulo, descricao, imagem_url) VALUES (?, ?, ?)',
            [titulo, descricao, imagem_url]
        );
        return result.insertId;
    },

    async getAllProjects() {
        const [rows] = await db.execute('SELECT * FROM projetos ORDER BY created_at DESC');
        return rows;
    },

    async getProjectById(id) {
        const [rows] = await db.execute(
            'SELECT * FROM projetos WHERE id = ?',
            [id]
        );
        return rows[0];
    }
};

module.exports = dbHelpers;