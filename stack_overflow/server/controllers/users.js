
const UserService = require('../services/user');
const controllerBuilder = require('../utils/helpers/controllerBuilder');

const BasicControllers = require('./basicController');


class UserController extends  BasicControllers{
    getAll(){
        return controllerBuilder(this.Service.getAll.bind(this.Service))
    }

    getById(){
        return controllerBuilder(
            this.Service.getById.bind(this.Service),
            (req) => [req.params.id])
    }
}


module.exports = new UserController(UserService);