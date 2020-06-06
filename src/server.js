const express = require("express");
const server = express();

// Pegar o banco de dados
const db = require("./database/db");

// Configurar pasta pública
server.use(express.static("public"));

// Habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }));

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
  // req.query -> Query strings da nossa url
  console.log(req.query);
  return res.render("create-point.html", { saved: true });
});

server.post("/savepoint", (req, res) => {
  // req-body: O corpo do nosso formulário.
  //console.log(req.body);

  //Inserir dados no Banco de Dados
  const query = `
          INSERT INTO places (
              image,
              name,
              address,
              address2,
              state,
              city,
              items
              ) VALUES (?,?,?,?,?,?,?);
      `;

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items,
  ];

  function afterInsertData(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Cadastrado com Sucesso");
    console.log(this);
    // Retorna só depois de fazer o cadastro
    return res.render("create-point.html", { saved: true });
  }
  db.run(query, values, afterInsertData);
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
