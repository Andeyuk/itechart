const Sequelize = require('sequelize');
const sequelize = require('../init');

const Model = Sequelize.Model;
class User extends Model {}
User.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
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