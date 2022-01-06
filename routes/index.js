const express = require('express')
const router = express.Router()

//here i take o name before was api and trade for Router of rotas!!!
router.get('/', (req, res) =>{
    res.send('Felipe Programer 18')
 })

router.get('/page', (req, res) =>{
    res.send('Felipe smarer ')
 })


 module.exports = router