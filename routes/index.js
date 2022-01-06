const express = require('express')
const Router = express.Router()

//here i take o name before was api and trade for Router of rotas!!!
Router.get('/', (req, res) =>{
    res.send('Felipe Programer 18')
 })

 Router.get('/page', (req, res) =>{
    res.send('Felipe smarer ')
 })


 module.exports = Router