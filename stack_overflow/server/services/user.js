const UserRepository = require('../repositories/user');
const createError = require('http-errors');
const Sequelize = require('sequelize');
const Op = require('sequelize').Op;

const User = {

    async findByLogin(login, options){
        const {
            raw = true,
            attributes = {
                exclude: ['createdAt', 'updatedAt']
            }
        } = options || {};
        return (
            await UserRepository.findOne({
                attributes,
                where: {
                    [Op.or]: {
                        userName:login,
                        email:login
                    }
                },
                raw
            })
        )
    },

    async findAll(options){
        return (
            await UserRepository.findAll({
                options
            })
        )
    },

    async findById(id){
        return await UserRepository.findById(id)
    },

    async update(id, data){
        return await UserRepository.update(id, data);
    },

    async delete(id){
        return await UserRepository.delete(id);
    },

    async create(data){
        try {
            return await UserRepository.create(data);
        } catch (err){
            if (err instanceof Sequelize.UniqueConstraintError || 
                err instanceof Sequelize.ValidationErrorItem){
                throw new createError.Conflict(err.errors[0].message)
            }
                
        }
    }    
}

module.exports = User;