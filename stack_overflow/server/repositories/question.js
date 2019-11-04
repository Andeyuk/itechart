
const BasicRepository = require('./basicRepository');
const Model = require('../db/models/question');
const AnswerModel = require('../db/models/answer');
const UserModel = require('../db/models/user');
const SequelizeErrorHandler = require('../utils/helpers/throwSequelizeError');


class QuestionsRepository extends BasicRepository{
    async getById(id, options){
        try {
            return await this.Model.findByPk(id, {
                include: [{
                        model: UserModel,
                    }, {
                        model: AnswerModel,
                        where:{
                            parentId: null,
                            
                        },
                        include: [
                            {
                                model: UserModel,
                            }, {
                                model: AnswerModel,
                                as: 'reply',
                                include: {
                                    model: UserModel,
                                }
                            }
                        ],
                        required: false,
                    }
                ],
                ...options
            })
        } catch (error){
            SequelizeErrorHandler(error)
        }
    }

    async findAll(){
        try {
            return await this.Model.findAll({
                include: {
                    model: UserModel,
                },
                order:['createdAt']
            })
        } catch (error){
            SequelizeErrorHandler(error)
        }
    }
}

module.exports = new QuestionsRepository(Model);