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

// Conexão direta
// const conn = mysql.createConnection(config);

// const sqlDDL = `CREATE TABLE people(id int not null auto_increment, name varchar(255), primary key(id))`;
// conn.query(sqlDDL);

// const sql = `INSERT INTO people(name) values ('Fulano')`;
// conn.query(sql);

// conn.end();

// Usando pool
const pool = mysql.createPool(config);

// 1. Cria a tabela 'people' se ela não existir
const sqlDDL = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`;
pool.query(sqlDDL, (err) => {
  if (err) {
    console.error("Erro ao criar tabela:", err);
  } else {
    console.log("Tabela 'people' garantida.");

    // 2. Limpa a tabela
    const del = `DELETE FROM people;`;
    pool.query(del, (err) => {
      if (err) {
        console.error("Erro ao deletar os dados:", err);
      } else {
        console.log("Dados deletados.");

        // 3. Insere um dado de exemplo
        const sql = `INSERT INTO people(name) VALUES ('Fulano')`;
        pool.query(sql, (err) => {
          if (err) {
            console.error("Erro ao inserir dados:", err);
          } else {
            console.log("Dado inserido.");
          }
        });
      }
    });
  }
});

app.get("/", (req, res) => {
  pool.query("SELECT * FROM people", (err, results) => {
    if (err) {
      res.status(500).send("Erro ao consultar o banco de dados.");
    } else {
      // Retorna os resultados como uma lista em HTML simples
      const peopleList = results
        .map((person) => `<li>${person.name}</li>`)
        .join("");
      res.send(
        `<h1>FC</h1></br><h1>Lista de Pessoas</h1><ul>${peopleList}</ul>`
      );
    }
  });
});

app.listen(port, () => console.log(`Rodando na porta ${port}`));
