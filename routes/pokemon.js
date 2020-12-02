const express = require ('express');
const router = express.Router();
const fs = require('fs');
const rawdata = fs.readFileSync("pokemondata.json")
const pokemonData = JSON.parse(rawdata)

router.get('/',(req, res)=>{

    console.log(pokemonData);
    res.send(pokemonData.name);

});


router.get('/:id',(req, res)=>{
    res.send('indiv by id');
});



router.get('/:id/:info',(req, res)=>{
    res.send('name type base');
});







module.exports = router;