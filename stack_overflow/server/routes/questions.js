const express = require('express');
const router = express.Router();

const QuestionConntroller = require('../controllers/questions');
const AuthMidlleware = require('../middlewares/auth');


router.get(
    '/',
    QuestionMiddleware.addViewIfNessesary,
    QuestionConntroller.findAll)

router.get('/:id', QuestionConntroller.findById);

router.post('/', QuestionConntroller.create);

router.put(
    '/:id', 
    AuthMidlleware.authenticate('jwt'), 
    AuthMidlleware.hasSameId, 
    QuestionConntroller.update
);

router.delete(
    '/:id', 
    AuthMidlleware.authenticate('jwt'), 
    AuthMidlleware.hasSameId, 
    QuestionConntroller.delete
);

router.put('/:id/upvote',
    AuthMidlleware.authenticate('jwt'), 
    QuestionConntroller.upVote
);

router.put('/:id/downvote', 
    AuthMidlleware.authenticate('jwt'), 
    QuestionConntroller.downVote
);


module.exports = router;