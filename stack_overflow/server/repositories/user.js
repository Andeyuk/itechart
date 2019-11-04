const BasicRepository = require('./basicRepository');
const Model = require('../db/models/user');
const SequelizeErrorHandler = require('../utils/helpers/throwSequelizeError');
const processErrorHelper = require('../utils/helpers/processError');
const Op = require('sequelize').Op;

// REVIEW: зачем нужна эта функция, проще сразу в attributes записать объект
const _excludeAttributes = (arr) => {
    return {
        exclude: arr
    }
}
const attributes = _excludeAttributes(['password', 'createdAt', 'updatedAt']);


class UsersRepository extends BasicRepository{
    async getAll(){
        return await processErrorHelper(
            this.Model.findAll.bind(this.Model),
            SequelizeErrorHandler,
            {attributes}
        );
    }

    async getById(id){
        return await processErrorHelper(
            this.Model.findById.bind(this.Model),
            SequelizeErrorHandler,
            id,
            {attributes}
        );
    }

    async findByLogin(login){
        try {
            return await this.Model.findOne({
                where: {
                    [Op.or]: {
                        userName: login,
                        email: login
                    }
                },
                raw: true
            })
        } catch (error){
            SequelizeErrorHandler(error)
        }
    }

    async getByLogin(login){
        try {
            return await this.Model.findOne({
                attributes,
                where: {
                    [Op.or]: {
                        userName: login,
                        email: login
                    }
                },
                raw: true
            })
        } catch (error){
            SequelizeErrorHandler(error)
        }
    }
}

module.exports = new UsersRepository(Model);
