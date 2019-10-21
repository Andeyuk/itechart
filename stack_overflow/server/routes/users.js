const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users');
const AuthMidlleware = require('../middlewares/auth');

router.get('/', UserController.getAll());

router.get('/:id', UserController.getById());

router.put(
    '/:id', 
    AuthMidlleware.authenticate('jwt'), 
    AuthMidlleware.checkHasSameId,
    UserController.update()
);

router.delete(
    '/:id', 
    AuthMidlleware.authenticate('jwt'), 
    AuthMidlleware.checkHasSameId,
    UserController.delete()
);



module.exports = router;