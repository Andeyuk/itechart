const Sequelize = require('sequelize');
const sequelize = require('../init');


const Model = Sequelize.Model;
class Checkout extends Model {}
Checkout.init({
    dish_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        primaryKey: true
    },

}, {
    sequelize,
    tableName: 'dishsCheckout',
});



module.exports = Checkout;