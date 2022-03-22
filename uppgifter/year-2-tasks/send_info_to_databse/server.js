const express = require("express");
const server = express();

server.use(express.static("public"));

server.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/public' + '/login.html')
})

server.listen(3000);