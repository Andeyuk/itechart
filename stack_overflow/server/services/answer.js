
const AnswerReposiory = require('../repositories/answer');
const BasicService = require('./BasicService');


class Answer extends BasicService{
    constructor(Repository){
        super(Repository);
        this.Repository = Repository
    }

    async downVote(id){
        return await this.Reposiory.increment(id, 'downVotes');
    }

    async upVote(id){
        return await this.Reposiory.increment(id, 'upVotes');
    }

}


module.exports = new Answer(AnswerReposiory);