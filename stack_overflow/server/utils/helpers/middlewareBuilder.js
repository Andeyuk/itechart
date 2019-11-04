
const middlewareErrorHandler = require('../handlers/httpError');

const middlewareBuilder = (promise, params) => async (req, res, next) => {
    const boundParams = params ? params(req, res) : [];
    try {
        await promise(...boundParams);
        next();
    } catch (error){
        middlewareErrorHandler(error, res);
    }
};


module.exports = middlewareBuilder;