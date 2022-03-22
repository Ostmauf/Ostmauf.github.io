let socket = io();
console.log(socket);

const messages = document.getElementById("chat");
const form = document.getElementById("form");
const chatMessage = document.getElementById("chat-input");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (chatMessage.value) {
        socket.emit("chat message", chatMessage.value);
        chatMessage.value = ""
    }
})

socket.on("chat message", (msg) => {
    chat.value = msg
    console.log(msg);
})