const Sequelize = require('sequelize');
const sequelize = require('../init');

const Order = require('./order');
const Dish = require('./dish');

const Model = Sequelize.Model;
class OrderLine extends Model {}

OrderLine.init({
    OrderId: {
        type: Sequelize.INTEGER,
        foreignKey: {
            references: Order,
        }
    },
    DishId: {
        type: Sequelize.INTEGER,
        foreignKey: {
            references: Dish,
        }
    },
    amount: Sequelize.INTEGER,
    price: Sequelize.FLOAT,
    total: {
        type: Sequelize.FLOAT,
    }
}, {
    sequelize,
    timestamps: false,
})

OrderLine.beforeCreate((userInstance) => {
    userInstance.total = userInstance.amount * userInstance.price;
  })
OrderLine.beforeBulkCreate((instances) => {
    instances.forEach(instance=>
        instance.total = instance.amount * instance.price
    )
})

Order.hasMany(OrderLine);
OrderLine.belongsTo(Order);

Dish.hasOne(OrderLine);
OrderLine.belongsTo(Dish);



module.exports = OrderLine;