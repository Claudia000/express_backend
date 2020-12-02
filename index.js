//module
require('dotenv').config()
const express = require('express') 
const mongoose = require('mongoose')

const app = express()

//variables
const dbLink = process.env.DBLINK
const port = process.env.PORT

mongoose.connect(dbLink, {useNewUrlParser: true, useInifiedTopology: true, useCreateIndex: true, }, () => {
  app.listen(port, () =>{ 
    console.info('DATABASE CONNNECTED, SERVER IS UP!')

})
})

// serve Static Files in Express
app.use('/something', express.static('public'))


app.get('/', (req,res) => {
  res.status(200).send('<h1> hey whats up </h1>')
})

//database





    

