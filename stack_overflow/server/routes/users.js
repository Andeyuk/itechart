const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users');
const AuthMidlleware = require('../middlewares/auth');

router.get('/', UserController.findAll);

router.get('/:id', UserController.findById);

router.put(
    '/:id', 
    AuthMidlleware.authenticate('jwt'), 
    AuthMidlleware.hasSameId,
    UserController.update
);

router.delete(
    '/:id', 
    AuthMidlleware.authenticate('jwt'), 
    AuthMidlleware.hasSameId,
    UserController.delete
);



module.exports = router;