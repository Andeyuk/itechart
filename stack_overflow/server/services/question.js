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

    async acceptAnswer(id, answerId){
        //todo: move validation
        const question = await this.Repository.getById(id);
        if (!question) throw new createError.BadRequest(`No such a question`);
        if (question.status === 'closed') throw new createError.BadRequest(`This Question is closed`);

        const answer = await AnswerService.findById(answerId, {raw: true});

        if (!answer) throw new createError.BadRequest(`No such an answer`);

        if (answer.questionId !== +id) throw new createError.BadRequest(`This Answer(${answer.content}) is not related to the question(${question.header})`);
        if (answer.parrentId) throw new createError.BadRequest(`Replies can't be chosen as answers`);
        //if (answer.isAccepted !== false) throw new createError.BadRequest(`This Answer is already accepted`);
        console.log(question.status==='active', question.status=='active')
        if (question.status == 'active'){
            await question.update({
                status: 'answered',
                acceptedId: answerId
            });
            console.log(question.status)
        } else {
            await question.update({
                status: 'active',
                acceptedId: null
            });
        }

        return await question.save();
    }

    async closeQuestion(id){
        //todo: move validation
        const question = await this.Repository.getById(id);
        if (!question) throw new createError.BadRequest(`No such a question`);
        if (question.status !== 'active') throw new createError.BadRequest(`This Question is ${question.status}`);
        
        await this.Repository.update(id, {status: 'closed'});
        question.status = 'closed';

        return question;
    }

    async voteUp(questionId, userId){
        await this.Repository.voteUp(questionId, userId);
        console.log(userId);
        return await this.Repository.findById(questionId);
    }

    async voteDown(questionId, userId){
        await this.Repository.voteDown(questionId, userId)
        return await this.Repository.findById(questionId);
    }
}


module.exports = new Question(QuestionRepository);
