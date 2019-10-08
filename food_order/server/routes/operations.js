const express = require('express');
const router = express.Router();
const passport = require('passport');

const Dish = require('../db/models/dish');
const Order = require('../db/models/order');
const OrderLine = require('../db/models/orderLine');
const Dish_DishTypes = require('../db/models/dish_dishTypes');
const DishTypes = require('../db/models/dishTypes');
const PopularDishes = require('../db/models/poplarDishes');


const Op = require('sequelize').Op;


router.post('/checkout', passport.authorize('jwt'),(req, res) => {

    const dishIDs = req.body.purchases.map(el=>el.id);

    const dishes = Dish.findAll({
        attributes: ['id','price'],
        where: {
            id: {
                [Op.in]: dishIDs
            }
        },
        raw: true
    })

    const order = Order.create({UserId: req.account.id, isActive: true})

    Promise.all([dishes, order])
        .then(([dishes, order])=>{
            console.log(dishes)
            //rewrite to find
            const bulkArr = req.body.purchases.map((el, ind)=>{
                return {amount: el.amount, price: dishes[ind].price, OrderId: order.id, DishId: dishes[ind].id}
            })
            console.log(bulkArr)
            return OrderLine.bulkCreate(bulkArr)
        })
        .then((orders)=>{
            if(orders)
                res.send({status: 'OK',orders});
        })
        .catch(err=>{console.log(err);res.status(err.status || 404).send(err)});
    
});

//router.patch //role worker
router.get('/complete/order/:id', passport.authorize('jwt'), (req, res) => {
    const id = req.params.id;

    Order.update(
        {isActive: false},
        {where: {id}}
    )
    .catch(err=>res.status(err.status).send(err))
    .then(order=>order ? res.send('OK') : order)

});

router.get('/generateData', async (req, res) => {
    const dishArr = Array(60).fill(0).map((el, ind)=>{
        return {
            name: `lorem${ind + 1}`,
            price: 400,
            cookingTime: 700,
            description: `May we be permitted to recur, for the sake of clearness in the recital, to the simple means which we have already employed in the case of Waterloo.`
        }
    })

    const typesArr = Array(5).fill(0).map((el,i)=>{
        return {
            type: `Lorem${i}`,
        }
    })

    const popularArr = Array(18).fill(0).map((el,i)=>{
        return {
            DishId: i + 1,
        }
    })

    const types = await DishTypes
        .bulkCreate(typesArr)

    const dishes = await Dish
        .bulkCreate(dishArr)

    const popular = await PopularDishes
        .bulkCreate(popularArr)
    

    Promise.all([types, dishes])
        .then(([types, dishes])=>{
            console.log(types)
            const bulkArr = dishes.map(el=>{
                return{
                    DishId: el.id,
                    DishTypeId: (Math.random()*4 ^0)+ 1,
                }
            })
            Dish_DishTypes.bulkCreate(bulkArr)
        })
        .then((r)=>res.send('OK'))
        .catch(err=>res.send(err))
  });




module.exports = router;