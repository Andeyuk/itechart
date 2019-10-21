const middlewareBuilder = require('../utils/helpers/middlewareBuilder');
const UserValidator = require('../utils/validators/user');

const UserMiddleware = {
    validateCreation: middlewareBuilder(UserValidator.validateCreation, (req) => [req.body])
}

module.exports = UserMiddleware;