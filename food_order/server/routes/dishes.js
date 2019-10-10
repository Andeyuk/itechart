const express = require('express');
const router = express.Router();
const passport = require('passport');
const sequelize = require('../db/init');
const Sequelize = require('sequelize');

const Dish = require('../db/models/dish');
const PopularDishes = require('../db/models/poplarDishes');
const Order = require('../db/models/order');
const OrderLine = require('../db/models/orderLine');


  
router.get('/', (req, res) => {
    const {start, limit} = req.query;
    let options = {};

    if (+limit)
        options = {offset: start, limit};

    Dish.findAll({
        attributes: {
            include: [
                [sequelize.fn('SUM', sequelize.col('OrderLine.amount')), 'isCookingAmount'],
                //should add cont?
            ], 
            exclude: ['createdAt', 'updatedAt']
        },
        include: [{
            attributes: [],
            model: OrderLine,
            include:{
                attributes: [],
                model: Order,
                where:{
                    isActive: true,
                },
                //required:true,
            }
        },],
        ...options,
        group: ['Dish.id'],
        order: ['id',],
        raw: true,

    }).then(dishes=>
        res.send(dishes)
    );
 
})

router.get('/popular', (req, res) => {
    const {start = 0, limit = 30} = req.query;

    PopularDishes.findAll({
        attributes: [
            [Sequelize.col('Dish.id'), 'id'],
            [Sequelize.col('Dish.name'), 'name'],
            [Sequelize.col('Dish.cookingTime'), 'cookingTime'],
            [Sequelize.col('Dish.price'), 'price'],
            [Sequelize.col('Dish.description'), 'description'],
            [Sequelize.fn('SUM', sequelize.col('Dish->OrderLine.amount')), 'isCookingAmount'],
        ],
        include:{
            attributes: [],
            model: Dish,
            include: [{
                attributes: [],
                model: OrderLine,
                include:{
                    attributes: [],
                    model: Order,
                    where:{
                        isActive: true,
                    },
                    //required:true,
                }
            }]
        },
        offset: start,
        limit: limit,
        group:[
            'PopularDishes.id',
            'Dish.id'
        ],
        raw: true,

    }).then(dishes=>
        res.json(dishes)
    );
});
  
  module.exports = router;