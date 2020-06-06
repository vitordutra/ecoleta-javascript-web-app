// Importar a dependência do sqlite3

const sqlite3 = require("sqlite3").verbose;

// Croar p pnketp qie irá fazer operações no banco de Dados
const db = new sqlite3.Database("./src/database/database.db");
