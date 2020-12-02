const express = require ('express');

const router = express.Router();

router.get('/',(req, res)=>{
    res.send('all data');
});

router.get('/pokemon/:id',(req, res)=>{
    res.send('indiv by id');
});


router.get('/pokemon/:id/:info',(req, res)=>{
    res.send('name type base');
});







module.exports = router;