const Sequelize = require('sequelize');
const sequelize = require('../init');

const User = require('./user');

const Model = Sequelize.Model;
class Order extends Model {}

Order.init({
    UserId: {
        type: Sequelize.INTEGER,
    },
    isActive:{
        type: Sequelize.BOOLEAN,
    }
}, {
    sequelize,
})

User.hasMany(Order);

module.exports = Order;