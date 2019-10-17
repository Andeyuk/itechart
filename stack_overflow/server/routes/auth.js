const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth');
const AuthServices = require('../services/auth');


router.post('/register', AuthController.register);

router.post(
    '/login', 
    AuthServices.authenticate('local'), 
    AuthController.login
);


module.exports = router;