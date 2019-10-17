const AnswerService = require('../services/answer');
const controllerBuilder = require('../utils/controller');

const ControllerContainer = require('./basicController');
const BasicControllers = new ControllerContainer(AnswerService);

const AnswerController = {
    ...BasicControllers,
    upVote: controllerBuilder(AnswerService.upVote, (req) => [req.params.id]),
    downVote: controllerBuilder(AnswerService.downVote, (req) => [req.params.id]),
}


module.exports = AnswerController;