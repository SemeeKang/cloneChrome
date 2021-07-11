const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
const todoContainer = document.querySelector("#todo-container");

let todos = [];

const STORAGE_KEY_TODOS = "todos";

function saveTodos() {
    localStorage.setItem(STORAGE_KEY_TODOS, JSON.stringify(todos));
}


function deleteTodo(event) {
    const item = event.target.parentElement;
    item.remove();

    todos = todos.filter(todo => todo.id !== parseInt(item.id));
    saveTodos();

}

function paintTodo(todo) {
    const item = document.createElement("li");
    item.id = todo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.addEventListener("click", deleteTodo);

    span.innerText = todo.text;

    item.appendChild(span);
    item.appendChild(button);
    todoList.appendChild(item);
}


function onSubmitTodoHandler(e) {
    e.preventDefault();
    
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);

    saveTodos();
}

function paintTodos() {
    const savedTodos = localStorage.getItem(STORAGE_KEY_TODOS);
    if(savedTodos) {
        const parsedTodos = JSON.parse(savedTodos);
        todos = parsedTodos;
        parsedTodos.forEach(item => paintTodo(item));
    }
    todoContainer.classList.remove(HIDDEN_CLASSNAME);
}

todoForm.addEventListener("submit", onSubmitTodoHandler);

const username = localStorage.getItem(STORAGE_KEY_USERNAME);
if(username !== null) {
    paintTodos();
}  else {
    todoContainer.classList.add(HIDDEN_CLASSNAME);
}


