const express = require('express');
const router = express.Router();

const Dish = require('../db/models/dish');
const Op = require('sequelize').Op;
const Checkout = require('../db/models/dishCheckout');

router.post('/checkout', (req, res) => {
  console.log(req.body);
  let IDs = req.body.dishes.map(el=>el.id);
  Dish.findAll({
    where: {
      id: {
        [Op.in]: IDs
      }
    }
  }).then(dishes=>{
    const arr = dishes.map((el)=>{
      return { 
        dish_id: el.id,
        user_id: req.body.user.id,
      }
    })
    console.log(arr,'sadsdasd');
    arr.forEach(el=>{
      let dish=req.body.dishes.find(dish=>dish.id === el.dish_id);
      if (dish.amount) arr.unshift(el);
    })
    console.log(arr,'sadsdasd');
    Checkout.bulkCreate(arr);
  })
    
  res.send('ok');
});

module.exports = router;
