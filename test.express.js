const express = require('express')
const api = express()

//create on the door to receive express.js
const poor = 3000
// that command get i have caught in the comunicator
api.get('/', (req, res) =>{
   res.send('Felipe Programer 18')
})
api.get('/page', (req, res) =>{
   res.send('Felipe smarer ')
})
api.get('/client/list', (req, res) =>{
   res.send(' here list now')
})
api.get('/client/new', (req, res) =>{
   res.send('Page of clients')
})

api.listen(poor, () => console.log('listing of poor' + poor))