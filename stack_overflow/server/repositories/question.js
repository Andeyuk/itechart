
const BasicRepository = require('./basicRepository');
const Model = require('../db/models/question');
const AnswerModel = require('../db/models/answer');
const UserModel = require('../db/models/user');
const QuestionVotes = require('../db/models/questionVotes');

const SequelizeErrorHandler = require('../utils/helpers/throwSequelizeError');


class QuestionsRepository extends BasicRepository{
    constructor(Model, VoteModel){
        super(Model)
        this.Model = Model;
        this.VoteModel = VoteModel;
    }
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

    async vote(answerId, userId, value){
        try {
            const [instance, created] = await this.VoteModel.findOrBuild({
                where:  {
                    userId, 
                    answerId, 
                    vote: 1
                }
            });

            if (created) return await instance.save();

            instance.vote == value
                ? instance.destroy()
                : instance.vote = 1

            return await instance.save()
        } catch (error){
            throwSequelizeError(error)
        }
    }

    async voteUp(answerId, userId){
        return this.vote(answerId, userId, 1)
    }

    async voteDown(answerId, userId){
        return this.vote(answerId, userId, 1)
    }
}

module.exports = new QuestionsRepository(Model, QuestionVotes);