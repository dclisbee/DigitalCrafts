const submitButton = document.querySelector(".submit");
const todoList = document.querySelector(".todo-list");

const readToDo = async() => {
    const url = "http://localhost:3012/get_todo";
    const userToDo = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await userToDo.json();
    console.log(json)
}

const createToDo = async() => {
    const url = "http://localhost:3012/create_todo";
    const toDoName = document.querySelector(".todo").value;
    const userToDo = {
        toDoName,
    }

    const createToDos = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userToDo),
    });
}
submitButton.addEventListener("click", () => {
    createToDo();
})
readToDo();