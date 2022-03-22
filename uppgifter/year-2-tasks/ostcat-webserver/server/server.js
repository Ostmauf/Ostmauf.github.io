require("dotenv").config();

const axios = require("axios");
const express = require("express");
const server = express();

//Server settings
server.use(express.static("public"));
server.use(express.json());

async function controlLights() {
    try {
        let response = await axios.get("https://10.0.0.2/api/XKrpQFm7LHyCljd6roSjdMJ-Rr1nLIKlQEz-6Pth/lights/9/state")
        console.log(response.body)
    }catch (err) {
        console.log(err)
    }
  
}
controlLights()

server.listen(3000, () => {
    console.log("Server up!");
});