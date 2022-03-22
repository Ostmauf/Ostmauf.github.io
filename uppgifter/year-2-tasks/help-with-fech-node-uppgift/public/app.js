let sendButton = document.getElementById("btn");

sendButton.addEventListener("click", (e) => {
    fetch("http://localhost:3000/getData", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
})