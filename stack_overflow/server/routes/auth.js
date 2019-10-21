const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth');
const AuthServices = require('../services/auth');

const UserMiddleware = require('../middlewares/user');


router.post(
    '/register',
    UserMiddleware.validateCreation,
    AuthController.register);

router.post(
    '/login', 
    AuthServices.authenticate('local'), 
    AuthController.login
);


module.exports = router;