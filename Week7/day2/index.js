const express = require("express");
const app = express();
const creds = require("./db");

const PORT = 3006;

//middleware to acquire and convert req.body to json
app.use(express.json());

app.get("/getOrders", (req, res) => {
  creds.connect((err, client, release) => {
    if (err) {
      return console.error("Error getting connected to the client", err.stack);
    }
    // replace users2 with the name of a table on your database
    client.query("SELECT * FROM orders", (err, result) => {
      if (err) {
        res.status(400).send(err.stack);
      }
      res.status(200).send(result.rows);
    });
  });
});

app.get("/getCustomers", (req, res) => {
  creds.connect((err, client, release) => {
    if (err) {
      return console.error("Error getting connected to the client", err.stack);
    }
    // replace users2 with the name of a table on your database
    client.query("SELECT * FROM customers", (err, result) => {
      if (err) {
        res.status(400).send(err.stack);
      }
      res.status(200).send(result.rows);
    });
  });
});

app.get("/getCars", (req, res) => {
  creds.connect((err, client, release) => {
    if (err) {
      return console.error("Error getting connected to the client", err.stack);
    }
    // replace users2 with the name of a table on your database
    client.query("SELECT * FROM cars", (err, result) => {
      if (err) {
        res.status(400).send(err.stack);
      }
      res.status(200).send(result.rows);
    });
  });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));