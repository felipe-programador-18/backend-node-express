const express = require('express')
const router = express.Router()

//here i have export controllers
const Clientscontrollers = require('../controllers/clients')
const Indexcontrollers = require('../controllers/clients')

// here i take and before name change to router!!
router.get('/list', Clientscontrollers)

router.get('/new',Indexcontrollers)

module.exports = router
