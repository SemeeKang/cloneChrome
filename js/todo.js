const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

let todos = [];

const STORAGE_KEY_TODOS = "todos";


function saveTodos() {
    localStorage.setItem(STORAGE_KEY_TODOS, JSON.stringify(todos));
}


function deleteTodo(event) {
    const item = event.target.parentElement;
    item.remove();
}

function paintTodo(todo) {
    const item = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", deleteTodo);

    item.appendChild(span);
    item.appendChild(button);
    span.innerText = todo;

    todoList.appendChild(item);
}


function onSubmitTodoHandler(e) {
    e.preventDefault();
    
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo);

    paintTodo(newTodo);

    saveTodos();
}

todoForm.addEventListener("submit", onSubmitTodoHandler);

const savedTodos = localStorage.getItem(STORAGE_KEY_TODOS);
if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(item => paintTodo(item));
    
}