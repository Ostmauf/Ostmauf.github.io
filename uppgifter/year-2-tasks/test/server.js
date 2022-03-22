const express = require('express')
const fs = require('fs')
const server = express()
server.use(express.static('public'))
server.use(express.urlencoded({extended:true}))

server.post('/saveData', (req, res)=>{
    let data = req.body
    let stringify = JSON.stringify(data)
    //Sparar till .json fil
    fs.writeFileSync('users.json', stringify)
    //Servern skickar tillbaka index.html
    res.sendFile(__dirname + '/public/' + 'index.html')
})
server.get('/getData', (req, res)=>{
    const data = fs.readFileSync('users.json')
    res.json(JSON.parse(data)) 
})

server.get("/test", (req, res) => {
    res.send("hello")
})
server.listen(3000)