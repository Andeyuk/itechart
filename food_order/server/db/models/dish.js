const Sequelize = require('sequelize');
const sequelize = require('../init');

const User = require('./user');

const Model = Sequelize.Model;
class Dish extends Model {}
Dish.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    coockingTime: {
        type: Sequelize.INTEGER,//seconds
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    }

}, {
    sequelize,
    tableName: 'dishes',
});

Dish.belongsToMany(User, {
    through: 'checkout',
});
User.belongsToMany(Dish, {
    through: 'checkout'
})

module.exports = Dish;