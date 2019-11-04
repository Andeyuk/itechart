
const AuthService = require('../services/auth');
const middlewareBuilder = require('../utils/helpers/middlewareBuilder');
const controllerBuilder = require('../utils/helpers/controllerBuilder');


const AuthController = {
    register: controllerBuilder(AuthService.register, (req) => [req.body]),
    login: controllerBuilder(AuthService.login, (req) => [req.user || req.body]),
    authenticate: (strategy) => AuthService.authenticate(strategy),
    hasRole: (role) => middlewareBuilder(AuthService.hasRole, (req => [req.userRole, role])),
    checkHasSameId: middlewareBuilder(AuthService.checkHasSameId, (req) => [req.user.id, req.params.id]),
    checkIsOwner: (service) => middlewareBuilder(AuthService.checkIsOwner, (req) => [req.user.id, req.params.id, service]),
}


module.exports = AuthController;