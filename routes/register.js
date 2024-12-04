const express = require("express");
const router = express.Router();
const db = require("../config/db"); // Importe o banco de dados se estiver em outro arquivo

// Rota registrar usuários
router.post("/", (req, res) => {
    const { username, password } = req.body;

    db.run(
        `INSERT INTO users (username, password) VALUES (?,?)`,
        [username, password],
        (err) => {
            if (err) {
                console.error("Erro ao registrar o usuário:", err.message);
                res.status(500).send("Erro ao registrar o usuário.");
            } else {
                res.send("Ususário registrado com sucesso !");
            }
        }


    );
});

module.exports = router;