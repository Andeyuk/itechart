const QuestionService = require('../services/question');
const httpErrorHandler = require('../utils/handlers/httpError');

const BasicControllers = require('./basicController');


class QuestionController extends  BasicControllers{ 
    async getById(req, res){
        try {
            const question = await this.Service.getById(req.params.id);
            res.json(question);
        } catch(error) {
            httpErrorHandler(error);
        }
    }

    async upVote(req, res){
        try {
            const question = await this.Service.upVote(req.params.id)
            res.json(question);
        } catch(error) {
            httpErrorHandler(error);
        }
    }

    async downVote(req, res){
        try {
            const question = await this.Service.downVote(req.params.id)
            res.json(question);
        } catch(error) {
            httpErrorHandler(error);
        }
    }

    async acceptAnswer(req, res){
        try {
            const question = await this.Service.acceptAnswer(req.params.id, req.body.answerId, req.user.id);
            console.log(question);
            res.json(question);
        } catch (error) {
            httpErrorHandler(error, res);
        }
    }


}


module.exports = new QuestionController(QuestionService);