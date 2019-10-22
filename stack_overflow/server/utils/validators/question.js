
const createError = require('http-errors');
const AllowedStatuses = ['closed', 'answered', 'active'];
const Validator = require('./validator');

const QuestionValidators = {
    validateCreation: (data) => {
        const {header, content, upVotes = 0, downVotes = 0, status = 'active'} = data;
        // посмотри на существующие библиотеки для валидации, может будет проще использовать их
        Validator.checkExists(header, content);
        Validator.checkType(upVotes, 'numer');
        Validator.checkType(downVotes, 'numer');
        Validator.checkType(status, 'string');
        if (AllowedStatuses.some(el => el === status))
            throw new createError.UnprocessableEntity();
    }
}

module.exports = QuestionValidators;
