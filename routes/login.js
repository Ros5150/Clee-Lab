const express = require("express");
const router = express.Router();

// Página de Login (GET)
router.get("/", (req, res) =>{
    res.render("login");
});

// Processar o Login (POST)
router.post("/",(req, res) => {
    const { username, password } = req.body;

    // Validação de credenciais do usuário
    // Exemplo de validação c/DB
    if (username === "admin"  && password === 123456) {
        req.session.username; // Salva o usuario na sessão 
        res.redirect("/dashboard"); // Redireciona para a área restrita
    } else {
        res.send("Usuario ou senha inválidos");
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy(); // Destroi a sessão
    res.redirect("/login"); // Redireciona para o login
});

module.exports = router;