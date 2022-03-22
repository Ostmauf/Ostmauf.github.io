const { application } = require("express");
const express = require("express");

let counter = 0;

const server = express();

server.use(express.static("public"));

server.get("/counter", (req, res) => {
    res.send({
        counter: counter
    });
});

server.post("/counter", (req, res) => {
    counter++;
    res.send({
        counter: counter
    });
});

server.listen(3000, () => {
    console.log("Server online!");
});