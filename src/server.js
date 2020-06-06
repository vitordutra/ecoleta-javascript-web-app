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
  return res.render("search-results.html");
});

// Ligar o servidor
server.listen(3000);
