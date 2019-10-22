const createError = require('http-errors');
const Sequelize = require('sequelize');

// REVIEW: ошибка тут не хендлится, а создается, так что лучше назвать метод throwSequelizeError
const handleError = (error) => {
    if (error instanceof Sequelize.UniqueConstraintError ||
        error instanceof Sequelize.ValidationErrorItem){
        throw new createError.Conflict(error.errors[0].message);
    } else throw new createError.InternalServerError('Database Error');
}

module.exports = handleError;
