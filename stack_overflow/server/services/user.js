const Model = require('../db/models/user');
const createError = require('http-errors');
const Op = require('sequelize').Op;

const User = {

    async getByLogin(login, options){
        const {
            raw = true,
            attributes = {
                exclude: ['createdAt', 'updatedAt']
            }
        } = options || {};
        return (
            await Model.findOne({
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

    async getById(id){
        return await  Model.findByPk(id)
    },


    async create(obj){
        try {
            const user = await Model.create(obj);
            return user;
        } catch (err){
            throw new createError.Conflict('User Already Exists');
        } 
    },

    async destroy(id){
        const user = await this.getById(id);
        return await user.destroy();
    }
}

module.exports = User;