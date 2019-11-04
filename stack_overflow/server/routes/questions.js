const express = require('express');
const router = express.Router();

const QuestionConntroller = require('../controllers/questions');
const AnswerController = require('../controllers/answers');
const AuthController = require('../controllers/auth');

router.get(
    '/',
    (req,res) => QuestionConntroller.findAll(req,res)
)

router.get('/:id', 
    (req,res) => QuestionConntroller.getById(req,res)
);

router.get(
    '/:id/answers',
    (req,res) => AnswerController.findByQuestionId(req,res)
)

router.post(
    '/',
    // REVIEW: зачем выносить эту логику в middleware? чем это лучше размещения ее в сервисе?

    // REVIEW: разве тут нужен вызов метода? при старте проекта у меня рурается нода
    // Route.put() requires a callback function but got a [object Undefined]
    // как у тебя получается запустить проект? :)
    AuthController.authenticate('jwt'),
    (req,res) => QuestionConntroller.create(req,res));

router.put(
    '/:id',
    AuthController.authenticate('jwt'),
    (req,res) => QuestionConntroller.update(req,res)
);

router.put(
    '/:id/accept',
    AuthController.authenticate('jwt'),
    (req,res) => QuestionConntroller.acceptAnswer(req, res)
);

router.delete(
    '/:id',
    AuthController.authenticate('jwt'),
    (req,res) => QuestionConntroller.delete(req,res)
);

router.put('/:id/upvote',
    AuthController.authenticate('jwt'),
    (req,res) => QuestionConntroller.upVote(req,res)
);

router.put('/:id/downvote',
    AuthController.authenticate('jwt'),
    (req,res) => QuestionConntroller.downVote(req,res)
);


module.exports = router;
