const express = require('express');
const router = express.Router();

const AnswerController = require('../controllers/answers');
const AuthController = require('../controllers/auth');

router.get(
    '/',
    (req,res) => AnswerController.findAll(req,res));

router.get(
    '/:id',
    (req,res) => AnswerController.findById(req,res)
);

router.post(
    '/',
    AuthController.authenticate('jwt'), 
    (req,res) => AnswerController.create(req,res)
);

router.put('/:id', 
    AuthController.authenticate('jwt'), 
    (req,res) => AnswerController.update(req,res)
);

router.delete('/:id', 
    AuthController.authenticate('jwt'), 
    (req,res) =>  AnswerController.delete(req,res)
);

router.put(
    '/:id/upvote', 
    AuthController.authenticate('jwt'), 
    (req,res) => AnswerController.upVote(req,res)
);

router.put(
    '/:id/downvote',
    AuthController.authenticate('jwt'), 
    (req,res) => AnswerController.downVote(req,res)
);


module.exports = router;