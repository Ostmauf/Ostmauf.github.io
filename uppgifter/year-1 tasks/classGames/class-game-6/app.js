//Create Variables
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Create Event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Funktions

function addTodo(event) {

    //TAKES AWAY RELODING PAGE
    event.preventDefault();

    //todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    
    //ADD TODO TO LOCALSTORAGE
    saveLocalTodos(todoInput.value);

    //Complete Button.
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Create trash Button.
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);

    //Clear Todo INPUT VALUE
    todoInput.value = "";

}

function deleteCheck(e) {

    const item = e.target;
    const todo = item.parentElement;

    //Delete todo
    if (item.classList[0] === "trash-btn") {

        todo.classList.add("fall")
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function() {
            todo.remove();
        })

    }

    //Check mark todo
    if (item.classList[0] === "complete-btn") {

        todo.classList.toggle("completed");

    }

}

function filterTodo(e) {

    const todos = todoList.childNodes;
    todos.forEach(function(todo) {

        switch (e.target.value) {

            case "all":

                todo.style.display = "flex";
                break;

            case "completed":
                if (todo.classList.contains("completed")) {

                    todo.style.display = "flex";

                } else {

                    todo.style.display = "none";

                }
                break;

            case "uncompleted":
                if(!todo.classList.contains("completed")) {

                    todo.style.display = "flex";
                
                } else {

                    todo.style.display = "none";

                }
                break;
            
            }

    });
}

function saveLocalTodos(todo) {

    let todos;
    if(localStorage.getItem("todos") === null) {

        todos = [];

    }else{

        todos = JSON.parse(localStorage.getItem("todos"));

    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function getTodos() {

    let todos;
    if(localStorage.getItem("todos") === null) {

        todos = [];

    }else{

        todos = JSON.parse(localStorage.getItem("todos"));

    }

    todos.forEach (function(todo) {

    //todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Complete Button.
    const completedButton = document.createElement("button");

    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Create trash Button.
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    });
}

function removeLocalTodos(todo) {

    if(localStorage.getItem("todos") === null) {

        todos = [];

    }else{

        todos = JSON.parse(localStorage.getItem("todos"));

    }

    todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));

}