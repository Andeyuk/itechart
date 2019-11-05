const Sequelize = require('sequelize');
const sequelize = require('../init');

const User = require('./user');
const Answer = require('./answer');


const Model = Sequelize.Model;
class AnswerVotes extends Model {};

AnswerVotes.init({
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    answerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    vote: {
        type: Sequelize.INTEGER,
        values: [-1, 1],
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'answer_votes',
    modelName: 'answer_votes',
});

User.hasMany(AnswerVotes, { as: 'users'});
Answer.hasMany(AnswerVotes);


module.exports = AnswerVotes;