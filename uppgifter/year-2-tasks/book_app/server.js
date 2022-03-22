const express = require('express')
const server = express()
server.use(express.static('public'))
server.set('view engine', 'ejs')

server.get('/', (req, res)=>{
    res.render('index')
})
server.listen(3001) 