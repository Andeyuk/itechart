
const createError = require('http-errors');
const Validator = require('./validator');

const QuestionValidators = {
    validateCreation: (data) => {
        const {firstName, lastName, userName, email, password, role} = data;
        Validator.checkExists(firstName, lastName, userName, email, password);
        if (role)
            throw new createError.Forbidden();
    }
}

module.exports = QuestionValidators;