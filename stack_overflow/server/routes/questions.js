const express = require('express');
const router = express.Router();

const QuestionConntroller = require('../controllers/questions');

router.get('/', QuestionConntroller.getAll)

router.get('/:id', QuestionConntroller.getById);

module.exports = router;