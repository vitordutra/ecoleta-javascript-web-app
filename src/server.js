const express = require("express");
const server = express();

// Configurar os caminhos da minha aplicação
// Página Inicial
server.get("/", (req, res) => {
  res.send("Hello World!");
});

// Ligar o servidor
server.listen(3000);
