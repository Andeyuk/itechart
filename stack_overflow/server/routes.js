const express = require('express');
const router = express.Router();


const auth = require('./routes/auth');
const users = require('./routes/users');
const questions = require('./routes/questions');
const answers = require('./routes/answers');
const generate = require('./routes/generate');




router.use('/auth', auth);
router.use('/users', users);
router.use('/questions', questions);
router.use('/answers', answers);
router.use('/generate', generate);


module.exports = router;