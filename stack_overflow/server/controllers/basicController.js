const controllerBuilder = require('../utils/helpers/controllerBuilder');

class ControllerContainer{
    constructor(Service){
        this.Service = Service;
    }
    findAll(){
        return controllerBuilder(
            this.Service.findAll.bind(this.Service),
            (req) => [req.query])
    } 
    findById(){
       return controllerBuilder(
           this.Service.findById.bind(this.Service), 
           (req) => [req.params.id])
    }
    update(){
        return controllerBuilder(
            this.Service.update.bind(this.Service), 
            (req) => [req.params.id, req.body])
    }
    create(){
        return controllerBuilder(
            this.Service.create.bind(this.Service), 
            (req) => [req.body])
    }
    delete(){
        return controllerBuilder(
            this.Service.delete.bind(this.Service), 
            (req) => [req.params.id])
    }
}

module.exports = ControllerContainer;