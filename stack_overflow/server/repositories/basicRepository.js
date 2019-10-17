
class Reporitory{

    constructor(Model){
        this.Model = Model;
    }

    async create(object){
        return await this.Model.create(object);
    }

    async update(id, data){
        return await this.Model.update(data, {
            where: {
                id
            }
        })
    }

    async delete(id){
        return await this.Model.destroy({
            where: {
                id
            }
        })
    }

    async findById(id, options){
        return await this.Model.findByPk(id, options)
    }

    async findAll(options){
        return await this.Model.findAll({
            options
        })
        
    }

    async findOne(options){
        return await this.Model.findOne(options);
    }

    async increment(id, column){
        return await this.Model.increment(column, {
            where: {
                id
            }
        });
    }

    async decrement(id, column){
        return await this.Model.decrement(column, {
            where: {
                id
            }
        });
    }
    
}

module.exports = Reporitory;