const controllerBuilder = require('../utils/controller');

class ControllerContainer{
    constructor(Service){
        this.findAll = controllerBuilder(Service.findAll, (req) => [req.query])
        this.findById = controllerBuilder(Service.findById, (req) => [req.params.id])
        this.update = controllerBuilder(Service.update, (req) => [req.params.id, req.body])
        this.create = controllerBuilder(Service.create, (req) => [req.body])
        this.delete = controllerBuilder(Service.delete, (req) => [req.params.id])
    }
}

module.exports = ControllerContainer;