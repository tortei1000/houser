require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')



let {SERVER_PORT, CONNECTION_STRING} = process.env



massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log(`2- database connected`)
})

app.use(express.json())



app.listen(SERVER_PORT, ()=>{
  console.log(`1- listing at ${SERVER_PORT}`)
})

