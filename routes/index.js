const express = require('express')
const router = express.Router()

// Have export and controllers here now!!
const Time = require('../controllers/index')
const Moretime = require('../controllers/index')
// here i take and before name change to router!!
router.get('/', Time.recept)
router.get('/page',Moretime.caught)


 module.exports = router