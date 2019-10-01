const express = require('express');
const router = express.Router();
const passport = require('passport');

const Dish = require('../db/models/dish');


router.get('/generate', (req, res) => {
    Dish
        .bulkCreate(
            [ {name:"lorem4", price: 400, coockingTime: 700, description:'none'},
            {name:"lorem1", price: 400, coockingTime: 700, description:'none'},
            {name:"lorem2", price: 400, coockingTime: 700, description:'none'},])
        .then(r=>res.send('OK'));
  });

  
router.get('/', (req, res) => {

    Dish.findAll().then(dishes=>
        res.send(dishes)
    );

})
  
  module.exports = router;