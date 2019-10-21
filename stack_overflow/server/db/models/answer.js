const Sequelize = require('sequelize');
const sequelize = require('../init');


const Model = Sequelize.Model;
class Answer extends Model {};

Answer.init({
    QuestionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    parentId: {
        type: Sequelize.INTEGER,
    },
    answerLevel: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    content:{
        type: Sequelize.STRING,
        allowNull: false
    },
    upVotes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    downVotes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },

}, {
    sequelize,
    tableName: 'answers',
    modelName: 'answer',
});

Answer.hasMany(Answer, { as: 'reply', foreignKey: 'parentId' });
Answer.belongsTo(Answer, { as: 'parent', foreignKey: 'parentId' })


module.exports = Answer;