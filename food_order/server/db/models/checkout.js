const Sequelize = require('sequelize');
const sequelize = require('../init');

const Dish = require('./dish');
const User = require('./user');

const Model = Sequelize.Model;
class Checkout extends Model {};

Checkout.init({
    amount: {
        type: Sequelize.INTEGER,
    }
}, {
    sequelize,
    tableName: 'checkout',
});

User.belongsToMany(Dish, {through: Checkout});
Dish.belongsToMany(User, {through: Checkout});


module.exports = Checkout;