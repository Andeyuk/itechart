const Sequelize = require('sequelize');
const sequelize = require('../init')

const Answer = require('./answer');

const bindQueriesToModel = require('../queries/question');

const Model = Sequelize.Model;
class Question extends Model {};

Question.init({
    header: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    upVotes: {
        type: Sequelize.STRING,
        defaultValue: 0,
    },
    downVotes: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    status: {
        type: Sequelize.ENUM,
        values: ['closed', 'answered', 'active'],
        defaultValue: 'active',
    },
    views: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    }

}, {
    sequelize,
    tableName: 'questions',
});

Question.hasMany(Answer);
bindQueriesToModel(Question);

module.exports = Question;