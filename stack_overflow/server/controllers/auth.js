
const AuthService = require('../services/auth');
const controllerBuilder = require('../utils/helpers/controllerBuilder');


const AuthController = {
    register: controllerBuilder(AuthService.register, (req) => [req.body]),
    login: controllerBuilder(AuthService.login, (req) => [req.user || req.body]),
}


module.exports = AuthController;