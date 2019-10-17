const BasicRepository = require('./basicRepository');
const Model = require('../db/models/user');

module.exports = new BasicRepository(Model);