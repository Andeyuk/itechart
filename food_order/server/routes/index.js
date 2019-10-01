const express = require('express');
const router = express.Router();
const passport = require('passport');

const Dish = require('../db/models/dish');
const User = require('../db/models/user');
const Order = require('../db/models/order');
const OrderLine = require('../db/models/orderLine');

const Op = require('sequelize').Op;



router.post('/checkout', passport.authorize('jwt'), (req, res) => {
    console.log(req.body);
    const dishIDs = req.body.dishes.map(el=>el.DishId);

    const dishes = Dish.findAll({
        where: {
            id: {
                [Op.in]: dishIDs
            }
        }
    })

    const order = Order.create({UserId: req.body.user.id, isActive: true})

    Promise.all([dishes, order])
        .then((vals)=>{

            const bulkArr = req.body.dishes.map((el,ind)=>{
                return {...el, price: vals[0][ind].price, OrderId: vals[1].id}
            })
            
            return OrderLine.bulkCreate(bulkArr)
        })
        .then((orders)=>{
            if(orders)
                res.send({status: 'OK'});
        })
        .catch(err=>res.send(err))
    
});

module.exports = router;
