const Sequelize = require('sequelize');
const sequelize = require('../init');

const Question = require('./question');

const bindQueriesToModel = require('../queries/answer');

const Model = Sequelize.Model;
class Answer extends Model {};

Answer.init({
    subjectId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    parentId: {
        type: Sequelize.INTEGER,
    },
    answerLevel: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    content:{
        type: Sequelize.STRING,
        allowNull: false
    },
    upVotes: {
        type: Sequelize.STRING,
        defaultValue: 0
    },
    downVotes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },

}, {
    sequelize,
    tableName: 'answers',
});

Answer.hasMany(Answer);
Answer.belongsToMany(Answer, { as: 'reply', through: 'AnswerReply' })
//Answer.belongsTo(Question);
bindQueriesToModel(Answer);


module.exports = Answer;