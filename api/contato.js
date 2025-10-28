const db = require('../db');

module.exports = async (req, res) => {
    console.log('Iniciando processamento da requisição');
    
    // Log do método e corpo da requisição
    console.log('Método:', req.method);
    console.log('Corpo da requisição:', req.body);
    // Habilitar CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', 'https://site-primeira-vers-o-html-6xwm.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Responder a requisições OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        try {
            const { nome, email, telefone, assunto, mensagem } = req.body;

            // Validação básica
            if (!nome || !email || !mensagem) {
                return res.status(400).json({ 
                    error: 'Nome, email e mensagem são obrigatórios' 
                });
            }

            // Gerar código único no formato GL-AAMMDD-XXXX (GL = GameLink, AA = ano, MM = mês, DD = dia, XXXX = número aleatório)
            const dataAtual = new Date();
            const codigoPartes = {
                ano: dataAtual.getFullYear().toString().slice(-2),
                mes: (dataAtual.getMonth() + 1).toString().padStart(2, '0'),
                dia: dataAtual.getDate().toString().padStart(2, '0'),
                random: Math.floor(Math.random() * 10000).toString().padStart(4, '0')
            };
            const codigoUnico = `GL-${codigoPartes.ano}${codigoPartes.mes}${codigoPartes.dia}-${codigoPartes.random}`;

            console.log('Preparando para inserir no banco de dados');
            
            // Query de inserção
            const query = `
                INSERT INTO contatos (
                    codigo_unico, 
                    nome, 
                    email, 
                    telefone, 
                    assunto, 
                    mensagem, 
                    status, 
                    status_visualizacao, 
                    data_criacao
                ) VALUES (?, ?, ?, ?, ?, ?, 'novo', 'novo', NOW())
            `;
            
            console.log('Query SQL:', query);

            console.log('Valores para inserção:', {
                codigoUnico,
                nome,
                email,
                telefone,
                assunto,
                mensagem
            });

            try {
                const [result] = await db.execute(query, [
                    codigoUnico,
                    nome,
                    email,
                    telefone || null,
                    assunto || 'Contato via site',
                    mensagem
                ]);
                
                console.log('Inserção realizada com sucesso:', result);
            } catch (dbError) {
                console.error('Erro na inserção:', dbError);
                throw new Error(`Erro na inserção no banco: ${dbError.message}`);
            }
            
            // Registrar no log
            await db.execute(
                'INSERT INTO log_contatos (contato_id, acao) VALUES (?, ?)',
                [result.insertId, 'Novo contato criado']
            );

            return res.status(201).json({
                success: true,
                id: result.insertId,
                codigo: codigoUnico,
                message: 'Mensagem enviada com sucesso! Seu código de acompanhamento é: ' + codigoUnico
            });

        } catch (error) {
            console.error('Erro ao salvar contato:', error);
            return res.status(500).json({ 
                error: 'Erro interno ao processar sua solicitação' 
            });
        }
    }

    // Se não for POST ou OPTIONS
    return res.status(405).json({ error: 'Método não permitido' });
};