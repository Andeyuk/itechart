const SequelizeErrorHandler = require('../utils/handlers/sequelizeError');
const processErrorHelper = require('../utils/helpers/processError');

class Repository{
    constructor(Model){
        this.Model = Model;
    }

    async create(object, options){
        return await processErrorHelper(
            this.Model.create.bind(this.Model),
            SequelizeErrorHandler,
            object, options);
    }

    async update(id, data){
        const where = {id}
        return await processErrorHelper(
            this.Model.update.bind(this.Model), 
            SequelizeErrorHandler,
            data, {where});
    }

    async delete(id){
        const where = {id}
        return await processErrorHelper(
            this.Model.destroy.bind(this.Model), 
            SequelizeErrorHandler,
            {where});
    }

    async findById(id, options){
        return await processErrorHelper(
            this.Model.findByPk.bind(this.Model), 
            SequelizeErrorHandler,
            id, options);
    }

    async findAll(options){
        return await processErrorHelper(
            this.Model.findAll.bind(this.Model), 
            SequelizeErrorHandler,
            options);
    }

    async findOne(options){
        return await processErrorHelper(
            this.Model.findOne.bind(this.Model), 
            SequelizeErrorHandler,
            options);
    }

    async increment(id, column){
        const where = {id};
        return await processErrorHelper(
            this.Model.increment.bind(this.Model),
            SequelizeErrorHandler,
            column, {where});
    }

    async decrement(id, column){
        const where = {id};
        return await processErrorHelper(
            this.Model.decrement.bind(this.Model),
            SequelizeErrorHandler,
            column, {where});
    }
}

module.exports = Repository;