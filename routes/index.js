const express = require('express')
const router = express.Router()

// here i take and before name change to router!!
router.get('/', (req, res) =>{
    res.send('Felipe Programer 18')
 })

router.get('/page', (req, res) =>{
    res.send('Felipe smarer ')
 })


 module.exports = router