
const AnswerReposiory = require('../repositories/answer');
const QuestionRepository = require('../repositories/question');
const BasicService = require('./BasicService');


class Answer extends BasicService{
    constructor(Repository){
        super(Repository);
        // ты передаешь класс, но не создаешь объект этого класса, вызовы в методах не сработают
        this.Repository = Repository
    }

    async downVote(id){
        return await this.Repository.increment(id, 'downVotes');
    }

    async upVote(id){
        return await this.Repository.increment(id, 'upVotes');
    }

    async create(data){
        const answer = await this.Repository.create(data, {raw: true});
        if (answer.parentId) return await this.Repository.getById(answer.parentId);

        return QuestionRepository.getById(answer.questionId);
    }

    async findByQuestionId(id){
        return await this.Repository.findByQuestionId(id)
    }

}

// получается, что у тебя всегда один экземпляр сервиса на приложение
// и получается dependency injection не до конца.
// Зачем передавать репозиторий в конструктор, если он все равно всегда одного типа, почему бы тогда просто не создавать новый в конструкторе?
module.exports = new Answer(AnswerReposiory);
