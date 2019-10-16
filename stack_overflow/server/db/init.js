const Sequelize = require('sequelize');
const config = require('../config').db;

const db = new Sequelize(config.URL);


db
    .authenticate()
    .then(() => {
    console.log('db connected.');
    })
    .catch(err => {
    console.error('Unable to connect to the database:', err);
    });

/*db.sync({
    force: true
})*/

module.exports = db;