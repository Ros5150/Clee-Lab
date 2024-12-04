const sqlite3 = require("sqlite3").verbose();

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database("users.db", (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err.message);
    } else {
        console.log("Conexão com o banco de dados SQLite estabelecida.");
    }
    db.run(
        `CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                password TEXT NOT NULL
            )`,
            (err) => {
                if (err) {
                    console.error("Erro ao criar a tabela:", err.message);
                } else {
                    console.log("Tabela 'users' verificada/criada com sucesso.");
                }
          }
    );
});

module.exports = db;
