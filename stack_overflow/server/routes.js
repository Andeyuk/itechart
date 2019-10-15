const express = require('express');
const router = express.Router();


const auth = require('./routes/auth');
const users = require('./routes/users');
const questions = require('./routes/questions');
const answers = require('./routes/answers');



router.use('/auth', auth);
router.use('/users', users);
router.use('/questions', questions);
router.use('/answers', answers);


module.exports = router;