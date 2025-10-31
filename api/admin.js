const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // evita binários nativos no Vercel
const db = require('../db');

function setCors(req, res) {
  const origin = req.headers.origin || '';
  const allow =
    origin === 'https://site-primeira-vers-o-html.vercel.app' ||
    /\.vercel\.app$/.test(origin) ||
    origin.startsWith('http://localhost');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', allow ? origin : 'https://site-primeira-vers-o-html.vercel.app');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');
}

function requireAuth(req, res) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'Token não fornecido' });
    return false;
  }
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch {
    res.status(403).json({ message: 'Token inválido' });
    return false;
  }
}

module.exports = async (req, res) => {
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const url = new URL(req.url, 'http://localhost');
  const pathname = url.pathname; // /api/admin..., /api/admin/login, etc.

  // POST /api/admin/login
  if (req.method === 'POST' && pathname.endsWith('/login')) {
    const { email, senha } = req.body || {};
    if (!email || !senha) {
      res.status(400).json({ message: 'E-mail e senha são obrigatórios' });
      return;
    }
    try {
      const [users] = await db.execute('SELECT * FROM administradores WHERE email = ?', [email]);
      if (!users.length) {
        res.status(401).json({ message: 'Credenciais inválidas' });
        return;
      }
      const user = users[0];
      const ok = await bcrypt.compare(senha, user.senha);
      if (!ok) {
        res.status(401).json({ message: 'Credenciais inválidas' });
        return;
      }
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
      res.status(200).json({ token, user: { id: user.id, nome: user.nome, email: user.email } });
    } catch (err) {
      console.error('Erro no login:', err);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
    return;
  }

  // GET /api/admin/contatos
  if (req.method === 'GET' && pathname.endsWith('/contatos')) {
    if (!requireAuth(req, res)) return;
    try {
      const [contatos] = await db.execute('SELECT * FROM contatos ORDER BY data_criacao DESC');
      res.status(200).json(contatos);
    } catch (err) {
      console.error('Erro ao buscar contatos:', err);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
    return;
  }

  // PUT /api/admin/contatos/:id/visualizar
  if (req.method === 'PUT' && /\/contatos\/\d+\/visualizar$/.test(pathname)) {
    if (!requireAuth(req, res)) return;
    try {
      const parts = pathname.split('/');
      const idx = parts.indexOf('contatos');
      const contatoId = parts[idx + 1];
      const adminId = req.user.id;

      await db.execute(
        `UPDATE contatos 
         SET status_visualizacao = 'visualizado',
             data_visualizacao = CURRENT_TIMESTAMP,
             visualizado_por = ?
         WHERE id = ?`,
        [adminId, contatoId]
      );

      res.status(200).json({ message: 'Contato atualizado com sucesso' });
    } catch (err) {
      console.error('Erro ao atualizar contato:', err);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
    return;
  }

  res.status(404).json({ message: 'Rota não encontrada' });
};