const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Bem vindo à rota Home!");
});

module.exports = router;

router.get("/", (req, res) => {
    res.render("index", { title: "Página inicial", user: "Robson"});
});