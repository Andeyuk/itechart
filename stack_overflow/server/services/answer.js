const createError = require('http-errors');
const AnswerReposiory = require('../repositories/answer');
const QuestionRepository = require('../repositories/question');
const BasicService = require('./BasicService');


class Answer extends BasicService{
    constructor(Repository){
        super(Repository);
        // ты передаешь класс, но не создаешь объект этого класса, вызовы в методах не сработают
        this.Repository = Repository
    }


    async create(data){
        const answer = await this.Repository.create(data, {raw: true});
        if (answer.parentId) return await this.Repository.getById(answer.parentId);

        const question = await QuestionRepository.getById(answer.questionId);

        if(question.status !== 'closed')
            return question

        await this.Repository.delete(answer.id);
        throw new createError.BadRequest(`Question is ${question.status}`)
    }

    async findRepliesByQuestionId(id){
        return await this.Repository.findRepliesByQuestionId(id)
    }

    async findByQuestionId(id){
        return await this.Repository.findByQuestionId(id)
    }

    async getById(id){
        return await this.Repository.getById(id)
    }

    async voteUp(answerId, userId){
        await this.Repository.voteUp(answerId, userId);
        return this.Repository.findById(answerId);
    }

    async voteDown(answerId, userId){
        await this.Repository.voteDown(answerId, userId);
        return this.Repository.findById(answerId);
    }

}

// получается, что у тебя всегда один экземпляр сервиса на приложение
// и получается dependency injection не до конца.
// Зачем передавать репозиторий в конструктор, если он все равно всегда одного типа, почему бы тогда просто не создавать новый в конструкторе?
module.exports = new Answer(AnswerReposiory);
