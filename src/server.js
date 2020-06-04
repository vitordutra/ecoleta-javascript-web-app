const express = require("express");
const server = express();

// Configurar pasta pública
server.use(express.static("public"));

// Configurar os caminhos da minha aplicação
// Página Inicial
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Ligar o servidor
server.listen(3000);
