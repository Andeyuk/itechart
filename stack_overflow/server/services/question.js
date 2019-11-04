const AnswerService = require('./answer');
const QuestionRepository = require('../repositories/question');
const BasicService = require('./BasicService');
const createError = require('http-errors');

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

    async acceptAnswer(id, answerId, userId){
        //todo: move validation
        const question = await this.Repository.getById(id);
        if (!question) throw new createError.BadRequest(`No such a question`);
        if (question.userId !== userId) throw new createError.Forbidden();
        //if (question.status !== 'active') throw new createError.BadRequest(`This Question is ${question.status}`);

        const answer = await AnswerService.findById(answerId, {raw: true});

        if (!answer) throw new createError.BadRequest(`No such an answer`);

        if (answer.questionId !== +id) throw new createError.BadRequest(`This Answer(${answer.content}) is not related to the question(${question.header})`);
        if (answer.parrentId) throw new createError.BadRequest(`Replies can't be chosen as answers`);
        //if (answer.isAccepted !== false) throw new createError.BadRequest(`This Answer is already accepted`);
    
        
        const acceptedAnswer = AnswerService.update(answerId, {isAccepted: true});
        const answeredQuestion = this.Repository.update(id, {status: 'answered'});

        await Promise.all([acceptedAnswer, answeredQuestion]);

        const outDatedAnswer = question.answers.find(answer => answer.dataValues.id === +answerId);
        outDatedAnswer.isAccepted = true;
        question.status = 'answered';

        return question;
    }

    async closeAnswer(id){
        //todo: move validation
        const question = await this.Repository.getById(id);
        if (!question) throw new createError.BadRequest(`No such a question`);
        if (question.status !== 'active') throw new createError.BadRequest(`This Question is ${question.status}`);
        
        await this.Repository.update(id, {status: 'closed'});
        question.status = 'closed';

        return question;
    }
}


module.exports = new Question(QuestionRepository);
