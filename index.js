const express = require("express");
const app = express();
const port = 3000;

//MIddleware para arquivos estáticos
app.use(express.static("public"));

//Rota inicial
app.get("/", (req, res) => {
    res.send("Bem-vindo ao Projeto CleeLab !");
});

//Servidor ouvindo na porta
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const homeRoutes = require("./routes/home");
app.use("/", homeRoutes);

app.set("view engine", "ejs");
app.set("views","./views");

const pedidosRoutes = require("./routes/pedidos");
app.use("/pedidos", pedidosRoutes);

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const loginRoutes = require("./routes/login");
app.use("/login", loginRoutes); // Rota de tela de login

const session = require("express-session");

// Configurar sessões
app.use(
    session({
        secret: "batata-doce-e-ruim",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }, // True apenas se estiver com HTTPS
    })

);

const dashboardRoutes = require("./routes/dashboard");
app.use("/dashboard", dashboardRoutes);

const sqlite3 = require("sqlite3").verbose();

// Conectando ao DB
const db = new sqlite3.Database("users.db", (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err.message);
    } else {
    console.log("Conectado ao banco de dados SQLite.");
    }
});

// Criar tabela de usuários
db.run(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    )`
    
        
    
);

const registerRoutes = require("./routes/register");
app.use("/register", registerRoutes);