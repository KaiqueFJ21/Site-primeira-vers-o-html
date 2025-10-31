const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db');

// Middleware de autenticação
const authenticateToken = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(403).json({ message: 'Token inválido' });
    }
};

module.exports = async (req, res) => {
    // Habilitar CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', 'https://site-primeira-vers-o-html.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
    );

    // Responder a requisições OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Rota de login
    if (req.method === 'POST' && req.url.endsWith('/login')) {
        const { email, senha } = req.body;

        try {
            const [users] = await db.execute(
                'SELECT * FROM administradores WHERE email = ?',
                [email]
            );

            if (users.length === 0) {
                return res.status(401).json({ message: 'Credenciais inválidas' });
            }

            const user = users[0];
            const senhaValida = await bcrypt.compare(senha, user.senha);

            if (!senhaValida) {
                return res.status(401).json({ message: 'Credenciais inválidas' });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            return res.status(200).json({
                token,
                user: {
                    id: user.id,
                    nome: user.nome,
                    email: user.email
                }
            });
        } catch (error) {
            console.error('Erro no login:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    // Rota para listar contatos (requer autenticação)
    if (req.method === 'GET' && req.url.endsWith('/contatos')) {
        try {
            authenticateToken(req, res);

            const [contatos] = await db.execute(`
                SELECT * FROM contatos 
                ORDER BY data_criacao DESC
            `);

            return res.status(200).json(contatos);
        } catch (error) {
            console.error('Erro ao buscar contatos:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    // Rota para marcar contato como visualizado
    if (req.method === 'PUT' && req.url.match(/\/contatos\/\d+\/visualizar/)) {
        try {
            authenticateToken(req, res);

            const contatoId = req.url.split('/')[2];
            const adminId = req.user.id;

            await db.execute(`
                UPDATE contatos 
                SET status_visualizacao = 'visualizado',
                    data_visualizacao = CURRENT_TIMESTAMP,
                    visualizado_por = ?
                WHERE id = ?
            `, [adminId, contatoId]);

            return res.status(200).json({ message: 'Contato atualizado com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar contato:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    return res.status(404).json({ message: 'Rota não encontrada' });
};