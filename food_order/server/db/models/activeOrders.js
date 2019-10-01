const Sequelize = require('sequelize');
const sequelize = require('../init');

const Order = require('./dishAmount');

const Model = Sequelize.Model;
class ActiveOrders extends Model {}

ActiveOrders.init({
 
}, {
    sequelize
})

ActiveOrders.hasMany(Order);

module.exports = ActiveOrders;