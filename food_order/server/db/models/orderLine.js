const Sequelize = require('sequelize');
const sequelize = require('../init');

const Order = require('./order');
const Dish = require('./dish');

const Model = Sequelize.Model;
class OrderLine extends Model {}

OrderLine.init({
    OrderId: Sequelize.INTEGER,
    DishId: Sequelize.INTEGER,
    amount: Sequelize.INTEGER,
    price: Sequelize.FLOAT,
}, {
    sequelize,
    timestamps: false,
})

Order.hasMany(OrderLine);
Dish.hasOne(OrderLine);



module.exports = OrderLine;