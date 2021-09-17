const Sequelize = require("sequelize");
const { ToDoList } = require("./models");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3012;
const path = require("path")

const es6Renderer = require('express-es6-template-engine');
const { response } = require("express");

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use("/client", express.static(path.join(__dirname, 'client')));
app.use(express.json());
app.use(cors());

app.get('/', async(req, res) => {
    const { handle } = req.params;
    const toDo = db.find(f => f.handle === handle)
    res.render('index')
    if (index2) {
        res.render('index', {
            locals: {
                toDo
            }
        });
    } else {
        res.status(404).send(`no matching data in ${handle}`)
    }
    // res.send(console.log("hi"))
})

app.post("/create_todo", async(req, res) => {
    const { toDoName } = req.body;
    const newToDo = await ToDoList.create({
        toDoName: toDoName
    });
    res.send(`Inserted New ToDo with ${newToDo.toDoName} ${newToDo.id}`);
});

app.post("/get_todo", async(req, res) => {
    const todo = await ToDoList.findAll();
    res.send(todo);
    // res.render("index", { locals: { todo } });
});

app.post("/update_todo/:id", async(req, res) => {
    const todo = await ToDoList.update(req.body, {
        where: {
            id: req.params.id,
        },
    });
    res.send(todo);
});

app.post("/delete_todo/:id", async(req, res) => {
    const todo = await ToDoList.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.send("Deleted");
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));