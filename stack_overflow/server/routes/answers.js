const express = require('express');
const router = express.Router();

const AnswerController = require('../controllers/answers');

router.get('/', AnswerController.getAll);

router.get('/:id', AnswerController.getById);



module.exports = router;