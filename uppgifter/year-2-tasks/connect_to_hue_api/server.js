const express = require("express");
const server = express();

require("dotenv").config();
const axios = require("axios");

const controlLight = async(lightId, onOrOff) => {
    try {
        return await axios.put(
            `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/${lightId}/state`, 
            { on: onOrOff });
    }catch(err){
        console.log(error)
    }
}

server.get("/api", (req, res) => {

console.log(req);
controlLight(2, false);
})

server.listen(3000);


