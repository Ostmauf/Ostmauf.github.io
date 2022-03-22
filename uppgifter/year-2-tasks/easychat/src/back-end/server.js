const express = require("express");
const server = express();
const path = require("path");

server.use(express.static(path.join(__dirname, "../front-end")))
server.use(express.json());

server.post("/message", (req, res) => {
    console.log(req.body)
});

server.listen(3000);