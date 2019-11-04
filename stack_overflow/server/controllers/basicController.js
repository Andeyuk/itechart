
const httpErrorHandler = require('../utils/handlers/httpError');

class ControllerContainer{
    constructor(Service){
        this.Service = Service;
    }

    async findAll(req, res){
        try {
            const json = await this.Service.findAll(req.query);
            res.json(json);
        } catch(error) {
            httpErrorHandler(error);
        }
    } 

    async findById(req, res){
        try {
            const json = await this.Service.findById(req.params.id);
            res.json(json);
        } catch(error) {
            httpErrorHandler(error);
        }
    }

    async update(req, res){
        try {
            const json = await this.Service.update(req.params.id, req.body);
            res.json(json);
        } catch(error) {
            httpErrorHandler(error);
        }
    }

    async create(req, res){
        try {
            const json = await this.Service.create({...req.body, userId: req.user.id});
            res.json(json);
        } catch(error) {
            httpErrorHandler(error, res);
        }
    }

    async delete(req, res){
        try {
            const json = await this.Service.delete(req.params.id);
            res.json(json);
        } catch(error) {
            httpErrorHandler(error, res);
        }
    }
}

module.exports = ControllerContainer;