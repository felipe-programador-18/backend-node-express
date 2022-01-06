const express = require('express')
const api = express()
//create on the door to receive express.js
const poor = 3000
// that command get i have caught in the comunicator

//create way for acess router
const indexRouter = require('./routes/index')
const clientRouter = require('./routes/client')


api.listen(poor, () => console.log('listing of poor' + poor))

api.use((req, res, next) => {
    console.log('passed through here')
    next()
})

api.use('/', indexRouter)
api.use('/client', clientRouter)