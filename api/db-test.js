const db = require('./db');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    try {
        // Tenta fazer uma consulta simples
        const [result] = await db.execute('SELECT NOW() as now');
        
        return res.status(200).json({
            success: true,
            message: 'Conexão com banco de dados OK',
            serverTime: result[0].now
        });
    } catch (error) {
        console.error('Erro na conexão com o banco:', error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};