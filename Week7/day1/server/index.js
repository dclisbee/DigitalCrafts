const express = require("express");
const app = express();
const creds = require("./db");

const PORT = 3006;

//middleware

app.use(express.json());

app.get("/getUserData", (req, res) => {
  creds.connect((err, client, release) => {
    if (err) {
      return console.error("Error getting connected to the client", err.stack);
    }
    client.query("SELECT * FROM users", (err, result) => {
      if (err) {
        res.status(400).send(err.stack);
      }
      res.status(200).send(result.rows);
    });
  });
});

app.post("/getUserData", (req, res) => {
    // res.send(req.body);
  creds.connect((err, client, release) => {
    if (err) {
      return console.error("Error getting connected to the client", err.stack);
    }
    client.query(`INSERT INTO users (id, name) VALUES (${req.body.id},'${req.body.name}');`, (err, result) => {
      if (err) {
        res.status(400).send(err.stack);
      }
      res.status(200).send(result.rows);
    });
  });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
