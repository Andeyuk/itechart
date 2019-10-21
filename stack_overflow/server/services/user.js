const UserRepository = require('../repositories/user');
const BasicService = require('./BasicService');

class User extends BasicService{
    constructor(Repository){
        super(Repository);
        this.Repository = Repository
    }

    async findByLogin(login){
        return await this.Repository.findByLogin(login);
    }

    async getByLogin(){
        return await this.Repository.getByLogin(login);
    }

    async getAll(){
        return await this.Repository.getAll();
    }

    async getById(id){
        return await this.Repository.getById(id);
    }
  
}

module.exports = new User(UserRepository);