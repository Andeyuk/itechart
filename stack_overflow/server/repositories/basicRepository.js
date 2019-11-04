const SequelizeThrowError = require('../utils/helpers/throwSequelizeError');
const processErrorHelper = require('../utils/helpers/processError');

class Repository{
    constructor(Model){
        this.Model = Model;
    }

    async create(object, options){
        try {
            return await this.Model.create(object, options)
        } catch (error) {
            SequelizeThrowError(error)
        }
    }

    async update(id, data){
        const where = {id}
        try {
            return await this.Model.update(data, {where});
        } catch (error) {
            SequelizeThrowError(error)
        }

    }

    async delete(id){
        const where = {id}
        try {
            return await this.Model.destroy(data, {where});
        } catch (error) {
            SequelizeThrowError(error)
        }

    }

    async findById(id, options){
        try {
            return await this.Model.findByPk(id, options);
        } catch (error) {
            SequelizeThrowError(error)
        }
    }

    async findAll(options){
        try {
            return await this.Model.findAll( options);
        } catch (error) {
            SequelizeThrowError(error)
        }
    }

    async findOne(options){
        try {
            return await this.Model.findOne(options);
        } catch (error) {
            SequelizeThrowError(error)
        }
    }

    async increment(id, column){
        const where = {id};
        try {
            return await this.Model.increment(column, {where});
        } catch (error) {
            SequelizeThrowError(error)
        }
    }

    async decrement(id, column){
        const where = {id};
        try {
            return await this.Model.decrement(column, {where});
        } catch (error) {
            SequelizeThrowError(error)
        }
    }
}

module.exports = Repository;