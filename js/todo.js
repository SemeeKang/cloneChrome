const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");


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

    paintTodo(newTodo);
}

todoForm.addEventListener("submit", onSubmitTodoHandler);