const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const STORAGE_KEY_USERNAME = "username";

function onSubmitHandler(e) {
    e.preventDefault();

    const username = loginInput.value;
    localStorage.setItem(STORAGE_KEY_USERNAME, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(STORAGE_KEY_USERNAME);
if(savedUsername === null) { 
    // show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSubmitHandler);
} else {
    paintGreetings(savedUsername);
}

