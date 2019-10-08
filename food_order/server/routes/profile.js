const express = require('express');
const router = express.Router();
const passport = require('passport');

const Sequelize = require('sequelize');

const Order = require('../db/models/order');
const OrderLine = require('../db/models/orderLine');
const Dish = require('../db/models/dish');

router.get('/history', (req, res) => {
    Order.findAll({
        attributes: [
            [Sequelize.literal(`(SELECT SUM("OrderLines"."total") FROM "OrderLines" 
            WHERE  "OrderLines"."OrderId" = "Order"."id")`), 'totalCost'],
            'id',
            'createdAt',
        ],

        include:{
            attributes: ['id', 'amount', 'price'],
            model: OrderLine,
            include:{
                attributes: ['name', 'id'],
                model: Dish
            },
        },
        nest: true,
        group: ['Order.id', "OrderLines.id", "OrderLines->Dish.name", "OrderLines->Dish.id"],
    })
    .then((orders)=>res.send(orders))
    
});


module.exports = router;
