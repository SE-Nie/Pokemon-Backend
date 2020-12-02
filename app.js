const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
require ('dotenv/config');

//Routes
const pokemonRoute = require('./routes/pokemon');

app.use('/pokemon',pokemonRoute) ;


app.get('/',(req,res)=> {
    res.send('home');
})

//connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    ()=> console.log('connected to DB!'))


app.listen(4000,function (){
console.log('Server started on 4000');
});
