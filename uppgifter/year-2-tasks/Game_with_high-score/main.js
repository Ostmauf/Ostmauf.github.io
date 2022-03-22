const express = require("express");
const fs = require("fs");
const server = express();

server.use(express.static("public"));
server.use(express.json())

server.get("/getData", (req, res) => {
    const data = fs.readFileSync("score.json");
    res.json(JSON.parse(data))
});

server.post("/saveData", (req, res) => {
    const data = req.body;
    console.log(data)
})

let a = 0;
server.get("/highscores", (req, res) => {
    a++
    res.send(a.toString())
})

server.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server up successfully!");
    }
});