function authMiddleware(req, res, next) {
    if (req.session.user) {
        next(); // Se o usuário está logado, permite o acesso
    } else {
        res.redirect("/login"); // Caso contrário, redireciona para o login
    }
}

module.exports =authMiddleware;