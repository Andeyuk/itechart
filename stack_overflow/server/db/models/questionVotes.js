const Sequelize = require('sequelize');
const sequelize = require('../init');

const User = require('./user');
const Question = require('./question');


const Model = Sequelize.Model;
class QuestionVotes extends Model {};

QuestionVotes.init({
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    questionId: {
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
    tableName: 'question_votes',
    modelName: 'question_votes',
});

User.hasMany(QuestionVotes);
Question.hasMany(QuestionVotes);



module.exports = QuestionVotes;