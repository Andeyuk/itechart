const Sequelize = require('sequelize');
const sequelize = require('../init');


const Model = Sequelize.Model;
class Answer extends Model {};

Answer.init({
    subjectId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    parentId: {
        type: Sequelize.INTEGER,
        allowNull: false
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
});

Answer.hasMany(Answer, { as: 'reply', foreignKey: 'ParentId' });
Answer.belongsTo(Answer, { as: 'parent', foreignKey: 'ParentId' })


module.exports = Answer;