const Sequelize = require('sequelize');
const sequelize = require('../init');

const Dish = require('./dish');

const Model = Sequelize.Model;
class PopularDishes extends Model {}

PopularDishes.init({
    DishId: {
        type: Sequelize.INTEGER,
        foreignKey: {
            references: Dish,
        },
        unique: true,
    },
}, {
    sequelize,
})

PopularDishes.belongsTo(Dish);
Dish.hasOne(PopularDishes);

module.exports = PopularDishes;