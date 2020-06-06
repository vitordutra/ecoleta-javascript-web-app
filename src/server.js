const express = require("express");
const server = express();

// Pegar o banco de dados
const db = require("./database/db");

// Configurar pasta pública
server.use(express.static("public"));

// Utilizando Template Engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// Configurar os caminhos da minha aplicação
// Página Inicial
server.get("/", (req, res) => {
  return res.render("index.html", { title: "Ecoleta" });
});

// Preciso criar as outras rotas
// Create-point
server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});

// Search Results
server.get("/search", (req, res) => {
  // Pegar os dados do banco de dados

  db.all(`SELECT * FROM places;`, function (err, rows) {
    if (err) {
      console.log(err);
    }
    // Mostrar a página HTML com os dados do Banco de Dados

    const total = rows.length;

    //                                    ou {places: rows, total}
    return res.render("search-results.html", { places: rows, total: total });
  });
});

// Ligar o servidor
server.listen(3000);
