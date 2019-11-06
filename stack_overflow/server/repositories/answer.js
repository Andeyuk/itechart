const sequelize = require('../db/init');
const Op = require('sequelize').Op;

const BasicRepository = require('./basicRepository');
const Model = require('../db/models/answer');
const UserModel = require('../db/models/user');
const AnswerVotes = require('../db/models/answerVotes');

const throwSequelizeError = require('../utils/helpers/throwSequelizeError');



class AnswerRepository extends BasicRepository{
    constructor(Model, VoteModel){
        super(Model)
        this.Model = Model;
        this.VoteModel = VoteModel;
    }
    async findRepliesByQuestionId(id){
        try {
            return await this.Model.findAll({
                attributes: {
                    include: [[sequelize.fn('SUM', sequelize.col('answer_votes.vote')), 'rating']]
                },
                include: [{
                        model: UserModel,
                    }, {
                        model: AnswerVotes,
                        attributes: []
                    },
                ],
                where: {
                    questionId: id,
                    parentId: {
                        [Op.ne]: null
                    }
                },
                group: ['answers.id', 'user.id']
            })
        } catch (error){
            throwSequelizeError(error)
        }
    }

    async findByQuestionId(id){
        try {
            return await this.Model.findAll({
                attributes: {
                    include: [[sequelize.fn('SUM', sequelize.col('answer_votes.vote')), 'rating']]
                },
                include: [{
                        model: UserModel,
                    }, {
                        model: Model,
                        as: 'reply',
                        attributes: {
                            include: [[sequelize.fn('SUM', sequelize.col('reply.answer_votes.vote')), 'rating']]
                        },
                        include: [{
                                model: UserModel,
                            }, {
                                model: AnswerVotes,
                                attributes: []
                            }
                        ]
                    }, {
                        model: AnswerVotes,
                        attributes: []
                    }
                ],
                where: {
                    questionId: id,
                    parentId: null
                },
                group: ['answers.id', 'user.id', 'reply.id', 'reply->user.id']
            })
        } catch (error){
            throwSequelizeError(error)
        }
    }


    
    async getById(id){
        try {
            return await this.Model.findByPk(id, {
                attributes: {
                    include: [[sequelize.fn('SUM', sequelize.col('answer_votes.vote')), 'rating']]
                },
                include: [{
                    model: UserModel,
                }, {
                    model: Model,
                    as: 'reply',
                    attributes: {
                        include: [[sequelize.fn('SUM', sequelize.col('reply.answer_votes.vote')), 'rating']]
                    },
                    include: [{
                            model: UserModel,
                        }, {
                            model: AnswerVotes,
                            attributes: []
                        }
                    ]
                }, {
                    model: AnswerVotes,
                    attributes: []
                }],
                group: ['answers.id', 'user.id', 'reply.id' , 'reply->user.id', 'reply->answer_votes.answerId', 'reply->answer_votes.userId']
            })
        } catch (error){
            throwSequelizeError(error)
        }
    }

    async findById(id){
        try {
            return await this.Model.findByPk(id, {
                attributes: {
                    include: [[sequelize.fn('SUM', sequelize.col('answer_votes.vote')), 'rating']]
                },
                include: [{
                    model: UserModel,
                }, {
                    model: AnswerVotes,
                    attributes: []
                }],
                group: ['answers.id', 'user.id']
            })
        } catch (error){
            throwSequelizeError(error)
        }
    }

    async vote(answerId, userId, value){
        try {
            const instance = await this.VoteModel.findOne({
                where:  {
                    userId, 
                    answerId, 
                }
            });


            if (!instance) return this.VoteModel.create({
                userId, 
                answerId,
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

    async voteUp(answerId, userId){
        return this.vote(answerId, userId, 1)
    }

    async voteDown(answerId, userId){
        return this.vote(answerId, userId, -1)
    }
}

module.exports = new AnswerRepository(Model, AnswerVotes);