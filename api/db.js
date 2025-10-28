const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'sql303.infinityfree.com',
    user: process.env.DB_USER || 'if0_40270616',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'if0_40270616_gamelink',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;