const Sequelize = require('sequelize');
const sequelize = require('../init');

const Model = Sequelize.Model;
class User extends Model {};

User.init({
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    seniority: {
        type: Sequelize.INTEGER,
    },
    workingPosition: {
        type: Sequelize.STRING 
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