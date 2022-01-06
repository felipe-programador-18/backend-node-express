const express = require('express')
const api = express()
//create on the door to receive express.js
const poor = 3000
// that command get i have caught in the comunicator

//create way for acess router
const indexRouter = require('./routes/index')

api.get('/client/list', (req, res) =>{
   res.send(' here list now')
})
api.get('/client/new', (req, res) =>{
   res.send('Page of clients')
})

api.listen(poor, () => console.log('listing of poor' + poor))

api.use('/', indexRouter)