const middlewareBuilder = require('../utils/middleware');
const AuthService = require('../services/auth');

const AuthMiddleware = {
    authenticate: (strategy) => AuthService.authenticate(strategy),
    hasRole: (role) => middlewareBuilder(AuthService.hasRole(role)),
    hasSameId: middlewareBuilder(AuthService.hasSameId, (req) => [req.user.id, req.params.id]),
}

module.exports = AuthMiddleware;