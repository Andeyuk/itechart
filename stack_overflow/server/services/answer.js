
const AnswerReposiory = require('../repositories/answer');
const BasicService = require('./BasicService');


class Answer extends BasicService{
    constructor(Repository){
        super(Repository);
        // ты передаешь класс, но не создаешь объект этого класса, вызовы в методах не сработают
        this.Repository = Repository
    }

    async downVote(id){
        return await this.Reposiory.increment(id, 'downVotes');
    }

    async upVote(id){
        return await this.Reposiory.increment(id, 'upVotes');
    }

}

// получается, что у тебя всегда один экземпляр сервиса на приложение
// и получается dependency injection не до конца.
// Зачем передавать репозиторий в конструктор, если он все равно всегда одного типа, почему бы тогда просто не создавать новый в конструкторе?
module.exports = new Answer(AnswerReposiory);
