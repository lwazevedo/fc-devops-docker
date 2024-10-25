const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "my_user",
  password: "my_password",
  database: "nodedb",
};

const conn = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values ('Fulano')`;
conn.query(sql);
conn.end();

app.get("/", (req, res) => {
  res.send("<h1>FC</h1>");
});

app.listen(port, () => console.log(`Rodando na porta ${port}`));
