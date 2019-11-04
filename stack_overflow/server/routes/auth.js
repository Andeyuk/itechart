const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth');
const AuthServices = require('../services/auth');



router.post(
    '/register',
    // REVIEW: зачем выносить эту логику в middleware? чем это лучше размещения ее в сервисе?

    AuthController.register);

router.post(
    '/login',
    AuthServices.authenticate('local'),
    AuthController.login
);


module.exports = router;
