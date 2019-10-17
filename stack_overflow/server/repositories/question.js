const BasicRepository = require('./basicRepository');
const Model = require('../db/models/question');

module.exports = new BasicRepository(Model);