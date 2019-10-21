const AnswerService = require('../services/answer');
const controllerBuilder = require('../utils/helpers/controllerBuilder');

const BasicControllers = require('./basicController');


class AnswerController extends  BasicControllers{
    upVote(){
        return controllerBuilder(
            this.Service.upVote.bind(this.Service), 
            (req) => [req.params.id]);
    } 
    downVote(){
        return controllerBuilder(
            this.Service.downVote.bind(this.Service), 
            (req) => [req.params.id]);
    } 
    getAll(){
        return controllerBuilder(this.Service.getAll.bind(this.Service))
    }
}


module.exports = new AnswerController(AnswerService);