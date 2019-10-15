const Sequelize = require('sequelize');
const sequelize = require('../init');

const Question = require('./question');
const bindQueriesToModel = require('../queries/user');

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
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
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

User.hasMany(Question);
bindQueriesToModel(User);

module.exports = User;