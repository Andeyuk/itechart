
const UserService = require('../services/user');
const controllerBuilder = require('../utils/controller');

const ControllerContainer = require('./basicController');
const BasicControllers = new ControllerContainer(UserService);

const UserController = {
    ...BasicControllers
}


module.exports = UserController;