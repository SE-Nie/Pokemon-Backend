const express = require ('express');
const app = express();
const cors = require('cors');
const mongoose = require ('mongoose');
require ('dotenv/config');
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
//Routes
const pokemonRoute = require('./routes/pokemon');

app.use('/', pokemonRoute) ;


//connect to DB
//mongoose.connect(process.env.DB_CONNECTION,
  //  {useNewUrlParser: true},
    //()=> console.log('connected to DB!'))


app.listen(4000,function (){
console.log('Server started on 4000');
});
