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
    QuestionMiddleware.validateCreation,
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