// Importar a dependência do sqlite3

const sqlite3 = require("sqlite3").verbose();

// Criar p pnketp qie irá fazer operações no banco de Dados
const db = new sqlite3.Database("./src/database/database.db");

//Ultilizar o objeto de banco de dados para as nossas operações
db.serialize(() => {
  // Criar uma tabela com comandos SQL
  db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );

    `);
  // Inserir dados na tabela
  db.run(`
        INSERT INTO places (image,
            image,
            name,
            address,
            address2,
            state,
            city,
            items
            ) VALUES (?,?,?,?,?,?,?);
    `);
  // Consultar os dados na tabela

  // Deletar um dado na tabela
});
