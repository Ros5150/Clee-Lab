const express = require("express");
const router = express.Router();

// Rota GET para exibir o formulário
router.get("/novo", (req, res) => {
    res.render("pedido-form", { title: "Novo Pedido" });
});

//Rota POST para salvar o pedido
router.post("/salvar", (req, res) => {
    const { nome, descricao } = req.body;
    if (!nome || !descricao) {
        return res.send("Por favor, preencha todos os campos.");
    }
    console.log(`Pedido recebido: ${descrcao}`);
    res.send("Pedido salvo com sucesso!");
});

module.exports = router;
