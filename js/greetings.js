const loginForm = document.querySelector("#login-form");
const loginContainer = document.querySelector("#login-container");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const STORAGE_KEY_USERNAME = "username";

function onSubmitHandler(e) {
    e.preventDefault();

    const username = loginInput.value;
    localStorage.setItem(STORAGE_KEY_USERNAME, username);
    loginContainer.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
    paintTodos();
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(STORAGE_KEY_USERNAME);
if(savedUsername === null) { 
    // show form
    loginContainer.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSubmitHandler);
} else {
    paintGreetings(savedUsername);
}

