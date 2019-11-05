const AnswerService = require('../services/answer');
const controllerBuilder = require('../utils/helpers/controllerBuilder');

const BasicControllers = require('./basicController');

const httpErrorHandler = require('../utils/handlers/httpError');

class AnswerController extends  BasicControllers{
    async voteUp(req, res){
        try {
            const answer = await this.Service.voteUp(req.params.id, req.user.id);
            res.json(answer);
        } catch(error) {
            httpErrorHandler(error, res);
        }
    }

    async voteDown(req, res){
        try {
            const answer = await this.Service.voteDown(req.params.id, req.user.id)
            res.json(answer);
        } catch(error) {
            httpErrorHandler(error, res);
        }
    }


    async findByQuestionId(req, res){
        try {
            const answer = await AnswerService.findByQuestionId(req.params.id);
            res.json(answer);
        } catch(error) {
            httpErrorHandler(error, res);
        }
    }

    async getById(req, res){
        try {
            const answer = await AnswerService.getById(req.params.id);
            res.json(answer);
        } catch(error) {
            httpErrorHandler(error, res);
        }
    }

}


module.exports = new AnswerController(AnswerService);
