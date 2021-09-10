require("dotenv").config();
const express = require("express");
const token = process.env.API_TOKEN;
const URL = process.env.URL;
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(URL, token);

const app = express();

// middleware starts
app.use(express.json());

// middleware ends

const PORT = 3001;

app.post("/createStock", async (req, res) => {
  const { data, error } = await supabase.from("Stonks").insert([req.body]);
  res.send(console.log(data));
});

app.get("/createStock", async (req, res) => {
  const { data, error } = await supabase.from("Stonks").select();
  res.send(data);
});

app.put("/updateStock/:name", async (req, res) => {
  const id = req.params.name;
  const { data, error } = await supabase
    .from("Stonks")
    .update(req.body)
    .match({ id: id });
  res.send(data);
});

app.delete("/deleteStock/:name", async (req, res) => {
  const id = req.params.name;
  const { data, error } = await supabase
    .from("Stonks")
    .delete()
    .match({ id: id });
  res.send(data);
});

app.listen(PORT, console.log(`listening on ${PORT}`));
