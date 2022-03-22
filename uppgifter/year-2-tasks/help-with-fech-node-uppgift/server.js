const express = require("express");
const fs = require("fs");
const server = express();
server.use(express.urlencoded({extended:true}));

server.use(express.static("public"));

server.post("/saveData", (req, res) => {
    let data = req.body;

    let stringify = JSON.stringify(data);
    fs.writeFileSync("users.json", stringify);

    res.sendFile(__dirname + "/public/" + "index.html");
});
server.get("/getData", (req, res) => {
    const data = fs.readFileSync("users.json")
    res.json(JSON.parse(data));
})
server.listen(3000);

