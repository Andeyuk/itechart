const middlewareBuilder = require('../utils/helpers/middlewareBuilder');
const AuthService = require('../services/auth');

const AuthMiddleware = {
    authenticate: (strategy) => AuthService.authenticate(strategy),
    hasRole: (role) => middlewareBuilder(AuthService.hasRole, (req => [req.userRole, role])),
    checkhasSameId: middlewareBuilder(AuthService.checkHasSameId, (req) => [req.user.id, req.params.id]),
    checkIsOwner: (service) => middlewareBuilder(
        AuthService.checkIsOwner, 
        (req) => [req.user.id, req.params.id, service]),
}

module.exports = AuthMiddleware;