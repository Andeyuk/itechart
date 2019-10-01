const Sequelize = require('sequelize');
const sequelize = require('../init')

const Model = Sequelize.Model;
class User extends Model {}
User.init({
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    email:{
        type: Sequelize.STRING,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.ENUM,
        values: ['admin', 'user'],
        defaultValue: 'user',
    }
}, {
    sequelize,
    tableName: 'users',
});


module.exports = User;