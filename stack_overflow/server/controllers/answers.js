const AnswerService = require('../services/answer');
const controllerBuilder = require('../utils/helpers/controllerBuilder');

const BasicControllers = require('./basicController');

const httpErrorHandler = require('../utils/handlers/httpError');

class AnswerController extends  BasicControllers{
    async upVote(req, res){
        try {
            const answer = await this.Service.upVote()
            res.json(answer);
        } catch(error) {
            httpErrorHandler(error);
        }
    }

    async downVote(req, res){
        try {
            const answer = await this.Service.downVote(req.params.id)
            res.json(answer);
        } catch(error) {
            httpErrorHandler(error);
        }
    }

    async getAll(req, res){
        try {
            const answers = await this.Service.getAll(req.query);
            res.json(answers);
        } catch(error) {
            httpErrorHandler(error);
        }
    }

    async findByQuestionId(req, res){
        try {
            const answer = await AnswerService.findByQuestionId(req.params.id);
            console.log(answer);
            res.json(answer);
        } catch(error) {
            httpErrorHandler(error, res);
        }
    }


}


module.exports = new AnswerController(AnswerService);
