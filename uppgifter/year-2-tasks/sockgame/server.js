const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("chat message", (msg) => {
        console.log(msg);
        io.emit("chatmessage", msg);
    })
})

server.listen(3000, (err) => {
    if(err)throw err
    console.log("server is up!");
})