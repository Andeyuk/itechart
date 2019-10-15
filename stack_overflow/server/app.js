


const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const app = express();


require('./db/init');
require('./config/passport/local');
require('./config/passport/jwt');


app.use(cors());
app.use(logger('dev'));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const routes = require('./routes');
app.use('/', routes);

module.exports = app;
