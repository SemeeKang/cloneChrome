const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onSubmitHandler(e) {
    e.preventDefault();

    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onSubmitHandler)
