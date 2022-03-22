const { response } = require("express");
const express = require("express");
const server = express();

server.use(express.static("public"));
server.use(express.json());

server.listen(3000, () => console.log("Server up"));

server.post("/chat", (req, res) => {
    console.log(req.body.text);
    res.json({status: "message received"});
    res.end();
});

