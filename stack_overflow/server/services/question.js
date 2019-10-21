
const QuestionRepository = require('../repositories/question');
const BasicService = require('./BasicService');


class Question extends BasicService{
    constructor(Repository){
        super(Repository);
        this.Repository = Repository
    }

    async addViewIfNessesary(){
        //todo
    }

    async getById(id){
        return await this.Repository.getById(id)
    }

    async downVote(id){
        return await this.Repository.increment(id, 'downVotes');
    }

    async upVote(id){
        return await this.Repository.increment(id, 'upVotes');
    }

}


module.exports = new Question(QuestionRepository);
