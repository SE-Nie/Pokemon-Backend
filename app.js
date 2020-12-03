const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const pokemonRoute = require('./routes/pokemon')
const {PORT = 3000}=process.env
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('common'))
//Routes

app.use('/pokemon', pokemonRoute)






app.listen(PORT,  ()=> {
	console.log(`server started on ${PORT}`)
})
