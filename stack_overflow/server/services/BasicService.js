
class Service{
    constructor(Repository){
        this.Repository = Repository
    }

    async findAll(options){
        return await this.Repository.findAll(options)
    }

    async findById(id, options){
        return await this.Repository.findById(id, options)
    }

    async create(data){
        return await this.Repository.create(data)
    }

    async delete(id){
        return await this.Repository.delete(id);
    }

    async update(id, data){
        return await this.Repository.update(id, data);
    }
}

module.exports = Service;