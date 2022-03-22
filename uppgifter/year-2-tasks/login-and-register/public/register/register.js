const usrName = document.querySelector("#user-name");
const usrPsswd = document.querySelector("#user-password");
const registerButton = document.querySelector("#register-button");

registerButton.addEventListener("click", onRegisterButtonClicked)

function onRegisterButtonClicked() {
    user = {
        username: usrName.value,
        password: usrPsswd.value,
    }
    
    fetch("/register", {
        method: "post",
        body: JSON.stringify(user),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

