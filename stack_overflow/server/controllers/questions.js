const QuestionService = require('../services/question');
const controllerBuilder = require('../utils/helpers/controllerBuilder');

const BasicControllers = require('./basicController');


class QuestionController extends  BasicControllers{
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
    getById(){
        return controllerBuilder(
            this.Service.getById.bind(this.Service),
            (req) => [req.params.id]);
    }
}


module.exports = new QuestionController(QuestionService);