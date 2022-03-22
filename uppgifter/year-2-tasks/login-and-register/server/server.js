require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect(process.env.MONGO_DB_URL);

const server = express();
server.use(express.static("public"));
server.use(express.json());

server.post("/register", (req, res) => {
    console.log(req.body);
    res.json({Status:"Success!!!"});
});

server.listen(3000, () => {
    console.log("server started!");
});
