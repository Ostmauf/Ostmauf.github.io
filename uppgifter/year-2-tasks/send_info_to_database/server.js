const express = require('express')
const server = express()
const mongoose = require('mongoose')
server.use(express.static('public'))
server.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://ostmauf:jagisdatabruh69@ostmauf-cluster.foymw.mongodb.net/')
const db = mongoose.connection

db.on('open', (err)=>{
    if(err)throw err
    console.log('connected to database');
})
// skapar en model för hur det ska spara is databasen
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const Users = mongoose.model('usersModel', userSchema, 'users')

server.get('/users', (req, res)=>{
    async function findAll(){
        let data = await Users.find({})
        res.send(data)
    }
    findAll()
})

server.post('/add', (req, res)=>{
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let data = new Users({
        name: name,
        email: email,
        password:password
    })
    data.save((err)=>{
        if(err){
            console.log(err);
        }
        console.log('saved');
    })
    res.redirect('/')
})

server.listen(3000)