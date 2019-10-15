const User = require('../models/user');
const Op = require('sequelize').Op;

function bindQueriesToModel(Model){
    Model.getUserByLogin = function(login){
        return this.findOne({
            where: {
                [Op.or]: {
                    userName:login,
                    email:login
                }
            }
        })
    }

    Model.getUserById = function(id){
        return this.findByPk(id)
    }


    Model.createUser = function(obj){
        return this.create({
            obj
        })
    }

    Model.destroyUser = async function(id){
        const user = await User.findByPk(id);
        return await user.destroy();
    }
}

module.exports = bindQueriesToModel;