const Sequelize = require('sequelize');
const sequelize = require('../init')

const Answer = require('./answer');
const User = require('./user');

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
        type: Sequelize.INTEGER,
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
    modelName: 'questions'
});

Question.hasMany(Answer);
Answer.belongsTo(Question);
Question.belongsTo(User);
User.hasMany(Question);

module.exports = Question;