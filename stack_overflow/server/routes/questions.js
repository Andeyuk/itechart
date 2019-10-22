const express = require('express');
const router = express.Router();

const QuestionConntroller = require('../controllers/questions');
const AuthMidlleware = require('../middlewares/auth');
const QuestionMiddleware = require('../middlewares/question');

router.get(
    '/',
    //QuestionMiddleware.addViewIfNessesary,
    QuestionConntroller.findAll())

router.get('/:id', QuestionConntroller.getById());

router.post(
    '/',
    // REVIEW: зачем выносить эту логику в middleware? чем это лучше размещения ее в сервисе?
    QuestionMiddleware.validateCreation,
    // REVIEW: разве тут нужен вызов метода? при старте проекта у меня рурается нода
    // Route.put() requires a callback function but got a [object Undefined]
    // как у тебя получается запустить проект? :)
    QuestionConntroller.create());

router.put(
    '/:id',
    AuthMidlleware.authenticate('jwt'),
    QuestionConntroller.update()
);

router.delete(
    '/:id',
    AuthMidlleware.authenticate('jwt'),
    QuestionConntroller.delete()
);

router.put('/:id/upvote',
    AuthMidlleware.authenticate('jwt'),
    QuestionConntroller.upVote()
);

router.put('/:id/downvote',
    AuthMidlleware.authenticate('jwt'),
    QuestionConntroller.downVote()
);


module.exports = router;
