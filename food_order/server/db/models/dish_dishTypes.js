const Sequelize = require('sequelize');
const sequelize = require('../init');

const Dish = require('./dish');
const DishTypes = require('./dishTypes');

const Model = Sequelize.Model;
class Dish_DishTypes extends Model {}

Dish_DishTypes.init({
    DishId: {
        type: Sequelize.INTEGER,
        foreignKey: {
            references: Dish,
        }
    },
    DishTypeId:{
        type: Sequelize.INTEGER,
        foreignKey: {
            references: DishTypes,
        }
    }
}, {
    sequelize,
})


Dish.belongsToMany(DishTypes, {
    through: {
        model: Dish_DishTypes
    }
})



module.exports = Dish_DishTypes;