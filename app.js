const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const pokemonRoute = require('./routes/pokemon')
//require ('dotenv/config');
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('common'))
//Routes

app.use('/pokemon', pokemonRoute)

//connect to DB
//mongoose.connect(process.env.DB_CONNECTION,
//  {useNewUrlParser: true},
//()=> console.log('connected to DB!'))

app.listen(4000, function () {
	console.log('Server started on 4000')
})
