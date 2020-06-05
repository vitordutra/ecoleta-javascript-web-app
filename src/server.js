const express = require("express");
const server = express();

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
  return res.render("index.html", { title: "Um título" });
});

// Preciso criar as outras rotas
// Create-point
server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});
// Ligar o servidor
server.listen(3000);
