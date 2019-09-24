const Sequelize = require('sequelize');
const config = require('../config').db;

const sequelize = new Sequelize(config.URL);


sequelize
    .authenticate()
    .then(() => {
    console.log('db connected.');
    })
    .catch(err => {
    console.error('Unable to connect to the database:', err);
    });
    
sequelize.sync()

module.exports = sequelize;