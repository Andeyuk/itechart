


const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');


const app = express();

require('./db/init');
require('./config/passport/local');
require('./config/passport/jwt');

const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

//const routes = require('./routes/index');
const auth = require('./routes/auth')
const dishes = require('./routes/dishes');
const profile = require('./routes/profile');
const operations = require('./routes/operations');


//app.use('/', routes);
app.use('/auth', auth);
app.use('/dishes', dishes);
app.use('/profile', profile);
app.use('/operations', operations);


module.exports = app;
