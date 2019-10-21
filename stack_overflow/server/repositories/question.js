
const BasicRepository = require('./basicRepository');
const Model = require('../db/models/question');
const AnswerModel = require('../db/models/answer');
const SequelizeErrorHandler = require('../utils/handlers/sequelizeError');


class QuestionsRepository extends BasicRepository{
    async getById(id){
        try {
            return await this.Model.findByPk(id, {
                include: {
                    model: AnswerModel,
                    include: {
                        model: AnswerModel,
                        as: 'reply',
                    }
                }
            })
        } catch (error){
            SequelizeErrorHandler(error)
        }
    }
}

module.exports = new QuestionsRepository(Model);