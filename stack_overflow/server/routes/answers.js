const express = require('express');
const router = express.Router();

const AnswerController = require('../controllers/answers');
const AuthMidlleware = require('../middlewares/auth');

router.get('/', AnswerController.findAll);

router.get('/:id', AnswerController.findById);

router.post('/', AnswerController.create);

router.put('/:id', 
    AuthMidlleware.authenticate('jwt'), 
    AuthMidlleware.hasSameId, 
    AnswerController.update
);

router.delete('/:id', 
    AuthMidlleware.authenticate('jwt'), 
    AuthMidlleware.hasSameId, 
    AnswerController.delete
);

router.put(
    '/:id/upvote', 
    AuthMidlleware.authenticate('jwt'), 
    AnswerController.upVote
);

router.put(
    '/:id/downvote',
    AuthMidlleware.authenticate('jwt'), 
    AnswerController.downVote
);


module.exports = router;