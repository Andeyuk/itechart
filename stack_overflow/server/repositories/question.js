const sequelize = require('../db/init');

const BasicRepository = require('./basicRepository');
const Model = require('../db/models/question');
const AnswerModel = require('../db/models/answer');
const UserModel = require('../db/models/user');
const QuestionVotes = require('../db/models/questionVotes');
const AnswerVotes = require('../db/models/answerVotes');

const throwSequelizeError = require('../utils/helpers/throwSequelizeError');


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
                        as: 'answers',
                        attributes: {
                              include: [[sequelize.fn('SUM', sequelize.col('answers->answer_votes.vote')), 'rating']]
                        },
                        include: [
                            {
                                model: AnswerVotes,
                                attributes: []
                            },{
                                model: UserModel,
                            }, 
                        ],
                        where:{
                            parentId: null,
                        },
                        // include: [{
                        //         model: UserModel,
                        //     }, {
                        //         model: AnswerModel,
                        //         as: 'reply',
                        //         attributes: {
                        //               include: [[sequelize.fn('SUM', sequelize.col('answers->reply->answer_votes.vote')), 'rating']]
                        //         },
                        //         include: [{
                        //                 model: UserModel,
                        //             }, {
                        //                 model: AnswerVotes,
                        //                 attributes: []
                        //             }
                        //         ]
                        //     }
                        // ],
                        required: false,
                    }
                ],
                group: ['questions.id', 'user.id', 'answers.id', 'answers->user.id',], //'answers->reply.id', 'answers->reply->user.id'],
                ...options
            })
        } catch (error){
            throwSequelizeError(error)
        }
    }

    async findById(id, options){
        try {
            return await this.Model.findByPk(id, {
                 attributes: {
                     include: [[sequelize.fn('SUM', sequelize.col('question_votes.vote')), 'rating']]
                },
                include: [{
                    model: UserModel,
                }, {
                    model: QuestionVotes,
                    attributes: []
                }],
                group: ['questions.id', 'user.id'],
                ...options
        })
        } catch (error){
            throwSequelizeError(error)
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
            throwSequelizeError(error)
        }
    }

    async vote(questionId, userId, value){
        try {
            const instance = await this.VoteModel.findOne({
                where:  {
                    userId, 
                    questionId, 
                }
            });


            if (!instance) return this.VoteModel.create({
                userId, 
                questionId,
                vote: value
            })

            instance.vote == value
                ? instance.destroy()
                : instance.vote = value

            return await instance.save()
        } catch (error){
            throwSequelizeError(error)
        }
    }

    async voteUp(questionId, userId){
        return await this.vote(questionId, userId, 1)
    }

    async voteDown(questionId, userId){
        return await this.vote(questionId, userId, -1)
    }
}

module.exports = new QuestionsRepository(Model, QuestionVotes);