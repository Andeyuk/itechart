const middlewareBuilder = require('../utils/helpers/middlewareBuilder');
const QuestionService = require('../services/auth');
const QuestionValidator = require('../utils/validators/question');

const QuestionMiddleware = {
    addViewIfNessesary: middlewareBuilder(QuestionService.addViewIfNessesary, (req) => [req.user]),
    validateCreation: middlewareBuilder(QuestionValidator.validateCreation, (req) => [req.body])
}

module.exports = QuestionMiddleware;