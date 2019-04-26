require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const controller = require("./controller")



let {SERVER_PORT, CONNECTION_STRING} = process.env



massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log(`1- database connected`)
  app.listen(SERVER_PORT, ()=>{
  console.log(`2- listing at ${SERVER_PORT}`)
})

})

app.use(express.json())

app.get('/api/houses', controller.getAll)
app.post('/api/houses', controller.createHouse)
app.delete('/api/houses/:id', controller.delete)


