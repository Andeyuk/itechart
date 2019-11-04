const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users');
const AuthController = require('../controllers/auth');

router.get('/', 
    (req,res) => UserController.getAll(req,res)
);

router.get('/:id', 
    (req,res) => UserController.getById(req,res)
);

router.put(
    '/:id', 
    AuthController.authenticate('jwt'), 
    AuthController.checkHasSameId,
    (req,res) => UserController.update(req,res)
);

router.delete(
    '/:id', 
    AuthController.authenticate('jwt'), 
    AuthController.checkHasSameId,
    (req,res) => UserController.delete(req,res)
);



module.exports = router;