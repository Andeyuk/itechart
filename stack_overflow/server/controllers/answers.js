const AnswerService = require('../services/answer');
const controllerBuilder = require('../utils/helpers/controllerBuilder');

const BasicControllers = require('./basicController');


class AnswerController extends  BasicControllers{
    upVote(){
        // По сути эта обертка лишь делает try-catch, в чем плюс ее использования?
        // откуда ты взял такой подход?
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
