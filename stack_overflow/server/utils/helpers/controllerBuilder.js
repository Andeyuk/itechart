
const controllerErrorHandler = require('../handlers/httpError');

const controllerBuilder = (promise, params) => async (req, res) => {
    const boundParams = params ? params(req, res) : [];
    console.log(promise, params)
    try {
        const json =  await promise(...boundParams);
        res.json(json)
    } catch (error){
        controllerErrorHandler(error, req, res);
    }
};
    

module.exports = controllerBuilder;