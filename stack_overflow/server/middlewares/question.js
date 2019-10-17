const middlewareBuilder = require('../utils/middleware');
const QuestionService = require('../services/auth');

const AuthMiddleware = {
    addViewIfNessesary: middlewareBuilder(QuestionService.addViewIfNessesary, (req) => [req.user])
}

module.exports = AuthMiddleware;