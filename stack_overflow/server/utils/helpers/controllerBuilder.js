
const controllerErrorHandler = require('../handlers/httpError');

const controllerBuilder = (promise, params) => async (req, res) => {
    const boundParams = params ? params(req, res) : [];
    console.log(promise, params)
    try {
        const json =  await promise(...boundParams);
        // REVIEW: это метод из sequelize. Получается, ято у тебя слой контроллеров знает о слое доступа к данным.
        // Надо из сервиса сразу возвращать результат json
        res.json(json)
    } catch (error){
        controllerErrorHandler(error, res);
    }
};


module.exports = controllerBuilder;
