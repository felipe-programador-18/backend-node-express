const express = require('express')
const router = express.Router()

// here i take and before name change to router!!
router.get('/client/list', (req, res) =>{
    res.send(' here list now')
 })
 
router.get('/client/new', (req, res) =>{
    res.send('Page of clients')
 })

module.exports = router