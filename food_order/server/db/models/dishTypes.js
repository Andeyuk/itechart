const Sequelize = require('sequelize');
const sequelize = require('../init');

const Model = Sequelize.Model;
class DishTypes extends Model {}

DishTypes.init({
    type:{
        type: Sequelize.STRING,
    }
}, {
    sequelize,
})





module.exports = DishTypes;