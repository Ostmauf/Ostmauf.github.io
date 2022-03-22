//Getting express and putting it in the server variable.
const express = require("express");
const server = express();

//Making the srevr use the public mapp for the front end.
server.use(express.static("public"));

//Making server know i am gonna get a json format form front end.
server.use(express.json());

//Making start background color for front end.
let websiteBackgroundColor = {color: "white"};

//sending current background color for front end.
server.get("/backgroundcolor", (req, res) => {
    res.send(websiteBackgroundColor);
});

//Getting and saving current front end background color to server.
server.post("/backgroundcolor", (req, res) => {
    websiteBackgroundColor.color = req.body.backgroundColor;
}); 

//Starting server.
server.listen(3000, () => {
    console.log("Server is up!");
});
