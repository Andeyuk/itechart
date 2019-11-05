
const UserService = require('../services/user');
const httpErrorHandler = require('../utils/handlers/httpError');

const BasicControllers = require('./basicController');


class UserController extends  BasicControllers{
    async getAll(req, res){
        try {
            const answers = await this.Service.getAll();
            res.json(answers);
        } catch(error) {
            httpErrorHandler(error, res);
        }
    }

    async getById(req, res){
        try {
            const question = await this.Service.getById(res.params.id);
            res.json(question);
        } catch(error) {
            httpErrorHandler(error, res);
        }
    }
}


module.exports = new UserController(UserService);