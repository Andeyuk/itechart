const BasicRepository = require('./basicRepository');
const Model = require('../db/models/answer');
const UserModel = require('../db/models/user');
const throwSequelizeError = require('../utils/helpers/throwSequelizeError');

class AnswerRepository extends BasicRepository{
    async findByQuestionId(id){
        try {
            return await this.Model.findAll({
                include: {
                    model: UserModel,
                },
                where: {
                    questionId: id
                }
            })
        } catch (error){
            throwSequelizeError(error)
        }
    }

    async getById(id){
        try {
            return await this.Model.findByPk(id, {
                include: [{
                    model: UserModel,
                }, {
                    model: Model,
                    as: 'reply'
                }]
            })
        } catch (error){
            throwSequelizeError(error)
        }
    }
}

module.exports = new AnswerRepository(Model);