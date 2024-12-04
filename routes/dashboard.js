const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware"); // Importa o middleware

//Dashboard protegido
router.get("/", authMiddleware, (req, res) => {
    res.send(`Bem-vindo ao dashboard, ${req.session.user}!`);
});

module.exports = router;