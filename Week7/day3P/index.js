const Sequelize = require("sequelize");
const { ToDoList } = require("./models");
const express = require("express");
const app = express();
const PORT = 3012;

const es6Renderer = require('express-es6-template-engine');
const { response } = require("express");
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express.json());

app.get('/', async (req,res)=>{
    res.render('home')
})

app.post("/create_todo", async (req, res) => {
  const { toDoName } = req.body;

  const newToDo = await ToDoList.create({
    toDoName: toDoName
  });

  
  res.send(`Inserted New user with ${newToDo.toDoName} ${newToDo.id}`);
});

app.post("/get_todo", async (req, res) => {
  const todo = await ToDoList.findAll();
  res.send(todo);
});

app.post("/update_todo/:id", async (req, res) => {
  const todo = await ToDoList.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.send(todo);
});

app.post("/delete_todo/:id", async (req, res) => {
  const todo = await ToDoList.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("Deleted");
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));