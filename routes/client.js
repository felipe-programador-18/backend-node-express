const express = require('express')
const router = express.Router()

//here i have export controllers
const Clientscontrollers = require('../controllers/clients')
const Indexcontrollers = require('../controllers/clients')

// here i take and before name change to router!!
router.get('/list', Clientscontrollers.list)
router.get('/new',Indexcontrollers.Newlist)

module.exports = router
