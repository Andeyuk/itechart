const BasicRepository = require('./basicRepository');
const Model = require('../db/models/answer');
const Sequelize = require('sequelize');
const SequelizeErrorHandler = require('../utils/handlers/sequelizeError');

class AnswerRepository extends BasicRepository{

}

module.exports = new AnswerRepository(Model);