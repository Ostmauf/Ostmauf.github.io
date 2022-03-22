const express = require("express");

const question = {
    description: "Vilken färgs gummibjörn är godast?",
    answers: ["Röd", "Grön", "Gul", "Orange", "Vit"],
    result: [0, 0, 0, 0, 0],
    totalResults: 0,
};

const server = express();

server.use(express.static("public"));
server.use(express.json());

server.get("/question", (req, res) => {
    res.send(question);
});

server.post("/question", (req, res) => {
    const answer = req.body.answer;
    const resultIndex = question.answers.indexOf(answer);
    question.result[resultIndex]++;
    question.totalResults++;
    res.send(question);
});

server.listen(3000, () => {
    console.log("Server started!");
});