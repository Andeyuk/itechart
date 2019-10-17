const QuestionService = require('../services/question');
const controllerBuilder = require('../utils/controller');

const ControllerContainer = require('./basicController');
const BasicControllers = new ControllerContainer(QuestionService);

const QuestionController = {
    ...BasicControllers,
    upVote: controllerBuilder(QuestionService.upVote, (req) => [req.params.id]),
    downVote: controllerBuilder(QuestionService.downVote, (req) => [req.params.id]),
}


module.exports = QuestionController;